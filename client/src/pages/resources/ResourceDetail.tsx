import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LazyImage } from "@/components/ui/lazy-image";
import { blogs, caseStudies, pressReleases } from "@/lib/mockData";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ResourceDetail() {
  const [location] = useLocation();
  // location is like /resources/blogs/slug-name
  const parts = location.split('/');
  const type = parts[2]; // blogs, case-studies, press-release
  const slug = parts[3];

  let data: any = null;
  let backLink = '/resources/blogs';
  let typeLabel = 'Blog';

  if (type === 'blogs') {
    data = blogs.find(b => b.slug === slug);
    backLink = '/resources/blogs';
    typeLabel = 'Blog Article';
  } else if (type === 'case-studies') {
    data = caseStudies.find(c => c.slug === slug);
    backLink = '/resources/case-studies';
    typeLabel = 'Case Study';
  } else if (type === 'press-release') {
    data = pressReleases.find(p => p.slug === slug);
    backLink = '/resources/press-release';
    typeLabel = 'Press Release';
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Content Not Found</h1>
            <p className="text-zinc-400 mb-6">The article you are looking for does not exist.</p>
            <Link href={backLink}>
              <Button variant="outline">Go Back</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-primary/30">
      <Navbar />

      <article className="pt-32 pb-20">
        {/* Header / Hero */}
        <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href={backLink}>
              <a className="inline-flex items-center text-zinc-400 hover:text-primary mb-8 transition-colors text-sm font-medium">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to {type === 'press-release' ? 'Press Releases' : type.replace('-', ' ')}
              </a>
            </Link>
            
            <div className="flex items-center justify-center gap-3 mb-6">
              <Badge variant="outline" className="border-primary/20 text-primary bg-primary/5 uppercase tracking-wider px-3 py-1">
                {data.category}
              </Badge>
              {data.readTime && (
                <span className="text-zinc-500 text-sm flex items-center gap-1">
                   <Clock className="w-3 h-3" /> {data.readTime}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
              {data.title}
            </h1>

            {/* Meta Data */}
            <div className="flex items-center justify-center gap-6 text-zinc-400 text-sm mb-12 border-y border-white/10 py-6">
               {data.author && (
                 <div className="flex items-center gap-2">
                   <User className="w-4 h-4" />
                   <span className="text-white font-medium">{data.author}</span>
                 </div>
               )}
               {data.client && (
                 <div className="flex items-center gap-2">
                   <User className="w-4 h-4" />
                   <span className="text-white font-medium">Client: {data.client}</span>
                 </div>
               )}
               <div className="flex items-center gap-2">
                 <Calendar className="w-4 h-4" />
                 <span>{data.createdAt || data.date}</span>
               </div>
               {data.source && (
                 <div className="flex items-center gap-2">
                   <span>Source: {data.source}</span>
                 </div>
               )}
            </div>
          </motion.div>
        </div>

        {/* Featured Image */}
        {data.image && (
          <div className="container mx-auto px-4 md:px-8 max-w-5xl mb-16">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl overflow-hidden border border-white/10 aspect-[16/9] md:aspect-[21/9]"
            >
              <LazyImage 
                src={data.image} 
                alt={data.title}
                ratio={21/9}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        )}

        {/* Content Body */}
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg prose-invert mx-auto prose-headings:font-heading prose-headings:font-bold prose-a:text-primary prose-img:rounded-2xl"
          >
             {/* If we have stats for case studies, show them prominently */}
             {data.stats && (
               <div className="grid grid-cols-2 gap-4 my-10 not-prose">
                 {data.stats.map((stat: any, i: number) => (
                   <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center">
                     <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                     <div className="text-sm text-zinc-400 uppercase tracking-wider">{stat.label}</div>
                   </div>
                 ))}
               </div>
             )}

             {/* Render HTML content */}
             <div dangerouslySetInnerHTML={{ __html: data.content }} />
             
          </motion.div>
          
          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="text-lg font-heading font-bold">Share this article</div>
            <div className="flex gap-4">
               <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 hover:text-[#0A66C2]">
                 <Linkedin className="w-5 h-5" />
               </Button>
               <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 hover:text-[#1DA1F2]">
                 <Twitter className="w-5 h-5" />
               </Button>
               <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10 hover:text-[#1877F2]">
                 <Facebook className="w-5 h-5" />
               </Button>
               <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/10">
                 <Share2 className="w-5 h-5" />
               </Button>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
