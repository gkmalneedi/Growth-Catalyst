import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Rocket } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industries", href: "/industries" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Resources", href: "/resources" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold font-heading tracking-tighter flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            NEXUS
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  location === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <div className="flex gap-4 ml-4">
            <Link href="/proposal">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
                Start Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 text-foreground rounded-full px-6">
                Let's Talk
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href}>
              <a
                className="text-lg font-medium p-2 hover:bg-white/5 rounded-lg block"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            </Link>
          ))}
          <div className="flex flex-col gap-4 mt-4">
             <Link href="/proposal">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  Start Project
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 text-foreground rounded-full">
                  Let's Talk
                </Button>
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
