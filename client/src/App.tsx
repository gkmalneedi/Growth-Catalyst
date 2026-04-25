import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/Services";
import ProposalPage from "@/pages/Proposal";
import PlaceholderPage from "@/pages/Placeholder";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import ServiceTemplate from "@/pages/ServiceTemplate";
import IndustryTemplate from "@/pages/IndustryTemplate";
import Portfolio from "@/pages/Portfolio";
import PortfolioDetail from "@/pages/PortfolioDetail";
import AdminDashboard from "@/pages/Admin";
import SocialMediaOptimization from "@/pages/services/SocialMediaOptimization";
import Blogs from "@/pages/resources/Blogs";
import CaseStudies from "@/pages/resources/CaseStudies";
import PressRelease from "@/pages/resources/PressRelease";
import ResourceDetail from "@/pages/resources/ResourceDetail";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      
      {/* Specific Service Pages */}
      <Route path="/services/social-media-marketing" component={SocialMediaOptimization} />
      
      {/* Generic Service Template for others */}
      <Route path="/services/:slug" component={ServiceTemplate} />
      <Route path="/industries/:slug" component={IndustryTemplate} />
      
      <Route path="/proposal" component={ProposalPage} />
      <Route path="/admin" component={AdminDashboard} />
      
      <Route path="/success-stories" component={Portfolio} />
      <Route path="/success-stories/:slug" component={PortfolioDetail} />
      {/* Legacy redirects */}
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/portfolio/:slug" component={PortfolioDetail} />
      
      {/* Thought Leadership */}
      <Route path="/thought-leadership" component={Blogs} />

      {/* Resources Pages */}
      <Route path="/resources/blogs" component={Blogs} />
      <Route path="/resources/case-studies" component={CaseStudies} />
      <Route path="/resources/press-release" component={PressRelease} />

      {/* Resource Details Routes */}
      <Route path="/resources/blogs/:slug" component={ResourceDetail} />
      <Route path="/resources/case-studies/:slug" component={ResourceDetail} />
      <Route path="/resources/press-release/:slug" component={ResourceDetail} />
      
      {/* Resources Sub-routes fallback */}
      <Route path="/resources/:slug" component={PlaceholderPage} />

      {/* Placeholder Pages */}
      <Route path="/resources" component={PlaceholderPage} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      
      <Route component={NotFound} />
    </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <ScrollToTopButton />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
