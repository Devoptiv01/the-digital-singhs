import { LineAxis } from "@mui/icons-material";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#689a3d0a]">
      <div className="h-full max-h-[600px]">
        <div className="flex flex-col items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
          <div className="col-span-2 mb-">
            {/* <p className="text-lg font-medium text-purple-500 dark:text-purple-500">Trusted Worldwide</p> */}
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight md:text-3xl text-white">
              Why Choose The Digital Singhs?
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              We’re The Digital Singhs — a high-performance team built to make brands go viral and grow fast. From Canada, we mix strategy, storytelling, and execution to turn content into real results.
              We work with founders chasing growth — not just likes — through viral scripts, sharp edits, and daily delivery.
              We don’t just post videos. We build momentum and move metrics.
            </p>
            <div>
              <Link
                href="/contact-us"
                className=" items-center text-base mt-1 text-dark-orange font-semibold py-3 px-5 rounded-xl duration-500 hover:bg-dark-orange hover:text-white flex gap-1 transition-all w-fit"
              >
                Contact Us <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="col-span-2 space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-110 duration-500">
              <img
                src="/prod/images/CustomStrategies.png"
                alt="icons"
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-bold text-white">
                Custom Strategies
              </h3>
              <p className="font-light text-gray-300">
               No templates. Every plan is built for your brand.
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-110 duration-500">
              <img
                src="/prod/images/ProudlyCanadian.png"
                alt="icons"
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-bold text-white">
                Proudly Canadian
              </h3>
              <p className="font-light text-gray-300">
               Local expertise. Ground-up brand growth.
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-110 duration-500">
              <img
                src="/prod/images/2xROIonAds.png"
                alt="icons"
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-bold text-white">
                2x ROI on Ads
              </h3>
              <p className="font-light text-gray-300">
                Ads that turn attention into action.
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:scale-110 duration-500">
              <img
                src="/prod/images/500+Posts_Mont.png"
                alt="icons"
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-bold text-white">
                500+ Posts/Month
              </h3>
              <p className="font-light text-gray-300 ">
                Reels, stories, and content that performs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
