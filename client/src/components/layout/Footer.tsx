import { Rocket, Mail, MapPin, Phone, Github, Twitter, Linkedin, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";

export function Footer() {
  const [location] = useLocation();
  const isIndustryPage = location.startsWith('/industries/');

  return (
    <>
      {/* Smart Marketing Banner - Hidden on Industry Pages */}
      {!isIndustryPage && (
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 py-16">
          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight text-center md:text-left">
              It's Time to Market Smarter <br className="hidden md:block" />
              Not Harder!
            </h2>
            
            <Link href="/contact">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-purple-600 transition-all duration-300">
                  <ArrowRight className="h-5 w-5 text-white group-hover:text-purple-600" />
                </div>
                <span className="text-xl font-medium text-white">Talk to Us</span>
              </div>
            </Link>
          </div>
        </div>
      )}

      <footer className="bg-background border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-2xl font-bold font-heading tracking-tighter">
                <Rocket className="h-6 w-6 text-primary" />
                NEXUS
              </div>
              <p className="text-muted-foreground">
                Empowering businesses with next-gen digital solutions, brand strategy, and AI-driven growth.
              </p>
            </div>
            
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">Brand Creation</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Digital Marketing</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Web Development</li>
                <li className="hover:text-primary cursor-pointer transition-colors">AI Agents</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Blog</li>
                <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Connect</h3>
              <div className="flex gap-4 mb-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
              <div className="space-y-2 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> hello@nexus.agency
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> 123 Innovation Blvd, Tech City
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Nexus Digital Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
