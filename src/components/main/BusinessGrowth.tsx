'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCircleCheck } from 'react-icons/fa6'

const features = [
  'PageTraffic offers top-notch SEO and digital marketing.',
  'PageTraffic offers top-notch SEO.',
  'PageTraffic offers top-notch.',
  'PageTraffic offers top-notch SEO and.',
]
// border-red-300 bg-red-50'
const cards = [
  { id: 1, icon: '/icons/pin.svg', imgcolor: 'bg-[#FFECEA]', color: 'bg-white', ctaColor: 'text-[#FF1D03]' },
  { id: 2, icon: '/icons/leads-green.svg', imgcolor: 'bg-[#D2FFFB]', color: 'bg-[#f6fffe]', ctaColor: 'text-cyan-600' },
  { id: 3, icon: '/icons/leads-green.svg', imgcolor: 'bg-[#D2FFFB]', color: 'bg-[#f6fffe]', ctaColor: 'text-cyan-600' },
  { id: 4, icon: '/icons/pin.svg', imgcolor: 'bg-[#FFECEA]', color: 'bg-white', ctaColor: 'text-red-500' },
]

export default function BusinessGrowth() {
  return (
    <section className="max-w-7xl w-full overflow-hidden mx-auto px-4 pt-5 pb-16 grid md:grid-cols-2 gap-12">
      {/* Left Content */}
      <div className="flex flex-col justify-center gap-5 md:gap-10 text-[#011627]">
        <div>
          <h3 className="text-3xl font-semibold uppercase leading-[40px] tracking-[0.02em]">
            How PageTraffic Creates <br/>
            Hyper Business Growth
          </h3>
        </div>
        <p className="text-lg leading-[30px] tracking-[0.02em] max-w-[448px]">
          PageTraffic offers top-notch SEO and digital marketing solutions to help you rank high on search results, connect with.
        </p>

        <ul className="space-y-3 sm:space-y-5 text-lg sm:leading-[30px] tracking-[0.02em]">
          {features.map((feature, idx) => (
            <li key={idx} className="flex w-full items-center gap-2">
              <div className="h-5 w-5">
              <FaCircleCheck className="text-red-500 mt-1 h-5 w-5" />
              </div>
              <h4>
              {feature}
              </h4>
            </li>
          ))}
        </ul>

        <div className="flex gap-10 sm:pt-4">
          <div>
            <p className="text-3xl font-semibold text-[#FF1D03]">1.9k</p>
            <p className="text-lg">Total Audience</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-[#005614]">5.7k</p>
            <p className="text-lg">Complete Project</p>
          </div>
        </div>

        <button className="bg-[#005617] text-white w-[173px] h-[52px] rounded-lg shadow-md hover:scale-105 duration-300 transition">
          Explore Now
        </button>
      </div>

      {/* Right Cards */}
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-5 sm:gap-10">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className={`rounded-4xl min-[500px]:max-w-[270px] w-full h-fit shadow-sm hover:shadow-lg transition-all bg-gradient-to-b from-red-600  to-white p-[1px] ${index % 2 !== 0 && ' !mt-8'} border-none `}
          >
            <div className={`w-full h-full p-6  flex flex-col max-[500px]:flex-row gap-5 rounded-[31px]  ${card.color} `}>
                <div className={`w-[100px] h-[100px] flex justify-center items-center rounded-lg ${card.imgcolor}`}>
                    <img src={card.icon} alt="icon" className="w-12 h-12" />
                </div>
                <div className="w-full space-y-3 sm:space-y-5">
                <div className="w-full space-y-1 sm:space-y-2">
                    <h4 className="text-[26px] font-semibold">I Want Leads</h4>
                    <p className="text-base sm:text-lg sm:leading-[30px] tracking-[0.02em]">
                    Looking to get higher ROI by improving website.
                    </p>
                </div>
                <Link href="#" className={`text-lg font-medium ${card.ctaColor}`}>
                {/* {card.cta} */}
                View more
                </Link>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
