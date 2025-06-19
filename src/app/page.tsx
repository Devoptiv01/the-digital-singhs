import BackgroundBeamsWithCollision from "@/components/animation/background/BackgroundBeamsWithCollision";
import ProjectsSlider from "@/components/home/ProjectsSlider";
import BlogPostGrid from "@/components/main/BlogPostGrid";
import BusinessGrowth from "@/components/main/BusinessGrowth";
import CaseStudy from "@/components/main/CaseStudy";
import ContactSection from "@/components/main/ContactSection";
import HeroSection from "@/components/main/HeroSection";
import OurServices from "@/components/main/OurServices";
import PortfolioGrid from "@/components/main/PortfolioGrid";
import SocialMediaShowcase from "@/components/main/SocialMediaShowcase";
import Testimonials from "@/components/main/Testimonials";
import WhyChooseUs from "@/components/main/WhyChooseUs";

export default function Home() {
  return (
    <div className="relative z-10 bg-gradient-to-br from-slate-950 via-black to-gray-950">
        {/* <div className="w-full overflow-hidden">
      <HeroSection 
      video="/videos/video-01.mp4"
      img=""
      />
      </div> */}
      <BackgroundBeamsWithCollision className="min-h-screen h-full">
        <SocialMediaShowcase />
    </BackgroundBeamsWithCollision>
        <OurServices />
        <BusinessGrowth />
        <WhyChooseUs />
        <PortfolioGrid />
        <Testimonials />
        <CaseStudy />
        {/* <BlogPostGrid/> */}
        <ContactSection />
      </div>
  );
}
