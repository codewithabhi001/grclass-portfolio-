/**
 * Network section — dark band with stats grid + status console.
 */
import { networkStats } from "@/data/home";

export function Network() {
  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20 md:py-28">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="container-page">
        <div className="relative grid gap-10 md:grid-cols-12 md:gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow text-accent">Global Network</span>
            <h2 className="h-display mt-3 text-[clamp(24px,3.2vw,40px)] text-background">
              Wherever your vessels call, we're already there.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] font-light leading-relaxed text-background/60 sm:text-[15px]">
              From Rotterdam to Singapore, Houston to Dubai — our regional offices and exclusive
              surveyor network keep your fleet compliant without delay.
            </p>

            <div className="mt-7 border border-background/10 bg-background/[0.04] p-5">
              <div className="mb-3 text-[10px] font-bold uppercase tracking-wider text-background/40">
                Live operations
              </div>
              <div className="space-y-2">
                {[
                  { label: "Surveyor portal", ok: true },
                  { label: "Certificate verifier", ok: true },
                  { label: "Flag administration sync", ok: true },
                ].map((row) => (
                  <div key={row.label} className="flex items-center gap-2.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[12.5px] text-background/65">{row.label}</span>
                    <span className="ml-auto text-[10px] uppercase tracking-wider text-background/40">
                      operational
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-px border border-background/10 bg-background/[0.05]">
              {networkStats.map((s) => (
                <div key={s.l} className="group bg-primary px-5 py-7 transition-colors hover:bg-primary-soft sm:px-7 sm:py-9">
                  <div className="font-display text-[30px] font-extrabold leading-none text-background sm:text-[36px]">
                    {s.n}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-wider text-background/45">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            {/* Faux map / coordinates */}
            <div className="mt-px grid grid-cols-2 gap-px border border-t-0 border-background/10 bg-background/[0.05] font-mono text-[10px] sm:grid-cols-3">
              {[
                "RTM 51.95°N",
                "SIN 1.26°N",
                "HOU 29.74°N",
                "DXB 25.27°N",
                "LON 51.50°N",
                "TYO 35.65°N",
              ].map((c) => (
                <div key={c} className="bg-primary px-4 py-3 text-background/45 transition-colors hover:text-accent">
                  {c}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
