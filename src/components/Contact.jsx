import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import CV from "/CVpl.pdf";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { BsHouse } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Kontakt
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-6 flex items-center justify-center gap-2 text-lg hover:text-blue-500 transition-colors"
        >
          <BsHouse className="text-2xl"/>
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-6 flex items-center justify-center gap-2 text-lg hover:text-blue-500 transition-colors"
        >
          <BiPhoneCall className="text-2xl"/>
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-6 flex items-center justify-center gap-2 text-lg hover:text-blue-500 transition-colors"
        >
          <MdEmail className="text-2xl"/>
          <a
            href="mailto:jawor12325@gmail.com"
            className="border-b"
          >
            {CONTACT.email}
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-6 flex items-center justify-center gap-2 text-lg hover:text-blue-500 transition-colors"
        >
          <FaLinkedin className="text-2xl"/>
          <a
            href="https://www.linkedin.com/in/szymonjawor"
            target="_blank"
            className="border-b"
            rel="noopener noreferrer"
          >
            {CONTACT.linkedin}
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-6 flex items-center justify-center gap-2 text-lg hover:text-blue-500 transition-colors"
        >
          <FaGithub className="text-2xl"/>
          <a
            href="https://github.com/SzymonJawors?tab=repositories"
            target="_blank"
            className="border-b"
            rel="noopener noreferrer"
          >
            {CONTACT.github}
          </a>
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-6 flex items-center justify-center gap-2 text-lg hover:text-blue-500 transition-colors"
        >
          <RiFileUserLine className="text-2xl"/>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="border-b"
          >
            CV
          </a>
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
