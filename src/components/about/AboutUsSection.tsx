"use client"

import Aos from "aos";
import Link from "next/link";
import React, { useEffect } from "react";

const AboutUsSection = () => {
    useEffect(() => {
      Aos.init({ duration: 800 });
    }, []);
  
  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div data-aos="fade-right" className="max-w-lg">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                About Us
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                The Digital Singhs & Corps is a proudly Canadian social media
                marketing startup headquartered in Kitchener, Ontario. Built for
                the digital age, we empower startups, small businesses, and
                growing brands to thrive online through bold storytelling and
                data-driven strategy. <br/> <br/> We specialize in crafting impactful
                digital experiences that turn casual scrolls into loyal
                customers. Whether you're just starting out or looking to
                elevate your brand, we provide tailored solutions that connect,
                engage, and convert.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="text-dark-green font-medium"
                >
                  Contact us
                  <span className="ml-2">&#8594;</span>
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="mt-12 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
                alt="About Us Image"
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
