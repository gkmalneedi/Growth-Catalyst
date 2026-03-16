import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import healthcareImg from "@assets/generated_images/doctor_holding_stethoscope_for_healthcare_industry.png";
import educationImg from "@assets/generated_images/stack_of_books_for_education_industry.png";
import realEstateImg from "@assets/generated_images/modern_architectural_house_for_real_estate.png";
import ecommerceImg from "@assets/generated_images/ecommerce_online_shopping_concept.png";
import fintechImg from "@assets/generated_images/fintech_industry_concept.png";
import hospitalityImg from "@assets/generated_images/hospitality_luxury_hotel_lobby.png";
import fmcgImg from "@assets/generated_images/fmcg_consumer_goods_display.png";
import retailImg from "@assets/generated_images/retail_shopping_store_interior.png";
import agricultureImg from "@assets/generated_images/agriculture_modern_farmland.png";
import itImg from "@assets/generated_images/information_technology_data_center.png";

const industries = [
  { title: "Ecommerce", href: "/industries/ecommerce", img: ecommerceImg, desc: "Driving online sales and customer engagement through data-driven strategies" },
  { title: "Healthcare", href: "/industries/healthcare", img: healthcareImg, desc: "Bridging the gap between healthcare with patients through digital excellence" },
  { title: "Information Technology", href: "/industries/information-technology", img: itImg, desc: "Empowering tech companies with cutting-edge digital marketing solutions" },
  { title: "Education", href: "/industries/education", img: educationImg, desc: "Strategically boosting educational engagement with digital innovations" },
  { title: "Hospitality", href: "/industries/hospitality", img: hospitalityImg, desc: "Elevating guest experiences through powerful digital presence" },
  { title: "FMCG", href: "/industries/fmcg", img: fmcgImg, desc: "Accelerating consumer goods growth with targeted digital campaigns" },
  { title: "Real Estate", href: "/industries/real-estate", img: realEstateImg, desc: "Leading the digital frontier in real estate marketing" },
  { title: "Retail", href: "/industries/retail", img: retailImg, desc: "Transforming retail experiences with omnichannel digital strategies" },
  { title: "Fintech", href: "/industries/fintech", img: fintechImg, desc: "Driving financial innovation through strategic digital growth" },
  { title: "Agriculture", href: "/industries/agriculture", img: agricultureImg, desc: "Modernizing agriculture marketing with digital-first approaches" },
];

export function IndustriesSlider() {
  return (
    <section className="py-24 bg-zinc-950 text-white section-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold max-w-2xl">
            No Matter Which Industry You Belong to, We've Got You Covered
          </h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex justify-end mb-8 gap-3">
            <CarouselPrevious className="static translate-y-0 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white h-10 w-10" />
            <CarouselNext className="static translate-y-0 rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white h-10 w-10" />
          </div>
          <CarouselContent className="-ml-4">
            {industries.map((industry) => (
              <CarouselItem key={industry.title} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Link href={industry.href}>
                  <div className="group cursor-pointer" data-testid={`industry-card-${industry.title.toLowerCase().replace(/\s+/g, '-')}`}>
                    <div className="rounded-xl overflow-hidden mb-6 aspect-[4/3]">
                      <img
                        src={industry.img}
                        alt={industry.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">{industry.title}</h3>
                    <p className="text-muted-foreground text-sm">{industry.desc}</p>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
