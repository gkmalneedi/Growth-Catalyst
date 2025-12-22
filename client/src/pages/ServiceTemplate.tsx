import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BarChart, Users, Globe, ChevronRight } from "lucide-react";
import { useLocation } from "wouter";
import { servicesList } from "@/lib/data";
import { motion } from "framer-motion";
import { Link } from "wouter";

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

interface Service {
  title: string;
  href: string;
  description: string;
  benefits?: Benefit[];
  process?: ProcessStep[];
}

export default function ServiceTemplate() {
  const [location] = useLocation();
  const slug = location.split("/services/")[1];
  const service = (servicesList.find(s => s.href === location) || { 
    title: "Service Not Found", 
    description: "The requested service could not be found." 
  }) as Service;
  
  const heroImage = serviceImages[slug] || automationImg; // Fallback image

  return (
    <div className="min-h-screen bg-background pt-20 overflow-x-hidden">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block mb-6 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide uppercase"
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
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{service.title}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed"
              >
                {service.description} We combine AI-driven insights with creative excellence to deliver measurable results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-white/10 hover:bg-white/5">
                  View Case Studies
                </Button>
              </motion.div>
            </div>
            <div className="md:w-1/2 relative">
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
               </motion.div>
               {/* Decorative background blur */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/20 blur-[100px] -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. KEY BENEFITS */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Why Our {service.title} Works
            </h2>
            <p className="text-muted-foreground text-lg">
              We go beyond the basics. Our approach is holistic, data-backed, and designed for scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits?.map((benefit, index) => (
              <div key={index} className="p-8 rounded-2xl bg-background border border-white/10 hover:border-blue-500/50 transition-colors group">
                <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <BarChart className="h-6 w-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">
                  {benefit.desc}
                </p>
              </div>
            )) || (
              // Fallback if no specific benefits found
              <>
                 <div className="p-8 rounded-2xl bg-background border border-white/10 hover:border-blue-500/50 transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <BarChart className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Data-Driven Strategy</h3>
                  <p className="text-muted-foreground">
                    Every campaign is built on solid analytics and real-time performance data to ensure maximum ROI.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-background border border-white/10 hover:border-purple-500/50 transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                    <Users className="h-6 w-6 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Audience Centric</h3>
                  <p className="text-muted-foreground">
                    We create personalized experiences that resonate deeply with your specific target audience segments.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-background border border-white/10 hover:border-pink-500/50 transition-colors group">
                  <div className="h-12 w-12 rounded-lg bg-pink-500/10 flex items-center justify-center mb-6 group-hover:bg-pink-500/20 transition-colors">
                    <Globe className="h-6 w-6 text-pink-500" />
                  </div>
                  <h3 className="text-xl font-bold font-heading mb-3">Global Scalability</h3>
                  <p className="text-muted-foreground">
                    Whether you're local or global, our solutions are architected to scale effortlessly with your business.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 3. PROCESS / HOW WE DO IT */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
               <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">
                 Our Execution Framework
               </h2>
               <div className="space-y-8">
                 {(service.process || [
                   { title: "Discovery & Audit", desc: "We analyze your current state and identify opportunities." },
                   { title: "Strategy Formulation", desc: "We craft a bespoke roadmap tailored to your KPIs." },
                   { title: "Implementation", desc: "Our experts execute the plan with precision and agility." },
                   { title: "Optimization", desc: "Continuous monitoring and refinement for peak performance." }
                 ]).map((step, i) => (
                   <div key={i} className="flex gap-4">
                     <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
                       {i + 1}
                     </div>
                     <div>
                       <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                       <p className="text-muted-foreground">{step.desc}</p>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-blue-900/20 to-purple-900/20 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="text-6xl font-bold font-heading mb-2 text-glow">10X</div>
                    <div className="text-xl text-muted-foreground uppercase tracking-widest">Growth Potential</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="py-32 relative overflow-hidden bg-white/5 border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl relative z-10">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
            Ready to Transform Your <br/>
            <span className="text-primary">{service.title}?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Don't let your competitors get ahead. Partner with Nexus and unlock your true growth potential today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-16 px-12 text-xl bg-white text-black hover:bg-white/90 shadow-2xl hover:scale-105 transition-transform duration-300">
                Book a Strategy Call <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
