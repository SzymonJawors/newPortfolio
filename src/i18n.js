import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  pl: {
    translation: {
      nav: {
        about: "O mnie",
        tech: "Technologie",
        experience: "Doświadczenie",
        projects: "Projekty",
        certificates: "Certyfikaty",
        contact: "Kontakt",
        open_menu: "Otwórz menu",
        close_menu: "Zamknij menu",
      },
      hero: {
        text: "Tworzę backend w Pythonie i Node.js oraz podłączam aplikacje do modeli AI. Pracuję z Dockerem, AWS i Reactem, stawiając na automatyzację i czytelny kod. Jestem dyspozycyjny do pracy na pełen etat.",
        cta_projects: "Zobacz projekty",
        cta_cv: "Pobierz CV",
      },
      about: {
        title_main: "O",
        title_sub: "Mnie",
        text: "Programowania uczę się już od technikum informatycznego. Studia zaoczne w Warszawie zostawiają mi cały tydzień na pracę, a poza zajęciami buduję własne narzędzia, głównie aplikacje SaaS i agentów AI.",
      },
      tech: {
        title: "Technologie, których używam",
      },
      experience: {
        section_title: "Doświadczenie i edukacja",
        work_title: "Praca",
        education_title: "Edukacja",
        wsb: {
          role: "Inżynieria informatyczna",
          company: "Uniwersytet WSB Merito w Warszawie",
          time: "10/2025 - obecnie",
          desc: "Studia inżynierskie zaoczne. Program obejmuje Pythona, JavaScript oraz React, Angular, Node.js i Django, a także bazy danych i elementy sztucznej inteligencji.",
        },
        gmina: {
          role: "Stażysta IT / wsparcie techniczne",
          company: "Gmina Bargłów Kościelny",
          time: "10/2024 - 01/2025",
          desc: "Staż w dziale IT urzędu gminy: helpdesk, stacje robocze i lokalna infrastruktura.",
          points: [
            "Wsparcie techniczne pracowników w sprawach sprzętu i oprogramowania.",
            "Konfiguracja stacji roboczych i instalacja systemów operacyjnych.",
            "Diagnostyka problemów z łącznością i wydajnością sieci.",
            "Uprawnienia użytkowników w Active Directory oraz raporty z baz SQL.",
          ],
        },
        tech: {
          role: "Technik informatyk",
          company: "Augustowskie Centrum Edukacyjne",
          time: "09/2021 - 04/2025",
          desc: "Szkoła średnia o profilu technik informatyk: aplikacje webowe, sieci komputerowe, bazy danych i systemy operacyjne.",
        },
      },
      projects: {
        section_title: "Projekty",
        click_test: "Kliknij by przetestować",
        click_code: "KOD",
        practice_title: "Projekty z kursów",
        close_preview: "Zamknij podgląd",
        preview_alt: "Powiększony zrzut projektu",
        jaworai: {
          title: "JaworAI",
          desc: "Aplikacja SaaS z asystentem AI: konta użytkowników, czat i plan premium. Hostowana na Vercel.",
          points: [
            "Logowanie i zarządzanie kontami oparte na Clerk.",
            "Integracja z API modeli AI do generowania treści.",
            "Płatności dla planu premium.",
            "Responsywny interfejs w React.",
          ],
        },
        infraagent: {
          title: "InfraAgent — agent Terraform na AWS",
          desc: "Backend w FastAPI i UI w React. Agent w pętli ReAct zapisuje HCL, a reviewer odpala terraform fmt, init, validate, Checkov i plan. Apply i destroy to osobne operacje API, odblokowywane artefaktem zgody.",
          points: [
            "Narzędzia agenta: read_workspace, write_tf, check_infrastructure. Apply i destroy nie wchodzą do pętli czatu.",
            "Po zapisie: fmt, init, validate, skan Checkov i terraform plan, z ograniczoną liczbą przejść naprawczych.",
            "Approval wiąże sesję, SHA-256 plików .tf i output planu. TTL 30 minut, niezgodny digest zwraca 409.",
            "Estymata z AWS Pricing API oraz eval, który scoruje ślad wywołań narzędzi.",
          ],
        },
        logging: {
          title: "AI Security Ops — analiza logów LLM",
          desc: "Mikroserwisy w Dockerze do analizy logów w czasie rzeczywistym lokalnym modelem językowym.",
          points: [
            "Architektura oparta na czterech kontenerach Docker.",
            "Wykrywanie SQL Injection i ataków brute-force modelem Llama 3.2.",
            "Shared volumes do wymiany logów między kontenerami a modelem.",
            "Host gateway, dzięki któremu kontenery sięgają do lokalnego API LLM.",
          ],
        },
        sentinel: {
          title: "System Sentinel — audyt integralności",
          desc: "Narzędzie w Pythonie do kontroli integralności plików i anomalii procesów, uruchamiane w Dockerze.",
          points: [
            "Suma SHA-256 wykrywa nieautoryzowane zmiany w kodzie.",
            "Podgląd otwartych portów i zużycia CPU procesów.",
            "Kontener z wglądem w procesy hosta, żeby wychwytywać backdoory na bieżąco.",
          ],
        },
        netflix: {
          title: "Netflix Clone",
          desc: "Projekt ćwiczeniowy w React i Firebase: logowanie oraz trailery filmów. Demo na Vercel.",
        },
        quiz: {
          title: "Quiz App",
          desc: "Projekt końcowy kursu HarvardX: quizy z kontem użytkownika, Django i React, styl Bootstrap.",
        },
      },
      certificates: {
        section_title: "Certyfikaty",
        close_preview: "Zamknij podgląd certyfikatu",
        preview_alt: "Powiększony certyfikat",
        meta_front: {
          title: "Meta Front End Developer",
          desc: "Program Meta (9 kursów): HTML, CSS, JavaScript, React Basics i Advanced React, Git, UX oraz dostępność. Praktyczne aplikacje z tego kursu są na GitHubie.",
        },
        cs50: {
          title:
            "Certyfikat CS50W Web Programming with Python and JavaScript",
          desc: "Certyfikat z HarvardX, bardzo praktyczne zadania i projekty, większość z użyciem Pythona i Reacta, również dużo o bezpieczeństwie aplikacji i CI/CD, wszystkie pliki z projektów można znaleźć na moim profilu GitHub.",
        },
        ibm: {
          title: "IBM Node.js & MongoDB",
          desc: "Specjalizacja IBM obejmująca tworzenie aplikacji backendowych w Expressie i Node.js, obsługę REST API oraz pracę z bazami danych MongoDB.",
        },
        genai: {
          title: "GenAI Job Simulation",
          desc: "Z zamiłowania do AI, symulacja pracy gdzie tworzony był bot AI do analizy finansów.",
        },
        ai_eng: {
          title: "Applied AI Engineering Fundamentals",
          desc: "Kurs master.dev prowadzony przez Scotta Mossa. Do istniejącej aplikacji dodałem czat z agentem AI, a potem ewaluacje, które mierzą jakość odpowiedzi. Dalej: context engineering, narzędzia agenta i RAG oraz pętla z produkcji, która na podstawie realnych zapytań podnosi trafność.",
        },
      },
      contact: {
        section_title: "Kontakt",
        address: "Warszawa",
        phone: "Telefon",
        cv_label: "CV",
        github: "GitHub",
        linkedin: "LinkedIn",
        email_label: "Email",
      },
      widget: {
        title: "Asystent portfolio",
        open: "Otwórz asystenta",
        close: "Zamknij asystenta",
      },
    },
  },
  en: {
    translation: {
      nav: {
        about: "About",
        tech: "Tech Stack",
        experience: "Experience",
        projects: "Projects",
        certificates: "Certificates",
        contact: "Contact",
        open_menu: "Open menu",
        close_menu: "Close menu",
      },
      hero: {
        text: "I build backends in Python and Node.js and connect apps to AI models. I work with Docker, AWS, and React, focusing on automation and readable code. I am available for full-time work.",
        cta_projects: "View projects",
        cta_cv: "Download CV",
      },
      about: {
        title_main: "About",
        title_sub: "Me",
        text: "I have been learning to program since IT technical high school. Part-time studies in Warsaw leave the week open for work, and outside class I build my own tools, mostly SaaS apps and AI agents.",
      },
      tech: {
        title: "Technologies I Use",
      },
      experience: {
        section_title: "Experience and education",
        work_title: "Work",
        education_title: "Education",
        wsb: {
          role: "Computer Science Engineering (part-time)",
          company: "WSB Merito University in Warsaw",
          time: "10/2025 - Present",
          desc: "Part-time engineering degree. The program covers Python, JavaScript, React, Angular, Node.js, and Django, plus databases and an introduction to artificial intelligence.",
        },
        gmina: {
          role: "IT Intern / Technical Support",
          company: "Municipality Office of Bargłów Kościelny",
          time: "10/2024 - 01/2025",
          desc: "Internship in the municipal IT department: helpdesk, workstations, and local infrastructure.",
          points: [
            "Technical support for staff on hardware and software issues.",
            "Workstation setup and operating system installation.",
            "Diagnosis of connectivity and network performance problems.",
            "Active Directory permissions and SQL report support.",
          ],
        },
        tech: {
          role: "IT Technician",
          company: "Augustów Education Center",
          time: "09/2021 - 04/2025",
          desc: "Secondary school IT technician program: web applications, computer networks, databases, and operating systems.",
        },
      },
      projects: {
        section_title: "Projects",
        click_test: "Click to test live",
        click_code: "CODE",
        practice_title: "Course projects",
        close_preview: "Close preview",
        preview_alt: "Enlarged project screenshot",
        jaworai: {
          title: "JaworAI",
          desc: "SaaS app with an AI assistant: user accounts, chat, and a premium plan. Hosted on Vercel.",
          points: [
            "Sign-in and account management built with Clerk.",
            "AI model API integrated for content generation.",
            "Payments for the premium plan.",
            "Responsive React interface.",
          ],
        },
        infraagent: {
          title: "InfraAgent — AWS Terraform agent",
          desc: "FastAPI backend and React UI. A ReAct agent writes HCL, and a reviewer runs terraform fmt, init, validate, Checkov, and plan. Apply and destroy are separate API operations, unlocked by an approval artifact.",
          points: [
            "Agent tools: read_workspace, write_tf, check_infrastructure. Apply and destroy stay outside the chat loop.",
            "After each write: fmt, init, validate, a Checkov scan, and terraform plan, with bounded repair passes.",
            "The approval artifact binds the session, a SHA-256 digest of the .tf files, and the plan output. TTL is 30 minutes; a mismatched digest returns 409.",
            "AWS Pricing API estimates and an eval that scores the tool-call trace.",
          ],
        },
        logging: {
          title: "AI Security Ops — LLM log analysis",
          desc: "Docker microservices for real-time log analysis with a local language model.",
          points: [
            "Architecture based on four Docker containers.",
            "SQL injection and brute-force detection with Llama 3.2.",
            "Shared volumes to pass logs between containers and the model.",
            "Host gateway so containers can reach the local LLM API.",
          ],
        },
        sentinel: {
          title: "System Sentinel — integrity auditor",
          desc: "Python tool for file integrity and process anomalies, running in Docker.",
          points: [
            "SHA-256 checksums flag unauthorized code changes.",
            "Visibility into open ports and process CPU usage.",
            "Container with host process access to catch backdoors as they appear.",
          ],
        },
        netflix: {
          title: "Netflix Clone",
          desc: "Practice project in React and Firebase: login and movie trailers. Demo on Vercel.",
        },
        quiz: {
          title: "Quiz App",
          desc: "HarvardX capstone: quizzes with user accounts, Django and React, Bootstrap styling.",
        },
      },
      certificates: {
        section_title: "Certifications",
        close_preview: "Close certificate preview",
        preview_alt: "Enlarged certificate",
        meta_front: {
          title: "Meta Front End Developer",
          desc: "Meta program (9 courses): HTML, CSS, JavaScript, React Basics and Advanced React, Git, UX, and accessibility. The practical apps from this course are on GitHub.",
        },
        cs50: {
          title:
            "CS50W Web Programming with Python and JavaScript",
          desc: "Certificate from HarvardX featuring very practical tasks and projects, mostly using Python and React. Covered application security and CI/CD. All project files can be found on my GitHub profile.",
        },
        ibm: {
          title: "IBM Node.js & MongoDB",
          desc: "IBM specialization covering backend application development in Express and Node.js, REST API handling, and working with MongoDB databases.",
        },
        genai: {
          title: "GenAI Job Simulation",
          desc: "Driven by a passion for AI, a job simulation involving the creation of an AI bot for financial analysis.",
        },
        ai_eng: {
          title: "Applied AI Engineering Fundamentals",
          desc: "A master.dev course taught by Scott Moss. I added an agent chat to an existing app, then built evals that measure answer quality. The work also covered context engineering, agent tools, and RAG, plus a production feedback loop that makes answers more accurate from real usage.",
        },
      },
      contact: {
        section_title: "Contact",
        address: "Warsaw, Poland",
        phone: "Phone",
        cv_label: "Resume",
        github: "GitHub",
        linkedin: "LinkedIn",
        email_label: "Email",
      },
      widget: {
        title: "Portfolio assistant",
        open: "Open assistant",
        close: "Close assistant",
      },
    },
  },
};

const storedLanguage =
  typeof window !== "undefined" ? localStorage.getItem("lang") : null;
const initialLanguage = storedLanguage === "en" || storedLanguage === "pl" ? storedLanguage : "pl";

i18n.use(initReactI18next).init({
  resources,
  lng: initialLanguage,
  interpolation: {
    escapeValue: false,
  },
});

const applyLanguage = (language) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = language === "en" ? "en" : "pl";
  }
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("lang", language);
  }
};

applyLanguage(i18n.language);
i18n.on("languageChanged", applyLanguage);

export default i18n;
