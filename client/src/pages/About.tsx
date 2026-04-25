import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Star, Users, BarChart, Target, Zap, Heart, Globe, Lightbulb, ShieldCheck, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Images
import heroBg from "@assets/generated_images/abstract_blue_vector_wave_background.png";
import visionImg from "@assets/generated_images/glowing_neural_network_for_ai_agents.png";
import missionImg from "@assets/generated_images/digital_waves_data_visualization_for_marketing.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 z-0">
           <img 
             src={heroBg} 
             alt="Digital Background" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8">
               Curious About Our Story? <br/>
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">
                 Actually, it's All About YOU!
               </span>
             </h1>
             <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-4xl mx-auto leading-relaxed">
               Every time we start writing about ourselves, we end up realizing that our essence revolves around 'YOU.' At our core lies a deep-seated inspiration drawn from your hunger for creativity, groundbreaking strategies, and unique storytelling.
             </p>
             <div className="flex justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_40px_-10px_rgba(225,48,108,0.5)] hover:scale-105 transition-all duration-300 group">
                    Start Your Journey <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "300%", label: "ROI Delivered For Clients" },
                { value: "95%", label: "Customer Satisfaction Rate" },
                { value: "2000+", label: "Successful Campaigns Conducted" },
                { value: "68+", label: "Specialists On Board" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6"
                >
                  <div className="text-4xl md:text-6xl font-heading font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">{stat.value}</div>
                  <div className="text-zinc-400 text-lg">{stat.label}</div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      <section className="py-32 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden group hover:border-brand-pink/50 transition-colors"
          >
             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
               <Target className="w-32 h-32 text-brand-rose" />
             </div>
             <h3 className="text-3xl font-heading font-bold mb-6 text-white relative z-10">Our Mission</h3>
             <p className="text-xl text-zinc-400 leading-relaxed relative z-10">
               Empower businesses with AI-driven marketing that turns data into powerful insights, fuels growth, and redefines customer engagement for the digital age.
             </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden group hover:border-brand-orange-dark/50 transition-colors"
          >
             <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
               <Lightbulb className="w-32 h-32 text-brand-red" />
             </div>
             <h3 className="text-3xl font-heading font-bold mb-6 text-white relative z-10">Our Vision</h3>
             <p className="text-xl text-zinc-400 leading-relaxed relative z-10">
               Lead the future of digital marketing with AI, making Nexus the go-to for innovation, growth, and game-changing strategies.
             </p>
          </motion.div>
        </div>
      </section>

      {/* 4. STRATEGIC APPROACH */}
      <section className="py-32 bg-zinc-950 section-black">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
            Our Strategic Approach To <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">Your Success</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-20">
            With a true understanding of what's now and what's next in digital, we follow a strategic approach to ensure your digital success.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StrategicCard 
              icon={<BarChart className="w-10 h-10 text-cyan-400" />}
              title="Analysis & Insights"
              desc="Conduct in-depth analysis to understand your audience's behavior and preferences."
            />
            <StrategicCard 
              icon={<Target className="w-10 h-10 text-brand-orange" />}
              title="Precise Targeting"
              desc="Leverage AI algorithms to target the right audience at the right time for maximum engagement."
            />
            <StrategicCard 
              icon={<Zap className="w-10 h-10 text-brand-orange-dark" />}
              title="Personalized Content"
              desc="Blend human creativity and AI to create hyper-personalized content that resonates."
            />
          </div>
        </div>
      </section>

      {/* 5. WHY US */}
      <section className="py-32 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center mb-20">
             <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">What Makes Us Your Perfect <br/> <span className="text-primary">Growth Partner?</span></h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "AI-Driven Precision", icon: <Zap /> },
                { title: "Customized Services", icon: <Users /> },
                { title: "Expert Team", icon: <Star /> },
                { title: "Proven Success", icon: <CheckCircle2 /> },
                { title: "Long-Term Partnership", icon: <Heart /> },
                { title: "Client-Focused", icon: <Users /> },
                { title: "Comprehensive Services", icon: <Globe /> },
                { title: "Quality Assurance", icon: <ShieldCheck /> }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center p-8 bg-zinc-900/50 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors text-white">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">{item.title}</h3>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 6. CLIENTS MARQUEE (Reused) */}
      <section className="py-20 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-10">
          <h2 className="text-center text-muted-foreground text-lg font-medium tracking-wide uppercase">
            Our Thriving Client Community
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
        </div>
      </section>

      {/* 7. MEET OUR TEAM */}
      <section className="py-32 bg-zinc-900 section-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">Leadership</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              The visionaries driving MAI's mission to redefine digital marketing through AI-powered innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {cSuiteTeam.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-zinc-800/50 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:border-primary/40 hover:bg-zinc-800/80 transition-all duration-300"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-5 shadow-lg"
                  style={{ background: member.gradient }}
                >
                  {member.initials}
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-zinc-400 mb-5 font-medium">{member.designation}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-blue-400 transition-colors"
                  data-testid={`link-linkedin-${i}`}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn Profile
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PRE-FOOTER */}
      <section className="py-32 container mx-auto px-4 md:px-8 text-center">
         <h2 className="text-4xl md:text-6xl font-heading font-bold mb-10 text-white">
           Ready to Embark on a Strategic <br/>
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">Digital Marketing Voyage?</span>
         </h2>
         <Link href="/contact">
           <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_40px_-10px_rgba(225,48,108,0.5)] hover:scale-105 transition-all duration-300 group">
             Let's Talk Business <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
           </Button>
         </Link>
      </section>

      <Footer />
    </div>
  );
}

function StrategicCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
      <div className="mb-6 flex justify-center">{icon}</div>
      <h3 className="text-2xl font-bold font-heading mb-4 text-white">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{desc}</p>
    </div>
  );
}

const cSuiteTeam = [
  {
    name: "Gopikrishna Malneedi",
    designation: "Chief Executive Officer",
    initials: "GM",
    gradient: "linear-gradient(135deg, #C13584, #E1306C)",
    linkedin: "https://www.linkedin.com/in/gopikrishnamalneedi/",
  },
  {
    name: "Priya Sharma",
    designation: "Chief Marketing Officer",
    initials: "PS",
    gradient: "linear-gradient(135deg, #E1306C, #FD1D1D)",
    linkedin: "#",
  },
  {
    name: "Arjun Reddy",
    designation: "Chief Technology Officer",
    initials: "AR",
    gradient: "linear-gradient(135deg, #F56040, #F77737)",
    linkedin: "#",
  },
  {
    name: "Sneha Kapoor",
    designation: "Chief Operating Officer",
    initials: "SK",
    gradient: "linear-gradient(135deg, #F77737, #FCAF45)",
    linkedin: "#",
  },
];
