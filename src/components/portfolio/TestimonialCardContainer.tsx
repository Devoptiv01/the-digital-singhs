"use client";
// import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

const testimonials = [
  {
    name: "John Doe",
    review:
      "This service exceeded my expectations. Everything was smooth and hassle-free.",
  },
  {
    name: "Jane Smith",
    review:
      "Great experience overall. I would definitely recommend it to my friends and family.",
  },
  {
    name: "Michael Johnson",
    review:
      "The team was professional and attentive. Everything was delivered on time.",
  },
  {
    name: "Emily Brown",
    review:
      "I wasn’t sure what to expect, but I’m genuinely impressed by the results.",
  },
  {
    name: "David Wilson",
    review:
      "Simple, effective, and just what I needed. No unnecessary complications.",
  },
  {
    name: "Olivia Davis",
    review:
      "Customer support was responsive and helpful throughout the entire process.",
  },
  {
    name: "Daniel Martinez",
    review:
      "Everything worked perfectly. No bugs, no issues. Just solid performance.",
  },
  {
    name: "Sophia Anderson",
    review:
      "From start to finish, it was a pleasant experience. I’ll be coming back.",
  },
  {
    name: "William Taylor",
    review:
      "Affordable and reliable. It’s rare to find something that does both well.",
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
            className="!w-[300px] h-fit !max-h-[250px] flex-shrink-0 bg-white rounded-lg shadow-md transition-transform"
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
