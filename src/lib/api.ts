import axios from "axios";

/**
 * API client | thin wrapper around the GR Class backend.
 * Base URL is hardcoded as per instructions.
 */
const API_BASE = "https://api.grclass.com";

const api = axios.create({
  baseURL: `${API_BASE}/api/v1`,
  headers: {
    Accept: "application/json",
  },
});

/**
 * Extract the most useful error message from a backend response.
 * Handles common patterns: { message }, { error }, { errors: [...] }, { errors: { field: [...] } }
 */
export function extractErrorMessage(data: any, fallback = "Something went wrong."): string {
  if (!data) return fallback;

  // Direct message string
  if (typeof data.message === "string" && data.message.trim()) {
    return data.message;
  }

  // Direct error string
  if (typeof data.error === "string" && data.error.trim()) {
    return data.error;
  }

  // Array of error strings: { errors: ["email is required", "name is required"] }
  if (Array.isArray(data.errors) && data.errors.length > 0) {
    const messages = data.errors
      .map((e) => (typeof e === "string" ? e : (e as any)?.message || (e as any)?.msg || ""))
      .filter(Boolean);
    return messages.length > 0 ? messages.join(". ") : fallback;
  }

  // Object of field errors: { errors: { email: ["is required"], name: ["too short"] } }
  if (data.errors && typeof data.errors === "object" && !Array.isArray(data.errors)) {
    const messages = Object.entries(data.errors)
      .map(([field, msgs]) => {
        const msgStr = Array.isArray(msgs) ? msgs.join(", ") : String(msgs);
        return `${field}: ${msgStr}`;
      });
    return messages.length > 0 ? messages.join(". ") : fallback;
  }

  // Validation errors array: { detail: [{ loc: [...], msg: "..." }] }
  if (Array.isArray(data.detail)) {
    const messages = data.detail
      .map((d) => (d as any)?.msg || (d as any)?.message || "")
      .filter(Boolean);
    return messages.length > 0 ? messages.join(". ") : fallback;
  }

  if (typeof data.detail === "string") {
    return data.detail;
  }

  return fallback;
}

/**
 * Safe JSON parse for responses - handles non-JSON error pages.
 * Kept for external backward compatibility.
 */
export async function safeParseJSON(response: Response): Promise<any> {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return { message: text || `Server error (${response.status})` };
  }
}

// Add Axios response interceptor for unified response handling and error wrapping
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const data = error.response?.data;
    const status = error.response?.status || 500;

    const errMsg = extractErrorMessage(data, `Request failed (${status})`);
    const err = new Error(errMsg) as Error & { status?: number; payload?: any; fieldErrors?: any };
    err.status = status;
    err.payload = data;
    err.fieldErrors = data?.errors || null;

    return Promise.reject(err);
  }
);

/**
 * Common internal request helper to keep code clean and typed
 */
async function request<T>(path: string, init: any = {}): Promise<T> {
  const config: any = {
    url: path,
    method: init.method || "GET",
    headers: init.headers || {},
    data: init.body,
  };

  if (init.body instanceof FormData) {
    // Axios handles FormData boundary headers automatically when Content-Type is not set manually
    delete config.headers["Content-Type"];
  }

  return api(config) as Promise<T>;
}

// 1. Verify Certificate
export async function verifyCertificate(certNumber: string) {
  try {
    const response = await api.get<any>(`/public/certificate/verify/${encodeURIComponent(certNumber)}`);
    return response as any;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Certificate not found or invalid.";
    }
    throw err;
  }
}

/* 2. Surveyor application | S3 signed URL flow types */
export interface SurveyorUploadUrls {
  cv?: { url: string; uploadUrl?: string; key: string };
  idProof?: { url: string; uploadUrl?: string; key: string };
  id_proof?: { url: string; uploadUrl?: string; key: string };
  certificates?: { url: string; uploadUrl?: string; key: string }[];
}

/**
 * Helper to get signed upload URLs for surveyor documents.
 * Supports both high-level string params and nested object forms.
 */
export async function getSurveyorUploadUrls(filenames: {
  cv?: string | { filename: string; mimetype: string };
  cv_type?: string;
  id_proof?: string;
  id_proof_type?: string;
  idProof?: { filename: string; mimetype: string };
  certificates?: string[] | { filename: string; mimetype: string }[];
  certificate_types?: string[];
}): Promise<SurveyorUploadUrls> {
  const query = new URLSearchParams();

  // cv
  if (filenames.cv) {
    if (typeof filenames.cv === "string") {
      query.append("cv_filename", filenames.cv);
      if (filenames.cv_type) query.append("cv_mimetype", filenames.cv_type);
    } else {
      query.append("cv_filename", filenames.cv.filename);
      query.append("cv_mimetype", filenames.cv.mimetype);
    }
  }

  // id_proof / idProof
  if (filenames.id_proof) {
    query.append("id_proof_filename", filenames.id_proof);
    if (filenames.id_proof_type) query.append("id_proof_mimetype", filenames.id_proof_type);
  } else if (filenames.idProof) {
    query.append("id_proof_filename", filenames.idProof.filename);
    query.append("id_proof_mimetype", filenames.idProof.mimetype);
  }

  // certificates
  if (filenames.certificates && filenames.certificates.length > 0) {
    const first = filenames.certificates[0];
    if (typeof first === "string") {
      query.append("certificate_filenames", JSON.stringify(filenames.certificates));
      if (filenames.certificate_types) {
        query.append("certificate_mimetypes", JSON.stringify(filenames.certificate_types));
      }
    } else {
      const certObjs = filenames.certificates as { filename: string; mimetype: string }[];
      query.append("certificate_filenames", JSON.stringify(certObjs.map((c) => c.filename)));
      query.append("certificate_mimetypes", JSON.stringify(certObjs.map((c) => c.mimetype)));
    }
  }

  try {
    const data = await api.get<any>(`/surveyors/get-upload-url?${query.toString()}`);
    const result = data.data || data;

    // Normalize returned keys to support both camelCase and snake_case properties
    if (result) {
      if (result.id_proof && !result.idProof) result.idProof = result.id_proof;
      if (result.idProof && !result.id_proof) result.id_proof = result.idProof;
      if (result.cv) {
        if (result.cv.uploadUrl && !result.cv.url) result.cv.url = result.cv.uploadUrl;
        if (result.cv.url && !result.cv.uploadUrl) result.cv.uploadUrl = result.cv.url;
      }
      if (result.idProof) {
        if (result.idProof.uploadUrl && !result.idProof.url) result.idProof.url = result.idProof.uploadUrl;
        if (result.idProof.url && !result.idProof.uploadUrl) result.idProof.uploadUrl = result.idProof.url;
      }
      if (result.id_proof) {
        if (result.id_proof.uploadUrl && !result.id_proof.url) result.id_proof.url = result.id_proof.uploadUrl;
        if (result.id_proof.url && !result.id_proof.uploadUrl) result.id_proof.uploadUrl = result.id_proof.url;
      }
      if (Array.isArray(result.certificates)) {
        result.certificates.forEach((c: any) => {
          if (c.uploadUrl && !c.url) c.url = c.uploadUrl;
          if (c.url && !c.uploadUrl) c.uploadUrl = c.url;
        });
      }
    }

    return result;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to get upload URLs.";
    }
    throw err;
  }
}

/**
 * Helper to upload a file directly to S3 via signed URL
 */
export async function uploadToS3(signedUrl: string, file: File): Promise<void> {
  const response = await axios.put(signedUrl, file, {
    headers: {
      "Content-Type": file.type || "application/octet-stream"
    }
  });
  if (response.status < 200 || response.status >= 300) {
    throw new Error("Failed to upload file to S3 storage.");
  }
}

export const uploadToSignedUrl = uploadToS3;

/**
 * Helper to convert a file to a base64 Data URL
 */
export function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB in bytes

/**
 * 2. Submit Surveyor Application.
 * Directly converts files to base64 strings inside the appropriate payload keys.
 */
export async function submitSurveyorApplication(
  formDataOrPayload: Record<string, any>,
  files?: {
    cv?: File | null;
    id_proof?: File | null;
    certificates?: File[];
  }
): Promise<any> {
  try {
    // 1. Validate file size (1MB limit)
    if (files) {
      if (files.cv && files.cv.size > MAX_FILE_SIZE) {
        throw new Error("CV file size exceeds 1MB limit.");
      }
      if (files.id_proof && files.id_proof.size > MAX_FILE_SIZE) {
        throw new Error("ID Proof file size exceeds 1MB limit.");
      }
      if (files.certificates) {
        for (const file of files.certificates) {
          if (file && file.size > MAX_FILE_SIZE) {
            throw new Error(`Certificate "${file.name}" size exceeds 1MB limit.`);
          }
        }
      }
    }

    let cvKey = formDataOrPayload.cvKey || formDataOrPayload.cv || null;
    let idProofKey = formDataOrPayload.idProofKey || formDataOrPayload.id_proof || null;
    let certificateKeys = formDataOrPayload.certificateKeys || formDataOrPayload.certificates || [];

    if (files) {
      if (files.cv) {
        cvKey = await fileToBase64(files.cv);
      }
      if (files.id_proof) {
        idProofKey = await fileToBase64(files.id_proof);
      }
      if (files.certificates && files.certificates.length > 0) {
        const certTasks = files.certificates
          .filter((f) => f && f.size > 0)
          .map((f) => fileToBase64(f));
        if (certTasks.length > 0) {
          const base64Certs = await Promise.all(certTasks);
          certificateKeys = Array.isArray(certificateKeys)
            ? [...certificateKeys, ...base64Certs]
            : base64Certs;
        }
      }
    }

    // 2. Prepare payload with only the needed keys
    const payload: Record<string, any> = {
      ...formDataOrPayload,
    };

    if (cvKey) {
      payload.cvKey = cvKey;
    }
    if (idProofKey) {
      payload.idProofKey = idProofKey;
    }
    if (Array.isArray(certificateKeys) && certificateKeys.length > 0) {
      payload.certificateKeys = certificateKeys;
    }

    return await api.post("/surveyors/apply", payload);
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to submit application.";
    }
    throw err;
  }
}

// 3. Fetch Dynamic/Static Content
export async function fetchStaticContent(slug = "") {
  try {
    const url = slug
      ? `/website/static-content/${encodeURIComponent(slug)}`
      : `/website/static-content`;

    const data = await api.get<any>(url);
    return data.data || data;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Page not found";
    }
    throw err;
  }
}

// 4. Fetch Portfolio Feedback (Testimonials)
export async function fetchPortfolioFeedback() {
  try {
    const data = await api.get<any>("/portfolio-feedback/public");
    return data.data || data;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to load feedback.";
    }
    throw err;
  }
}

// 5. Submit Contact Enquiry
export async function submitContactEnquiry(payload: Record<string, any>) {
  try {
    return await api.post("/contact/", payload);
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to send message.";
    }
    throw err;
  }
}

// 6. Subscribe to Newsletter
export async function subscribeNewsletter(email: string, source = "website") {
  try {
    return await api.post("/website/newsletter/subscribe", { email, source });
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to subscribe.";
    }
    throw err;
  }
}

// 7. Public Vessel Search
export async function searchVessel(imoNumber: string | number) {
  try {
    const data = await api.get<any>(`/public/vessel/${encodeURIComponent(String(imoNumber))}`);
    return data.data || data;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Vessel not found in our registry.";
    }
    throw err;
  }
}

// 8. Fetch Public Flags
export async function fetchPublicFlags() {
  try {
    const data = await api.get<any>("/public/flags");
    return data.data || data;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to load flags.";
    }
    throw err;
  }
}

// 9. Direct Document Upload Helper
export const uploadSurveyorDocument = (
  entityType: string,
  entityId: string,
  files: File[],
  documentType: string,
  description?: string,
) => {
  const fd = new FormData();
  files.forEach((f) => fd.append("files", f));
  fd.append("document_type", documentType);
  if (description) fd.append("description", description);
  return request<{ keys: string[] }>(`/documents/${entityType}/${entityId}`, {
    method: "POST",
    body: fd,
  });
};

// 10. Fetch FAQs - /api/v1/website/static-content/faq
export async function fetchFAQs() {
  try {
    const data = await api.get<any>("/website/static-content/faq");
    return data.data || data;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to load FAQs.";
    }
    throw err;
  }
}

// 11. Fetch News - /api/v1/website/static-content/news
export async function fetchNews() {
  try {
    const data = await api.get<any>("/website/static-content/news");
    return data.data || data;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to load news.";
    }
    throw err;
  }
}

// 12. Fetch Privacy Policy - /api/v1/website/static-content/privacy
export async function fetchPrivacyPolicy() {
  try {
    const data = await api.get<any>("/website/static-content/privacy");
    return data.data || data;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to load Privacy Policy.";
    }
    throw err;
  }
}

// 13. Fetch Compliance - /api/v1/website/static-content/terms-compliance
export async function fetchCompliance() {
  try {
    const data = await api.get<any>("/website/static-content/terms-compliance");
    return data.data || data;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to load Compliance.";
    }
    throw err;
  }
}

// 14. Fetch Terms and Conditions - /api/v1/website/static-content/terms-and-conditions
export async function fetchTermsAndConditions() {
  try {
    const data = await api.get<any>("/website/static-content/terms-and-conditions");
    return data.data || data;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to load Terms and Conditions.";
    }
    throw err;
  }
}

// 15. Fetch About Us - /api/v1/website/static-content/about-us
export async function fetchAboutUs() {
  try {
    const data = await api.get<any>("/website/static-content/about-us");
    return data.data || data;
  } catch (err: any) {
    if (err && err.message && err.message.startsWith("Request failed")) {
      err.message = "Failed to load About Us.";
    }
    throw err;
  }
}

export const apiBase = API_BASE;
