import VerifyPageClient from "./VerifyPageClient";
import { Suspense } from "react";

export const metadata = {
  title: "Verify Certificate | Digital Authentication",
  description:
    "Instantly authenticate any GR Class maritime certificate or survey status document using its reference number, UTN, IMO, or QR code. Accepted globally by port state controls.",
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyPageClient />
    </Suspense>
  );
}
