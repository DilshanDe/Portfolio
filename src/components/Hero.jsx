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
    <div className="min-h-screen pt-20" id='home'>
      <motion.div
        className="lg:px-8 max-w-7xl mx-auto px-4 py-20 sm:px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col justify-between gap-12 items-center lg:flex-row">
          <motion.div className="lg:w-3/5 space-y-8" variants={itemVariants}>
            <motion.h1 
              className="bg-clip-text bg-gradient-to-r text-5xl text-transparent font-bold from-red-600 lg:text-6xl to-blue-400 via-pink-500"
              variants={fadeInLeftVariants} 
            >
              Dilshan De Silva
            </motion.h1>
            
            <motion.div 
              className="text-2xl text-gray-700 dark:text-gray-200 lg:text-3xl"
              variants={fadeInLeftVariants}
            >
              Full Stack Developer
            </motion.div>

            <motion.p 
              className="text-gray-600 text-lg dark:text-gray-400 leading-relaxed max-w-2xl"
              variants={itemVariants}
            >
                {HERO_CONTENT}
            </motion.p> 

            <motion.div variants={itemVariants}>
              <motion.a
                href="/resume.pdf"
                download
                className="bg-red-600 rounded-full text-white duration-300 font-medium group hover:bg-red-700 inline-flex items-center px-6 py-3 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="h-5 w-5 group-hover:animate-bounce mr-2" />
                Download
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            variants={itemVariants}
          >
            <motion.div
              className="w-full aspect-square max-w-md mx-auto relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-gradient-to-r rounded-3xl absolute animate-pulse blur-xl from-red-600 inset-0 opacity-20 to-pink-500"></div>
              <img
                src={profilePic}
                alt="Profile"
                loading="lazy"
                className="h-full rounded-3xl w-full duration-500 grayscale hover:grayscale-0 object-cover relative transition-all"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
