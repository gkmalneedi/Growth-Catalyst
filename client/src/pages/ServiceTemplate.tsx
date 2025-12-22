import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, BarChart, Users, Globe } from "lucide-react";
import { useLocation } from "wouter";
import { servicesList } from "@/lib/data";
import { motion } from "framer-motion";

export default function ServiceTemplate() {
  const [location] = useLocation();
  const slug = location.split("/services/")[1];
  const service = servicesList.find(s => s.href === location) || { 
    title: "Service Not Found", 
    description: "The requested service could not be found." 
  };

  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block mb-4 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              World-Class {service.title}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading font-bold mb-6 text-glow leading-tight"
            >
              Dominate Your Market with <br/>
              <span className="text-primary">{service.title}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
            >
              Stop guessing. Start growing. We leverage data-driven strategies and cutting-edge technology to deliver measurable results for your business.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button size="lg" className="rounded-full h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                Get Your Free Strategy Session <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Grid */}
      <section className="py-20 bg-card border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <BarChart className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold font-heading">Data-Driven Approach</h3>
              <p className="text-muted-foreground">
                We don't rely on gut feelings. Every decision is backed by analytics and market intelligence to maximize your ROI.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold font-heading">Audience Centric</h3>
              <p className="text-muted-foreground">
                We dive deep into your customer personas to create personalized experiences that resonate and convert.
              </p>
            </div>
            <div className="space-y-4">
              <div className="h-12 w-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                <Globe className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold font-heading">Scalable Solutions</h3>
              <p className="text-muted-foreground">
                Whether you're a startup or an enterprise, our strategies are built to scale with your growth ambitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Why Choose Our {service.title}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                In today's fast-paced digital landscape, you need more than just a service provider. You need a partner who understands the US market dynamics.
              </p>
              <ul className="space-y-4">
                {[
                  "Customized strategies tailored to your unique goals",
                  "Transparent reporting and real-time analytics",
                  "Dedicated team of industry experts",
                  "Integration with latest AI technologies"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Button variant="outline" size="lg" className="rounded-full border-white/10 hover:bg-white/5">
                  See Case Studies
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 relative group">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl font-bold text-white/5 group-hover:text-white/10 transition-colors duration-500 select-none">
                      NEXUS
                    </span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 blur-[100px] -z-10" />
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Don't let your competitors get ahead. Partner with Nexus and unlock your true growth potential today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full h-14 px-10 text-lg bg-white text-black hover:bg-white/90">
              Schedule Your Call
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-10 text-lg border-white/20 hover:bg-white/10">
              Download Pricing Guide
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
