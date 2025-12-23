import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Star, Users, BarChart, Target, Zap, Heart, Globe, Lightbulb, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

// Images
import heroBg from "@assets/generated_images/abstract_blue_vector_wave_background.png";
import visionImg from "@assets/generated_images/glowing_neural_network_for_ai_agents.png";
import missionImg from "@assets/generated_images/digital_waves_data_visualization_for_marketing.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 z-0">
           <img 
             src={heroBg} 
             alt="Digital Background" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8">
               Curious About Our Story? <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                 Actually, it's All About YOU!
               </span>
             </h1>
             <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-4xl mx-auto leading-relaxed">
               Every time we start writing about ourselves, we end up realizing that our essence revolves around 'YOU.' At our core lies a deep-seated inspiration drawn from your hunger for creativity, groundbreaking strategies, and unique storytelling.
             </p>
             <div className="flex justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full h-14 px-8 bg-white text-zinc-950 hover:bg-zinc-200 text-lg font-medium">
                    Start Your Journey
                  </Button>
                </Link>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-20 border-y border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "300%", label: "ROI Delivered For Clients" },
                { value: "95%", label: "Customer Satisfaction Rate" },
                { value: "2000+", label: "Successful Campaigns Conducted" },
                { value: "68+", label: "Specialists On Board" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6"
                >
                  <div className="text-4xl md:text-6xl font-heading font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{stat.value}</div>
                  <div className="text-zinc-400 text-lg">{stat.label}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-32 container mx-auto px-4 md:px-8 border-b border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden group hover:border-purple-500/50 transition-colors"
          >
             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
               <Target className="w-32 h-32 text-purple-500" />
             </div>
             <h3 className="text-3xl font-heading font-bold mb-6 text-white relative z-10">Our Mission</h3>
             <p className="text-xl text-zinc-400 leading-relaxed relative z-10">
               Empower businesses with AI-driven marketing that turns data into powerful insights, fuels growth, and redefines customer engagement for the digital age.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden group hover:border-pink-500/50 transition-colors"
          >
             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
               <Lightbulb className="w-32 h-32 text-pink-500" />
             </div>
             <h3 className="text-3xl font-heading font-bold mb-6 text-white relative z-10">Our Vision</h3>
             <p className="text-xl text-zinc-400 leading-relaxed relative z-10">
               Lead the future of digital marketing with AI, making Nexus the go-to for innovation, growth, and game-changing strategies.
             </p>
          </motion.div>
        </div>
      </section>

      {/* 4. STRATEGIC APPROACH */}
      <section className="py-32 bg-zinc-950 section-black border-b border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
            Our Strategic Approach To <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Your Success</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-20">
            With a true understanding of what's now and what's next in digital, we follow a strategic approach to ensure your digital success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StrategicCard 
              icon={<BarChart className="w-10 h-10 text-cyan-400" />}
              title="Analysis & Insights"
              desc="Conduct in-depth analysis to understand your audience's behavior and preferences."
            />
            <StrategicCard 
              icon={<Target className="w-10 h-10 text-purple-400" />}
              title="Precise Targeting"
              desc="Leverage AI algorithms to target the right audience at the right time for maximum engagement."
            />
            <StrategicCard 
              icon={<Zap className="w-10 h-10 text-pink-400" />}
              title="Personalized Content"
              desc="Blend human creativity and AI to create hyper-personalized content that resonates."
            />
          </div>
        </div>
      </section>

      {/* 5. WHY US */}
      <section className="py-32 bg-white/5 backdrop-blur-sm border-y border-white/10">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">What Makes Us Your Perfect <br/> <span className="text-primary">Growth Partner?</span></h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "AI-Driven Precision", icon: <Zap /> },
                { title: "Customized Services", icon: <Users /> },
                { title: "Expert Team", icon: <Star /> },
                { title: "Proven Success", icon: <CheckCircle2 /> },
                { title: "Long-Term Partnership", icon: <Heart /> },
                { title: "Client-Focused", icon: <Users /> },
                { title: "Comprehensive Services", icon: <Globe /> },
                { title: "Quality Assurance", icon: <ShieldCheck /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-8 bg-zinc-900/50 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">{item.title}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. CLIENTS MARQUEE (Reused) */}
      <section className="py-20 border-b border-white/10 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-10">
          <h2 className="text-center text-muted-foreground text-lg font-medium tracking-wide uppercase">
            Our Thriving Client Community
          </h2>
        </div>
        
        {/* Infinite Slider */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
             {[
               "Govt of India", "IDBI Bank", "Philips", "EuroArt", "TechMahindra", "Accenture", 
               "Google", "Amazon", "Microsoft", "Netflix", "Spotify", "Uber", "Airbnb", 
               "Tesla", "Samsung", "Sony", "LG", "HP", "Dell", "Intel"
             ].map((logo, i) => (
               <div key={i} className="text-xl md:text-3xl font-bold font-heading text-white/50 hover:text-white transition-colors duration-300 mx-4 cursor-default select-none">
                 {logo}
               </div>
             ))}
             {[
               "Govt of India", "IDBI Bank", "Philips", "EuroArt", "TechMahindra", "Accenture", 
               "Google", "Amazon", "Microsoft", "Netflix", "Spotify", "Uber", "Airbnb", 
               "Tesla", "Samsung", "Sony", "LG", "HP", "Dell", "Intel"
             ].map((logo, i) => (
               <div key={`dup-${i}`} className="text-xl md:text-3xl font-bold font-heading text-white/50 hover:text-white transition-colors duration-300 mx-4 cursor-default select-none">
                 {logo}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-32 bg-zinc-900 section-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400 text-lg">
              We are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
            </p>
          </div>
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-white/10">
                <AccordionTrigger className="text-xl font-medium hover:no-underline hover:text-primary py-6 text-white">
                  What is AI-powered digital marketing?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-lg pb-6 leading-relaxed">
                  AI-powered digital marketing uses artificial intelligence to improve and automate marketing tasks. Technologies like machine learning and data analytics help marketers understand customer behaviour, personalize content, optimize campaigns, and make better decisions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-white/10">
                <AccordionTrigger className="text-xl font-medium hover:no-underline hover:text-primary py-6 text-white">
                  How effective is AI in improving customer targeting?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-lg pb-6 leading-relaxed">
                  AI algorithms analyze vast amounts of data to identify patterns and predict future behaviors. This allows for hyper-precise targeting, ensuring your message reaches the right person at the exact right moment they are most likely to convert.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-white/10">
                <AccordionTrigger className="text-xl font-medium hover:no-underline hover:text-primary py-6 text-white">
                  How do you measure success?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-lg pb-6 leading-relaxed">
                  We focus on metrics that matter to your bottom line: ROI, conversion rates, cost per acquisition, and customer lifetime value. We provide transparent, real-time dashboards so you can always see the impact of our work.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 8. PRE-FOOTER */}
      <section className="py-32 container mx-auto px-4 md:px-8 border-t border-white/10 text-center">
         <h2 className="text-4xl md:text-6xl font-heading font-bold mb-10 text-white">
           Ready to Embark on a Strategic <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Digital Marketing Voyage?</span>
         </h2>
         <Link href="/contact">
           <Button size="lg" className="rounded-full h-16 px-12 text-xl bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/25">
             Let's Talk Business
           </Button>
         </Link>
      </section>

      <Footer />
    </div>
  );
}

function StrategicCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold font-heading mb-4 text-white">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}
