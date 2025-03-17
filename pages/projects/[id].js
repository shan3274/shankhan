import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern and stylish portfolio website built using Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    features: ["Dark Mode Support", "SEO Optimized", "Fast Performance"],
    category: "Web Development",
    image:
      "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=600",
    screenshots: [
      "https://images.pexels.com/photos/11397395/pexels-photo-11397395.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6070602/pexels-photo-6070602.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/15717260/pexels-photo-15717260/free-photo-of-laptops-on-desk-in-dark.jpeg?auto=compress&cs=tinysrgb&w=600",
    ],
    liveLink: "https://yourportfolio.com",
    repoLink: "https://github.com/yourrepo",
    testimonial: {
      text: "This portfolio website is sleek and very responsive. It has helped me land multiple clients!",
      author: "John Doe, Freelancer",
    },
  },
];

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const project = projects.find((proj) => proj.id === Number(id));

  if (!project) {
    return (
      <>
        <Header />
        <div className="h-screen flex items-center justify-center">
          <h1 className="text-2xl font-bold text-gray-700">
            Project Not Found
          </h1>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-gray-900 text-white">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold">{project.title}</h1>
          <p className="text-lg mt-2">{project.category}</p>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-700 text-lg">{project.description}</p>

          {/* Features List */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Key Features:</h3>
            <ul className="mt-2 space-y-2">
              {project.features.map((feature, index) => (
                <li
                  key={index}
                  className="text-gray-600 flex items-center gap-2"
                >
                  ✅ {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Tech Stack:</h3>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {project.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-black text-white text-sm px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Project Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {project.screenshots.map((screenshot, index) => (
              <motion.img
                key={index}
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg shadow-md"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">What Clients Say</h2>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 italic">
              "{project.testimonial.text}"
            </p>
            <p className="text-gray-900 font-semibold mt-4">
              - {project.testimonial.author}
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-3xl font-bold">Want a Similar Project?</h2>
        <p className="text-lg text-gray-300 mt-2">
          Let's work together to build something amazing.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </section>

      <Footer />
    </>
  );
};

export default ProjectDetail;
