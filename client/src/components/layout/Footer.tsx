import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, ArrowRight, MessageCircle } from "lucide-react";
import logoImg from "@assets/MAI_logo_final_transparent.png";
import { Link, useLocation } from "wouter";
import { servicesList, industriesList } from "@/lib/data";

export function Footer() {
  const [location] = useLocation();
  const isIndustryPage = location.startsWith('/industries/') || location === '/about';

  return (
    <>
      {/* Smart Marketing Banner - Hidden on Industry / About Pages */}
      {!isIndustryPage && (
        <div className="bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow py-16">
          <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white tracking-tight text-center md:text-left">
              It's Time to Market Smarter <br className="hidden md:block" />
              Not Harder!
            </h2>
            <Link href="/contact">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="h-12 w-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-brand-pink transition-all duration-300">
                  <ArrowRight className="h-5 w-5 text-white group-hover:text-brand-pink" />
                </div>
                <span className="text-xl font-medium text-white">Talk to Us</span>
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
                <a href="https://instagram.com/mai.agency" target="_blank" rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-pink-500/20 hover:text-pink-400 transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href="https://linkedin.com/company/mai-agency" target="_blank" rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="https://twitter.com/mai_agency" target="_blank" rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-sky-500/20 hover:text-sky-400 transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="https://wa.me/916309966282" target="_blank" rel="noopener noreferrer"
                  className="p-2 bg-white/5 rounded-full hover:bg-green-500/20 hover:text-green-400 transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Services</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {servicesList.map((service) => (
                  <li key={service.title}>
                    <Link href={service.href}>
                      <a className="hover:text-primary cursor-pointer transition-colors">{service.title}</a>
                    </Link>
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
                    <Link href={industry.href}>
                      <a className="hover:text-primary cursor-pointer transition-colors">{industry.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources + Company */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Resources</h3>
              <ul className="space-y-2 text-muted-foreground text-sm mb-6">
                <li><Link href="/resources/blogs"><a className="hover:text-primary cursor-pointer transition-colors">Blogs</a></Link></li>
                <li><Link href="/resources/case-studies"><a className="hover:text-primary cursor-pointer transition-colors">Case Studies</a></Link></li>
                <li><Link href="/resources/press-release"><a className="hover:text-primary cursor-pointer transition-colors">Press Release</a></Link></li>
                <li><Link href="/portfolio"><a className="hover:text-primary cursor-pointer transition-colors">Success Stories</a></Link></li>
              </ul>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Company</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><Link href="/about"><a className="hover:text-primary cursor-pointer transition-colors">About Us</a></Link></li>
                <li><Link href="/contact"><a className="hover:text-primary cursor-pointer transition-colors">Contact</a></Link></li>
                <li><Link href="/privacy-policy"><a className="hover:text-primary cursor-pointer transition-colors">Privacy Policy</a></Link></li>
                <li><Link href="/terms"><a className="hover:text-primary cursor-pointer transition-colors">Terms &amp; Conditions</a></Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Contact</h3>
              <div className="space-y-3 text-muted-foreground text-sm">
                <a href="mailto:hello@marketingaigency.in" className="flex items-start gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>hello@marketingaigency.in</span>
                </a>
                <a href="tel:+916309966282" className="flex items-start gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>+91 6309966282</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>Hyderabad, Telangana, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-muted-foreground text-sm">
            <div>&copy; {new Date().getFullYear()} Marketing AI Agency. All rights reserved.</div>
            <div>Developed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow font-semibold">Gopikrishna Malneedi</span></div>
          </div>
        </div>
      </footer>
    </>
  );
}
