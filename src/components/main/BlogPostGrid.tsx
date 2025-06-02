"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'UI/UX design Tips',
    date: '19 Feb, 2022',
    author: 'Admin',
    image: '/uiux.png',
    excerpt: 'Promotion World has once placed PageTraffic among the top.',
    color: 'border-red-300 text-red-500'
  },
  {
    title: 'Improve your UX/UI',
    date: '08 Apr, 2022',
    author: 'Admin',
    image: '/uxui.png',
    excerpt: 'Promotion World has once placed PageTraffic among the top.',
    color: 'border-teal-300 text-teal-500'
  },
  {
    title: 'Meta Technology.',
    date: '25 Jan, 2022',
    author: 'Admin',
    image: '/meta.png',
    excerpt: 'Promotion World has once placed PageTraffic among the top.',
    color: 'border-green-300 text-green-500'
  },
  {
    title: 'PageTraffic Ranks',
    date: '13 Nov, 2022',
    author: 'Admin',
    image: '/ranks.png',
    excerpt: 'Promotion World has once placed PageTraffic among the top.',
    color: 'border-red-300 text-red-500'
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function BlogPostGrid() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 max-width mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">See Our Blog Post</h2>
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {blogPosts.map((post, index) => (
          <motion.div
            key={index}
            variants={item}
            className={`flex gap-2 min-h-[260px] h-full max-[500px]:flex-col rounded-2xl border p-4 shadow-md hover:shadow-lg transition-all duration-300 ${post.color}`}
          >
            <div className="relative min-w-44 min-h-[260px] h-full mb-4 rounded-lg overflow-hidden">
              <Image
                src="/temp-images/image.png"
                // src={post.image}
                alt={post.title}
                fill
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
            <div className="py-2 sm:py-4 px-1 sm:px-5 flex flex-col gap-1 sm:gap-4">
              <p className="text-sm font-medium text-gray-500 mb-1">{post.date} / By {post.author}</p>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-3">{post.excerpt}</p>
              <div className="flex items-center gap-2 font-bold cursor-pointer group">
                <span className={`text-base   ${post.color}`.split(' ')[1]}>Read more</span>
                <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${post.color}`.split(' ')[1]} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
