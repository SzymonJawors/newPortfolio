import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const chipClass =
  "mr-2 mt-4 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300";

const Experience = () => {
  const { t } = useTranslation();

  const work = [
    {
      year: t("experience.gmina.time"),
      role: t("experience.gmina.role"),
      company: t("experience.gmina.company"),
      description: t("experience.gmina.desc"),
      points: t("experience.gmina.points", { returnObjects: true }),
      technologies: ["Active Directory", "SQL", "Windows", "Networking"],
    },
  ];

  const education = [
    {
      year: t("experience.wsb.time"),
      role: t("experience.wsb.role"),
      company: t("experience.wsb.company"),
      description: t("experience.wsb.desc"),
      technologies: ["Python", "JavaScript", "React", "SQL"],
    },
    {
      year: t("experience.tech.time"),
      role: t("experience.tech.role"),
      company: t("experience.tech.company"),
      description: t("experience.tech.desc"),
      technologies: ["JavaScript", "HTML", "CSS", "MySQL"],
    },
    {
      year: t("experience.meta.time"),
      role: t("experience.meta.role"),
      company: t("experience.meta.company"),
      description: t("experience.meta.desc"),
      technologies: ["React", "Figma", "Git"],
    },
    {
      year: t("experience.cs50.time"),
      role: t("experience.cs50.role"),
      company: t("experience.cs50.company"),
      description: t("experience.cs50.desc"),
      technologies: ["Python", "Django", "React"],
    },
  ];

  const renderItems = (items) =>
    items.map((experience) => (
      <div
        key={`${experience.role}-${experience.year}`}
        className="mb-8 flex flex-wrap lg:justify-center"
      >
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/4"
        >
          <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full max-w-xl lg:w-3/4"
        >
          <h6 className="mb-2 font-semibold">
            {experience.role} -{" "}
            <span className="text-sm text-purple-100">{experience.company}</span>
          </h6>
          <p className="mb-4 text-neutral-400">{experience.description}</p>
          {Array.isArray(experience.points) && (
            <ul className="mb-4 list-disc space-y-1 pl-5 text-neutral-400">
              {experience.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          )}
          {experience.technologies.map((tech) => (
            <span key={tech} className={chipClass}>
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    ));

  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("experience.section_title")}
      </motion.h2>

      <h3 className="mb-8 text-center text-2xl text-neutral-400">
        {t("experience.work_title")}
      </h3>
      <div>{renderItems(work)}</div>

      <h3 className="mb-8 mt-16 text-center text-2xl text-neutral-400">
        {t("experience.education_title")}
      </h3>
      <div>{renderItems(education)}</div>
    </div>
  );
};

export default Experience;
