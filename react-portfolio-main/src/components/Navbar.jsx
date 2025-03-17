import React, { useState } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";
import { RiCloseFill, RiMenu3Line } from "react-icons/ri";
import { Link } from 'react-scroll';


const navVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const iconVariants = {
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: { duration: 0.2 },
  },
};

const linkVariants = {
  hover: {
    scale: 1.1,
    color: "#F87171",
    transition: { duration: 0.2 },
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md  shadow-sm"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent"
            >
              CD
            </a>
          </motion.div>

          <div className="hidden md:flex space-x-10 ml-14">
            {[
              { label: "Home", to: "home" },
              { label: "Technologies", to: "technologies" },
              { label: "Projects", to: "projects" },
              { label: "Blog", to: "blog" },
              { label: "Contact", to: "contacts" },
            ].map((link) => (
              <motion.div
                key={link.label}
                className="text-gray-400 hover:text-red-400 transition-colors dark:text-gray-100 dark:hover:text-red-500 font-light hover:cursor-pointer"
                variants={linkVariants}
                whileHover="hover"
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/chamika-damith/",
                label: "LinkedIn",
              },
              {
                icon: Github,
                href: "https://github.com/chamika-damith",
                label: "GitHub",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/chamika.damith71/",
                label: "Instagram",
              },
              {
                icon: Mail,
                href: "mailto:chamikadamith9@gmail.com",
                label: "Email",
              },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-red-400 transition-colors dark:text-gray-100 dark:hover:text-red-500"
                variants={iconVariants}
                whileHover="hover"
              >
                <item.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              onClick={toggleMenu}
            >
              {isOpen ? <RiCloseFill size={28} /> : <RiMenu3Line size={28} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-red-950 via-gray-900 to-black backdrop-blur-lg border border-neutral-700 p-6 rounded-xl mt-2 shadow-xl">
          <div className="flex flex-col  space-y-6 text-neutral-300">
            <a
              href="#home"
              className="hover:text-red-400 transition duration-300"
            >
              Home
            </a>
            <a
              href="#technologies"
              className="hover:text-red-400 transition duration-300"
            >
              Technologies
            </a>
            <a
              href="#projects"
              className="hover:text-red-400 transition duration-300"
            >
              Projects
            </a>
            <a
              href="#blog"
              className="hover:text-red-400 transition duration-300"
            >
              Blog
            </a>
            <a
              href="#contacts"
              className="hover:text-red-400 transition duration-300"
            >
              Contacts
            </a>

            <div className=" flex items-center space-x-16">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/chamika-damith/",
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: "https://github.com/chamika-damith",
                  label: "GitHub",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/chamika.damith71/",
                  label: "Instagram",
                },
                {
                  icon: Mail,
                  href: "mailto:chamikadamith9@gmail.com",
                  label: "Email",
                },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-red-400 transition-colors dark:text-gray-100 dark:hover:text-red-500"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <item.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;
