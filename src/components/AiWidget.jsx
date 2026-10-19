import { useState } from "react";
import { useTranslation } from "react-i18next";

const AiWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="pointer-events-none fixed right-4 bottom-6 z-[9999] flex flex-col items-end font-sans sm:right-6">
      <div
        className={`mb-4 h-[min(550px,calc(100dvh-7rem))] w-[min(350px,calc(100vw-2rem))] origin-bottom-right overflow-hidden rounded-2xl border border-[#2a2a3e] bg-[#0a0a0a] shadow-2xl transition-all duration-300 ease-in-out ${
          isOpen
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
      >
        {isOpen ? (
          <iframe
            src="https://jawor-ai-widget-bot.vercel.app"
            loading="lazy"
            className="h-full w-full border-none bg-[#0a0a0a]"
            title={t("widget.title")}
          />
        ) : null}
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? t("widget.close") : t("widget.open")}
        className={`pointer-events-auto flex h-16 w-16 items-center justify-center rounded-full text-white shadow-[0_0_15px_rgba(109,40,217,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(109,40,217,0.8)] active:scale-90 ${
          isOpen
            ? "rotate-90 border border-[#2a2a3e] bg-[#1a1a2e]"
            : "rotate-0 bg-[#6d28d9] hover:bg-[#5b21b6]"
        }`}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default AiWidget;
