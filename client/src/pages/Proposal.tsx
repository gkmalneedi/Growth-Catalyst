import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ProposalForm } from "@/components/sections/ProposalForm";

export default function ProposalPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Start Your Project</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your business? Let's build something extraordinary together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ProposalForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
