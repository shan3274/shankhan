import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogs from "@/data/blogs"; // ✅ Importing blog data

const BlogPage = () => {
  return (
    <>
      <Header />
      <section className="py-16 bg-white text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-6">All Blog Posts</h1>
          <p className="text-lg text-gray-600 mb-10">
            Explore my insights on freelancing, tech, and web development.
          </p>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100/80 backdrop-blur-lg p-6 rounded-lg shadow-lg text-left border border-gray-300 transition-all"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-black">
                  {post.title}
                </h3>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-500 font-semibold mt-4 inline-block"
                >
                  Read More →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogPage;
