import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useLocation } from "wouter";

export default function PlaceholderPage() {
  const [location] = useLocation();
  const title = location.split("/")[1].replace("-", " "); // e.g., /about-us -> about us

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      <main className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-5xl font-heading font-bold mb-6 capitalize">{title}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          This page is under construction. We are working hard to bring you the best experience.
        </p>
      </main>
      <Footer />
    </div>
  );
}
