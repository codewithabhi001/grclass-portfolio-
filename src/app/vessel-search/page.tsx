import VesselSearchPageClient from "./VesselSearchPageClient";

export const metadata = {
  title: "Vessel Search | Class Status Registry",
  description: "Look up any vessel by IMO number to confirm its current classification status with GR Class. Free, instant, and available 24/7.",
};

export default function Page() {
  return <VesselSearchPageClient />;
}
