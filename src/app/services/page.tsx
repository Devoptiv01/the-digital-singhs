// import React from 'react'

// const Page = () => {
//   return (
//     <div>
//       <section className="">
//   <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
//     <div>
//       <h2 className="text-3xl font-bold text-center sm:text-5xl">New Features</h2>
//       <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">Explore the latest features that enhance your learning experience and make it even more exciting.</p>
//     </div>

//     <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
//       <div>
//         <div className="mt-4 space-y-12">
//           <div className="flex">
//             <div className="flex-shrink-0">

//             </div>
//             <div className="ml-4">
//               <h4 className="text-lg font-medium leadi ">Advanced Learning Algorithms</h4>
//               <p className="mt-2 ">Discover our improved learning algorithms that adapt to your preferences and provide even more personalized learning suggestions.</p>
//             </div>
//           </div>
//           <div className="flex">
//             <div className="flex-shrink-0">

//             </div>
//             <div className="ml-4">
//               <h4 className="text-lg font-medium leadi ">Interactive Learning Resources</h4>
//               <p className="mt-2 ">Access an extensive library of interactive resources that make your learning journey engaging and interactive.</p>
//             </div>
//           </div>
//           <div className="flex">
//             <div className="flex-shrink-0">

//             </div>
//             <div className="ml-4">
//               <h4 className="text-lg font-medium leadi ">Enhanced Video Streaming</h4>
//               <p className="mt-2 ">Experience seamless video integration with enhanced streaming capabilities, providing a better and more uninterrupted learning experience.</p>
//             </div>
//           </div>
//           <div className="flex">
//             <div className="flex-shrink-0">

//             </div>
//             <div className="ml-4">
//               <h4 className="text-lg font-medium leadi ">Advanced Quiz Generation </h4>
//               <p className="mt-2 ">Take your knowledge testing to the next level with advanced quiz generation, providing more customization options for your quizzes.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div aria-hidden="true" className="mt-10 lg:mt-0">
//         <img width="600" height="600" src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080" className="mx-auto rounded-lg shadow-lg dark-bg-gray-500" />
//       </div>
//     </div>
//   </div>
// </section>

//     </div>
//   )
// }

// export default Page

"use client";

import ServiceCard from "@/components/services/ServiceCard";

const servicesData = [
  {
    title: "Social Media Management",
    description:
      "We manage Instagram, Facebook, LinkedIn, TikTok, YouTube, and more — so you stay consistent and on-brand.",
    features: [
      "Content scheduling & posting",
      "Profile setup & optimization",
      "Analytics tracking & insights",
    ],
    image: "/prod/updated_images/services/Without_BG/SocialMediaManagement.png",
  },
  {
    title: "Paid Ads & Campaigns",
    description:
      "We run performance-driven ads on Meta, Google, LinkedIn, and TikTok — built to convert, not just spend.",
    features: [
      "Ad strategy & creative",
      "Smart audience targeting",
      "A/B testing & optimization",
      "ROI-focused reporting",
    ],
    image: "/prod/updated_images/services/Without_BG/PaidAdsCampaigns.png",
  },
  {
    title: "Content Creation",
    description:
      "From Reels to Stories to carousels — we create content that clicks, sticks, and scales.",
    features: [
      "High-performing visuals",
      "Branded, scroll-stopping content",
      "Optimized for each platform",
    ],
    image: "/prod/updated_images/services/Without_BG/ContentCreation.png",
  },
  {
    title: "Strategy & Consulting",
    description:
      "Build with clarity. We craft winning content strategies and growth roadmaps that drive real results.",
    features: [
      "Brand & content strategy",
      "Platform planning",
      "Growth & campaign roadmaps",
      "1:1 strategy sessions",
    ],
    image: "/prod/updated_images/services/Without_BG/StrategyConsulting.png",
  },
  {
    title: "Community Engagement & Growth",
    description:
      "We help you grow real communities — through authentic connection and engagement that compounds.",
    features: [
      "Organic follower growth",
      "Engagement via DMs, comments, shares",
      "Community retention systems",
    ],
    image: "/prod/updated_images/services/Without_BG/CommunityEngagementGrowth.png",
  },
];


const Page = () => (
  <div className="bg-black text-white">
    <div>
      <h2 className="text-3xl font-bold text-center sm:text-5xl text-dark-orange">
        Our Services
      </h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
        At The Digital Singhs, we don’t do one-size-fits-all. We build content systems that grab attention, build trust, and convert — from strategy to ads to analytics.
      </p>
    </div>
    <div className="bg-black">
      {servicesData.map((service, index) => (
        <ServiceCard key={index} {...service} reverse={index % 2 !== 0} />
      ))}
    </div>
  </div>
);

export default Page;
