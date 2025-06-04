import React, { useEffect, useState } from "react";

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
  "https://www.instagram.com/reel/DGGFEcKMzLA/",
  "https://www.instagram.com/reel/DGc0TObSN63/",
  "https://www.instagram.com/reel/DAQ_dz4yR-n/",
  "https://www.instagram.com/reel/DFkTqUbyFkD/",
  "https://www.instagram.com/reel/DEY3zmNvK4f/",
  "https://www.instagram.com/reel/DEKa53PToEx/",
  "https://www.instagram.com/reel/DB8j2bmIjSi/",
  "https://www.instagram.com/reel/DDh2aHasvVS/",
  "https://www.instagram.com/reel/DAimhTfsFC5/",
  "https://www.instagram.com/reel/DCjaIvgP0w5/",
  "https://www.instagram.com/reel/DDZgRt2SdPl/",
  "https://www.instagram.com/reel/DAK_PP6ODV_/"
];

// Optional: Include YouTube Shorts
// const youtubeShorts = [
//   "https://youtube.com/shorts/Rj8DUT8GpQs",
//   "https://youtube.com/shorts/aF87fOQx-20"
// ];

const InstaVideos = () => {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    script.onload = () => {
      // Try processing embeds and wait for DOM to render
      if (window && window.instgrm) {
        window.instgrm.Embeds.process();
      }

      // Use a timeout to allow Instagram to render embeds (they don't expose a callback)
      setTimeout(() => setLoading(false), 2000);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8">
      {reelUrls.map((url, index) => (
        <div
          key={index}
          dangerouslySetInnerHTML={{
            __html: `<blockquote class="instagram-media" data-instgrm-permalink="${url}" data-instgrm-version="14" style="margin:0 auto; max-width:400px;"></blockquote>`
          }}
        />
      ))}

      {/* YouTube Shorts (via iframe) */}
      {/* {youtubeShorts.map((url, index) => (
        <div key={`yt-${index}`} className="w-full aspect-video">
          <iframe
            src={url.replace("shorts", "embed")}
            title={`YouTube Short ${index + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg"
          />
        </div>
      ))} */}
    </div>
  );
};

export default InstaVideos;
