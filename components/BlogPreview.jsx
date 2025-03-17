import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import blogs from "../data/blogs"; // ✅ Importing from blogs.js

// ✅ Reusable Blog Card Component
const BlogCard = ({ title, excerpt, image, slug }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-100/80 backdrop-blur-lg p-6 rounded-lg shadow-lg text-left border border-gray-300 transition-all"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-black">{title}</h3>
      <p className="text-gray-600 mt-2">{excerpt}</p>

      {/* ✅ Link ko conditionally render karo */}
      {slug ? (
        <Link
          href={`/blog/${slug}`}
          className="text-blue-500 font-semibold mt-4 inline-block"
        >
          Read More →
        </Link>
      ) : (
        <span className="text-gray-400 italic mt-4 inline-block">
          Coming Soon
        </span>
      )}
    </motion.div>
  );
};

// ✅ Blog Section
const BlogPreview = () => {
  // ✅ Sirf Latest 3 Blogs Show Karne Ke Liye slice(0,3)
  const latestBlogs = blogs.slice(0, 3);

  return (
    <section id="blog" className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Latest Blog Posts</h2>
        <p className="text-lg text-gray-600 mb-10">
          Explore my latest insights on freelancing, tech, and web development.
        </p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestBlogs?.map((post) => (
            <BlogCard key={post.id} {...post} />
          ))}
        </div>

        {/* View All Blogs Button */}
        <div className="mt-12">
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="px-6 py-3 bg-black text-white rounded-md shadow-md hover:bg-gray-900 transition"
            >
              View All Blogs
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
