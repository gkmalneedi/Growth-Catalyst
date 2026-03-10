import { eq } from "drizzle-orm";
import { db } from "./db";
import {
  blogs, caseStudies, pressReleases, contactSubmissions, newsletterSubscribers,
  type Blog, type InsertBlog,
  type CaseStudy, type InsertCaseStudy,
  type PressRelease, type InsertPressRelease,
  type ContactSubmission, type InsertContactSubmission,
  type NewsletterSubscriber, type InsertNewsletterSubscriber,
} from "@shared/schema";

export interface IStorage {
  getBlogs(): Promise<Blog[]>;
  getBlogBySlug(slug: string): Promise<Blog | undefined>;
  createBlog(blog: InsertBlog): Promise<Blog>;

  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined>;
  createCaseStudy(cs: InsertCaseStudy): Promise<CaseStudy>;

  getPressReleases(): Promise<PressRelease[]>;
  getPressReleaseBySlug(slug: string): Promise<PressRelease | undefined>;
  createPressRelease(pr: InsertPressRelease): Promise<PressRelease>;

  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;

  createNewsletterSubscriber(sub: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
}

export class DatabaseStorage implements IStorage {
  async getBlogs(): Promise<Blog[]> {
    return db.select().from(blogs);
  }

  async getBlogBySlug(slug: string): Promise<Blog | undefined> {
    const [blog] = await db.select().from(blogs).where(eq(blogs.slug, slug));
    return blog;
  }

  async createBlog(blog: InsertBlog): Promise<Blog> {
    const [created] = await db.insert(blogs).values(blog).returning();
    return created;
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return db.select().from(caseStudies);
  }

  async getCaseStudyBySlug(slug: string): Promise<CaseStudy | undefined> {
    const [cs] = await db.select().from(caseStudies).where(eq(caseStudies.slug, slug));
    return cs;
  }

  async createCaseStudy(cs: InsertCaseStudy): Promise<CaseStudy> {
    const [created] = await db.insert(caseStudies).values(cs).returning();
    return created;
  }

  async getPressReleases(): Promise<PressRelease[]> {
    return db.select().from(pressReleases);
  }

  async getPressReleaseBySlug(slug: string): Promise<PressRelease | undefined> {
    const [pr] = await db.select().from(pressReleases).where(eq(pressReleases.slug, slug));
    return pr;
  }

  async createPressRelease(pr: InsertPressRelease): Promise<PressRelease> {
    const [created] = await db.insert(pressReleases).values(pr).returning();
    return created;
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const [created] = await db.insert(contactSubmissions).values(submission).returning();
    return created;
  }

  async createNewsletterSubscriber(sub: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const [created] = await db.insert(newsletterSubscribers).values(sub).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();
