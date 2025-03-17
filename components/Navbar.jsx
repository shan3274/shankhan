import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md px-6 py-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* 🔹 Left - Logo */}
        <Link href="/" className="text-lg font-bold text-gray-900">
          Shan Khan
        </Link>

        {/* 🔹 Center - Navigation Links */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm text-gray-700 font-medium hover:text-black transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* 🔹 Right - CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/hire-me"
            className="px-4 py-2 text-sm text-white bg-black rounded-md hover:bg-gray-900 transition-all"
          >
            Hire Me
          </Link>
        </div>

        {/* 🔹 Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)} className="text-gray-900">
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* 🔹 Mobile Navbar (Slide In) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg z-50 p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700"
              >
                <X size={30} />
              </button>

              {/* Navigation Links */}
              <nav className="mt-8 space-y-5 text-sm">
                {navLinks.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-700 font-medium hover:text-black transition-all block"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </motion.div>

            {/* 🔹 Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black bg-opacity-40 z-40"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
