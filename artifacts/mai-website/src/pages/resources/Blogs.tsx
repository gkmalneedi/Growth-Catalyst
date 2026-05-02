import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LazyImage } from "@/components/ui/lazy-image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import type { Blog } from "@shared/schema";

export default function Blogs() {
  const { data: blogs = [], isLoading } = useQuery<Blog[]>({
    queryKey: ["/api/blogs"],
  });

  const allPosts = blogs;

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-primary/30">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50 pointer-events-none" />
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-heading font-bold mb-6 tracking-tight">
              Insights & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">Perspectives</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
              Deep dives into digital strategy, design trends, and the future of technology. Curated by the Nexus team.
            </p>
          </motion.div>
        </div>
      </section>

      {isLoading ? (
        <div className="flex justify-center py-32">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
      ) : (
        <>
          {/* Grid Layout */}
          <section className="px-4 md:px-8 pb-32">
            <div className="container mx-auto max-w-7xl">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allPosts.map((post, i) => (
                  <Link href={`/resources/blogs/${post.slug}`} key={post.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer"
                    data-testid={`card-blog-${post.id}`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                       <div className="absolute top-4 left-4 z-10">
                         <Badge className="bg-black/50 backdrop-blur-md border border-white/10 hover:bg-black/70 text-white">
                           {post.category}
                         </Badge>
                       </div>
                       <LazyImage 
                         src={post.image} 
                         alt={post.title}
                         ratio={4/3}
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                    </div>
                    
                    <div className="flex flex-col flex-grow p-6">
                      <div className="flex items-center gap-3 text-xs text-zinc-500 mb-4 uppercase tracking-wider font-medium">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.createdAt}</span>
                        <span className="w-1 h-1 rounded-full bg-zinc-700" />
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-heading font-bold mb-3 leading-snug group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {post.description}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                        <div className="text-sm font-medium text-zinc-300">{post.author}</div>
                        <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-primary -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </div>
                    </div>
                  </motion.div>
                  </Link>
                ))}
              </div>
              
              <div className="mt-20 flex justify-center">
                <Button variant="outline" size="lg" className="rounded-full px-10 border-white/10 hover:bg-white/5 text-white" data-testid="button-load-more">
                  Load More Articles
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      <Footer />
    </div>
  );
}
