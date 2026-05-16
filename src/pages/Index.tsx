/**
 * Re-export the new home page through the legacy /pages/Index entry
 * so existing route wiring keeps working.
 */
import HomePage from "@/app/(home)/page";

const Index = HomePage;
export default Index;
