import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation, Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { industriesList } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import fabpikImg from "@assets/generated_images/happy_child_shopping_for_ecommerce_success.png";
import monarchImg from "@assets/generated_images/modern_office_space_for_furniture_brand.png";
import centroImg from "@assets/generated_images/futuristic_athletic_shoe_for_footwear_brand.png";

const partnerLogos = [
  {
    id: "clevertap",
    content: (
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-full border-2 border-red-500 flex items-center justify-center flex-shrink-0">
          <span className="text-red-500 text-xs font-bold">C</span>
        </div>
        <span className="text-white text-lg font-bold font-heading">CleverTap</span>
      </div>
    ),
  },
  {
    id: "hubspot",
    content: (
      <div className="flex items-center gap-2">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#FF7A59">
          <path d="M22.4 11.6c-.6-1.4-1.8-2.4-3.2-2.8V6.6c.7-.4 1.2-1.1 1.2-2 0-1.3-1-2.3-2.3-2.3s-2.3 1-2.3 2.3c0 .9.5 1.6 1.2 2v2.2c-1 .3-1.9.8-2.6 1.5L6.7 6.4c.1-.2.1-.4.1-.6C6.8 4.2 5.6 3 4.1 3S1.4 4.2 1.4 5.8s1.2 2.8 2.7 2.8c.5 0 1-.1 1.4-.4l7.5 4c-.1.4-.2.7-.2 1.1 0 .7.2 1.4.5 2l-2.4 2.4c-.2-.1-.4-.1-.6-.1-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2c0-.1 0-.3-.1-.4l2.3-2.3c.8.5 1.7.8 2.7.8 2.8 0 5.1-2.3 5.1-5.1-.1-1.3-.5-2.4-1.3-3z" />
        </svg>
        <span className="text-white text-lg font-bold font-heading">HubSpot</span>
      </div>
    ),
  },
  {
    id: "google",
    content: (
      <div className="flex items-center gap-2">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 7l9 5 9-5-9-5z" fill="#4285F4" />
          <path d="M3 7v10l9 5V12L3 7z" fill="#34A853" />
          <path d="M21 7v10l-9 5V12l9-5z" fill="#EA4335" />
        </svg>
        <span className="text-white text-lg font-bold font-heading">Google Ads</span>
      </div>
    ),
  },
  {
    id: "meta",
    content: (
      <div className="flex items-center gap-2">
        <span className="text-blue-500 text-xl font-bold leading-none">∞∞</span>
        <span className="text-white text-lg font-bold font-heading">Meta</span>
      </div>
    ),
  },
];

export default function IndustryTemplate() {
  const [location] = useLocation();
  const slug = location.split("/industries/")[1];

  const { data: industry, isLoading } = useQuery<any>({
    queryKey: [`/api/industries/${slug}`],
    enabled: !!slug,
    retry: false,
  });

  const fallback = industriesList.find(i => i.href === location);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-zinc-400 text-lg">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!industry && !fallback) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
            <Link href="/industries">
              <Button className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white rounded-full px-8 h-12">All Industries</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const data = industry || fallback;
  const title = data.title;
  const heroStats = (data.heroStats && data.heroStats.length > 0) ? data.heroStats : [
    { value: "200%+", label: "Higher customer engagement", color: "from-brand-pink to-brand-rose" },
    { value: "300%+", label: "Improved customer trust", color: "from-brand-red to-brand-orange-dark" },
    { value: "80%+", label: "Increased conversion rate", color: "from-brand-orange to-brand-yellow" },
  ];
  const faqs = (data.faqs && data.faqs.length > 0) ? data.faqs : [
    { q: `What is AI-powered ${title} marketing?`, a: `AI-powered ${title} marketing uses artificial intelligence to improve and automate marketing tasks, enabling personalized recommendations, optimized strategies, and targeted campaigns based on customer behavior.` },
    { q: `How can AI improve my ${title} conversion rates?`, a: `AI analyzes vast amounts of user data to predict buying behavior, enabling real-time personalization of content, offers, and suggestions that increase the likelihood of conversion.` },
    { q: `How do you measure success of ${title} campaigns?`, a: `We track key KPIs such as ROAS, CAC, Conversion Rate, and CLV to ensure your campaigns deliver tangible business results.` },
    { q: `How quickly can we expect results?`, a: `Most ${title} clients see measurable improvements within 30–60 days. We share transparent monthly reports with clear KPI tracking.` },
  ];
  const precisionText = data.precisionText || `We utilize advanced analytics to deeply understand your ${title} audience and craft personalized campaigns that resonate. Our data-driven approach, guided by human expertise, ensures you attract and retain the loyal customers your ${title} business deserves.`;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-32 overflow-hidden bg-zinc-950 text-white section-black">
        {data.heroImage && (
          <div className="absolute inset-0 z-0">
            <img src={data.heroImage} alt="" className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-transparent to-zinc-950" />
          </div>
        )}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(193,53,132,0.12),transparent_55%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-medium tracking-widest uppercase text-zinc-400 mb-8">
            {title}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.05] mb-8 max-w-5xl mx-auto">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-rose">Crush</span> Your Competitors with Our AI-powered{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">{title} Marketing!</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="text-xl text-zinc-400 mb-14 max-w-2xl mx-auto leading-relaxed">
            Expert {title} Digital Marketing to Make Your Business Shine Online and drive unprecedented growth
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="flex items-center justify-center gap-4">
            <Link href="/contact">
              <button className="group flex items-center gap-4 text-white hover:opacity-80 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-brand-pink group-hover:bg-brand-pink/10 transition-all duration-300">
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <span className="text-xl font-medium">Talk to Us</span>
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* PARTNERS STRIP */}
      <section className="bg-zinc-950 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="border-t border-white/10 py-8">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-shrink-0 md:w-44">
                <p className="text-sm text-zinc-400 leading-snug">
                  Partners Driving<br />
                  <span className="text-white font-medium">{title} Success</span>
                </p>
              </div>
              <div className="hidden md:block w-px h-10 bg-white/10 flex-shrink-0" />
              <div className="flex flex-wrap items-center gap-10 md:gap-16">
                {partnerLogos.map(p => (
                  <div key={p.id} className="opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-default">{p.content}</div>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-white/10" />
        </div>
      </section>

      {/* BOOST BRAND AWARENESS */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Boost Brand Awareness By More Than{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">50%</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                As a leading {title} marketing company, MAI helps businesses of all sizes craft personalized customer journeys through cutting-edge AI and advanced marketing techniques. We go beyond the surface with insight-driven strategies that turn even window shoppers into loyal customers.
              </p>
            </motion.div>
            <div className="lg:w-1/2 flex flex-col justify-center gap-0">
              {heroStats.map((stat: any, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`flex items-center gap-6 py-6 ${i < heroStats.length - 1 ? "border-b border-white/8" : ""}`}>
                  <div className={`text-4xl md:text-5xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r ${stat.color} w-36 flex-shrink-0`}>
                    {stat.value}
                  </div>
                  <div className="text-zinc-400 text-base">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRECISION TARGETING */}
      <section className="py-24 bg-zinc-950 text-white border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl">
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-6">
              Strategy
            </motion.p>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {title} Marketing With Precision Targeting
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl font-medium text-brand-orange mb-6">
              Our Strategies Are Cutting-Edge, Yet Designed With Your Customers In Mind.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }} className="text-zinc-400 text-lg leading-relaxed max-w-3xl">
              {precisionText}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.26 }} className="flex flex-wrap gap-3 mt-10">
              {["AI-Powered Targeting", "Real-Time Analytics", "Audience Segmentation", "Conversion Optimization", "Personalized Journeys", "ROI Tracking"].map(tag => (
                <span key={tag} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300 hover:border-brand-pink/40 hover:text-white transition-colors duration-200 cursor-default">
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-14">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 leading-tight">
              Some Success Stories <br /> To Inspire You
            </h2>
            <Link href="/success-stories">
              <button className="group flex items-center gap-3 text-zinc-800 hover:text-brand-pink transition-colors duration-200">
                <span className="text-lg font-medium">See all</span>
                <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center group-hover:border-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-all duration-300">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SuccessCard img={fabpikImg} badge="Fabpik" title="50% Jump in Brand Visibility: FabPik's in Kids' e-commerce" />
            <SuccessCard img={monarchImg} badge="Monarch" title="From Hidden to Highlighted: Global Office Furniture Brand's Digital Leap with Us" />
            <SuccessCard img={centroImg} badge="Centro" title="Leading Footwear Brand CENTRO Achieves Sales Growth with Our Digital Magic!" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-zinc-950 text-white section-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-4">FAQs</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">Frequently Asked Questions</h2>
            <p className="text-zinc-400 leading-relaxed">
              As a leading digital marketing agency, we provide educational resources and answer key questions to help our {title} clients make informed decisions.
            </p>
          </div>
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq: any, i: number) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-brand-orange py-7 text-white text-left">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-6 text-base leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,53,132,0.12),transparent_65%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-6">Let's Grow Together</p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black mb-10 max-w-4xl mx-auto leading-tight">
              Let's Build Your Strategies to Dominate the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">{title} World!</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_40px_-10px_rgba(225,48,108,0.5)] hover:scale-105 transition-all duration-300 group">
                  Talk to Us <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-xl border-white/20 hover:bg-white/10 bg-transparent text-white">
                  Explore Services
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

function SuccessCard({ img, badge, title }: { img: string; badge: string; title: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3] relative">
        <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-md text-xs font-bold text-white bg-gradient-to-r from-brand-pink to-brand-red">{badge}</div>
        <img src={img} alt={badge} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-base font-bold font-heading text-zinc-900 leading-snug group-hover:text-brand-pink transition-colors duration-200">{title}</h3>
    </div>
  );
}
