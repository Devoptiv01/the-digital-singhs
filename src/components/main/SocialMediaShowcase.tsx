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

const reelUrls = [
  "https://www.instagram.com /reel/DGGFEcKMzLA/",
//   "https://www.instagram.com/reel/DGc0TObSN63/",
//   "https://www.instagram.com/reel/DAQ_dz4yR-n/",
];

const youtubeShorts = [
  "https://www.youtube.com/shorts/Rj8DUT8GpQs",
  "https://www.youtube.com/shorts/aF87fOQx-20",
];

const SocialMediaShowcase = () => {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalEmbeds = reelUrls.length + youtubeShorts.length;
  const [loadedCount, setLoadedCount] = useState(0);
  const router = useRouter()

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();

        const observer = new MutationObserver(() => {
          const embeds = containerRef.current?.querySelectorAll("iframe, .instagram-media-rendered");
          if (embeds && embeds.length >= reelUrls.length) {
            setTimeout(() => setLoading(false), 300);
            observer.disconnect();
          }
        });

        if (containerRef.current) {
          observer.observe(containerRef.current, { childList: true, subtree: true });
        }
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Effect to watch embeds loading
  useEffect(() => {
    if (!containerRef.current) return;

    // Instagram embeds do not emit a load event, so we listen for iframe load within Instagram embed blocks
    // Let's wait a bit after calling process and check the number of iframes loaded
    const checkInstagramLoaded = () => {
      const instagramIframes = containerRef.current?.querySelectorAll(
        'blockquote.instagram-media iframe'
      );
      if (instagramIframes && instagramIframes.length === reelUrls.length) {
        // Assume Instagram embeds loaded
        setLoadedCount((count) => count + reelUrls.length);
      }
    };

    checkInstagramLoaded();

  }, [loading]); // Run after initial render

  // Increment loaded count on each iframe load event for YouTube shorts
  useEffect(() => {
    if (!containerRef.current) return;

    const youtubeIframes = containerRef.current.querySelectorAll<HTMLIFrameElement>(
      "iframe"
    );

    const onLoad = () => {
      setLoadedCount((count) => count + 1);
    };

    youtubeIframes.forEach((iframe) => {
      iframe.addEventListener("load", onLoad);
    });

    return () => {
      youtubeIframes.forEach((iframe) => {
        iframe.removeEventListener("load", onLoad);
      });
    };
  }, [loading]);

  // When all embeds have loaded, turn off loading
  useEffect(() => {
    if (loadedCount >= totalEmbeds) {
      setLoading(false);
    }
  }, [loadedCount, totalEmbeds]);

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10" data-aos="fade-up">
        <p className="text-sm text-green-600 uppercase font-medium tracking-wider">
          Social Media Marketing Agency
        </p>
        <h2 className="text-3xl lg:text-5xl font-bold mt-2">
          Boost Your Social Media Presence with Our Expert Agency Services
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Based in Canada, The Digital Singhs & Corps is a social media marketing startup helping brands grow online through strategy, content, and community engagement.
        </p>
        <button onClick={()=> router.push('/services')} className="mt-6 px-6 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white transition duration-300">
          Discover more ↗
        </button>
      </div>

      {/* {!loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin h-10 w-10 border-4 border-green-600 border-t-transparent rounded-full" />
        </div>
      ) : ( */}
        <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reelUrls.map((url, i) => (
            <div
              key={`insta-${i}`}
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
              dangerouslySetInnerHTML={{
                __html: `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style="max-width: 100%; margin: auto;"></blockquote>`,
              }}
            />
          ))}

          {youtubeShorts.map((url, i) => (
            <div
              key={`yt-${i}`}
              data-aos="fade-up"
              data-aos-delay={`${(i + reelUrls.length) * 100}`}
              className="aspect-video w-full"
            >
              <iframe
                className="w-full h-full rounded-lg"
                src={url.replace("shorts/", "embed/")}
                title={`YouTube Short ${i + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      {/* )} */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center" data-aos="fade-up">
        <div>
          <p className="text-3xl font-bold">😎 34+</p>
          <p className="text-sm text-gray-600 mt-2">Years Experience</p>
        </div>
        <div>
          <p className="text-3xl font-bold">💞 68M</p>
          <p className="text-sm text-gray-600 mt-2">Followers TikTok</p>
        </div>
        <div>
          <p className="text-3xl font-bold">🤝 97%</p>
          <p className="text-sm text-gray-600 mt-2">Project Success</p>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaShowcase;
