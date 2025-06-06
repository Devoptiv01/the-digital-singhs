import React from "react";
import Link from "next/link";

const Cta = ({title= "Have a query or need consultation? Contact us today!"}: {title?: string}) => {
  return (
    <div>
      {/* cta */}
      <section className="bg-[#A2D95E] min-w-[250px] flex justify-center items-center p-3">
        <div
          className="flex items-center gap-4 md:gap-y-10 flex-col px-10"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h4 className="text-center text-2xl md:text-[45px] font-medium text-dark-green capitalize ">{title}</h4>
          <div className="flex flex-wrap gap-3 md:gap-5 justify-center ">
            <Link href="/contact-us">
              <button className="bg-white h-10 md:h-12 text-base md:text-lg px-4 md:px-6 rounded-xl text-dark-green hover:bg-dark-green hover:text-white duration-500 font-semibold whitespace-nowrap" >
                Start a Project
              </button>
            </Link>
            <Link href="tel:+1 (289) 801-8000">
              <button className="bg-white h-10 md:h-12 text-base md:text-lg px-4 md:px-6 rounded-xl text-dark-green hover:bg-dark-green hover:text-white duration-500 font-semibold whitespace-nowrap" >
                +1 (289) 801-8000
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cta;
