import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* 🔹 Left - Brand Info */}
        <div>
          <h2 className="text-xl font-semibold">Shan Khan</h2>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            Freelance Web & App Developer with 3+ years of experience in
            building modern, responsive, and scalable solutions.
          </p>
        </div>

        {/* 🔹 Center - Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-gray-600 hover:text-blue-600 transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-gray-600 hover:text-blue-600 transition-all"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-gray-600 hover:text-blue-600 transition-all"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-blue-600 transition-all"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 🔹 Right - Social Media Icons */}
        <div>
          <h3 className="text-lg font-semibold">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-5 mt-3">
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all"
            >
              <Facebook size={22} />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all"
            >
              <Twitter size={22} />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all"
            >
              <Instagram size={22} />
            </Link>
            <Link
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-all"
            >
              <Linkedin size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* 🔹 Bottom - Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Shan Khan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
