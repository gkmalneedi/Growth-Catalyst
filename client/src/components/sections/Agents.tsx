import { motion } from "framer-motion";
import { Bot, Cpu, Network, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function AgentsSection() {
  return (
    <section className="py-24 relative overflow-hidden" id="agents">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-blue-500/5 blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Scale With <br />
                <span className="text-primary">Intelligent Agents</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Stop trading time for money. Our custom AI agents work 24/7 to handle your operations, marketing, and customer support.
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Bot className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Customer Support Agents</h3>
                    <p className="text-muted-foreground">Instantly answer queries, book appointments, and solve problems.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Lead Generation Agents</h3>
                    <p className="text-muted-foreground">Prospect, qualify, and nurture leads automatically.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg h-fit">
                    <Cpu className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Workflow Automation</h3>
                    <p className="text-muted-foreground">Connect your apps and automate repetitive tasks seamlessly.</p>
                  </div>
                </div>
              </div>

              <Link href="/services">
                <Button size="lg" className="rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10">
                  Explore Agent Solutions
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="bg-card p-6 rounded-2xl border border-white/5 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex justify-between items-start">
                    <div className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs">Active</div>
                    <Zap className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="font-mono text-2xl font-bold">2,451</div>
                  <div className="text-sm text-muted-foreground">Tasks Automated</div>
                </motion.div>

                <motion.div 
                  className="bg-card p-6 rounded-2xl border border-white/5 space-y-4 translate-y-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex justify-between items-start">
                    <div className="bg-blue-500/10 text-blue-500 px-2 py-1 rounded text-xs">98%</div>
                    <Bot className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="font-mono text-2xl font-bold">24/7</div>
                  <div className="text-sm text-muted-foreground">Uptime Guaranteed</div>
                </motion.div>

                <motion.div 
                  className="bg-card p-6 rounded-2xl border border-white/5 space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex justify-between items-start">
                    <div className="bg-purple-500/10 text-purple-500 px-2 py-1 rounded text-xs">ROI</div>
                    <Network className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="font-mono text-2xl font-bold">10x</div>
                  <div className="text-sm text-muted-foreground">Efficiency Boost</div>
                </motion.div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
