export interface PortfolioWork {
  slug: string;
  client: string;
  clientColor: string;
  category: string;
  industry: string;
  headline: string;
  tagline: string;
  heroImage: string;
  coverImage: string;
  overview: string;
  challenge: string;
  approach: string[];
  results: { value: string; label: string }[];
  services: string[];
  duration: string;
}

export const portfolioWorks: PortfolioWork[] = [
  {
    slug: "fabpik",
    client: "FabPik",
    clientColor: "text-pink-500",
    category: "Social Media Marketing",
    industry: "E-commerce",
    headline: "50% Jump in Brand Visibility for a Kids' E-commerce Brand with AI-Powered SMO",
    tagline: "From invisible to unmissable — how we made FabPik the go-to kids' fashion destination.",
    heroImage: "happy_child_shopping_for_ecommerce_success",
    coverImage: "happy_child_shopping_for_ecommerce_success",
    overview: "FabPik is a fast-growing kids' fashion e-commerce brand that was struggling to differentiate itself in a crowded online marketplace. Despite having an excellent product catalogue, their social media presence was virtually non-existent and their organic reach had plateaued for over 6 months.",
    challenge: "FabPik needed to rapidly build brand awareness among millennial parents, drive qualified traffic to their website, and increase conversion rates — all while working with a limited marketing budget and tight timelines before the peak festive season.",
    approach: [
      "Conducted a full social media audit and competitor benchmarking across Instagram, Facebook, and Pinterest.",
      "Rebuilt their content strategy around 'joyful parenting' micro-moments — short-form videos, reels, and carousels that told stories rather than just selling products.",
      "Launched targeted paid social campaigns using AI-based lookalike audiences from their best customers.",
      "Implemented influencer micro-campaigns with 15 parenting bloggers (100K–500K followers) to drive authentic reach.",
      "Integrated social proof — real parent testimonials and UGC — directly into ad creatives.",
    ],
    results: [
      { value: "50%", label: "Increase in brand visibility" },
      { value: "3.2x", label: "Return on ad spend" },
      { value: "200%", label: "Growth in Instagram followers" },
      { value: "40%", label: "Reduction in cost per acquisition" },
    ],
    services: ["Social Media Marketing", "Paid Social Advertising", "Influencer Marketing", "Content Strategy"],
    duration: "4 months",
  },
  {
    slug: "monarch",
    client: "Monarch",
    clientColor: "text-amber-500",
    category: "SEO & Content Marketing",
    industry: "B2B / Office Furniture",
    headline: "From Hidden to Highlighted — Global Office Furniture Brand's Digital Transformation with Nexus",
    tagline: "How a 30-year-old furniture brand became the top-ranked choice for global corporate buyers.",
    heroImage: "modern_office_space_for_furniture_brand",
    coverImage: "modern_office_space_for_furniture_brand",
    overview: "Monarch is a premium office furniture manufacturer with 30 years of expertise and a global client base spanning 20+ countries. Despite their rich heritage, their digital presence was outdated and they were losing potential international clients to younger, digitally-savvy competitors.",
    challenge: "Monarch needed a complete digital overhaul — from SEO and content to their B2B lead generation funnel. The challenge was communicating premium quality and global credibility through digital channels, while competing against well-funded rivals with bigger marketing budgets.",
    approach: [
      "Performed a comprehensive technical SEO audit and rebuilt their site architecture for global search visibility.",
      "Created an industry-authority content strategy with long-form case studies, whitepapers, and buying guides targeting procurement managers and interior architects.",
      "Launched targeted LinkedIn campaigns reaching C-suite decision-makers in target markets (USA, UAE, Singapore).",
      "Developed a product story video series showcasing craftsmanship and workspace transformation case studies.",
      "Implemented a CRM-integrated lead nurturing sequence converting website visitors into qualified sales calls.",
    ],
    results: [
      { value: "180%", label: "Growth in organic search traffic" },
      { value: "4x", label: "Increase in qualified B2B leads" },
      { value: "#1", label: "Google rankings for key product terms" },
      { value: "65%", label: "Improvement in lead-to-close rate" },
    ],
    services: ["SEO & SEM", "Content Marketing", "LinkedIn Ads", "Email Marketing", "Video Production"],
    duration: "6 months",
  },
  {
    slug: "centro",
    client: "Centro",
    clientColor: "text-orange-500",
    category: "Performance Marketing",
    industry: "Retail / Footwear",
    headline: "Leading Footwear Brand CENTRO Achieves Record Sales Growth with Nexus's Performance Marketing",
    tagline: "How precision-targeted campaigns turned browsing into buying for India's leading footwear retailer.",
    heroImage: "futuristic_athletic_shoe_for_footwear_brand",
    coverImage: "futuristic_athletic_shoe_for_footwear_brand",
    overview: "Centro is one of India's largest multi-brand footwear retailers with 400+ stores and a growing e-commerce presence. They approached Nexus to help bridge the gap between their offline brand strength and underperforming digital channels ahead of the festive season.",
    challenge: "With an aggressive sales target and a saturated footwear market, Centro needed a data-driven performance marketing strategy that could drive measurable online sales, reduce cart abandonment, and build brand preference among 18–35 year olds across metros and Tier 1 cities.",
    approach: [
      "Developed a full-funnel performance marketing strategy across Google Shopping, Meta, and influencer channels.",
      "Implemented dynamic product ads with AI-optimized bidding strategies that updated bids in real-time based on inventory and demand signals.",
      "Created a 3-stage retargeting framework targeting cart abandoners, wish-listers, and past purchasers with personalized offers.",
      "Collaborated with 25 fashion and lifestyle influencers to produce campaign-specific content aligned with Centro's seasonal collections.",
      "Built a WhatsApp re-engagement campaign for lapsed customers, driving a 22% repeat purchase rate.",
    ],
    results: [
      { value: "2.8x", label: "Return on ad spend (ROAS)" },
      { value: "45%", label: "Increase in online revenue" },
      { value: "60%", label: "Reduction in cart abandonment" },
      { value: "5x", label: "Growth in new customer acquisition" },
    ],
    services: ["Performance Marketing", "Google Shopping", "Social Media Ads", "WhatsApp Marketing", "Influencer Marketing"],
    duration: "3 months",
  },
  {
    slug: "eduvance",
    client: "Eduvance",
    clientColor: "text-blue-400",
    category: "Content & Social Media",
    industry: "Education",
    headline: "Revitalized Premier Research Institution's Digital Presence with Strategic SMO and Content Marketing",
    tagline: "How we helped a leading education brand drive 3x enrolment inquiries through digital storytelling.",
    heroImage: "stack_of_books_for_education_industry",
    coverImage: "stack_of_books_for_education_industry",
    overview: "Eduvance is a premier research-led educational institution offering post-graduate and executive education programs. Despite their world-class faculty and alumni network, their digital presence was failing to attract the calibre of applicants they deserved.",
    challenge: "The institution needed to modernize its digital communication strategy, attract high-quality applicants from India and abroad, and build thought leadership in their key research areas — all while maintaining the gravitas expected of a premier academic institution.",
    approach: [
      "Conducted an in-depth content audit and developed a 'thought leadership first' content strategy featuring faculty insights, research summaries, and alumni success stories.",
      "Rebuilt their LinkedIn presence with a structured editorial calendar, growing their following from 8K to 65K in 6 months.",
      "Created targeted awareness campaigns on Meta and Google targeting working professionals and fresh graduates in key metro cities.",
      "Launched a video testimonial series featuring alumni from leading global companies sharing how the program transformed their careers.",
      "Developed SEO-optimized landing pages for each program, reducing cost-per-inquiry by 48%.",
    ],
    results: [
      { value: "3x", label: "Growth in enrolment inquiries" },
      { value: "65K", label: "LinkedIn followers gained" },
      { value: "48%", label: "Reduction in cost per lead" },
      { value: "91%", label: "Increase in website engagement" },
    ],
    services: ["Content Marketing", "Social Media Marketing", "SEO & SEM", "Video Production", "Performance Marketing"],
    duration: "6 months",
  },
  {
    slug: "healthbridge",
    client: "HealthBridge",
    clientColor: "text-green-400",
    category: "Marketing Automation & SEO",
    industry: "Healthcare",
    headline: "HealthBridge Scaled Patient Acquisition by 120% with AI-Driven Marketing Automation",
    tagline: "Building trust and driving appointments for a modern multi-speciality healthcare network.",
    heroImage: "doctor_holding_stethoscope_for_healthcare_industry",
    coverImage: "doctor_holding_stethoscope_for_healthcare_industry",
    overview: "HealthBridge is a rapidly expanding multi-speciality healthcare network with 12 hospitals across South India. They needed a scalable digital marketing infrastructure to drive patient acquisition, build community trust, and automate appointment booking across their network.",
    challenge: "Healthcare marketing demands an extremely sensitive, trust-first approach. HealthBridge needed to drive patient footfall and digital appointment bookings while complying with healthcare advertising regulations, maintaining patient privacy, and differentiating against established hospital brands.",
    approach: [
      "Built a HIPAA-compliant marketing automation system integrating their CRM, website, WhatsApp, and email channels.",
      "Developed hyper-local SEO strategies for each hospital location, targeting high-intent search queries like 'best cardiologist near me'.",
      "Created health awareness content campaigns aligned with national health days (Heart Day, Diabetes Day, etc.) generating significant organic reach.",
      "Launched doctor-led video content on YouTube and Instagram featuring specialists sharing preventive health tips.",
      "Implemented a WhatsApp-based appointment reminder and re-engagement system reducing no-show rates by 35%.",
    ],
    results: [
      { value: "120%", label: "Increase in patient acquisition" },
      { value: "4.5x", label: "Growth in digital appointments" },
      { value: "35%", label: "Reduction in appointment no-shows" },
      { value: "220%", label: "Growth in organic search traffic" },
    ],
    services: ["Marketing Automation", "SEO & SEM", "WhatsApp Marketing", "Content Marketing", "Video Production"],
    duration: "8 months",
  },
  {
    slug: "technova",
    client: "TechNova",
    clientColor: "text-cyan-400",
    category: "Brand Management & UI/UX",
    industry: "Information Technology",
    headline: "Complete Brand Overhaul and Digital Transformation for a Leading IT Solutions Company",
    tagline: "How TechNova went from being a best-kept secret to an industry-recognized technology leader.",
    heroImage: "information_technology_data_center",
    coverImage: "information_technology_data_center",
    overview: "TechNova is a mid-size IT solutions company with deep technical expertise in cloud infrastructure, cybersecurity, and enterprise software. Despite delivering exceptional results for their clients, they struggled with a weak brand identity and a digital presence that failed to communicate their true value.",
    challenge: "TechNova needed a complete brand transformation — a new identity, updated messaging, a redesigned website with improved UX, and a demand generation strategy that could compete with much larger players in the enterprise IT space.",
    approach: [
      "Conducted extensive stakeholder interviews and customer research to uncover the true differentiation and brand DNA.",
      "Developed a new brand identity system — logo, color palette, typography, and voice guidelines — that positioned TechNova as a bold, forward-thinking technology partner.",
      "Redesigned their website from scratch with a focus on conversion — clear value propositions, solution-specific landing pages, and a streamlined RFP/contact flow.",
      "Launched a LinkedIn thought leadership program with the CEO and key technical leads publishing industry insights weekly.",
      "Built a content marketing engine producing monthly whitepapers, case studies, and webinars targeting IT decision-makers.",
    ],
    results: [
      { value: "250%", label: "Increase in website conversions" },
      { value: "180%", label: "Growth in inbound enterprise leads" },
      { value: "4x", label: "Improvement in brand awareness scores" },
      { value: "60%", label: "Reduction in sales cycle length" },
    ],
    services: ["Brand Management", "UI/UX Design", "Content Marketing", "SEO & SEM", "Marketing Automation"],
    duration: "5 months",
  },
];
