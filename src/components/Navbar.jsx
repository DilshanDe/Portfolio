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
      className="shadow-sm backdrop-blur-md fixed left-0 right-0 top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="lg:px-8 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex h-20 justify-between items-center">
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <a
              href="/"
              className="bg-clip-text bg-gradient-to-r text-2xl text-transparent font-bold from-yellow-400 to-red-600"
            >
              CD
            </a>
          </motion.div>

          <div className="hidden md:flex ml-14 space-x-10">
            {[
              { label: "Home", to: "home" },
              { label: "Technologies", to: "technologies" },
              { label: "Projects", to: "projects" },
              { label: "Blog", to: "blog" },
              { label: "Contact", to: "contacts" },
            ].map((link) => (
              <motion.div
                key={link.label}
                className="text-gray-400 dark:hover:text-red-500 dark:text-gray-100 font-light hover:cursor-pointer hover:text-red-400 transition-colors"
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

          <div className="hidden items-center md:flex space-x-6">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/dilshan-de-silva-7940142a9",
                label: "LinkedIn",
              },
              {
                icon: Github,
                href: "https://github.com/DilshanDe",
                label: "GitHub",
              },
              {
                icon: Instagram,
                href: "https://www.instagram.com/dilshandesilwa/",
                label: "Instagram",
              },
              {
                icon: Mail,
                href: "mailto:dilshansilwa54@gmail.com",
                label: "Email",
              },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 dark:hover:text-red-500 dark:text-gray-100 hover:text-red-400 transition-colors"
                variants={iconVariants}
                whileHover="hover"
              >
                <item.icon className="h-6 w-6" />
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
        <div className="bg-gradient-to-r border border-neutral-700 p-6 rounded-xl shadow-xl backdrop-blur-lg from-red-950 md:hidden mt-2 to-black via-gray-900">
          <div className="flex flex-col text-neutral-300 space-y-6">
            <a
              href="#home"
              className="duration-300 hover:text-red-400 transition"
            >
              Home
            </a>
            <a
              href="#technologies"
              className="duration-300 hover:text-red-400 transition"
            >
              Technologies
            </a>
            <a
              href="#projects"
              className="duration-300 hover:text-red-400 transition"
            >
              Projects
            </a>
            <a
              href="#blog"
              className="duration-300 hover:text-red-400 transition"
            >
              Blog
            </a>
            <a
              href="#contacts"
              className="duration-300 hover:text-red-400 transition"
            >
              Contacts
            </a>

            <div className="flex items-center space-x-16">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/dilshan-de-silva-7940142a9",
                  
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: "https://github.com/DilshanDe",
                  label: "GitHub",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/dilshandesilwa/",
                
                  label: "Instagram",
                },
                {
                  icon: Mail,
                  href: "mailto:dilshansilwa54@gmail.com",
                  label: "Email",
                },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 dark:hover:text-red-500 dark:text-gray-100 hover:text-red-400 transition-colors"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <item.icon className="h-6 w-6" />
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
