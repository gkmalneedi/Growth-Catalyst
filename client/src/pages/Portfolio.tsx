import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { portfolioWorks } from "@/lib/portfolioData";

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

const categoryColors: Record<string, string> = {
  "Social Media Marketing": "text-pink-400",
  "SEO & Content Marketing": "text-amber-400",
  "Performance Marketing": "text-orange-400",
  "Content & Social Media": "text-blue-400",
  "Marketing Automation & SEO": "text-green-400",
  "Brand Management & UI/UX": "text-cyan-400",
};

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
      <Navbar />

      {/* ── HEADER (Miraki: large left-aligned heading, no subtitle) ── */}
      <section className="pt-36 pb-12 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white leading-[1.05] max-w-4xl"
          >
            Elevating Futures with AI: Unveiling Our Digital Mastery
          </motion.h1>
        </div>
      </section>

      {/* ── WORKS GRID (Miraki: 2-col, large images, hover overlay) ── */}
      <section className="pb-24 bg-zinc-950">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolioWorks.map((work, i) => (
              <WorkCard
                key={work.slug}
                work={work}
                index={i}
                imgSrc={imageMap[work.coverImage] || ""}
                categoryColors={categoryColors}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA STRIP ── */}
      <section className="py-20 border-t border-white/8 bg-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-brand-orange mb-3">Ready to be next?</p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Let's create your success story.
            </h2>
          </div>
          <Link href="/contact">
            <button className="group flex items-center gap-4 text-white hover:opacity-80 transition-opacity duration-300 flex-shrink-0">
              <div className="w-14 h-14 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-brand-pink group-hover:bg-brand-pink/10 transition-all duration-300">
                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
              <span className="text-xl font-medium">Talk to Us</span>
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function WorkCard({
  work,
  index,
  imgSrc,
  categoryColors,
}: {
  work: (typeof portfolioWorks)[0];
  index: number;
  imgSrc: string;
  categoryColors: Record<string, string>;
}) {
  // First card spans full width (like Miraki's featured work)
  const isFeature = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.08 }}
      className={isFeature ? "md:col-span-2" : ""}
    >
      <Link href={`/portfolio/${work.slug}`}>
        <div className="group cursor-pointer">
          {/* Image container */}
          <div className={`relative overflow-hidden rounded-2xl ${isFeature ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
            {imgSrc ? (
              <img
                src={imgSrc}
                alt={work.client}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-zinc-800 rounded-2xl" />
            )}

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-end p-8">
              <div className="flex items-end justify-between w-full gap-4">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                  <p className={`text-sm font-medium mb-2 ${categoryColors[work.category] || "text-brand-orange"}`}>
                    {work.category}
                  </p>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-white leading-tight max-w-xl line-clamp-2">
                    {work.headline}
                  </h3>
                </div>
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  <ArrowUpRight className="h-6 w-6 text-black" />
                </div>
              </div>
            </div>
          </div>

          {/* Below image: client + category */}
          <div className="flex items-center justify-between mt-4 px-1">
            <div className="flex items-center gap-3">
              <span className={`text-base font-bold font-heading ${work.clientColor}`}>{work.client}</span>
              <span className="text-zinc-600 text-sm">— {work.industry}</span>
            </div>
            <span className="text-xs font-medium text-zinc-500 border border-white/8 px-3 py-1 rounded-full">
              {work.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
