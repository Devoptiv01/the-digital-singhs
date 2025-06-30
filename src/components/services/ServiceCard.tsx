"use client"

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';



const ServiceCard = ({ icon, title, description, features, image, reverse }: any) => (
  <section className="py-8">
    <motion.div
      className={`container mx-auto flex flex-col-reverse lg:flex-row w-fit justify-center group cursor-pointer ${
        reverse ? 'lg:flex-row-reverse' : ''
      } items-center gap-12 px-6`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="lg:w-1/2 space-y-4">
        <div className="flex items-center gap-3 text-white group-hover:text-dark-orange dark:text-white duration-500">
          {/* <div className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-full">{icon}</div> */}
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        <p className="text-lg text-gray-200">{description}</p>
        <ul className="mt-4 list-disc list-inside text-gray-300">
          {features.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <Link href={'/contact-us'} className='flex gap-2 hover:gap-3 bg-light-orange w-fit py-2 px-4 rounded-xl hover:bg-dark-orange hover:text-white duration-500 font-medium hover:scale-105'>
          Contact us
          <ArrowRight/>
        </Link>
      </div>
      <div className="lg:max-w-1/2 max-h-[400px]">
        <motion.img
          src={image}
          alt={title}
          className="rounded-xl shadow-lg hover:shadow-amber-800 w-full max-w-xl max-h-[400px] hover:scale-105 duration-500"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
    </motion.div>
  </section>
);

export default ServiceCard;