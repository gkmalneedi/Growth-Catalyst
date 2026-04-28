import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Award, Loader2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

import heroBg from "@assets/generated_images/digital_waves_data_visualization_for_marketing.png";

const DEFAULT_INFO = {
  heroLabel: "Contact Us",
  heroTitle: "Get in Touch",
  heroTitleHighlight: "with Us",
  heroDescription: "Ready to make your brand unforgettable? Our AI-powered digital marketing turns attention into action and ambition into growth. Let us craft your success strategy — today.",
  email: "info@marketingaigency.in",
  phone: "+91 6309966282",
  address: "Flat No. 102, Life Style Building, Plot No 1038 & 1039, 3monkeys circle, Pragathi Nagar, Hyderabad, Telangana 500090",
  bgImage: "",
};

const DEFAULT_PARTNERS = {
  heading: "We and our partners together propel your growth",
  partners: ["Meta", "Google", "Microsoft", "AWS", "HubSpot", "CleverTap"],
};

const DEFAULT_OFFICE = {
  city: "Hyderabad",
  address: "Flat No. 102, Life Style Building, Plot No 1038 & 1039, 3monkeys circle, Pragathi Nagar, Hyderabad, Telangana 500090",
  email: "info@marketingaigency.in",
  phone: "+91 6309966282",
  mapsUrl: "https://www.google.com/maps?q=Life+Style+Building,+Plot+No+1038,+3monkeys+circle,+Pragathi+Nagar,+Hyderabad,+Telangana+500090&output=embed",
};

const DEFAULT_AWARDS = {
  title: "It Takes a Lot to Achieve an Award, But We're Always Ready for it",
  subtitle: "Awards Demand Dedication, and We're Always Ready to Rise to the Occasion.",
  awards: ["T-Hub", "Good Firms", "ISO 27001", "ISO 9001", "Silicon India", "Insights Success"],
};

const DEFAULT_FAQ = {
  title: "Frequently Asked Questions",
  description: "We are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.",
  items: [
    { q: "What is AI-powered digital marketing?", a: "AI-powered digital marketing uses artificial intelligence to improve and automate marketing tasks. Technologies like machine learning and data analytics help marketers understand customer behaviour, personalize content, optimize campaigns, and make better decisions." },
    { q: "How effective is AI in improving customer targeting and personalization?", a: "AI algorithms can analyze vast datasets to identify granular customer segments and predict their needs. This allows us to deliver highly personalized content and offers at scale, significantly improving engagement and conversion rates compared to traditional targeting methods." },
    { q: "What are the most common AI tools used in digital marketing?", a: "Common tools include predictive analytics platforms, chatbots for customer service, programmatic advertising software, content generation AI (like GPT models), and email marketing automation tools that optimize send times and subject lines." },
    { q: "How to measure the success of AI-powered digital marketing efforts?", a: "Success is measured through key performance indicators (KPIs) such as ROI, customer acquisition cost (CAC), conversion rates, engagement metrics, and customer lifetime value (CLV). AI tools often provide real-time dashboards to track these metrics with high precision." },
  ],
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const { data: settings = {} } = useQuery<Record<string, any>>({
    queryKey: ["/api/site-settings"],
    staleTime: 5 * 60 * 1000,
  });

  const info = { ...DEFAULT_INFO, ...(settings.contact_info || {}) };
  const partnersData = { ...DEFAULT_PARTNERS, ...(settings.contact_partners || {}) };
  const office = { ...DEFAULT_OFFICE, ...(settings.contact_office || {}) };
  const awardsData = { ...DEFAULT_AWARDS, ...(settings.contact_awards || {}) };
  const faqData = { ...DEFAULT_FAQ, ...(settings.contact_faq || {}) };

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    },
    onError: () => {
      setSubmitStatus("error");
    },
  });

  const bgSrc = info.bgImage || heroBg;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* 1. HERO & CONTACT FORM */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 z-0">
          <img src={bgSrc} alt="Digital Background" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium tracking-wide uppercase mb-6">
                {info.heroLabel}
              </div>
              <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8">
                {info.heroTitle} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">{info.heroTitleHighlight}</span>
              </h1>
              <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-xl">
                {info.heroDescription}
              </p>

              <div className="flex flex-col gap-6 mb-12">
                <a href={`mailto:${info.email}`} className="flex items-center gap-4 text-xl hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  {info.email}
                </a>
                <a href={`tel:${info.phone?.replace(/\s/g, "")}`} className="flex items-center gap-4 text-xl hover:text-primary transition-colors group">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  {info.phone}
                </a>
                <div className="flex items-start gap-4 text-xl text-zinc-300">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="leading-relaxed">{info.address}</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-10">
                <h3 className="text-lg font-medium text-zinc-400 mb-6 uppercase tracking-wide">{partnersData.heading}</h3>
                <div className="flex flex-wrap gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                  {(partnersData.partners || []).map((partner: any, i: number) => (
                    typeof partner === "object" && partner.imageUrl
                      ? <img key={i} src={partner.imageUrl} alt={partner.name} className="h-8 max-w-24 object-contain brightness-0 invert opacity-60 hover:opacity-100 transition-opacity" />
                      : <span key={i} className="text-lg font-bold">{typeof partner === "string" ? partner : partner.name}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl"
            >
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setSubmitStatus("idle"); contactMutation.mutate(formData); }}>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Name *</label>
                  <Input placeholder="Enter your full name" value={formData.name} onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))} className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20" required data-testid="input-name" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Email *</label>
                    <Input type="email" placeholder="Enter your email" value={formData.email} onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))} className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20" required data-testid="input-email" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Phone Number *</label>
                    <Input type="tel" placeholder="+91" value={formData.phone} onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))} className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20" required data-testid="input-phone" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Select Service *</label>
                  <Select value={formData.service} onValueChange={(val) => setFormData(p => ({ ...p, service: val }))}>
                    <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20" data-testid="select-service">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smo">Social Media Optimization</SelectItem>
                      <SelectItem value="seo">SEO & SEM</SelectItem>
                      <SelectItem value="content">Content Marketing</SelectItem>
                      <SelectItem value="branding">Brand Management</SelectItem>
                      <SelectItem value="automation">Marketing Automation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">Your Message</label>
                  <Textarea placeholder="Tell us about your project..." value={formData.message} onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))} className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 min-h-[120px] rounded-xl focus:border-primary/50 focus:ring-primary/20 resize-none" data-testid="input-message" />
                </div>

                <Button type="submit" size="lg" className="w-full h-14 text-lg font-medium rounded-xl bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow hover:opacity-90 shadow-lg shadow-brand-pink/25" disabled={contactMutation.isPending} data-testid="button-submit-contact">
                  {contactMutation.isPending ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                  {contactMutation.isPending ? "Submitting..." : "Connect Now"}
                </Button>
                {submitStatus === "success" && (
                  <p className="text-green-400 text-center text-sm" data-testid="text-contact-success">Thank you! We'll be in touch soon.</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-400 text-center text-sm">Something went wrong. Please try again.</p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. INDIA OFFICE + MAP */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-red to-brand-yellow">India Office</span>
            </h2>
            <p className="text-zinc-400 text-lg">Come visit us or reach out — we're always happy to connect.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            {/* Office details card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 border border-white/10 rounded-3xl p-8 space-y-6"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-7 h-7 text-primary flex-shrink-0" />
                <h3 className="text-2xl font-bold text-white">{office.city}</h3>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed">{office.address}</p>
              <div className="space-y-3 pt-2 border-t border-white/10">
                <a href={`mailto:${office.email}`} className="flex items-center gap-3 text-zinc-300 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  {office.email}
                </a>
                <a href={`tel:${office.phone?.replace(/\s/g, "")}`} className="flex items-center gap-3 text-zinc-300 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  {office.phone}
                </a>
              </div>
            </motion.div>

            {/* Google Maps embed */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden border border-white/10 shadow-xl"
              style={{ height: 340 }}
            >
              <iframe
                title="MAI Office Location"
                src={office.mapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. AWARDS SECTION */}
      <section className="py-24 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
            {awardsData.title.includes("But We're Always") ? (
              <>
                {awardsData.title.split("But We're Always")[0]}
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-rose via-brand-orange to-brand-yellow">
                  But We're Always{awardsData.title.split("But We're Always")[1]}
                </span>
              </>
            ) : awardsData.title}
          </h2>
          <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto">{awardsData.subtitle}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {(awardsData.awards || []).map((award: string, i: number) => (
              <div key={i} className="flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-white/5 hover:bg-white/10 hover:scale-105 transition-all duration-300 group">
                <div className="w-16 h-16 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 mb-4 group-hover:bg-yellow-500/20 transition-colors">
                  <Award className="w-8 h-8" />
                </div>
                <span className="font-bold text-white/90">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-24 bg-zinc-950 section-black">
        <div className="container mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              {faqData.title}
            </h2>
            <p className="text-zinc-400 text-lg">{faqData.description}</p>
          </div>
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              {(faqData.items || []).map((item: { q: string; a: string }, i: number) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-white/10">
                  <AccordionTrigger className="text-xl font-medium hover:no-underline hover:text-primary py-6 text-white">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-400 text-lg pb-6 leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
