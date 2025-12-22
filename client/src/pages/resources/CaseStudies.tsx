import { BlogSection } from "@/components/ui/blog-section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const caseStudies = [
  {
    title: 'Fintech Revolution: scaling User Base by 300%',
    slug: '#',
    description: 'How we helped a fintech startup acquire 100k users in 6 months through targeted paid acquisition.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-08-10',
    author: 'Nexus Strategy',
    readTime: 'Case Study',
  },
  {
    title: 'E-commerce Redesign: Boosting Conversion by 45%',
    slug: '#',
    description: 'A complete UI/UX overhaul for a fashion retailer that resulted in record-breaking holiday sales.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-07-22',
    author: 'Nexus Design',
    readTime: 'Case Study',
  },
  {
    title: 'Healthcare SEO: dominating Local Search',
    slug: '#',
    description: 'Helping a network of clinics rank #1 for high-value keywords in competitive metropolitan areas.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-06-15',
    author: 'Nexus SEO',
    readTime: 'Case Study',
  },
  {
    title: 'SaaS B2B Lead Gen: Automating the Funnel',
    slug: '#',
    description: 'Implementing HubSpot automation to nurture leads and shorten the sales cycle for an enterprise SaaS.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-05-28',
    author: 'Nexus Automation',
    readTime: 'Case Study',
  },
  {
    title: 'Educational EdTech: Viral Social Campaign',
    slug: '#',
    description: 'Creating a student-centric social media campaign that generated 5M+ impressions organically.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-04-10',
    author: 'Nexus Social',
    readTime: 'Case Study',
  },
  {
    title: 'Real Estate Branding: Launching a Luxury Development',
    slug: '#',
    description: 'End-to-end brand identity and digital launch for a premium residential tower in Dubai.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-03-05',
    author: 'Nexus Branding',
    readTime: 'Case Study',
  }
];

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <BlogSection 
          title="Case Studies" 
          description="Real results, real growth. See how we've transformed businesses across industries."
          posts={caseStudies}
        />
      </main>
      <Footer />
    </div>
  );
}
