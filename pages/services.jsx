import Link from "next/link";
import {
  Code,
  Smartphone,
  Database,
  Paintbrush,
  ShoppingBag,
  Search,
  Cloud,
  ShieldCheck,
  Brain,
  Server,
  Network,
} from "lucide-react";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

const serviceIcons = {
  Code,
  Smartphone,
  Database,
  Paintbrush,
  ShoppingBag,
  Search,
  Cloud,
  ShieldCheck,
  Brain,
  Server,
  Network,
};

const services = [
  {
    title: "Website Development",
    description:
      "Build fast, scalable websites using React.js, Next.js, and Tailwind CSS.",
    icon: "Code",
    link: "/services/website-development",
  },
  {
    title: "Mobile App Development",
    description: "Develop cross-platform apps using React Native and Firebase.",
    icon: "Smartphone",
    link: "/services/mobile-app-development",
  },
  {
    title: "Backend Development",
    description:
      "Secure and scalable backend using Java, Spring Boot, and Node.js.",
    icon: "Database",
    link: "/services/backend-development",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and user-friendly designs using Figma and Adobe XD.",
    icon: "Paintbrush",
    link: "/services/ui-ux-design",
  },
  {
    title: "E-commerce Solutions",
    description: "Custom Shopify stores and full-stack e-commerce platforms.",
    icon: "ShoppingBag",
    link: "/services/ecommerce-solutions",
  },
  {
    title: "SEO & Optimization",
    description:
      "Boost your website ranking and speed with SEO best practices.",
    icon: "Search",
    link: "/services/seo-optimization",
  },
  {
    title: "Cloud Computing",
    description:
      "Deploy and manage applications using AWS, Azure, and Google Cloud.",
    icon: "Cloud",
    link: "/services/cloud-computing",
  },
  {
    title: "Cybersecurity Solutions",
    description: "Secure your web and mobile applications from cyber threats.",
    icon: "ShieldCheck",
    link: "/services/cybersecurity",
  },
  {
    title: "AI & Machine Learning",
    description:
      "Build intelligent systems using Python, TensorFlow, and OpenAI.",
    icon: "Brain",
    link: "/services/ai-ml",
  },
  {
    title: "Database Management",
    description:
      "Efficient database design and optimization using SQL and NoSQL.",
    icon: "Server",
    link: "/services/database-management",
  },
  {
    title: "Custom API Development",
    description:
      "Build and integrate RESTful & GraphQL APIs for your applications.",
    icon: "Network",
    link: "/services/api-development",
  },
];

const Services = () => {
  return (
    <>
      <Header />
      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold text-gray-900">My Services</h1>
          <p className="text-lg text-gray-700 mt-4">
            I offer end-to-end solutions for web, mobile, and backend
            development.
          </p>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.icon];

              return (
                <Link key={index} href={service.link} className="group">
                  <div className="p-6 bg-[#F4F7F8] text-gray-900 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105">
                    <div className="mb-4">
                      {IconComponent && (
                        <IconComponent size={40} className="text-[#C9EADA]" />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="mt-2 text-gray-700">{service.description}</p>
                    <span className="mt-4 inline-block text-[#2C7366] font-medium">
                      Learn More →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      <Footer />
    </>
  );
};

export default Services;
