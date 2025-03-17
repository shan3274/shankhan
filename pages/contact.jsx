import React from "react";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Navbar";

const Contact = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-blue-500 to-teal-500 text-white">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-lg mt-2">Have a project in mind? Let’s talk!</p>
        </section>

        {/* Contact & Info Section */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12">
          {/* Left Side - Contact Form */}
          <div className="bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Form
            </h2>
            <ContactSection />
          </div>

          {/* Right Side - Contact Info */}
          <div className="p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Contact Information
            </h2>

            <div className="mb-6">
              <p className="text-lg font-medium">📍 Office Address:</p>
              <p className="text-gray-600">
                123 Tech Park, Silicon Valley, CA, USA
              </p>
            </div>

            <div className="mb-6">
              <p className="text-lg font-medium">📞 Phone:</p>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>

            <div className="mb-6">
              <p className="text-lg font-medium">📧 Email:</p>
              <p className="text-gray-600">contact@shanportfolio.com</p>
            </div>

            <div className="mb-6">
              <p className="text-lg font-medium">🕒 Working Hours:</p>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Sat - Sun: Closed</p>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-blue-500 text-2xl">🔵</a>
              <a href="#" className="text-black text-2xl">🔲</a>
              <a href="#" className="text-red-500 text-2xl">🔴</a>
            </div>
          </div>
        </section>

        {/* Google Map */}
        <section className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Find Me Here
          </h2>
          <iframe
            className="w-full h-72 rounded-lg shadow-lg"
            src="https://www.google.com/maps/embed?..."
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
