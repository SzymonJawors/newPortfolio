import { useEffect, useState } from "react";
import Logo from "./Logo";
import CV from "/_Szymon_Jaworski_CVpl.pdf";
import CVen from "/_Szymon_Jaworski_CVen.pdf";
import {
  FaLinkedin,
  FaGithub,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiFileUserLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { id: "#about", label: "nav.about" },
  { id: "#tech", label: "nav.tech" },
  { id: "#experience", label: "nav.experience" },
  { id: "#projects", label: "nav.projects" },
  { id: "#certificates", label: "nav.certificates" },
  { id: "#contact", label: "nav.contact" },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentCV = i18n.language === "pl" ? CV : CVen;
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 140;
      let current = "";
      links.forEach((link) => {
        const section = document.getElementById(link.id.slice(1));
        if (!section) return;
        const top = section.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = link.id;
      });
      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

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
              aria-current={activeSection === link.id ? "true" : undefined}
              className={`cursor-pointer transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent ${
                activeSection === link.id
                  ? "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
                  : ""
              }`}
            >
              {t(link.label)}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 text-xl">
          <div className="flex gap-4 items-center pr-4 border-r-2 border-neutral-700 font-bold">
            <button
              onClick={() => i18n.changeLanguage("pl")}
              className={`transition-all duration-300 ${
                i18n.language === "pl"
                  ? "text-white"
                  : "text-neutral-500 hover:text-white"
              }`}
              title="Zmień na Polski"
              aria-pressed={i18n.language === "pl"}
            >
              PL
            </button>
            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`transition-all duration-300 ${
                i18n.language === "en"
                  ? "text-white"
                  : "text-neutral-500 hover:text-white"
              }`}
              title="Switch to English"
              aria-pressed={i18n.language === "en"}
            >
              EN
            </button>
          </div>

          <div className="hidden sm:flex gap-4">
            <a
              title="CV"
              href={currentCV}
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
              href="https://github.com/SzymonJawors"
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
              aria-expanded={isMobileMenuOpen}
              aria-label={
                isMobileMenuOpen ? t("nav.close_menu") : t("nav.open_menu")
              }
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
                aria-current={activeSection === link.id ? "true" : undefined}
                className={`text-lg font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-pink-300 hover:via-slate-500 hover:to-purple-500 hover:bg-clip-text hover:text-transparent ${
                  activeSection === link.id
                    ? "bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent"
                    : ""
                }`}
              >
                {t(link.label)}
              </a>
            ))}

            <div className="flex sm:hidden gap-6 mt-4 border-t border-neutral-800 pt-6 w-full justify-center">
              <a
                href={currentCV}
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
                href="https://github.com/SzymonJawors"
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
