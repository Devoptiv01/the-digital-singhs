import React, { useEffect } from "react";
import Aos from 'aos';


const InstaVideos = () => {
  useEffect(() => {
    Aos.init({ once: true, duration: 1000 });
  }, [])
  
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
    {Array(8).fill(0).map((e, idx: number) => <div key={idx} className="bg-gray-100 p-4">
      <div data-aos="fade-up" data-aos-delay={`${idx * 100}`}  className="bg-white w-fit mx-auto rounded-sm max-w-md relative group overflow-hidden">
        <img src="https://picsum.photos/id/244/900/900" className="h-96 w-[350px] group-hover:scale-110 duration-500 " />
      </div>
    </div>)}
    </div>
  );

};

export default InstaVideos;
