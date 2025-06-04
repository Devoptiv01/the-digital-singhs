import React from "react";
import ProjectsSlider from "../home/ProjectsSlider";
import Link from "next/link";

const HeroSection = ({ video, img }: { video: string; img?: string }) => {
  return (
    <div>
      {/* <!-- Container --> */}
      <div className="relative h-full min-h-96 w-full flex flex-col mx-auto  gap-5 md:gap-20 overflow-hidden">
        {/* <!-- Image Column --> */}
        {/* <div className="w-full h-full lg:w-1/2 lg:h-auto">
        <div className=" h-full mx-auto bg-amber-50">
            <ProjectsSlider />
        </div>
    </div> */}
        {/* <!-- Close Image Column --> */}

        {/* // Video  */}
        {video ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-center bg-cover"
            // style={{ backgroundImage: `url(${img})` }}
          />
        )}

        {/* <!-- Text Column --> */}
        <div className="absolute bg-white/70 w-full md:max-w-2xl md:z-10 md:shadow-lg  lg:w-3/5 overflow-hidden">
          <div className="flex flex-col p-5 sm:p-12 md:px-16">
            <h2 className="text-2xl font-semibold uppercase text-green-800 lg:text-4xl">
              Your Digital Growth Partner
            </h2>
            <p className="mt-4">
              Based in Canada, The Digital Singhs & Corps is a social media
              marketing startup designed for modern businesses looking to grow
              online. We help brands connect, engage, and convert through
              powerful storytelling, strategic content, and data-driven
              campaigns. Whether you're launching or scaling, we turn scrolls
              into clicks — and clicks into loyal customers.
            </p>
            <div className="mt-8">
              <Link
                href="/contact-us"
                className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-3 xl:py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
        {/* <!-- Close Text Column --> */}

        {/* Overlay */}
        {/* <div className="absolute left-0 inset-0 bg-white/10" /> */}
      </div>
    </div>
  );
};

export default HeroSection;
