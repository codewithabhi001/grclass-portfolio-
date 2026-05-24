/**
 * Network section | dark band with authorized flag administration grid.
 */
import { useState, useEffect } from "react";
import { fetchPublicFlags } from "@/lib/api";
import { Flag } from "lucide-react";

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
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

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
    <section className="relative overflow-hidden bg-secondary-soft border-y border-border py-16 sm:py-20 md:py-28">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]"
      />
      <div className="container-page">
        <div className="relative grid gap-10 md:grid-cols-12 md:items-center md:gap-12 lg:gap-16">
          <div className="md:col-span-5">
            <span className="eyebrow text-secondary">Global Network</span>
            <h2 className="h-display mt-3 text-[clamp(24px,3.2vw,40px)] text-primary">
              Wherever your vessels call, we're already there.
            </h2>
            <p className="mt-5 max-w-md text-[14.5px] font-light leading-relaxed text-muted-foreground sm:text-[15px]">
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
              <div className="flex flex-wrap justify-center gap-4">
                {flags.map((f) => (
                  <div
                    key={f.id}
                    className="group relative flex w-[200px] flex-col items-center justify-center border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-card hover:-translate-y-0.5"
                  >
                    <div className="relative aspect-[3/2] w-[110px] overflow-hidden bg-muted border border-border p-0.5 shadow-sm transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                      {f.logo_url && !failedImages[f.id] ? (
                        <img
                          src={f.logo_url}
                          alt={f.flag_state_name}
                          className="h-full w-full object-contain animate-fade-in"
                          onError={() => {
                            setFailedImages((prev) => ({ ...prev, [f.id]: true }));
                          }}
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-muted text-muted-foreground/45">
                          <Flag className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                    <span className="mt-4 text-[15px] font-bold tracking-wide text-primary text-center truncate w-full">
                      {f.country}
                    </span>
                    <span className="mt-1 text-[11px] font-bold uppercase tracking-wider text-secondary text-center">
                      {f.authority_name}
                    </span>
                    <span className="mt-2.5 text-[11px] text-muted-foreground/80 text-center border-t border-border-soft pt-2 w-full truncate italic" title={f.flag_state_name}>
                      {f.flag_state_name}
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
