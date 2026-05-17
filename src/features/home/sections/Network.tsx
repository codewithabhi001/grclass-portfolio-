/**
 * Network section | dark band with authorized flag administration grid.
 */
import { useState, useEffect } from "react";
import { fetchPublicFlags } from "@/lib/api";

interface FlagItem {
  id: string;
  flag_state_name: string;
  country: string;
  authority_name: string;
  logo_url: string;
}

const FALLBACK_FLAGS: FlagItem[] = [
  {
    id: "1",
    flag_state_name: "Panama Maritime Authority",
    country: "Panama",
    authority_name: "PMA",
    logo_url: "https://cdn.grclass.com/documents/documents/59524868-a1ec-438f-a41e-92d51686fcd0-Flag_of_Panama.svg.png"
  },
  {
    id: "2",
    flag_state_name: "Belize Maritime Authority",
    country: "Belize",
    authority_name: "BL",
    logo_url: "https://cdn.grclass.com/documents/documents/ba11a5a4-fdf4-4332-bb6d-f8d46eb8b76f-images.png"
  }
];

export function Network() {
  const [flags, setFlags] = useState<FlagItem[]>(FALLBACK_FLAGS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFlags() {
      try {
        const res = await fetchPublicFlags();
        const list = Array.isArray(res) ? res : (res as any)?.data || [];
        if (list.length > 0) {
          setFlags(list);
        }
      } catch (err) {
        console.error("Failed to load flags, using fallback:", err);
      } finally {
        setLoading(false);
      }
    }
    loadFlags();
  }, []);

  return (
    <section className="relative overflow-hidden bg-primary py-16 sm:py-20 md:py-28">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]"
      />
      <div className="container-page">
        <div className="relative grid gap-10 md:grid-cols-12 md:items-center md:gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow text-accent">Global Network</span>
            <h2 className="h-display mt-3 text-[clamp(24px,3.2vw,40px)] text-background">
              Wherever your vessels call, we're already there.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] font-light leading-relaxed text-background/60 sm:text-[15px]">
              From Rotterdam to Singapore, Houston to Ajman | our regional offices and exclusive
              surveyor network keep your fleet compliant without delay.
            </p>
          </div>

          <div className="md:col-span-7">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
              </div>
            ) : (
              <div className="flex flex-wrap justify-center gap-3">
                {flags.map((f) => (
                  <div
                    key={f.id}
                    className="group relative flex w-[110px] flex-col items-center justify-center border border-background/5 bg-background/[0.02] p-2.5 transition-all duration-300 hover:border-accent/30 hover:bg-background/[0.06]"
                  >
                    <div className="relative aspect-[3/2] w-full max-w-[48px] overflow-hidden bg-background/5 border border-background/10 p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={f.logo_url}
                        alt={f.flag_state_name}
                        className="h-full w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <span className="mt-2 text-[11.5px] font-semibold tracking-wide text-background/85 text-center truncate w-full">
                      {f.country}
                    </span>
                    <span className="mt-0.5 text-[8.5px] font-medium uppercase tracking-wider text-background/35 text-center">
                      {f.authority_name}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
