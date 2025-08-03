import React from "react";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  link,
}) {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.8, ease: "easeIn" }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-800 via-gray-600 to-pink-900 p-1 transition-all hover:bg-gradient-to-r hover:from-pink-900 hover:via-gray-600 hover:to-red-800 hover:scale-[1.01]"
    >
      <div className="relative h-full flex flex-col space-y-4 rounded-xl bg-slate-900/60 p-6 backdrop-blur-md">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-3 top-3 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30"
            >
              <ExternalLink className="h-4 w-4 text-white" />
            </a>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-sm text-slate-300">{description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
