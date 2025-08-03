import React from "react";
import { ExternalLink, Github, Eye, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  link,
  github,
  demo,
}) {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: 15 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        staggerChildren: 0.1
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ 
        y: -8,
        rotateY: 2,
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 }
      }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-800 via-gray-600 to-pink-900 p-[2px] transition-all duration-500 hover:bg-gradient-to-r hover:from-pink-900 hover:via-gray-600 hover:to-red-800"
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Glowing Effect */}
      <div className="absolute -inset-2 bg-gradient-to-r from-red-800/20 via-gray-600/20 to-pink-900/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative h-full flex flex-col rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/5 overflow-hidden">
        {/* Image Container with Enhanced Effects */}
        <div className="relative aspect-video overflow-hidden">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent z-10"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          
          {/* Floating Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <ExternalLink className="h-4 w-4 text-white" />
              </motion.a>
            )}
            
            {github && (
              <motion.a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <Github className="h-4 w-4 text-white" />
              </motion.a>
            )}
            
            {demo && (
              <motion.a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <Eye className="h-4 w-4 text-white" />
              </motion.a>
            )}
          </div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-red-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
        </div>

        {/* Content Section */}
        <div className="flex-1 p-6 space-y-4">
          <motion.div variants={contentVariants} className="space-y-3">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-bold text-white group-hover:text-red-200 transition-colors duration-300">
                {title}
              </h3>
              <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-red-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
            
            <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
              {description}
            </p>
          </motion.div>

          {/* Enhanced Technology Tags */}
          <motion.div 
            variants={contentVariants}
            className="flex flex-wrap gap-2"
          >
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(239, 68, 68, 0.2)",
                  color: "rgb(254, 202, 202)"
                }}
                className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-800/60 border border-slate-700/50 text-xs font-medium text-slate-300 backdrop-blur-sm hover:border-red-500/30 transition-all duration-200 cursor-default"
              >
                <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-2 opacity-60" />
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Interactive Bottom Section */}
          <motion.div 
            variants={contentVariants}
            className="pt-4 border-t border-slate-800/50 group-hover:border-red-800/30 transition-colors duration-300"
          >
            <div className="flex items-center justify-between text-sm text-slate-400 group-hover:text-slate-300">
              <span>View Project</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>Available</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Border Light Effect */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-0 left-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-red-400/50 to-transparent" />
          <div className="absolute bottom-0 right-1/4 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-pink-400/50 to-transparent" />
          <div className="absolute left-0 top-1/4 h-1/2 w-[1px] bg-gradient-to-b from-transparent via-red-400/50 to-transparent" />
          <div className="absolute right-0 bottom-1/4 h-1/2 w-[1px] bg-gradient-to-b from-transparent via-pink-400/50 to-transparent" />
        </div>
      </div>
    </motion.div>
  );
}