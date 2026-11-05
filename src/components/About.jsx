import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("about.title_main")}{" "}
        <span className="text-neutral-500">{t("about.title_sub")}</span>
      </motion.h2>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-16 max-w-2xl text-center leading-relaxed text-neutral-300"
      >
        {t("about.text")}
      </motion.p>
    </div>
  );
};

export default About;
