import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IndustriesSlider } from "@/components/IndustriesSlider";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BarChart, Users, Globe, ChevronRight, Star, Plus, Minus, MessageCircle, Megaphone, Share2, Target, Search, Smartphone, Zap, TrendingUp, Database, Settings, FileText, PenTool, Eye, Layers, Clock, Palette, Lightbulb, Shield, Heart, Mail, Layout, Video, Rocket, Award, Gauge, Workflow, BrainCircuit } from "lucide-react";
import { useLocation } from "wouter";
import { servicesList } from "@/lib/data";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

// Import generated images
import automationImg from "@assets/generated_images/marketing_automation_workflow_3d.png";
import socialImg from "@assets/generated_images/social_media_network_3d.png";
import seoImg from "@assets/generated_images/seo_search_concept_3d.png";
import brandImg from "@assets/generated_images/brand_identity_diamond_3d.png";
import contentImg from "@assets/generated_images/content_creation_abstract_3d.png";
import whatsappImg from "@assets/generated_images/whatsapp_chat_bubble_3d.png";
import emailImg from "@assets/generated_images/email_envelope_future_3d.png";
import uiuxImg from "@assets/generated_images/ui_ux_interface_layers_3d.png";
import videoImg from "@assets/generated_images/video_play_button_3d.png";

// Import success images
import fabpikImg from "@assets/generated_images/happy_child_shopping_for_ecommerce_success.png";
import monarchImg from "@assets/generated_images/modern_office_space_for_furniture_brand.png";
import centroImg from "@assets/generated_images/futuristic_athletic_shoe_for_footwear_brand.png";

// Map slugs to images
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

// Define types for the service benefits and process
interface Benefit {
  title: string;
  desc: string;
}

interface ProcessStep {
  title: string;
  desc: string;
}

interface Stat {
  value: string;
  label: string;
}

interface Redefined {
  title: string;
  desc: string;
}

interface Service {
  title: string;
  href: string;
  description: string;
  benefits?: Benefit[];
  process?: ProcessStep[];
  stats?: Stat[];
  redefined?: Redefined;
}

export default function ServiceTemplate() {
  const [location] = useLocation();
  const slug = location.split("/services/")[1];
  const service = (servicesList.find(s => s.href === location) || { 
    title: "Service Not Found", 
    description: "The requested service could not be found." 
  }) as Service;
  
  const heroImage = serviceImages[slug] || automationImg; // Fallback image

  // Default stats if none provided
  const stats = service.stats || [
    { value: "100%", label: "Commitment to Quality" },
    { value: "24/7", label: "Support & Monitoring" },
    { value: "10x", label: "ROI Improvement" },
    { value: "50+", label: "Happy Clients" }
  ];

  const redefined = service.redefined || {
    title: "Service Redefined",
    desc: `Experience ${service.title} like never before. We combine cutting-edge technology with human creativity to deliver results that matter.`
  };

  const iconMap: Record<string, React.ReactNode> = {
    "Workflow Efficiency": <Workflow className="h-8 w-8" />,
    "Lead Nurturing": <Heart className="h-8 w-8" />,
    "Data Integration": <Database className="h-8 w-8" />,
    "Audit & Blueprint": <Search className="h-8 w-8" />,
    "Platform Setup": <Settings className="h-8 w-8" />,
    "Workflow Creation": <Layers className="h-8 w-8" />,
    "Performance Tuning": <Gauge className="h-8 w-8" />,
    "Brand Awareness": <Megaphone className="h-8 w-8" />,
    "Community Building": <Users className="h-8 w-8" />,
    "Viral Growth": <TrendingUp className="h-8 w-8" />,
    "Audience Analysis": <Eye className="h-8 w-8" />,
    "Content Calendar": <FileText className="h-8 w-8" />,
    "Engagement Management": <MessageCircle className="h-8 w-8" />,
    "Analytics Reporting": <BarChart className="h-8 w-8" />,
    "Organic Traffic": <Globe className="h-8 w-8" />,
    "High Intent Leads": <Target className="h-8 w-8" />,
    "Authority Building": <Award className="h-8 w-8" />,
    "Keyword Research": <Search className="h-8 w-8" />,
    "On-Page Optimization": <Settings className="h-8 w-8" />,
    "Link Building": <Share2 className="h-8 w-8" />,
    "Conversion Optimization": <Gauge className="h-8 w-8" />,
    "Consistent Identity": <Palette className="h-8 w-8" />,
    "Emotional Connection": <Heart className="h-8 w-8" />,
    "Premium Positioning": <Award className="h-8 w-8" />,
    "Brand Audit": <Search className="h-8 w-8" />,
    "Identity Design": <PenTool className="h-8 w-8" />,
    "Guidelines Creation": <FileText className="h-8 w-8" />,
    "Rollout Strategy": <Rocket className="h-8 w-8" />,
    "Thought Leadership": <Lightbulb className="h-8 w-8" />,
    "SEO Fuel": <Search className="h-8 w-8" />,
    "Lead Magnet": <Target className="h-8 w-8" />,
    "Content Strategy": <BrainCircuit className="h-8 w-8" />,
    "Production": <Video className="h-8 w-8" />,
    "Distribution": <Share2 className="h-8 w-8" />,
    "Performance Analysis": <BarChart className="h-8 w-8" />,
    "Instant Reach": <Zap className="h-8 w-8" />,
    "Direct Communication": <MessageCircle className="h-8 w-8" />,
    "Automated Support": <BrainCircuit className="h-8 w-8" />,
    "Audience Segmentation": <Users className="h-8 w-8" />,
    "Template Design": <Layout className="h-8 w-8" />,
    "Automation Setup": <Settings className="h-8 w-8" />,
    "Campaign Launch": <Rocket className="h-8 w-8" />,
    "High ROI": <TrendingUp className="h-8 w-8" />,
    "Personalization": <Heart className="h-8 w-8" />,
    "Lifecycle Marketing": <Workflow className="h-8 w-8" />,
    "List Cleaning": <Shield className="h-8 w-8" />,
    "Flow Construction": <Layers className="h-8 w-8" />,
    "Creative Design": <PenTool className="h-8 w-8" />,
    "A/B Testing": <Gauge className="h-8 w-8" />,
    "User Satisfaction": <Heart className="h-8 w-8" />,
    "Higher Conversions": <TrendingUp className="h-8 w-8" />,
    "Reduced Churn": <Shield className="h-8 w-8" />,
    "User Research": <Eye className="h-8 w-8" />,
    "Wireframing": <Layout className="h-8 w-8" />,
    "Visual Design": <Palette className="h-8 w-8" />,
    "Prototyping": <Layers className="h-8 w-8" />,
    "Higher Engagement": <TrendingUp className="h-8 w-8" />,
    "Complex Explanations": <Lightbulb className="h-8 w-8" />,
    "Brand Personality": <Star className="h-8 w-8" />,
    "Storyboarding": <FileText className="h-8 w-8" />,
    "Post-Production": <Settings className="h-8 w-8" />,
    "Format Optimization": <Gauge className="h-8 w-8" />,
  };

  const getIcon = (title: string) => iconMap[title] || <Star className="h-8 w-8" />;

  const gridItems = [
    ...(service.benefits || []).map((b) => ({ ...b, icon: getIcon(b.title) })),
    ...(service.process || []).map((p) => ({ ...p, icon: getIcon(p.title) }))
  ];

  if (gridItems.length < 6) {
     gridItems.push({ title: "Custom Strategy", desc: "Tailored specifically to your business goals.", icon: <Users className="h-8 w-8" /> });
     gridItems.push({ title: "Data-Driven", desc: "Decisions backed by real-time analytics.", icon: <BarChart className="h-8 w-8" /> });
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.15),transparent_50%)] -z-10" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex mb-10 h-16 px-10 items-center justify-center rounded-full bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_40px_-10px_rgba(225,48,108,0.5)] text-xl font-medium tracking-wide uppercase transition-all duration-300 hover:scale-105"
              >
                {service.title} Services
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-heading font-bold mb-6 text-glow leading-tight"
              >
                Supercharge Your Growth with <br/>
                <span className="text-primary">{service.title}</span> <br/>
                Excellence!
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed"
              >
                {service.description} We combine AI-driven insights with creative excellence to deliver measurable results.
              </motion.p>
            </div>
            <div className="lg:w-1/2 relative">
               <motion.div
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.4 }}
                 className="relative z-10"
               >
                 <img 
                   src={heroImage} 
                   alt={service.title} 
                   className="w-full h-auto rounded-3xl shadow-2xl shadow-primary/20 border border-white/10"
                 />
                 
                 {/* Floating Elements */}
                 <div className="absolute -top-10 -right-10 p-4 bg-zinc-900 border border-white/10 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
                   <Users className="h-8 w-8 text-brand-orange-dark" />
                 </div>
                 <div className="absolute -bottom-5 -left-5 p-4 bg-zinc-900 border border-white/10 rounded-2xl shadow-xl animate-bounce duration-[4000ms]">
                   <BarChart className="h-8 w-8 text-brand-rose" />
                 </div>
               </motion.div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12">
            {stats.map((stat, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div className="text-4xl md:text-5xl font-bold font-heading mb-3 text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">{stat.value}</div>
                <div className="text-zinc-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. REDEFINED SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
           <div className="max-w-4xl">
             <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-zinc-900">{redefined.title}</h2>
             <p className="text-xl text-muted-foreground leading-relaxed">
               {redefined.desc}
             </p>
           </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 max-w-3xl text-white">
            The {service.title} Magic Happens with Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">Tailored Services</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {gridItems.map((item, i) => (
              <ServiceItem 
                key={i}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES */}
      <IndustriesSlider />

      {/* 5. SUCCESS STORIES */}
      <section className="py-24 container mx-auto px-4 md:px-8 bg-white">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900">
            Some Success Stories <br/> To Inspire You
          </h2>
          <Button variant="link" className="text-lg text-primary group">
            See all <div className="ml-2 w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors"><ArrowRight className="h-4 w-4" /></div>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SuccessCard 
            img={fabpikImg}
            badge="Fabpik"
            title="50% Jump in Brand Visibility: FabPik's in Kids' e-commerce"
          />
          <SuccessCard 
            img={monarchImg}
            badge="Monarch"
            title="From Hidden to Highlighted: Global Office Furniture Brand's Digital Leap with Us"
          />
          <SuccessCard 
            img={centroImg}
            badge="Centro"
            title="Leading Footwear Brand CENTRO Achieves Sales Growth with Our Social Media Magic!"
          />
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-zinc-950 text-white section-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-zinc-400">
              As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
            </p>
          </div>
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-white/10">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6 text-white">
                  How can {service.title} help our business grow?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-6">
                  Our strategic approach to {service.title} ensures that every action is aligned with your business goals, driving measurable growth, increased efficiency, and higher ROI through data-driven execution.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-white/10">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6 text-white">
                  What makes your {service.title} services unique?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-6">
                  We blend creative storytelling with AI-powered analytics. We don't just execute tasks; we engineer strategies that adapt to market trends and user behavior in real-time.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-white/10">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6 text-white">
                  How do you measure success in {service.title}?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-6">
                  We use a comprehensive suite of KPIs tailored to your specific objectives, ranging from engagement metrics and conversion rates to long-term customer lifetime value and brand sentiment analysis.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ServiceItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-brand-pink/20 transition-all duration-300">
      <div className="mb-4 w-14 h-14 rounded-xl bg-gradient-to-br from-brand-pink/20 to-brand-yellow/10 flex items-center justify-center text-brand-rose group-hover:from-brand-pink/30 group-hover:to-brand-yellow/20 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold font-heading mb-3 text-white">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed border-t border-white/10 pt-4 mt-4">
        {desc}
      </p>
    </div>
  );
}

function SuccessCard({ img, badge, title }: { img: string, badge: string, title: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="rounded-xl overflow-hidden mb-6 aspect-[4/3] relative">
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-md z-10">
          {badge}
        </div>
        <img src={img} alt={badge} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <h3 className="text-lg font-bold font-heading leading-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
    </div>
  );
}
