import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle2, TrendingUp, Users, Target } from "lucide-react";
import { useLocation, Link } from "wouter";
import { industriesList, servicesList } from "@/lib/data";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Import images
import isoBadge1 from "@assets/stock_images/gold_iso_certificati_34a75bf8.jpg";
import fabpikImg from "@assets/generated_images/happy_child_shopping_for_ecommerce_success.png";
import monarchImg from "@assets/generated_images/modern_office_space_for_furniture_brand.png";
import centroImg from "@assets/generated_images/futuristic_athletic_shoe_for_footwear_brand.png";

export default function IndustryTemplate() {
  const [location] = useLocation();
  const industry = industriesList.find(s => s.href === location) || { 
    title: "Industry Not Found", 
    href: "#" 
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(193,53,132,0.15),transparent_50%)] -z-10" />
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight max-w-5xl mx-auto"
          >
            Crush Your Competitors with Our AI-powered <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">{industry.title} Marketing!</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-400 mb-12 max-w-3xl mx-auto"
          >
            Expert {industry.title} Digital Marketing to Make Your Business Shine Online and drive unprecedented growth
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link href="/contact">
              <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-solid-white hover:bg-white/90 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 group text-black">
                Talk to Us <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. PARTNERS SECTION */}
      <section className="py-20 bg-black text-white border-t border-white/10 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Partners Driving <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">{industry.title} Success</span>
          </h2>
        </div>
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
            {[
              { name: "Meta", color: "text-blue-500" },
              { name: "Google Ads", color: "text-yellow-400" },
              { name: "Bing Ads", color: "text-teal-400" },
              { name: "Amazon", color: "text-orange-500" },
              { name: "CleverTap", color: "text-red-500" },
              { name: "HubSpot", color: "text-orange-500" },
              { name: "Salesforce", color: "text-blue-400" },
              { name: "Shopify", color: "text-green-500" },
              { name: "Mailchimp", color: "text-yellow-500" },
              { name: "Semrush", color: "text-orange-400" },
            ].map((logo, i) => (
              <span key={i} className={`text-2xl md:text-3xl font-bold font-heading ${logo.color} mx-4 cursor-default select-none`}>{logo.name}</span>
            ))}
            {[
              { name: "Meta", color: "text-blue-500" },
              { name: "Google Ads", color: "text-yellow-400" },
              { name: "Bing Ads", color: "text-teal-400" },
              { name: "Amazon", color: "text-orange-500" },
              { name: "CleverTap", color: "text-red-500" },
              { name: "HubSpot", color: "text-orange-500" },
              { name: "Salesforce", color: "text-blue-400" },
              { name: "Shopify", color: "text-green-500" },
              { name: "Mailchimp", color: "text-yellow-500" },
              { name: "Semrush", color: "text-orange-400" },
            ].map((logo, i) => (
              <span key={`dup-${i}`} className={`text-2xl md:text-3xl font-bold font-heading ${logo.color} mx-4 cursor-default select-none`}>{logo.name}</span>
            ))}
          </div>
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-16 items-center">
            {[
              { name: "Meta", color: "text-blue-500" },
              { name: "Google Ads", color: "text-yellow-400" },
              { name: "Bing Ads", color: "text-teal-400" },
              { name: "Amazon", color: "text-orange-500" },
              { name: "CleverTap", color: "text-red-500" },
              { name: "HubSpot", color: "text-orange-500" },
              { name: "Salesforce", color: "text-blue-400" },
              { name: "Shopify", color: "text-green-500" },
              { name: "Mailchimp", color: "text-yellow-500" },
              { name: "Semrush", color: "text-orange-400" },
            ].map((logo, i) => (
              <span key={`dup2-${i}`} className={`text-2xl md:text-3xl font-bold font-heading ${logo.color} mx-4 cursor-default select-none`}>{logo.name}</span>
            ))}
            {[
              { name: "Meta", color: "text-blue-500" },
              { name: "Google Ads", color: "text-yellow-400" },
              { name: "Bing Ads", color: "text-teal-400" },
              { name: "Amazon", color: "text-orange-500" },
              { name: "CleverTap", color: "text-red-500" },
              { name: "HubSpot", color: "text-orange-500" },
              { name: "Salesforce", color: "text-blue-400" },
              { name: "Shopify", color: "text-green-500" },
              { name: "Mailchimp", color: "text-yellow-500" },
              { name: "Semrush", color: "text-orange-400" },
            ].map((logo, i) => (
              <span key={`dup3-${i}`} className={`text-2xl md:text-3xl font-bold font-heading ${logo.color} mx-4 cursor-default select-none`}>{logo.name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AWARENESS & STATS SECTION */}
      <section className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
                Boost Brand Awareness By More Than 50%
              </h2>
              <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                As a leading {industry.title} marketing company, Nexus helps businesses of all sizes craft personalized customer journeys through cutting-edge AI and advanced marketing techniques. We go beyond the surface with insight-driven strategies to craft personalized experiences that turn even window shoppers into loyal customers.
              </p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 text-center">
                 <div className="text-4xl font-bold text-brand-rose mb-2">200% +</div>
                 <div className="text-sm text-zinc-400">Higher in customer engagement</div>
               </div>
               <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 text-center">
                 <div className="text-4xl font-bold text-brand-red mb-2">300% +</div>
                 <div className="text-sm text-zinc-400">Improved customer trust</div>
               </div>
               <div className="p-8 rounded-2xl bg-zinc-900/50 border border-white/10 text-center">
                 <div className="text-4xl font-bold text-orange-500 mb-2">80% +</div>
                 <div className="text-sm text-zinc-400">Increased conversion rate</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRECISION TARGETING */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
           <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
             {industry.title} Marketing With Precision Targeting
           </h2>
           <h3 className="text-2xl font-medium text-brand-orange mb-6">
             Our Strategies Are Cutting-Edge, Yet Designed With Your Customers In Mind.
           </h3>
           <p className="text-xl text-zinc-400 leading-relaxed">
             We utilize advanced analytics to deeply understand your audience and craft personalized campaigns that resonate. Our data-driven approach, guided by human expertise, ensures you attract and retain the loyal customers your {industry.title} business deserves.
           </p>
        </div>
      </section>

      {/* 5. SERVICES SECTION */}
      <section className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-16 text-center text-white">
            Our {industry.title} Digital Marketing Services
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {servicesList.slice(0, 8).map((service, i) => (
              <Link key={i} href={service.href}>
                <div className="flex flex-col items-center text-center group cursor-pointer p-6 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="h-20 w-20 rounded-full bg-gradient-to-br from-brand-pink/20 to-brand-yellow/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10">
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SUCCESS STORIES */}
      <section className="py-24 container mx-auto px-4 md:px-8 bg-white">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-zinc-900">
            Some Success Stories <br/> To Inspire You
          </h2>
          <Link href="/portfolio">
            <Button variant="link" className="text-lg text-primary group">
              See all <div className="ml-2 w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors"><ArrowRight className="h-4 w-4" /></div>
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SuccessCard 
            img={fabpikImg}
            badge="Fabpik"
            title="50% Jump in Brand Visibility: FabPik's in Kids' e-commerce"
          />
          <SuccessCard 
            img={monarchImg}
            badge="Monarch"
            title="From Hidden to Highlighted: Global Office Furniture Brand's Digital Leap with Us"
          />
          <SuccessCard 
            img={centroImg}
            badge="Centro"
            title="Leading Footwear Brand CENTRO Achieves Sales Growth with Our Social Media Magic!"
          />
        </div>
      </section>

      {/* 7. FAQ SECTION */}
      <section className="py-24 bg-zinc-950 text-white section-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-zinc-400">
              As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our {industry.title} clients.
            </p>
          </div>
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-white/10">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6 text-white">
                  What is AI-powered {industry.title} marketing?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-6">
                  AI-powered {industry.title} marketing uses artificial intelligence to improve and automate marketing tasks specifically for online stores. This includes personalized product recommendations, optimized pricing strategies, and targeted email campaigns based on customer behavior.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-white/10">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6 text-white">
                  How can AI improve my {industry.title} conversion rates?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-6">
                  AI analyzes vast amounts of user data to predict buying behavior, enabling real-time personalization of content, offers, and product suggestions that significantly increase the likelihood of purchase.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-white/10">
                <AccordionTrigger className="text-lg font-medium hover:no-underline hover:text-primary py-6 text-white">
                  How do you measure the success of {industry.title} marketing campaigns?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-6">
                  We track key performance indicators (KPIs) such as Return on Ad Spend (ROAS), Customer Acquisition Cost (CAC), Conversion Rate, and Customer Lifetime Value (CLV) to ensure your campaigns are delivering tangible business results.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-brand-pink/20 to-brand-yellow/20 text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
           <h2 className="text-4xl md:text-6xl font-heading font-bold mb-12 max-w-4xl mx-auto leading-tight">
             Let's Build Your Strategies to Dominate the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">{industry.title} World!</span>
           </h2>
           <Link href="/contact">
             <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-solid-white hover:bg-white/90 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 group text-black">
               Talk to Us <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
             </Button>
           </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function SuccessCard({ img, badge, title }: { img: string, badge: string, title: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="rounded-xl overflow-hidden mb-6 aspect-[4/3] relative">
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-md z-10">
          {badge}
        </div>
        <img src={img} alt={badge} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <h3 className="text-lg font-bold font-heading leading-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
    </div>
  );
}
