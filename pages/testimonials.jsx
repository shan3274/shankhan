import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
// ✅ Footer Added
import emailjs from "emailjs-com";

const testimonials = [
  {
    id: 1,
    name: "Amit Verma",
    designation: "Founder, Tech Solutions",
    feedback:
      "Shan is an incredible developer! He transformed our vision into a fully functional website with smooth animations and a clean UI.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    project: {
      title: "Tech Solutions Website",
      description:
        "A fast, responsive website built for an IT startup, focusing on performance and UI/UX.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      duration: "4 weeks",
      challenges:
        "The client wanted a super-fast, SEO-optimized website with animations.",
      solution:
        "Implemented Next.js for performance, used Framer Motion for animations, and optimized SEO with best practices.",
      impact: "Website speed improved by 60%, and engagement increased by 45%.",
    },
  },
  {
    id: 2,
    name: "Sanya Kapoor",
    designation: "CEO, Digital Agency",
    feedback:
      "Professional, efficient, and creative! Working with Shan was an amazing experience. Highly recommended.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    project: {
      title: "E-commerce App",
      description:
        "A feature-rich e-commerce platform with real-time payment integration.",
      technologies: ["React Native", "Firebase", "Stripe API"],
      duration: "6 weeks",
      challenges: "Needed a smooth checkout and real-time inventory updates.",
      solution:
        "Integrated Stripe for payments, Firebase for real-time database, and optimized checkout flow.",
      impact: "Increased sales conversion by 30% and reduced cart abandonment.",
    },
  },
  {
    id: 3,
    name: "Rahul Sharma",
    designation: "Product Manager, StartupX",
    feedback:
      "Shan’s technical skills and problem-solving approach make him stand out. Our project was delivered before the deadline with top-notch quality.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    project: {
      title: "SaaS Dashboard",
      description:
        "A scalable admin panel with analytics and user management system.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      duration: "5 weeks",
      challenges: "Needed a scalable backend with real-time analytics.",
      solution:
        "Used Node.js & MongoDB for scalable backend, React.js for interactive UI, and integrated real-time charts.",
      impact:
        "User activity tracking improved by 50%, leading to better decisions.",
    },
  },
];
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ message: "", type: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_xxxxxx", // 🔹 Replace with your EmailJS Service ID
        "template_xxxxxx", // 🔹 Replace with your EmailJS Template ID
        formData,
        "user_xxxxxx" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setStatus({ message: "Message sent successfully!", type: "success" });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus({
            message: "Failed to send message. Please try again.",
            type: "error",
          });
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-100 text-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          Have a project in mind? Let's discuss how I can help you.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {status.message && (
            <p
              className={`text-center text-lg font-semibold ${
                status.type === "success" ? "text-green-500" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header /> {/* ✅ Header Added */}
      <section id="testimonials" className="py-16 bg-gray-100 text-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">What Clients Say</h2>
          <p className="text-lg text-gray-600 mb-10">
            Here’s what my clients have to say about my work.
          </p>

          {/* Slider */}
          <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[currentIndex].id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="bg-white p-6 rounded-lg shadow-lg text-center h-[240px] flex flex-col justify-center"
              >
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 mx-auto rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].designation}
                </p>
                <p className="text-gray-700 mt-3">
                  “{testimonials[currentIndex].feedback}”
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Active Client Project Details */}
          <div className="mt-12 bg-white shadow-lg p-6 rounded-lg text-left max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-2">
              {testimonials[currentIndex].project.title}
            </h3>
            <p className="text-gray-600 mb-4">
              {testimonials[currentIndex].project.description}
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              {testimonials[currentIndex].project.technologies.map(
                (tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-200 rounded-full text-gray-700"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <p className="mt-3 text-gray-500">
              <strong>Project Duration:</strong>{" "}
              {testimonials[currentIndex].project.duration}
            </p>

            {/* New Sections */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold">Challenges:</h4>
              <p className="text-gray-600">
                {testimonials[currentIndex].project.challenges}
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Solution:</h4>
              <p className="text-gray-600">
                {testimonials[currentIndex].project.solution}
              </p>
            </div>

            <div className="mt-4">
              <h4 className="text-lg font-semibold">Impact:</h4>
              <p className="text-gray-600">
                {testimonials[currentIndex].project.impact}
              </p>
            </div>
          </div>

          {/* Manual Navigation (Optional) */}
          <div className="mt-6 flex justify-center gap-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === currentIndex ? "bg-gray-900" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(i)}
              ></button>
            ))}
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer /> {/* ✅ Footer Added */}
    </>
  );
};

export default Testimonials;
