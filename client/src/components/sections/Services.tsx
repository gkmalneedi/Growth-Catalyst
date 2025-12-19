import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import brandImg from "@assets/generated_images/abstract_3d_colorful_shape_for_branding.png";
import marketingImg from "@assets/generated_images/digital_waves_data_visualization_for_marketing.png";
import webImg from "@assets/generated_images/isometric_code_structure_for_web_dev.png";
import aiImg from "@assets/generated_images/glowing_neural_network_for_ai_agents.png";

const services = [
  {
    title: "Brand Creation",
    description: "We forge unique identities that resonate. From strategy to visual language, we build brands that stand the test of time.",
    image: brandImg,
    tags: ["Identity", "Strategy", "Visual Design"]
  },
  {
    title: "Digital Marketing",
    description: "Data-driven campaigns that convert. We leverage the latest tools to reach your audience where they are.",
    image: marketingImg,
    tags: ["SEO", "Social Media", "Analytics"]
  },
  {
    title: "Website Development",
    description: "Cutting-edge web solutions built on modern stacks. Fast, secure, and beautiful websites that perform.",
    image: webImg,
    tags: ["React", "Full Stack", "Performance"]
  },
  {
    title: "AI Agents",
    description: "Automate your growth. We deploy custom AI agents to handle customer service, lead gen, and operations.",
    image: aiImg,
    tags: ["Automation", "LLMs", "Efficiency"]
  }
];

export function Services() {
  return (
    <section className="py-24 bg-background relative z-10" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Our Expertise</h2>
          <p className="text-muted-foreground text-lg">
            We offer a comprehensive suite of services designed to accelerate your business in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="group overflow-hidden border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 h-full flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                  <div className="flex gap-2 mt-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-xs uppercase tracking-wider px-2 py-1 rounded bg-white/5 text-primary-foreground/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <CardDescription className="text-base mb-6">
                    {service.description}
                  </CardDescription>
                  <Button variant="ghost" className="w-fit p-0 hover:bg-transparent hover:text-primary group-hover:translate-x-2 transition-transform">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
