import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, Youtube, Facebook, ArrowRight } from "lucide-react";
import logoImg from "@assets/MAI_logo_final_transparent.png";
import { Link, useLocation } from "wouter";
import { servicesList, industriesList } from "@/lib/data";
import { useQuery } from "@tanstack/react-query";

const DEFAULT_SOCIAL = {
  instagram: "https://www.instagram.com/marketingaigency/",
  linkedin: "https://www.linkedin.com/company/marketingaigency/",
  twitter: "https://x.com/MAIgency",
  youtube: "https://www.youtube.com/@MarketingAIgency",
  facebook: "https://www.facebook.com/marketingaigency",
};

const DEFAULT_CONTACT = {
  email: "info@marketingaigency.in",
  phone: "+91 6309966282",
  address: "Flat No. 102, Life Style Building, Plot No 1038 & 1039, 3monkeys circle, Pragathi Nagar, Hyderabad, Telangana 500090",
};

const DEFAULT_BANNER = {
  title: "It's Time to Market Smarter Not Harder!",
  ctaText: "Talk to Us",
  ctaHref: "/contact",
};

const DEFAULT_COPYRIGHT = {
  text: "Marketing AI Agency. All rights reserved.",
  developer: "Gopikrishna Malneedi",
};

export function Footer() {
  const [location] = useLocation();
  const isIndustryPage = location.startsWith('/industries/') || location === '/about';

  const { data: settings = {} } = useQuery<Record<string, any>>({
    queryKey: ["/api/site-settings"],
    staleTime: 5 * 60 * 1000,
  });

  const social = { ...DEFAULT_SOCIAL, ...(settings.footer_social || {}) };
  const contact = { ...DEFAULT_CONTACT, ...(settings.footer_contact || {}) };
  const banner = { ...DEFAULT_BANNER, ...(settings.footer_banner || {}) };
  const copyright = { ...DEFAULT_COPYRIGHT, ...(settings.footer_copyright || {}) };

  return (
    <>
      {/* Smart Marketing Banner - Hidden on Industry / About Pages */}
      {!isIndustryPage && (
        <div className="bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow py-16">
          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight text-center md:text-left">
              {banner.title}
            </h2>
            <Link href={banner.ctaHref || "/contact"}>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-brand-pink transition-all duration-300">
                  <ArrowRight className="h-5 w-5 text-white group-hover:text-brand-pink" />
                </div>
                <span className="text-xl font-medium text-white">{banner.ctaText}</span>
              </div>
            </Link>
          </div>
        </div>
      )}

      <footer className="bg-background border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">

          {/* Main grid: logo, services, industries, company, connect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">

            {/* Brand column */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center">
                <img src={logoImg} alt="Nexus" className="object-contain" style={{ width: 180, height: "auto" }} />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Empowering businesses with next-gen digital solutions, brand strategy, and AI-driven growth.
              </p>
              <div className="flex gap-3 pt-1">
                <a href={social.instagram} target="_blank" rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-pink-500/20 hover:text-pink-400 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href={social.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={social.twitter} target="_blank" rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-sky-500/20 hover:text-sky-400 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href={social.youtube} target="_blank" rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-red-500/20 hover:text-red-400 transition-colors">
                  <Youtube className="h-4 w-4" />
                </a>
                <a href={social.facebook} target="_blank" rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-blue-600/20 hover:text-blue-400 transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Services</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {servicesList.map((service) => (
                  <li key={service.title}>
                    <Link href={service.href} className="hover:text-primary cursor-pointer transition-colors">{service.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Industries</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {industriesList.map((industry) => (
                  <li key={industry.title}>
                    <Link href={industry.href} className="hover:text-primary cursor-pointer transition-colors">{industry.title}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Company</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link href="/about" className="hover:text-primary cursor-pointer transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary cursor-pointer transition-colors">Contact</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-primary cursor-pointer transition-colors">Terms &amp; Conditions</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Contact</h3>
              <div className="space-y-3 text-muted-foreground text-sm">
                <a href={`mailto:${contact.email}`} className="flex items-start gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{contact.email}</span>
                </a>
                <a href={`tel:${contact.phone?.replace(/\s/g, "")}`} className="flex items-start gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{contact.phone}</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{contact.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-muted-foreground text-sm">
            <div>&copy; {new Date().getFullYear()} {copyright.text}</div>
            <div>Developed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow font-semibold">{copyright.developer}</span></div>
          </div>
        </div>
      </footer>
    </>
  );
}
