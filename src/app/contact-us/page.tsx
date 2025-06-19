import ContactUsForm from "@/components/contact/ContactUSForm";
import Cta from "@/components/main/Cta";
import { LocationOn } from "@mui/icons-material";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-5 pt-5">
      {/* // Cards */}
      <div className="w-full max-w-3xl mx-auto flex flex-wrap gap-5">
        {/* // first  */}
        <div className="max-w-[350px] p-7 w-full flex flex-col gap-3 rounded-lg border border-gray-300 mx-auto duration-500 hover:bg-dark-orange hover:text-white shadow-xl group">
          {/* <img src="" alt="icon"className='' /> */}
          <div className="bg-dark-orange group-hover:bg-white group-hover:text-dark-orange duration-500 h-10 w-10 flex justify-center items-center rounded-full text-white text-xl">
            <LocationOn className="h-6 w-6" />
          </div>
          <h2 className="font-semibold text-3xl ">Office Location</h2>
          <h4 className=" text-base  ">
            <LocationOn />
            2B- 625 King St E kitchener, Ontario,  N2G, 4V4 Canada,
          </h4>
        </div>
        {/* // Second */}
        <Link href={'tel:+12898018000'} className="max-w-[350px] p-7 w-full flex flex-col gap-3 rounded-lg border border-gray-300 mx-auto duration-500 hover:bg-dark-orange hover:text-white shadow-xl group">
          {/* <img src="" alt="icon"className='' /> */}
          <div className="bg-dark-orange group-hover:bg-white group-hover:text-dark-orange duration-500 h-10 w-10 flex justify-center items-center rounded-full text-white text-xl">
            <CallIcon className="h-6 w-6" />
          </div>
          <h2 className="font-semibold text-3xl ">Office Location</h2>
          <h4 className=" text-base  ">
            +12898018000
          </h4>
        </Link>
        {/* // third */}
        <Link href={'mailto:email@email.com'} className="max-w-[350px] p-7 w-full flex flex-col gap-3 rounded-lg border border-gray-300 mx-auto duration-500 hover:bg-dark-orange hover:text-white shadow-xl group">
          {/* <img src="" alt="icon"className='' /> */}
          <div className="bg-dark-orange group-hover:bg-white group-hover:text-dark-orange duration-500 h-10 w-10 flex justify-center items-center rounded-full text-white text-xl">
            <EmailIcon className="h-6 w-6" />
          </div>
          <h2 className="font-semibold text-3xl ">Office Location</h2>
          <h4 className=" text-base  ">
            email@email.com
          </h4>
        </Link>
      </div>

      <ContactUsForm />
      <Cta title="Have a query or need consultation? Contact us today!" />
    </div>
  );
};

export default Page;
