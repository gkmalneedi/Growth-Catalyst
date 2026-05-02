import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IndustriesSlider } from "@/components/IndustriesSlider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Search, BarChart, Globe, MessageCircle, Megaphone, Share2, Target, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import smoHeroImg from "@assets/generated_images/social_media_mobile_app_interface_with_engagement_icons.png";
import fabpikImg from "@assets/generated_images/happy_child_shopping_for_ecommerce_success.png";
import monarchImg from "@assets/generated_images/modern_office_space_for_furniture_brand.png";
import centroImg from "@assets/generated_images/futuristic_athletic_shoe_for_footwear_brand.png";

const stats = [
  { value: "80%", label: "Increase in brand visibility" },
  { value: "5x", label: "Growth in social traffic" },
  { value: "75%", label: "Improvement in customer retention" },
  { value: "2x", label: "Lead Generation" },
];

const services = [
  { icon: <Target className="h-7 w-7" />, title: "Profile Optimization", desc: "Get a polished profile that captivates audiences and boosts visibility and searchability. We optimize bios, images, and links for maximum impact." },
  { icon: <Share2 className="h-7 w-7" />, title: "Compelling Content Strategy", desc: "We craft a tailored content calendar, identifying optimal posting times and determining the right content mix to engage audiences." },
  { icon: <Users className="h-7 w-7" />, title: "Audience Analysis", desc: "We harness AI analytics to decode audience demographics and behaviors, refining content targeting for maximum impact." },
  { icon: <MessageCircle className="h-7 w-7" />, title: "Community Management", desc: "We nurture your community and foster a positive brand image by actively responding to the comments of your followers." },
  { icon: <Megaphone className="h-7 w-7" />, title: "Paid Social Media Advertising", desc: "We craft, execute, and track targeted paid advertising campaigns across social platforms, elevating your visibility and driving leads." },
  { icon: <Search className="h-7 w-7" />, title: "Hashtag Research & Optimization", desc: "We identify trending and relevant hashtags to increase the reach of your posts and tap into new audiences." },
  { icon: <BarChart className="h-7 w-7" />, title: "Competitor Analysis", desc: "We keep a vigilant eye on your competitors' social tactics, uncovering opportunities for your brand to stand out and excel." },
  { icon: <Globe className="h-7 w-7" />, title: "Social SEO Integration", desc: "We fuse social media with SEO tactics, amplifying your online presence and climbing search engine rankings." },
  { icon: <Star className="h-7 w-7" />, title: "Influencer Collaboration", desc: "We team up with influencers to expand your brand's reach and credibility among your target audience." },
];

const faqs = [
  {
    q: "How can AI-powered SMO help our business?",
    a: "AI-powered SMO harnesses advanced algorithms to analyze data, optimize content, and target audiences with precision, maximizing engagement and growth across all social platforms."
  },
  {
    q: "How can AI-fueled SMO strategies drive success?",
    a: "AI-fueled strategies allow for real-time trend analysis, predictive engagement modeling, and automated content personalization, ensuring your brand stays ahead of the curve."
  },
  {
    q: "What makes Nexus SMO services different?",
    a: "We blend creative storytelling with data-driven AI insights. We don't just post content; we engineer viral moments and build lasting communities through strategic, algorithm-friendly engagement tactics."
  },
  {
    q: "How long before we see measurable SMO results?",
    a: "Most clients see significant engagement and visibility improvements within the first 30–45 days. We provide transparent monthly reports so you always know how your brand is growing."
  }
];

export default function SocialMediaOptimization() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* ── 1. HERO ── */}
      <section className="relative pt-36 pb-0 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(193,53,132,0.12),transparent_55%)] pointer-events-none" />

        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: text */}
            <div className="lg:w-1/2 pb-16 lg:pb-28">
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-medium tracking-widest uppercase text-zinc-400 mb-8"
              >
                Social Media Optimization
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.05] mb-8"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">Social Media</span> Magic to Make You{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">'Unmissable'</span> from 'Invisible'!
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
                className="text-lg text-zinc-400 leading-relaxed max-w-lg mb-10"
              >
                Imagine your brand trending in every feed — our SMO strategies and tactics make it happen with AI-powered precision.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
              >
                <Link href="/contact">
                  <Button size="lg" className="rounded-full h-14 px-9 text-lg bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_40px_-10px_rgba(225,48,108,0.5)] hover:scale-105 transition-all duration-300 group">
                    Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right: hero image */}
            <div className="lg:w-1/2 relative self-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none" />
                <img
                  src={smoHeroImg}
                  alt="Social Media Optimization"
                  className="w-full h-auto rounded-t-3xl object-cover"
                  style={{ maxHeight: "520px", objectPosition: "top" }}
                />
                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-10 -left-6 flex items-center gap-3 bg-zinc-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
                >
                  <TrendingUp className="h-5 w-5 text-brand-orange" />
                  <span className="text-white text-sm font-semibold">Reach Boosted 5x</span>
                </motion.div>
                <motion.div
                  animate={{ y: [6, -6, 6] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-16 -right-6 flex items-center gap-3 bg-zinc-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-white text-sm font-semibold">AI-Powered SMO</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. STATS + REDEFINED (Miraki-style split) ── */}
      <section className="bg-zinc-950 text-white border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row">

            {/* Left: 2×2 stats */}
            <div className="lg:w-1/2 py-20 lg:pr-20 border-b lg:border-b-0 lg:border-r border-white/8">
              <div className="grid grid-cols-2 gap-0">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`py-10 ${i % 2 === 0 ? "pr-10 border-r border-white/8" : "pl-10"} ${i < 2 ? "border-b border-white/8" : ""}`}
                  >
                    <div className="w-10 h-[3px] bg-white mb-5 rounded-full" />
                    <div className="text-5xl md:text-6xl font-black font-heading text-white mb-3">{stat.value}</div>
                    <div className="text-zinc-400 text-sm leading-snug">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: redefined text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 py-20 lg:pl-20 flex flex-col justify-center"
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Social Engagement Redefined
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Capture your audience where they spend most of their time — social media. Over 90% of your target audience is active on platforms like Facebook, Instagram, Twitter and YouTube. We use AI to draw attention and promote your brand effectively. We ensure maximum engagement and resonance through sentiment analysis, trend forecasting, and personalized content distribution.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. SERVICES GRID ── */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-16 max-w-3xl"
          >
            The Social Media Magic Happens with Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">
              Tailored Services
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="group p-8 bg-black hover:bg-zinc-900 transition-colors duration-300"
              >
                <div className="text-brand-rose mb-5 group-hover:text-brand-orange transition-colors duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-4">{item.title}</h3>
                <div className="w-8 h-[2px] bg-gradient-to-r from-brand-pink to-brand-yellow mb-4 rounded-full" />
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. INDUSTRIES ── */}
      <IndustriesSlider />

      {/* ── 5. SUCCESS STORIES ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-14">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 leading-tight">
              Some Success Stories <br /> To Inspire You
            </h2>
            <Link href="/contact">
              <Button variant="ghost" className="text-lg text-zinc-800 group flex items-center gap-2 hover:bg-transparent hover:text-brand-pink">
                See all
                <div className="w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center group-hover:bg-brand-pink group-hover:border-brand-pink group-hover:text-white transition-all duration-300">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <SuccessCard img={fabpikImg} badge="Fabpik" title="50% Jump in Brand Visibility: FabPik's in Kids' e-commerce" />
            <SuccessCard img={monarchImg} badge="Monarch" title="From Hidden to Highlighted: Global Office Furniture Brand's Digital Leap with Us" />
            <SuccessCard img={centroImg} badge="Centro" title="Leading Footwear Brand CENTRO Achieves Sales Growth with Our Social Media Magic!" />
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ── */}
      <section className="py-24 bg-zinc-950 text-white section-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-4">FAQs</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400 leading-relaxed">
              As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients make informed decisions.
            </p>
          </div>
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-brand-orange py-7 text-white text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 pb-6 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
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
        <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-md text-xs font-bold text-white bg-gradient-to-r from-brand-pink to-brand-red">
          {badge}
        </div>
        <img src={img} alt={badge} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="text-base font-bold font-heading text-zinc-900 leading-snug group-hover:text-brand-pink transition-colors duration-200">
        {title}
      </h3>
    </div>
  );
}
