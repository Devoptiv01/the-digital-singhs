"use client";

import InstaVideos from "@/components/portfolio/InstaVideos";
import PortfolioCard from "@/components/portfolio/PortfolioCard";
import TestimonialCardContainer from "@/components/portfolio/TestimonialCardContainer";
import React, { useState } from "react";

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
                        : "inactiveClasses text-body-color hover:bg-dark-green  hover:text-dark-green"
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
                        : "inactiveClasses text-body-color hover:bg-primary  hover:text-dark-green"
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
                        : "inactiveClasses text-body-color hover:bg-primary  hover:text-dark-green"
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
                        : "inactiveClasses text-body-color hover:bg-primary  hover:text-dark-green"
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
                        : "inactiveClasses text-body-color hover:bg-primary  hover:text-dark-green"
                    }`}
                  >
                    Development
                  </button>
                </li>
              </ul>
            </div>
          </div> */}
          
          <div className="flex flex-wrap -mx-4">
            <PortfolioCard
              ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-01.jpg"
              category="Branding"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-06.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-02.jpg"
              category="marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-03.jpg"
              category="Development"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-04.jpg"
              category="Design"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
            <PortfolioCard
              ImageHref="https://cdn.tailgrids.com/assets/images/marketing/portfolio/portfolio-01/image-05.jpg"
              category="Marketing"
              title="Creative Agency"
              button="View Details"
              buttonHref="#"
              showCard={showCard}
            />
          </div>

          <InstaVideos/>
        </div>
          <TestimonialCardContainer/>
      </section>
    </>
  );
};

export default Portfolio;
