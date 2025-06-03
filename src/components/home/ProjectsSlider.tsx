"use client";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

export default function ProjectsSlider() {
  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper max-w-[300px] md:max-w-[600px]"
      >
        <SwiperSlide><img src={"/temp-images/image.png"} alt='image' className='h-full w-96 md:w-[500px]' /></SwiperSlide>
        <SwiperSlide><img src={"/temp-images/image.png"} alt='image' className='h-full w-96 md:w-[500px]' /></SwiperSlide>
        <SwiperSlide><img src={"/temp-images/image.png"} alt='image' className='h-full w-96 md:w-[500px]' /></SwiperSlide>
        <SwiperSlide><img src={"/temp-images/image.png"} alt='image' className='h-full w-96 md:w-[500px]' /></SwiperSlide>
        <SwiperSlide><img src={"/temp-images/image.png"} alt='image' className='h-full w-96 md:w-[500px]' /></SwiperSlide>
        <SwiperSlide><img src={"/temp-images/image.png"} alt='image' className='h-full w-96 md:w-[500px]' /></SwiperSlide>

      </Swiper>
    </>
  );
}
