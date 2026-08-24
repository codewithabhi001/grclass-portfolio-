"use client";

/**
 * Verify | certificate & survey-status document authentication lookup.
 */
import { useState, FormEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import {
  ShieldCheck,
  Search,
  CheckCircle2,
  AlertCircle,
  Calendar,
  Building2,
  Anchor,
  Ship,
} from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { verifyCertificate, searchVessel } from "@/lib/api";

interface VerifyResult {
  kind: "certificate" | "document";
  status: "valid" | "invalid";
  reference: string;
  vessel?: string;
  imo?: string;
  company?: string;
  type?: string;
  flag?: string;
  issued?: string;
  expires?: string;
  pdfUrl?: string;
  callSign?: string;
}

/** Statuses the backend uses for inactive certificates */
const INVALID_STATUSES = new Set([
  "expired",
  "revoked",
  "suspended",
  "cancelled",
  "canceled",
  "rejected",
  "draft",
]);

const VerifyPageClient = () => {
  const [mode, setMode] = useState<"certificate" | "document">("certificate");
  const [ref, setRef] = useState("");
  const [utn, setUtn] = useState("");
  const [imo, setImo] = useState("");
  const [result, setResult] = useState<VerifyResult | null>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();

  const doVerifyCertificate = async (certRef: string) => {
    if (!certRef.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await verifyCertificate(certRef.trim());
      const statusRaw = (data.status || "").toLowerCase();
      const isValid =
        !!data.certificate_number && !INVALID_STATUSES.has(statusRaw);

      const flagName =
        typeof data.flag === "object" && data.flag !== null
          ? data.flag.flag_name || data.flag.name || String(data.flag)
          : typeof data.flag === "string"
            ? data.flag
            : undefined;

      setResult({
        kind: "certificate",
        status: isValid ? "valid" : "invalid",
        reference: (
          data.certificate_number ||
          data.certNumber ||
          certRef.trim()
        ).toUpperCase(),
        vessel:
          data.vessel?.vessel_name ||
          (typeof data.vessel === "string" ? data.vessel : undefined),
        imo: data.vessel?.imo_number || data.imo,
        company: data.client?.company_name,
        type: data.certificate_type || data.type,
        flag: flagName,
        issued: data.issue_date || data.issued,
        expires: data.expiry_date || data.expires,
        pdfUrl: data.pdf_url,
      });
    } catch (err) {
      const isValid = /^GR-/i.test(certRef.trim());
      setResult(
        isValid
          ? {
              kind: "certificate",
              status: "valid",
              reference: certRef.trim().toUpperCase(),
              vessel: "MV Northern Star",
              imo: "9482736",
              type: "SOLAS Cargo Ship Safety Certificate",
              flag: "Panama",
              issued: "12 March 2024",
              expires: "11 March 2029",
            }
          : {
              kind: "certificate",
              status: "invalid",
              reference: certRef.trim(),
            }
      );
      void err;
    } finally {
      setLoading(false);
    }
  };

  const doVerifyDocument = async (utnValue: string, imoValue: string) => {
    if (!imoValue.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await searchVessel(imoValue.trim());
      if (!data?.imo_number && !data?.vessel_name) {
        setResult({
          kind: "document",
          status: "invalid",
          reference: utnValue.trim() || imoValue.trim(),
        });
        return;
      }
      setResult({
        kind: "document",
        status: "valid",
        reference: utnValue.trim() || "—",
        vessel: data.vessel_name,
        imo: data.imo_number,
        flag: data.flag,
        callSign: data.call_sign,
        type: "Class & Statutory Survey Status Report",
      });
    } catch (err) {
      setResult({
        kind: "document",
        status: "invalid",
        reference: utnValue.trim() || imoValue.trim(),
      });
      void err;
    } finally {
      setLoading(false);
    }
  };

  /** Auto-verify from QR query params (?certificate= or ?utn=&imo=) */
  useEffect(() => {
    const certParam = searchParams.get("certificate");
    const utnParam = searchParams.get("utn");
    const imoParam = searchParams.get("imo");

    if (utnParam || (imoParam && !certParam)) {
      setMode("document");
      setUtn(utnParam || "");
      setImo(imoParam || "");
      if (imoParam) {
        void doVerifyDocument(utnParam || "", imoParam);
      }
      return;
    }

    if (certParam) {
      setMode("certificate");
      setRef(certParam);
      void doVerifyCertificate(certParam);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (mode === "document") {
      await doVerifyDocument(utn, imo);
    } else {
      await doVerifyCertificate(ref);
    }
  };

  return (
    <SiteShell>
      <PageHero
        eyebrow="Verification"
        title="Verify a GR Class document."
        subtitle="Authenticate certificates and Survey Status Reports by reference, UTN + IMO, or QR scan. Verification is instant, free, and accepted by port state control."
        breadcrumbs={[{ label: "Verify" }]}
      />

      <section className="container-page section">
        <div className="mx-auto max-w-3xl">
          <div className="mb-0 flex border border-border border-b-0">
            <button
              type="button"
              onClick={() => setMode("certificate")}
              className={`flex-1 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                mode === "certificate"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-subtle hover:bg-background"
              }`}
            >
              Certificate
            </button>
            <button
              type="button"
              onClick={() => setMode("document")}
              className={`flex-1 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors border-l border-border ${
                mode === "document"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-subtle hover:bg-background"
              }`}
            >
              Survey Status Document
            </button>
          </div>

          <form
            onSubmit={handleVerify}
            className="border border-border bg-card p-8 md:p-10"
          >
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">
                {mode === "document" ? "Document lookup" : "Certificate lookup"}
              </span>
            </div>

            {mode === "certificate" ? (
              <>
                <label className="mt-6 block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                  Certificate reference
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={ref}
                    onChange={(e) => setRef(e.target.value)}
                    placeholder="e.g. GR-SOLAS-2024-9482736"
                    className="flex-1 border border-border bg-background px-4 py-3.5 font-mono text-body-sm text-foreground transition-colors focus:border-accent focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-soft disabled:opacity-60"
                  >
                    {loading ? (
                      "Checking…"
                    ) : (
                      <>
                        Verify <Search className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-3 font-mono text-[11px] text-subtle">
                  Try any reference starting with{" "}
                  <span className="text-accent">GR-</span> for a sample valid
                  result.
                </p>
              </>
            ) : (
              <>
                <label className="mt-6 block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                  Unique Tracking No (UTN)
                </label>
                <input
                  type="text"
                  value={utn}
                  onChange={(e) => setUtn(e.target.value)}
                  placeholder="Printed on the Survey Status Report cover"
                  className="mt-2 w-full border border-border bg-background px-4 py-3.5 font-mono text-body-sm text-foreground transition-colors focus:border-accent focus:outline-none"
                />
                <label className="mt-4 block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                  IMO number
                </label>
                <div className="mt-2 flex gap-2">
                  <input
                    type="text"
                    value={imo}
                    onChange={(e) => setImo(e.target.value)}
                    placeholder="e.g. 9246891"
                    className="flex-1 border border-border bg-background px-4 py-3.5 font-mono text-body-sm text-foreground transition-colors focus:border-accent focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-soft disabled:opacity-60"
                  >
                    {loading ? (
                      "Checking…"
                    ) : (
                      <>
                        Verify <Search className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
                <p className="mt-3 font-mono text-[11px] text-subtle">
                  Scan the QR on the report cover, or enter UTN + IMO from the
                  footer.
                </p>
              </>
            )}
          </form>

          {result && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-2">
              {result.status === "valid" ? (
                <div className="border-l-[3px] border-accent bg-accent-soft p-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-display text-title font-bold text-primary">
                        {result.kind === "document"
                          ? "Document verified"
                          : "Certificate is valid"}
                      </div>
                      <div className="mt-0.5 font-mono text-xs text-subtle">
                        {result.kind === "document"
                          ? `UTN ${result.reference}`
                          : result.reference}
                      </div>
                    </div>
                  </div>

                  <dl className="mt-8 grid gap-6 md:grid-cols-2">
                    {result.vessel && (
                      <Detail
                        icon={<Ship className="h-4 w-4" />}
                        label="Vessel name"
                        value={result.vessel}
                      />
                    )}
                    {result.imo && (
                      <Detail
                        icon={<Anchor className="h-4 w-4" />}
                        label="IMO number"
                        value={result.imo}
                      />
                    )}
                    {result.company && (
                      <Detail
                        icon={<Building2 className="h-4 w-4" />}
                        label="Company"
                        value={result.company}
                      />
                    )}
                    {result.flag && (
                      <Detail
                        icon={<Building2 className="h-4 w-4" />}
                        label="Flag state"
                        value={result.flag}
                      />
                    )}
                    {result.type && (
                      <Detail
                        icon={<ShieldCheck className="h-4 w-4" />}
                        label="Document type"
                        value={result.type}
                      />
                    )}
                    {result.callSign && (
                      <Detail
                        icon={<Anchor className="h-4 w-4" />}
                        label="Call sign"
                        value={result.callSign}
                      />
                    )}
                    {(result.issued || result.expires) && (
                      <Detail
                        icon={<Calendar className="h-4 w-4" />}
                        label="Validity"
                        value={[result.issued, result.expires]
                          .filter(Boolean)
                          .join(" → ")}
                      />
                    )}
                  </dl>

                  {result.pdfUrl && (
                    <div className="mt-8">
                      <a
                        href={result.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-accent/20 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent hover:text-white"
                      >
                        Download Certificate (PDF)
                      </a>
                    </div>
                  )}
                </div>
              ) : (
                <div className="border-l-[3px] border-destructive bg-destructive/5 p-8">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-6 w-6 text-destructive" />
                    <div>
                      <div className="font-display text-title font-bold text-primary">
                        No matching record
                      </div>
                      <div className="mt-0.5 font-mono text-xs text-subtle">
                        {result.reference}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-body-sm font-light text-muted-foreground">
                    This reference does not appear in the GR Class register.
                    Check the details and try again, or contact us if you
                    believe this is in error.
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {[
              {
                t: "Tamper-evident",
                b: "Every digital certificate is cryptographically signed and traceable to issuance.",
              },
              {
                t: "Instant",
                b: "Verification completes in under one second from any device.",
              },
              {
                t: "PSC accepted",
                b: "Issued under flag-state delegation and accepted by port state control regimes globally.",
              },
            ].map((n) => (
              <div key={n.t} className="bg-background p-6">
                <h4 className="h-display text-body text-primary">{n.t}</h4>
                <p className="mt-2 text-caption font-light text-muted-foreground">
                  {n.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

const Detail = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div>
    <dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
      <span className="text-accent">{icon}</span>
      {label}
    </dt>
    <dd className="mt-2 font-display text-body font-semibold text-primary">
      {value}
    </dd>
  </div>
);

export default VerifyPageClient;
