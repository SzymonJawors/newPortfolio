import { motion } from "framer-motion";
import CV from "/CVpl.pdf";
import CVen from "/CVen.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const currentCV = i18n.language === "pl" ? CV : CVen;

  const contactDetails = {
    phoneNo: "+48 603 121 889",
    email: "jawor12325@gmail.com",
  };

  const hoverTextGradient = `
    transition-colors duration-300
    group-hover:bg-gradient-to-r group-hover:from-pink-300 group-hover:via-slate-500 group-hover:to-purple-500
    group-hover:bg-clip-text group-hover:text-transparent
  `;

  const itemStyle = `
    my-6 flex items-center justify-center gap-2 text-lg 
    cursor-pointer group
  `;

  const linkStyle = `
    flex items-center gap-2 border-b border-neutral-500 pb-1
    transition-colors duration-300 group hover:border-transparent
  `;

  return (
    <div id="contact" className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        {t("contact.section_title")}
      </motion.h1>

      <div className="text-center tracking-tighter">

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className={itemStyle}
        >
          <BsHouse className="text-2xl" />
          <span className={hoverTextGradient}>
            {t("contact.address")}
          </span>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className={itemStyle}
        >
          <BiPhoneCall className="text-2xl" />
          <span className={hoverTextGradient}>
            {contactDetails.phoneNo}
          </span>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-6 flex justify-center group"
        >
          <a
            href={`mailto:${contactDetails.email}`}
            className={linkStyle}
          >
            <MdEmail className="text-2xl" />
            <span className={hoverTextGradient}>{contactDetails.email}</span>
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-6 flex justify-center group"
        >
          <a
            href="https://www.linkedin.com/in/szymonjawor"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <FaLinkedin className="text-2xl" />
            <span className={hoverTextGradient}>{t("contact.linkedin")}</span>
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-6 flex justify-center group"
        >
          <a
            href="https://github.com/SzymonJawors?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <FaGithub className="text-2xl" />
            <span className={hoverTextGradient}>{t("contact.github")}</span>
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-6 flex justify-center group"
        >
          <a
            href={currentCV}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <RiFileUserLine className="text-2xl" />
            <span className={hoverTextGradient}>{t("contact.cv_label")}</span>
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
