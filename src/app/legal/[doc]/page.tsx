/**
 * Legal | dynamic route covering /legal/privacy, /legal/terms, /legal/compliance.
 */
import { useParams, Navigate, Link } from "react-router-dom";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";

interface LegalDoc {
  slug: string;
  title: string;
  eyebrow: string;
  updated: string;
  sections: { heading: string; body: string[] }[];
}

const docs: Record<string, LegalDoc> = {
  privacy: {
    slug: "privacy",
    title: "Privacy Policy",
    eyebrow: "Legal",
    updated: "1 March 2025",
    sections: [
      {
        heading: "Information we collect",
        body: [
          "GR Class collects information necessary to deliver classification and statutory services. This includes vessel particulars, owner contact details, and survey records.",
          "When you submit an enquiry, we store the information you provide solely for the purpose of responding and, where relevant, executing a service agreement.",
        ],
      },
      {
        heading: "How we use information",
        body: [
          "Personal and vessel data is used exclusively for service delivery, statutory filing with flag administrations, and certificate verification on grclass.com/verify.",
          "We do not sell, rent, or trade personal information. We share data with flag administrations only as required by the relevant convention or delegation.",
        ],
      },
      {
        heading: "Data retention",
        body: [
          "Survey records and certificates are retained for the lifetime of the vessel under class plus seven years, in line with IACS unified requirements.",
          "Marketing contact data is retained until you withdraw consent.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "Under UK GDPR you may request access to, correction of, or deletion of your personal data. Contact dpo@grclass.com to exercise these rights.",
        ],
      },
    ],
  },
  terms: {
    slug: "terms",
    title: "Terms of Service",
    eyebrow: "Legal",
    updated: "1 March 2025",
    sections: [
      {
        heading: "Scope",
        body: [
          "These terms govern the use of grclass.com and the GR Class digital verification service. Engagement for classification or statutory services is governed by the separate signed service agreement.",
        ],
      },
      {
        heading: "Acceptable use",
        body: [
          "You may use grclass.com/verify to authenticate certificates issued by GR Class. Automated scraping, denial-of-service activity, and reverse-engineering are prohibited.",
        ],
      },
      {
        heading: "Liability",
        body: [
          "Information published on this website is provided for general guidance. Survey reports and certificates issued by GR Class carry their own contractual limits of liability as set out in the relevant service agreement.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by the laws of England and Wales. Any dispute shall be subject to the exclusive jurisdiction of the courts of England.",
        ],
      },
    ],
  },
  compliance: {
    slug: "compliance",
    title: "Compliance & Quality",
    eyebrow: "Legal",
    updated: "1 March 2025",
    sections: [
      {
        heading: "Quality management",
        body: [
          "GR Class operates an integrated management system certified to ISO 9001:2015 (quality) and ISO 14001 (environmental). Annual surveillance audits are conducted by an accredited third party.",
        ],
      },
      {
        heading: "IACS observer status",
        body: [
          "GR Class holds IACS Observer status and adopts IACS unified requirements in full. We participate in technical working groups including the Hull, Machinery, and Survey panels.",
        ],
      },
      {
        heading: "Anti-bribery & sanctions",
        body: [
          "GR Class enforces a zero-tolerance anti-bribery policy aligned with the UK Bribery Act 2010 and US FCPA. We screen all engagements against UK, EU, UN, and OFAC sanctions lists.",
        ],
      },
      {
        heading: "Whistleblowing",
        body: [
          "Concerns regarding integrity, safety, or ethical conduct may be reported confidentially to ethics@grclass.com or via our independent reporting line.",
        ],
      },
    ],
  },
};

const LegalPage = () => {
  const { doc } = useParams<{ doc: string }>();
  const data = doc ? docs[doc.toLowerCase()] : undefined;
  if (!data) return <Navigate to="/" replace />;

  const allDocs = Object.values(docs);

  return (
    <SiteShell>
      <PageHero
        eyebrow={data.eyebrow}
        title={data.title}
        subtitle={`Last updated ${data.updated}`}
        breadcrumbs={[{ label: "Legal" }, { label: data.title }]}
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-12">
          <aside className="md:col-span-3">
            <div className="sticky top-24">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">Documents</span>
              <ul className="mt-5 space-y-2.5">
                {allDocs.map((d) => (
                  <li key={d.slug}>
                    <Link
                      to={`/legal/${d.slug}`}
                      className={
                        "block border-l-2 pl-3 text-[13.5px] transition-colors " +
                        (d.slug === data.slug
                          ? "border-accent text-primary"
                          : "border-transparent text-muted-foreground hover:border-border hover:text-primary")
                      }
                    >
                      {d.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <article className="md:col-span-9">
            <div className="prose-editorial space-y-12">
              {data.sections.map((s) => (
                <section key={s.heading}>
                  <h2 className="h-display border-b border-border pb-3 text-[20px] text-primary md:text-[24px]">
                    {s.heading}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {s.body.map((p, i) => (
                      <p key={i} className="text-[15px] font-light leading-[1.75] text-muted-foreground">
                        {p}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  );
};

export default LegalPage;
