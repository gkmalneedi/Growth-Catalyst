import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import logoImg from "@assets/MAI_logo_final_transparent.png";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { servicesList, industriesList } from "@/lib/data";

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

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-2" : "bg-transparent py-3"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center">
            <img src={logoImg} alt="Nexus" className="object-contain" style={{width: 160, height: 'auto'}} />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow !text-base font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover/95 backdrop-blur-xl border border-white/10 rounded-xl">
                    {servicesList.map((service) => (
                      <li key={service.title}>
                        <Link href={service.href}>
                          <a className="block select-none rounded-md px-3 py-2.5 leading-none no-underline outline-none transition-opacity hover:opacity-90 bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow text-white">
                            <div className="text-sm font-medium leading-none text-white">{service.title}</div>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow !text-base font-medium">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover/95 backdrop-blur-xl border border-white/10 rounded-xl">
                    {industriesList.map((industry) => (
                      <li key={industry.title}>
                        <Link href={industry.href}>
                          <a className="block select-none rounded-md px-3 py-2.5 leading-none no-underline outline-none transition-opacity hover:opacity-90 bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow text-white">
                            <div className="text-sm font-medium leading-none text-white">{industry.title}</div>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/portfolio">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow !text-base font-medium")}>
                    Success Stories
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/thought-leadership">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow !text-base font-medium")}>
                    Thought Leadership
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow !text-base font-medium")}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow !text-base font-medium")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-4 ml-4">
            <Link href="/proposal">
              <Button className="bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white rounded-full px-6 border-0">
                Start Project
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="space-y-6 pb-20">
            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2 px-2">Services</h4>
              <div className="grid grid-cols-1 gap-1">
                {servicesList.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <a className="block p-2 text-lg hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2 px-2">Industries</h4>
              <div className="grid grid-cols-1 gap-1">
                {industriesList.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <a className="block p-2 text-lg hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-1">
               <Link href="/portfolio">
                 <a className="block p-2 text-lg font-medium hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>Success Stories</a>
               </Link>
               <Link href="/thought-leadership">
                 <a className="block p-2 text-lg font-medium hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>Thought Leadership</a>
               </Link>
            </div>

            <div className="grid grid-cols-1 gap-1">
               <Link href="/about">
                 <a className="block p-2 text-lg font-medium hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>About Us</a>
               </Link>
               <Link href="/contact">
                 <a className="block p-2 text-lg font-medium hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>Contact</a>
               </Link>
            </div>

            <div className="flex flex-col gap-4 mt-4">
              <Link href="/proposal">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  Start Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
