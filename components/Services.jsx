const Services = () => {
  const servicesData = [
    {
      title: "Website Development",
      description:
        "Custom frontend & backend solutions using React, Next.js, and modern web technologies.",
      icon: "🌐",
    },
    {
      title: "App Development",
      description:
        "Building scalable mobile & web apps with modern frameworks for seamless user experience.",
      icon: "📱",
    },
    {
      title: "Tech Consultation",
      description:
        "Get expert guidance on projects, architecture, and best practices for your tech stack.",
      icon: "💡",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">My Services</h2>
        <p className="mt-4 text-gray-600">
          Providing high-quality solutions tailored to your business needs.
        </p>

        {/* 🔹 Services Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-black/90 text-white p-6 rounded-xl shadow-lg border border-gray-700 transition-transform transform hover:scale-105"
            >
              <div className="text-4xl">{service.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
