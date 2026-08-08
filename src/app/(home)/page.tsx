import HomePageClient from "./HomePageClient";

// Since we define Root metadata in layout.tsx, it cascades here.
// But we can add specific open graph / schema metadata if needed.

export default function Page() {
  return <HomePageClient />;
}
