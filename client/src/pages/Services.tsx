import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/sections/Services";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-5xl font-heading font-bold mb-4">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions for the modern digital landscape.
            </p>
        </div>
        <Services />
      </main>
      <Footer />
    </div>
  );
}
