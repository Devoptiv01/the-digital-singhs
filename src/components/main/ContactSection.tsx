'use client';

import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section className=" text-center pt-8 md:pt-16 px-4 space-y-10 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <p className="text-sm uppercase text-orange-400 tracking-widest mb-3">Contact Us</p>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Get in Touch and Take the First Step Towards <br />
          <span className="block mt-2">Social Media Success</span>
        </h2>
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-400 text-white flex mx-auto gap-2 px-6 py-3 rounded-lg font-medium shadow-md hover:bg-orange-500 transition"
          >
            Contact Us 
            <ArrowUpRightIcon />
          </motion.button>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl w-8/10 h-[70px] sm:h-[110px] md:h-[150px] mx-auto flex justify-center items-center bg-orange-400 text-white text-2xl sm:text-[44px] lg:text-[64px] rounded-t-2xl font-bold "
      >
        <h4>Let’s Start Today</h4>
      </motion.div>
    </section>
  );
}
