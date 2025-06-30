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
      "Platforms: Instagram, Facebook, LinkedIn, TikTok, YouTube, and more.",
    features: [
      "Scheduling and posting content",
      "Profile optimization",
      "Analytics tracking and reporting",
    ],
    image: "/images/services/social-media-marketing.avif",
  },
  {
    title: "Paid Ads & Campaigns",
    description:
      "Creation and management of paid advertising on Meta, Google Ads, LinkedIn Ads, TikTok Ads.",
    features: [
      "Campaign strategy",
      "Targeting",
      "A/B testing",
      "Performance optimization",
    ],
    image: "/images/services/paid-Ads.jpg",
  },
  {
    title: "Content Creation",
    description: "Types of content: Reels, Stories, Graphics, Static posts.",
    features: [
      "Focus on engaging content",
      "Branded content",
      "Platform-optimized design",
    ],
    image: "/images/services/content-creation.jpg",
  },
  {
    title: "Strategy & Consulting",
    description:
      "Helping brands develop strong digital foundations and growth plans.",
    features: [
      "Digital brand strategy",
      "Content planning",
      "Growth roadmaps",
      "Campaign strategy sessions",
    ],
    image: "/images/services/people-analyzing.avif",
  },
  {
    title: "Community Engagement & Growth",
    description: "Building real communities through conversation and value.",
    features: [
      "Organic follower growth",
      "Engagement campaigns (comments, DMs, shares)",
      "Community building & retention strategies",
    ],
    image: "/images/services/communities.jpg",
  },
];

const Page = () => (
  <div className="bg-black text-white">
    <div>
      <h2 className="text-3xl font-bold text-center sm:text-5xl text-dark-orange">
        Our Services
      </h2>
      <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
        Discover the wide range of services offered by The Digital Singhs &
        Corps to elevate your digital presence and drive growth.
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
