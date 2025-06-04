"use client";

import { motion } from "framer-motion";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Client = {
  name: string;
  rating: number;
  image: string;
};

const clients: Client[] = [
  {
    name: "Jenny Wilson",
    rating: 4.7,
    image: "/images/jenny.jpg",
  },
  {
    name: "Jane Cooper",
    rating: 5.0,
    image: "/images/jane.jpg",
  },
  {
    name: "Cody Fisher",
    rating: 4.9,
    image: "/images/cody.jpg",
  },
  {
    name: "Darrell Steward",
    rating: 5.0,
    image: "/images/darrell.jpg",
  },
  {
    name: "Cody Fisher",
    rating: 4.9,
    image: "/images/cody.jpg",
  },
  {
    name: "Darrell Steward",
    rating: 5.0,
    image: "/images/darrell.jpg",
  },
  {
    name: "Cody Fisher",
    rating: 4.9,
    image: "/images/cody.jpg",
  },
  {
    name: "Darrell Steward",
    rating: 5.0,
    image: "/images/darrell.jpg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function CaseStudy() {
   const sliderRef = useRef<HTMLDivElement>(null);

  const scrollBy = 185; // adjust this value to control scroll step

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -scrollBy, behavior: "smooth" });
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollBy, behavior: "smooth" });
    }
  };

    // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.scrollBy({ left: scrollBy, behavior: "smooth" });

        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
        const atEnd = scrollLeft + clientWidth >= scrollWidth;

        if (atEnd) {
          sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 2000); // auto-scroll every 2 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, []);

  return (
    <section className="px-6 lg:px-16 py-4 sm:pt-16 bg-white flex justify-center w-full max-width ">
      {/* <div className="flex mx-auto w-full"> */}
      <div className="flex justify-center max-sm:flex-wrap mx-auto  max-w-fit gap-5 overflow-x-hidden no-scrollbar">

        <div className="sm:max-w-1/4 w-full space-y-3 sm:space-y-7">
          <p className="text-[#005015] font-medium text-xl sm:text-[26px]">CASE STUDY</p>
          <h2 className="text-4xl md:text-[45px] font-bold mt-2 mb-4 text-[#011627]">
            OUR CLIENT
            <br />
            GETS RESULTS
          </h2>
          <p className="text-gray-600 sm:mb-8 max-w-[368px]">
            PageTraffic offers top-notch SEO and digital marketing solutions.
          </p>
        </div>

        <div className="flex flex-col gap-6 max-w-[780px] w-full overflow-x-scroll no-scrollbar">
          {/* Navigation buttons */}
          <div className="flex  justify-end mt-3 space-x-2">
            <button onClick={handleScrollLeft}
            className="w-8 h-8 rounded bg-green-100 text-green-700 hover:bg-green-200 transition">
              &lt;
            </button>
            <button onClick={handleScrollRight}
            className="w-8 h-8 rounded bg-green-700 text-white hover:bg-green-800 transition">
              &gt;
            </button>
          </div>
          <div  ref={sliderRef} className="w-full flex gap-6 overflow-x-auto no-scrollbar scroll-smooth">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="rounded-2xl overflow-hidden shadow-lg bg-white relative h-full min-w-[173px] max-w-[173px] no-scrollbar"
              >
                <div className="relative h-64 w-full ">
                  <Image
                    src="/temp-images/image.png"
                    //   src={client.image}
                    alt={client.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>
                <div className="absolute bottom-2 w-full px-4 flex justify-between items-center text-white ">
                  <span className="text-xs ">{client.name}</span>
                  <span className="flex gap-1 items-center h-[15px] w-[37px] text-[8px] text-white bg-[#E71D36] font-semibold rounded-full px-2">
                    {/* <img src="/icons/star.svg" alt="star"  /> */}
                    <div className="">
                      <StarIcon fill="#fff" className="h-2 w-2 " />
                    </div>
                    {client.rating.toFixed(1)}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      {/* </div> */}

      </div>
    </section>
  );
}
