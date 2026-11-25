import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import certificate1 from "../assets/certificates/certificate-1.png";
import certificate2 from "../assets/certificates/certificate-2.png";
import certificate3 from "../assets/certificates/certificate-3.png";
import certificate4 from "../assets/certificates/certificate-4.png";
import certificate5 from "../assets/certificates/certificate-5.png";

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (!selectedImage) return undefined;
    closeButtonRef.current?.focus();
    const onKey = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
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
  }, [selectedImage]);

  const certificates = [
    {
      title: t("certificates.cs50.title"),
      image: certificate1,
      description: t("certificates.cs50.desc"),
      issuer: "HarvardX",
      date: "03/2025",
      technologies: ["HTML", "CSS", "React", "Python", "Django", "CI/CD"],
    },
    {
      title: t("certificates.meta_front.title"),
      image: certificate2,
      description: t("certificates.meta_front.desc"),
      issuer: "Meta",
      technologies: ["HTML", "SCSS", "React", "JavaScript", "UI/UX"],
    },
    {
      title: t("certificates.ai_eng.title"),
      image: certificate3,
      description: t("certificates.ai_eng.desc"),
      issuer: "master.dev",
      technologies: ["AI", "Agents", "RAG", "Evals"],
    },
    {
      title: t("certificates.ibm.title"),
      image: certificate4,
      description: t("certificates.ibm.desc"),
      issuer: "IBM",
      technologies: ["Express.js", "Node.js", "JavaScript", "API", "MongoDB"],
    },
    {
      title: t("certificates.genai.title"),
      image: certificate5,
      description: t("certificates.genai.desc"),
      issuer: t("certificates.genai.issuer"),
      technologies: ["AI", "LLM", "GenAI"],
    },
  ];

  return (
    <div id="certificates" className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        {t("certificates.section_title")}
      </motion.h2>

      <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
        {certificates.map((certificate) => (
          <article
            key={certificate.title}
            className="rounded-2xl border border-neutral-800 bg-neutral-950/40 p-5 transition-colors hover:border-neutral-700"
          >
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.4 }}
            >
              <button
                type="button"
                aria-label={`${t("certificates.view_certificate")}: ${certificate.title}`}
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setSelectedImage(certificate.image);
                }}
                className="mb-4 block w-full cursor-zoom-in overflow-hidden rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-purple-300"
              >
                <img
                  src={certificate.image}
                  width={600}
                  height={350}
                  loading="lazy"
                  alt=""
                  className="h-40 w-full object-cover object-top transition-transform duration-300 hover:scale-105"
                />
              </button>
              <h3 className="mb-1 font-semibold">{certificate.title}</h3>
              <p className="mb-3 text-sm text-neutral-500">
                {certificate.issuer}{certificate.date ? ` · ${certificate.date}` : ""}
              </p>
              <p className="mb-4 text-sm leading-relaxed text-neutral-400">
                {certificate.description}
              </p>
              {certificate.technologies.map((tech) => (
                <span
                  key={tech}
                  className="mr-2 mb-2 inline-block rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-300"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </article>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={t("certificates.preview_alt")}
          onClick={(event) => {
            if (event.target === event.currentTarget) setSelectedImage(null);
          }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 rounded-full border border-white/30 bg-neutral-950 px-4 py-2 text-sm text-white hover:bg-neutral-800"
          >
            {t("certificates.close_preview")}
          </button>
          <motion.img
            src={selectedImage}
            alt={t("certificates.preview_alt")}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="max-h-[85vh] max-w-[90vw] rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Certifications;
