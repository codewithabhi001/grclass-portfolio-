import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

import HowItWorksPage from "./app/how-it-works/page.tsx";
import ServicesPage from "./app/services/page.tsx";
import ServiceDetailPage from "./app/services/[slug]/page.tsx";
import AboutPage from "./app/about/page.tsx";
import NewsPage from "./app/news/page.tsx";
import FaqPage from "./app/faq/page.tsx";
import ContactPage from "./app/contact/page.tsx";
import VerifyPage from "./app/verify/page.tsx";
import LegalPage from "./app/legal/[doc]/page.tsx";
import CareersPage from "./app/careers/page.tsx";
import PressPage from "./app/press/page.tsx";
import InvestorsPage from "./app/investors/page.tsx";
import VesselSearchPage from "./app/vessel-search/page.tsx";
import NewsArticlePage from "./app/news/[slug]/page.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsArticlePage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/vessel-search" element={<VesselSearchPage />} />
          <Route path="/legal/:doc" element={<LegalPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
