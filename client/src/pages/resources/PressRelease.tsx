import { BlogSection } from "@/components/ui/blog-section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const pressReleases = [
  {
    title: 'Nexus Digital Expands Operations to Singapore',
    slug: '#',
    description: 'We are thrilled to announce our new regional HQ in Singapore to serve the growing APAC market.',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-09-01',
    author: 'Press Team',
    readTime: 'Announcement',
  },
  {
    title: 'Nexus Named "Agency of the Year" by Digital World',
    slug: '#',
    description: 'Recognized for our innovative AI-driven approach and exceptional client results in 2024.',
    image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-08-15',
    author: 'Press Team',
    readTime: 'Award',
  },
  {
    title: 'Launching "NexusAI": Our Proprietary Marketing Tool',
    slug: '#',
    description: 'Introducing our new AI platform that predicts consumer behavior with 90% accuracy.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-07-01',
    author: 'Product Team',
    readTime: 'Product Launch',
  },
  {
    title: 'Partnership Announcement: Nexus x Google Cloud',
    slug: '#',
    description: 'Strategic partnership to leverage Google Cloud AI capabilities for our enterprise clients.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-06-10',
    author: 'Press Team',
    readTime: 'Partnership',
  }
];

export default function PressRelease() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <BlogSection 
          title="Press Releases" 
          description="Stay updated with the latest news, announcements, and milestones from Nexus Digital."
          posts={pressReleases}
        />
      </main>
      <Footer />
    </div>
  );
}
