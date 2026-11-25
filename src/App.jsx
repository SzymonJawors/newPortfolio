import Navbar from "./components/Navbar";
import Name from "./components/Name";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import AiWidget from "./components/AiWidget";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const title = t("meta.title");
    const description = t("meta.description");
    document.title = title;
    document.documentElement.lang = i18n.language === "en" ? "en" : "pl";

    [
      ["name", "description"],
      ["property", "og:description"],
      ["property", "og:title"],
      ["name", "twitter:description"],
      ["name", "twitter:title"],
    ].forEach(([attribute, value]) => {
      const meta = document.querySelector(`meta[${attribute}="${value}"]`);
      if (meta) meta.content = value.endsWith("title") ? title : description;
    });
  }, [i18n.language, t]);

  return (
    <MotionConfig reducedMotion="user">
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="container mx-auto px-8 pt-20">
        <Navbar />
        <Name />
        <About />
        <Tech />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
        <AiWidget />
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
    </MotionConfig>
  );
};

export default App;
