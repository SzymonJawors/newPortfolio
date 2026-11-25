import { useEffect, useRef, useState } from "react";
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
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
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
      date: t("projects.jaworai.date"),
      featuredOrder: 3,
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
      date: t("projects.infraagent.date"),
      featuredOrder: 1,
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
      date: t("projects.logging.date"),
      featuredOrder: 2,
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
    closeButtonRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        return;
      }
      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
      triggerRef.current?.focus();
    };
  }, [selectedProject]);

  const featured = projects
    .filter((project) => !project.practice)
    .sort((a, b) => (a.featuredOrder ?? Infinity) - (b.featuredOrder ?? Infinity));
  const practice = projects.filter((project) => project.practice);

  const renderProject = (project) => (
    <article
      key={project.title}
      className="mb-8 flex flex-wrap gap-6 rounded-2xl border border-neutral-800 bg-neutral-950/40 p-4 transition-colors hover:border-neutral-700 sm:p-6 lg:items-center"
    >
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="w-full lg:w-[30%]"
      >
        <button
          type="button"
          aria-label={`${t("projects.preview_alt")}: ${project.title}`}
          onClick={(event) => {
            triggerRef.current = event.currentTarget;
            setSelectedProject(project.image);
          }}
          className="group block w-full cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300"
        >
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="aspect-video w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
        </button>
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="w-full min-w-0 flex-1"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="mb-2 font-semibold">{project.title}</h3>
          {project.date && <p className="text-sm text-neutral-500">{project.date}</p>}
        </div>

        <p className="mt-2 mb-4 text-neutral-400">
          {project.description}
        </p>
        <div className="mb-4 flex flex-wrap gap-3 text-sm font-medium">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-neutral-600 px-4 py-2 transition-colors hover:border-white hover:text-white"
          >
            {t("projects.view_code")}
          </a>
          {project.live && <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-purple-300 px-4 py-2 text-neutral-950 transition-colors hover:bg-purple-200"
          >
            {t("projects.click_test")}
          </a>}
        </div>

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
    </article>
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
      <div className="mx-auto max-w-5xl">{featured.map(renderProject)}</div>

      <h3 className="mt-16 mb-8 text-center text-2xl text-neutral-400">
        {t("projects.practice_title")}
      </h3>
      <div className="mx-auto max-w-5xl">{practice.map(renderProject)}</div>

      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={t("projects.preview_alt")}
          aria-describedby="project-preview-image"
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedProject(null);
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setSelectedProject(null)}
            className="absolute right-4 top-4 rounded-full border border-white/30 bg-neutral-950 px-4 py-2 text-sm text-white hover:bg-neutral-800"
          >
            {t("projects.close_preview")}
          </button>
          <motion.img
            id="project-preview-image"
            src={selectedProject}
            alt={t("projects.preview_alt")}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Projects;
