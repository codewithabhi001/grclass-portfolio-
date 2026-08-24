"use client";

/**
 * Contact | enquiry form + global office grid.
 */
import { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/lib/site";
import { toast } from "sonner";
import { submitContactEnquiry } from "@/lib/api";
import { BrandLogo } from "@/components/layout/BrandLogo";

import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { validateFormSubmission, recordSubmissionTimestamp } from "@/lib/antiSpam";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(100, "Name cannot exceed 100 characters."),
  company: z.string().max(150, "Company cannot exceed 150 characters.").optional().or(z.literal("")),
  email: z.string().email("Please enter a valid corporate email address."),
  phone: z.string().max(30, "Phone number cannot exceed 30 characters.").optional().or(z.literal("")),
  subject: z.string().max(200, "Subject cannot exceed 200 characters.").optional().or(z.literal("")),
  message: z.string().min(10, "Message must be at least 10 characters long.").max(5000, "Message cannot exceed 5000 characters."),
  website: z.string().max(200).optional().or(z.literal("")),
});
type FormValues = z.infer<typeof formSchema>;

const ContactPageClient = () => {
  const [submitting, setSubmitting] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const [humanVerified, setHumanVerified] = useState(false);
  const [verificationNonce, setVerificationNonce] = useState("");
  const [renderedAt] = useState<number>(() => Date.now());
  const turnstileRef = useRef<TurnstileInstance>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    // 🛡️ Ensure human verification badge is checked with valid timestamp nonce
    if (!humanVerified || !verificationNonce.startsWith("gr_human_")) {
      toast.error("Verification required", {
        description: "Please complete the security check before sending.",
      });
      return;
    }

    // 🛡️ Multi-layer Bot & Spam Check
    const botCheck = validateFormSubmission({
      honeypotValue: data.website,
      renderedAt,
      message: `${data.subject || ""} ${data.message}`,
      email: data.email,
      formKey: "contact",
      minDurationSeconds: 2.0,
      cooldownSeconds: 45,
    });

    if (botCheck.isSpam) {
      if (botCheck.silentBlock) {
        // Fake success to mislead bot scripts so they do not retry
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          toast.success("Enquiry received", {
            description: "A senior surveyor will respond within one business day.",
          });
          reset();
        }, 600);
        return;
      } else {
        toast.error("Submission blocked", {
          description: botCheck.reason || "Please verify your details and try again.",
        });
        return;
      }
    }

    const payload = {
      full_name: data.name,
      company: data.company,
      corporate_email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
      source_page: "CONTACT",
      website: data.website,
      captcha_token: captchaToken,
    };

    setSubmitting(true);
    try {
      await submitContactEnquiry(payload);
      recordSubmissionTimestamp("contact");
      toast.success("Enquiry received", {
        description: "A senior surveyor will respond within one business day.",
      });
      reset();
      setHumanVerified(false);
      setVerificationNonce("");
    } catch (err) {
      toast.error("Could not send enquiry", {
        description: err instanceof Error ? err.message : "Please email us directly.",
      });
    } finally {
      setSubmitting(false);
      turnstileRef.current?.reset();
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

      <section className="container-page section">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-7">
            <span className="eyebrow text-secondary">Send an enquiry</span>
            <h2 className="h-display mt-3 text-display-sm text-primary">
              We respond within one business day.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Full name</label>
                <input {...register("name")} className="mt-2 w-full border border-border bg-card px-4 py-3 text-body-sm text-foreground transition-colors focus:border-accent focus:outline-none" />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div className="">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Company</label>
                <input {...register("company")} className="mt-2 w-full border border-border bg-card px-4 py-3 text-body-sm text-foreground transition-colors focus:border-accent focus:outline-none" />
                {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>}
              </div>
              <div className="">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Corporate email</label>
                <input type="email" {...register("email")} className="mt-2 w-full border border-border bg-card px-4 py-3 text-body-sm text-foreground transition-colors focus:border-accent focus:outline-none" />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <div className="">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Phone</label>
                <input type="tel" {...register("phone")} className="mt-2 w-full border border-border bg-card px-4 py-3 text-body-sm text-foreground transition-colors focus:border-accent focus:outline-none" />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Subject</label>
                <input {...register("subject")} className="mt-2 w-full border border-border bg-card px-4 py-3 text-body-sm text-foreground transition-colors focus:border-accent focus:outline-none" />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="mt-2 w-full resize-none border border-border bg-card px-4 py-3 text-body-sm text-foreground transition-colors focus:border-accent focus:outline-none"
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </div>

              {/* Honeypot field - Invisible to real users */}
              <div style={{ display: 'none', position: 'absolute', opacity: 0 }}>
                <input type="text" {...register("website")} tabIndex={-1} autoComplete="off" />
              </div>

              {/* Turnstile Invisible CAPTCHA */}
              <div className="md:col-span-2">
                <Turnstile 
                  ref={turnstileRef}
                  siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '1x00000000000000000000AA'} 
                  onSuccess={(token) => setCaptchaToken(token)}
                />
              </div>

              {/* Real Human Verification Shield */}
              <div className="md:col-span-2 mt-2 p-4 rounded-xl border border-border/80 bg-background/50 backdrop-blur-sm">
                <label className="flex items-start gap-3.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={humanVerified}
                    onChange={(e) => {
                      setHumanVerified(e.target.checked);
                      if (e.target.checked) {
                        setVerificationNonce(`gr_human_${Date.now()}`);
                      } else {
                        setVerificationNonce("");
                      }
                    }}
                    className="mt-0.5 h-4 w-4 rounded border-border text-accent focus:ring-accent accent-accent cursor-pointer"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-foreground flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Security Check: I am a human / maritime representative
                    </span>
                    <p className="text-muted-foreground/80 mt-0.5 text-[11px]">
                      Protected against automated bots and scrapers.
                    </p>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting || !humanVerified}
              className={`group mt-8 inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold transition-all duration-300 ${
                !humanVerified
                  ? "bg-muted text-muted-foreground/50 cursor-not-allowed border border-border"
                  : "bg-accent text-accent-foreground hover:bg-accent-bright shadow-brass cursor-pointer"
              }`}
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
              <div className="mt-6 space-y-5 text-body-sm">
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
                  <div className="flex flex-col gap-4">
                    <div>
                      <div className="text-[11px] uppercase tracking-wider text-subtle">Headquarters</div>
                      <div className="mt-0.5">{site.address}</div>
                    </div>
                    {site.additionalOffices.map((office) => (
                      <div key={office.name} className="border-t border-border/40 pt-3">
                        <div className="text-[11px] uppercase tracking-wider text-subtle">{office.name}</div>
                        <div className="mt-0.5 leading-relaxed">{office.address}</div>
                      </div>
                    ))}
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

export default ContactPageClient;
