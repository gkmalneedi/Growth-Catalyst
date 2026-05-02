import { db } from "./db";
import { services, industries } from "@workspace/db";
import { eq } from "drizzle-orm";

const defaultFaqs = (name: string) => [
  { q: `How can ${name} help our business grow?`, a: `Our strategic approach to ${name} ensures every action is aligned with your business goals, driving measurable growth, increased efficiency, and higher ROI through data-driven execution.` },
  { q: `What makes your ${name} services unique?`, a: `We blend creative storytelling with AI-powered analytics. We don't just execute tasks — we engineer strategies that adapt to market trends and user behavior in real-time.` },
  { q: `How do you measure success in ${name}?`, a: `We use a comprehensive suite of KPIs tailored to your specific objectives, from engagement metrics and conversion rates to long-term customer lifetime value and brand sentiment analysis.` },
  { q: `How long before we see results?`, a: `Results vary by service and industry, but most clients see measurable impact within 30–60 days. We set clear milestones and share transparent reporting throughout the engagement.` },
];

const industryUpdates: Record<string, { imageKey: string; heroStats: any[]; faqs: any[]; precisionText: string }> = {
  ecommerce: {
    imageKey: "ecommerce_online_shopping_concept",
    heroStats: [
      { value: "200%+", label: "Higher customer engagement", color: "from-brand-pink to-brand-rose" },
      { value: "300%+", label: "Improved customer trust", color: "from-brand-red to-brand-orange-dark" },
      { value: "80%+", label: "Increased conversion rate", color: "from-brand-orange to-brand-yellow" },
    ],
    faqs: [
      { q: "What is AI-powered Ecommerce marketing?", a: "AI-powered Ecommerce marketing uses artificial intelligence to improve and automate marketing tasks including personalized recommendations, optimized pricing strategies, and targeted campaigns based on customer behavior." },
      { q: "How can AI improve my Ecommerce conversion rates?", a: "AI analyzes vast amounts of user data to predict buying behavior, enabling real-time personalization of content, offers, and product suggestions that significantly increase the likelihood of purchase." },
      { q: "How do you measure success of Ecommerce campaigns?", a: "We track key KPIs such as ROAS, CAC, Conversion Rate, and CLV to ensure your campaigns deliver tangible business results." },
      { q: "How quickly can we expect results?", a: "Most Ecommerce clients see measurable improvements within 30–60 days. We share transparent monthly reports with clear KPI tracking." },
    ],
    precisionText: "We utilize advanced analytics to deeply understand your online shoppers and craft personalized campaigns that drive conversions. Our data-driven approach ensures you attract and retain loyal customers who keep coming back to your store.",
  },
  healthcare: {
    imageKey: "doctor_holding_stethoscope_for_healthcare_industry",
    heroStats: [
      { value: "150%+", label: "Higher patient acquisition", color: "from-brand-pink to-brand-rose" },
      { value: "250%+", label: "Improved brand trust", color: "from-brand-red to-brand-orange-dark" },
      { value: "70%+", label: "Increased appointment bookings", color: "from-brand-orange to-brand-yellow" },
    ],
    faqs: [
      { q: "How can digital marketing help healthcare providers?", a: "Digital marketing helps healthcare providers reach more patients, build trust, and communicate their services effectively in a competitive landscape." },
      { q: "What compliance requirements do you follow for healthcare marketing?", a: "We adhere strictly to all healthcare advertising regulations and privacy requirements, ensuring your campaigns are both effective and compliant." },
      { q: "How do you measure success in healthcare marketing?", a: "We track patient acquisition costs, appointment booking rates, website traffic, and brand search volume to measure campaign effectiveness." },
      { q: "How soon will we see patient growth?", a: "Healthcare clients typically see measurable improvements in online inquiries and appointment bookings within 45–90 days of campaign launch." },
    ],
    precisionText: "We understand the unique sensitivities and regulations of healthcare marketing. Our strategies are designed to build trust, educate patients, and drive qualified appointment bookings while staying fully compliant with industry standards.",
  },
  "information-technology": {
    imageKey: "information_technology_data_center",
    heroStats: [
      { value: "180%+", label: "Higher qualified lead generation", color: "from-brand-pink to-brand-rose" },
      { value: "4x", label: "Improvement in brand visibility", color: "from-brand-red to-brand-orange-dark" },
      { value: "65%+", label: "Reduction in customer acquisition cost", color: "from-brand-orange to-brand-yellow" },
    ],
    faqs: [
      { q: "How do you market complex IT products to non-technical buyers?", a: "We simplify complex technical solutions into compelling narratives that resonate with C-suite decision-makers, focusing on business outcomes rather than features." },
      { q: "What channels work best for IT marketing?", a: "LinkedIn, SEO, technical content marketing, and targeted PPC are the most effective channels for reaching IT decision-makers and procurement teams." },
      { q: "How do you generate B2B leads in the IT space?", a: "We combine account-based marketing, technical whitepapers, webinars, and targeted outreach to generate high-quality B2B leads with genuine buying intent." },
      { q: "What ROI can IT companies expect?", a: "Our IT clients typically achieve 3–5x ROI on their marketing investment within 6 months through a combination of inbound and outbound strategies." },
    ],
    precisionText: "Technology buyers conduct extensive research before making decisions. We position your IT brand as the trusted authority through thought leadership content, targeted account-based marketing, and precision digital campaigns that speak directly to your buyer's pain points.",
  },
  education: {
    imageKey: "stack_of_books_for_education_industry",
    heroStats: [
      { value: "120%+", label: "Increase in student enrolments", color: "from-brand-pink to-brand-rose" },
      { value: "200%+", label: "Higher course enquiry rate", color: "from-brand-red to-brand-orange-dark" },
      { value: "75%+", label: "Improvement in brand recognition", color: "from-brand-orange to-brand-yellow" },
    ],
    faqs: [
      { q: "How can digital marketing help educational institutions?", a: "Digital marketing helps institutions reach prospective students and parents at every stage of their decision journey, from awareness to enrolment." },
      { q: "What works best for student recruitment marketing?", a: "A combination of search ads, social media targeting, video testimonials, and content marketing creates the trust and visibility needed to drive enrolments." },
      { q: "How do you measure education marketing success?", a: "We track enrolment rates, cost per lead, website traffic from organic search, and social media engagement to measure campaign effectiveness." },
      { q: "Do you work with online and offline educational institutions?", a: "Yes, we have experience marketing both online courses and physical institutions, tailoring strategies to their specific student acquisition models." },
    ],
    precisionText: "Prospective students and parents research extensively before choosing an institution. We build your digital presence to answer their every question, inspire confidence in your programs, and create a seamless path from discovery to enrolment.",
  },
  hospitality: {
    imageKey: "hospitality_luxury_hotel_lobby",
    heroStats: [
      { value: "160%+", label: "Increase in direct bookings", color: "from-brand-pink to-brand-rose" },
      { value: "220%+", label: "Higher guest engagement", color: "from-brand-red to-brand-orange-dark" },
      { value: "85%+", label: "Improvement in review ratings", color: "from-brand-orange to-brand-yellow" },
    ],
    faqs: [
      { q: "How can digital marketing increase hotel bookings?", a: "Through search marketing, social media, email campaigns, and review management, we help hotels reduce OTA dependency and drive more profitable direct bookings." },
      { q: "What is the importance of online reputation for hospitality?", a: "Over 80% of travelers read reviews before booking. We proactively manage your online reputation to build trust and improve your competitive position." },
      { q: "How do you attract international guests?", a: "We use geo-targeted advertising, multilingual content, and partnerships with global travel platforms to reach and attract international traveler segments." },
      { q: "How quickly can hospitality marketing show results?", a: "Hospitality clients typically see increased booking inquiries within 30 days of campaign launch, with sustained growth building over 3–6 months." },
    ],
    precisionText: "Today's travelers make decisions based on digital experiences long before they arrive at your property. We create compelling digital narratives around your unique guest experience to capture travel intent and drive direct bookings.",
  },
  fmcg: {
    imageKey: "fmcg_consumer_goods_display",
    heroStats: [
      { value: "170%+", label: "Higher brand recall", color: "from-brand-pink to-brand-rose" },
      { value: "280%+", label: "Increase in consumer engagement", color: "from-brand-red to-brand-orange-dark" },
      { value: "90%+", label: "Growth in digital reach", color: "from-brand-orange to-brand-yellow" },
    ],
    faqs: [
      { q: "How does digital marketing help FMCG brands?", a: "Digital marketing helps FMCG brands build mass awareness, influence purchase decisions at the point of consideration, and create brand loyalty through consistent engagement." },
      { q: "What channels are most effective for FMCG marketing?", a: "Social media, influencer marketing, short-form video, and retail media networks are the most impactful channels for FMCG consumer engagement." },
      { q: "How do you measure FMCG digital marketing success?", a: "We track brand search volume, share of voice, social engagement rates, and e-commerce sales lift to measure the impact of our campaigns." },
      { q: "How quickly can FMCG campaigns generate results?", a: "FMCG campaigns with high media budgets can show awareness and engagement lifts within 2–4 weeks of launch." },
    ],
    precisionText: "FMCG success requires both mass reach and precise targeting. We combine high-impact social campaigns with data-driven audience segmentation to build brand awareness at scale while driving measurable purchase intent and consumer loyalty.",
  },
  "real-estate": {
    imageKey: "modern_architectural_house_for_real_estate",
    heroStats: [
      { value: "190%+", label: "More qualified property leads", color: "from-brand-pink to-brand-rose" },
      { value: "3x", label: "Higher site visit bookings", color: "from-brand-red to-brand-orange-dark" },
      { value: "55%+", label: "Reduction in lead cost", color: "from-brand-orange to-brand-yellow" },
    ],
    faqs: [
      { q: "How does digital marketing help real estate businesses?", a: "Digital marketing drives qualified buyer and investor leads, builds developer brand credibility, and generates property inquiries at a significantly lower cost than traditional channels." },
      { q: "What digital channels work best for real estate?", a: "Search ads for high-intent buyers, social media for brand awareness, WhatsApp for nurturing, and virtual tours for showcasing properties all work very effectively in real estate." },
      { q: "How do you target property buyers digitally?", a: "We use a combination of demographic targeting, income-based audiences, location targeting, and remarketing to reach genuine property buyers and investors." },
      { q: "What kind of results can real estate developers expect?", a: "Our real estate clients typically see a 50–70% reduction in cost per qualified lead and a 2–3x increase in site visit bookings within the first 90 days." },
    ],
    precisionText: "Property buying is one of the most considered purchases a customer makes. We build comprehensive digital funnels that educate, inspire, and nurture property buyers from initial awareness to booking a site visit.",
  },
  retail: {
    imageKey: "retail_shopping_store_interior",
    heroStats: [
      { value: "145%+", label: "Higher footfall and online visits", color: "from-brand-pink to-brand-rose" },
      { value: "230%+", label: "Increase in repeat customers", color: "from-brand-red to-brand-orange-dark" },
      { value: "72%+", label: "Improvement in conversion rate", color: "from-brand-orange to-brand-yellow" },
    ],
    faqs: [
      { q: "How can digital marketing help retail businesses grow?", a: "Digital marketing drives both online and in-store traffic, builds brand loyalty, and enables retailers to compete effectively with e-commerce giants." },
      { q: "What is the best strategy for omnichannel retail marketing?", a: "We integrate your online and offline channels — aligning your social media, paid ads, email, and in-store promotions — to create a seamless shopping experience." },
      { q: "How do you measure retail marketing effectiveness?", a: "We measure online sales, footfall attribution, customer acquisition cost, repeat purchase rate, and lifetime value to gauge campaign success." },
      { q: "How quickly will retail marketing campaigns show results?", a: "Well-executed retail campaigns see measurable traffic and sales improvements within 30–45 days, with compounding growth over subsequent months." },
    ],
    precisionText: "Modern retail success requires both strong brand presence and precision targeting. We connect your brand with shoppers at every touchpoint — from discovery on social media to the moment they walk through your doors or check out online.",
  },
  fintech: {
    imageKey: "fintech_industry_concept",
    heroStats: [
      { value: "210%+", label: "Higher user acquisition", color: "from-brand-pink to-brand-rose" },
      { value: "350%+", label: "Improvement in app downloads", color: "from-brand-red to-brand-orange-dark" },
      { value: "60%+", label: "Reduction in customer acquisition cost", color: "from-brand-orange to-brand-yellow" },
    ],
    faqs: [
      { q: "How do you market fintech products while building trust?", a: "We lead with education, transparency, and social proof. Our content strategy positions your fintech brand as trustworthy and innovative while addressing consumer concerns about financial security." },
      { q: "What channels work best for fintech user acquisition?", a: "Performance marketing on Google and Meta, app store optimization, influencer partnerships with financial content creators, and targeted content marketing deliver the best results for fintech." },
      { q: "How do you navigate compliance in fintech advertising?", a: "We work within all applicable financial advertising regulations while ensuring your messaging remains compelling, clear, and conversion-focused." },
      { q: "How quickly can fintech marketing campaigns show results?", a: "Fintech campaigns typically show initial user acquisition improvements within 30–45 days, with compounding growth in app downloads and account openings over 3–6 months." },
    ],
    precisionText: "Financial products require a careful balance of trust-building and performance marketing. We craft campaigns that clearly communicate your value proposition, establish credibility through proof points, and drive measurable user acquisition at scale.",
  },
  agriculture: {
    imageKey: "agriculture_modern_farmland",
    heroStats: [
      { value: "130%+", label: "Higher farmer and buyer reach", color: "from-brand-pink to-brand-rose" },
      { value: "190%+", label: "Increase in B2B inquiries", color: "from-brand-red to-brand-orange-dark" },
      { value: "65%+", label: "Improvement in brand visibility", color: "from-brand-orange to-brand-yellow" },
    ],
    faqs: [
      { q: "How can digital marketing help agriculture businesses?", a: "Digital marketing helps agri-businesses reach new buyers, build brand credibility in local and global markets, and educate customers about their products." },
      { q: "What digital channels work for agriculture marketing?", a: "WhatsApp marketing, regional language social media content, Google Search for B2B buyers, and video testimonials from farmers are highly effective in the agriculture sector." },
      { q: "How do you reach rural audiences digitally?", a: "We use vernacular content, regional targeting, YouTube and Meta campaigns optimized for lower-bandwidth connections, and WhatsApp marketing to effectively reach rural audiences." },
      { q: "How long does agriculture digital marketing take to show results?", a: "Agriculture clients typically see growth in digital inquiries and brand awareness within 60–90 days, with stronger results building over the first two seasons." },
    ],
    precisionText: "Agriculture marketing requires deep understanding of both urban B2B buyers and rural end-consumers. We bridge this gap with multilingual, multi-channel strategies that build credibility, drive inquiries, and establish your agri-brand as the preferred choice.",
  },
};

async function migrateNewFields() {
  console.log("Migrating new fields...");

  // Update services with default FAQs
  const allServices = await db.select().from(services);
  for (const s of allServices) {
    const currentFaqs = s.faqs as any[];
    if (!currentFaqs || currentFaqs.length === 0) {
      await db.update(services)
        .set({ faqs: defaultFaqs(s.title) } as any)
        .where(eq(services.id, s.id));
      console.log(`Updated FAQs for service: ${s.title}`);
    }
  }

  // Update industries with imageKey, heroStats, faqs, precisionText
  const allIndustries = await db.select().from(industries);
  for (const ind of allIndustries) {
    const update = industryUpdates[ind.slug];
    if (update) {
      await db.update(industries)
        .set({
          imageKey: update.imageKey,
          heroStats: update.heroStats,
          faqs: update.faqs,
          precisionText: update.precisionText,
        } as any)
        .where(eq(industries.id, ind.id));
      console.log(`Updated industry: ${ind.title}`);
    }
  }

  console.log("Migration complete!");
  process.exit(0);
}

migrateNewFields().catch(console.error);
