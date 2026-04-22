# Nexus / MAI Digital Marketing Website

## Overview
A full-stack digital marketing agency website (marketingaigency.in) built with React + Express + PostgreSQL. Features a dark glassmorphism theme with smooth Framer Motion animations. Uses a 6-color brand gradient palette: Dark Pink #C13584, Rose #E1306C, Red #FD1D1D, Dark Orange #F56040, Orange #F77737, Yellow #FCAF45 — defined as Tailwind theme colors (`brand-pink`, `brand-rose`, `brand-red`, `brand-orange-dark`, `brand-orange`, `brand-yellow`).

## Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS v4, Framer Motion, Wouter routing, TanStack Query
- **Backend**: Express.js, Drizzle ORM, PostgreSQL
- **Shared**: Drizzle-Zod schemas for type safety between client/server

## Architecture
- `client/` - React frontend (Vite)
- `server/` - Express backend (routes, storage, db connection)
- `shared/schema.ts` - Data models (Drizzle tables + Zod insert schemas)
- `client/src/lib/data.ts` - Hardcoded service/industry fallback lists
- `client/src/lib/portfolioData.ts` - Hardcoded portfolio fallback data
- `client/src/lib/iconResolver.tsx` - Maps icon name strings → Lucide components

## Database Tables
- `services` - Service pages (slug, title, description, iconName, stats, benefits, process, redefined, faqs, displayOrder, active)
- `industries` - Industry pages (slug, title, description, iconName, imageKey, heroStats, faqs, precisionText, displayOrder, active)
- `portfolio` - Portfolio case studies (slug, client, headline, results[], approach[], projectServices, etc.)
- `blogs` - Blog posts with slug, category, content, featured flag
- `case_studies` - Client case studies with stats (JSON), gradient color
- `press_releases` - Press releases with source, year
- `site_settings` - Key-value store for global site content (contact_info, home_stats, about_stats)
- `contact_submissions` - Contact form entries (name, email, phone, service, message)
- `newsletter_subscribers` - Email newsletter subscriptions

## Admin Panel
- Route: `/admin`
- Password: `MAI@Admin2025` (or `ADMIN_PASSWORD` env var)
- Auth: `x-admin-password` header sent on every admin API call
- Sections: Dashboard, Services, Industries, Portfolio, Blogs, Case Studies, Press Releases, Site Settings, Contact Submissions
- All website content is fully editable from the admin — including nested JSON (stats, benefits, process, FAQs, approach steps, results)
- Adding a new service or industry automatically creates its live page (no code changes needed)

## API Routes
### Public
- `GET /api/services` — List all services
- `GET /api/services/:slug` — Get service by slug
- `GET /api/industries` — List all industries
- `GET /api/industries/:slug` — Get industry by slug
- `GET /api/portfolio` — List all portfolio items
- `GET /api/portfolio/:slug` — Get portfolio item by slug
- `GET /api/blogs` — List all blogs
- `GET /api/blogs/:slug` — Get blog by slug
- `GET /api/case-studies` — List all case studies
- `GET /api/case-studies/:slug` — Get case study by slug
- `GET /api/press-releases` — List all press releases
- `GET /api/press-releases/:slug` — Get press release by slug
- `GET /api/site-settings` — Get all site settings as key-value map
- `POST /api/contact` — Submit contact form
- `POST /api/newsletter` — Subscribe to newsletter

### Admin (require `x-admin-password` header)
- `POST /api/admin/login` — Verify password
- `POST/PUT/DELETE /api/admin/services/:id` — CRUD services
- `POST/PUT/DELETE /api/admin/industries/:id` — CRUD industries
- `POST/PUT/DELETE /api/admin/portfolio/:id` — CRUD portfolio
- `POST/PUT/DELETE /api/admin/blogs/:id` — CRUD blogs
- `POST/PUT/DELETE /api/admin/case-studies/:id` — CRUD case studies
- `POST/PUT/DELETE /api/admin/press-releases/:id` — CRUD press releases
- `PUT /api/admin/site-settings/:key` — Update site setting
- `GET /api/admin/submissions` — View contact submissions

## Key Design Decisions
- All public pages (Service, Industry, Portfolio, Portfolio Detail) load data from API via React Query with hardcoded fallbacks
- Navbar loads services/industries dynamically from API
- IndustriesSlider loads industries from API; uses static image map keyed by `imageKey` column
- Images are statically imported from `client/src/assets/generated_images/`; DB stores string keys that map to images
- Icon names are stored as strings in DB; `iconResolver.tsx` maps them to Lucide components
- Services/Industries support `active` flag and `displayOrder` for admin-controlled visibility
