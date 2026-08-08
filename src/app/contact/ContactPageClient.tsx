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
      toast.success("Enquiry received", {
        description: "A senior surveyor will respond within one business day.",
      });
      reset();
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

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-7">
            <span className="eyebrow text-secondary">Send an enquiry</span>
            <h2 className="h-display mt-3 text-[clamp(22px,2.2vw,30px)] text-primary">
              We respond within one business day.
            </h2>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Full name</label>
                <input {...register("name")} className="mt-2 w-full border border-border bg-card px-4 py-3 text-[14px] text-foreground transition-colors focus:border-accent focus:outline-none" />
                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
              </div>
              <div className="">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Company</label>
                <input {...register("company")} className="mt-2 w-full border border-border bg-card px-4 py-3 text-[14px] text-foreground transition-colors focus:border-accent focus:outline-none" />
                {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>}
              </div>
              <div className="">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Corporate email</label>
                <input type="email" {...register("email")} className="mt-2 w-full border border-border bg-card px-4 py-3 text-[14px] text-foreground transition-colors focus:border-accent focus:outline-none" />
                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
              </div>
              <div className="">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Phone</label>
                <input type="tel" {...register("phone")} className="mt-2 w-full border border-border bg-card px-4 py-3 text-[14px] text-foreground transition-colors focus:border-accent focus:outline-none" />
                {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">Subject</label>
                <input {...register("subject")} className="mt-2 w-full border border-border bg-card px-4 py-3 text-[14px] text-foreground transition-colors focus:border-accent focus:outline-none" />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={5}
                  className="mt-2 w-full resize-none border border-border bg-card px-4 py-3 text-[14px] text-foreground transition-colors focus:border-accent focus:outline-none"
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
