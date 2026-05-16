import { Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <SiteShell>
      <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20 text-center">
        <span className="eyebrow text-secondary">Error 404</span>
        <h1 className="h-display mt-4 text-[clamp(40px,5vw,80px)] text-primary">
          Page not found.
        </h1>
        <p className="mt-6 max-w-md text-[16px] font-light leading-relaxed text-muted-foreground">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to homepage
          </Link>
        </div>
      </div>
    </SiteShell>
  );
};

export default NotFound;
