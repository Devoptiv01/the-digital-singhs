import BlogPostGrid from "@/componets/main/BlogPostGrid";
import BusinessGrowth from "@/componets/main/BusinessGrowth";
import CaseStudy from "@/componets/main/CaseStudy";
import ContactSection from "@/componets/main/ContactSection";
import OurServices from "@/componets/main/OurServices";
import PortfolioGrid from "@/componets/main/PortfolioGrid";
import Testimonials from "@/componets/main/Testimonials";
import WhyChooseUs from "@/componets/main/WhyChooseUs";

export default function Home() {
  return (<div className="">
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
