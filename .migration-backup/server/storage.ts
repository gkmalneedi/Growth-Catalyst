import { eq, desc } from "drizzle-orm";
import { db } from "./db";
import {
  blogs, caseStudies, pressReleases, contactSubmissions, newsletterSubscribers,
  services, industries, portfolioItems, siteSettings,
  type Blog, type InsertBlog,
  type CaseStudy, type InsertCaseStudy,
  type PressRelease, type InsertPressRelease,
  type ContactSubmission, type InsertContactSubmission,
  type NewsletterSubscriber, type InsertNewsletterSubscriber,
  type Service, type InsertService,
  type Industry, type InsertIndustry,
  type PortfolioItem, type InsertPortfolioItem,
  type SiteSetting, type InsertSiteSetting,
} from "@shared/schema";

export interface IStorage {
  getBlogs(): Promise<Blog[]>;
  getBlogBySlug(slug: string): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;
  updateBlog(id: number, blog: Partial<InsertBlog>): Promise<Blog>;
  deleteBlog(id: number): Promise<void>;

  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined>;
  createCaseStudy(cs: InsertCaseStudy): Promise<CaseStudy>;
  updateCaseStudy(id: number, cs: Partial<InsertCaseStudy>): Promise<CaseStudy>;
  deleteCaseStudy(id: number): Promise<void>;

  getPressReleases(): Promise<PressRelease[]>;
  getPressReleaseBySlug(slug: string): Promise<PressRelease | undefined>;
  createPressRelease(pr: InsertPressRelease): Promise<PressRelease>;
  updatePressRelease(id: number, pr: Partial<InsertPressRelease>): Promise<PressRelease>;
  deletePressRelease(id: number): Promise<void>;

  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;

  createNewsletterSubscriber(sub: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;

  getServices(): Promise<Service[]>;
  getServiceBySlug(slug: string): Promise<Service | undefined>;
  createService(s: InsertService): Promise<Service>;
  updateService(id: number, s: Partial<InsertService>): Promise<Service>;
  deleteService(id: number): Promise<void>;

  getIndustries(): Promise<Industry[]>;
  getIndustryBySlug(slug: string): Promise<Industry | undefined>;
  createIndustry(i: InsertIndustry): Promise<Industry>;
  updateIndustry(id: number, i: Partial<InsertIndustry>): Promise<Industry>;
  deleteIndustry(id: number): Promise<void>;

  getPortfolioItems(): Promise<PortfolioItem[]>;
  getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | undefined>;
  createPortfolioItem(p: InsertPortfolioItem): Promise<PortfolioItem>;
  updatePortfolioItem(id: number, p: Partial<InsertPortfolioItem>): Promise<PortfolioItem>;
  deletePortfolioItem(id: number): Promise<void>;

  getSiteSettings(): Promise<SiteSetting[]>;
  getSiteSetting(key: string): Promise<SiteSetting | undefined>;
  upsertSiteSetting(key: string, value: any): Promise<SiteSetting>;
}

export class DatabaseStorage implements IStorage {
  async getBlogs(): Promise<Blog[]> {
    return db.select().from(blogs).orderBy(desc(blogs.id));
  }
  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    const [blog] = await db.select().from(blogs).where(eq(blogs.slug, slug));
    return blog;
  }
  async createBlog(blog: InsertBlog): Promise<Blog> {
    const [created] = await db.insert(blogs).values(blog).returning();
    return created;
  }
  async updateBlog(id: number, blog: Partial<InsertBlog>): Promise<Blog> {
    const [updated] = await db.update(blogs).set(blog as any).where(eq(blogs.id, id)).returning();
    return updated;
  }
  async deleteBlog(id: number): Promise<void> {
    await db.delete(blogs).where(eq(blogs.id, id));
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return db.select().from(caseStudies).orderBy(desc(caseStudies.id));
  }
  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
    const [cs] = await db.select().from(caseStudies).where(eq(caseStudies.slug, slug));
    return cs;
  }
  async createCaseStudy(cs: InsertCaseStudy): Promise<CaseStudy> {
    const [created] = await db.insert(caseStudies).values(cs as any).returning();
    return created;
  }
  async updateCaseStudy(id: number, cs: Partial<InsertCaseStudy>): Promise<CaseStudy> {
    const [updated] = await db.update(caseStudies).set(cs as any).where(eq(caseStudies.id, id)).returning();
    return updated;
  }
  async deleteCaseStudy(id: number): Promise<void> {
    await db.delete(caseStudies).where(eq(caseStudies.id, id));
  }

  async getPressReleases(): Promise<PressRelease[]> {
    return db.select().from(pressReleases).orderBy(desc(pressReleases.id));
  }
  async getPressReleaseBySlug(slug: string): Promise<PressRelease | undefined> {
    const [pr] = await db.select().from(pressReleases).where(eq(pressReleases.slug, slug));
    return pr;
  }
  async createPressRelease(pr: InsertPressRelease): Promise<PressRelease> {
    const [created] = await db.insert(pressReleases).values(pr).returning();
    return created;
  }
  async updatePressRelease(id: number, pr: Partial<InsertPressRelease>): Promise<PressRelease> {
    const [updated] = await db.update(pressReleases).set(pr as any).where(eq(pressReleases.id, id)).returning();
    return updated;
  }
  async deletePressRelease(id: number): Promise<void> {
    await db.delete(pressReleases).where(eq(pressReleases.id, id));
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [created] = await db.insert(contactSubmissions).values(submission).returning();
    return created;
  }
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.submittedAt));
  }

  async createNewsletterSubscriber(sub: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const [created] = await db.insert(newsletterSubscribers).values(sub).returning();
    return created;
  }

  async getServices(): Promise<Service[]> {
    return db.select().from(services).orderBy(services.displayOrder);
  }
  async getServiceBySlug(slug: string): Promise<Service | undefined> {
    const [s] = await db.select().from(services).where(eq(services.slug, slug));
    return s;
  }
  async createService(s: InsertService): Promise<Service> {
    const [created] = await db.insert(services).values(s as any).returning();
    return created;
  }
  async updateService(id: number, s: Partial<InsertService>): Promise<Service> {
    const [updated] = await db.update(services).set(s as any).where(eq(services.id, id)).returning();
    return updated;
  }
  async deleteService(id: number): Promise<void> {
    await db.delete(services).where(eq(services.id, id));
  }

  async getIndustries(): Promise<Industry[]> {
    return db.select().from(industries).orderBy(industries.displayOrder);
  }
  async getIndustryBySlug(slug: string): Promise<Industry | undefined> {
    const [i] = await db.select().from(industries).where(eq(industries.slug, slug));
    return i;
  }
  async createIndustry(i: InsertIndustry): Promise<Industry> {
    const [created] = await db.insert(industries).values(i).returning();
    return created;
  }
  async updateIndustry(id: number, i: Partial<InsertIndustry>): Promise<Industry> {
    const [updated] = await db.update(industries).set(i).where(eq(industries.id, id)).returning();
    return updated;
  }
  async deleteIndustry(id: number): Promise<void> {
    await db.delete(industries).where(eq(industries.id, id));
  }

  async getPortfolioItems(): Promise<PortfolioItem[]> {
    return db.select().from(portfolioItems).orderBy(portfolioItems.displayOrder);
  }
  async getPortfolioItemBySlug(slug: string): Promise<PortfolioItem | undefined> {
    const [p] = await db.select().from(portfolioItems).where(eq(portfolioItems.slug, slug));
    return p;
  }
  async createPortfolioItem(p: InsertPortfolioItem): Promise<PortfolioItem> {
    const [created] = await db.insert(portfolioItems).values(p as any).returning();
    return created;
  }
  async updatePortfolioItem(id: number, p: Partial<InsertPortfolioItem>): Promise<PortfolioItem> {
    const [updated] = await db.update(portfolioItems).set(p as any).where(eq(portfolioItems.id, id)).returning();
    return updated;
  }
  async deletePortfolioItem(id: number): Promise<void> {
    await db.delete(portfolioItems).where(eq(portfolioItems.id, id));
  }

  async getSiteSettings(): Promise<SiteSetting[]> {
    return db.select().from(siteSettings);
  }
  async getSiteSetting(key: string): Promise<SiteSetting | undefined> {
    const [s] = await db.select().from(siteSettings).where(eq(siteSettings.key, key));
    return s;
  }
  async upsertSiteSetting(key: string, value: any): Promise<SiteSetting> {
    const existing = await this.getSiteSetting(key);
    if (existing) {
      const [updated] = await db.update(siteSettings)
        .set({ value, updatedAt: new Date() })
        .where(eq(siteSettings.key, key))
        .returning();
      return updated;
    }
    const [created] = await db.insert(siteSettings).values({ key, value }).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();

// ── Default Content Seeder ────────────────────────────────────────────────────

const DEFAULT_CONTENT: Record<string, any> = {
  home_hero: {
    title1: "We're the Crusaders of",
    title2: "Redefining Engagement",
    description: "AI-driven strategies. Creative excellence. Measurable results. We help ambitious brands dominate the digital landscape.",
    cta1Text: "Let's Connect",
    cta1Href: "/contact",
    cta2Text: "Explore Services",
    cta2Href: "/services",
    bgImage: "",
  },
  home_stats: [
    { value: "12+", label: "Years Experience" },
    { value: "68+", label: "Expert Specialists" },
    { value: "200+", label: "Number of Clients" },
    { value: "500+", label: "Campaigns Launched" },
    { value: "300%", label: "ROI Delivered" },
  ],
  home_trusted_logos: [
    { name: "Govt of India", color: "text-orange-400" },
    { name: "IDBI Bank", color: "text-blue-400" },
    { name: "Philips", color: "text-sky-400" },
    { name: "EuroArt", color: "text-yellow-400" },
    { name: "TechMahindra", color: "text-violet-400" },
    { name: "Accenture", color: "text-purple-400" },
    { name: "Amazon", color: "text-orange-300" },
    { name: "Google", color: "text-green-400" },
    { name: "Microsoft", color: "text-blue-500" },
    { name: "Samsung", color: "text-zinc-300" },
  ],
  home_workflow: {
    title: "How We Work",
    subtitle: "MAI's Flagship 5-step framework that transforms your digital presence into a growth engine.",
    steps: [
      { number: "01", title: "Discover", desc: "Deep-dive into your brand, goals, and market landscape to uncover key opportunities." },
      { number: "02", title: "Strategize", desc: "Craft a data-backed, AI-powered marketing blueprint tailored to your objectives." },
      { number: "03", title: "Create", desc: "Produce high-impact creative content that resonates with your target audience." },
      { number: "04", title: "Execute", desc: "Deploy campaigns across channels with precision timing and audience targeting." },
      { number: "05", title: "Optimize", desc: "Continuously monitor, analyze, and refine for maximum ROI and sustained growth." },
    ],
  },
  home_testimonials: {
    sectionLabel: "In us, our customers trust",
    title: "Golden Lines That Keep Us Motivated",
    items: [
      { quote: "Nexus's Email Marketing services have truly transformed our outreach strategy. Their personalized approach, AI-driven techniques, and expertly tailored campaigns have significantly increased our engagement rates.", name: "Pradeep Reddy", role: "Senior Manager, Accenture", rating: "5" },
      { quote: "The SEO squad is terrific at achieving organic traffic! Their genuine care for our growth and attention to detail have truly impressed me. We've seen a remarkable increase in our online visibility.", name: "Ramesh Rathi", role: "GM, CipherCloud", rating: "5" },
      { quote: "Kudos to your outstanding content marketing services! Your strategic approach, creativity, and profound understanding of our business have truly elevated our brand's voice.", name: "Ashok Boddeda", role: "Director, Sysgain INC", rating: "5" },
      { quote: "Working with Nexus was a game-changer. Our social media presence grew by 200% in just 3 months. The team's dedication and creativity are unmatched in the industry.", name: "Sunita Sharma", role: "Marketing Head, TechBridge India", rating: "5" },
    ],
  },
  home_partners: {
    heading: "We and our partners together propel your growth",
    description: "Fast-track your growth with our strategic partners' ecosystem and unmatched experience in crafting digital dominance for businesses across industries.",
    logos: [
      { name: "Meta" },
      { name: "Google" },
      { name: "Microsoft" },
      { name: "HubSpot" },
      { name: "AWS" },
      { name: "CleverTap" },
    ],
  },
  home_awards: {
    heading: "It Takes a Lot to Achieve an Award, But We're Always Ready for it",
    description: "Awards Demand Dedication, and We're Always Ready to Rise to the Occasion",
    items: [{ name: "GoodFirms", subtitle: "Top Digital Marketing Company", site: "goodfirms.co" }],
  },
  about_hero: {
    title: "Curious About Our Story?",
    titleHighlight: "Actually, it's All About YOU!",
    description: "Every time we start writing about ourselves, we end up realizing that our essence revolves around 'YOU.' At our core lies a deep-seated inspiration drawn from your hunger for creativity, groundbreaking strategies, and unique storytelling.",
    ctaText: "Start Your Journey",
    ctaHref: "/contact",
    bgImage: "",
  },
  about_stats: [
    { value: "300%", label: "ROI Delivered For Clients" },
    { value: "95%", label: "Customer Satisfaction Rate" },
    { value: "2000+", label: "Successful Campaigns Conducted" },
    { value: "68+", label: "Specialists On Board" },
  ],
  about_mission: {
    title: "Our Mission",
    text: "Empower businesses with AI-driven marketing that turns data into powerful insights, fuels growth, and redefines customer engagement for the digital age.",
  },
  about_vision: {
    title: "Our Vision",
    text: "Lead the future of digital marketing with AI, making Nexus the go-to for innovation, growth, and game-changing strategies.",
  },
  about_strategic: {
    title: "Our Strategic Approach To Your Success",
    subtitle: "With a true understanding of what's now and what's next in digital, we follow a strategic approach to ensure your digital success.",
    items: [
      { icon: "bar-chart", title: "Analysis & Insights", desc: "Conduct in-depth analysis to understand your audience's behavior and preferences." },
      { icon: "target", title: "Precise Targeting", desc: "Leverage AI algorithms to target the right audience at the right time for maximum engagement." },
      { icon: "zap", title: "Personalized Content", desc: "Blend human creativity and AI to create hyper-personalized content that resonates." },
    ],
  },
  about_whyus: {
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
  },
  about_clients: {
    title: "Our Thriving Client Community",
    clients: ["Govt of India", "IDBI Bank", "Philips", "EuroArt", "TechMahindra", "Accenture", "Google", "Amazon", "Microsoft", "Netflix", "Spotify", "Uber", "Airbnb", "Tesla", "Samsung", "Sony", "LG", "HP", "Dell", "Intel"],
  },
  about_team: {
    title: "Meet Our Leadership",
    subtitle: "The visionaries driving MAI's mission to redefine digital marketing through AI-powered innovation.",
    members: [
      { name: "Gopikrishna Malneedi", designation: "Chief Executive Officer", initials: "GM", gradient: "linear-gradient(135deg, #C13584, #E1306C)", linkedin: "https://www.linkedin.com/in/gopikrishnamalneedi/", photo: "" },
      { name: "Priya Sharma", designation: "Chief Marketing Officer", initials: "PS", gradient: "linear-gradient(135deg, #E1306C, #FD1D1D)", linkedin: "#", photo: "" },
      { name: "Arjun Reddy", designation: "Chief Technology Officer", initials: "AR", gradient: "linear-gradient(135deg, #F56040, #F77737)", linkedin: "#", photo: "" },
      { name: "Sneha Kapoor", designation: "Chief Operating Officer", initials: "SK", gradient: "linear-gradient(135deg, #F77737, #FCAF45)", linkedin: "#", photo: "" },
    ],
  },
  about_prefooter: {
    title: "Ready to Embark on a Strategic",
    titleHighlight: "Digital Marketing Voyage?",
    ctaText: "Let's Talk Business",
    ctaHref: "/contact",
  },
  contact_info: {
    heroLabel: "Contact Us",
    heroTitle: "Get in Touch",
    heroTitleHighlight: "with Us",
    heroDescription: "Ready to make your brand unforgettable? Our AI-powered digital marketing turns attention into action and ambition into growth. Let us craft your success strategy — today.",
    email: "info@marketingaigency.in",
    phone: "+91 6309966282",
    address: "Flat No. 102, Life Style Building, Plot No 1038 & 1039, 3monkeys circle, Pragathi Nagar, Hyderabad, Telangana 500090",
    bgImage: "",
  },
  contact_partners: {
    heading: "We and our partners together propel your growth",
    partners: ["Meta", "Google", "Microsoft", "AWS", "HubSpot", "CleverTap"],
  },
  contact_office: {
    city: "Hyderabad",
    address: "Flat No. 102, Life Style Building, Plot No 1038 & 1039, 3monkeys circle, Pragathi Nagar, Hyderabad, Telangana 500090",
    email: "info@marketingaigency.in",
    phone: "+91 6309966282",
    mapsUrl: "https://www.google.com/maps?q=Life+Style+Building,+Plot+No+1038,+3monkeys+circle,+Pragathi+Nagar,+Hyderabad,+Telangana+500090&output=embed",
  },
  contact_awards: {
    title: "It Takes a Lot to Achieve an Award, But We're Always Ready for it",
    subtitle: "Awards Demand Dedication, and We're Always Ready to Rise to the Occasion.",
    awards: ["T-Hub", "Good Firms", "ISO 27001", "ISO 9001", "Silicon India", "Insights Success"],
  },
  contact_faq: {
    title: "Frequently Asked Questions",
    description: "We are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.",
    items: [
      { q: "What is AI-powered digital marketing?", a: "AI-powered digital marketing uses artificial intelligence to improve and automate marketing tasks. Technologies like machine learning and data analytics help marketers understand customer behaviour, personalize content, optimize campaigns, and make better decisions." },
      { q: "How effective is AI in improving customer targeting and personalization?", a: "AI algorithms can analyze vast datasets to identify granular customer segments and predict their needs. This allows us to deliver highly personalized content and offers at scale, significantly improving engagement and conversion rates compared to traditional targeting methods." },
      { q: "What are the most common AI tools used in digital marketing?", a: "Common tools include predictive analytics platforms, chatbots for customer service, programmatic advertising software, content generation AI (like GPT models), and email marketing automation tools that optimize send times and subject lines." },
      { q: "How to measure the success of AI-powered digital marketing efforts?", a: "Success is measured through key performance indicators (KPIs) such as ROI, customer acquisition cost (CAC), conversion rates, engagement metrics, and customer lifetime value (CLV). AI tools often provide real-time dashboards to track these metrics with high precision." },
    ],
  },
  footer_social: {
    instagram: "https://www.instagram.com/marketingaigency/",
    linkedin: "https://www.linkedin.com/company/marketingaigency/",
    twitter: "https://x.com/MAIgency",
    youtube: "https://www.youtube.com/@MarketingAIgency",
    facebook: "https://www.facebook.com/marketingaigency",
  },
  footer_contact: {
    email: "info@marketingaigency.in",
    phone: "+91 6309966282",
    address: "Flat No. 102, Life Style Building, Plot No 1038 & 1039, 3monkeys circle, Pragathi Nagar, Hyderabad, Telangana 500090",
  },
  footer_banner: {
    title: "It's Time to Market Smarter Not Harder!",
    ctaText: "Talk to Us",
    ctaHref: "/contact",
  },
  footer_copyright: {
    text: "Marketing AI Agency. All rights reserved.",
    developer: "Gopikrishna Malneedi",
  },
};

export async function seedDefaultContent(): Promise<void> {
  for (const [key, value] of Object.entries(DEFAULT_CONTENT)) {
    const existing = await storage.getSiteSetting(key);
    if (!existing) {
      await storage.upsertSiteSetting(key, value);
    }
  }
}
