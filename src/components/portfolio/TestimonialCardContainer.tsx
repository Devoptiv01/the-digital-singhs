"use client";
// import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";


const testimonials = [
  {
    name: "Kyrie Petrakis",
    review:
      "Partnering with DevOptiv transformed our online presence. Their targeted SEO campaigns continue to bring in a steady stream of qualified leads every month. They're a cornerstone of our growth strategy.",
  },
  {
    name: "Ravinder – Founder & CEO, SSI",
    review:
      "We've worked with agencies across five countries, and DevOptiv has outperformed them all. Their deep SEO expertise and measurable results make them our go-to digital partner.",
  },
  {
    name: "Rimpi – Founder & CEO, Hearty Way",
    review:
      "DevOptiv helped us scale from minimal traffic to over 70,000 monthly visitors – in just one month. Today, we’re generating half a million dollars in revenue thanks to their digital marketing expertise.",
  },
  {
    name: "Anupinder Rai – USA",
    review:
      "As someone with no background in marketing or tech, I was impressed by DevOptiv’s approach. They handled everything — web development, SEO, and local targeting — and delivered exactly what they promised.",
  },
  {
    name: "MadanJot – Founder & CEO, Digital Singhs",
    review:
      "I was running a local agency, but DevOptiv helped us expand into international markets. With their strategies, we're now serving clients in three different countries. Their vision truly sets them apart.",
  },
  {
    name: "Zaid Kuba",
    review:
      "From branding and development to SEO and ad strategy — DevOptiv manages it all. Their integrated approach has positioned us as industry leaders. They’re not just marketers — they’re growth architects.",
  },
  {
    name: "Jwanda – Founder & CEO, Khalsa Transportation",
    review:
      "I never expected a traditional business like ours to thrive online. DevOptiv’s digital strategy completely changed the game. We've doubled our client base, and it's just the beginning.",
  },
  {
    name: "Jasveer Singh – Journalist",
    review:
      "DevOptiv optimized my YouTube presence and content visibility. I gained over 400K followers within 3 months and launched a second channel with their help. Their digital marketing truly works.",
  },
  {
    name: "Parminder Singh – Founder & CEO, CyberNetShield",
    review:
      "We provide cybersecurity services and needed high-quality inbound leads. DevOptiv’s SEO strategies deliver 2–3 strong leads daily. Their work is systematic, transparent, and result-oriented.",
  },
];

const TestimonialCardContainer = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     if (!scrollRef.current && scrollRef.current !== null) {
//       const scrollLeft = () => {
//         if (scrollRef.current) {
//           scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//         }
//       };
//       const scrollRight = () => {
//         if (scrollRef.current) {
//           scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//         }
//       };
//     }
//   }, [scrollRef]);

  return (
    <div id="reviews" className="py-12 mt-10 bg-gray-100 ">
      <h1 className="mb-10 text-4xl font-bold text-center text-gray-800">
                what our client say
      </h1>
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={24}
        slidesPerView={"auto"}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={4000}
        className="px-4 h-full"
      >
        {testimonials.map((review, index) => (
          <SwiperSlide
            key={index}
            className="!w-[300px] !h-[250px] flex-shrink-0 bg-white rounded-lg shadow-md transition-transform"
          >
            <div className="flex flex-col items-center gap-4 py-2 overflow-hidden">
              {/* <div className="w-full h-[160px] mt-1">
                                <img
                                    src="https://img.freepik.com/free-vector/sales-consulting-concept-illustration_114360-9025.jpg"
                                    alt="background"
                                    className="object-cover w-full h-full rounded-t-lg"
                                />
                            </div> */}
              <div className="flex flex-col items-start gap-2 px-4">
                <div className="flex items-start justify-between w-full">
                  <div className="overflow-hidden border rounded-full min-w-12 min-h-12 max-w-12 max-h-12">
                    <img
                      src="https://img.freepik.com/free-vector/sales-consulting-concept-illustration_114360-9025.jpg"
                      alt="client"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-600">
                    {review.name}
                  </h3>
                </div>
                <div className="flex justify-center w-full gap-1">
                  {Array(5)
                    .fill(0)
                    .map((_, i) => (
                      <img
                        key={i}
                        src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                        alt="star"
                        className="w-4 h-4"
                      />
                    ))}
                </div>
              </div>
              <p className="px-4 text-sm text-gray-700">{review.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialCardContainer;
