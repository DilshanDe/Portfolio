import React from "react";
import { BlogCard } from "./BlogCard";
import { BLOGPOST } from "../assets/constants";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <article
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      data-page="blog"
      id="blog"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-2">
            <motion.h2
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r  from-pink-200 to-red-500 mb-4 mb-4"
            >
              Latest Articles
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className=" text-zinc-400 max-w-2xl mx-auto"
          >
            Explore the future of technology through my curated insights and
            discoveries
          </motion.p>
        </header>

        <section className="blog-posts">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGPOST.map((post, index) => (
              <BlogCard key={index} post={post} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              to=""
              className="rounded-full bg-gradient-to-r from-red-700 via-gray-600 to-pink-900 hover:bg-slate-800 px-6 py-3 text-white transition"
            >
              View All
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
