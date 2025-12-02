import {
  RiReactjsLine,
  RiNodejsLine,
  RiJavascriptLine,
} from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { DiMongodb } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";

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

const Tech = () => {
  const { t } = useTranslation();
  return (
    <div id="tech" className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("tech.title")}
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounder-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine
            title="React.js"
            className="text-7xl text-cyan-400"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounder-2xl border-4 border-neutral-800 p-4"
        >
          <RiJavascriptLine
            title="JavaScript"
            className="text-7xl text-yellow-400"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounder-2xl border-4 border-neutral-800 p-4"
        >
          <RiNodejsLine
            title="Node.js"
            className="text-7xl text-green-400"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2.1)}
          initial="initial"
          animate="animate"
          className="rounder-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython
            title="Python"
            className="text-7xl text-blue-950"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounder-2xl border-4 border-neutral-800 p-4"
        >
          <SiExpress
            title="Express.js"
            className="text-7xl text-green-800"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(1.8)}
          initial="initial"
          animate="animate"
          className="rounder-2xl border-4 border-neutral-800 p-4"
        >
          <TbBrandTailwind
            title="Tailwind CSS"
            className="text-7xl text-blue-400"
          />
        </motion.div>
        <motion.div
          variants={iconVariants(1.9)}
          initial="initial"
          animate="animate"
          className="rounder-2xl border-4 border-neutral-800 p-4"
        >
          <DiMongodb
            title="MongoDB"
            className="text-7xl text-green-400"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Tech;
