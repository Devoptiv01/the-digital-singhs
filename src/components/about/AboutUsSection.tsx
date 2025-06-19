"use client";

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
        {/* Our Mission */}
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div data-aos="fade-right" className="max-w-lg group">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl duration-500 group-hover:text-dark-orange">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-600 text-lg group-hover:text-black duration-500">
                At The Digital Singhs & Corps, our mission is to empower
                startups, small businesses, and emerging brands with
                cutting-edge digital marketing strategies. We aim to tell
                stories that resonate, build communities that last, and convert
                audiences into loyal customers — all through the power of
                creativity and data.
              </p>
              <div className="mt-8 animate-bounce ease-in-out ">
                <Link
                  href="/contact-us"
                  className="text-dark-orange font-semibold py-3 px-5 rounded-xl duration-500 hover:bg-dark-orange hover:text-white"
                >
                  Contact us
                  <span className="ml-2 ">&#8594;</span>
                </Link>
              </div>
            </div>
            <div data-aos="fade-left" className="mt-8 md:mt-0">
              <video
                // controls
                playsInline
                muted
                onMouseEnter={(e) => {
                  e.currentTarget.play();
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
                className="w-full rounded-lg shadow-md"
                src="/videos/video-center.mp4"
              />
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div data-aos="fade-left" className="mt-8 md:mt-0">
              <video
                // controls
                playsInline
                muted
                onMouseEnter={(e) => {
                  e.currentTarget.play();
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
                className="w-full rounded-lg shadow-md"
                src="/videos/video-center.mp4"
              />
            </div>
            <div data-aos="fade-right" className="max-w-lg group">
              <h2 className="text-3xl font-extrabold text-gray-900 duration-500 group-hover:text-dark-orange sm:text-4xl">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-600 text-lg group-hover:text-black duration-500">
                We envision a world where businesses of all sizes can compete on
                equal footing in the digital landscape. Our goal is to be the
                catalyst that helps them achieve visibility, growth, and
                meaningful engagement in a constantly evolving market.
              </p>
              <div className="mt-8 animate-bounce ease-in-out">
                <Link
                  href="/contact-us"
                  className="text-dark-orange font-semibold py-3 px-5 rounded-xl duration-500 hover:bg-dark-orange hover:text-white"
                >
                  Contact us
                  <span className="ml-2 ">&#8594;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
