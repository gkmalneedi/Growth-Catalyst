import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowUpRight, Clock, Briefcase } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import fabpikImg from "@assets/generated_images/happy_child_shopping_for_ecommerce_success.png";
import monarchImg from "@assets/generated_images/modern_office_space_for_furniture_brand.png";
import centroImg from "@assets/generated_images/futuristic_athletic_shoe_for_footwear_brand.png";
import eduvanceImg from "@assets/generated_images/stack_of_books_for_education_industry.png";
import healthbridgeImg from "@assets/generated_images/doctor_holding_stethoscope_for_healthcare_industry.png";
import technovaImg from "@assets/generated_images/information_technology_data_center.png";

const imageMap: Record<string, string> = {
  happy_child_shopping_for_ecommerce_success: fabpikImg,
  modern_office_space_for_furniture_brand: monarchImg,
  futuristic_athletic_shoe_for_footwear_brand: centroImg,
  stack_of_books_for_education_industry: eduvanceImg,
  doctor_holding_stethoscope_for_healthcare_industry: healthbridgeImg,
  information_technology_data_center: technovaImg,
};

export default function PortfolioDetail() {
  const [location] = useLocation();
  const slug = location.split("/portfolio/")[1];

  const { data: work, isLoading } = useQuery<any>({
    queryKey: [`/api/portfolio/${slug}`],
    enabled: !!slug,
    retry: false,
  });

  const { data: allWorks = [] } = useQuery<any[]>({
    queryKey: ["/api/portfolio"],
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-zinc-400 text-lg">Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!work) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">Case Study Not Found</h1>
            <Link href="/portfolio">
              <Button className="bg-gradient-to-r from-brand-pink to-brand-yellow text-white rounded-full px-8 h-12">
                Back to Works
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const currentIndex = allWorks.findIndex(w => w.slug === slug);
  const nextWork = allWorks[(currentIndex + 1) % allWorks.length];

  const heroImg = imageMap[work.heroImage] || "";
  const nextImg = nextWork ? (imageMap[nextWork.coverImage] || "") : "";
  const services: string[] = work.projectServices || [];

  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Navbar />

      {/* HEADER */}
      <section className="pt-32 pb-12 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="mb-10">
            <Link href="/portfolio">
              <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors duration-200 group">
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-medium tracking-wide">All Case Studies</span>
              </button>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 }} className="flex items-center gap-3 mb-7">
            <span className={`text-2xl font-black font-heading ${work.clientColor}`}>{work.client}</span>
            <span className="h-px w-8 bg-white/20" />
            <span className="text-zinc-400 text-sm">{work.industry}</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.05] text-white max-w-5xl mb-6">
            {work.headline}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }}
            className="text-xl text-zinc-400 max-w-3xl mb-10 leading-relaxed">
            {work.tagline}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <Briefcase className="h-4 w-4 text-brand-orange" />
              <span>{work.category}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-400">
              <Clock className="h-4 w-4 text-brand-orange" />
              <span>{work.duration}</span>
            </div>
            <div className="h-4 w-px bg-white/10 hidden md:block" />
            {services.map(s => (
              <span key={s} className="text-xs px-3 py-1 rounded-full border border-white/10 text-zinc-400">{s}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HERO IMAGE */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }} className="bg-zinc-950 pb-0">
        <div className="container mx-auto px-4 md:px-8">
          <div className="rounded-2xl overflow-hidden aspect-[16/7]">
            {heroImg ? (
              <img src={heroImg} alt={work.client} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-zinc-800" />
            )}
          </div>
        </div>
      </motion.section>

      {/* RESULTS STATS */}
      <section className="py-20 bg-black border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {(work.results || []).map((stat: any, i: number) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`py-10 text-center ${i < (work.results || []).length - 1 ? "border-r border-white/8" : ""}`}>
                <div className="w-10 h-[3px] bg-white rounded-full mx-auto mb-5" />
                <div className="text-4xl md:text-6xl font-black font-heading text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow mb-3">
                  {stat.value}
                </div>
                <div className="text-zinc-400 text-sm px-4 leading-snug">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3">
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-4">Overview</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 leading-tight">About {work.client}</h2>
            </div>
            <div className="lg:w-2/3">
              <p className="text-xl text-zinc-600 leading-relaxed">{work.overview}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section className="py-24 bg-zinc-950 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3">
              <p className="text-xs font-bold tracking-widest uppercase text-brand-orange mb-4">The Challenge</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold leading-tight">What We Were Up Against</h2>
            </div>
            <div className="lg:w-2/3">
              <p className="text-xl text-zinc-400 leading-relaxed mb-10">{work.challenge}</p>
              <div className="flex flex-wrap gap-3">
                {services.map(s => (
                  <span key={s} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-zinc-300">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-1/3">
              <p className="text-xs font-bold tracking-widest uppercase text-zinc-400 mb-4">Our Approach</p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-zinc-900 leading-tight">How We Made It Happen</h2>
            </div>
            <div className="lg:w-2/3 space-y-6">
              {(work.approach || []).map((step: string, i: number) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-brand-pink to-brand-yellow flex items-center justify-center text-white text-xs font-bold mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-lg text-zinc-700 leading-relaxed pt-0.5">{step}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEXT CASE STUDY */}
      {nextWork && (
        <section className="py-24 bg-black text-white">
          <div className="container mx-auto px-4 md:px-8">
            <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-8">Next Case Study</p>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
              <div>
                <p className={`text-base font-bold mb-2 ${nextWork.clientColor}`}>{nextWork.client}</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight max-w-2xl">{nextWork.headline}</h2>
              </div>
              <Link href={`/portfolio/${nextWork.slug}`}>
                <button className="group flex items-center gap-4 text-white hover:opacity-80 transition-opacity flex-shrink-0">
                  <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center group-hover:border-brand-pink group-hover:bg-brand-pink/10 transition-all duration-300">
                    <ArrowUpRight className="h-6 w-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </button>
              </Link>
            </div>
            <Link href={`/portfolio/${nextWork.slug}`}>
              <div className="rounded-2xl overflow-hidden aspect-[16/5] cursor-pointer group">
                {nextImg ? (
                  <img src={nextImg} alt={nextWork.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                ) : (
                  <div className="w-full h-full bg-zinc-800" />
                )}
              </div>
            </Link>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
