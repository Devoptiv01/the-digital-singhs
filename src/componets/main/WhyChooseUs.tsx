'use client';
import React from 'react';

const benefits = [
  {
    icon: "/icons/thumbup.svg",
    title: 'Proven Result',
    desc: 'We have a track record of delivering measurable results for our clients through our effective social media strategies.',
  },
  {
    icon: '/icons/okey.svg',
    title: 'Expertise and Experience',
    desc: 'Our team is composed of social media experts with a wealth of knowledge and experience in the industry.',
  },
  {
    icon:  '/icons/folder.svg',
    title: 'Data-Driven Decisions',
    desc: 'We use analytics and reporting to make data-driven decisions that drive results for your business.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-[#f6fbea] py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left graphic */}
        <div className="relative">
          <div className="bg-[#A2D95E] pt-[70px] md:pt-[90px] px-[42px] md:px-[72px] rounded-[2rem] w-full h-full max-w-[463px] max-h-[646px] flex items-center justify-center mx-auto overflow-hidden">
            <div className="bg-[#10410F] w-full h-[367px] md:h-[567px] rounded-[0.5rem] relative flex items-center justify-center">
              <div className="absolute top-1/2 -translate-y-1/2 ">
                <img src="/icons/laughing.svg" alt="image" className='' />
              </div>
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
            <p className="uppercase text-sm tracking-wider text-[#10410F]">Why Choose Us</p>
            <h2 className="md:text-[46px] sm:text-4xl text-3xl font-bold text-black sm:leading-[48px] md:leading-[68px]">
                The Benefits of Partnering <br /> with Soziely
            </h2>
          </div>

          <div className="space-y-5">
            {benefits.map((item, i) => (
              <div key={i} className="flex gap-4 md:gap-8 items-start h-fit">
                <div className=" text-yellow-400 text-2xl p-2 min-w-[50px] sm:min-w-[70px] md:min-w-[100px] min-h-[100px] flex items-center justify-center relative ">
                  <img src={item.icon} alt="image" className='min-w-[50px] sm:min-w-[70px] md:min-w-[100px] min-h-[70px] md:min-h-[100px] absolute z-10' />
                </div>
                <div className='flex flex-col justify-between h-full'>
                  <p className="font-semibold text-xl md:text-2xl text-[#10410F]">{item.title}</p>
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
