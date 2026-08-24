"use client";

/**
 * Network section | centered header with delegated flag administrations in a borderless cluster.
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

  // Filter out any mock "Test" or "TestLand" entries
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
    <section className="relative overflow-hidden bg-secondary-soft border-y border-border section-lg">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[120px]"
      />
      <div className="container-page">
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-18">
          <span className="eyebrow text-secondary">Global Network</span>
          <h2 className="h-display mt-3 text-display-lg text-primary">
            Wherever your vessels call, we're already there.
          </h2>
          <p className="mt-5 text-body-sm font-light text-muted-foreground">
            From Rotterdam to Singapore, Houston to Ajman | our regional offices and exclusive
            surveyor network keep your fleet compliant without delay.
          </p>
        </div>

        {/* Flag Cluster (Borderless Grid/Flex) */}
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="h-6 w-6 animate-spin rounded-full border-2 border-accent border-t-transparent" />
          </div>
        ) : (
          <div className="flex flex-wrap items-stretch justify-center gap-8 md:gap-12 max-w-5xl mx-auto">
            {displayFlags.map((f) => {
              const logo = getLogoUrl(f);
              return (
                <div
                  key={f.id}
                  className="group flex w-[150px] sm:w-[170px] flex-col items-center p-3 text-center transition-all duration-300"
                >
                  {/* Flag Image Container with rounded corners and soft shadow */}
                  <div className="relative aspect-[3/2] w-[90px] sm:w-[100px] overflow-hidden rounded bg-muted shadow-[0_4px_10px_rgba(0,0,0,0.06)] border border-border-soft transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_16px_rgba(0,0,0,0.12)] flex items-center justify-center">
                    {logo && !failedImages[f.id] ? (
                      <img
                        src={typeof logo === "string" ? logo : (logo as any).src}
                        alt={f.flag_state_name}
                        className="h-full w-full object-cover animate-fade-in"
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

                  {/* Details */}
                  <span className="mt-4 text-caption font-extrabold tracking-wider text-primary uppercase">
                    {f.country}
                  </span>
                  <span className="mt-0.5 text-[10px] font-bold tracking-wider text-secondary uppercase">
                    {f.authority_name}
                  </span>
                  <span
                    className="mt-2 text-[11px] font-light leading-snug text-muted-foreground/80 max-w-[130px] line-clamp-2"
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
