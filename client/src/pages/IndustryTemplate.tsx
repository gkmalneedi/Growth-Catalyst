import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { useLocation } from "wouter";
import { industriesList } from "@/lib/data";
import { motion } from "framer-motion";

export default function IndustryTemplate() {
  const [location] = useLocation();
  const industry = industriesList.find(s => s.href === location) || { 
    title: "Industry Not Found", 
    href: "#" 
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-3/5">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-block mb-4 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium"
              >
                {industry.title} Solutions
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight"
              >
                Revolutionizing <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{industry.title}</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-muted-foreground mb-10"
              >
                We understand the unique challenges of the {industry.title} sector. Our specialized digital solutions are designed to optimize operations, enhance customer experience, and drive sustainable growth.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex gap-4"
              >
                <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                  Consult an Expert <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
            <div className="md:w-2/5">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.9 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.4 }}
                 className="aspect-[4/5] rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-8 flex flex-col justify-end relative overflow-hidden"
               >
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
                 <div className="relative z-20">
                    <div className="text-4xl font-bold mb-2">40%</div>
                    <div className="text-sm text-muted-foreground mb-6">Average Efficiency Increase</div>
                    <div className="text-4xl font-bold mb-2">2.5x</div>
                    <div className="text-sm text-muted-foreground">ROI within 6 Months</div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Solving {industry.title} Challenges</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We leverage technology to overcome the biggest hurdles facing your industry today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="bg-background border border-white/10 p-8 rounded-2xl hover:border-blue-500/50 transition-colors group">
               <div className="h-14 w-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                 <TrendingUp className="h-7 w-7 text-blue-500" />
               </div>
               <h3 className="text-xl font-bold mb-3">Market Volatility</h3>
               <p className="text-muted-foreground">
                 Stay ahead of shifting trends with our real-time predictive analytics and adaptive marketing strategies.
               </p>
             </div>
             
             <div className="bg-background border border-white/10 p-8 rounded-2xl hover:border-purple-500/50 transition-colors group">
               <div className="h-14 w-14 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                 <Zap className="h-7 w-7 text-purple-500" />
               </div>
               <h3 className="text-xl font-bold mb-3">Digital Transformation</h3>
               <p className="text-muted-foreground">
                 Modernize your legacy systems and customer interfaces without disrupting your core business operations.
               </p>
             </div>

             <div className="bg-background border border-white/10 p-8 rounded-2xl hover:border-green-500/50 transition-colors group">
               <div className="h-14 w-14 rounded-full bg-green-500/10 flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                 <ShieldCheck className="h-7 w-7 text-green-500" />
               </div>
               <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
               <p className="text-muted-foreground">
                 Navigate complex regulations with confidence. Our solutions are built with security and compliance at the core.
               </p>
             </div>
          </div>
        </div>
      </section>

      {/* Strong CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8">
           <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
             <div className="relative z-10">
               <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                 Lead the {industry.title} Industry
               </h2>
               <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
                 The future belongs to those who innovate. Let's build the future of your company together.
               </p>
               <Button size="lg" className="h-16 px-12 text-xl rounded-full bg-white text-blue-900 hover:bg-white/90 font-bold">
                 Talk to a {industry.title} Strategist
               </Button>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
