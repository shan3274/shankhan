import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null); // Success/Error Message State

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("your_service_id", "your_template_id", e.target, "your_user_id")
      .then(
        (result) => {
          setStatus({ type: "success", message: "Message Sent Successfully!" });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setStatus({
            type: "error",
            message: "Failed to send message. Try again.",
          });
        }
      );
  };

  return (
    <motion.div
      className="bg-white p-8 shadow-xl rounded-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h2>

      {status && (
        <motion.div
          className={`mb-4 p-3 text-center rounded-md ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {status.message}
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C9EADA] focus:border-[#C9EADA] transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-[#C9EADA] focus:border-[#C9EADA] transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 p-3 w-full border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-[#C9EADA] focus:border-[#C9EADA] transition"
          ></textarea>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#C9EADA] text-black font-semibold py-3 px-4 rounded-md hover:bg-[#b2d6c8] transition"
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactSection;
