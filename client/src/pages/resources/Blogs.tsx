import { BlogSection } from "@/components/ui/blog-section";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const blogs = [
  {
    title: 'The Rise of AI in Digital Marketing',
    slug: '#',
    description: 'How artificial intelligence is reshaping the landscape of digital marketing and customer engagement.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-08-25',
    author: 'Nexus Team',
    readTime: '7 min read',
  },
  {
    title: 'Optimizing for Voice Search in 2025',
    slug: '#',
    description: 'With smart speakers on the rise, learn how to optimize your content for voice search queries.',
    image: 'https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-07-14',
    author: 'Sarah Johnson',
    readTime: '5 min read',
  },
  {
    title: 'The Power of Personalization',
    slug: '#',
    description: 'Why generic marketing is dying and how hyper-personalization drives conversion rates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-06-30',
    author: 'David Chen',
    readTime: '6 min read',
  },
  {
    title: 'Video Marketing Trends to Watch',
    slug: '#',
    description: 'Short-form video is king. Discover how to leverage TikTok and Reels for your brand.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-06-18',
    author: 'Emma Wilson',
    readTime: '8 min read',
  },
  {
    title: 'Building a Sustainable Brand',
    slug: '#',
    description: 'Consumers care about ethics. How to build a brand that stands for more than just profit.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-05-20',
    author: 'Michael Brown',
    readTime: '4 min read',
  },
  {
    title: 'Data Privacy in the Digital Age',
    slug: '#',
    description: 'Navigating the complex world of data privacy regulations while still delivering personalized experiences.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000',
    createdAt: '2025-05-02',
    author: 'Lisa Wang',
    readTime: '9 min read',
  }
];

export default function Blogs() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-12">
        <BlogSection 
          title="Our Blog" 
          description="Insights, trends, and strategies from the forefront of digital innovation."
          posts={blogs}
        />
      </main>
      <Footer />
    </div>
  );
}
