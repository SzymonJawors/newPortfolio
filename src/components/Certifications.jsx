import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import certificate1 from "../assets/certificates/certificate-1.png";
import certificate2 from "../assets/certificates/certificate-2.png";
import certificate3 from "../assets/certificates/certificate-3.png";
import certificate4 from "../assets/certificates/certificate-4.png";
import certificate5 from "../assets/certificates/certificate-5.png";
import certificate6 from "../assets/certificates/certificate-6.png";

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();

  const certificates = [
    {
      title: t("certificates.meta_front.title"),
      image: certificate1,
      description: t("certificates.meta_front.desc"),
      technologies: [
        "HTML",
        "SCSS",
        "React",
        "JavaScript",
        "API",
        "UI/UX",
      ],
    },
    {
      title: t("certificates.cs50.title"),
      image: certificate2,
      description: t("certificates.cs50.desc"),
      technologies: [
        "HTML",
        "CSS",
        "React",
        "Python",
        "Django",
        "Bootstrap",
        "CI/CD",
      ],
    },
    {
      title: t("certificates.meta_react.title"),
      image: certificate3,
      description: t("certificates.meta_react.desc"),
      technologies: ["HTML", "CSS", "React", "JavaScript"],
    },
    {
      title: t("certificates.react_adv.title"),
      image: certificate4,
      description: t("certificates.react_adv.desc"),
      technologies: [
        "CSS",
        "JavaScript",
        "API",
        "React",
        "Bootstrap",
      ],
    },
    {
      title: t("certificates.ibm.title"),
      image: certificate5,
      description: t("certificates.ibm.desc"),
      technologies: [
        "Express.js",
        "Node.js",
        "JavaScript",
        "API",
        "MongoDB",
      ],
    },
    {
      title: t("certificates.genai.title"),
      image: certificate6,
      description: t("certificates.genai.desc"),
      technologies: ["AI", "LLM", "GenAI"],
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("certificates.section_title")}
      </motion.h1>

      <div>
        {certificates.map((certificate, index) => (
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
                src={certificate.image}
                width={230}
                height={230}
                alt={certificate.title}
                className="mb-6 rounded transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() =>
                  setSelectedImage(certificate.image)
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
                {certificate.title}
              </h6>
              <p className="mb-4 text-neutral-400">
                {certificate.description}
              </p>
              {certificate.technologies.map(
                (tech, index) => (
                  <span
                    key={index}
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                )
              )}
            </motion.div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Powiększony certyfikat"
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

export default Certifications;
