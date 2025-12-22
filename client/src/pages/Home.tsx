import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Digital Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-tight mb-8">
              We're the Crusaders of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                AI-Powered Digital Marketing,
              </span> <br />
              Redefining Engagement
            </h1>
            
            <div className="flex justify-center mt-10">
              <Link href="/contact">
                <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-white text-black hover:bg-white/90 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300">
                  Let's Connect <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUSTED BY / PARTNERS */}
      <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-center text-muted-foreground text-lg mb-8 font-medium">
            A Trusted Digital Growth Companion For Startups, Scale-ups & Enterprises
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Placeholder Logos - In a real app these would be SVGs */}
             {["Govt of India", "IDBI Bank", "Philips", "EuroArt", "TechMahindra", "Accenture"].map((logo, i) => (
               <div key={i} className="text-xl font-bold font-heading">{logo}</div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. APPROACH SECTION */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight"
            >
              From Strategy to Outcomes: <br />
              <span className="text-primary">Our Proven Approach Ensures Success</span>
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
      <section className="py-32 bg-gradient-to-br from-blue-900/20 via-background to-purple-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-4xl">
           <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
             Setting the Pace & Breaking the Barriers of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Digital Marketing with AI</span>
           </h2>
           <p className="text-xl text-muted-foreground mb-12">
             We're the architects of your digital success, fueled by AI innovations. From ultra-tailored messages to hyper-targeted campaigns, we harness cutting-edge AI solutions and proven techniques to propel your brand to the forefront of the digital landscape.
           </p>
           <Link href="/about">
             <Button variant="outline" size="lg" className="rounded-full h-14 px-8 border-white/20 hover:bg-white/10 text-lg">
               Know More About Us
             </Button>
           </Link>
        </div>
      </section>

      {/* 5. GROWTH SECTION */}
      <section className="py-24 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">
              With Us, Your Digital Growth isn't Just Rapid - <span className="text-primary">it's Unstoppable</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Your ‘growth’ forms the foundation of everything we do. We constantly innovate and push the boundaries to propel you forward, elevating your online presence with unprecedented growth opportunities.
            </p>
            <Link href="/portfolio">
              <Button size="lg" className="rounded-full h-14 px-8 bg-primary text-white hover:bg-primary/90 text-lg shadow-lg shadow-primary/25">
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
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Cruise Towards Intelligent Digital Marketing With Our <span className="text-primary">Tailored Services</span>
            </h2>
            <Link href="/services">
              <Button variant="link" className="text-primary text-lg">Explore More Services &rarr;</Button>
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
                className="group p-8 rounded-3xl border border-white/10 bg-background/50 hover:bg-white/5 transition-all duration-300 hover:border-primary/50"
              >
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Star className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>
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
      <section className="py-24 container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-center mb-16">
          Some of the Golden Lines that <br/> <span className="text-primary">Keep Us Motivated</span>
        </h2>
        
        <Carousel className="w-full max-w-4xl mx-auto">
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
                <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(s => <Star key={s} className="h-5 w-5 fill-yellow-500 text-yellow-500" />)}
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium leading-relaxed mb-8">"{testimonial.quote}"</h3>
                  <div>
                    <div className="font-bold text-lg">{testimonial.name}</div>
                    <div className="text-primary">{testimonial.role}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </section>

      {/* 8. PARTNERS ECOSYSTEM */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Together, We Propel Your Growth: Our Partners
          </h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Fast-track your growth with our strategic partners' ecosystem and unmatched experience in crafting digital dominance.
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             {["Meta", "Google Ads", "Bing", "Amazon", "HubSpot", "CleverTap"].map((partner, i) => (
               <div key={i} className="flex items-center justify-center font-bold text-xl border border-white/10 rounded-xl h-20 bg-white/5">
                 {partner}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 9. AWARDS */}
      <section className="py-20 container mx-auto px-4 md:px-8 text-center">
         <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12">
            It Takes a Lot to Achieve an Award, <br/> But We’re Always Ready for it
         </h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["T-Hub", "Good Firms", "ISO 27001", "Silicon India"].map((award, i) => (
              <div key={i} className="flex flex-col items-center gap-4 p-6 border border-white/10 rounded-2xl bg-card hover:border-primary/50 transition-colors">
                <div className="h-16 w-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                  <Star className="h-8 w-8" />
                </div>
                <span className="font-bold">{award}</span>
              </div>
            ))}
         </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_70%)]" />
        
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8 leading-tight">
            Ready to Embark on a Strategic <br />
            <span className="text-primary">Digital Marketing Voyage?</span>
          </h2>
          <Link href="/contact">
            <Button size="lg" className="rounded-full h-20 px-12 text-2xl bg-white text-black hover:bg-white/90 shadow-2xl hover:scale-105 transition-transform duration-300">
              Talk to Us <ArrowRight className="ml-3 h-8 w-8" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
