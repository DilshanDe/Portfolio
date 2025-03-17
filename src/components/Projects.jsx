import React, { useState } from "react";
import { PROJECTS } from "../assets/constants";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilter } from "./ProjectFilter";
import { motion } from "framer-motion";

const ALL_CATEGORIES = ["All", "UI design", "Applications", "Web development"];
const INITIAL_DISPLAY_COUNT = 6;

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleProjectsCount, setVisibleProjectsCount] = useState(
    INITIAL_DISPLAY_COUNT
  );

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjectsCount);

  const handleViewMore = () => {
    setVisibleProjectsCount((prevCount) => prevCount + 6);
  };

  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 " />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-red-500 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4  text-slate-400 max-w-2xl mx-auto"
          >
            Explore my latest work and innovations
          </motion.p>
        </div>

        <div className="mt-12 ">
          <ProjectFilter
            categories={ALL_CATEGORIES}
            selectedCategory={selectedCategory}
            onSelectCategory={(category) => {
              setSelectedCategory(category);
              setVisibleProjectsCount(INITIAL_DISPLAY_COUNT);
            }}
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          ))}
        </div>

        {visibleProjectsCount < filteredProjects.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={handleViewMore}
              className="rounded-full bg-gradient-to-r from-red-700 via-gray-600 to-pink-900  hover:bg-pink-900 px-6 py-3 text-white transition  "
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
