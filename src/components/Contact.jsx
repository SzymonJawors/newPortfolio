import { motion } from "framer-motion";
import CV from "/CVpl.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contactDetails = {
    phoneNo: "+48 603 121 889",
    email: "jawor12325@gmail.com",
  };

  const itemStyle = `
    my-6 flex items-center justify-center gap-2 text-lg 
    cursor-pointer transition-all duration-300 
    hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 
    hover:bg-clip-text hover:text-transparent
  `;

  const linkStyle = `
    flex items-center gap-2 border-b border-neutral-500 pb-1
    transition-all duration-300 
    hover:border-transparent 
    hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 
    hover:bg-clip-text hover:text-transparent
  `;

  return (
    <div
      id="contact"
      className="border-b border-neutral-900 pb-20"
    >
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
          <span>{t("contact.address")}</span>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className={itemStyle}
        >
          <BiPhoneCall className="text-2xl" />
          <span>{contactDetails.phoneNo}</span>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-6 flex justify-center"
        >
          <a
            href={`mailto:${contactDetails.email}`}
            className={linkStyle}
          >
            <MdEmail className="text-2xl" />
            {contactDetails.email}
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-6 flex justify-center"
        >
          <a
            href="https://www.linkedin.com/in/szymonjawor"
            target="_blank"
            className={linkStyle}
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl" />
            {t("contact.linkedin")}
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-6 flex justify-center"
        >
          <a
            href="https://github.com/SzymonJawors?tab=repositories"
            target="_blank"
            className={linkStyle}
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl" />
            {t("contact.github")}
          </a>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-6 flex justify-center"
        >
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className={linkStyle}
          >
            <RiFileUserLine className="text-2xl" />
            {t("contact.cv_label")}
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
