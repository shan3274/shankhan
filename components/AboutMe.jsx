const AboutMe = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* 🔹 Section Title */}
        <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          A **dedicated software developer** with expertise in building
          **scalable** and **high-performance** web & mobile applications.
        </p>

        {/* 🔹 Glassy Black Skill Cards */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Full-Stack Development",
              desc: "React.js, Next.js, Java, Spring Boot",
            },
            {
              title: "UI/UX & Responsive Design",
              desc: "Tailwind CSS, Framer Motion, Material UI",
            },
            {
              title: "API & Backend Solutions",
              desc: "REST APIs, GraphQL, Firebase, MongoDB",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-80 text-white p-6 rounded-lg shadow-lg backdrop-blur-md border border-gray-700"
            >
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="mt-2 text-gray-300">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* 🔹 Quick Stats */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-900">
          {[
            { label: "Projects Completed", value: "50+" },
            { label: "Clients Served", value: "20+" },
            { label: "Years of Experience", value: "3+" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
