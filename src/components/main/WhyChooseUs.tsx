'use client';
import React from 'react';
import { FaBullseye, FaChartLine, FaUsers } from 'react-icons/fa6';

const benefits = [
  {
    icon: <FaBullseye className="w-10 h-10 mx-auto" />,
    title: "Strategic Approach",
    desc: "We align every campaign with your business goals to deliver impactful outcomes, not just impressions.",
  },
  {
    icon: <FaUsers className="w-10 h-10 mx-auto" />,
    title: "Dedicated Team",
    desc: "Work with a passionate team that treats your brand like their own — responsive, reliable, and results-driven.",
  },
  {
    icon: <FaChartLine className="w-10 h-10 mx-auto" />,
    title: "Performance Focused",
    desc: "We prioritize ROI and performance metrics that matter, so every dollar works harder for your business.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left graphic */}
        <div className="relative">
          <div className="bg-dark-orange pt-[70px] md:pt-[90px] px-[42px] md:px-[72px] rounded-[2rem] w-full h-full max-w-[463px] max-h-[646px] flex items-center justify-center mx-auto overflow-hidden">
            <div className="bg-light-orange w-full h-[367px] md:h-[567px] rounded-[0.5rem] relative flex items-center justify-center">
              {/* <div className="absolute top-1/2 -translate-y-1/2 "> */}
                <img src="/prod/images/WhyChooseUsMainImg.png" alt="image" className='h-full w-full rounded-lg' />
              {/* </div> */}
            </div>
          </div>

          {/* Badge */}
          <div className="absolute -bottom-8 left-6 bg-[#fdf4eb] shadow-md h-16 md:h-22 w-[230px] md:w-[272px] rounded-xl flex items-center gap-2 md:gap-5 pt-1 md:pt-3 pl-5 ">
            <span className="text-[40px] md:text-[50px]">🏅</span>
            <div className='md:space-y-1'>
              <p className="font-semibold text-lg md:text-xl text-[#10410F]">Best Agency</p>
              <p className="text-sm md:text-base ">Awwards</p>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="space-y-6 max-md: mt-5">
        <div className="space-y-4">
            <p className="uppercase text-base tracking-wider">Why Choose Us</p>
            <h2 className="md:text-[46px] sm:text-4xl text-3xl font-bold text-dark-orange sm:leading-[48px] md:leading-[68px]">
                The Benefits of Partnering <br /> with The Digital Singhs
            </h2>
          </div>

          <div className="space-y-5">
            {benefits.map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-8 items-start h-fit">
                <div className=" text-dark-orange text-2xl p-2 min-w-[50px] sm:min-w-[70px] md:min-w-[100px] min-h-[100px] flex items-center justify-center relative ">
                  {/* <img src={item.icon} alt="image" className='min-w-[50px] sm:min-w-[70px] md:min-w-[100px] min-h-[70px] md:min-h-[100px] absolute z-10' /> */}
                  {item.icon}
                  {/* <img src={item.image} alt="icon" className='h-16 w-16 -mt-2' /> */}
                </div>
                <div className='flex flex-col justify-between h-full'>
                  <p className="font-semibold text-xl md:text-2xl text-light-orange">{item.title}</p>
                  <p className="text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
