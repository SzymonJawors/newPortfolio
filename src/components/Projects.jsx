import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import infraagent from "../assets/projects/infraagent.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

const Projects = () => {
  const [selectedProject, setSelectedProject] =
    useState(null);
  const { t } = useTranslation();

  const projects = [
    {
      title: t("projects.jaworai.title"),
      image: project1,
      description: t("projects.jaworai.desc"),
      points: t("projects.jaworai.points", { returnObjects: true }),
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
      title: t("projects.infraagent.title"),
      image: infraagent,
      description: t("projects.infraagent.desc"),
      points: t("projects.infraagent.points", { returnObjects: true }),
      technologies: [
        "OpenAI",
        "LangGraph",
        "Terraform",
        "AWS",
        "Checkov",
        "FastAPI",
      ],
      link: "https://github.com/SzymonJawors/infraAgent",
    },
    {
      title: t("projects.logging.title"),
      image: project2,
      description: t("projects.logging.desc"),
      points: t("projects.logging.points", { returnObjects: true }),
      technologies: [
        "Python",
        "FastAPI",
        "Docker & Compose",
        "Llama 3.2 (LLM)",
        "SQLite",
      ],
      link: "https://github.com/SzymonJawors/ai-log-analyzer",
    },
    {
      title: t("projects.sentinel.title"),
      image: project4,
      description: t("projects.sentinel.desc"),
      points: t("projects.sentinel.points", { returnObjects: true }),
      technologies: [
        "Python",
        "Docker",
        "SHA-256",
        "Linux",
      ],
      link: "https://github.com/SzymonJawors/system-sentinel",
    },
    {
      title: t("projects.netflix.title"),
      image: project5,
      description: t("projects.netflix.desc"),
      technologies: [
        "React",
        "JavaScript",
        "Firebase",
        "CSS",
        "TMDbAPI",
      ],
      link: "https://github.com/SzymonJawors/netflix-clone",
      live: "https://netflix-clone-eight-beta-40.vercel.app",
      practice: true,
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
      practice: true,
    },
  ];

  useEffect(() => {
    if (!selectedProject) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [selectedProject]);

  const featured = projects.filter((project) => !project.practice);
  const practice = projects.filter((project) => project.practice);

  const renderProject = (project) => (
    <div
      key={project.title}
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
          alt={project.title}
          className="mb-6 aspect-video w-full max-w-[280px] cursor-pointer rounded object-cover object-top transition-transform duration-300 hover:scale-110"
          onClick={() => setSelectedProject(project.image)}
        />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-full max-w-xl lg:w-3/4"
      >
        <h6 className="mb-2 font-semibold">{project.title}</h6>

        {project.live ? (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-pink-200 transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent"
          >
            {t("projects.click_test")}
          </a>
        ) : null}

        <p className="mt-2 mb-4 text-neutral-400">
          {project.description}{" "}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 border-b border-neutral-500 transition-colors hover:border-white hover:text-white"
          >
            {t("projects.click_code")}
          </a>
        </p>

        {Array.isArray(project.points) && (
          <ul className="mb-4 list-disc space-y-1 pl-5 text-neutral-400">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div
      id="projects"
      className="border-b border-neutral-900 pb-4"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("projects.section_title")}
      </motion.h2>
      <div>{featured.map(renderProject)}</div>

      <h3 className="mt-16 mb-8 text-center text-2xl text-neutral-400">
        {t("projects.practice_title")}
      </h3>
      <div>{practice.map(renderProject)}</div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={t("projects.close_preview")}
          onClick={() => setSelectedProject(null)}
        >
          <motion.img
            src={selectedProject}
            alt={t("projects.preview_alt")}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-h-[90%] max-w-[90%] cursor-pointer rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
