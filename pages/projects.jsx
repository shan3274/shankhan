import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    category: "Web",
    image:
      "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https://yourportfolio.com",
    repoLink: "https://github.com/yourrepo",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "A fully functional e-commerce app with payment integration.",
    tech: ["React", "Redux", "Firebase"],
    category: "Web",
    image:
      "https://images.pexels.com/photos/3228682/pexels-photo-3228682.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https://yourecommerce.com",
    repoLink: "https://github.com/yourecommerce",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Cross-platform mobile app using React Native.",
    tech: ["React Native", "Expo", "Firebase"],
    category: "Mobile",
    image:
      "https://images.pexels.com/photos/14263441/pexels-photo-14263441.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https://yourapp.com",
    repoLink: "https://github.com/yourapp",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description: "An admin dashboard with real-time analytics.",
    tech: ["Next.js", "Tailwind", "Chart.js"],
    category: "SaaS",
    image:
      "https://images.pexels.com/photos/14158915/pexels-photo-14158915.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https://yourdashboard.com",
    repoLink: "https://github.com/yourdashboard",
  },
  {
    id: 5,
    title: "AI Chatbot",
    description: "A smart AI chatbot built using Python and NLP models.",
    tech: ["Python", "TensorFlow", "React"],
    category: "AI",
    image:
      "https://images.pexels.com/photos/11397395/pexels-photo-11397395.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https://yourchatbot.com",
    repoLink: "https://github.com/yourchatbot",
  },
  {
    id: 6,
    title: "Food Delivery App",
    description:
      "A food delivery app with real-time tracking & AI recommendations.",
    tech: ["Flutter", "Firebase", "Node.js"],
    category: "Mobile",
    image:
      "https://images.pexels.com/photos/6070602/pexels-photo-6070602.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https://yourfoodapp.com",
    repoLink: "https://github.com/yourfoodapp",
  },
  {
    id: 7,
    title: "Business Analytics Dashboard",
    description: "A powerful dashboard for analyzing business performance.",
    tech: ["React", "D3.js", "MongoDB"],
    category: "SaaS",
    image:
      "https://images.pexels.com/photos/3153204/pexels-photo-3153204.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https://youranalytics.com",
    repoLink: "https://github.com/youranalytics",
  },
  {
    id: 8,
    title: "Dark Mode UI Kit",
    description: "A modern dark mode UI kit for web & mobile projects.",
    tech: ["Figma", "React", "Tailwind"],
    category: "Design",
    image:
      "https://images.pexels.com/photos/15717260/pexels-photo-15717260/free-photo-of-laptops-on-desk-in-dark.jpeg?auto=compress&cs=tinysrgb&w=600",
    liveLink: "https://yourdarkmode.com",
    repoLink: "https://github.com/yourdarkmode",
  },
];

// ✅ Projects Page Component
const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(
    (project) => filter === "All" || project.category === filter
  );

  return (
    <>
      <Header /> {/* ✅ Include Header */}
      <section className="min-h-screen bg-white text-black py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-8">All Projects</h1>

          {/* ✅ Filters */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {["All", "Web", "Mobile", "SaaS", "AI", "Design"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md text-lg transition ${
                    filter === category ? "bg-black text-white" : "bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>

          {/* ✅ Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Link href={`/projects/${project.id}`}>
                <motion.div
                  key={project.id}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-100 rounded-lg shadow-lg overflow-hidden text-center cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-700 mt-2">{project.description}</p>
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
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer /> {/* ✅ Include Footer */}
    </>
  );
};

export default ProjectsPage;
