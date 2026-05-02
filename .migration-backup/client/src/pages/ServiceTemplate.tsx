import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IndustriesSlider } from "@/components/IndustriesSlider";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BarChart, Users, Globe, Star, MessageCircle, Megaphone, Share2, Target, Search, Zap, TrendingUp, Database, Settings, FileText, PenTool, Eye, Layers, Palette, Lightbulb, Shield, Heart, Mail, Layout, Video, Rocket, Award, Gauge, Workflow, BrainCircuit } from "lucide-react";
import { useLocation } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { servicesList } from "@/lib/data";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import automationImg from "@assets/generated_images/marketing_automation_workflow_3d.png";
import socialImg from "@assets/generated_images/social_media_network_3d.png";
import seoImg from "@assets/generated_images/seo_search_concept_3d.png";
import brandImg from "@assets/generated_images/brand_identity_diamond_3d.png";
import contentImg from "@assets/generated_images/content_creation_abstract_3d.png";
import whatsappImg from "@assets/generated_images/whatsapp_chat_bubble_3d.png";
import emailImg from "@assets/generated_images/email_envelope_future_3d.png";
import uiuxImg from "@assets/generated_images/ui_ux_interface_layers_3d.png";
import videoImg from "@assets/generated_images/video_play_button_3d.png";

import fabpikImg from "@assets/generated_images/happy_child_shopping_for_ecommerce_success.png";
import monarchImg from "@assets/generated_images/modern_office_space_for_furniture_brand.png";
import centroImg from "@assets/generated_images/futuristic_athletic_shoe_for_footwear_brand.png";

const serviceImages: Record<string, string> = {
  "marketing-automation": automationImg,
  "social-media-marketing": socialImg,
  "seo-sem": seoImg,
  "brand-management": brandImg,
  "content-marketing": contentImg,
  "whatsapp-marketing": whatsappImg,
  "email-marketing": emailImg,
  "ui-ux-design": uiuxImg,
  "video-production": videoImg,
};

const iconMap: Record<string, React.ReactNode> = {
  "Workflow Efficiency": <Workflow className="h-7 w-7" />,
  "Lead Nurturing": <Heart className="h-7 w-7" />,
  "Data Integration": <Database className="h-7 w-7" />,
  "Audit & Blueprint": <Search className="h-7 w-7" />,
  "Platform Setup": <Settings className="h-7 w-7" />,
  "Workflow Creation": <Layers className="h-7 w-7" />,
  "Performance Tuning": <Gauge className="h-7 w-7" />,
  "Brand Awareness": <Megaphone className="h-7 w-7" />,
  "Community Building": <Users className="h-7 w-7" />,
  "Viral Growth": <TrendingUp className="h-7 w-7" />,
  "Audience Analysis": <Eye className="h-7 w-7" />,
  "Content Calendar": <FileText className="h-7 w-7" />,
  "Engagement Management": <MessageCircle className="h-7 w-7" />,
  "Analytics Reporting": <BarChart className="h-7 w-7" />,
  "Organic Traffic": <Globe className="h-7 w-7" />,
  "High Intent Leads": <Target className="h-7 w-7" />,
  "Authority Building": <Award className="h-7 w-7" />,
  "Keyword Research": <Search className="h-7 w-7" />,
  "On-Page Optimization": <Settings className="h-7 w-7" />,
  "Link Building": <Share2 className="h-7 w-7" />,
  "Conversion Optimization": <Gauge className="h-7 w-7" />,
  "Consistent Identity": <Palette className="h-7 w-7" />,
  "Emotional Connection": <Heart className="h-7 w-7" />,
  "Premium Positioning": <Award className="h-7 w-7" />,
  "Brand Audit": <Search className="h-7 w-7" />,
  "Identity Design": <PenTool className="h-7 w-7" />,
  "Guidelines Creation": <FileText className="h-7 w-7" />,
  "Rollout Strategy": <Rocket className="h-7 w-7" />,
  "Thought Leadership": <Lightbulb className="h-7 w-7" />,
  "SEO Fuel": <Search className="h-7 w-7" />,
  "Lead Magnet": <Target className="h-7 w-7" />,
  "Content Strategy": <BrainCircuit className="h-7 w-7" />,
  "Production": <Video className="h-7 w-7" />,
  "Distribution": <Share2 className="h-7 w-7" />,
  "Performance Analysis": <BarChart className="h-7 w-7" />,
  "Instant Reach": <Zap className="h-7 w-7" />,
  "Direct Communication": <MessageCircle className="h-7 w-7" />,
  "Automated Support": <BrainCircuit className="h-7 w-7" />,
  "Audience Segmentation": <Users className="h-7 w-7" />,
  "Template Design": <Layout className="h-7 w-7" />,
  "Automation Setup": <Settings className="h-7 w-7" />,
  "Campaign Launch": <Rocket className="h-7 w-7" />,
  "High ROI": <TrendingUp className="h-7 w-7" />,
  "Personalization": <Heart className="h-7 w-7" />,
  "Lifecycle Marketing": <Workflow className="h-7 w-7" />,
  "List Cleaning": <Shield className="h-7 w-7" />,
  "Flow Construction": <Layers className="h-7 w-7" />,
  "Creative Design": <PenTool className="h-7 w-7" />,
  "A/B Testing": <Gauge className="h-7 w-7" />,
  "User Satisfaction": <Heart className="h-7 w-7" />,
  "Higher Conversions": <TrendingUp className="h-7 w-7" />,
  "Reduced Churn": <Shield className="h-7 w-7" />,
  "User Research": <Eye className="h-7 w-7" />,
  "Wireframing": <Layout className="h-7 w-7" />,
  "Visual Design": <Palette className="h-7 w-7" />,
  "Prototyping": <Layers className="h-7 w-7" />,
  "Higher Engagement": <TrendingUp className="h-7 w-7" />,
  "Complex Explanations": <Lightbulb className="h-7 w-7" />,
  "Brand Personality": <Star className="h-7 w-7" />,
  "Storyboarding": <FileText className="h-7 w-7" />,
  "Post-Production": <Settings className="h-7 w-7" />,
  "Format Optimization": <Gauge className="h-7 w-7" />,
};

const getIcon = (title: string) => iconMap[title] || <Star className="h-7 w-7" />;

export default function ServiceTemplate() {
  const [location] = useLocation();
  const slug = location.split("/services/")[1];

  const { data: service, isLoading } = useQuery<any>({
    queryKey: [`/api/services/${slug}`],
    enabled: !!slug,
    retry: false,
  });

  const fallback = servicesList.find(s => s.href === location);

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

  if (!service && !fallback) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <Link href="/services">
              <Button className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white rounded-full px-8 h-12">
                All Services
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const data = service || fallback;
  const title = data.title;
  const description = data.description;
  const stats = (data.stats && data.stats.length > 0) ? data.stats : [
    { value: "100%", label: "Commitment to Quality" },
    { value: "24/7", label: "Support & Monitoring" },
    { value: "10x", label: "ROI Improvement" },
    { value: "50+", label: "Happy Clients" },
  ];
  const redefined = data.redefined || { title: "Service Redefined", desc: `Experience ${title} like never before. We combine cutting-edge technology with human creativity to deliver results that matter.` };
  const benefits: { title: string; desc: string }[] = data.benefits || [];
  const process: { title: string; desc: string }[] = data.process || [];
  const faqs: { q: string; a: string }[] = data.faqs || [
    { q: `How can ${title} help our business grow?`, a: `Our strategic approach to ${title} ensures every action is aligned with your business goals, driving measurable growth and higher ROI.` },
    { q: `What makes your ${title} services unique?`, a: `We blend creative storytelling with AI-powered analytics to engineer strategies that adapt to market trends in real-time.` },
    { q: `How do you measure success in ${title}?`, a: `We use a comprehensive suite of KPIs from engagement metrics and conversion rates to customer lifetime value and brand sentiment.` },
    { q: `How long before we see results?`, a: `Most clients see measurable impact within 30–60 days. We set clear milestones and share transparent reporting throughout.` },
  ];

  const heroImage = data.heroImage || serviceImages[slug] || automationImg;

  const gridItems = [
    ...benefits.map(b => ({ ...b, icon: getIcon(b.title) })),
    ...process.map(p => ({ ...p, icon: getIcon(p.title) })),
  ];
  if (gridItems.length < 6) {
    gridItems.push({ title: "Custom Strategy", desc: "Tailored specifically to your business goals and industry dynamics.", icon: <Users className="h-7 w-7" /> });
    gridItems.push({ title: "Data-Driven Results", desc: "Every decision backed by real-time analytics and performance data.", icon: <BarChart className="h-7 w-7" /> });
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 pb-0 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(193,53,132,0.12),transparent_55%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 pb-16 lg:pb-28">
              <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-sm font-medium tracking-widest uppercase text-zinc-400 mb-8">
                {title}
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.05] mb-8">
                Supercharge Your Growth with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">{title}</span>{" "}Excellence!
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="text-lg text-zinc-400 leading-relaxed max-w-lg mb-10">
                {description} We combine AI-driven insights with creative excellence to deliver measurable results.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
                <Link href="/contact">
                  <Button size="lg" className="rounded-full h-14 px-9 text-lg bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_40px_-10px_rgba(225,48,108,0.5)] hover:scale-105 transition-all duration-300 group">
                    Get Started <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
            <div className="lg:w-1/2 relative self-end">
              <motion.div initial={{ opacity: 0, scale: 0.92, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="relative">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none" />
                <img src={heroImage} alt={title} className="w-full h-auto rounded-t-3xl object-cover" style={{ maxHeight: "520px", objectPosition: "top" }} />
                <motion.div animate={{ y: [-6, 6, -6] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} className="absolute top-10 -left-6 flex items-center gap-3 bg-zinc-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                  <TrendingUp className="h-5 w-5 text-brand-orange" />
                  <span className="text-white text-sm font-semibold">ROI Boosted 10x</span>
                </motion.div>
                <motion.div animate={{ y: [6, -6, 6] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 -right-6 flex items-center gap-3 bg-zinc-900 border border-white/10 rounded-2xl px-4 py-3 shadow-xl">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-white text-sm font-semibold">AI-Powered Strategy</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + REDEFINED */}
      <section className="bg-zinc-950 text-white border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 py-20 lg:pr-20 border-b lg:border-b-0 lg:border-r border-white/8">
              <div className="grid grid-cols-2 gap-0">
                {stats.map((stat: any, i: number) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className={`py-10 ${i % 2 === 0 ? "pr-10 border-r border-white/8" : "pl-10"} ${i < 2 ? "border-b border-white/8" : ""}`}>
                    <div className="w-10 h-[3px] bg-white mb-5 rounded-full" />
                    <div className="text-5xl md:text-6xl font-black font-heading text-white mb-3">{stat.value}</div>
                    <div className="text-zinc-400 text-sm leading-snug">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2 py-20 lg:pl-20 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">{redefined.title}</h2>
              <p className="text-zinc-400 text-lg leading-relaxed">{redefined.desc}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-heading font-bold mb-16 max-w-3xl">
            The {title} Magic Happens with Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">Tailored Services</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
            {gridItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group p-8 bg-black hover:bg-zinc-900 transition-colors duration-300">
                <div className="text-brand-rose mb-5 group-hover:text-brand-orange transition-colors duration-300">{item.icon}</div>
                <h3 className="text-lg font-bold font-heading text-white mb-4">{item.title}</h3>
                <div className="w-8 h-[2px] bg-gradient-to-r from-brand-pink to-brand-yellow mb-4 rounded-full" />
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustriesSlider />

      {/* SUCCESS STORIES */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-end mb-14">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900 leading-tight">
              Some Success Stories <br /> To Inspire You
            </h2>
            <Link href="/success-stories">
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
              As a leading digital marketing agency, we provide educational resources and answer key questions to help you make informed decisions.
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
