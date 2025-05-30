'use client'

import { motion } from 'framer-motion'

const services = [
  {
    id: '01',
    title: 'Social media strategy',
    description: 'Tortor nisl elit pulvinar pellentesque libero varius libero ullamcorper.',
    color: 'bg-green-50',
  },
  {
    id: '02',
    title: 'Content creation & curation',
    description: 'Tortor nisl elit pulvinar pellentesque libero varius libero ullamcorper.',
    color: 'bg-purple-100',
  },
  {
    id: '03',
    title: 'Paid advertising and promotion',
    description: 'Tortor nisl elit pulvinar pellentesque libero varius libero ullamcorper.',
    color: 'bg-blue-50',
  },
  {
    id: '04',
    title: 'Analytics and reporting',
    description: 'Tortor nisl elit pulvinar pellentesque libero varius libero ullamcorper.',
    color: 'bg-pink-100',
  },
  {
    id: '05',
    title: 'Influencer marketing',
    description: 'Tortor nisl elit pulvinar pellentesque libero varius libero ullamcorper.',
    color: 'bg-orange-100',
  },
  {
    id: '06',
    title: 'Social media listening',
    description: 'Tortor nisl elit pulvinar pellentesque libero varius libero ullamcorper.',
    color: 'bg-amber-50',
  },
]

export default function OurServices() {
  return (
    <section className="py-16 pb-10 px-2 sm:px-4 max-w-7xl mx-auto">
      <div className="flex justify-between gap-4 items-center mb-8">
        <div>
          <p className="text-sm tracking-[0.07em] uppercase text-[#10410F]">Our Services</p>
          <h2 className="text-3xl md:text-4xl leading-[28px] sm:leading-[48px] lg:leading-[68px] font-bold mt-2 max-w-2xl">
            Elevate Your Online Presence with Our Comprehensive Social Media Services
          </h2>
        </div>
        <button className="hidden md:block bg-green-900 text-white px-6 py-2 rounded-md hover:bg-green-800">
          Discover more
        </button>
      </div>

      <div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
            className={`relative w-full  h-fit max-md:pb-6 md:h-[350px] px-6 md:px-[38px] rounded-[20px] shadow-sm ${service.color} transition hover:shadow-lg flex flex-col sm:gap-5 gap-2`}
          >
            <div className="absolute top-0 left-0 bg-black text-white text-xl font-bold h-12 md:h-16 sm:h-[73px] w-16 rounded-tl-[20px] rounded-br-[20px] flex items-center justify-center">
              {service.id}
            </div>
            <h3 className="text-[28px] sm:text-[32px] md:leading-[42px] -tracking-normal font-bold text-gray-900 mt-16 md:mt-[87px]">{service.title}</h3>
            <p className="text-base text-gray-600 sm:mb-4">{service.description}</p>
            <a href="#" className="text-xl text-[#10410F] font-semibold hover:underline">
              Learn more...
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
