import { useTranslation } from "react-i18next";
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";
import CV from "/_Szymon_Jaworski_CVpl.pdf";
import CVen from "/_Szymon_Jaworski_CVen.pdf";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Name = () => {
  const { t, i18n } = useTranslation();
  const currentCV = i18n.language === "pl" ? CV : CVen;
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Szymon Jaworski
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Software Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {t('hero.text')}
            </motion.p>
            <motion.div
              variants={container(1.2)}
              initial="hidden"
              animate="visible"
              className="mb-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 px-6 py-2 text-sm font-medium text-neutral-950"
              >
                {t("hero.cta_projects")}
              </a>
              <a
                href={currentCV}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-neutral-500 px-6 py-2 text-sm font-medium text-neutral-200 transition-colors hover:border-white hover:text-white"
              >
                {t("hero.cta_cv")}
              </a>
            </motion.div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              className="h-auto w-full max-w-md rounded-2xl object-cover"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Szymon Jaworski"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
