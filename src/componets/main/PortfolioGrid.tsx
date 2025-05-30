'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const portfolioImages = [
  'https://static.toiimg.com/thumb/msid-121176663,width-400,resizemode-4/Garena-Free-Fire-Max-redeem-codes-May-15.jpg',
  'https://static.toiimg.com/thumb/msid-121176663,width-400,resizemode-4/Garena-Free-Fire-Max-redeem-codes-May-15.jpg',
  'https://static.toiimg.com/thumb/msid-121176663,width-400,resizemode-4/Garena-Free-Fire-Max-redeem-codes-May-15.jpg',
  'https://static.toiimg.com/thumb/msid-121176663,width-400,resizemode-4/Garena-Free-Fire-Max-redeem-codes-May-15.jpg',
  'https://static.toiimg.com/thumb/msid-121176663,width-400,resizemode-4/Garena-Free-Fire-Max-redeem-codes-May-15.jpg',
  'https://static.toiimg.com/thumb/msid-121176663,width-400,resizemode-4/Garena-Free-Fire-Max-redeem-codes-May-15.jpg',
];

export default function PortfolioGrid() {
  return (
    <section className="py-16 pt-8 px-4 text-center bg-white">
      <motion.h2
        className="text-3xl font-bold mb-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Portfolio
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {portfolioImages.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={src}
              alt={`Portfolio ${index + 1}`}
              width={400}
              height={250}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button className="bg-teal-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-teal-600 transition">
          View more
        </button>
      </motion.div>
    </section>
  );
}
