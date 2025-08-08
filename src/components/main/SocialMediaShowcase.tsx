"use client";

import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}

const reelUrls = ["https://www.instagram.com/reel/DGGFEcKMzLA/"];

const youtubeShorts = ["https://www.youtube.com/shorts/Rj8DUT8GpQs"];

const SocialMediaShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative py-12 px-6 text-white mx-auto z-10 overflow-hidden">
      {/* Background Video */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/video-01.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* Dark overlay for readability */}
      {/* <div className="absolute inset-0 bg-white/70 z-0"></div> */}

      {/* Foreground Content */}
      <div className="relative z-10">
        <div className="text-center mb-10" data-aos="fade-up">
          <p className="text-sm text-dark-orange uppercase font-medium tracking-wider">
            Social Media Growth Experts
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold mt-2 text-white">
            Scale with Content That Performs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-white">
            We’re The Digital Singhs — a Canadian agency built to help brands scale fast through strategy, storytelling, and daily execution. From reels to results, we turn content into momentum.
          </p>
          <button
            data-aos="zoom-in"
            data-aos-delay='1000'
            onClick={() => router.push("/services")}
            className="mt-6 px-6 py-3 rounded-md bg-dark-orange hover:bg-light-orange text-black transition duration-300"
          >
            Discover more ↗
          </button>
        </div>
        {/* videos cards */}
        <div className="flex  max-md:flex-col justify-evenly gap-6 mb-12">
          {/* Left Video Card */}
          <div
            data-aos="zoom-in"
            data-aos-delay='1000'
            className="w-full max-w-[290px] h-[334px] max-h-[334px] aspect-video overflow-hidden rounded-xl bg-transparent shadow-md"
          >
            <video
              src="/prod/updated_images/heroSection/Left.mp4"
              className="w-full h-full object-cover rounded-xl"
              // controls
              muted
              playsInline
              onMouseEnter={(e) => {
                e.currentTarget.play();
              }}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
          </div>

          {/* Center Video Card */}
          <div
            data-aos="zoom-in"
            data-aos-delay='1000'
            className="w-full max-w-[510px] h-[334px] max-h-[334px] aspect-video overflow-hidden rounded-xl bg-transparent shadow-md"
          >
            <video
              src="/videos/video-center.mp4"
              className="w-full h-full object-cover rounded-xl"
              // controls
              muted
              playsInline
              onMouseEnter={(e) => {
                e.currentTarget.play();
              }}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
          </div>

          {/* Right Video Card */}
          <div
            data-aos="zoom-in"
            data-aos-delay='1000'
            className="w-full max-w-[290px] h-[334px] max-h-[334px] aspect-video overflow-hidden rounded-xl bg-transparent shadow-md"
          >
            <video
              src="/prod/updated_images/heroSection/Right.mp4"
              className="w-full h-full object-cover rounded-xl"
              // controls
              muted
              playsInline
              onMouseEnter={(e) => {
                e.currentTarget.play();
              }}
              onMouseLeave={(e) => {
                e.currentTarget.pause();
                e.currentTarget.currentTime = 0;
              }}
            />
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white"
          data-aos="fade-up"
        >
          <div>
            <p className="text-3xl font-bold">😎 15+</p>
            <p className="text-sm mt-2">Years Experience</p>
          </div>
          <div>
            <p className="text-3xl font-bold">💞 58M</p>
            <p className="text-sm mt-2">Followers TikTok</p>
          </div>
          <div>
            <p className="text-3xl font-bold">🤝 97%</p>
            <p className="text-sm mt-2">Project Success</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaShowcase;
