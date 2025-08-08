"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCircleCheck } from "react-icons/fa6";

const features = [
  "Custom strategies for rapid, scalable brand growth.",
  "High-ROI campaigns tailored to your business goals.",
  "Engaging content that drives traffic and conversions.",
  "Performance tracking that fuels smarter decisions.",
];

// border-red-300 bg-red-50'
const cards = [
  {
    id: 1,
    icon: "/prod/updated_images/BusinessGrowth/BoostLocalVisibility.png",
    imgcolor: "bg-[#FFECEA]",
    color: "bg-white",
    ctaColor: "text-[#FF1D03]",
    title: "Boost Local Visibility",
    text: "Attract nearby customers and grow foot traffic to your business.",
  },
  {
    id: 2,
    icon: "/prod/updated_images/BusinessGrowth/GenerateQualityLeads.png",
    imgcolor: "bg-[#D2FFFB]",
    color: "bg-[#f6fffe]",
    ctaColor: "text-cyan-600",
    title: "Generate Quality Leads",
    text: "Reach ready-to-convert audiences and increase qualified inquiries.",
  },
  {
    id: 3,
    icon: "/prod/updated_images/BusinessGrowth/DriveRealEngagement.png",
    imgcolor: "bg-[#D2FFFB]",
    color: "bg-[#f6fffe]",
    ctaColor: "text-cyan-600",
    title: "Drive Real Engagement",
    text: "Build trust and spark conversations that keep your brand top-of-mind.",
  },
  {
    id: 4,
    icon: "/prod/updated_images/BusinessGrowth/IncreaseConversions.png",
    imgcolor: "bg-[#FFECEA]",
    color: "bg-white",
    ctaColor: "text-red-500",
    title: "Increase Conversions",
    text: "Turn browsers into buyers with tailored conversion strategies.",
  },
];

export default function BusinessGrowth() {
  return (
    <section className="max-w-7xl w-full overflow-hidden mx-auto px-4 pt-5 pb-16 grid md:grid-cols-2 gap-12 text-white">
      {/* Left Content */}
      <div className="flex flex-col justify-center gap-5 md:gap-10 ">
        <div>
          <h3 className="text-3xl font-semibold uppercase leading-[40px] tracking-[0.02em]">
            How PageTraffic Creates <br />
            Hyper Business Growth
          </h3>
        </div>
        <p className="text-lg leading-[30px] tracking-[0.02em] max-w-[448px]">
          PageTraffic offers top-notch SEO and digital marketing solutions to
          help you rank high on search results, connect with.
        </p>

        <ul className="space-y-3 sm:space-y-5 text-lg sm:leading-[30px] tracking-[0.02em] ">
          {features.map((feature, idx) => (
            <li key={idx} className="flex w-full items-center gap-2">
              <div className="h-5 w-5">
                <FaCircleCheck className="text-red-500 mt-1 h-5 w-5" />
              </div>
              <h4>{feature}</h4>
            </li>
          ))}
        </ul>

        <div className="flex gap-10 sm:pt-4">
          <div>
            <p className="text-3xl font-semibold text-[#fa5947]">1.9k</p>
            <p className="text-lg">Total Audience</p>
          </div>
          <div>
            <p className="text-3xl font-semibold text-orange-400">5.7k</p>
            <p className="text-lg">Complete Project</p>
          </div>
        </div>

        <Link href={'/services'} className="bg-dark-orange text-black w-[173px] h-[52px] rounded-lg shadow-md hover:scale-105 duration-300 transition flex items-center justify-center">
          <p>Explore Now</p>
        </Link>
      </div>

      {/* Right Cards */}
      <div className="grid grid-cols-1 min-[500px]:grid-cols-2 gap-5 sm:gap-10 text-[#011627]">
        {cards.map((card, index) => (
          <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              // whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
            className={`rounded-4xl min-[500px]:max-w-[270px] w-full h-fit shadow-sm hover:shadow-lg transition-all bg-gradient-to-b from-red-600 to-white p-[1px] hover:scale-105 duration-500 ${
              index % 2 !== 0 && "!mt-8"
            } border-none`}
          >
            <div
              className={`bg-black opacity-75 w-full h-full p-6 flex flex-col max-[500px]:flex-row gap-5 rounded-[31px] ${card.color}  !bg-black !opacity-75 overflow`}
            >
              {/* Animated Icon Wrapper */}
              <motion.div
                className={`w-[100px] h-[100px] flex justify-center items-center rounded-lg ${card.imgcolor}`}
                initial={{ y: 0 }}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <img src={card.icon} alt="icon" className="w-full h-full rounded-lg" />
              </motion.div>

              <div className="w-full space-y-3 sm:space-y-5">
                <div className="w-full space-y-1 sm:space-y-2">
                  <motion.h4
                    className="text-[26px] font-semibold text-white"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.4 }}
                  >
                    {card.title}
                  </motion.h4>
                  <motion.p
                    className="text-base text-white sm:text-lg sm:leading-[30px] tracking-[0.02em]"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                   {card.text}
                  </motion.p>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <Link
                    href=""
                    className={`text-lg font-medium ${card.ctaColor}`}
                  >
                    View more
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
