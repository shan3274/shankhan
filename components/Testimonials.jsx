import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Amit Verma",
    designation: "Founder, Tech Solutions",
    feedback:
      "Shan is an incredible developer! He transformed our vision into a fully functional website with smooth animations and a clean UI.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sanya Kapoor",
    designation: "CEO, Digital Agency",
    feedback:
      "Professional, efficient, and creative! Working with Shan was an amazing experience. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    designation: "Product Manager, StartupX",
    feedback:
      "Shan’s technical skills and problem-solving approach make him stand out. Our project was delivered before the deadline with top-notch quality.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const brandLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-gray-100 text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">What Clients Say</h2>
        <p className="text-lg text-gray-600 mb-10">
          Here’s what my clients have to say about my work.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-500 text-sm">{testimonial.designation}</p>
              <p className="text-gray-700 mt-3">“{testimonial.feedback}”</p>
            </motion.div>
          ))}
        </div>

        {/* Brand Logos */}
        <div className="mt-20">
          {" "}
          {/* Increased margin for better spacing */}
          <h3 className="text-xl font-semibold mb-6">
            Trusted by Top Companies
          </h3>{" "}
          {/* Reduced font size */}
          <div className="flex justify-center items-center gap-12 flex-wrap">
            {" "}
            {/* Increased gap */}
            {brandLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="Brand Logo"
                className="h-10 object-contain" // Reduced height for better alignment
              />
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Testimonials;
