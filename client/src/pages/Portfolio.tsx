import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Neon Horizon",
    category: "Brand Identity",
    image: "bg-gradient-to-br from-brand-pink/20 to-blue-500/20",
    client: "TechFlow"
  },
  {
    title: "Quantum Leap",
    category: "Web Development",
    image: "bg-gradient-to-bl from-emerald-500/20 to-teal-500/20",
    client: "InnovateX"
  },
  {
    title: "Cyber Sphere",
    category: "Marketing Campaign",
    image: "bg-gradient-to-tr from-brand-red/20 to-brand-orange-dark/20",
    client: "FutureCorp"
  },
  {
    title: "Data Stream",
    category: "UI/UX Design",
    image: "bg-gradient-to-tl from-amber-500/20 to-orange-500/20",
    client: "DataSys"
  },
  {
    title: "Eco Pulse",
    category: "App Development",
    image: "bg-gradient-to-r from-green-500/20 to-lime-500/20",
    client: "GreenLife"
  },
  {
    title: "Urban Grid",
    category: "Strategy",
    image: "bg-gradient-to-b from-slate-500/20 to-gray-500/20",
    client: "MetroBuild"
  }
];

const clients = [
  "ACME", "Globex", "Soylent", "Initech", "Umbrella", "Cyberdyne", "Massive Dynamic", "Stark Ind"
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <Navbar />
      
      {/* Header */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Selected Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A curated collection of digital experiences, brand transformations, and growth stories.
          </p>
        </motion.div>
      </section>

      {/* Project Grid */}
      <section className="py-12 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`aspect-[4/3] rounded-2xl border border-white/10 ${project.image} relative overflow-hidden mb-6 transition-all duration-500 group-hover:border-white/20`}>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 backdrop-blur-sm">
                  <div className="h-16 w-16 rounded-full bg-white text-black flex items-center justify-center">
                    <ArrowUpRight className="h-8 w-8" />
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold font-heading mb-1 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground">{project.category}</p>
                </div>
                <span className="text-sm font-medium px-3 py-1 rounded-full border border-white/10 text-muted-foreground">
                  {project.client}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full h-14 px-8 border-white/10 hover:bg-white/5">
            Load More Projects
          </Button>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-24 border-t border-white/10 mt-12">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-12">Trusted by Industry Leaders</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 opacity-50">
            {clients.map((client, i) => (
              <div key={i} className="flex items-center justify-center h-12">
                <span className="text-2xl font-bold font-heading">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
