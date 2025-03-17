import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import profilePic from '../assets/profilePicnew.webp';
import { HERO_CONTENT } from '../assets/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,  // Slightly longer stagger for a more graceful reveal
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,  // Increased duration for a smoother animation
      ease: "easeOut",
    }
  }
};

const fadeInLeftVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    }
  }
};

function Hero() {
  return (
    <div className="min-h-screen pt-20 " id='home'>
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div className="lg:w-3/5 space-y-8" variants={itemVariants}>
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-600 via-pink-500 to-blue-400 bg-clip-text text-transparent"
              variants={fadeInLeftVariants} 
            >
              Chamika Damith
            </motion.h1>
            
            <motion.div 
              className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-200"
              variants={fadeInLeftVariants}
            >
              Full Stack Developer
            </motion.div>

            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
                {HERO_CONTENT}
            </motion.p> 

            <motion.div variants={itemVariants}>
              <motion.a
                href="/resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 rounded-full bg-red-600 hover:bg-red-700 text-white font-medium transition-colors duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full aspect-square max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-pink-500 rounded-3xl blur-xl opacity-20 animate-pulse"></div>
              <img
                src={profilePic}
                alt="Profile"
                loading="lazy"
                className="relative rounded-3xl w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
