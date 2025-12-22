import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, ExternalLink, Newspaper, Megaphone } from "lucide-react";

const pressReleases = [
  {
    title: 'Nexus Digital Expands Operations to Singapore',
    category: 'Expansion',
    source: 'Business Wire',
    description: 'We are thrilled to announce our new regional HQ in Singapore to serve the growing APAC market. This move marks a significant milestone in our global expansion strategy.',
    date: 'Sep 01, 2025',
    year: '2025',
    link: '#'
  },
  {
    title: 'Nexus Named "Agency of the Year" by Digital World',
    category: 'Awards',
    source: 'TechCrunch',
    description: 'Recognized for our innovative AI-driven approach and exceptional client results in 2024. The award highlights our commitment to pushing the boundaries of digital marketing.',
    date: 'Aug 15, 2025',
    year: '2025',
    link: '#'
  },
  {
    title: 'Launching "NexusAI": Our Proprietary Marketing Tool',
    category: 'Product Launch',
    source: 'Product Hunt',
    description: 'Introducing our new AI platform that predicts consumer behavior with 90% accuracy. NexusAI is set to revolutionize how brands connect with their audiences.',
    date: 'Jul 01, 2025',
    year: '2025',
    link: '#'
  },
  {
    title: 'Partnership Announcement: Nexus x Google Cloud',
    category: 'Partnership',
    source: 'Google Blog',
    description: 'Strategic partnership to leverage Google Cloud AI capabilities for our enterprise clients. This collaboration will enable us to deliver even more powerful data insights.',
    date: 'Jun 10, 2025',
    year: '2025',
    link: '#'
  },
  {
    title: 'Q1 Financial Results: Record Growth for Nexus',
    category: 'Finance',
    source: 'Financial Times',
    description: 'Nexus Digital reports 200% YoY growth in Q1 2025, driven by strong enterprise adoption and international expansion.',
    date: 'Apr 15, 2025',
    year: '2025',
    link: '#'
  }
];

export default function PressRelease() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-primary/30">
      <Navbar />
      
      {/* Header */}
      <section className="relative pt-40 pb-20 px-4 md:px-8 bg-zinc-900/50 border-b border-white/5">
        <div className="container mx-auto max-w-5xl text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/20 hover:bg-primary/30 px-4 py-1.5 rounded-full uppercase tracking-wider">
            Newsroom
          </Badge>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-8">
            Latest Updates & <br/> Announcements
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Stay updated with the latest news, milestones, and media coverage from Nexus Digital.
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-4">
             <Button variant="outline" className="rounded-full border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 hover:border-white/30">
               Media Kit
             </Button>
             <Button variant="outline" className="rounded-full border-white/10 text-zinc-300 hover:text-white hover:bg-white/5 hover:border-white/30">
               Contact Press Team
             </Button>
          </div>
        </div>
      </section>

      {/* Timeline Layout */}
      <section className="py-20 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent" />
          
          <div className="space-y-16">
            {pressReleases.map((item, i) => (
              <PressItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 md:px-8 border-t border-white/5 bg-zinc-900/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Megaphone className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Never Miss an Update</h2>
          <p className="text-zinc-400 mb-10 max-w-lg mx-auto">
            Subscribe to our newsletter to get the latest press releases and company news delivered straight to your inbox.
          </p>
          
          <form className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
            />
            <Button className="rounded-full px-8 bg-white text-black hover:bg-zinc-200">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function PressItem({ item, index }: { item: any, index: number }) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Date Marker (Center) */}
      <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-primary z-10 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
      
      {/* Content Side */}
      <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer">
          <div className={`flex flex-col gap-4 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
            <div className="flex items-center gap-3">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">{item.category}</span>
              <span className="w-1 h-1 rounded-full bg-zinc-600" />
              <span className="text-zinc-500 text-xs flex items-center gap-1">
                <Calendar className="w-3 h-3" /> {item.date}
              </span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold font-heading group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            
            <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
              {item.description}
            </p>
            
            <div className={`flex items-center gap-2 text-xs text-zinc-500 mt-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
              <Newspaper className="w-3 h-3" /> Source: <span className="text-white">{item.source}</span>
            </div>
            
            <div className={`mt-2 flex items-center text-primary text-sm font-medium ${isEven ? 'md:flex-row-reverse' : ''}`}>
              Read Full Story <ExternalLink className="ml-2 w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Empty Side for layout balance */}
      <div className="hidden md:block w-1/2" />
    </motion.div>
  );
}
