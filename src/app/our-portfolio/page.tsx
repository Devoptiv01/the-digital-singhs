"use client";

import InstaVideos from "@/components/portfolio/InstaVideos";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import TestimonialCardContainer from "@/components/portfolio/TestimonialCardContainer";
import React, { useState } from "react";


const portfolioData = [
  {
    ImageHref: "/portfolio/strategy.jpg",
    category: "Strategy",
    title: "Viral Growth Strategy",
    button: "View Strategy",
    buttonHref: "#",
  },
  {
    ImageHref: "/portfolio/content.jpg",
    category: "Content Creation",
    title: "Scroll-Stopping Content",
    button: "View Content",
    buttonHref: "#",
  },
  {
    ImageHref: "/portfolio/production.jpg",
    category: "Video Production",
    title: "Short-Form Shoots",
    button: "View Projects",
    buttonHref: "#",
  },
  {
    ImageHref: "/portfolio/editing.jpg",
    category: "Editing",
    title: "High-Impact Edits",
    button: "Explore Edits",
    buttonHref: "#",
  },
  {
    ImageHref: "/portfolio/ads.jpg",
    category: "Paid Ads",
    title: "Performance Advertising",
    button: "View Campaigns",
    buttonHref: "#",
  },
  {
    ImageHref: "/portfolio/reporting.jpg",
    category: "Analytics",
    title: "Insight-Driven Reporting",
    button: "View Insights",
    buttonHref: "#",
  },
];


const Portfolio = () => {
  const [showCard, setShowCard] = useState("all");

  interface HandleProjectFn {
    (category: string): void;
  }

  const handleProject: HandleProjectFn = (category) => {
    setShowCard(category);
  };

  return (
    <>
      <section className="pb-12 lg:pt- [120px] lg:pb-[90px] text-black ">
        <div className="container mx-auto p-10 ">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center">
                <span className="text-primary mb-2 block text-lg font-semibold">
                  Our Portfolio
                </span>
                <h2 className="text-dark mb-3 text-3xl leading-[1.208] font-bold sm:text-4xl md:text-[40px]">
                  Our Recent Projects
                </h2>
                <p className="text-body-color text-base ">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="sm:hidden  w-full flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4">
              <ul className="flex flex-wrap justify-center mb-12 space-x-1">
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("all")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "all"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color hover:bg-dark-orange  hover:text-dark-orange"
                    }`}
                  >
                    All Projects
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("branding")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "branding"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color hover:bg-primary  hover:text-dark-orange"
                    }`}
                  >
                    Branding
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("design")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "design"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color hover:bg-primary  hover:text-dark-orange"
                    }`}
                  >
                    Design
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("marketing")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "marketing"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color hover:bg-primary  hover:text-dark-orange"
                    }`}
                  >
                    Marketing
                  </button>
                </li>
                <li className="mb-1">
                  <button
                    onClick={() => handleProject("development")}
                    className={`inline-block rounded-lg py-2 px-5 text-center text-base font-semibold transition md:py-3 lg:px-8 ${
                      showCard === "development"
                        ? "activeClasses bg-primary text-white"
                        : "inactiveClasses text-body-color hover:bg-primary  hover:text-dark-orange"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="flex flex-wrap -mx-4">
            {portfolioData.map((item, index) => (
              <PortfolioCard
                key={index}
                // ImageHref={item.ImageHref}
                ImageHref={"/temp-images/image.png"}
                category={item.category}
                title={item.title}
                button={item.button}
                buttonHref={item.buttonHref}
                showCard={showCard}
              />
            ))}
          </div>

          <InstaVideos />
        </div>
        <TestimonialCardContainer />
      </section>
    </>
  );
};

export default Portfolio;
