/**
 * Top utility bar — language, careers, press, etc.
 * Hidden on mobile to keep the header light.
 */
import { utilNav } from "@/lib/site";

export function UtilNav() {
  return (
    <div className="hidden bg-primary-deep md:block">
      <div className="container-page flex items-center justify-end gap-5 py-[7px]">
        {utilNav.map((item, i) => (
          <div key={item.label} className="flex items-center gap-5">
            <a
              href={item.href}
              className="text-[11px] tracking-wide text-background/45 transition-colors hover:text-background/85"
            >
              {item.label}
            </a>
            {i < utilNav.length - 1 && <span className="h-3 w-px bg-background/10" />}
          </div>
        ))}
      </div>
    </div>
  );
}
