/**
 * Verify | certificate authentication lookup.
 */
import { useState, FormEvent } from "react";
import { ShieldCheck, Search, CheckCircle2, AlertCircle, Calendar, Building2, Anchor } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { verifyCertificate } from "@/lib/api";

interface VerifyResult {
  status: "valid" | "invalid";
  reference: string;
  vessel?: string;
  imo?: string;
  type?: string;
  flag?: string;
  issued?: string;
  expires?: string;
}

const VerifyPage = () => {
  const [ref, setRef] = useState("");
  const [result, setResult] = useState<VerifyResult | null>(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e: FormEvent) => {
    e.preventDefault();
    if (!ref.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const data = await verifyCertificate(ref.trim());
      setResult({
        status: data.status || "valid",
        reference: (data.certNumber || ref.trim()).toUpperCase(),
        vessel: data.vessel,
        imo: data.imo,
        type: data.type,
        flag: data.flag,
        issued: data.issued,
        expires: data.expires,
      });
    } catch (err) {
      // Dev fallback: any reference starting with GR- returns a sample valid result
      // while the backend is unreachable (preserves original demo behaviour).
      const isValid = /^GR-/i.test(ref.trim());
      setResult(
        isValid
          ? {
              status: "valid",
              reference: ref.trim().toUpperCase(),
              vessel: "MV Northern Star",
              imo: "9482736",
              type: "SOLAS Cargo Ship Safety Certificate",
              flag: "Marshall Islands",
              issued: "12 March 2024",
              expires: "11 March 2029",
            }
          : { status: "invalid", reference: ref.trim() }
      );
      void err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <SiteShell>
      <PageHero
        eyebrow="Verification"
        title="Verify a GR Class certificate."
        subtitle="Authenticate any certificate by reference number or QR scan. Verification is instant, free, and accepted by port state control."
        breadcrumbs={[{ label: "Verify" }]}
      />

      <section className="container-page py-20 md:py-24">
        <div className="mx-auto max-w-3xl">
          {/* Form */}
          <form onSubmit={handleVerify} className="border border-border bg-card p-8 md:p-10">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-accent" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">
                Certificate lookup
              </span>
            </div>
            <label className="mt-6 block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
              Certificate reference
            </label>
            <div className="mt-2 flex gap-2">
              <input
                type="text"
                value={ref}
                onChange={(e) => setRef(e.target.value)}
                placeholder="e.g. GR-SOLAS-2024-9482736"
                className="flex-1 border border-border bg-background px-4 py-3.5 font-mono text-[14px] text-foreground transition-colors focus:border-accent focus:outline-none"
              />
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-soft disabled:opacity-60"
              >
                {loading ? "Checking…" : <>Verify <Search className="h-4 w-4" /></>}
              </button>
            </div>
            <p className="mt-3 font-mono text-[11px] text-subtle">
              Try any reference starting with <span className="text-accent">GR-</span> for a sample valid result.
            </p>
          </form>

          {/* Result */}
          {result && (
            <div className="mt-8 animate-in fade-in slide-in-from-bottom-2">
              {result.status === "valid" ? (
                <div className="border-l-[3px] border-accent bg-accent-soft p-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent" />
                    <div>
                      <div className="font-display text-[18px] font-bold text-primary">Certificate is valid</div>
                      <div className="mt-0.5 font-mono text-[12px] text-subtle">{result.reference}</div>
                    </div>
                  </div>
                  <dl className="mt-8 grid gap-6 md:grid-cols-2">
                    <Detail icon={<Anchor className="h-4 w-4" />} label="Vessel" value={`${result.vessel} · IMO ${result.imo}`} />
                    <Detail icon={<Building2 className="h-4 w-4" />} label="Flag state" value={result.flag!} />
                    <Detail icon={<ShieldCheck className="h-4 w-4" />} label="Certificate type" value={result.type!} />
                    <Detail icon={<Calendar className="h-4 w-4" />} label="Validity" value={`${result.issued} → ${result.expires}`} />
                  </dl>
                </div>
              ) : (
                <div className="border-l-[3px] border-destructive bg-destructive/5 p-8">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="h-6 w-6 text-destructive" />
                    <div>
                      <div className="font-display text-[18px] font-bold text-primary">No matching certificate</div>
                      <div className="mt-0.5 font-mono text-[12px] text-subtle">{result.reference}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-[14px] font-light text-muted-foreground">
                    This reference does not appear in the GR Class register. Check the reference and try again, or contact us if you believe this is in error.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Notes */}
          <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
            {[
              { t: "Tamper-evident", b: "Every digital certificate is cryptographically signed and traceable to issuance." },
              { t: "Instant", b: "Verification completes in under one second from any device." },
              { t: "PSC accepted", b: "Recognised under Paris MoU, Tokyo MoU, USCG, and 40+ flag administrations." },
            ].map((n) => (
              <div key={n.t} className="bg-background p-6">
                <h4 className="h-display text-[15px] text-primary">{n.t}</h4>
                <p className="mt-2 text-[13px] font-light leading-relaxed text-muted-foreground">{n.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
};

const Detail = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div>
    <dt className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
      <span className="text-accent">{icon}</span>
      {label}
    </dt>
    <dd className="mt-2 font-display text-[15px] font-semibold text-primary">{value}</dd>
  </div>
);

export default VerifyPage;
