import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Globe, Award, Star, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Images
import heroBg from "@assets/generated_images/digital_waves_data_visualization_for_marketing.png";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* 1. HERO & CONTACT FORM SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-zinc-950 text-white section-black">
        <div className="absolute inset-0 z-0">
           <img 
             src={heroBg} 
             alt="Digital Background" 
             className="w-full h-full object-cover opacity-20"
           />
           <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Column: Content */}
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
            >
               <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium tracking-wide uppercase mb-6">
                  Contact Us
               </div>
               <h1 className="text-5xl md:text-7xl font-heading font-bold leading-tight mb-8">
                 Get in Touch <br/>
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
                   with Us
                 </span>
               </h1>
               <p className="text-xl text-zinc-300 mb-10 leading-relaxed max-w-xl">
                 Ready to make your brand unforgettable? Our AI-powered digital marketing turns attention into action and ambition into growth. Let us craft your success strategy - today.
               </p>

               <div className="flex flex-col gap-6 mb-12">
                 <a href="mailto:growdigital@mirakitech.com" className="flex items-center gap-4 text-xl hover:text-primary transition-colors group">
                   <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                     <Mail className="w-5 h-5" />
                   </div>
                   growdigital@mirakitech.com
                 </a>
                 <a href="tel:+919154904675" className="flex items-center gap-4 text-xl hover:text-primary transition-colors group">
                   <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                     <Phone className="w-5 h-5" />
                   </div>
                   +91 9154904675
                 </a>
               </div>

               <div className="border-t border-white/10 pt-10">
                 <h3 className="text-lg font-medium text-zinc-400 mb-6 uppercase tracking-wide">Together, We Propel Your Growth: Our Partners</h3>
                 <div className="flex flex-wrap gap-6 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                   {["Meta", "Google", "Microsoft", "AWS", "HubSpot", "CleverTap"].map((partner, i) => (
                     <span key={i} className="text-lg font-bold">{partner}</span>
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
               <form className="space-y-6">
                 <div className="space-y-2">
                   <label className="text-sm font-medium text-zinc-300">Name *</label>
                   <Input placeholder="Enter your full name" className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20" />
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-zinc-300">Email *</label>
                     <Input type="email" placeholder="Enter your email" className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-zinc-300">Phone Number *</label>
                     <Input type="tel" placeholder="+91" className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-medium text-zinc-300">Select Service *</label>
                   <Select>
                     <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 rounded-xl focus:border-primary/50 focus:ring-primary/20">
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
                   <Textarea placeholder="Tell us about your project..." className="bg-white/5 border-white/10 text-white placeholder:text-zinc-500 min-h-[120px] rounded-xl focus:border-primary/50 focus:ring-primary/20 resize-none" />
                 </div>

                 <Button type="submit" size="lg" className="w-full h-14 text-lg font-medium rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25">
                   Connect Now
                 </Button>
               </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. LOCATIONS SECTION */}
      <section className="py-24 bg-zinc-900 border-y border-white/5">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">We're Here for You - <span className="text-primary">Reach Out Anytime!</span></h2>
           </div>

           <Tabs defaultValue="india" className="max-w-5xl mx-auto">
             <TabsList className="grid grid-cols-4 w-full h-auto p-1 bg-white/5 rounded-full border border-white/10 mb-12">
               <TabsTrigger value="india" className="rounded-full py-3 data-[state=active]:bg-primary data-[state=active]:text-white text-zinc-400 text-lg">India</TabsTrigger>
               <TabsTrigger value="canada" className="rounded-full py-3 data-[state=active]:bg-primary data-[state=active]:text-white text-zinc-400 text-lg">Canada</TabsTrigger>
               <TabsTrigger value="uae" className="rounded-full py-3 data-[state=active]:bg-primary data-[state=active]:text-white text-zinc-400 text-lg">UAE</TabsTrigger>
               <TabsTrigger value="usa" className="rounded-full py-3 data-[state=active]:bg-primary data-[state=active]:text-white text-zinc-400 text-lg">USA</TabsTrigger>
             </TabsList>

             <TabsContent value="india" className="mt-0">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <LocationCard 
                   city="Hyderabad"
                   address="VSSR Square 2rd Floor, Hi-Tech City, Hyderabad, Telangana 500081"
                   phone="+91-9154904675"
                 />
                 <LocationCard 
                   city="Mumbai"
                   address="Enam Sambhav, BKC, C - 20, G Block Rd, Bandra Kurla Complex, Mumbai 400051"
                   phone="+91-9154904674"
                 />
               </div>
             </TabsContent>
             <TabsContent value="canada" className="mt-0">
               <div className="flex justify-center">
                 <LocationCard 
                   city="Toronto"
                   address="123 Innovation Drive, Tech District, Toronto, ON M5V 2T6"
                   phone="+1 (555) 123-4567"
                 />
               </div>
             </TabsContent>
             <TabsContent value="uae" className="mt-0">
               <div className="flex justify-center">
                 <LocationCard 
                   city="Dubai"
                   address="Level 14, Boulevard Plaza Tower 1, Sheikh Mohammed Bin Rashid Boulevard, Dubai"
                   phone="+971 4 123 4567"
                 />
               </div>
             </TabsContent>
             <TabsContent value="usa" className="mt-0">
               <div className="flex justify-center">
                 <LocationCard 
                   city="New York"
                   address="450 Lexington Ave, New York, NY 10017, United States"
                   phone="+1 (212) 555-0199"
                 />
               </div>
             </TabsContent>
           </Tabs>
        </div>
      </section>

      {/* 3. AWARDS SECTION */}
      <section className="py-24 bg-white/5 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">
             It Takes a Lot to Achieve an Award, <br/>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">But We’re Always Ready for it</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto">
             Awards Demand Dedication, and We're Always Ready to Rise to the Occasion.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
             {["T-Hub", "Good Firms", "ISO 27001", "ISO 9001", "Silicon India", "Insights Success"].map((award, i) => (
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
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400 text-lg">
              We are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
            </p>
          </div>
          <div className="lg:w-2/3">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-b border-white/10">
                <AccordionTrigger className="text-xl font-medium hover:no-underline hover:text-primary py-6 text-white">
                  What is AI-powered digital marketing?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-lg pb-6 leading-relaxed">
                  AI-powered digital marketing uses artificial intelligence to improve and automate marketing tasks. Technologies like machine learning and data analytics help marketers understand customer behaviour, personalize content, optimize campaigns, and make better decisions.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-b border-white/10">
                <AccordionTrigger className="text-xl font-medium hover:no-underline hover:text-primary py-6 text-white">
                  How effective is AI in improving customer targeting and personalization?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-lg pb-6 leading-relaxed">
                  AI algorithms can analyze vast datasets to identify granular customer segments and predict their needs. This allows us to deliver highly personalized content and offers at scale, significantly improving engagement and conversion rates compared to traditional targeting methods.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-b border-white/10">
                <AccordionTrigger className="text-xl font-medium hover:no-underline hover:text-primary py-6 text-white">
                  What are the most common AI tools used in digital marketing?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-lg pb-6 leading-relaxed">
                  Common tools include predictive analytics platforms, chatbots for customer service, programmatic advertising software, content generation AI (like GPT models), and email marketing automation tools that optimize send times and subject lines.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-b border-white/10">
                <AccordionTrigger className="text-xl font-medium hover:no-underline hover:text-primary py-6 text-white">
                  How to measure the success of AI-powered digital marketing efforts?
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 text-lg pb-6 leading-relaxed">
                  Success is measured through key performance indicators (KPIs) such as ROI, customer acquisition cost (CAC), conversion rates, engagement metrics, and customer lifetime value (CLV). AI tools often provide real-time dashboards to track these metrics with high precision.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function LocationCard({ city, address, phone }: { city: string, address: string, phone: string }) {
  return (
    <Card className="bg-zinc-800/50 border-white/10 hover:border-primary/50 transition-colors group">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
           <MapPin className="w-6 h-6 text-primary" />
           <CardTitle className="text-2xl font-bold text-white">{city}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-zinc-400 leading-relaxed min-h-[48px]">{address}</p>
        <div className="flex items-center gap-3 text-white font-medium group-hover:text-primary transition-colors">
          <Phone className="w-4 h-4" />
          {phone}
        </div>
      </CardContent>
    </Card>
  );
}
