import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, Mail, Sparkles } from 'lucide-react';
import profilePic from '../assets/profilePicnew.webp';
import { HERO_CONTENT } from '../assets/constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
    }
  }
};

const fadeInLeftVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    }
  }
};

const imageVariants = {
  hidden: { scale: 0.8, opacity: 0, rotateY: 20 },
  visible: {
    scale: 1,
    opacity: 1,
    rotateY: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    }
  }
};

function Hero() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [nameText, setNameText] = useState('');
  const [titleText, setTitleText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentPhase, setCurrentPhase] = useState('name'); // 'name', 'title', 'complete'
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.5]);

  const fullName = "Dilshan De Silva";
  const fullTitle = "Full Stack Developer";

  useEffect(() => {
    let timeoutId;

    if (currentPhase === 'name') {
      if (nameText.length < fullName.length) {
        timeoutId = setTimeout(() => {
          setNameText(fullName.slice(0, nameText.length + 1));
        }, 100); // Speed of typing
      } else {
        // Name complete, start title after a pause
        timeoutId = setTimeout(() => {
          setCurrentPhase('title');
        }, 500);
      }
    } else if (currentPhase === 'title') {
      if (titleText.length < fullTitle.length) {
        timeoutId = setTimeout(() => {
          setTitleText(fullTitle.slice(0, titleText.length + 1));
        }, 80); // Slightly faster for title
      } else {
        // Both complete
        setCurrentPhase('complete');
      }
    }

    return () => clearTimeout(timeoutId);
  }, [nameText, titleText, currentPhase, fullName, fullTitle]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530); // Cursor blink speed

    return () => clearInterval(cursorInterval);
  }, []);

  // Google Drive download link - replace with your actual Google Drive file ID
  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Your Google Drive CV file ID
    const googleDriveFileId = '14ypoha_i2Mpi95mbHHHlGg9cAQdWrIxQ';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${googleDriveFileId}`;
    
    try {
      // Create a temporary link and trigger download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Dilshan_De_Silva_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Download failed:', error);
      // Fallback: open in new tab
      window.open(downloadUrl, '_blank');
    } finally {
      setTimeout(() => setIsDownloading(false), 2000);
    }
  };

  return (
    <div className="min-h-screen pt-20 relative overflow-hidden" id='home'>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-red-600/10 to-pink-500/10 rounded-full blur-3xl"
        />
        <motion.div 
          style={{ y: useTransform(scrollY, [0, 500], [0, -100]) }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-red-600/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        style={{ opacity }}
        className="lg:px-8 max-w-7xl mx-auto px-4 py-20 sm:px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col justify-between gap-16 items-center lg:flex-row">
          <motion.div className="lg:w-3/5 space-y-8" variants={itemVariants}>
            {/* Greeting */}
            <motion.div
              variants={fadeInLeftVariants}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-400"
            >
              <Sparkles className="h-5 w-5 text-red-500" />
              <span className="text-lg font-medium">Hello, I'm</span>
            </motion.div>

            {/* Name with typewriter effect */}
            <motion.h1
              className="bg-clip-text bg-gradient-to-r text-5xl text-transparent font-black from-red-600 lg:text-7xl to-blue-400 via-pink-500 leading-tight min-h-[1.2em]"
              variants={fadeInLeftVariants}
            >
              {nameText}
              {currentPhase === 'name' && showCursor && (
                <span className="text-red-500 ml-1 animate-pulse">|</span>
              )}
            </motion.h1>
            
            {/* Enhanced title with typing effect */}
            <motion.div
              className="text-2xl text-gray-700 dark:text-gray-200 lg:text-4xl font-semibold min-h-[1.2em]"
              variants={fadeInLeftVariants}
            >
              <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                {titleText}
              </span>
              {(currentPhase === 'title' || (currentPhase === 'complete' && showCursor)) && (
                <span className="text-red-500 ml-1">|</span>
              )}
            </motion.div>

            {/* Description with better typography */}
            <motion.p
              className="text-gray-600 text-lg dark:text-gray-400 leading-relaxed max-w-2xl lg:text-xl"
              variants={itemVariants}
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Enhanced CTA Section */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* Download Button */}
              <motion.button
                onClick={handleDownload}
                disabled={isDownloading}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 rounded-full text-white duration-300 font-semibold group inline-flex items-center justify-center px-8 py-4 transition-all transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-3">
                  {isDownloading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="h-5 w-5 group-hover:animate-bounce" />
                      <span>Download CV</span>
                    </>
                  )}
                </div>
              </motion.button>

              {/* Contact Button */}
              <motion.a
                href="#contacts"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white rounded-full duration-300 font-semibold group inline-flex items-center justify-center px-8 py-4 transition-all transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5 mr-3 group-hover:animate-pulse" />
                Get In Touch
              </motion.a>
            </motion.div>


          </motion.div>

          {/* Enhanced Image Section */}
          <motion.div
            className="lg:w-1/2"
            variants={imageVariants}
          >
            <motion.div
              className="w-full aspect-square max-w-md mx-auto relative group"
              whileHover={{ scale: 1.05, rotateY: 5 }}
              transition={{ duration: 0.3 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Multiple Background Effects */}
              <div className="bg-gradient-to-r rounded-3xl absolute animate-pulse blur-xl from-red-600 inset-2 opacity-20 to-pink-500 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="bg-gradient-to-l rounded-3xl absolute blur-2xl from-blue-400 inset-4 opacity-10 to-red-600 group-hover:opacity-20 transition-opacity duration-500"></div>
              
              {/* Border Animation */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-red-600 via-pink-500 to-blue-400 p-[2px] group-hover:animate-pulse">
                <div className="rounded-3xl bg-white dark:bg-gray-900 h-full w-full"></div>
              </div>
              
              {/* Main Image */}
              <motion.img
                src={profilePic}
                alt="Dilshan De Silva - Full Stack Developer"
                loading="lazy"
                className="h-full rounded-3xl w-full duration-700 grayscale hover:grayscale-0 object-cover relative z-10 transition-all group-hover:shadow-2xl"
                whileHover={{ rotateY: 2 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;