import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertContactSubmissionSchema,
  insertNewsletterSubscriberSchema,
  insertBlogSchema,
  insertCaseStudySchema,
  insertPressReleaseSchema,
  insertServiceSchema,
  insertIndustrySchema,
  insertPortfolioItemSchema,
} from "@shared/schema";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "MAI@Admin2025";

function adminAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers["x-admin-password"] as string;
  if (!auth || auth !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
}

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {

  // ── Admin login check ────────────────────────────────────────────────────
  app.post("/api/admin/login", (req, res) => {
    const { password } = req.body;
    if (password === ADMIN_PASSWORD) {
      res.json({ success: true, token: ADMIN_PASSWORD });
    } else {
      res.status(401).json({ success: false, message: "Invalid password" });
    }
  });

  // ── Public: Blogs ────────────────────────────────────────────────────────
  app.get("/api/blogs", async (_req, res) => {
    try { res.json(await storage.getBlogs()); }
    catch { res.status(500).json({ message: "Failed to fetch blogs" }); }
  });
  app.get("/api/blogs/:slug", async (req, res) => {
    try {
      const blog = await storage.getBlogBySlug(req.params.slug);
      if (!blog) return res.status(404).json({ message: "Blog not found" });
      res.json(blog);
    } catch { res.status(500).json({ message: "Failed to fetch blog" }); }
  });

  // ── Admin: Blogs CRUD ────────────────────────────────────────────────────
  app.post("/api/admin/blogs", adminAuth, async (req, res) => {
    const parsed = insertBlogSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid data", errors: parsed.error.flatten() });
    try { res.status(201).json(await storage.createBlog(parsed.data)); }
    catch { res.status(500).json({ message: "Failed to create blog" }); }
  });
  app.put("/api/admin/blogs/:id", adminAuth, async (req, res) => {
    try { res.json(await storage.updateBlog(Number(req.params.id), req.body)); }
    catch { res.status(500).json({ message: "Failed to update blog" }); }
  });
  app.delete("/api/admin/blogs/:id", adminAuth, async (req, res) => {
    try { await storage.deleteBlog(Number(req.params.id)); res.json({ success: true }); }
    catch { res.status(500).json({ message: "Failed to delete blog" }); }
  });

  // ── Public: Case Studies ──────────────────────────────────────────────────
  app.get("/api/case-studies", async (_req, res) => {
    try { res.json(await storage.getCaseStudies()); }
    catch { res.status(500).json({ message: "Failed to fetch case studies" }); }
  });
  app.get("/api/case-studies/:slug", async (req, res) => {
    try {
      const cs = await storage.getCaseStudyBySlug(req.params.slug);
      if (!cs) return res.status(404).json({ message: "Case study not found" });
      res.json(cs);
    } catch { res.status(500).json({ message: "Failed to fetch case study" }); }
  });

  // ── Admin: Case Studies CRUD ─────────────────────────────────────────────
  app.post("/api/admin/case-studies", adminAuth, async (req, res) => {
    const parsed = insertCaseStudySchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid data", errors: parsed.error.flatten() });
    try { res.status(201).json(await storage.createCaseStudy(parsed.data)); }
    catch { res.status(500).json({ message: "Failed to create case study" }); }
  });
  app.put("/api/admin/case-studies/:id", adminAuth, async (req, res) => {
    try { res.json(await storage.updateCaseStudy(Number(req.params.id), req.body)); }
    catch { res.status(500).json({ message: "Failed to update case study" }); }
  });
  app.delete("/api/admin/case-studies/:id", adminAuth, async (req, res) => {
    try { await storage.deleteCaseStudy(Number(req.params.id)); res.json({ success: true }); }
    catch { res.status(500).json({ message: "Failed to delete case study" }); }
  });

  // ── Public: Press Releases ─────────────────────────────────────────────────
  app.get("/api/press-releases", async (_req, res) => {
    try { res.json(await storage.getPressReleases()); }
    catch { res.status(500).json({ message: "Failed to fetch press releases" }); }
  });
  app.get("/api/press-releases/:slug", async (req, res) => {
    try {
      const pr = await storage.getPressReleaseBySlug(req.params.slug);
      if (!pr) return res.status(404).json({ message: "Press release not found" });
      res.json(pr);
    } catch { res.status(500).json({ message: "Failed to fetch press release" }); }
  });

  // ── Admin: Press Releases CRUD ───────────────────────────────────────────
  app.post("/api/admin/press-releases", adminAuth, async (req, res) => {
    const parsed = insertPressReleaseSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ message: "Invalid data", errors: parsed.error.flatten() });
    try { res.status(201).json(await storage.createPressRelease(parsed.data)); }
    catch { res.status(500).json({ message: "Failed to create press release" }); }
  });
  app.put("/api/admin/press-releases/:id", adminAuth, async (req, res) => {
    try { res.json(await storage.updatePressRelease(Number(req.params.id), req.body)); }
    catch { res.status(500).json({ message: "Failed to update press release" }); }
  });
  app.delete("/api/admin/press-releases/:id", adminAuth, async (req, res) => {
    try { await storage.deletePressRelease(Number(req.params.id)); res.json({ success: true }); }
    catch { res.status(500).json({ message: "Failed to delete press release" }); }
  });

  // ── Public: Services ─────────────────────────────────────────────────────
  app.get("/api/services", async (_req, res) => {
    try { res.json(await storage.getServices()); }
    catch { res.status(500).json({ message: "Failed to fetch services" }); }
  });
  app.get("/api/services/:slug", async (req, res) => {
    try {
      const s = await storage.getServiceBySlug(req.params.slug);
      if (!s) return res.status(404).json({ message: "Service not found" });
      res.json(s);
    } catch { res.status(500).json({ message: "Failed to fetch service" }); }
  });

  // ── Admin: Services CRUD ─────────────────────────────────────────────────
  app.post("/api/admin/services", adminAuth, async (req, res) => {
    try { res.status(201).json(await storage.createService(req.body)); }
    catch { res.status(500).json({ message: "Failed to create service" }); }
  });
  app.put("/api/admin/services/:id", adminAuth, async (req, res) => {
    try { res.json(await storage.updateService(Number(req.params.id), req.body)); }
    catch { res.status(500).json({ message: "Failed to update service" }); }
  });
  app.delete("/api/admin/services/:id", adminAuth, async (req, res) => {
    try { await storage.deleteService(Number(req.params.id)); res.json({ success: true }); }
    catch { res.status(500).json({ message: "Failed to delete service" }); }
  });

  // ── Public: Industries ───────────────────────────────────────────────────
  app.get("/api/industries", async (_req, res) => {
    try { res.json(await storage.getIndustries()); }
    catch { res.status(500).json({ message: "Failed to fetch industries" }); }
  });
  app.get("/api/industries/:slug", async (req, res) => {
    try {
      const i = await storage.getIndustryBySlug(req.params.slug);
      if (!i) return res.status(404).json({ message: "Industry not found" });
      res.json(i);
    } catch { res.status(500).json({ message: "Failed to fetch industry" }); }
  });

  // ── Admin: Industries CRUD ───────────────────────────────────────────────
  app.post("/api/admin/industries", adminAuth, async (req, res) => {
    try { res.status(201).json(await storage.createIndustry(req.body)); }
    catch { res.status(500).json({ message: "Failed to create industry" }); }
  });
  app.put("/api/admin/industries/:id", adminAuth, async (req, res) => {
    try { res.json(await storage.updateIndustry(Number(req.params.id), req.body)); }
    catch { res.status(500).json({ message: "Failed to update industry" }); }
  });
  app.delete("/api/admin/industries/:id", adminAuth, async (req, res) => {
    try { await storage.deleteIndustry(Number(req.params.id)); res.json({ success: true }); }
    catch { res.status(500).json({ message: "Failed to delete industry" }); }
  });

  // ── Public: Portfolio ────────────────────────────────────────────────────
  app.get("/api/portfolio", async (_req, res) => {
    try { res.json(await storage.getPortfolioItems()); }
    catch { res.status(500).json({ message: "Failed to fetch portfolio" }); }
  });
  app.get("/api/portfolio/:slug", async (req, res) => {
    try {
      const p = await storage.getPortfolioItemBySlug(req.params.slug);
      if (!p) return res.status(404).json({ message: "Portfolio item not found" });
      res.json(p);
    } catch { res.status(500).json({ message: "Failed to fetch portfolio item" }); }
  });

  // ── Admin: Portfolio CRUD ─────────────────────────────────────────────────
  app.post("/api/admin/portfolio", adminAuth, async (req, res) => {
    try { res.status(201).json(await storage.createPortfolioItem(req.body)); }
    catch { res.status(500).json({ message: "Failed to create portfolio item" }); }
  });
  app.put("/api/admin/portfolio/:id", adminAuth, async (req, res) => {
    try { res.json(await storage.updatePortfolioItem(Number(req.params.id), req.body)); }
    catch { res.status(500).json({ message: "Failed to update portfolio item" }); }
  });
  app.delete("/api/admin/portfolio/:id", adminAuth, async (req, res) => {
    try { await storage.deletePortfolioItem(Number(req.params.id)); res.json({ success: true }); }
    catch { res.status(500).json({ message: "Failed to delete portfolio item" }); }
  });

  // ── Site Settings ─────────────────────────────────────────────────────────
  app.get("/api/site-settings", async (_req, res) => {
    try {
      const settings = await storage.getSiteSettings();
      const map: Record<string, any> = {};
      settings.forEach(s => { map[s.key] = s.value; });
      res.json(map);
    } catch { res.status(500).json({ message: "Failed to fetch settings" }); }
  });
  app.put("/api/admin/site-settings/:key", adminAuth, async (req, res) => {
    try {
      const result = await storage.upsertSiteSetting(req.params.key, req.body.value);
      res.json(result);
    } catch { res.status(500).json({ message: "Failed to update setting" }); }
  });

  // ── Admin: Contact Submissions (read only) ────────────────────────────────
  app.get("/api/admin/submissions", adminAuth, async (_req, res) => {
    try { res.json(await storage.getContactSubmissions()); }
    catch { res.status(500).json({ message: "Failed to fetch submissions" }); }
  });

  // ── Public: Contact & Newsletter ──────────────────────────────────────────
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactSubmissionSchema.safeParse(req.body);
      if (!parsed.success) return res.status(400).json({ message: "Invalid submission data", errors: parsed.error.flatten() });
      const submission = await storage.createContactSubmission(parsed.data);
      res.status(201).json(submission);
    } catch { res.status(500).json({ message: "Failed to submit contact form" }); }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const parsed = insertNewsletterSubscriberSchema.safeParse(req.body);
      if (!parsed.success) return res.status(400).json({ message: "Invalid email", errors: parsed.error.flatten() });
      const subscriber = await storage.createNewsletterSubscriber(parsed.data);
      res.status(201).json(subscriber);
    } catch (error: any) {
      if (error?.code === "23505") return res.status(409).json({ message: "Email already subscribed" });
      res.status(500).json({ message: "Failed to subscribe" });
    }
  });

  return httpServer;
}
