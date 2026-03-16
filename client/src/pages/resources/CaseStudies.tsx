import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LazyImage } from "@/components/ui/lazy-image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { CaseStudy } from "@shared/schema";

export default function CaseStudies() {
  const { data: caseStudies = [], isLoading } = useQuery<CaseStudy[]>({
    queryKey: ["/api/case-studies"],
  });
  
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-primary/30">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-zinc-950/50 to-zinc-950 pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
             <Badge variant="outline" className="mb-6 px-4 py-2 border-white/10 text-zinc-300 text-sm font-normal tracking-widest uppercase">
               Proven Results
             </Badge>
             <h1 className="text-6xl md:text-9xl font-heading font-bold mb-8 tracking-tighter">
               Our <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-600">Impact</span>
             </h1>
             <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
               We don't just promise growth. We engineer it. Explore how we've transformed businesses through data-driven strategies and creative excellence.
             </p>
          </motion.div>
          
          <div className="mt-16 flex justify-center gap-12 text-center">
            {[
              { label: 'Revenue Generated', value: '$50M+' },
              { label: 'Users Acquired', value: '2M+' },
              { label: 'Awards Won', value: '15+' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl md:text-5xl font-bold font-heading text-white">{stat.value}</span>
                <span className="text-sm text-zinc-500 uppercase tracking-wider mt-2">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="px-4 md:px-8 pb-32">
        <div className="container mx-auto max-w-7xl space-y-32">
          {isLoading ? (
            <div className="flex justify-center py-20">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          ) : (
            caseStudies.map((study, i) => (
              <CaseStudyItem key={study.id} study={study} index={i} />
            ))
          )}
        </div>
        
        <div className="mt-32 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-8">Ready to write your success story?</h2>
          <Button size="lg" className="rounded-full h-16 px-12 text-lg bg-white text-black hover:bg-white/90" data-testid="button-start-project">
            Start a Project <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function CaseStudyItem({ study, index }: { study: CaseStudy, index: number }) {
  const isEven = index % 2 === 0;
  const stats = study.stats as { label: string; value: string }[];
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center group`}
      data-testid={`card-casestudy-${study.id}`}
    >
      {/* Image Side */}
      <div className="w-full lg:w-3/5">
        <Link href={`/resources/case-studies/${study.slug}`}>
          <a className="block relative rounded-3xl overflow-hidden aspect-[4/3] group-hover:shadow-2xl group-hover:shadow-primary/10 transition-all duration-500 cursor-pointer">
             <div className={`absolute inset-0 bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 mix-blend-overlay z-10`} />
             <LazyImage 
               src={study.image} 
               alt={study.title} 
               ratio={4/3}
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
             />
             
             {/* Floating Stats Card */}
             <div className={`absolute bottom-6 ${isEven ? 'right-6' : 'left-6'} bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100`}>
               <div className="flex gap-8">
                 {stats.map((stat, i) => (
                   <div key={i}>
                     <div className="text-2xl font-bold text-white">{stat.value}</div>
                     <div className="text-xs text-zinc-300 uppercase tracking-wider">{stat.label}</div>
                   </div>
                 ))}
               </div>
             </div>
          </a>
        </Link>
      </div>
      
      {/* Content Side */}
      <div className="w-full lg:w-2/5 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <span className="font-bold tracking-widest uppercase text-sm text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">{study.client}</span>
             <span className="w-1 h-1 rounded-full bg-zinc-600" />
             <span className="text-zinc-400 text-sm">{study.category}</span>
          </div>
          <Link href={`/resources/case-studies/${study.slug}`}>
            <a className="block group-hover:text-primary transition-colors">
              <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                {study.title}
              </h2>
            </a>
          </Link>
        </div>
        
        <p className="text-xl text-zinc-400 leading-relaxed">
          {study.description}
        </p>
        
        <ul className="space-y-4 pt-4">
           {['Strategy', 'Execution', 'Optimization'].map((item, i) => (
             <li key={i} className="flex items-center gap-3 text-zinc-300">
               <div className="w-6 h-6 rounded-full flex items-center justify-center p-[1px] bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">
                 <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">
                      {i + 1}
                    </span>
                 </div>
               </div>
               {item} Phase
             </li>
           ))}
        </ul>
        
        <Link href={`/resources/case-studies/${study.slug}`}>
          <Button variant="link" className="p-0 h-auto text-lg group/btn hover:no-underline">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow font-bold">
              View Case Study 
            </span>
            <ArrowRight className="ml-2 w-5 h-5 text-brand-orange transition-transform group-hover/btn:translate-x-2" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
