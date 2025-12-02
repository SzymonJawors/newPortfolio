import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
const Experience = () => {
  const { t } = useTranslation();
  const experiences = [
    {
      year: t("experience.wsb.time"),
      role: t("experience.wsb.role"),
      company: t("experience.wsb.company"),
      description: t("experience.wsb.desc"),
      technologies: [
        "Javascript",
        "React",
        "Next.js",
        "Python",
        "SQL",
      ],
    },
    {
      year: t("experience.meta.time"),
      role: t("experience.meta.role"),
      company: t("experience.meta.company"),
      description: t("experience.meta.desc"),
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "UI/UX",
        "CI/CD",
      ],
    },
    {
      year: t("experience.cs50.time"),
      role: t("experience.cs50.role"),
      company: t("experience.cs50.company"),
      description: t("experience.cs50.desc"),
      technologies: [
        "Python",
        "Django",
        "JavaScript",
        "React",
        "Bootstrap",
      ],
    },
    {
      year: t("experience.tech.time"),
      role: t("experience.tech.role"),
      company: t("experience.tech.company"),
      description: t("experience.tech.desc"),
      technologies: [
        "JavaScript",
        "CSS",
        "HTML",
        "PHP",
        "MySQL",
        "C++",
      ],
    },
  ];
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {t('experience.section_title')}
      </motion.h1>
      <div>
        {experiences.map((experience, index) => (
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
              <p className="mb-2 text-sm text-neutral-400">
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-sm text-purple-100">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">
                {experience.description}
              </p>
              {experience.technologies.map(
                (tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
