import Link from "next/link";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="bg-[#689a3d0a]">
      <div className="min-h-screen h-fit ">
        <div className="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
          <div className="col-span-2 mb-8">
            {/* <p className="text-lg font-medium text-purple-500 dark:text-purple-500">Trusted Worldwide</p> */}
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Why Choose The Digital Singhs?
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              At The Digital Singhs, we're not just a service provider — we're
              your digital growth partner. By blending creativity with
              performance marketing, we help brands navigate the ever-evolving
              digital world with confidence and clarity.
            </p>
            <div>
              <Link
                href="/contact-us"
                className="inline-flex items-center text-base font-medium text-dark-green mt-5"
              >
                Contact Us
                <svg
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-span-2 space-y-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
            <div className="bg-white p-5 rounded-2xl shadow-lg">
              <img
                src="/temp-images/image.png"
                alt="icons"
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                100+ Strategies Delivered
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Custom growth plans created for modern startups and local
                businesses.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg">
              <img
                src="/temp-images/image.png"
                alt="icons"
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                Proudly Canadian
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                We understand local markets and help brands grow from the ground
                up.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg">
              <img
                src="/temp-images/image.png"
                alt="icons"
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                2x ROI on Ads
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                Performance marketing that turns scrolls into customers.
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl shadow-lg">
              <img
                src="/temp-images/image.png"
                alt="icons"
                className="h-10 w-10 rounded-lg"
              />
              <h3 className="mb-2 text-2xl font-bold dark:text-white">
                500+ Posts/Month
              </h3>
              <p className="font-light text-gray-500 dark:text-gray-400">
                We manage reels, stories, and social content that actually
                performs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
