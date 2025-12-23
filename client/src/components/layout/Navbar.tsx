import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Rocket } from "lucide-react";
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
import { servicesList, industriesList, resourcesList } from "@/lib/data";

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
        <div className="hidden lg:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              
              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover/95 backdrop-blur-xl border border-white/10 rounded-xl">
                    {servicesList.map((service) => (
                      <li key={service.title}>
                        <Link href={service.href}>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-opacity hover:opacity-90 bg-gradient-to-r from-purple-500 to-pink-500 text-white h-full">
                            <div className="text-sm font-medium leading-none text-white mb-1">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/90">
                              {service.description}
                            </p>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-popover/95 backdrop-blur-xl border border-white/10 rounded-xl">
                    {industriesList.map((industry) => (
                      <li key={industry.title}>
                        <Link href={industry.href}>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-opacity hover:opacity-90 bg-gradient-to-r from-purple-500 to-pink-500 text-white h-full">
                            <div className="text-sm font-medium leading-none text-white mb-1">{industry.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/90">
                              specialized solutions for {industry.title} sector.
                            </p>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/portfolio">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400")}>
                    Portfolio
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              
              {/* Resources Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-muted-foreground hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-popover/95 backdrop-blur-xl border border-white/10 rounded-xl">
                    {resourcesList.map((resource) => (
                      <li key={resource.title}>
                        <Link href={resource.href}>
                          <a className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-opacity hover:opacity-90 bg-gradient-to-r from-purple-500 to-pink-500 text-white h-full">
                            <div className="text-sm font-medium leading-none text-white mb-1">{resource.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-white/90">
                              {resource.description}
                            </p>
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/about">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400")}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/contact">
                  <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-muted-foreground hover:bg-transparent text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400")}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-4 ml-4">
            <Link href="/proposal">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white rounded-full px-6 border-0">
                Start Project
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 text-white rounded-full px-6 border-0">
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
                 <a className="block p-2 text-lg font-medium hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>Portfolio</a>
               </Link>
            </div>

            <div>
              <h4 className="text-sm font-bold text-muted-foreground uppercase mb-2 px-2">Resources</h4>
              <div className="grid grid-cols-1 gap-1">
                {resourcesList.map((item) => (
                  <Link key={item.title} href={item.href}>
                    <a className="block p-2 text-lg hover:bg-white/5 rounded-lg" onClick={() => setIsOpen(false)}>
                      {item.title}
                    </a>
                  </Link>
                ))}
              </div>
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
              <Link href="/contact">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  Let's Talk
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
