import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import heroBg from "@assets/generated_images/abstract_blue_vector_wave_background.png";
import creativeForceImg from "@assets/generated_images/abstract_creative_force_graphic.png";
import growthImg from "@assets/generated_images/digital_growth_rocket_graph.png";

import { servicesList } from "@/lib/data";

const heroSlides = [
  {
    title: "We're the Crusaders of",
    highlight: "Agent Marketing",
    subtitle: "Redefining Engagement"
  },
  {
    title: "We're the Crusaders of",
    highlight: "AI Marketing",
    subtitle: "Redefining Engagement"
  },
  {
    title: "We're the Crusaders of",
    highlight: "Automation",
    subtitle: "Redefining Engagement"
  },
  {
    title: "We're the Crusaders of",
    highlight: "Less Manpower",
    subtitle: "Redefining Engagement"
  },
  {
    title: "We're the Crusaders of",
    highlight: "More ROI",
    subtitle: "Redefining Engagement"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 overflow-hidden bg-zinc-950 text-white section-black">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Digital Background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <Carousel
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
              opts={{
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {heroSlides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-12">
                      {slide.title} <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
                        {slide.highlight},
                      </span> <br />
                      {slide.subtitle}
                    </h1>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            <div className="flex justify-center mt-12 mb-12">
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-solid-white hover:bg-white/90 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300 group">
                  Let's Connect <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BY / PARTNERS */}
      <section className="py-20 bg-white/5 backdrop-blur-sm overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-10">
          <h2 className="text-center text-muted-foreground text-lg font-medium tracking-wide uppercase">
            A Trusted Digital Growth Companion For Startups, Scale-ups & Enterprises
          </h2>
        </div>
        
        {/* Infinite Slider */}
        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
             {[
               "Govt of India", "IDBI Bank", "Philips", "EuroArt", "TechMahindra", "Accenture", 
               "Google", "Amazon", "Microsoft", "Netflix", "Spotify", "Uber", "Airbnb", 
               "Tesla", "Samsung", "Sony", "LG", "HP", "Dell", "Intel"
             ].map((logo, i) => (
               <div key={i} className="text-xl md:text-3xl font-bold font-heading text-white/50 hover:text-white transition-colors duration-300 mx-4 cursor-default select-none">
                 {logo}
               </div>
             ))}
             {/* Duplicated for seamless loop */}
             {[
               "Govt of India", "IDBI Bank", "Philips", "EuroArt", "TechMahindra", "Accenture", 
               "Google", "Amazon", "Microsoft", "Netflix", "Spotify", "Uber", "Airbnb", 
               "Tesla", "Samsung", "Sony", "LG", "HP", "Dell", "Intel"
             ].map((logo, i) => (
               <div key={`dup-${i}`} className="text-xl md:text-3xl font-bold font-heading text-white/50 hover:text-white transition-colors duration-300 mx-4 cursor-default select-none">
                 {logo}
               </div>
             ))}
          </div>
          
          <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap gap-20 items-center">
             {[
               "Govt of India", "IDBI Bank", "Philips", "EuroArt", "TechMahindra", "Accenture", 
               "Google", "Amazon", "Microsoft", "Netflix", "Spotify", "Uber", "Airbnb", 
               "Tesla", "Samsung", "Sony", "LG", "HP", "Dell", "Intel"
             ].map((logo, i) => (
               <div key={`dup2-${i}`} className="text-xl md:text-3xl font-bold font-heading text-white/50 hover:text-white transition-colors duration-300 mx-4 cursor-default select-none">
                 {logo}
               </div>
             ))}
             {[
               "Govt of India", "IDBI Bank", "Philips", "EuroArt", "TechMahindra", "Accenture", 
               "Google", "Amazon", "Microsoft", "Netflix", "Spotify", "Uber", "Airbnb", 
               "Tesla", "Samsung", "Sony", "LG", "HP", "Dell", "Intel"
             ].map((logo, i) => (
               <div key={`dup3-${i}`} className="text-xl md:text-3xl font-bold font-heading text-white/50 hover:text-white transition-colors duration-300 mx-4 cursor-default select-none">
                 {logo}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. APPROACH SECTION */}
      <section className="py-32 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight text-white"
            >
              From Strategy to Outcomes: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Our Proven Approach Ensures Success</span>
            </motion.h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're a creative force driven by the belief that the perfect blend of the right people, right ideas, right approach, and right technology can make the impossible, possible.
            </p>
          </div>
          <div className="md:w-1/2">
            <img src={creativeForceImg} alt="Creative Force" className="w-full h-auto rounded-3xl shadow-2xl shadow-primary/20 border border-white/10" />
          </div>
        </div>
      </section>

      {/* 4. AI SECTION */}
      <section className="py-32 bg-white/5 backdrop-blur-sm relative overflow-hidden section-black">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-5xl">
           <h2 className="text-4xl md:text-6xl font-heading font-bold mb-10 leading-tight">
             Setting the Pace & Breaking the Barriers of <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Digital Marketing with AI</span>
           </h2>
           <p className="text-xl text-zinc-300 mb-14 max-w-3xl mx-auto leading-relaxed">
             We're the architects of your digital success, fueled by AI innovations. From ultra-tailored messages to hyper-targeted campaigns, we harness cutting-edge AI solutions and proven techniques to propel your brand to the forefront of the digital landscape.
           </p>
           <Link href="/about">
             <Button variant="outline" size="lg" className="rounded-full h-14 px-8 border-white/20 hover:bg-white/10 text-white text-lg transition-all hover:scale-105">
               Know More About Us
             </Button>
           </Link>
        </div>
      </section>

      {/* 5. GROWTH SECTION */}
      <section className="py-32 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-20">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight text-white">
              With Us, Your Digital Growth isn't Just Rapid - <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">it's Unstoppable</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Your ‘growth’ forms the foundation of everything we do. We constantly innovate and push the boundaries to propel you forward, elevating your online presence with unprecedented growth opportunities.
            </p>
            <Link href="/portfolio">
              <Button size="lg" className="rounded-full h-14 px-8 bg-primary text-white hover:bg-primary/90 text-lg shadow-lg shadow-primary/25 transition-all hover:scale-105">
                See Our Works
              </Button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img src={growthImg} alt="Unstoppable Growth" className="w-full h-auto rounded-3xl shadow-2xl border border-white/10" />
          </div>
        </div>
      </section>

      {/* 6. SERVICES SECTION */}
      <section className="py-32 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-white">
              Cruise Towards Intelligent Digital Marketing With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tailored Services</span>
            </h2>
            <Link href="/services">
              <Button variant="link" className="text-primary text-lg hover:text-primary/80">Explore More Services &rarr;</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.slice(0, 6).map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                <Link href={service.href}>
                  <a className="text-sm font-medium uppercase tracking-wider text-primary group-hover:text-white transition-colors flex items-center gap-2">
                    Learn More <ArrowRight className="h-4 w-4" />
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-32 section-black">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-20">
            Some of the Golden Lines that <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Keep Us Motivated</span>
          </h2>
          
          <Carousel className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {[
                {
                  quote: "Miraki Digital's Email Marketing services have truly transformed our outreach strategy. Their personalized approach, AI-driven techniques, and expertly tailored campaigns have significantly increased our engagement rates.",
                  name: "Pradeep Reddy",
                  role: "Senior Manager, Accenture"
                },
                {
                  quote: "The SEO squad is terrific at achieving organic traffic! Their genuine care for our growth and attention to detail have truly impressed me. We've seen a remarkable increase in our online visibility.",
                  name: "Ramesh Rathi",
                  role: "GM, CipherCloud"
                },
                {
                  quote: "Kudos to your outstanding content marketing services! Your strategic approach, creativity, and profound understanding of our business have truly elevated our brand's voice.",
                  name: "Ashok Boddeda",
                  role: "Director, Sysgain INC"
                }
              ].map((testimonial, i) => (
                <CarouselItem key={i}>
                  <div className="p-10 md:p-16 rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-500 to-pink-500" />
                    <div className="flex justify-center mb-8">
                      <div className="flex gap-1">
                        {[1,2,3,4,5].map(s => <Star key={s} className="h-6 w-6 fill-yellow-500 text-yellow-500" />)}
                      </div>
                    </div>
                    <h3 className="text-xl md:text-3xl font-medium leading-relaxed mb-10 text-white">"{testimonial.quote}"</h3>
                    <div>
                      <div className="font-bold text-xl text-white mb-1">{testimonial.name}</div>
                      <div className="text-primary font-medium">{testimonial.role}</div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-y-0 bg-white/5 border-white/20 text-white hover:bg-white/20 h-12 w-12 rounded-full" />
              <CarouselNext className="static translate-y-0 bg-white/5 border-white/20 text-white hover:bg-white/20 h-12 w-12 rounded-full" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* 8. PARTNERS ECOSYSTEM */}
      <section className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-white">
            Together, We Propel Your Growth: Our Partners
          </h2>
          <p className="text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
            Fast-track your growth with our strategic partners' ecosystem and unmatched experience in crafting digital dominance.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-10">
             {["Meta", "Google Ads", "Bing", "Amazon", "HubSpot", "CleverTap"].map((partner, i) => (
               <div key={i} className="flex items-center justify-center font-bold text-lg border border-white/10 rounded-2xl h-24 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white hover:scale-105 transition-all duration-300">
                 {partner}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 9. AWARDS */}
      <section className="py-24 container mx-auto px-4 md:px-8 text-center">
         <h2 className="text-3xl md:text-5xl font-heading font-bold mb-16 text-white leading-tight">
            It Takes a Lot to Achieve an Award, <br/> But We’re Always Ready for it
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["T-Hub", "Good Firms", "ISO 27001", "Silicon India"].map((award, i) => (
              <div key={i} className="flex flex-col items-center gap-6 p-8 border border-white/10 rounded-3xl bg-white/5 hover:border-primary/50 transition-colors shadow-lg hover:shadow-primary/10">
                <div className="h-20 w-20 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 border border-yellow-500/20">
                  <Star className="h-10 w-10" />
                </div>
                <span className="font-bold text-xl text-white">{award}</span>
              </div>
            ))}
         </div>
      </section>

      <Footer />
    </div>
  );
}
