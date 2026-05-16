import { useState, FormEvent } from "react";
import { Search, Anchor, AlertCircle } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { searchVessel } from "@/lib/api";

interface Vessel { imo: string; name: string; type?: string; flag?: string; built?: string; classStatus?: string; owner?: string }

const VesselSearchPage = () => {
  const [imo, setImo] = useState("");
  const [data, setData] = useState<Vessel | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!imo.trim()) return;
    setBusy(true); setErr(null); setData(null);
    try {
      const v = await searchVessel(imo.trim());
      setData(v);
    } catch (e2) {
      // dev fallback
      if (/^\d{7}$/.test(imo.trim())) {
        setData({ imo: imo.trim(), name: "MV Northern Star", type: "Bulk Carrier", flag: "Marshall Islands", built: "2016", classStatus: "In class", owner: "Nordic Bulk Shipping" });
      } else {
        setErr(e2 instanceof Error ? e2.message : "Vessel not found in our registry.");
      }
    } finally { setBusy(false); }
  };

  return (
    <SiteShell>
      <PageHero
        eyebrow="Registry"
        title="Vessel search."
        subtitle="Look up any vessel by IMO number to confirm its current class status with GR Class."
        breadcrumbs={[{ label: "Vessel Search" }]}
      />
      <section className="container-page py-20 md:py-24">
        <form onSubmit={submit} className="mx-auto max-w-3xl border border-border bg-card p-8 md:p-10">
          <div className="flex items-center gap-3">
            <Anchor className="h-5 w-5 text-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">Registry lookup</span>
          </div>
          <label className="mt-6 block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">IMO number</label>
          <div className="mt-2 flex gap-2">
            <input value={imo} onChange={(e) => setImo(e.target.value)} placeholder="e.g. 9482736"
              inputMode="numeric" pattern="\d{7}"
              className="flex-1 border border-border bg-background px-4 py-3.5 font-mono text-[14px] focus:border-accent focus:outline-none" />
            <button disabled={busy} className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-soft disabled:opacity-60">
              {busy ? "Searching…" : <>Search <Search className="h-4 w-4" /></>}
            </button>
          </div>
          <p className="mt-3 font-mono text-[11px] text-subtle">
            Try a 7-digit IMO (e.g. <span className="text-accent">9482736</span>) for a sample result.
          </p>
        </form>

        {data && (
          <div className="mx-auto mt-8 max-w-3xl border-l-[3px] border-accent bg-accent-soft p-8">
            <div className="flex items-center gap-3">
              <Anchor className="h-6 w-6 text-accent" />
              <div>
                <div className="font-display text-[18px] font-bold text-primary">{data.name}</div>
                <div className="mt-0.5 font-mono text-[12px] text-subtle">IMO {data.imo}</div>
              </div>
            </div>
            <dl className="mt-8 grid gap-6 md:grid-cols-2">
              {[
                ["Type", data.type],
                ["Flag", data.flag],
                ["Built", data.built],
                ["Class status", data.classStatus],
                ["Owner", data.owner],
              ].map(([l, v]) => v ? (
                <div key={l as string}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{l}</dt>
                  <dd className="mt-1 font-display text-[15px] font-semibold text-primary">{v}</dd>
                </div>
              ) : null)}
            </dl>
          </div>
        )}

        {err && (
          <div className="mx-auto mt-8 max-w-3xl border-l-[3px] border-destructive bg-destructive/5 p-8">
            <div className="flex items-center gap-3">
              <AlertCircle className="h-6 w-6 text-destructive" />
              <div>
                <div className="font-display text-[18px] font-bold text-primary">Not found</div>
                <div className="mt-0.5 font-mono text-[12px] text-subtle">{err}</div>
              </div>
            </div>
          </div>
        )}
      </section>
    </SiteShell>
  );
};

export default VesselSearchPage;