import { useState, FormEvent, useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { submitSurveyorApplication } from "@/lib/api";
import { Loader2, Upload, X, FileText } from "lucide-react";

interface SurveyorApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SurveyorApplicationModal({ open, onOpenChange }: SurveyorApplicationModalProps) {
  const [submitting, setSubmitting] = useState(false);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [idFile, setIdFile] = useState<File | null>(null);
  const [certFiles, setCertFiles] = useState<File[]>([]);

  const cvInputRef = useRef<HTMLInputElement>(null);
  const idInputRef = useRef<HTMLInputElement>(null);
  const certInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    if (!cvFile) {
      toast.error("Validation error", { description: "Curriculum Vitae (CV) is required." });
      return;
    }
    if (!idFile) {
      toast.error("Validation error", { description: "ID Proof is required." });
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        full_name: String(fd.get("full_name")),
        email: String(fd.get("email")),
        phone: String(fd.get("phone")),
        nationality: String(fd.get("nationality")),
        qualification: String(fd.get("qualification")),
        years_of_experience: parseInt(String(fd.get("years_of_experience")) || "0", 10),
      };

      await submitSurveyorApplication(payload, {
        cv: cvFile,
        id_proof: idFile,
        certificates: certFiles.filter((f) => f && f.size > 0),
      });

      toast.success("Application submitted", {
        description: "Our HR technical committee will review your credentials.",
      });

      // Reset states
      setCvFile(null);
      setIdFile(null);
      setCertFiles([]);
      if (cvInputRef.current) cvInputRef.current.value = "";
      if (idInputRef.current) idInputRef.current.value = "";
      if (certInputRef.current) certInputRef.current.value = "";

      onOpenChange(false);
      form.reset();
    } catch (err) {
      toast.error("Submission failed", {
        description: err instanceof Error ? err.message : "Please check your connectivity.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(val) => {
      if (!val) {
        // Reset inputs on modal close
        setCvFile(null);
        setIdFile(null);
        setCertFiles([]);
        if (cvInputRef.current) cvInputRef.current.value = "";
        if (idInputRef.current) idInputRef.current.value = "";
        if (certInputRef.current) certInputRef.current.value = "";
      }
      onOpenChange(val);
    }}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Become part of our surveyors</DialogTitle>
          <DialogDescription>
            Join our global network of exclusive surveyors. Please provide your professional details and certifications.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="mt-4 space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="full_name" className="text-[11px] uppercase tracking-wider text-muted-foreground">Full Name *</Label>
              <Input id="full_name" name="full_name" required placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[11px] uppercase tracking-wider text-muted-foreground">Email *</Label>
              <Input id="email" name="email" type="email" required placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-[11px] uppercase tracking-wider text-muted-foreground">Phone *</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="+1 234 567 890" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="nationality" className="text-[11px] uppercase tracking-wider text-muted-foreground">Nationality *</Label>
              <Input id="nationality" name="nationality" required placeholder="e.g. Dutch" />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="qualification" className="text-[11px] uppercase tracking-wider text-muted-foreground">Professional Qualification *</Label>
              <Input id="qualification" name="qualification" required placeholder="e.g. Marine Engineer, Naval Architect" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="years_of_experience" className="text-[11px] uppercase tracking-wider text-muted-foreground">Years of Experience *</Label>
              <Input id="years_of_experience" name="years_of_experience" type="number" required min="0" defaultValue="0" />
            </div>
          </div>

          <div className="space-y-4 border-t pt-6">
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-primary">Supporting Documents</h4>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {/* CV upload */}
              <div className="space-y-2">
                <Label className="text-[11px] uppercase tracking-wider text-muted-foreground">Curriculum Vitae (CV) *</Label>
                {cvFile ? (
                  <div className="flex items-center justify-between border border-border bg-card px-3 py-2 rounded-md text-sm">
                    <div className="flex items-center gap-2 truncate pr-2">
                      <FileText className="h-4 w-4 text-accent shrink-0" />
                      <span className="truncate text-foreground font-medium text-[13px]">{cvFile.name}</span>
                      <span className="text-[10px] text-muted-foreground shrink-0">
                        ({(cvFile.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setCvFile(null);
                        if (cvInputRef.current) cvInputRef.current.value = "";
                      }}
                      className="text-muted-foreground hover:text-destructive transition-colors p-1"
                      aria-label="Remove CV"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <Input
                      ref={cvInputRef}
                      id="cv"
                      name="cv"
                      type="file"
                      className="cursor-pointer pr-10"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setCvFile(file);
                      }}
                    />
                    <Upload className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                )}
              </div>

              {/* ID Proof upload */}
              <div className="space-y-2">
                <Label className="text-[11px] uppercase tracking-wider text-muted-foreground">ID Proof (Passport/ID) *</Label>
                {idFile ? (
                  <div className="flex items-center justify-between border border-border bg-card px-3 py-2 rounded-md text-sm">
                    <div className="flex items-center gap-2 truncate pr-2">
                      <FileText className="h-4 w-4 text-accent shrink-0" />
                      <span className="truncate text-foreground font-medium text-[13px]">{idFile.name}</span>
                      <span className="text-[10px] text-muted-foreground shrink-0">
                        ({(idFile.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setIdFile(null);
                        if (idInputRef.current) idInputRef.current.value = "";
                      }}
                      className="text-muted-foreground hover:text-destructive transition-colors p-1"
                      aria-label="Remove ID Proof"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="relative">
                    <Input
                      ref={idInputRef}
                      id="idProof"
                      name="idProof"
                      type="file"
                      className="cursor-pointer pr-10"
                      accept="image/*,.pdf"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        setIdFile(file);
                      }}
                    />
                    <Upload className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
                )}
              </div>

              {/* Certificates upload */}
              <div className="space-y-2 sm:col-span-2">
                <Label className="text-[11px] uppercase tracking-wider text-muted-foreground">Other Relevant Certificates (Optional)</Label>
                <div className="relative">
                  <Input
                    ref={certInputRef}
                    id="certificates"
                    name="certificates"
                    type="file"
                    multiple
                    className="cursor-pointer pr-10"
                    accept=".pdf,image/*"
                    onChange={(e) => {
                      const files = Array.from(e.target.files || []);
                      setCertFiles((prev) => {
                        const filtered = files.filter(f => !prev.some(p => p.name === f.name));
                        return [...prev, ...filtered];
                      });
                      if (certInputRef.current) certInputRef.current.value = "";
                    }}
                  />
                  <Upload className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground pointer-events-none" />
                </div>

                {certFiles.length > 0 && (
                  <div className="mt-3 space-y-2 max-h-[160px] overflow-y-auto pr-1">
                    {certFiles.map((file, idx) => (
                      <div key={file.name + idx} className="flex items-center justify-between border border-border bg-card px-3 py-1.5 rounded-md text-sm">
                        <div className="flex items-center gap-2 truncate pr-2">
                          <FileText className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                          <span className="truncate text-foreground font-light text-[12.5px]">{file.name}</span>
                          <span className="text-[10px] text-muted-foreground shrink-0">
                            ({(file.size / 1024 / 1024).toFixed(2)} MB)
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setCertFiles((prev) => prev.filter((_, i) => i !== idx));
                          }}
                          className="text-muted-foreground hover:text-destructive transition-colors p-1"
                          aria-label={`Remove ${file.name}`}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <Button type="submit" disabled={submitting} className="w-full bg-accent text-accent-foreground hover:bg-accent-bright">
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting Application...
              </>
            ) : (
              "Submit Application"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
