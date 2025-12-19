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
import AdminDashboard from "@/pages/Admin";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/proposal" component={ProposalPage} />
      <Route path="/admin" component={AdminDashboard} />
      
      {/* Placeholder Pages */}
      <Route path="/industries" component={PlaceholderPage} />
      <Route path="/portfolio" component={PlaceholderPage} />
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
