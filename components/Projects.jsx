import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "A modern portfolio website built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image:
      "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveLink: "https://yourportfolio.com",
    repoLink: "https://github.com/yourrepo",
  },
  {
    id: 2,
    title: "E-Commerce App",
    description: "A fully functional e-commerce app with payment integration.",
    tech: ["React", "Redux", "Firebase"],
    image:
      "https://images.pexels.com/photos/3228682/pexels-photo-3228682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveLink: "https://yourecommerce.com",
    repoLink: "https://github.com/yourecommerce",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Cross-platform mobile app using React Native.",
    tech: ["React Native", "Expo", "Firebase"],
    image:
      "https://images.pexels.com/photos/14263441/pexels-photo-14263441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveLink: "https://yourapp.com",
    repoLink: "https://github.com/yourapp",
  },
  {
    id: 4,
    title: "SaaS Dashboard",
    description: "An admin dashboard with real-time analytics.",
    tech: ["Next.js", "Tailwind", "Chart.js"],
    image:
      "https://images.pexels.com/photos/14158915/pexels-photo-14158915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    liveLink: "https://yourdashboard.com",
    repoLink: "https://github.com/yourdashboard",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-lg text-gray-600 mb-10">
          Some of my best work showcasing my skills & expertise.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-100 rounded-lg shadow-lg overflow-hidden text-center"
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
                <div className="mt-4 flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900"
                  >
                    Live Preview
                  </a>
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black text-black px-4 py-2 rounded-lg hover:bg-black hover:text-white"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
