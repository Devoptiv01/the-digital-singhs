"use client";

import axios from "axios";
import {
  AlignJustify,
  // ChevronDown,
  // Search,
  // ShoppingCart,
  // User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  axios.defaults.validateStatus = (status: number) => status < 500;
  // const { data: status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-[110] flex justify-between items-center px-5 w-full h-16 bg-[#fff] font-medium max-w-[1800px] mx-auto">
      <div className="w-full hidden md:block">
        <div className="w-full flex justify-between items-center">
          {/* // first part of the header */}
          <div className="flex justify-between items-center gap-4 w-full ">
            <Link href={'/'} className="relative h-10 w-16 rounded-lg overflow-hidden">
              <Image
                src={"https://img.freepik.com/free-psd/gold-logo-mockup-grey-wall_511564-1489.jpg?t=st=1748262858~exp=1748266458~hmac=03365baaacc534aa5eaba4f7a72c525f4a97ecba350b997797ac73e07b5ecb5e&w=1380"}
                alt="logo"
                fill
                style={{ objectFit: "cover" }}
              />
            </Link>
            <div className="w-fit">
              <ul className="flex gap-3 lg:gap-4  items-center w-full text-black ">
                <li className="w-full min-w-20 flex flex-col mt-1 items-center gap-1 text-black group duration-300 cursor-pointer">
                  <Link href={"/services"}>
                  Services
                  </Link>
                  <div className="w-0 h-[2px] rounded-full group-hover:w-full duration-300 bg-[#10410F]"></div>
                </li>
                <li className="w-full min-w-20 flex flex-col mt-1  items-center gap-1 text-black group duration-300 cursor-pointer">
                  <Link href={"/pricing"}>
                  Pricing
                  </Link>
                  <div className="w-0 h-[2px] rounded-full group-hover:w-full duration-300 bg-[#10410F]"></div>
                </li>
                {/* <li className="w-full min-w-[100px] flex flex-col items-center mt-1 group duration-300 cursor-pointer">
                  <Link href={"/who-we-are"} className=" w-full min-w-[80px]">
                    Who WE Are
                  </Link>
                  <div className="w-0 h-[2px] rounded-full group-hover:w-full duration-300 bg-[#10410F]"></div>
                </li> */}
                <li className="w-full min-w-[100px] flex flex-col mt-1  items-center gap-1 group duration-300 cursor-pointer">
                  <Link href={"/our-portfolio"} className=" w-full min-w-[80px]">
                    Our Portfolio
                  </Link>
                  <div className="w-0 h-[2px] rounded-full group-hover:w-full duration-300 bg-[#10410F]"></div>
                </li>
                <li className="w-full min-w-16 flex flex-col mt-1  items-center gap-1 group duration-300 cursor-pointer">
                  <Link href={"/about-us"}>
                  About us
                  </Link>
                  <div className="w-0 h-[2px] rounded-full group-hover:w-full duration-300 bg-[#10410F]"></div>
                </li>
                <li className="min-w-[140px] lg:min-w-[167px] hover:bg-light-green hover:text-dark-green hover:font-bold flex justify-center items-center gap-1 group duration-300 cursor-pointer bg-[#10410F] text-white rounded-full h-12 md:h-14">
                  <Link href={"/contact-us"} className=" w-fit ">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* // Mobile Header */}
      <div className="w-full hidden max-md:block ">
        <div className="w-full flex justify-between items-center gap-4 ">
          <button onClick={() => setIsOpen(!isOpen)}>
            <AlignJustify />
          </button>
          <Link href={'/'} className="relative h-10 w-16 rounded-lg overflow-hidden">
            <Image
              src={"https://img.freepik.com/free-psd/gold-logo-mockup-grey-wall_511564-1489.jpg?t=st=1748262858~exp=1748266458~hmac=03365baaacc534aa5eaba4f7a72c525f4a97ecba350b997797ac73e07b5ecb5e&w=1380"}
              alt="logo"
              fill
              style={{ objectFit: "cover" }}
            />
          </Link>
          {/* {status ? <ProfilePopover/> 
          : <Link href={"/sign-in"} className="px-3 py-1 border border-fit-red rounded-md " >
            Login
          </Link>} */}
        </div>

        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full bg-[#d9d9d6] text-black absolute top-[56px] left-0 px-8 py-5 text-left z-50"
          >
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
              className="flex flex-col gap-2 items-center w-full"
            >
              {[
                { href: "/services", label: "services" },
                { href: "/pricing", label: "Pricing" },
                { href: "/our-portfolio", label: "Our Portfolio" },
                { href: "/about-us", label: "about" },
                { href: "/contact-us", label: "Contact Us" },
              ].map(({ href, label }) => (
                <motion.li
                  key={href}
                  variants={{
                    hidden: { opacity: 0, y: -30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-full min-w-24 flex flex-col gap-1 group duration-300 cursor-pointer"
                >
                  <Link href={href} className="capitalize">{label}</Link>
                  <div className="w-0 duration-300 rounded-lg h-[2px] bg-[#10410F] group-hover:w-full"></div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Header;
