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
      <section className="bg-black text-white">
        {/* Our Mission */}
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div data-aos="fade-right" className="max-w-lg group">
              <h2 className="text-3xl font-extrabold  sm:text-4xl duration-500 group-hover:text-dark-orange">
                Our Mission
              </h2>
              <p className="mt-4 text-gray-200 text-lg group-hover:text-white duration-500">
                To build repeatable, scalable growth systems that empower brands
                to win on social — without the chaos, burnout, or guesswork. We
                help you own your voice, grow your audience, and build digital
                leverage that compounds over time.
              </p>
              <div className="mt-8 animate-bounce ease-in-out group">
                <Link
                  href="/contact-us"
                  className="text-dark-orange font-semibold py-3 px-5 rounded-xl duration-500 hover:bg-dark-orange hover:text-white"
                >
                  Contact us
                  <span className="ml-2 group-hover:ml-4 duration-500">
                    &#8594;
                  </span>
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
              <h2 className="text-3xl font-extrabold  duration-500 group-hover:text-dark-orange sm:text-4xl">
                Our Vision
              </h2>
              <p className="mt-4 text-gray-200 text-lg group-hover:text-white duration-500">
                We see a future where every brand — big or small — can scale
                with clarity, not chaos. A future where storytelling isn’t a
                luxury, but a growth lever available to anyone willing to show
                up with intention. Our vision is to help brands break through
                the noise, take control of their narrative, and turn digital
                presence into real-world momentum — through content that
                performs, not just posts.
              </p>
              <div className="mt-8 animate-bounce ease-in-out group">
                <Link
                  href="/contact-us"
                  className="text-dark-orange font-semibold py-3 px-5 rounded-xl duration-500 hover:bg-dark-orange hover:text-white"
                >
                  Contact us
                  <span className="ml-2 group-hover:ml-4 duration-500">
                    &#8594;
                  </span>
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
