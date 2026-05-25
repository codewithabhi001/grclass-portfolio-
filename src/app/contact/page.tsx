/**
 * Contact | enquiry form + global office grid.
 */
import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { offices } from "@/data/offices";
import { site } from "@/lib/site";
import { toast } from "sonner";
import { submitContactEnquiry } from "@/lib/api";
import { BrandLogo } from "@/components/layout/BrandLogo";
import { Turnstile } from '@marsidev/react-turnstile';

const ContactPage = () => {
  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const vessel = String(fd.get("vessel") || "");
    const baseMessage = String(fd.get("message") || "");
    const finalMessage = vessel ? `${baseMessage}\n\n[Vessel Name / IMO: ${vessel}]` : baseMessage;

    const payload = {
      full_name: String(fd.get("name") || ""),
      company: String(fd.get("company") || ""),
      corporate_email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      subject: String(fd.get("service") || "General enquiry"),
      message: finalMessage,
      source_page: "CONTACT",
      website: String(fd.get("website") || ""),
      captcha_token: captchaToken,
    };
    setSubmitting(true);
    try {
      await submitContactEnquiry(payload);
      toast.success("Enquiry received", {
        description: "A senior surveyor will respond within one business day.",
      });
      form.reset();
    } catch (err) {
      toast.error("Could not send enquiry", {
        description: err instanceof Error ? err.message : "Please email us directly.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <SiteShell>
      <PageHero
        eyebrow="Contact"
        title="Speak with our team."
        subtitle="Initial consultations are always complimentary. Tell us about the vessel and the certification objective | we'll respond within one business day."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-7">
            <span className="eyebrow text-secondary">Send an enquiry</span>
            <h2 className="h-display mt-3 text-[clamp(22px,2.2vw,30px)] text-primary">
              We respond within one business day.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Company" name="company" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Vessel name / IMO" name="vessel" className="md:col-span-2" />
              <div className="md:col-span-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                  Service of interest
                </label>
                <select
                  name="service"
                  className="mt-2 w-full border border-border bg-card px-4 py-3 text-[14px] text-foreground transition-colors focus:border-accent focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select a service…</option>
                  <option>Class survey</option>
                  <option>Statutory certification</option>
                  <option>Technical advisory</option>
                  <option>Transfer of class</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="mt-2 w-full resize-none border border-border bg-card px-4 py-3 text-[14px] text-foreground transition-colors focus:border-accent focus:outline-none"
                />
              </div>

              {/* Honeypot field - Invisible to real users */}
              <div style={{ display: 'none', position: 'absolute', opacity: 0 }}>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              {/* Turnstile Invisible CAPTCHA */}
              <div className="md:col-span-2">
                <Turnstile 
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'} 
                  onSuccess={(token) => setCaptchaToken(token)}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="group mt-8 inline-flex items-center gap-2 bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Send enquiry"}
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>

          <aside className="md:col-span-5 md:pl-10">
            <div className="sticky top-28 border border-border bg-card p-7">
              <div className="mb-6 pb-6 border-b border-border/60">
                <BrandLogo variant="dark" size="default" />
              </div>
              <h3 className="font-display text-[11px] font-bold uppercase tracking-[0.18em] text-secondary">
                Direct lines
              </h3>
              <div className="mt-6 space-y-5 text-[14px]">
                <a href={`mailto:${site.email}`} className="group flex items-start gap-3 text-foreground transition-colors hover:text-secondary">
                  <Mail className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-subtle">Email</div>
                    <div className="mt-0.5">{site.email}</div>
                  </div>
                </a>
                <a href={`tel:${site.phone}`} className="group flex items-start gap-3 text-foreground transition-colors hover:text-secondary">
                  <Phone className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-subtle">Phone</div>
                    <div className="mt-0.5">{site.phone}</div>
                  </div>
                </a>
                <div className="flex items-start gap-3 text-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-subtle">Headquarters</div>
                    <div className="mt-0.5">{site.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

    </SiteShell>
  );
};

const Field = ({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) => (
  <div className={className}>
    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      className="mt-2 w-full border border-border bg-card px-4 py-3 text-[14px] text-foreground transition-colors focus:border-accent focus:outline-none"
    />
  </div>
);

export default ContactPage;
