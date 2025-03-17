import React from "react";
import { useRouter } from "next/router";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import blogs from "@/data/blogs"; // ✅ Importing blog data

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;
  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl">
        Blog Not Found!
      </div>
    );
  }

  return (
    <>
      <Header />
      <section className="py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto px-6">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-60 object-cover rounded-md mb-6"
          />
          <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
          <div
            className="text-lg text-gray-700 leading-7"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetails;
