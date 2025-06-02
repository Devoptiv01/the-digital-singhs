'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Dylan Frost',
    title: 'E-commerce Store Owner',
    text: 'The team at Soziley helped us increase website traffic and sales through targeted social media advertising. Their expertise and attention to detail were invaluable to our business.',
    badge: '/icons/star.svg',
  },
  {
    name: 'Ryan Warner',
    title: 'B2B Company Owner',
    text: 'As a B2B company, we were unsure of how to effectively use social media. Soziley developed a LinkedIn strategy that has generated leads and improved our brand visibility.',
    badge: '/icons/rocket.svg',
  },
  {
    name: 'Laura Glover',
    title: 'Beauty Brand Owner',
    text: 'The Soziley team’s skills and creativity helped us build a visually stunning Instagram presence that has increased brand awareness and sales for our beauty brand.',
    badge: '/icons/heart.svg',
  },
];

const partners = [
  '/logos/logo1.png',
  '/logos/logo2.png',
  '/logos/logo3.png',
  '/logos/logo4.png',
];

export default function Testimonials() {
  return (
    <section className="bg-[#0b1f14] text-white py-10 sm:py-16 px-6 md:px-20 ">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10 max-width">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/3 space-y-7 md:space-y-10"
        >
          <div className="pb-5sm:pb-10">
          <h4 className="text-green-300 uppercase tracking-widest text-sm mb-3">Testimonials</h4>
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 lg:leading-[68px]">
            Don’t just take<br/> our word for it:
          </h2>
          <p className="mb-6 text-[#818181]">
            Hear from Our Satisfied Clients
          </p>
          <button className="bg-[#A2D95E] hover:bg-green-400 text-base h-14 sm:h-[66px] w-[213px] cursor-pointer transition px-6 py-3 rounded-[20px] text-black font-medium flex items-center gap-2">
            Discover more <ArrowUpRight  className='h-5 w-5'/>
          </button>
          </div>

          <div className="w-full bg-[#C7C7C7] h-[2px]"></div>

          <div className="mt-5 sm:mt-10">
            <h5 className="text-[#9498FF] mb-4 text-[20px]">Our Partners :</h5>
            <div className="grid grid-cols-2 min-[500px]:grid-cols-4 lg:grid-cols-2  gap-4">
              {partners.map((logo, index) => (
                <div key={index} className='bg-white p-2 h-16 rounded-lg shadow w-full flex items-center gap-2 text-black'>
                <img
                  src='/temp-images/image.png'
                  // src={logo}
                  alt="partner"
                  className="h-9 w-9 rounded-md"
                />
                <p>logo</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <div className="space-y-6 w-full lg:w-2/3">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white text-black p-6 rounded-xl flex max-sm:flex-col items-start gap-4 shadow-md"
            >
              <div className="relative w-[174px] h-[174px]">
                <Image
                  src="/temp-images/image.png" 
                  alt={t.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div className='flex flex-col gap-2'>
                    <h4 className="font-bold text-[#10410F] text-lg md:text-2xl">{t.name}</h4>
                    <p className="text-sm text-[#10410F]  font-medium">{t.title}</p>
                  </div>
                  <div className="relative w-14 h-14">
                  <Image
                      src="/temp-images/image.png"
                      // src={t.badge}
                      alt="badge"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#818181] leading-[26px] pt-4">{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
