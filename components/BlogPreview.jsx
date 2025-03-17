import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

// ✅ Reusable Blog Card Component
const BlogCard = ({ title, excerpt, image, link }) => {
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
      <Link
        href={link}
        className="text-blue-500 font-semibold mt-4 inline-block"
      >
        Read More →
      </Link>
    </motion.div>
  );
};

// ✅ Blog Section
const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Scale Your Freelance Business",
      excerpt: "Learn the key strategies to grow your freelancing career...",
      image:
        "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/blog/how-to-scale-freelancing",
    },
    {
      id: 2,
      title: "Next.js vs React: Which One to Choose?",
      excerpt: "A deep dive into the differences between Next.js and React...",
      image:
        "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/blog/nextjs-vs-react",
    },
    {
      id: 3,
      title: "Mastering Spring Boot for Backend Development",
      excerpt: "Spring Boot makes Java backend development easier than ever...",
      image:
        "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "/blog/mastering-spring-boot",
    },
  ];

  return (
    <section id="blog" className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Latest Blog Posts</h2>
        <p className="text-lg text-gray-600 mb-10">
          Explore my latest insights on freelancing, tech, and web development.
        </p>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
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
