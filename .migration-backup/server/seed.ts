import { db } from "./db";
import { services, industries, portfolioItems, blogs, siteSettings } from "@shared/schema";

async function seed() {
  console.log("Seeding database...");

  // ── Services ──────────────────────────────────────────────────────────────
  const serviceData = [
    {
      slug: "marketing-automation", title: "Marketing Automation",
      description: "Streamline your workflows and nurture leads 24/7 with intelligent automation.",
      iconName: "zap", displayOrder: 0,
      stats: [
        { value: "40%", label: "Increase in productivity" }, { value: "3x", label: "Lead qualification speed" },
        { value: "25%", label: "Reduction in overhead costs" }, { value: "50%", label: "Boost in conversion rates" }
      ],
      benefits: [
        { title: "Workflow Efficiency", desc: "Automate repetitive tasks to save time and reduce errors." },
        { title: "Lead Nurturing", desc: "Keep prospects engaged with personalized drip campaigns." },
        { title: "Data Integration", desc: "Sync data across all your platforms for a unified view." }
      ],
      process: [
        { title: "Audit & Blueprint", desc: "We map out your current processes and identify automation gaps." },
        { title: "Platform Setup", desc: "Configuring the right tools (HubSpot, Marketo, etc.) for your needs." },
        { title: "Workflow Creation", desc: "Building complex triggers and actions to automate the journey." },
        { title: "Performance Tuning", desc: "Constant A/B testing to optimize open rates and conversions." }
      ],
      redefined: { title: "Automation Redefined", desc: "Stop trading time for money. We build intelligent systems that work while you sleep, ensuring no lead is left behind and every customer feels personally attended to." }
    },
    {
      slug: "social-media-marketing", title: "Social Media Marketing",
      description: "Build a loyal community and drive engagement across all major platforms.",
      iconName: "users", displayOrder: 1, stats: [],
      benefits: [
        { title: "Brand Awareness", desc: "Expand your reach to millions of potential customers." },
        { title: "Community Building", desc: "Foster a loyal following that advocates for your brand." },
        { title: "Viral Growth", desc: "Create shareable content that spreads organically." }
      ],
      process: [
        { title: "Audience Analysis", desc: "Deep dive into demographics and psychographics." },
        { title: "Content Calendar", desc: "Planning a mix of educational, entertaining, and promotional content." },
        { title: "Engagement Management", desc: "Active community management and response strategies." },
        { title: "Analytics Reporting", desc: "Monthly deep dives into growth metrics and sentiment." }
      ],
      redefined: null
    },
    {
      slug: "seo-sem", title: "SEO & SEM",
      description: "Dominate search results and capture high-intent traffic.",
      iconName: "search", displayOrder: 2,
      stats: [
        { value: "#1", label: "Ranking for key terms" }, { value: "200%", label: "Increase in organic traffic" },
        { value: "65%", label: "Lower acquisition cost" }, { value: "4x", label: "ROI on SEO spend" }
      ],
      benefits: [
        { title: "Organic Traffic", desc: "Sustainable long-term growth without ad spend dependency." },
        { title: "High Intent Leads", desc: "Capture users exactly when they are searching for solutions." },
        { title: "Authority Building", desc: "Establish your brand as the thought leader in your industry." }
      ],
      process: [
        { title: "Keyword Research", desc: "Identifying high-volume, low-competition opportunities." },
        { title: "On-Page Optimization", desc: "Technical fixes and content optimization for search engines." },
        { title: "Link Building", desc: "Acquiring high-quality backlinks to boost domain authority." },
        { title: "Conversion Optimization", desc: "Turning traffic into leads through optimized landing pages." }
      ],
      redefined: { title: "Search Visibility Redefined", desc: "It's not just about traffic; it's about the right traffic. We align your content with user intent, ensuring that when your customers search, they find you first." }
    },
    {
      slug: "brand-management", title: "Brand Management",
      description: "Craft a compelling identity that resonates with your target audience.",
      iconName: "globe", displayOrder: 3, stats: [],
      benefits: [
        { title: "Consistent Identity", desc: "Unified visual and verbal language across all touchpoints." },
        { title: "Emotional Connection", desc: "Building a brand that customers love and trust." },
        { title: "Premium Positioning", desc: "Command higher prices through perceived brand value." }
      ],
      process: [
        { title: "Brand Audit", desc: "Evaluating current perception and market positioning." },
        { title: "Identity Design", desc: "Crafting logos, palettes, and typography systems." },
        { title: "Guidelines Creation", desc: "Documenting rules for consistent brand application." },
        { title: "Rollout Strategy", desc: "Launching the new brand to internal and external stakeholders." }
      ],
      redefined: null
    },
    {
      slug: "content-marketing", title: "Content Marketing",
      description: "Tell your story with high-impact content that converts.",
      iconName: "layout", displayOrder: 4, stats: [],
      benefits: [
        { title: "Thought Leadership", desc: "Position your experts as industry go-to resources." },
        { title: "SEO Fuel", desc: "Content that ranks and drives continuous organic traffic." },
        { title: "Lead Magnet", desc: "High-value resources that capture email subscribers." }
      ],
      process: [
        { title: "Content Strategy", desc: "Aligning topics with customer pain points and search intent." },
        { title: "Production", desc: "Creating blogs, whitepapers, videos, and infographics." },
        { title: "Distribution", desc: "Amplifying content through social, email, and PR channels." },
        { title: "Performance Analysis", desc: "Measuring engagement and attribution to revenue." }
      ],
      redefined: null
    },
    {
      slug: "whatsapp-marketing", title: "WhatsApp Marketing",
      description: "Reach customers directly on their favorite messaging app.",
      iconName: "message-circle", displayOrder: 5, stats: [],
      benefits: [
        { title: "Instant Reach", desc: "98% open rates within minutes of sending." },
        { title: "Direct Communication", desc: "Personalized 1:1 conversations at scale." },
        { title: "Automated Support", desc: "Chatbots to handle queries 24/7 instantly." }
      ],
      process: [
        { title: "Audience Segmentation", desc: "Grouping contacts for relevant messaging." },
        { title: "Template Design", desc: "Creating approved, engaging message templates." },
        { title: "Automation Setup", desc: "Configuring flows for abandoned carts, updates, etc." },
        { title: "Campaign Launch", desc: "Broadcasting offers and tracking response rates." }
      ],
      redefined: null
    },
    {
      slug: "email-marketing", title: "Email Marketing",
      description: "Personalized campaigns that drive retention and ROI.",
      iconName: "mail", displayOrder: 6, stats: [],
      benefits: [
        { title: "High ROI", desc: "The most cost-effective channel for retention." },
        { title: "Personalization", desc: "Dynamic content based on user behavior." },
        { title: "Lifecycle Marketing", desc: "Messaging that evolves with the customer journey." }
      ],
      process: [
        { title: "List Cleaning", desc: "Ensuring deliverability by removing inactive contacts." },
        { title: "Flow Construction", desc: "Welcome series, re-engagement, and post-purchase flows." },
        { title: "Creative Design", desc: "Mobile-responsive, visually stunning email templates." },
        { title: "A/B Testing", desc: "Testing subject lines and CTAs for maximum click-through." }
      ],
      redefined: null
    },
    {
      slug: "ui-ux-design", title: "UI/UX Design",
      description: "Create seamless, intuitive digital experiences for your users.",
      iconName: "layout", displayOrder: 7, stats: [],
      benefits: [
        { title: "User Satisfaction", desc: "Intuitive interfaces that users love to navigate." },
        { title: "Higher Conversions", desc: "Frictionless flows that lead to more sales." },
        { title: "Reduced Churn", desc: "Product stickiness through superior usability." }
      ],
      process: [
        { title: "User Research", desc: "Interviews and heatmaps to understand user behavior." },
        { title: "Wireframing", desc: "Low-fidelity blueprints of the user journey." },
        { title: "Visual Design", desc: "Applying the brand system to high-fidelity mockups." },
        { title: "Prototyping", desc: "Interactive demos to test flows before development." }
      ],
      redefined: null
    },
    {
      slug: "video-production", title: "Video Production",
      description: "Engage your audience with cinematic storytelling and motion graphics.",
      iconName: "video", displayOrder: 8, stats: [],
      benefits: [
        { title: "Higher Engagement", desc: "Video captures attention faster than text or static images." },
        { title: "Complex Explanations", desc: "Simplify complex products through visual storytelling." },
        { title: "Brand Personality", desc: "Convey tone and emotion more effectively." }
      ],
      process: [
        { title: "Storyboarding", desc: "Visualizing the narrative frame by frame." },
        { title: "Production", desc: "Filming, animation, and voiceover recording." },
        { title: "Post-Production", desc: "Editing, VFX, sound design, and color grading." },
        { title: "Format Optimization", desc: "Exporting for YouTube, Instagram, TV, etc." }
      ],
      redefined: null
    },
  ];

  for (const s of serviceData) {
    await db.insert(services).values(s).onConflictDoNothing();
  }
  console.log("Services seeded");

  // ── Industries ────────────────────────────────────────────────────────────
  const industryData = [
    { slug: "ecommerce", title: "Ecommerce", description: "Driving online sales and brand growth for e-commerce businesses.", iconName: "shopping-cart", displayOrder: 0 },
    { slug: "healthcare", title: "Healthcare", description: "Patient acquisition and trust-building for healthcare providers.", iconName: "activity", displayOrder: 1 },
    { slug: "information-technology", title: "Information Technology", description: "Lead generation and brand positioning for IT companies.", iconName: "cpu", displayOrder: 2 },
    { slug: "education", title: "Education", description: "Student enrolment and institutional reputation management.", iconName: "graduation-cap", displayOrder: 3 },
    { slug: "hospitality", title: "Hospitality", description: "Booking growth and brand loyalty for hospitality businesses.", iconName: "coffee", displayOrder: 4 },
    { slug: "fmcg", title: "FMCG", description: "Consumer engagement and distribution growth for FMCG brands.", iconName: "shopping-bag", displayOrder: 5 },
    { slug: "real-estate", title: "Real Estate", description: "Lead generation and property marketing for real estate firms.", iconName: "home", displayOrder: 6 },
    { slug: "retail", title: "Retail", description: "Footfall and online revenue growth for retail businesses.", iconName: "tag", displayOrder: 7 },
    { slug: "fintech", title: "Fintech", description: "User acquisition and trust-building for fintech products.", iconName: "banknote", displayOrder: 8 },
    { slug: "agriculture", title: "Agriculture", description: "Digital transformation for agri-businesses and farm brands.", iconName: "sprout", displayOrder: 9 },
  ];

  for (const i of industryData) {
    await db.insert(industries).values(i).onConflictDoNothing();
  }
  console.log("Industries seeded");

  // ── Portfolio Items ───────────────────────────────────────────────────────
  const portfolioData = [
    {
      slug: "fabpik", client: "FabPik", clientColor: "text-pink-500",
      category: "Social Media Marketing", industry: "E-commerce",
      headline: "50% Jump in Brand Visibility for a Kids' E-commerce Brand with AI-Powered SMO",
      tagline: "From invisible to unmissable — how we made FabPik the go-to kids' fashion destination.",
      heroImage: "happy_child_shopping_for_ecommerce_success", coverImage: "happy_child_shopping_for_ecommerce_success",
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
        { value: "50%", label: "Increase in brand visibility" }, { value: "3.2x", label: "Return on ad spend" },
        { value: "200%", label: "Growth in Instagram followers" }, { value: "40%", label: "Reduction in cost per acquisition" },
      ],
      projectServices: ["Social Media Marketing", "Paid Social Advertising", "Influencer Marketing", "Content Strategy"],
      duration: "4 months", displayOrder: 0,
    },
    {
      slug: "monarch", client: "Monarch", clientColor: "text-amber-500",
      category: "SEO & Content Marketing", industry: "B2B / Office Furniture",
      headline: "From Hidden to Highlighted — Global Office Furniture Brand's Digital Transformation with Nexus",
      tagline: "How a 30-year-old furniture brand became the top-ranked choice for global corporate buyers.",
      heroImage: "modern_office_space_for_furniture_brand", coverImage: "modern_office_space_for_furniture_brand",
      overview: "Monarch is a premium office furniture manufacturer with 30 years of expertise and a global client base spanning 20+ countries. Despite their rich heritage, their digital presence was outdated.",
      challenge: "Monarch needed a complete digital overhaul — from SEO and content to their B2B lead generation funnel.",
      approach: [
        "Performed a comprehensive technical SEO audit and rebuilt their site architecture for global search visibility.",
        "Created an industry-authority content strategy with long-form case studies, whitepapers, and buying guides.",
        "Launched targeted LinkedIn campaigns reaching C-suite decision-makers in target markets (USA, UAE, Singapore).",
        "Developed a product story video series showcasing craftsmanship and workspace transformation.",
        "Implemented a CRM-integrated lead nurturing sequence converting website visitors into qualified sales calls.",
      ],
      results: [
        { value: "180%", label: "Growth in organic search traffic" }, { value: "4x", label: "Increase in qualified B2B leads" },
        { value: "#1", label: "Google rankings for key product terms" }, { value: "65%", label: "Improvement in lead-to-close rate" },
      ],
      projectServices: ["SEO & SEM", "Content Marketing", "LinkedIn Ads", "Email Marketing", "Video Production"],
      duration: "6 months", displayOrder: 1,
    },
    {
      slug: "centro", client: "Centro", clientColor: "text-orange-500",
      category: "Performance Marketing", industry: "Retail / Footwear",
      headline: "Leading Footwear Brand CENTRO Achieves Record Sales Growth with Nexus's Performance Marketing",
      tagline: "How precision-targeted campaigns turned browsing into buying for India's leading footwear retailer.",
      heroImage: "futuristic_athletic_shoe_for_footwear_brand", coverImage: "futuristic_athletic_shoe_for_footwear_brand",
      overview: "Centro is one of India's largest multi-brand footwear retailers with 400+ stores and a growing e-commerce presence.",
      challenge: "With an aggressive sales target and a saturated footwear market, Centro needed a data-driven performance marketing strategy.",
      approach: [
        "Developed a full-funnel performance marketing strategy across Google Shopping, Meta, and influencer channels.",
        "Implemented dynamic product ads with AI-optimized bidding strategies updating bids in real-time.",
        "Created a 3-stage retargeting framework targeting cart abandoners, wish-listers, and past purchasers.",
        "Collaborated with 25 fashion and lifestyle influencers to produce campaign-specific content.",
        "Built a WhatsApp re-engagement campaign for lapsed customers, driving a 22% repeat purchase rate.",
      ],
      results: [
        { value: "2.8x", label: "Return on ad spend (ROAS)" }, { value: "45%", label: "Increase in online revenue" },
        { value: "60%", label: "Reduction in cart abandonment" }, { value: "5x", label: "Growth in new customer acquisition" },
      ],
      projectServices: ["Performance Marketing", "Google Shopping", "Social Media Ads", "WhatsApp Marketing", "Influencer Marketing"],
      duration: "3 months", displayOrder: 2,
    },
    {
      slug: "eduvance", client: "Eduvance", clientColor: "text-blue-400",
      category: "Content & Social Media", industry: "Education",
      headline: "Revitalized Premier Research Institution's Digital Presence with Strategic SMO and Content Marketing",
      tagline: "How we helped a leading education brand drive 3x enrolment inquiries through digital storytelling.",
      heroImage: "stack_of_books_for_education_industry", coverImage: "stack_of_books_for_education_industry",
      overview: "Eduvance is a premier research-led educational institution offering post-graduate and executive education programs.",
      challenge: "The institution needed to modernize its digital communication strategy and attract high-quality applicants.",
      approach: [
        "Conducted an in-depth content audit and developed a 'thought leadership first' content strategy.",
        "Rebuilt their LinkedIn presence with a structured editorial calendar, growing from 8K to 65K followers.",
        "Created targeted awareness campaigns on Meta and Google targeting working professionals and graduates.",
        "Launched a video testimonial series featuring alumni from leading global companies.",
        "Developed SEO-optimized landing pages for each program, reducing cost-per-inquiry by 48%.",
      ],
      results: [
        { value: "3x", label: "Growth in enrolment inquiries" }, { value: "65K", label: "LinkedIn followers gained" },
        { value: "48%", label: "Reduction in cost per lead" }, { value: "91%", label: "Increase in website engagement" },
      ],
      projectServices: ["Content Marketing", "Social Media Marketing", "SEO & SEM", "Video Production", "Performance Marketing"],
      duration: "6 months", displayOrder: 3,
    },
    {
      slug: "healthbridge", client: "HealthBridge", clientColor: "text-green-400",
      category: "Marketing Automation & SEO", industry: "Healthcare",
      headline: "HealthBridge Scaled Patient Acquisition by 120% with AI-Driven Marketing Automation",
      tagline: "Building trust and driving appointments for a modern multi-speciality healthcare network.",
      heroImage: "doctor_holding_stethoscope_for_healthcare_industry", coverImage: "doctor_holding_stethoscope_for_healthcare_industry",
      overview: "HealthBridge is a rapidly expanding multi-speciality healthcare network with 12 hospitals across South India.",
      challenge: "Healthcare marketing demands an extremely sensitive, trust-first approach while driving patient footfall.",
      approach: [
        "Built a HIPAA-compliant marketing automation system integrating CRM, website, WhatsApp, and email channels.",
        "Developed hyper-local SEO strategies for each hospital location targeting high-intent search queries.",
        "Created health awareness content campaigns aligned with national health days generating organic reach.",
        "Launched doctor-led video content on YouTube and Instagram featuring specialists sharing health tips.",
        "Implemented a WhatsApp-based appointment reminder system reducing no-show rates by 35%.",
      ],
      results: [
        { value: "120%", label: "Increase in patient acquisition" }, { value: "4.5x", label: "Growth in digital appointments" },
        { value: "35%", label: "Reduction in appointment no-shows" }, { value: "220%", label: "Growth in organic search traffic" },
      ],
      projectServices: ["Marketing Automation", "SEO & SEM", "WhatsApp Marketing", "Content Marketing", "Video Production"],
      duration: "8 months", displayOrder: 4,
    },
    {
      slug: "technova", client: "TechNova", clientColor: "text-cyan-400",
      category: "Brand Management & UI/UX", industry: "Information Technology",
      headline: "Complete Brand Overhaul and Digital Transformation for a Leading IT Solutions Company",
      tagline: "How TechNova went from being a best-kept secret to an industry-recognized technology leader.",
      heroImage: "information_technology_data_center", coverImage: "information_technology_data_center",
      overview: "TechNova is a mid-size IT solutions company with deep technical expertise in cloud infrastructure and cybersecurity.",
      challenge: "TechNova needed a complete brand transformation and demand generation strategy to compete with larger players.",
      approach: [
        "Conducted extensive stakeholder interviews and customer research to uncover brand DNA.",
        "Developed a new brand identity system — logo, color palette, typography, and voice guidelines.",
        "Redesigned their website from scratch with clear value propositions and streamlined contact flow.",
        "Launched a LinkedIn thought leadership program with the CEO publishing industry insights weekly.",
        "Built a content marketing engine producing monthly whitepapers, case studies, and webinars.",
      ],
      results: [
        { value: "250%", label: "Increase in website conversions" }, { value: "180%", label: "Growth in inbound enterprise leads" },
        { value: "4x", label: "Improvement in brand awareness scores" }, { value: "60%", label: "Reduction in sales cycle length" },
      ],
      projectServices: ["Brand Management", "UI/UX Design", "Content Marketing", "SEO & SEM", "Marketing Automation"],
      duration: "5 months", displayOrder: 5,
    },
  ];

  for (const p of portfolioData) {
    await db.insert(portfolioItems).values(p).onConflictDoNothing();
  }
  console.log("Portfolio items seeded");

  // ── Blogs ────────────────────────────────────────────────────────────────
  const blogData = [
    {
      title: "The Rise of AI in Digital Marketing", slug: "the-rise-of-ai-in-digital-marketing",
      category: "AI & Tech", description: "How artificial intelligence is reshaping the landscape of digital marketing and customer engagement.",
      content: "<p>Artificial Intelligence (AI) is no longer a futuristic concept; it's the driving force behind modern digital marketing strategies.</p><h2>The Shift to Hyper-Personalization</h2><p>AI algorithms now analyze vast amounts of user data to deliver highly relevant content, product recommendations, and offers.</p><h2>Predictive Analytics</h2><p>Marketers can now predict future trends and consumer behaviors with remarkable accuracy.</p>",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000",
      createdAt: "Aug 25, 2025", author: "MAI Team", readTime: "7 min read", featured: true
    },
    {
      title: "Optimizing for Voice Search in 2025", slug: "optimizing-for-voice-search-2025",
      category: "SEO", description: "With smart speakers on the rise, learn how to optimize your content for voice search queries.",
      content: "<p>Voice search is rapidly becoming a primary mode of information retrieval.</p><h2>Conversational Keywords</h2><p>Voice searches tend to be longer and more conversational than typed queries. Focus on natural language and long-tail keywords.</p>",
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1000",
      createdAt: "Jul 14, 2025", author: "Sarah Johnson", readTime: "5 min read", featured: false
    },
    {
      title: "The Power of Personalization", slug: "power-of-personalization",
      category: "Strategy", description: "Why generic marketing is dying and how hyper-personalization drives conversion rates.",
      content: "<p>In an era of information overload, personalization is the key to cutting through the noise. Customers expect brands to understand their unique preferences and deliver tailored experiences.</p>",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
      createdAt: "Jun 30, 2025", author: "David Chen", readTime: "6 min read", featured: false
    },
    {
      title: "Video Marketing Trends to Watch", slug: "video-marketing-trends",
      category: "Content", description: "Short-form video is king. Discover how to leverage TikTok and Reels for your brand.",
      content: "<p>Short-form video content has exploded in popularity. Brands that master this format are seeing unprecedented engagement rates.</p>",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000",
      createdAt: "Jun 10, 2025", author: "MAI Team", readTime: "4 min read", featured: false
    },
    {
      title: "WhatsApp Business: The Hidden Marketing Goldmine", slug: "whatsapp-business-marketing",
      category: "Marketing", description: "How forward-thinking brands are using WhatsApp to achieve 98% open rates.",
      content: "<p>WhatsApp Business has emerged as one of the most powerful yet underutilized marketing channels. With over 2 billion active users and an average open rate of 98%, it outperforms email marketing by a wide margin.</p>",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000",
      createdAt: "May 22, 2025", author: "Priya Sharma", readTime: "8 min read", featured: false
    },
    {
      title: "Building a Data-Driven Marketing Strategy", slug: "data-driven-marketing-strategy",
      category: "Strategy", description: "Move beyond gut feelings. Learn how to build marketing strategies backed by data.",
      content: "<p>Data-driven marketing is no longer optional — it's the foundation of every successful campaign. Companies that leverage data effectively see 5-8x higher ROI on their marketing investments.</p>",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
      createdAt: "May 5, 2025", author: "MAI Team", readTime: "9 min read", featured: false
    },
  ];

  for (const b of blogData) {
    await db.insert(blogs).values(b).onConflictDoNothing();
  }
  console.log("Blogs seeded");

  // ── Site Settings ─────────────────────────────────────────────────────────
  const settingsData = [
    {
      key: "contact_info",
      value: {
        email: "hello@marketingaigency.in", phone: "+91 6309966282",
        whatsapp: "916309966282", address: "Hyderabad, Telangana, India",
        linkedin: "https://linkedin.com/company/mai-agency",
        instagram: "https://instagram.com/mai.agency",
        twitter: "https://twitter.com/mai_agency",
      }
    },
    {
      key: "about_stats",
      value: [
        { value: "300%", label: "ROI Delivered For Clients" },
        { value: "95%", label: "Customer Satisfaction Rate" },
        { value: "2000+", label: "Successful Campaigns Conducted" },
        { value: "68+", label: "Specialists On Board" },
      ]
    },
    {
      key: "home_stats",
      value: [
        { value: "12+", label: "Years Experience" }, { value: "68+", label: "Expert Specialists" },
        { value: "200+", label: "Number of Clients" }, { value: "500+", label: "Campaigns Launched" },
        { value: "300%", label: "ROI Delivered" },
      ]
    },
  ];

  for (const s of settingsData) {
    await db.insert(siteSettings).values(s).onConflictDoNothing();
  }
  console.log("Site settings seeded");

  console.log("Database seeding complete!");
}

seed().catch(console.error).finally(() => process.exit(0));
