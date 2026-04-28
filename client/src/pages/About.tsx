import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Star, Users, BarChart, Target, Zap, Heart, Globe, Lightbulb, ShieldCheck, Linkedin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import heroBg from "@assets/generated_images/abstract_blue_vector_wave_background.png";

const DEFAULT_HERO = {
  title: "Curious About Our Story?",
  titleHighlight: "Actually, it's All About YOU!",
  description: "Every time we start writing about ourselves, we end up realizing that our essence revolves around 'YOU.' At our core lies a deep-seated inspiration drawn from your hunger for creativity, groundbreaking strategies, and unique storytelling.",
  ctaText: "Start Your Journey",
  ctaHref: "/contact",
  bgImage: "",
};

const DEFAULT_STATS = [
  { value: "300%", label: "ROI Delivered For Clients" },
  { value: "95%", label: "Customer Satisfaction Rate" },
  { value: "2000+", label: "Successful Campaigns Conducted" },
  { value: "68+", label: "Specialists On Board" },
];

const DEFAULT_MISSION = {
  title: "Our Mission",
  text: "Empower businesses with AI-driven marketing that turns data into powerful insights, fuels growth, and redefines customer engagement for the digital age.",
};

const DEFAULT_VISION = {
  title: "Our Vision",
  text: "Lead the future of digital marketing with AI, making Nexus the go-to for innovation, growth, and game-changing strategies.",
};

const DEFAULT_STRATEGIC = {
  title: "Our Strategic Approach To Your Success",
  subtitle: "With a true understanding of what's now and what's next in digital, we follow a strategic approach to ensure your digital success.",
  items: [
    { icon: "bar-chart", title: "Analysis & Insights", desc: "Conduct in-depth analysis to understand your audience's behavior and preferences." },
    { icon: "target", title: "Precise Targeting", desc: "Leverage AI algorithms to target the right audience at the right time for maximum engagement." },
    { icon: "zap", title: "Personalized Content", desc: "Blend human creativity and AI to create hyper-personalized content that resonates." },
  ],
};

const DEFAULT_WHYUS = {
  title: "What Makes Us Your Perfect Growth Partner?",
  items: [
    { title: "AI-Driven Precision" },
    { title: "Customized Services" },
    { title: "Expert Team" },
    { title: "Proven Success" },
    { title: "Long-Term Partnership" },
    { title: "Client-Focused" },
    { title: "Comprehensive Services" },
    { title: "Quality Assurance" },
  ],
};

const DEFAULT_CLIENTS = {
  title: "Our Thriving Client Community",
  clients: ["Govt of India", "IDBI Bank", "Philips", "EuroArt", "TechMahindra", "Accenture", "Google", "Amazon", "Microsoft", "Netflix", "Spotify", "Uber", "Airbnb", "Tesla", "Samsung", "Sony", "LG", "HP", "Dell", "Intel"],
};

const DEFAULT_TEAM = {
  title: "Meet Our Leadership",
  subtitle: "The visionaries driving MAI's mission to redefine digital marketing through AI-powered innovation.",
  members: [
    { name: "Gopikrishna Malneedi", designation: "Chief Executive Officer", initials: "GM", gradient: "linear-gradient(135deg, #C13584, #E1306C)", linkedin: "https://www.linkedin.com/in/gopikrishnamalneedi/", photo: "" },
    { name: "Priya Sharma", designation: "Chief Marketing Officer", initials: "PS", gradient: "linear-gradient(135deg, #E1306C, #FD1D1D)", linkedin: "#", photo: "" },
    { name: "Arjun Reddy", designation: "Chief Technology Officer", initials: "AR", gradient: "linear-gradient(135deg, #F56040, #F77737)", linkedin: "#", photo: "" },
    { name: "Sneha Kapoor", designation: "Chief Operating Officer", initials: "SK", gradient: "linear-gradient(135deg, #F77737, #FCAF45)", linkedin: "#", photo: "" },
  ],
};

const DEFAULT_PREFOOTER = {
  title: "Ready to Embark on a Strategic",
  titleHighlight: "Digital Marketing Voyage?",
  ctaText: "Let's Talk Business",
  ctaHref: "/contact",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  "bar-chart": <BarChart className="w-10 h-10 text-cyan-400" />,
  "target": <Target className="w-10 h-10 text-brand-orange" />,
  "zap": <Zap className="w-10 h-10 text-brand-orange-dark" />,
  "users": <Users className="w-10 h-10 text-violet-400" />,
  "heart": <Heart className="w-10 h-10 text-pink-400" />,
  "globe": <Globe className="w-10 h-10 text-sky-400" />,
};

function getIcon(iconName: string, fallback: React.ReactNode) {
  return ICON_MAP[iconName] || fallback;
}

export default function About() {
  const { data: settings = {} } = useQuery<Record<string, any>>({
    queryKey: ["/api/site-settings"],
    staleTime: 5 * 60 * 1000,
  });

  const hero = { ...DEFAULT_HERO, ...(settings.about_hero || {}) };
  const stats: { value: string; label: string }[] = Array.isArray(settings.about_stats) ? settings.about_stats : DEFAULT_STATS;
  const mission = { ...DEFAULT_MISSION, ...(settings.about_mission || {}) };
  const vision = { ...DEFAULT_VISION, ...(settings.about_vision || {}) };
  const strategic = { ...DEFAULT_STRATEGIC, ...(settings.about_strategic || {}) };
  const whyus = { ...DEFAULT_WHYUS, ...(settings.about_whyus || {}) };
  const clientsData = { ...DEFAULT_CLIENTS, ...(settings.about_clients || {}) };
  const team = { ...DEFAULT_TEAM, ...(settings.about_team || {}) };
  const prefooter = { ...DEFAULT_PREFOOTER, ...(settings.about_prefooter || {}) };

  const bgSrc = hero.bgImage || heroBg;
  const clientsList: string[] = Array.isArray(clientsData.clients) ? clientsData.clients : DEFAULT_CLIENTS.clients;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 z-0">
          <img
            src={bgSrc}
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
              {hero.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">
                {hero.titleHighlight}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 mb-10 max-w-4xl mx-auto leading-relaxed">
              {hero.description}
            </p>
            <div className="flex justify-center gap-4">
              <Link href={hero.ctaHref || "/contact"}>
                <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_40px_-10px_rgba(225,48,108,0.5)] hover:scale-105 transition-all duration-300 group">
                  {hero.ctaText} <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
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
            {stats.map((stat, i) => (
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
            <h3 className="text-3xl font-heading font-bold mb-6 text-white relative z-10">{mission.title}</h3>
            <p className="text-xl text-zinc-400 leading-relaxed relative z-10">{mission.text}</p>
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
            <h3 className="text-3xl font-heading font-bold mb-6 text-white relative z-10">{vision.title}</h3>
            <p className="text-xl text-zinc-400 leading-relaxed relative z-10">{vision.text}</p>
          </motion.div>
        </div>
      </section>

      {/* 4. STRATEGIC APPROACH */}
      <section className="py-32 bg-zinc-950 section-black">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white">
            {strategic.title.includes("Your Success") ? (
              <>
                {strategic.title.split("Your Success")[0]}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">Your Success</span>
                {strategic.title.split("Your Success")[1]}
              </>
            ) : strategic.title}
          </h2>
          <p className="text-xl text-zinc-400 mb-20">{strategic.subtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(strategic.items || []).map((item: { icon: string; title: string; desc: string }, i: number) => {
              const icons = [
                <BarChart className="w-10 h-10 text-cyan-400" />,
                <Target className="w-10 h-10 text-brand-orange" />,
                <Zap className="w-10 h-10 text-brand-orange-dark" />,
              ];
              return (
                <StrategicCard
                  key={i}
                  icon={getIcon(item.icon, icons[i] || icons[0])}
                  title={item.title}
                  desc={item.desc}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. WHY US */}
      <section className="py-32 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              {whyus.title.includes("Growth Partner") ? (
                <>
                  {whyus.title.split("Growth Partner")[0]}
                  <br /><span className="text-primary">Growth Partner{whyus.title.split("Growth Partner")[1]}</span>
                </>
              ) : whyus.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(whyus.items || []).map((item: { title: string }, i: number) => {
              const icons = [<Zap />, <Users />, <Star />, <CheckCircle2 />, <Heart />, <Users />, <Globe />, <ShieldCheck />];
              return (
                <div key={i} className="flex flex-col items-center p-8 bg-zinc-900/50 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors group">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:text-primary transition-colors text-white">
                    {icons[i % icons.length]}
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white">{item.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CLIENTS MARQUEE */}
      <section className="py-20 bg-zinc-950 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 mb-10">
          <h2 className="text-center text-muted-foreground text-lg font-medium tracking-wide uppercase">
            {clientsData.title}
          </h2>
        </div>

        <div className="relative flex overflow-x-hidden group">
          <div className="flex animate-marquee whitespace-nowrap gap-20 items-center">
            {clientsList.map((logo, i) => (
              <div key={i} className="text-xl md:text-3xl font-bold font-heading text-white/50 hover:text-white transition-colors duration-300 mx-4 cursor-default select-none">
                {logo}
              </div>
            ))}
            {clientsList.map((logo, i) => (
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
              {team.title.includes("Leadership") ? (
                <>
                  {team.title.split("Leadership")[0]}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">Leadership</span>
                  {team.title.split("Leadership")[1]}
                </>
              ) : team.title}
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">{team.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {(team.members || []).map((member: { name: string; designation: string; initials: string; gradient: string; linkedin: string; photo: string }, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-zinc-800/50 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:border-primary/40 hover:bg-zinc-800/80 transition-all duration-300"
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mb-5 shadow-lg border-2 border-white/10"
                  />
                ) : (
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-5 shadow-lg"
                    style={{ background: member.gradient }}
                  >
                    {member.initials}
                  </div>
                )}
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
          {prefooter.title} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">{prefooter.titleHighlight}</span>
        </h2>
        <Link href={prefooter.ctaHref || "/contact"}>
          <Button size="lg" className="rounded-full h-16 px-10 text-xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 text-white border-0 shadow-[0_0_40px_-10px_rgba(225,48,108,0.5)] hover:scale-105 transition-all duration-300 group">
            {prefooter.ctaText} <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
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
