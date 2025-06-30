"use client";

import Link from "next/link";
import React, { useState } from "react";

const services = {
  "Social Media": {
    title: "Social Media Management",
    description:
      "We manage Instagram, Facebook, LinkedIn, TikTok & YouTube to keep your brand active, optimized, and engaging.",
    features: [
      "Daily posting & scheduling",
      "Analytics & insights tracking",
      "Audience targeting & growth",
    ],
    bestFor: ["Startups", "Local Brands", "Online Stores"],
  },
  "Paid Ads": {
    title: "Paid Ads & Campaigns",
    description:
      "High-converting campaigns across Meta, Google, TikTok, and LinkedIn, managed with data-driven precision.",
    features: [
      "Campaign setup & audience testing",
      "Performance tracking & optimization",
      "Cross-platform integration",
    ],
    bestFor: ["Ecommerce", "SaaS", "Service Providers"],
  },
  "Content Creation": {
    title: "Content Creation",
    description:
      "Branded content that connects and converts — Reels, stories, graphics & more created to match your voice.",
    features: [
      "Custom reels & stories",
      "Post design with brand consistency",
      "Creative ideation & scripting",
    ],
    bestFor: ["Influencers", "Lifestyle Brands", "Startups"],
  },
  Strategy: {
    title: "Strategy & Consulting",
    description:
      "Strategic planning for digital growth: launch roadmaps, audits, funnel optimization and more.",
    features: [
      "Platform audits & insights",
      "Content & ad strategy planning",
      "Brand positioning consultation",
    ],
    bestFor: ["New Ventures", "Pivoting Brands", "Scaling Teams"],
  },
  Community: {
    title: "Community Engagement & Growth",
    description:
      "We grow engaged communities with organic strategies — replies, interactions, and DMs that convert.",
    features: [
      "Engagement management",
      "Follower growth campaigns",
      "Community-based content",
    ],
    bestFor: ["Niche Influencers", "Local Brands", "Personal Brands"],
  },
};

const servicesArray = [
  {
    id: "social",
    label: "Social Media",
    title: "Social Media Management",
    description:
      "We manage Instagram, Facebook, LinkedIn, TikTok & YouTube to keep your brand active, optimized, and engaging.",
    features: [
      "Daily posting & scheduling",
      "Analytics & insights tracking",
      "Audience targeting & growth",
    ],
    bestFor: ["Startups", "Local Brands", "Online Stores"],
  },
  {
    id: "ads",
    label: "Paid Ads",
    title: "Paid Ads & Campaigns",
    description:
      "High-converting campaigns across Meta, Google, TikTok, and LinkedIn, managed with data-driven precision.",
    features: [
      "Campaign setup & audience testing",
      "Performance tracking & optimization",
      "Cross-platform integration",
    ],
    bestFor: ["Ecommerce", "SaaS", "Service Providers"],
  },
  {
    id: "content",
    label: "Content Creation",
    title: "Content Creation",
    description:
      "Branded content that connects and converts — Reels, stories, graphics & more created to match your voice.",
    features: [
      "Custom reels & stories",
      "Post design with brand consistency",
      "Creative ideation & scripting",
    ],
    bestFor: ["Influencers", "Lifestyle Brands", "Startups"],
  },
  {
    id: "strategy",
    label: "Strategy",
    title: "Strategy & Consulting",
    description:
      "Strategic planning for digital growth: launch roadmaps, audits, funnel optimization and more.",
    features: [
      "Platform audits & insights",
      "Content & ad strategy planning",
      "Brand positioning consultation",
    ],
    bestFor: ["New Ventures", "Pivoting Brands", "Scaling Teams"],
  },
  {
    id: "community",
    label: "Community",
    title: "Community Engagement & Growth",
    description:
      "We grow engaged communities with organic strategies — replies, interactions, and DMs that convert.",
    features: [
      "Engagement management",
      "Follower growth campaigns",
      "Community-based content",
    ],
    bestFor: ["Niche Influencers", "Local Brands", "Personal Brands"],
  },
];


export default function ServicesSection() {
  const [selected, setSelected] = useState<keyof typeof services>("Social Media");
  const current = services[selected];

  return (
    <div className="bg-black text-white py-10 px-4 max-w-6xl mx-auto scroll-smooth">
      <div className="flex justify-center gap-4 mb-6 flex-wrap sticky top-[64px]  py-2">
        {servicesArray.map((service) => (
          <Link 
            href={`#${service.id}`}
            key={service.id}
            // onClick={() => setSelected(service.label as keyof typeof services)}
            className={`px-4 py-2 border hover:border-dark-orange hover:text-light-orange rounded-md font-medium duration-500 hover:scale-105 bg-black `}
          >
            {service.label}
          </Link>
        ))}
      </div>

        <div className="w-full flex flex-col gap-5 pt-10">
      {servicesArray.map((current) => {
        return <div id={current.id} className="scroll-mt-[178px] md:scroll-mt-[120px] grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-dark-orange">{current.title}</h2>
          <p className="text-gray-200 mb-4">{current.description}</p>
          <ul className="list-disc pl-5 space-y-2">
            {current.features.map((feature, idx) => (
              <li key={idx} className="text-gray-300">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg border group flex flex-col gap-2">
          <h3 className="text-lg font-semibold">Best For</h3>
          <ul className="space-y-2">
            {current.bestFor.map((item, idx) => (
              <li key={idx} className="text-green-600 group-hover:text- dark-orange duration-500 font-medium">
                ✓ {item}
              </li>
            ))}
          </ul>
          <Link href={'/contact-us'} className=" bg-green-500 group-hover:scale-105 group-hover:bg- dark-orange group-hover:text-white duration-500 text-white px-4 py-2 rounded-md font-semibold">
            Get Custom Quote or Free Demo
          </Link>
        </div>
      </div>})}

    </div>
    </div>
  );
}
