import { useRouter } from "next/router";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";

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
import { servicesData } from "@/data/servicesdata";

const icons = {
  code: <Code size={50} className="text-[#C9EADA]" />,
  smartphone: <Smartphone size={50} className="text-[#C9EADA]" />,
  database: <Database size={50} className="text-[#C9EADA]" />,
  paintbrush: <Paintbrush size={50} className="text-[#C9EADA]" />, // ✅ Fix किया
  "shopping-bag": <ShoppingBag size={50} className="text-[#C9EADA]" />,
  search: <Search size={50} className="text-[#C9EADA]" />,
  cloud: <Cloud size={50} className="text-[#C9EADA]" />, // ✅ New (Cloud Computing)
  shieldcheck: <ShieldCheck size={50} className="text-[#C9EADA]" />, // ✅ New (Security)
  brain: <Brain size={50} className="text-[#C9EADA]" />, // ✅ New (AI/ML)
  server: <Server size={50} className="text-[#C9EADA]" />, // ✅ New (Server/Hosting)
  network: <Network size={50} className="text-[#C9EADA]" />, // ✅ API Development Fix
};

const ServicePage = () => {
  const router = useRouter();
  const { service } = router.query;

  if (!service || !servicesData[service]) {
    return (
      <p className="text-center text-xl font-bold mt-20">Service Not Found</p>
    );
  }

  const {
    title,
    description,
    features,
    benefits,
    process,
    faqs,
    testimonials,
    icon,
  } = servicesData[service];

  return (
    <>
      <Header />
      <section className="bg-white text-black py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Service Intro */}
          <div className="text-center">
            {icons[icon]}
            <h1 className="text-5xl font-extrabold text-gray-900 mt-4">
              {title}
            </h1>
            <p className="text-lg text-gray-700 mt-2">{description}</p>
          </div>

          {/* Features Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="p-4 bg-[#F4F7F8] rounded-lg shadow-md"
                >
                  ✅ {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900">Benefits</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="p-4 bg-[#F4F7F8] rounded-lg shadow-md"
                >
                  🌟 {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Process Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Process</h2>
            <ul className="mt-4 space-y-4">
              {process.map((step, index) => (
                <li
                  key={index}
                  className="p-4 bg-[#EAF7F0] rounded-lg shadow-md"
                >
                  <strong>
                    {index + 1}. {step.step}:
                  </strong>{" "}
                  {step.detail}
                </li>
              ))}
            </ul>
          </div>

          {/* FAQs Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <ul className="mt-4 space-y-4">
              {faqs.map((faq, index) => (
                <li
                  key={index}
                  className="p-4 bg-[#F7F4FA] rounded-lg shadow-md"
                >
                  <strong>❓ {faq.question}</strong>
                  <p className="mt-2">💡 {faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonials Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-[#FFF3E1] rounded-lg shadow-md"
                >
                  <p>“{testimonial.review}”</p>
                  <strong className="block mt-2">- {testimonial.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ServicePage;
