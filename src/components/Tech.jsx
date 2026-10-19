import { RiReactjsLine, RiNodejsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import {
  SiDocker,
  SiAmazonwebservices,
  SiFastapi,
  SiPostgresql,
} from "react-icons/si";
import { motion, useReducedMotion } from "framer-motion";
import { useTranslation } from "react-i18next";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const technologies = [
  { icon: FaPython, title: "Python", color: "text-sky-400", duration: 2.1 },
  { icon: SiFastapi, title: "FastAPI", color: "text-teal-400", duration: 1.8 },
  { icon: RiNodejsLine, title: "Node.js", color: "text-green-400", duration: 1.5 },
  { icon: RiReactjsLine, title: "React", color: "text-cyan-400", duration: 2.5 },
  { icon: TbBrandTailwind, title: "Tailwind CSS", color: "text-sky-400", duration: 2 },
  { icon: SiPostgresql, title: "PostgreSQL", color: "text-blue-400", duration: 1.9 },
  { icon: SiDocker, title: "Docker", color: "text-sky-500", duration: 2.3 },
  { icon: SiAmazonwebservices, title: "AWS", color: "text-orange-400", duration: 1.7 },
];

const Tech = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  return (
    <div id="tech" className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("tech.title")}
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {technologies.map((tech) => {
          const TechIcon = tech.icon;
          return (
            <motion.div
              key={tech.title}
              variants={reduceMotion ? undefined : iconVariants(tech.duration)}
              initial={reduceMotion ? false : "initial"}
              animate={reduceMotion ? false : "animate"}
              className="flex w-28 flex-col items-center gap-3 rounded-2xl border-4 border-neutral-800 p-4"
            >
              <TechIcon
                title={tech.title}
                aria-hidden="true"
                className={`text-7xl ${tech.color}`}
              />
              <span className="text-center text-sm text-neutral-300">
                {tech.title}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Tech;
