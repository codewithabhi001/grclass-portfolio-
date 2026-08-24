"use client";

/**
 * Network section | centered header with delegated flag administrations in premium corporate cards.
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
    id: "panama",
    flag_state_name: "Panama Maritime Authority",
    country: "Panama",
    authority_name: "PMA",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg"
  },
  {
    id: "belize",
    flag_state_name: "International Merchant Marine Registry of Belize",
    country: "Belize",
    authority_name: "IMMARBE",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg"
  }
];

const REAL_FLAGS: FlagItem[] = [
  {
    id: "panama",
    flag_state_name: "Panama Maritime Authority",
    country: "Panama",
    authority_name: "PMA",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg"
  },
  {
    id: "belize",
    flag_state_name: "International Merchant Marine Registry of Belize",
    country: "Belize",
    authority_name: "IMMARBE",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg"
  },
  {
    id: "honduras",
    flag_state_name: "Honduras Maritime Authority",
    country: "Honduras",
    authority_name: "HMA",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg"
  },
  {
    id: "vanuatu",
    flag_state_name: "Vanuatu Maritime Services",
    country: "Vanuatu",
    authority_name: "VMS",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg"
  },
  {
    id: "palau",
    flag_state_name: "Palau International Ship Registry",
    country: "Palau",
    authority_name: "PISR",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg"
  },
  {
    id: "mongolia",
    flag_state_name: "Mongolia Ship Registry",
    country: "Mongolia",
    authority_name: "ISR",
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Mongolia.svg"
  }
];

const flagUrlMap: Record<string, string> = {
  panama: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg",
  belize: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg",
  honduras: "https://upload.wikimedia.org/wikipedia/commons/8/82/Flag_of_Honduras.svg",
  vanuatu: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Vanuatu.svg",
  palau: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg",
  mongolia: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Mongolia.svg",
};

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

  const activeFlags = flags.filter(
    (f) =>
      f.flag_state_name &&
      !f.flag_state_name.toLowerCase().includes("test") &&
      !f.country.toLowerCase().includes("test") &&
      !f.authority_name.toLowerCase().includes("test")
  );

  const displayFlags = activeFlags.length > 0 ? activeFlags : REAL_FLAGS;

  const getLogoUrl = (f: FlagItem) => {
    const key = f.country.toLowerCase().trim();
    if (flagUrlMap[key]) {
      return flagUrlMap[key];
    }
    return f.logo_url;
  };

  return (
    <section className="relative overflow-hidden bg-primary-deep py-20 md:py-28">
      {/* Subtle ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-secondary/8 blur-[150px]"
      />
      <div className="container-page">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="eyebrow text-accent">Flag State Authorisations</span>
          <h2 className="h-display mt-3 text-[clamp(28px,4.5vw,44px)] text-background">
            Wherever your vessels call, we&rsquo;re already there.
          </h2>
          <p className="mt-5 text-[15px] font-light text-background/50">
            From Rotterdam to Singapore, Houston to Ajman &mdash; our regional offices and exclusive
            surveyor network keep your fleet compliant without delay.
          </p>
        </div>

        {/* Flag Cards Grid */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5 max-w-6xl mx-auto">
            {displayFlags.map((f) => {
              const logo = getLogoUrl(f);
              return (
                <div
                  key={f.id}
                  className="group relative flex flex-col items-center rounded-xl bg-white/[0.06] backdrop-blur-sm border border-white/10 p-5 sm:p-6 text-center transition-all duration-500 hover:bg-white/[0.1] hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_hsl(41_70%_41%/0.15)]"
                >
                  {/* Flag Image */}
                  <div className="relative aspect-[3/2] w-full max-w-[120px] overflow-hidden rounded-md shadow-[0_2px_8px_rgba(0,0,0,0.2)] border border-white/20 transition-transform duration-300 group-hover:scale-105">
                    {logo && !failedImages[f.id] ? (
                      <img
                        src={typeof logo === "string" ? logo : (logo as any).src}
                        alt={f.flag_state_name}
                        className="h-full w-full object-cover"
                        onError={() => {
                          setFailedImages((prev) => ({ ...prev, [f.id]: true }));
                        }}
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-white/10 text-background/30">
                        <Flag className="h-6 w-6" />
                      </div>
                    )}
                  </div>

                  {/* Country Name */}
                  <span className="mt-4 text-xs font-extrabold tracking-wider text-background uppercase">
                    {f.country}
                  </span>
                  {/* Authority Abbreviation */}
                  <span className="mt-1 text-[10px] font-bold tracking-widest text-accent uppercase">
                    {f.authority_name}
                  </span>
                  {/* Full Name */}
                  <span
                    className="mt-2 text-[11px] font-light leading-snug text-background/40 line-clamp-2"
                    title={f.flag_state_name}
                  >
                    {f.flag_state_name}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
