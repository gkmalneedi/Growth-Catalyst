import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import logoImg from "@assets/MAI_logo_final_transparent.png";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
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
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  const { data: apiServices } = useQuery<any[]>({
    queryKey: ["/api/services"],
    staleTime: 5 * 60 * 1000,
  });

  const { data: apiIndustries } = useQuery<any[]>({
    queryKey: ["/api/industries"],
    staleTime: 5 * 60 * 1000,
  });

  const navServices = (apiServices && apiServices.length > 0)
    ? apiServices.filter(s => s.active !== false).map(s => ({ title: s.title, href: `/services/${s.slug}` }))
    : servicesList.map(s => ({ title: s.title, href: s.href }));

  const navIndustries = (apiIndustries && apiIndustries.length > 0)
    ? apiIndustries.filter(i => i.active !== false).map(i => ({ title: i.title, href: `/industries/${i.slug}` }))
    : industriesList.map(i => ({ title: i.title, href: i.href }));

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 50); };
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
            <img src={logoImg} alt="Nexus" className="object-contain" style={{ width: 160, height: "auto" }} />
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow !text-base font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover/95 backdrop-blur-xl border border-white/10 rounded-xl">
                    {navServices.map((service) => (
                      <li key={service.href}>
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

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow !text-base font-medium">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 p-3 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover/95 backdrop-blur-xl border border-white/10 rounded-xl">
                    {navIndustries.map((industry) => (
                      <li key={industry.href}>
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
                <Link href="/success-stories">
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

        <button className="lg:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-zinc-950/98 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-2 animate-in slide-in-from-top-5 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="space-y-1 pb-20">
            <div>
              <button
                className="w-full flex items-center justify-between p-3 text-base font-semibold text-white hover:bg-white/5 rounded-xl transition-colors"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span>Services</span>
                <ChevronDown className={cn("w-4 h-4 text-zinc-400 transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-3 mt-1 border-l border-white/10 pl-3 flex flex-col gap-0.5">
                  {navServices.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <a className="block py-2 px-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                        {item.title}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="w-full flex items-center justify-between p-3 text-base font-semibold text-white hover:bg-white/5 rounded-xl transition-colors"
                onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
              >
                <span>Industries</span>
                <ChevronDown className={cn("w-4 h-4 text-zinc-400 transition-transform duration-200", mobileIndustriesOpen && "rotate-180")} />
              </button>
              {mobileIndustriesOpen && (
                <div className="ml-3 mt-1 border-l border-white/10 pl-3 flex flex-col gap-0.5">
                  {navIndustries.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <a className="block py-2 px-2 text-sm text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" onClick={() => setIsOpen(false)}>
                        {item.title}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="pt-1 mt-2">
              <Link href="/success-stories">
                <a className="block p-3 text-base font-semibold text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsOpen(false)}>Success Stories</a>
              </Link>
              <Link href="/thought-leadership">
                <a className="block p-3 text-base font-semibold text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsOpen(false)}>Thought Leadership</a>
              </Link>
              <Link href="/about">
                <a className="block p-3 text-base font-semibold text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsOpen(false)}>About Us</a>
              </Link>
              <Link href="/contact">
                <a className="block p-3 text-base font-semibold text-white hover:bg-white/5 rounded-xl transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
              </Link>
            </div>

            <div className="pt-4">
              <Link href="/proposal">
                <Button className="w-full bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white rounded-full border-0">
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
