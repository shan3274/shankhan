import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Briefcase, Smartphone } from "lucide-react";

const skills = [
  {
    title: "Frontend Development",
    description: "React.js, Next.js, Tailwind CSS",
    icon: <Code size={40} className="text-[#C9EADA]" />,
  },
  {
    title: "Backend Development",
    description: "Java, Spring Boot, Node.js",
    icon: <Briefcase size={40} className="text-[#C9EADA]" />,
  },
  {
    title: "Mobile App Development",
    description: "React Native, Firebase",
    icon: <Smartphone size={40} className="text-[#C9EADA]" />,
  },
];

const About = () => {
  return (
    <>
      <Header />

      {/* 🚀 Hero Section */}
      <section className="relative bg-[#F4F7F8] text-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* 🔥 Left - Text Content */}
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold leading-tight">
              Hey, I'm <span className="text-[#2C7366]">Shan Khan</span>
            </h1>
            <p className="text-lg text-gray-700 mt-4 max-w-lg">
              A <strong>Software Developer</strong> specializing in{" "}
              <strong>Web & Mobile App Development</strong> with 3+ years of
              experience. Passionate about **React, Next.js, and Spring Boot**,
              I build **scalable digital solutions**.
            </p>

            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <Link
                href="/projects"
                className="px-6 py-3 text-lg font-medium bg-[#2C7366] text-white rounded-lg shadow-md hover:bg-[#245C4F] transition-all"
              >
                View My Work
              </Link>
              <Link
                href="/hire-me"
                className="px-6 py-3 text-lg font-medium border border-gray-400 rounded-lg hover:bg-gray-300 transition-all"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>

          {/* 🔥 Right - Profile Image */}
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#2C7366] shadow-lg">
              <img
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Shan Khan"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 🚀 Skills & Experience */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Experience & <span className="text-[#2C7366]">Tech Stack</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                Experience
              </h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>✅ 3+ years in Web & Mobile App Development</li>
                <li>✅ Worked at **Accenture** as a Software Developer</li>
                <li>
                  ✅ Freelancing & building custom solutions for businesses
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800">
                Tech Stack
              </h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li>
                  ⚡ Frontend: React.js, Next.js, Tailwind CSS, Framer Motion
                </li>
                <li>⚡ Backend: Java, Spring Boot, Node.js</li>
                <li>⚡ Database: PostgreSQL, MongoDB, Firebase</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🚀 Why Work With Me? */}
      <section className="bg-[#2C7366] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Why Work <span className="text-[#F4F7F8]">With Me?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {[
              {
                title: "🚀 Fast & Efficient",
                text: "Clean and optimized code for smooth performance.",
              },
              {
                title: "🔒 Secure & Scalable",
                text: "Solutions that are future-proof and stable.",
              },
              {
                title: "💬 Transparent Communication",
                text: "Regular updates throughout the project.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white text-gray-900 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🚀 CTA Section */}
      <motion.div
        className="py-16 bg-[#F4F7F8] text-center relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          {/* 🔥 Left - Text Content */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-gray-900">
              Let’s Build{" "}
              <span className="text-[#2C7366]">Something Amazing</span>{" "}
              Together!
            </h2>
            <p className="text-gray-700 mt-4 text-lg">
              Have a project idea? Let's discuss how I can bring it to life with
              my skills & expertise.
            </p>

            <motion.a
              href="/hire-me"
              className="mt-6 inline-block px-6 py-3 bg-[#2C7366] text-white rounded-lg hover:bg-[#245C4F] transition-all shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              Get in Touch
            </motion.a>
          </div>

          {/* 🔥 Right - Image */}
          <motion.div
            className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img
              src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Work Together"
              className="w-80 h-auto rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default About;
