import React from "react";
import { motion } from "framer-motion";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const HireMe = () => {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl font-extrabold">Hire Me</h1>
          <p className="text-lg mt-2 opacity-80">
            Let's collaborate and create something amazing!
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Hire Me?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert in Modern Tech",
                description:
                  "Next.js, React, Tailwind CSS & scalable web apps.",
                icon: "💻",
              },
              {
                title: "Client-Centric Approach",
                description: "Customized solutions tailored to your needs.",
                icon: "🤝",
              },
              {
                title: "On-Time Delivery",
                description:
                  "Projects completed on schedule without compromise.",
                icon: "⏳",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-xl font-semibold mt-3">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Services I Offer</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Web Development",
                desc: "Modern & responsive websites",
                icon: "🌐",
              },
              {
                title: "App Development",
                desc: "Cross-platform mobile apps",
                icon: "📱",
              },
              {
                title: "Full-Stack Solutions",
                desc: "Frontend & backend development",
                icon: "⚙️",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
              >
                <div className="text-4xl">{service.icon}</div>
                <h3 className="text-xl font-semibold mt-3">{service.title}</h3>
                <p className="text-gray-600 mt-2">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <form className="bg-white p-6 rounded-lg shadow-lg text-left">
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-1"
                rows="4"
              ></textarea>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
        <p className="text-lg text-gray-300 mt-2">
          Contact me today and let's bring your vision to life!
        </p>
        <a
          href="mailto:shankhan@example.com"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </section>

      <Footer />
    </>
  );
};

export default HireMe;
