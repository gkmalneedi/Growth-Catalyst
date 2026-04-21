import { sql } from "drizzle-orm";
import { pgTable, text, varchar, serial, integer, boolean, json, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// ── Existing tables ──────────────────────────────────────────────────────────

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  category: text("category").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  image: text("image").notNull(),
  createdAt: text("created_at").notNull(),
  author: text("author").notNull(),
  readTime: text("read_time").notNull(),
  featured: boolean("featured").default(false),
});

export const caseStudies = pgTable("case_studies", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  client: text("client").notNull(),
  category: text("category").notNull(),
  date: text("date").notNull(),
  stats: json("stats").$type<{ label: string; value: string }[]>().notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  image: text("image").notNull(),
  color: text("color").notNull(),
});

export const pressReleases = pgTable("press_releases", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  category: text("category").notNull(),
  source: text("source").notNull(),
  description: text("description").notNull(),
  content: text("content").notNull(),
  date: text("date").notNull(),
  year: text("year").notNull(),
  link: text("link").notNull(),
});

export const contactSubmissions = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  service: text("service").notNull(),
  message: text("message"),
  submittedAt: timestamp("submitted_at").defaultNow(),
});

export const newsletterSubscribers = pgTable("newsletter_subscribers", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscribedAt: timestamp("subscribed_at").defaultNow(),
});

// ── New CMS tables ────────────────────────────────────────────────────────────

export const services = pgTable("services", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  iconName: text("icon_name").notNull().default("zap"),
  stats: json("stats").$type<{ value: string; label: string }[]>().default([]),
  benefits: json("benefits").$type<{ title: string; desc: string }[]>().notNull().default([]),
  process: json("process").$type<{ title: string; desc: string }[]>().notNull().default([]),
  redefined: json("redefined").$type<{ title: string; desc: string } | null>().default(null),
  displayOrder: integer("display_order").default(0),
  active: boolean("active").default(true),
});

export const industries = pgTable("industries", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  description: text("description").notNull().default(""),
  iconName: text("icon_name").notNull().default("briefcase"),
  displayOrder: integer("display_order").default(0),
  active: boolean("active").default(true),
});

export const portfolioItems = pgTable("portfolio_items", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  client: text("client").notNull(),
  clientColor: text("client_color").notNull().default("text-pink-500"),
  category: text("category").notNull(),
  industry: text("industry").notNull(),
  headline: text("headline").notNull(),
  tagline: text("tagline").notNull(),
  heroImage: text("hero_image").notNull(),
  coverImage: text("cover_image").notNull(),
  overview: text("overview").notNull(),
  challenge: text("challenge").notNull(),
  approach: json("approach").$type<string[]>().notNull().default([]),
  results: json("results").$type<{ value: string; label: string }[]>().notNull().default([]),
  projectServices: json("project_services").$type<string[]>().notNull().default([]),
  duration: text("duration").notNull(),
  displayOrder: integer("display_order").default(0),
  active: boolean("active").default(true),
});

export const siteSettings = pgTable("site_settings", {
  id: serial("id").primaryKey(),
  key: text("key").notNull().unique(),
  value: json("value").notNull(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// ── Insert schemas ────────────────────────────────────────────────────────────

export const insertBlogSchema = createInsertSchema(blogs).omit({ id: true });
export const insertCaseStudySchema = createInsertSchema(caseStudies).omit({ id: true });
export const insertPressReleaseSchema = createInsertSchema(pressReleases).omit({ id: true });
export const insertContactSubmissionSchema = createInsertSchema(contactSubmissions).omit({ id: true, submittedAt: true });
export const insertNewsletterSubscriberSchema = createInsertSchema(newsletterSubscribers).omit({ id: true, subscribedAt: true });
export const insertServiceSchema = createInsertSchema(services).omit({ id: true });
export const insertIndustrySchema = createInsertSchema(industries).omit({ id: true });
export const insertPortfolioItemSchema = createInsertSchema(portfolioItems).omit({ id: true });
export const insertSiteSettingSchema = createInsertSchema(siteSettings).omit({ id: true, updatedAt: true });

// ── Types ─────────────────────────────────────────────────────────────────────

export type Blog = typeof blogs.$inferSelect;
export type InsertBlog = z.infer<typeof insertBlogSchema>;
export type CaseStudy = typeof caseStudies.$inferSelect;
export type InsertCaseStudy = z.infer<typeof insertCaseStudySchema>;
export type PressRelease = typeof pressReleases.$inferSelect;
export type InsertPressRelease = z.infer<typeof insertPressReleaseSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;
export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
export type NewsletterSubscriber = typeof newsletterSubscribers.$inferSelect;
export type InsertNewsletterSubscriber = z.infer<typeof insertNewsletterSubscriberSchema>;
export type Service = typeof services.$inferSelect;
export type InsertService = z.infer<typeof insertServiceSchema>;
export type Industry = typeof industries.$inferSelect;
export type InsertIndustry = z.infer<typeof insertIndustrySchema>;
export type PortfolioItem = typeof portfolioItems.$inferSelect;
export type InsertPortfolioItem = z.infer<typeof insertPortfolioItemSchema>;
export type SiteSetting = typeof siteSettings.$inferSelect;
export type InsertSiteSetting = z.infer<typeof insertSiteSettingSchema>;
