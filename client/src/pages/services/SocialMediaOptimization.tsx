import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IndustriesSlider } from "@/components/IndustriesSlider";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star, Plus, Minus, Users, Search, BarChart, Globe, MessageCircle, Megaphone, Share2, Target, Smartphone } from "lucide-react";
import { Link } from "wouter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

// Import generated images
import smoHeroImg from "@assets/generated_images/social_media_mobile_app_interface_with_engagement_icons.png";
import fabpikImg from "@assets/generated_images/happy_child_shopping_for_ecommerce_success.png";
import monarchImg from "@assets/generated_images/modern_office_space_for_furniture_brand.png";
import centroImg from "@assets/generated_images/futuristic_athletic_shoe_for_footwear_brand.png";

export default function SocialMediaOptimization() {
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
                className="inline-flex mb-10 h-16 px-10 items-center justify-center rounded-full bg-solid-white hover:bg-white/90 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] text-black text-xl font-medium tracking-wide uppercase transition-all duration-300 hover:scale-105"
              >
                Social Media Optimization
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-heading font-bold mb-6 text-glow leading-tight"
              >
                Social Media Magic to <br/>
                Make You <span className="text-primary">'Unmissable'</span> <br/>
                from 'Invisible'!
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed"
              >
                Imagine your brand trending in every feed – our SMO strategies and tactics make it happen.
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
                   src={smoHeroImg} 
                   alt="Social Media Optimization" 
                   className="w-full h-auto rounded-3xl shadow-2xl shadow-primary/20 border border-white/10"
                 />
                 
                 {/* Floating Elements */}
                 <div className="absolute -top-10 -right-10 p-4 bg-zinc-900 border border-white/10 rounded-2xl shadow-xl animate-bounce duration-[3000ms]">
                   <Users className="h-8 w-8 text-brand-orange-dark" />
                 </div>
                 <div className="absolute -bottom-5 -left-5 p-4 bg-zinc-900 border border-white/10 rounded-2xl shadow-xl animate-bounce duration-[4000ms]">
                   <MessageCircle className="h-8 w-8 text-brand-rose" />
                 </div>
               </motion.div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-12">
            {[
              { value: "80%", label: "Increase in brand visibility" },
              { value: "5x", label: "Growth in social traffic" },
              { value: "75%", label: "Improvement in customer retention" },
              { value: "2x", label: "Lead Generation" }
            ].map((stat, i) => (
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
             <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-zinc-900">Social Engagement Redefined</h2>
             <p className="text-xl text-muted-foreground leading-relaxed">
               Capture your audience where they spend most of their time — social media. Over 90% of your target audience is active on social media platforms like Facebook, Instagram, Twitter and YouTube. We use AI to draw attention and promote your brand effectively. We ensure maximum engagement and resonance through sentiment analysis, trend forecasting, and personalized content distribution.
             </p>
           </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 via-zinc-900/50 to-zinc-950 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 max-w-3xl text-white">
          The Social Media Magic Happens with Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">Tailored Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <ServiceItem 
            icon={<Target className="h-8 w-8" />}
            title="Profile Optimization"
            desc="Get a polished profile that captivates audiences and boosts visibility and searchability. We optimize bios, images, and links for maximum impact."
          />
          <ServiceItem 
            icon={<Share2 className="h-8 w-8" />}
            title="Compelling Content Strategy"
            desc="We craft a tailored content calendar, identifying optimal posting times, and determining the right content mix to engage audiences."
          />
          <ServiceItem 
            icon={<Users className="h-8 w-8" />}
            title="Audience Analysis"
            desc="We harness AI analytics to decode audience demographics and behaviors, refining content targeting for maximum impact."
          />
          <ServiceItem 
            icon={<MessageCircle className="h-8 w-8" />}
            title="Community Management"
            desc="We nurture your community and foster a positive brand image by actively responding to the comments of your followers in an engaging way."
          />
          <ServiceItem 
            icon={<Megaphone className="h-8 w-8" />}
            title="Paid Social Media Advertising"
            desc="We craft, execute, and track targeted paid advertising campaigns across social platforms, elevating your visibility and driving leads."
          />
          <ServiceItem 
            icon={<Search className="h-8 w-8" />}
            title="Hashtag Research & Optimization"
            desc="We identify trending and relevant hashtags to increase the reach of your posts and tap into new audiences."
          />
          <ServiceItem 
            icon={<BarChart className="h-8 w-8" />}
            title="Competitor Analysis"
            desc="We keep a vigilant eye on your competitors' social tactics, uncovering opportunities for your brand to stand out and excel."
          />
          <ServiceItem 
            icon={<Globe className="h-8 w-8" />}
            title="Social SEO Integration"
            desc="We fuse social media with SEO tactics, amplifying your online presence and climbing search engine rankings."
          />
          <ServiceItem 
            icon={<Users className="h-8 w-8" />}
            title="Influencer Collaboration"
            desc="We team up with influencers to expand your brand's reach and credibility among your target audience."
          />
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
                  How AI-powered SMO by Miraki Digital can help us
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-6">
                  AI-powered SMO by Miraki Digital harnesses advanced algorithms to analyze data, optimize content, and target audiences with precision, maximizing engagement and growth.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-white/10">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6 text-white">
                  How can AI-fueled SMO strategies help drive success?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-6">
                  AI-fueled strategies allow for real-time trend analysis, predictive engagement modeling, and automated content personalization, ensuring your brand stays ahead of the curve and resonates with your audience instantly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-white/10">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6 text-white">
                  What makes Miraki Digital's SMO services different?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-6">
                  We blend creative storytelling with data-driven AI insights. We don't just post content; we engineer viral moments and build lasting communities through strategic, algorithm-friendly engagement tactics.
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
