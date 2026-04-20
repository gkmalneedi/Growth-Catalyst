import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Search, Lightbulb, Rocket, BarChart2, RefreshCw, Trophy, Medal, Award, Shield, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroBg from "@assets/generated_images/abstract_blue_vector_wave_background.png";

import { servicesList } from "@/lib/data";

import isoBadge1 from "@assets/stock_images/gold_iso_certificati_34a75bf8.jpg";
import isoBadge2 from "@assets/stock_images/gold_iso_certificati_91c79c8d.jpg";

const heroSlides = [
  {
    label: "AI-Powered Marketing",
    title: "We're the Crusaders of",
    highlight: "Agent Marketing",
    subtitle: "Redefining Engagement"
  },
  {
    label: "Smarter Campaigns",
    title: "We're the Crusaders of",
    highlight: "AI Marketing",
    subtitle: "Redefining Engagement"
  },
  {
    label: "Zero Waste Growth",
    title: "We're the Crusaders of",
    highlight: "Automation",
    subtitle: "Redefining Engagement"
  },
  {
    label: "Maximum Impact",
    title: "We're the Crusaders of",
    highlight: "More ROI",
    subtitle: "Redefining Engagement"
  }
];

const trustedLogos = [
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

const workflowSteps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery & Audit",
    desc: "We deep-dive into your brand, competitors, and audience to uncover hidden growth opportunities and gaps."
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Strategy Development",
    desc: "Our team crafts a custom AI-powered marketing blueprint aligned to your specific business goals."
  },
  {
    number: "03",
    icon: Rocket,
    title: "Campaign Execution",
    desc: "We launch multi-channel campaigns with precision targeting, compelling creatives, and A/B testing."
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Monitor & Optimize",
    desc: "Real-time dashboards and AI analytics ensure every rupee is working harder, continuously improving performance."
  },
  {
    number: "05",
    icon: RefreshCw,
    title: "Report & Scale",
    desc: "Transparent reporting and data-driven scaling decisions that accelerate your growth month over month."
  }
];

const partnerLogos = [
  { name: "Meta", bg: "bg-blue-600", text: "text-white", symbol: "f" },
  { name: "Google Ads", bg: "bg-white", text: "text-zinc-800", symbol: "G" },
  { name: "HubSpot", bg: "bg-orange-500", text: "text-white", symbol: "H" },
  { name: "Bing Ads", bg: "bg-teal-600", text: "text-white", symbol: "B" },
  { name: "Amazon", bg: "bg-yellow-400", text: "text-zinc-900", symbol: "a" },
  { name: "CleverTap", bg: "bg-red-600", text: "text-white", symbol: "CT" },
  { name: "Salesforce", bg: "bg-blue-500", text: "text-white", symbol: "SF" },
  { name: "Mailchimp", bg: "bg-yellow-300", text: "text-zinc-900", symbol: "M" },
  { name: "Semrush", bg: "bg-orange-600", text: "text-white", symbol: "SR" },
  { name: "Shopify", bg: "bg-green-500", text: "text-white", symbol: "S" },
  { name: "Hootsuite", bg: "bg-indigo-600", text: "text-white", symbol: "HS" },
  { name: "Buffer", bg: "bg-sky-500", text: "text-white", symbol: "Bu" },
];

const achievements = [
  { icon: Trophy, value: "50+", label: "Industry Awards Won", color: "text-yellow-400" },
  { icon: Medal, value: "ISO 9001", label: "Quality Management Certified", color: "text-brand-orange" },
  { icon: Shield, value: "ISO 27001", label: "Information Security Certified", color: "text-blue-400" },
  { icon: CheckCircle2, value: "95%", label: "Client Satisfaction Rate", color: "text-green-400" },
  { icon: Award, value: "Top 10", label: "Digital Agency in India 2024", color: "text-brand-pink" },
  { icon: Star, value: "4.9/5", label: "Average Client Rating", color: "text-brand-yellow" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── SECTION 1: HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950" />
        </div>
        {/* Radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,53,132,0.12),transparent_60%)] -z-0" />

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <Carousel
              plugins={[Autoplay({ delay: 2500 })]}
              opts={{ loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {heroSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center">
                      <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block mb-6 px-5 py-2 rounded-full border border-white/10 bg-white/5 text-sm font-medium tracking-widest uppercase text-zinc-300"
                      >
                        {slide.label}
                      </motion.span>
                      <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.1] mb-4">
                        {slide.title} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">
                          {slide.highlight},
                        </span>
                      </h1>
                      <p className="text-2xl md:text-3xl font-heading font-light text-zinc-400 mt-2 mb-6">
                        {slide.subtitle}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              AI-driven strategies. Creative excellence. Measurable results. We help ambitious brands dominate the digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

            {/* Stats bar */}
            <div className="flex flex-wrap justify-center gap-12 mt-20 pt-10 border-t border-white/10">
              {[
                { value: "300%", label: "Avg ROI Delivered" },
                { value: "500+", label: "Campaigns Launched" },
                { value: "68+", label: "Expert Specialists" },
                { value: "10+", label: "Years Experience" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">{s.value}</div>
                  <div className="text-zinc-400 text-sm mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SECTION 2: TRUSTED PARTNERS MARQUEE ── */}
      <section className="py-16 bg-black border-y border-white/5 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-8">
          <p className="text-center text-sm font-medium tracking-widest uppercase text-zinc-500">
            Trusted by leading brands & enterprises worldwide
          </p>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
            {trustedLogos.map((logo, i) => (
              <span key={i} className={`text-xl md:text-2xl font-bold font-heading ${logo.color} opacity-60 hover:opacity-100 transition-opacity mx-6 cursor-default select-none`}>
                {logo.name}
              </span>
            ))}
            {trustedLogos.map((logo, i) => (
              <span key={`d-${i}`} className={`text-xl md:text-2xl font-bold font-heading ${logo.color} opacity-60 hover:opacity-100 transition-opacity mx-6 cursor-default select-none`}>
                {logo.name}
              </span>
            ))}
          </div>
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 items-center">
            {trustedLogos.map((logo, i) => (
              <span key={`d2-${i}`} className={`text-xl md:text-2xl font-bold font-heading ${logo.color} opacity-60 hover:opacity-100 transition-opacity mx-6 cursor-default select-none`}>
                {logo.name}
              </span>
            ))}
            {trustedLogos.map((logo, i) => (
              <span key={`d3-${i}`} className={`text-xl md:text-2xl font-bold font-heading ${logo.color} opacity-60 hover:opacity-100 transition-opacity mx-6 cursor-default select-none`}>
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: HOW WE WORK (WORKFLOW) ── */}
      <section className="py-28 bg-zinc-950 section-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(193,53,132,0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-4"
            >
              Our Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold text-white"
            >
              How We Work <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">With Our Clients</span>
            </motion.h2>
            <p className="text-xl text-zinc-400 mt-6 max-w-2xl mx-auto">
              A proven 5-step framework that transforms your digital presence into a growth engine.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-16 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Icon circle */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full border border-white/10 bg-white/5 flex flex-col items-center justify-center group-hover:border-brand-pink/50 group-hover:bg-white/10 transition-all duration-300">
                      <step.icon className="h-8 w-8 text-brand-orange mb-1" />
                      <span className="text-xs font-bold text-zinc-500 font-heading">{step.number}</span>
                    </div>
                    {/* Number badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-brand-pink to-brand-yellow flex items-center justify-center text-white text-xs font-bold">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white mb-3 group-hover:text-brand-orange transition-colors">{step.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
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
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">
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
            <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-4">Client Love</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Golden Lines That <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">Keep Us Motivated</span>
            </h2>
          </div>

          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  quote: "Nexus's Email Marketing services have truly transformed our outreach strategy. Their personalized approach, AI-driven techniques, and expertly tailored campaigns have significantly increased our engagement rates.",
                  name: "Pradeep Reddy",
                  role: "Senior Manager, Accenture",
                  rating: 5
                },
                {
                  quote: "The SEO squad is terrific at achieving organic traffic! Their genuine care for our growth and attention to detail have truly impressed me. We've seen a remarkable increase in our online visibility.",
                  name: "Ramesh Rathi",
                  role: "GM, CipherCloud",
                  rating: 5
                },
                {
                  quote: "Kudos to your outstanding content marketing services! Your strategic approach, creativity, and profound understanding of our business have truly elevated our brand's voice.",
                  name: "Ashok Boddeda",
                  role: "Director, Sysgain INC",
                  rating: 5
                },
                {
                  quote: "Working with Nexus was a game-changer. Our social media presence grew by 200% in just 3 months. The team's dedication and creativity are unmatched in the industry.",
                  name: "Sunita Sharma",
                  role: "Marketing Head, TechBridge India",
                  rating: 5
                }
              ].map((t, i) => (
                <CarouselItem key={i}>
                  <div className="p-10 md:p-16 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow" />
                    <div className="flex justify-center gap-1 mb-8">
                      {Array.from({ length: t.rating }).map((_, s) => (
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
      <section className="py-28 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-4">Ecosystem</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold">
              Our Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">Partners</span>
            </h2>
            <p className="text-zinc-400 mt-4 text-lg max-w-2xl mx-auto">
              Fast-track your growth with our strategic partners' ecosystem — the world's most powerful marketing platforms.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            {partnerLogos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                {/* Logo placeholder box */}
                <div className={`w-14 h-14 rounded-xl ${logo.bg} flex items-center justify-center font-bold text-xl font-heading ${logo.text} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {logo.symbol}
                </div>
                <span className="text-xs font-medium text-zinc-400 group-hover:text-white transition-colors text-center leading-tight">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: ACHIEVEMENTS & AWARDS ── */}
      <section className="py-28 bg-zinc-950 section-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(252,175,69,0.06),transparent_60%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-4">Recognition</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              What We've <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow via-brand-orange to-brand-orange-dark">Achieved</span>
            </h2>
            <p className="text-zinc-400 mt-4 text-lg">
              Awards demand dedication — and we're always ready to rise to the occasion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 transition-colors">
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <div>
                  <div className={`text-3xl font-bold font-heading ${item.color}`}>{item.value}</div>
                  <div className="text-zinc-400 text-sm mt-1">{item.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ISO Badges showcase */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 p-10 rounded-3xl border border-yellow-500/20 bg-yellow-500/5">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold font-heading text-white mb-2">Internationally Certified</h3>
              <p className="text-zinc-400 max-w-md">Our processes and systems are certified to international standards, ensuring quality and data security at every step.</p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <img src={isoBadge1} alt="ISO 27001" className="h-28 w-28 object-contain drop-shadow-[0_0_20px_rgba(234,179,8,0.4)] mx-auto mb-2" />
                <span className="text-xs text-zinc-400">ISO 27001</span>
              </div>
              <div className="text-center">
                <img src={isoBadge2} alt="ISO 9001" className="h-28 w-28 object-contain drop-shadow-[0_0_20px_rgba(234,179,8,0.4)] mx-auto mb-2" />
                <span className="text-xs text-zinc-400">ISO 9001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CTA BANNER ── */}
      <section className="py-28 bg-gradient-to-br from-brand-pink/10 via-brand-red/5 to-brand-yellow/10 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,48,108,0.15),transparent_70%)]" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-6">Ready to Grow?</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-8 leading-tight">
              Stop Guessing. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">Start Dominating.</span>
            </h2>
            <p className="text-xl text-zinc-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Your competitors aren't waiting. Partner with Nexus today and let AI-powered marketing turn your vision into unstoppable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-16 px-12 text-xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_50px_-10px_rgba(225,48,108,0.6)] hover:scale-105 transition-all duration-300 group">
                  Start Your Journey <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" className="rounded-full h-16 px-12 text-xl border-white/20 hover:bg-white/10 bg-transparent text-white">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
