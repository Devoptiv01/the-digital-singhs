"use client";
// import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const testimonials = [
  {
    name: "Kyrie Petrakis",
    review:
      "Partnering with The Digital Singhs revolutionized our online presence. Their targeted SEO campaigns consistently bring a steady flow of qualified leads every month. They are a vital part of our growth strategy.",
  },
  {
    name: "Ravinder – Founder & CEO, SSI",
    review:
      "After working with agencies across five countries, The Digital Singhs have outperformed them all. Their deep digital marketing expertise and measurable results make them our trusted growth partner.",
  },
  {
    name: "Rimpi – Founder & CEO, Hearty Way",
    review:
      "The Digital Singhs helped us scale from minimal traffic to over 70,000 monthly visitors within just one month. Today, thanks to their digital marketing strategies, we’re generating half a million dollars in revenue.",
  },
  {
    name: "Anupinder Rai – USA",
    review:
      "With no background in marketing or tech, I was amazed by The Digital Singhs’ comprehensive approach. They handled everything — web development, SEO, and local targeting — delivering exactly what they promised.",
  },
  {
    name: "MadanJot – Founder & CEO, Digital Singhs",
    review:
      "Running a local agency, The Digital Singhs helped us expand internationally. Their strategies now enable us to serve clients in three countries. Their vision and execution truly set them apart.",
  },
  {
    name: "Zaid Kuba",
    review:
      "From branding and web development to SEO and ad strategy, The Digital Singhs manage it all. Their integrated approach positioned us as industry leaders. They’re not just marketers — they’re architects of growth.",
  },
  {
    name: "Jwanda – Founder & CEO, Khalsa Transportation",
    review:
      "I never imagined a traditional business like ours could thrive online. The Digital Singhs’ digital marketing strategy changed the game. We've doubled our client base, and this is just the beginning.",
  },
  {
    name: "Jasveer Singh – Journalist",
    review:
      "The Digital Singhs optimized my YouTube presence and content visibility. I gained over 400K followers in 3 months and launched a second channel with their help. Their marketing strategies truly deliver results.",
  },
  {
    name: "Parminder Singh – Founder & CEO, CyberNetShield",
    review:
      "We provide cybersecurity services and needed high-quality inbound leads. The Digital Singhs’ SEO strategies deliver 2–3 strong leads daily. Their work is transparent, systematic, and focused on results.",
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
            <div className="flex flex-col items- center gap-4 py-2 overflow-hidden">
              {/* <div className="w-full h-[160px] mt-1">
                                <img
                                    src="https://img.freepik.com/free-vector/sales-consulting-concept-illustration_114360-9025.jpg"
                                    alt="background"
                                    className="object-cover w-full h-full rounded-t-lg"
                                />
                            </div> */}
              <div className="flex flex-col items-start gap-2 px-4">
                <div className="flex gap-3 items-center  w-full">
                  <div className="overflow-hidden border rounded-full min-w-12 min-h-12 max-w-12 max-h-12">
                    <img
                      src="https://img.freepik.com/free-vector/sales-consulting-concept-illustration_114360-9025.jpg"
                      alt="client"
                      className="object-cover w-full h-full mt-2"
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
