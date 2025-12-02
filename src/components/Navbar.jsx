import { useState } from "react";
import Logo from "./Logo";
import CV from "/CVpl.pdf";
import {
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  const links = [
    { id: "#about", label: "nav.about" },
    { id: "#tech", label: "nav.tech" },
    { id: "#experience", label: "nav.experience" },
    { id: "#projects", label: "nav.projects" },
    { id: "#contact", label: "nav.contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-between py-2 px-8 bg-neutral-950/30 backdrop-blur-md border-b border-white/10">
        <div className="flex flex-shrink-0 items-center hover:scale-110 transition-transform cursor-pointer">
          <a href="#" onClick={handleLinkClick}>
            <Logo />
          </a>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.id}
              className="cursor-pointer transition-all duration-300 
                         hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 
                         hover:bg-clip-text hover:text-transparent"
            >
              {t(link.label)}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 text-xl">
          <div className="flex gap-4 items-center pr-4 border-r-2 border-neutral-700 font-bold">
            <button
              onClick={() => i18n.changeLanguage("pl")}
              className="transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-b hover:from-white hover:to-red-600"
              title="Zmień na Polski"
            >
              PL
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className="transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-red-500 hover:to-white"
              title="Switch to English"
            >
              US
            </button>
          </div>

          <div className="hidden sm:flex gap-4">
            <a
              title="CV"
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors"
            >
              <RiFileUserLine />
            </a>
            <a
              title="LinkedIn"
              href="https://www.linkedin.com/in/szymonjawor"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              title="GitHub"
              href="https://github.com/SzymonJawors?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[60px] left-0 right-0 z-40 bg-neutral-950/95 backdrop-blur-xl border-b border-white/10 p-8 md:hidden flex flex-col items-center gap-6"
          >
            {links.map((link) => (
              <a
                key={link.id}
                href={link.id}
                onClick={handleLinkClick}
                className="text-lg font-medium transition-all duration-300 
                           hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 
                           hover:bg-clip-text hover:text-transparent"
              >
                {t(link.label)}
              </a>
            ))}

            <div className="flex sm:hidden gap-6 mt-4 border-t border-neutral-800 pt-6 w-full justify-center">
              <a
                href={CV}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiFileUserLine className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/szymonjawor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://github.com/SzymonJawors?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
