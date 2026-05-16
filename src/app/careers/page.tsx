import { useState, FormEvent } from "react";
import { Upload, ArrowRight, Briefcase } from "lucide-react";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageHero } from "@/components/layout/PageHero";
import { toast } from "sonner";
import careersImg from "@/assets/leader-3.jpg";
import {
  getSurveyorUploadUrls,
  uploadToSignedUrl,
  submitSurveyorApplication,
} from "@/lib/api";

const CareersPage = () => {
  const [cv, setCv] = useState<File | null>(null);
  const [idProof, setIdProof] = useState<File | null>(null);
  const [certs, setCerts] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    setBusy(true);
    try {
      const urls = await getSurveyorUploadUrls({
        cv: cv ? { filename: cv.name, mimetype: cv.type } : undefined,
        idProof: idProof ? { filename: idProof.name, mimetype: idProof.type } : undefined,
        certificates: certs.map((c) => ({ filename: c.name, mimetype: c.type })),
      });
      if (cv && urls.cv) await uploadToSignedUrl(urls.cv.url, cv);
      if (idProof && urls.idProof) await uploadToSignedUrl(urls.idProof.url, idProof);
      if (urls.certificates) {
        await Promise.all(certs.map((f, i) => uploadToSignedUrl(urls.certificates![i].url, f)));
      }
      await submitSurveyorApplication({
        fullName: fd.get("fullName"),
        email: fd.get("email"),
        phone: fd.get("phone"),
        role: fd.get("role"),
        location: fd.get("location"),
        experience: Number(fd.get("experience") || 0),
        summary: fd.get("summary"),
        cvKey: urls.cv?.key,
        idProofKey: urls.idProof?.key,
        certificateKeys: urls.certificates?.map((c) => c.key) || [],
      });
      toast.success("Application received", { description: "Our talent team will be in touch." });
      form.reset();
      setCv(null); setIdProof(null); setCerts([]);
    } catch (err) {
      toast.error("Could not submit application", {
        description: err instanceof Error ? err.message : "Please try again.",
      });
    } finally { setBusy(false); }
  };

  return (
    <SiteShell>
      <PageHero
        eyebrow="Careers"
        title="Join the surveyor network."
        subtitle="We hire exclusive surveyors, naval architects, and technical staff across 32 regional hubs."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <section className="container-page py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={careersImg} alt="Surveyor at work" className="h-full w-full object-cover" loading="lazy" />
            <div className="mt-6 border-l-[3px] border-accent bg-accent-soft px-5 py-4">
              <p className="text-[14px] italic leading-relaxed text-foreground/80">
                "We invest in our surveyors' technical development — from IMO rule schools to specialist
                alternative-fuels training."
              </p>
              <cite className="mt-2 block text-[10px] uppercase not-italic tracking-wider text-subtle">
                — Office of the Chief Surveyor
              </cite>
            </div>
          </div>

          <form onSubmit={submit} className="md:col-span-7">
            <span className="eyebrow text-secondary">Apply now</span>
            <h2 className="h-display mt-3 text-[clamp(22px,2.2vw,30px)] text-primary">
              Surveyor & technical staff application
            </h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label="Full name" name="fullName" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <Field label="Preferred location" name="location" placeholder="Singapore, Rotterdam…" />
              <Field label="Role" name="role" placeholder="Hull surveyor, naval architect…" />
              <Field label="Years of experience" name="experience" type="number" />
              <div className="md:col-span-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                  Summary
                </label>
                <textarea
                  name="summary"
                  rows={4}
                  required
                  className="mt-2 w-full resize-none border border-border bg-card px-4 py-3 text-[14px] focus:border-accent focus:outline-none"
                />
              </div>

              <FileField label="CV / Resume" file={cv} onChange={setCv} accept=".pdf,.doc,.docx" />
              <FileField label="ID proof" file={idProof} onChange={setIdProof} accept=".pdf,image/*" />
              <div className="md:col-span-2">
                <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                  Certificates (multiple)
                </label>
                <input
                  type="file"
                  multiple
                  accept=".pdf,image/*"
                  onChange={(e) => setCerts(Array.from(e.target.files || []))}
                  className="mt-2 block w-full text-[13px] file:mr-3 file:border-0 file:bg-primary file:px-4 file:py-2.5 file:text-[12px] file:font-semibold file:text-primary-foreground hover:file:bg-primary-soft"
                />
                {certs.length > 0 && (
                  <p className="mt-2 font-mono text-[11px] text-subtle">{certs.length} file(s) attached</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={busy}
              className="group mt-8 inline-flex items-center gap-2 bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-bright disabled:opacity-60"
            >
              {busy ? "Submitting…" : <>Submit application <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>}
            </button>
          </form>
        </div>
      </section>

      <section className="border-t border-border bg-muted/40 py-16">
        <div className="container-page grid gap-px bg-border md:grid-cols-3">
          {[
            { t: "Exclusive employment", b: "No sub-contracting. Every surveyor is a GR Class employee." },
            { t: "Continuous training", b: "IACS rule schools, alternative fuels, and digital platform certification." },
            { t: "Global mobility", b: "Rotate across regional hubs — London, Singapore, Houston, Piraeus, Dubai, Yokohama." },
          ].map((n) => (
            <div key={n.t} className="bg-background p-7">
              <Briefcase className="h-5 w-5 text-accent" />
              <h4 className="h-display mt-4 text-[17px] text-primary">{n.t}</h4>
              <p className="mt-2 text-[13.5px] font-light leading-relaxed text-muted-foreground">{n.b}</p>
            </div>
          ))}
        </div>
      </section>
    </SiteShell>
  );
};

const Field = ({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) => (
  <div>
    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{label}</label>
    <input type={type} name={name} required={required} placeholder={placeholder}
      className="mt-2 w-full border border-border bg-card px-4 py-3 text-[14px] focus:border-accent focus:outline-none" />
  </div>
);

const FileField = ({ label, file, onChange, accept }: { label: string; file: File | null; onChange: (f: File | null) => void; accept?: string }) => (
  <div>
    <label className="block font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">{label}</label>
    <label className="mt-2 flex cursor-pointer items-center gap-3 border border-dashed border-border bg-card px-4 py-3 text-[13px] text-muted-foreground transition-colors hover:border-accent">
      <Upload className="h-4 w-4 text-accent" />
      <span className="truncate">{file ? file.name : "Choose file"}</span>
      <input type="file" accept={accept} onChange={(e) => onChange(e.target.files?.[0] || null)} className="hidden" />
    </label>
  </div>
);

export default CareersPage;