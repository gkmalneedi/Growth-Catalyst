import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertContactSubmissionSchema,
  insertNewsletterSubscriberSchema,
} from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.get("/api/blogs", async (_req, res) => {
    try {
      const blogs = await storage.getBlogs();
      res.json(blogs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blogs" });
    }
  });

  app.get("/api/blogs/:slug", async (req, res) => {
    try {
      const blog = await storage.getBlogBySlug(req.params.slug);
      if (!blog) return res.status(404).json({ message: "Blog not found" });
      res.json(blog);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog" });
    }
  });

  app.get("/api/case-studies", async (_req, res) => {
    try {
      const caseStudies = await storage.getCaseStudies();
      res.json(caseStudies);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch case studies" });
    }
  });

  app.get("/api/case-studies/:slug", async (req, res) => {
    try {
      const cs = await storage.getCaseStudyBySlug(req.params.slug);
      if (!cs) return res.status(404).json({ message: "Case study not found" });
      res.json(cs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch case study" });
    }
  });

  app.get("/api/press-releases", async (_req, res) => {
    try {
      const prs = await storage.getPressReleases();
      res.json(prs);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch press releases" });
    }
  });

  app.get("/api/press-releases/:slug", async (req, res) => {
    try {
      const pr = await storage.getPressReleaseBySlug(req.params.slug);
      if (!pr) return res.status(404).json({ message: "Press release not found" });
      res.json(pr);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch press release" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactSubmissionSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid submission data", errors: parsed.error.flatten() });
      }
      const submission = await storage.createContactSubmission(parsed.data);
      res.status(201).json(submission);
    } catch (error) {
      res.status(500).json({ message: "Failed to submit contact form" });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const parsed = insertNewsletterSubscriberSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ message: "Invalid email", errors: parsed.error.flatten() });
      }
      const subscriber = await storage.createNewsletterSubscriber(parsed.data);
      res.status(201).json(subscriber);
    } catch (error: any) {
      if (error?.code === "23505") {
        return res.status(409).json({ message: "Email already subscribed" });
      }
      res.status(500).json({ message: "Failed to subscribe" });
    }
  });

  return httpServer;
}
