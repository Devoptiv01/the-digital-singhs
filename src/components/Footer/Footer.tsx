'use client';

import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';

export default function Footer() {
  // const currentYear = useMemo(() => function, input)()
  const [currentYear, setCurrentYear] = useState<number>()
  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])
  
  return (
    <footer className="bg-[#051605] text-white px-8 sm:px-20 py-10 md:py-16 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-[40px] font-semibold mb-2">Soziely</h2>
          <p className="text-base mb-4">
            Unlock Your Business's Potential with <br />
            Our Social Media Solutions
          </p>
          <div className="flex flex-wrap gap-4 text-base">
            <Link href="#">Overview</Link>
            <Link href="#">Features</Link>
            <Link href="#">Pricing</Link>
            <Link href="#">Careers</Link>
            <Link href="#">Help</Link>
            <Link href="#">Privacy</Link>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start md:items-end"
        >
          <p className=" mb-4 text-right">
            Stay Up-to-Date with the Latest Social Media <br />
            Strategies and Insights
          </p>
          <form className="flex gap-2 w-full max-w-md h-12 sm:h-16">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 rounded-[20px] w-[230px] h-full text-black px-5 bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#A2D95E] hover:bg-[#c6f78a] transition text-black min-w-[120px] w-[164px] h-full flex justify-center items-center gap-1 rounded-[20px] font-medium text-sm sm:text-base"
            >
              Sign Up <ArrowUpRightIcon className='h-4'/>
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between  text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <span>© {currentYear} Soziely. All rights reserved.</span>
        <span>Designed by TokoTema</span>
      </motion.div>
    </footer>
  );
}
