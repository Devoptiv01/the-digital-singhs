import ProjectsSlider from "@/components/home/ProjectsSlider";
import BlogPostGrid from "@/components/main/BlogPostGrid";
import BusinessGrowth from "@/components/main/BusinessGrowth";
import CaseStudy from "@/components/main/CaseStudy";
import ContactSection from "@/components/main/ContactSection";
import HeroSection from "@/components/main/HeroSection";
import OurServices from "@/components/main/OurServices";
import PortfolioGrid from "@/components/main/PortfolioGrid";
import Testimonials from "@/components/main/Testimonials";
import WhyChooseUs from "@/components/main/WhyChooseUs";

export default function Home() {
  return (<div className="">
    <div className="w-full bg-gray-50 py-2 md:py-5 overflow-hidden">
    <HeroSection/>
    </div>
    
  <OurServices/>
  <BusinessGrowth/>
  <WhyChooseUs/>
  <PortfolioGrid/>
  <Testimonials/>
  <CaseStudy/>
  <BlogPostGrid/>
  <ContactSection/>
  </div>)
}
