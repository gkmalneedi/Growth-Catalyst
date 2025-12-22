import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LazyImage } from "@/components/ui/lazy-image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { blogs } from "@/lib/mockData";

export default function Blogs() {
  const featuredPost = blogs.find(b => b.featured) || blogs[0];
  const otherPosts = blogs.filter(b => b !== featuredPost);

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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Perspectives</span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
              Deep dives into digital strategy, design trends, and the future of technology. Curated by the Nexus team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 md:px-8 pb-20">
        <div className="container mx-auto max-w-7xl">
          <Link href={`/resources/blogs/${featuredPost.slug}`}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="group relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 hover:border-white/20 transition-all duration-500 overflow-hidden cursor-pointer"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative overflow-hidden rounded-2xl aspect-[16/9] lg:aspect-auto lg:h-[400px]">
              <LazyImage 
                src={featuredPost.image} 
                alt={featuredPost.title}
                ratio={16/9}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="flex flex-col justify-center space-y-6 relative z-10">
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="text-primary border-primary/30 px-3 py-1 bg-primary/5 backdrop-blur-sm">
                  {featuredPost.category}
                </Badge>
                <span className="text-sm text-zinc-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {featuredPost.readTime}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-bold leading-tight group-hover:text-primary transition-colors duration-300">
                {featuredPost.title}
              </h2>
              
              <p className="text-zinc-400 text-lg line-clamp-3 leading-relaxed">
                {featuredPost.description}
              </p>
              
              <div className="pt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center font-bold text-sm">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-white">{featuredPost.author}</div>
                    <div className="text-xs text-zinc-500">{featuredPost.createdAt}</div>
                  </div>
                </div>
                
                <Button variant="ghost" className="group/btn text-white hover:text-primary hover:bg-transparent p-0">
                  Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </div>
          </motion.div>
          </Link>
        </div>
      </section>

      {/* Categories Filter (Visual only for now) */}
      <section className="px-4 md:px-8 mb-12">
        <div className="container mx-auto max-w-7xl overflow-x-auto pb-4 hide-scrollbar">
          <div className="flex gap-4 min-w-max">
            {['All', 'Strategy', 'Design', 'Development', 'AI & Tech', 'Marketing', 'Branding'].map((cat, i) => (
              <button 
                key={i}
                className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${
                  i === 0 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid Layout */}
      <section className="px-4 md:px-8 pb-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post, i) => (
              <Link href={`/resources/blogs/${post.slug}`} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 h-full cursor-pointer"
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
            <Button variant="outline" size="lg" className="rounded-full px-10 border-white/10 hover:bg-white/5 text-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
