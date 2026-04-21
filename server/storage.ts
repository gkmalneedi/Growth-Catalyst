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
