# Nexus Digital Marketing Website

## Overview
A full-stack digital marketing agency website built with React + Express + PostgreSQL. Features a dark theme with glassmorphism effects, purple-to-pink gradients, and smooth Framer Motion animations.

## Tech Stack
- **Frontend**: React 19, Vite, Tailwind CSS v4, Framer Motion, Wouter routing, TanStack Query
- **Backend**: Express.js, Drizzle ORM, PostgreSQL
- **Shared**: Drizzle-Zod schemas for type safety between client/server

## Architecture
- `client/` - React frontend (Vite)
- `server/` - Express backend (routes, storage, db connection)
- `shared/schema.ts` - Data models (Drizzle tables + Zod insert schemas)
- `client/src/lib/data.ts` - Static service/industry navigation data (not in DB)
- `client/src/lib/mockData.ts` - Legacy mock data (no longer imported by pages)

## Database Tables
- `blogs` - Blog posts with slug, category, content, featured flag
- `case_studies` - Client case studies with stats (JSON), gradient color
- `press_releases` - Press releases with source, year
- `contact_submissions` - Contact form entries (name, email, phone, service, message)
- `newsletter_subscribers` - Email newsletter subscriptions (unique email)

## API Routes
- `GET /api/blogs` - List all blogs
- `GET /api/blogs/:slug` - Get blog by slug
- `GET /api/case-studies` - List all case studies
- `GET /api/case-studies/:slug` - Get case study by slug
- `GET /api/press-releases` - List all press releases
- `GET /api/press-releases/:slug` - Get press release by slug
- `POST /api/contact` - Submit contact form
- `POST /api/newsletter` - Subscribe to newsletter

## Pages
- Home (`/`)
- About (`/about`)
- Contact (`/contact`) - Live form submission to DB
- Services (`/services/:slug`) - Template-based service pages
- Industries (`/industries/:slug`) - Template-based industry pages
- Blogs (`/resources/blogs`) - Fetches from API
- Case Studies (`/resources/case-studies`) - Fetches from API
- Press Release (`/resources/press-release`) - Fetches from API + newsletter
- Resource Detail (`/resources/:type/:slug`) - Individual content pages from API

## Design System
- Purple-to-pink gradient: `from-purple-500 to-pink-500` (buttons), `from-purple-400 to-pink-400` (text)
- `.bg-solid-white` CSS class for actual white backgrounds (global `.bg-white` overridden to `!bg-white/5`)
- `inline-flex` for pill-shaped buttons with centered text
- All nav menu items have permanent gradient text
- Footer "Market Smarter" banner hidden on `/industries/` pages via `useLocation()`

## Commands
- `npm run dev` - Start dev server (Express + Vite)
- `npm run db:push` - Push schema changes to database
- `npx tsx server/seed.ts` - Seed database with initial data
