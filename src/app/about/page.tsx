"use client";

import AboutCards from "@/components/about/StatCard";
import AboutUsSection from "@/components/about/AboutUsSection";
import Aos from "aos";
import React, { useEffect } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import StatCard from "@/components/about/StatCard";
import Cta from "@/components/main/Cta";
import WhyChooseUs from "@/components/about/WhyChooseUs";

const Page = () => {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div>
      <AboutUsSection />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 py-5 px-5">
        <StatCard end={10} label="Years Experience" />
        <StatCard end={50} label="Projects Completed" delay={100} />
        <StatCard end={25} label="Happy Clients" delay={200} />
        <StatCard end={5} label="Awards Won" delay={300} suffix="" />
      </div>

      <WhyChooseUs/>

      <Cta  />
    </div>
  );
};

export default Page;
