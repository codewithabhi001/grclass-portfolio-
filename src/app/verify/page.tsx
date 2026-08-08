import VerifyPageClient from "./VerifyPageClient";

export const metadata = {
  title: "Verify Certificate | Digital Authentication",
  description: "Instantly authenticate any GR Class maritime certificate using its reference number or QR code. Accepted globally by port state controls.",
};

import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyPageClient />
    </Suspense>
  );
}
