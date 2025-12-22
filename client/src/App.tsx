import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import ServicesPage from "@/pages/Services";
import ProposalPage from "@/pages/Proposal";
import PlaceholderPage from "@/pages/Placeholder";
import ServiceTemplate from "@/pages/ServiceTemplate";
import IndustryTemplate from "@/pages/IndustryTemplate";
import Portfolio from "@/pages/Portfolio";
import AdminDashboard from "@/pages/Admin";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/services/:slug" component={ServiceTemplate} />
      <Route path="/industries/:slug" component={IndustryTemplate} />
      
      <Route path="/proposal" component={ProposalPage} />
      <Route path="/admin" component={AdminDashboard} />
      
      <Route path="/portfolio" component={Portfolio} />
      
      {/* Resources Sub-routes routed to Placeholder for now */}
      <Route path="/resources/:slug" component={PlaceholderPage} />

      {/* Placeholder Pages */}
      <Route path="/resources" component={PlaceholderPage} />
      <Route path="/about" component={PlaceholderPage} />
      <Route path="/contact" component={PlaceholderPage} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
