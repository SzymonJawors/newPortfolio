import React, { useState } from "react";

const AiWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans">
      <div
        className={`
          w-[350px] h-[550px] 
          bg-[#0a0a0a] rounded-2xl shadow-2xl border border-[#2a2a3e] overflow-hidden mb-4
          transition-all duration-300 ease-in-out origin-bottom-right
          ${
            isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 translate-y-4 pointer-events-none"
          }
        `}
      >
        <iframe
          src="http://localhost:3000"
          className="w-full h-full border-none bg-[#0a0a0a]"
          title="Asystent Portfolio"
        />
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-16 h-16 rounded-full shadow-[0_0_15px_rgba(109,40,217,0.5)] flex items-center justify-center text-white
          transition-all duration-300 active:scale-90 hover:shadow-[0_0_25px_rgba(109,40,217,0.8)]
          ${
            isOpen
              ? "bg-[#1a1a2e] rotate-90 border border-[#2a2a3e]"
              : "bg-[#6d28d9] rotate-0 hover:bg-[#5b21b6]"
          }
        `}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8"
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
            className="w-8 h-8"
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
