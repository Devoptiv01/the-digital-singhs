import Link from "next/link";
import React from "react";


type PortfolioCardProps = {
  showCard: string;
  category: string;
  ImageHref: string;
  title: string;
  button: string;
  buttonHref: string;
};

const PortfolioCard = ({
  showCard,
  category,
  ImageHref,
  title,
  button,
  buttonHref,
}: PortfolioCardProps) => {
  return (
    <>
      <div
        className={`w-full px-4 md:w-1/2 xl:w-1/3 ${
          showCard === "all" || showCard === category.toLowerCase()
            ? "block"
            : "hidden"
        }`}
      >
        <div className="relative mb-12">
          <div className="overflow-hidden rounded-[10px] group">
            <img src={ImageHref} alt="portfolio" className="w-full group-hover:scale-105 duration-500" />
          </div>
          <div className="relative z-10 mx-7 -mt-20 rounded-lg bg-white py-[34px] px-3 text-center shadow-portfolio hover:border border border-white duration-500 hover:border-dark-green box-border">
            <span className="text-primary mb-2 block text-sm font-medium">
              {category}
            </span>
            <h3 className="text-dark mb-5 text-xl font-bold">{title}</h3>
            <Link
              href={buttonHref}
              className="text-body-color hover:border-dark-green hover:bg-dark-green inline-block rounded-md border border-stroke py-[10px] px-7 text-sm font-medium transition  hover:text-white duration-500"
            >
              {button}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioCard;