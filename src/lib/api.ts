/**
 * API client | thin wrapper around the GR Class backend.
 * Base URL is read from VITE_API_URL (see .env). Default falls back to
 * localhost so the UI stays functional during development without a server.
 *
 * NOTE: the backend is currently an external service. If a call fails
 * with a network error we log & rethrow | callers are expected to show
 * a user-friendly toast.
 */

const API_BASE =
  (import.meta.env.VITE_API_URL as string | undefined) ?? "http://localhost:5000";

const V1 = `${API_BASE.replace(/\/$/, "")}/api/v1`;

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const res = await fetch(`${V1}${path}`, {
    headers: { Accept: "application/json", ...(init.headers || {}) },
    ...init,
  });
  const text = await res.text();
  let data: unknown = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!res.ok) {
    const err = new Error(
      (data as { message?: string })?.message ||
        `Request failed (${res.status})`,
    ) as Error & { status?: number; payload?: unknown };
    err.status = res.status;
    err.payload = data;
    throw err;
  }
  return data as T;
}

/* 1. Public | certificate verification */
export const verifyCertificate = (certNumber: string) =>
  request<{
    certNumber: string;
    status: "valid" | "invalid";
    vessel?: string;
    imo?: string;
    type?: string;
    flag?: string;
    issued?: string;
    expires?: string;
  }>(`/public/certificate/verify/${encodeURIComponent(certNumber)}`);

/* 2. Surveyor application | S3 signed URL flow */
export interface SurveyorUploadUrls {
  cv?: { url: string; key: string };
  idProof?: { url: string; key: string };
  certificates?: { url: string; key: string }[];
}

export function getSurveyorUploadUrls(filenames: {
  cv?: { filename: string; mimetype: string };
  idProof?: { filename: string; mimetype: string };
  certificates?: { filename: string; mimetype: string }[];
}): Promise<SurveyorUploadUrls> {
  const q = new URLSearchParams();
  if (filenames.cv) {
    q.set("cv_filename", filenames.cv.filename);
    q.set("cv_mimetype", filenames.cv.mimetype);
  }
  if (filenames.idProof) {
    q.set("id_proof_filename", filenames.idProof.filename);
    q.set("id_proof_mimetype", filenames.idProof.mimetype);
  }
  if (filenames.certificates?.length) {
    q.set("certificate_filenames", JSON.stringify(filenames.certificates.map((c) => c.filename)));
    q.set("certificate_mimetypes", JSON.stringify(filenames.certificates.map((c) => c.mimetype)));
  }
  return request(`/surveyors/get-upload-url?${q.toString()}`);
}

export const uploadToSignedUrl = async (signedUrl: string, file: File) => {
  const res = await fetch(signedUrl, {
    method: "PUT",
    headers: { "Content-Type": file.type },
    body: file,
  });
  if (!res.ok) throw new Error(`Upload failed (${res.status})`);
};

export const submitSurveyorApplication = (payload: Record<string, unknown>) =>
  request(`/surveyors/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

/* 3. Website static content */
export const fetchStaticContent = (slug?: string) =>
  request(slug ? `/website/static-content/${encodeURIComponent(slug)}` : `/website/static-content`);

/* 4. Portfolio feedback / testimonials */
export const fetchPortfolioFeedback = () =>
  request<Array<{ id: string; name: string; role: string; company?: string; quote: string; flag?: string }>>(
    `/portfolio-feedback/public`,
  );

/* 5. Contact */
export const submitContactEnquiry = (payload: Record<string, unknown>) =>
  request(`/contact/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

/* 6. Newsletter */
export const subscribeNewsletter = (email: string, source = "website") =>
  request(`/website/newsletter/subscribe`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, source }),
  });

/* 7. Vessel search */
export const searchVessel = (imoNumber: string | number) =>
  request<{
    imo: string;
    name: string;
    type?: string;
    flag?: string;
    built?: string;
    classStatus?: string;
    owner?: string;
  }>(`/public/vessel/${encodeURIComponent(String(imoNumber))}`);

export const apiBase = API_BASE;
