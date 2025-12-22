import { BarChart, Users, Globe, Zap, Search, MessageCircle, Mail, Layout, Video } from "lucide-react";

export const servicesList = [
  { 
    title: "Marketing Automation", 
    href: "/services/marketing-automation", 
    description: "Streamline your workflows and nurture leads 24/7 with intelligent automation.",
    icon: Zap,
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
    ]
  },
  { 
    title: "Social Media Marketing", 
    href: "/services/social-media-marketing", 
    description: "Build a loyal community and drive engagement across all major platforms.",
    icon: Users,
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
    ]
  },
  { 
    title: "SEO & SEM", 
    href: "/services/seo-sem", 
    description: "Dominate search results and capture high-intent traffic.",
    icon: Search,
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
    ]
  },
  { 
    title: "Brand Management", 
    href: "/services/brand-management", 
    description: "Craft a compelling identity that resonates with your target audience.",
    icon: Globe,
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
    ]
  },
  { 
    title: "Content Marketing", 
    href: "/services/content-marketing", 
    description: "Tell your story with high-impact content that converts.",
    icon: Layout,
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
    ]
  },
  { 
    title: "WhatsApp Marketing", 
    href: "/services/whatsapp-marketing", 
    description: "Reach customers directly on their favorite messaging app.",
    icon: MessageCircle,
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
    ]
  },
  { 
    title: "Email Marketing", 
    href: "/services/email-marketing", 
    description: "Personalized campaigns that drive retention and ROI.",
    icon: Mail,
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
    ]
  },
  { 
    title: "UI/UX Design", 
    href: "/services/ui-ux-design", 
    description: "Create seamless, intuitive digital experiences for your users.",
    icon: Layout,
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
    ]
  },
  { 
    title: "Video Production", 
    href: "/services/video-production", 
    description: "Engage your audience with cinematic storytelling and motion graphics.",
    icon: Video,
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
    ]
  },
];

export const industriesList = [
  { title: "Ecommerce", href: "/industries/ecommerce", icon: "shopping-cart" },
  { title: "Healthcare", href: "/industries/healthcare", icon: "activity" },
  { title: "Information Technology", href: "/industries/information-technology", icon: "cpu" },
  { title: "Education", href: "/industries/education", icon: "graduation-cap" },
  { title: "Hospitality", href: "/industries/hospitality", icon: "coffee" },
  { title: "FMCG", href: "/industries/fmcg", icon: "shopping-bag" },
  { title: "Real Estate", href: "/industries/real-estate", icon: "home" },
  { title: "Retail", href: "/industries/retail", icon: "tag" },
  { title: "Fintech", href: "/industries/fintech", icon: "banknote" },
  { title: "Agriculture", href: "/industries/agriculture", icon: "sprout" },
];

export const resourcesList = [
  { 
    title: "Blogs", 
    href: "/resources/blogs", 
    description: "Insights and trends from the digital world." 
  },
  { 
    title: "Case Studies", 
    href: "/resources/case-studies", 
    description: "Real success stories and proven results." 
  },
  { 
    title: "Press Release", 
    href: "/resources/press-release", 
    description: "Latest news and announcements from Nexus." 
  },
];
