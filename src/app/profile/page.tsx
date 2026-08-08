import ProfileClient from "./ProfileClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Profile | GR Class",
  description: "Explore the GR Class corporate profile, our comprehensive maritime services, and global classification footprint.",
};

export default function Page() {
  return <ProfileClient />;
}
