import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Search, Lightbulb, Rocket, BarChart2, RefreshCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useQuery } from "@tanstack/react-query";

import heroBg from "@assets/generated_images/abstract_blue_vector_wave_background.png";
import { servicesList } from "@/lib/data";

const highlightWords = ["Agent Marketing", "AI Marketing", "Automation", "More ROI"];

const DEFAULT_STATS = [
  { value: "12+", label: "Years Experience" },
  { value: "68+", label: "Expert Specialists" },
  { value: "200+", label: "Number of Clients" },
  { value: "500+", label: "Campaigns Launched" },
  { value: "300%", label: "ROI Delivered" },
];

const DEFAULT_TRUSTED_LOGOS = [
  { name: "Govt of India", color: "text-orange-400" },
  { name: "IDBI Bank", color: "text-green-500" },
  { name: "Philips", color: "text-blue-400" },
  { name: "EuroArt", color: "text-yellow-400" },
  { name: "TechMahindra", color: "text-blue-500" },
  { name: "Accenture", color: "text-purple-400" },
  { name: "Google", color: "text-red-400" },
  { name: "Amazon", color: "text-orange-500" },
  { name: "Microsoft", color: "text-cyan-400" },
  { name: "Netflix", color: "text-red-500" },
  { name: "Spotify", color: "text-green-400" },
  { name: "Airbnb", color: "text-rose-400" },
  { name: "Samsung", color: "text-blue-500" },
  { name: "HubSpot", color: "text-orange-500" },
  { name: "Salesforce", color: "text-blue-400" },
];

const DEFAULT_WORKFLOW = {
  title: "How We Work",
  subtitle: "MAI's Flagship 5-step framework that transforms your digital presence into a growth engine.",
  steps: [
    { number: "01", title: "Discovery & Audit", desc: "We deep-dive into your brand, competitors, and audience to uncover hidden growth opportunities." },
    { number: "02", title: "Strategy Development", desc: "Our team crafts a custom AI-powered marketing blueprint aligned to your business goals." },
    { number: "03", title: "Campaign Execution", desc: "Multi-channel campaigns with precision targeting, compelling creatives, and A/B testing." },
    { number: "04", title: "Monitor & Optimize", desc: "Real-time dashboards and AI analytics ensure every rupee works harder." },
    { number: "05", title: "Report & Scale", desc: "Transparent reporting and data-driven decisions that accelerate growth month over month." },
  ],
};

const DEFAULT_TESTIMONIALS = {
  sectionLabel: "In us, our customers trust",
  title: "Golden Lines That Keep Us Motivated",
  items: [
    { quote: "Nexus's Email Marketing services have truly transformed our outreach strategy. Their personalized approach, AI-driven techniques, and expertly tailored campaigns have significantly increased our engagement rates.", name: "Pradeep Reddy", role: "Senior Manager, Accenture", rating: 5 },
    { quote: "The SEO squad is terrific at achieving organic traffic! Their genuine care for our growth and attention to detail have truly impressed me. We've seen a remarkable increase in our online visibility.", name: "Ramesh Rathi", role: "GM, CipherCloud", rating: 5 },
    { quote: "Kudos to your outstanding content marketing services! Your strategic approach, creativity, and profound understanding of our business have truly elevated our brand's voice.", name: "Ashok Boddeda", role: "Director, Sysgain INC", rating: 5 },
    { quote: "Working with Nexus was a game-changer. Our social media presence grew by 200% in just 3 months. The team's dedication and creativity are unmatched in the industry.", name: "Sunita Sharma", role: "Marketing Head, TechBridge India", rating: 5 },
  ],
};

const DEFAULT_PARTNERS = {
  heading: "We and our partners together propel your growth",
  description: "Fast-track your growth with our strategic partners' ecosystem and unmatched experience in crafting digital dominance for businesses across industries.",
};

const DEFAULT_AWARDS = {
  heading: "It Takes a Lot to Achieve an Award, But We're Always Ready for it",
  description: "Awards Demand Dedication, and We're Always Ready to Rise to the Occasion",
};

// Fixed partner logos with SVG icons
const partnerLogos = [
  {
    id: "meta",
    logo: (
      <div className="flex items-center gap-2">
        <span className="text-blue-500 text-2xl font-bold">∞∞</span>
        <span className="text-white text-xl font-bold font-heading">Meta</span>
      </div>
    )
  },
  {
    id: "google",
    logo: (
      <div className="flex items-center gap-2">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7l9 5 9-5-9-5z" fill="#4285F4"/>
          <path d="M3 7v10l9 5V12L3 7z" fill="#34A853"/>
          <path d="M21 7v10l-9 5V12l9-5z" fill="#EA4335"/>
        </svg>
        <span className="text-white text-xl font-bold font-heading">Google Ads</span>
      </div>
    )
  },
  {
    id: "bing",
    logo: (
      <div className="flex items-center gap-2">
        <span className="text-teal-400 text-2xl font-bold font-heading">b</span>
        <span className="text-white text-xl font-bold font-heading">Bing ads</span>
      </div>
    )
  },
  {
    id: "amazon",
    logo: (
      <div className="flex flex-col items-start">
        <span className="text-white text-xl font-bold font-heading">amazon<span className="text-white font-medium">ads</span></span>
        <div className="h-[2px] w-full bg-gradient-to-r from-orange-400 to-transparent mt-0.5 rounded-full" />
      </div>
    )
  },
  {
    id: "clevertap",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full border-2 border-red-500 flex items-center justify-center">
          <span className="text-red-500 text-xs font-bold">C</span>
        </div>
        <span className="text-white text-xl font-bold font-heading">CleverTap</span>
      </div>
    )
  },
  {
    id: "hubspot",
    logo: (
      <div className="flex items-center gap-2">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="#FF7A59">
          <path d="M22.4 11.6c-.6-1.4-1.8-2.4-3.2-2.8V6.6c.7-.4 1.2-1.1 1.2-2 0-1.3-1-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 .9.5 1.6 1.2 2v2.2c-1 .3-1.9.8-2.6 1.5L6.7 6.4c.1-.2.1-.4.1-.6C6.8 4.2 5.6 3 4.1 3S1.4 4.2 1.4 5.8s1.2 2.8 2.7 2.8c.5 0 1-.1 1.4-.4l7.5 4c-.1.4-.2.7-.2 1.1 0 .7.2 1.4.5 2l-2.4 2.4c-.2-.1-.4-.1-.6-.1-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.1 0-.3-.1-.4l2.3-2.3c.8.5 1.7.8 2.7.8 2.8 0 5.1-2.3 5.1-5.1-.1-1.3-.5-2.4-1.3-3z"/>
        </svg>
        <span className="text-white text-xl font-bold font-heading">Hub<span className="text-orange-400">S</span>pot</span>
      </div>
    )
  }
];

// Fixed award badges
const awardBadges = [
  {
    id: "thub",
    badge: (
      <div className="flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border-4 border-orange-500 flex flex-col items-center justify-center text-center p-4 relative">
          <div className="absolute inset-0 rounded-full border-4 border-orange-500/20" style={{ transform: 'scale(1.06)' }} />
          <span className="text-orange-500 text-4xl font-black font-heading italic leading-none">t-</span>
          <span className="text-white text-4xl font-black font-heading italic leading-none">hub</span>
          <div className="mt-2 text-center">
            <p className="text-zinc-400 text-[9px] tracking-widest uppercase leading-tight">CONVERGE · CONNECT · CREATE</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "goodfirms",
    badge: (
      <div className="flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border-4 border-blue-500 flex flex-col items-center justify-center text-center p-4 relative bg-white/5">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
            <span className="text-white font-bold text-lg">G</span>
          </div>
          <span className="text-white text-sm font-bold font-heading">GoodFirms</span>
          <div className="mt-1 px-3 py-0.5 bg-blue-600 rounded-sm">
            <p className="text-white text-[8px] font-bold tracking-wider uppercase">TOP DIGITAL MARKETING</p>
            <p className="text-white text-[8px] font-bold tracking-wider uppercase">COMPANY</p>
          </div>
          <p className="text-zinc-500 text-[9px] mt-1">goodfirms.co</p>
        </div>
      </div>
    )
  }
];

const stepIcons = [Search, Lightbulb, Rocket, BarChart2, RefreshCw];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);

  const { data: settings = {} } = useQuery<Record<string, any>>({
    queryKey: ["/api/site-settings"],
    staleTime: 5 * 60 * 1000,
  });

  // Data with fallbacks
  const stats: { value: string; label: string }[] = Array.isArray(settings.home_stats) && settings.home_stats.length > 0
    ? settings.home_stats : DEFAULT_STATS;

  const trustedLogos: { name: string; color: string }[] = Array.isArray(settings.home_trusted_logos) && settings.home_trusted_logos.length > 0
    ? settings.home_trusted_logos : DEFAULT_TRUSTED_LOGOS;

  const workflow = settings.home_workflow?.steps?.length
    ? settings.home_workflow : DEFAULT_WORKFLOW;

  const testimonials = settings.home_testimonials?.items?.length
    ? settings.home_testimonials : DEFAULT_TESTIMONIALS;

  const partners = settings.home_partners || DEFAULT_PARTNERS;
  const awards = settings.home_awards || DEFAULT_AWARDS;

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex(prev => (prev + 1) % highlightWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-44 md:pt-48 pb-20 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,53,132,0.1),transparent_65%)]" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="max-w-6xl mx-auto"
          >
            <h1 className="text-[34px] md:text-[52px] lg:text-[66px] font-heading font-black leading-[1.05] tracking-tight text-white mb-1 md:mb-2">
              We're the Crusaders of
            </h1>

            <div className="h-[40px] md:h-[62px] lg:h-[76px] flex items-center justify-center overflow-hidden mb-1 md:mb-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -60 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="text-[34px] md:text-[52px] lg:text-[66px] font-heading font-black leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow block"
                >
                  {highlightWords[wordIndex]},
                </motion.span>
              </AnimatePresence>
            </div>

            <h1 className="text-[34px] md:text-[52px] lg:text-[66px] font-heading font-black leading-[1.05] tracking-tight text-zinc-300 mb-10">
              Redefining Engagement
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              AI-driven strategies. Creative excellence. Measurable results. We help ambitious brands dominate the digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20">
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_40px_-10px_rgba(225,48,108,0.5)] hover:scale-105 transition-all duration-300 group">
                  Let's Connect <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-xl border-white/20 hover:bg-white/10 bg-transparent text-white">
                  Explore Services
                </Button>
              </Link>
            </div>

            {/* Stats bar from site settings */}
            <div className="flex flex-wrap justify-center gap-10 pt-10 border-t border-white/10">
              {stats.map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">{s.value}</div>
                  <div className="text-zinc-500 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: TRUSTED PARTNERS MARQUEE ── */}
      <section className="py-14 bg-black border-y border-white/5 overflow-hidden text-[19px] font-bold">
        <div className="container mx-auto px-4 md:px-8 mb-8">
          <p className="text-center text-xs font-medium tracking-widest uppercase text-zinc-500">
            Trusted by leading brands &amp; enterprises worldwide
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
            {trustedLogos.map((logo, i) => (
              <span key={i} className={`text-xl md:text-2xl font-bold font-heading ${logo.color || "text-white"} opacity-50 hover:opacity-100 transition-opacity mx-6 cursor-default select-none`}>
                {logo.name}
              </span>
            ))}
            {trustedLogos.map((logo, i) => (
              <span key={`d-${i}`} className={`text-xl md:text-2xl font-bold font-heading ${logo.color || "text-white"} opacity-50 hover:opacity-100 transition-opacity mx-6 cursor-default select-none`}>
                {logo.name}
              </span>
            ))}
          </div>
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 items-center">
            {trustedLogos.map((logo, i) => (
              <span key={`d2-${i}`} className={`text-xl md:text-2xl font-bold font-heading ${logo.color || "text-white"} opacity-50 hover:opacity-100 transition-opacity mx-6 cursor-default select-none`}>
                {logo.name}
              </span>
            ))}
            {trustedLogos.map((logo, i) => (
              <span key={`d3-${i}`} className={`text-xl md:text-2xl font-bold font-heading ${logo.color || "text-white"} opacity-50 hover:opacity-100 transition-opacity mx-6 cursor-default select-none`}>
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW WE WORK ── */}
      <section className="py-28 bg-zinc-950 section-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(193,53,132,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-4">Our Process</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
              {workflow.title}
            </h2>
            <p className="text-xl text-zinc-400 mt-6 max-w-2xl mx-auto">
              {workflow.subtitle}
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {(workflow.steps || []).map((step: { number: string; title: string; desc: string }, i: number) => {
                const StepIcon = stepIcons[i] || stepIcons[0];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center text-center group"
                  >
                    <div className="relative mb-6">
                      <div className="w-32 h-32 rounded-full border border-white/10 bg-white/5 flex flex-col items-center justify-center group-hover:border-brand-pink/50 group-hover:bg-white/10 transition-all duration-300">
                        <StepIcon className="h-8 w-8 text-brand-orange mb-1" />
                        <span className="text-xs font-bold text-zinc-500 font-heading">{step.number}</span>
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-brand-pink to-brand-yellow flex items-center justify-center text-white text-xs font-bold">
                        {i + 1}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold font-heading text-white mb-3 group-hover:text-brand-orange transition-colors">{step.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-16">
            <Link href="/about">
              <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_40px_-10px_rgba(225,48,108,0.5)] hover:scale-105 transition-all duration-300 group">
                Know More About Us <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SERVICES OVERVIEW ── */}
      <section className="py-28 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-4">What We Do</p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">Tailored Services</span>
              </h2>
            </div>
            <Link href="/services">
              <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_40px_-10px_rgba(225,48,108,0.5)] hover:scale-105 transition-all duration-300 group flex-shrink-0">
                All Services <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.slice(0, 6).map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={service.href}>
                  <div className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-pink/30 hover:shadow-2xl hover:shadow-brand-pink/10 transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-brand-pink/20 to-brand-yellow/10 flex items-center justify-center mb-6 group-hover:from-brand-pink/40 group-hover:to-brand-yellow/20 transition-all duration-300 text-brand-rose">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 text-white group-hover:text-brand-orange transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">{service.description}</p>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-pink group-hover:text-brand-yellow transition-colors flex items-center gap-2">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TESTIMONIALS ── */}
      <section className="py-28 bg-zinc-950 section-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(253,29,29,0.06),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-4">
              {testimonials.sectionLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              {testimonials.title.includes("Keep Us") ? (
                <>
                  {testimonials.title.split("Keep Us")[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">Keep Us{testimonials.title.split("Keep Us")[1]}</span>
                </>
              ) : testimonials.title}
            </h2>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {(testimonials.items || []).map((t: { quote: string; name: string; role: string; rating: number }, i: number) => (
                <CarouselItem key={i}>
                  <div className="p-10 md:p-16 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow" />
                    <div className="flex justify-center gap-1 mb-8">
                      {Array.from({ length: Number(t.rating) || 5 }).map((_, s) => (
                        <Star key={s} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-lg md:text-2xl font-medium leading-relaxed mb-10 text-zinc-200 italic">"{t.quote}"</p>
                    <div>
                      <div className="font-bold text-lg text-white mb-1">{t.name}</div>
                      <div className="text-brand-orange text-sm font-medium">{t.role}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-10">
              <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/20 text-white hover:bg-white/20 h-12 w-12 rounded-full" />
              <CarouselNext className="static translate-y-0 bg-white/5 border-white/20 text-white hover:bg-white/20 h-12 w-12 rounded-full" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* ── SECTION 6: PARTNER LOGOS ── */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 grid grid-cols-3 gap-x-12 gap-y-10 items-center">
              {partnerLogos.map((p) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-start"
                >
                  {p.logo}
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-6">
                {partners.heading}
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                {partners.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: AWARDS ── */}
      <section className="py-24 bg-black text-white border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight mb-6">
                {awards.heading}
              </h2>
              <p className="text-zinc-400 text-lg">
                {awards.description}
              </p>
            </motion.div>
            <div className="md:w-1/2">
              <Carousel opts={{ loop: true }} plugins={[Autoplay({ delay: 3000 })]}>
                <CarouselContent>
                  {awardBadges.map((badge) => (
                    <CarouselItem key={badge.id}>
                      <div className="flex items-center justify-center py-8">
                        {badge.badge}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center gap-2 mt-4">
                  {awardBadges.map((_, i) => (
                    <div key={i} className="h-2 w-2 rounded-full bg-white/30" />
                  ))}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
