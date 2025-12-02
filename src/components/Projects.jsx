import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState(null);
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.netflix.title"),
      image: project1,
      description: t("projects.netflix.desc"),
      technologies: [
        "CSS",
        "TMDbAPI",
        "Firebase",
        "JavaScript",
        "React",
      ],
      link: "https://github.com/SzymonJawors/netflix-clone",
      live: "https://netflix-clone-eight-beta-40.vercel.app",
    },
    {
      title: t("projects.jaworai.title"),
      image: project2,
      description: t("projects.jaworai.desc"),
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Clerk",
      ],
      link: "https://github.com/SzymonJawors/JaworAI",
      live: "https://jawor-ai.vercel.app",
    },
    {
      title: t("projects.hotel.title"),
      image: project3,
      description: t("projects.hotel.desc"),
      technologies: [
        "React",
        "Express.js",
        "Node.js",
        "MongoDB",
      ],
      link: "https://github.com/SzymonJawors/HotelMotel",
      live: "https://hotel-motel-peach.vercel.app",
    },
    {
      title: t("projects.movie.title"),
      image: project4,
      description: t("projects.movie.desc"),
      technologies: [
        "JavaScript",
        "API",
        "React",
        "Tailwind",
        "Databases",
      ],
      link: "https://github.com/SzymonJawors/Moviedatabase-trending",
      live: "https://moviedatabase-trending.vercel.app",
    },
    {
      title: t("projects.thinkboard.title"),
      image: project5,
      description: t("projects.thinkboard.desc"),
      technologies: [
        "MongoDB",
        "Node.js",
        "Express.js",
        "React",
        "Tailwind",
      ],
      link: "https://github.com/SzymonJawors/Thinkboard",
    },
    {
      title: t("projects.quiz.title"),
      image: project6,
      description: t("projects.quiz.desc"),
      technologies: [
        "JavaScript",
        "React",
        "Django",
        "Python",
        "Bootstrap",
      ],
      link: "https://github.com/SzymonJawors/QuizzApp-project",
    },
  ];

  return (
    <div
      id="projects"
      className="border-b border-neutral-900 pb-4"
    >
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("projects.section_title")}
      </motion.h1>
      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={250}
                height={250}
                alt={project.title}
                className="mb-6 rounded transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() =>
                  setSelectedProject(project.image)
                }
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {project.title}
              </h6>

              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-pink-200 transition-all duration-300 
                           hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 
                           hover:bg-clip-text hover:text-transparent"
                >
                  {t("projects.click_test")}
                </a>
              ) : null}

              <p className="mb-4 text-neutral-400 mt-2">
                {project.description}{" "}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-neutral-500 hover:text-white hover:border-white transition-colors ml-1"
                >
                  {t("projects.click_code")}
                </a>
              </p>

              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.img
            src={selectedProject}
            alt="Powiększony projekt"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
