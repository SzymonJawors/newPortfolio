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
        text: "Jestem Software Developerem skupiającym się na backendzie, technologiach chmurowych oraz rozwiązaniach DevOps. Tworzę wydajną logikę serwerową w Pythonie i Node.js, a także integruję aplikacje z modelami sztucznej inteligencji. Łączę nowoczesne narzędzia, takie jak Docker, AWS i Terraform, z intuicyjnymi interfejsami w React, dbając o bezpieczeństwo, automatyzację i przejrzystość kodu.",
        cta_projects: "Zobacz projekty",
        cta_cv: "Pobierz CV",
      },
      about: {
        title_main: "O",
        title_sub: "Mnie",
        text: "Moja przygoda z programowaniem zaczęła się w technikum informatycznym. Dziś studiuję zaocznie informatykę w Warszawie, dzięki czemu łączę naukę z pełną dyspozycyjnością do pracy. Rozwijam się jako programista z praktycznym doświadczeniem w Pythonie, JS i DevOps, stale poszerzając wiedzę poprzez certyfikowane kursy (m.in. Harvard CS50). W wolnym czasie projektuję własne narzędzia – od aplikacji SaaS po systemy cyberbezpieczeństwa oparte na sztucznej inteligencji.",
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
        meta: {
          role: "Kurs Meta Front-End Developer",
          company: "Meta",
          time: "06/2025 - 10/2025",
          desc: "Kurs praktyczny: aplikacje w React, interfejsy w Figma i praca z Git. Certyfikat i zakres są w sekcji certyfikatów.",
        },
        cs50: {
          role: "CS50 Web Programming with Python and JavaScript",
          company: "HarvardX",
          time: "03/2025",
          desc: "Kurs HarvardX o aplikacjach webowych (Django, React, REST i bezpieczeństwo). Projekty są na GitHubie, certyfikat w sekcji poniżej.",
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
        hotel: {
          title: "HotelMotel — system rezerwacji",
          desc: "Aplikacja MERN do przeglądania hoteli, rezerwacji pokoi i panelu właściciela. Demo na Vercel.",
          points: [
            "Oferty obiektów i rezerwacja pokoi po stronie gościa.",
            "Panel właściciela do zarządzania obiektami.",
            "API w Express i dane w MongoDB.",
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
          desc: "Program obejmował naukę HTML, CSS, JavaScript, React, Git, oraz zasad responsywnego projektowania i dostępności. Podczas kursu realizowałem praktyczne projekty (część z nich jest na GitHubie), w tym budowę w pełni funkcjonalnych aplikacji front-endowych z wykorzystaniem frameworka React oraz integrację z API.",
        },
        cs50: {
          title:
            "Certyfikat CS50W Web Programming with Python and JavaScript",
          desc: "Certyfikat z HarvardX, bardzo praktyczne zadania i projekty, większość z użyciem Pythona i Reacta, również dużo o bezpieczeństwie aplikacji i CI/CD, wszystkie pliki z projektów można znaleźć na moim profilu GitHub.",
        },
        meta_react: {
          title: "Meta React",
          desc: "Specjalizacja zdobyta od Meta, większość materiału to praktyka, sam React bez zbędnych informacji. Specjalizacja zawierała dwa kursy Meta Basics i Meta Advanced które trzeba było ukończyć, aby zdobyć specjalizacje.",
        },
        react_adv: {
          title: "React Advanced",
          desc: "Certyfikat potrzebny do specjalizacji Meta React, obszerny kurs, wiele nowych informacji i pracy z API.",
        },
        ibm: {
          title: "IBM Node.js & MongoDB",
          desc: "Specjalizacja IBM obejmująca tworzenie aplikacji backendowych w Expressie i Node.js, obsługę REST API oraz pracę z bazami danych MongoDB.",
        },
        genai: {
          title: "GenAI Job Simulation",
          desc: "Z zamiłowania do AI, symulacja pracy gdzie tworzony był bot AI do analizy finansów.",
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
        text: "I am a Software Developer focusing on backend development, cloud technologies, and DevOps practices. I build efficient server-side logic using Python and Node.js, and integrate applications with AI models. I combine modern tools like Docker, AWS, and Terraform with intuitive React frontends, ensuring high performance, automation, and clean code.",
        cta_projects: "View projects",
        cta_cv: "Download CV",
      },
      about: {
        title_main: "About",
        title_sub: "Me",
        text: "My programming journey began in an IT technical high school. Currently, I am pursuing a part-time Bachelor's degree in Computer Science in Warsaw, which allows me to combine my studies with full-time work availability. I thrive on building hands-on experience in Python, JavaScript, and DevOps, while continuously expanding my knowledge through certified courses like Harvard's CS50. In my free time, I build my own tools—ranging from SaaS platforms to AI-driven cybersecurity applications.",
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
        meta: {
          role: "Meta Front-End Developer Course",
          company: "Meta",
          time: "06/2025 - 10/2025",
          desc: "Practical course: React apps, Figma interfaces, and Git. The certificate and scope are in the certifications section.",
        },
        cs50: {
          role: "CS50 Web Programming with Python and JavaScript",
          company: "HarvardX",
          time: "03/2025",
          desc: "HarvardX course on web apps (Django, React, REST, and security). Projects are on GitHub; the certificate is in the section below.",
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
        hotel: {
          title: "HotelMotel — booking system",
          desc: "MERN app for browsing hotels, booking rooms, and an owner dashboard. Demo on Vercel.",
          points: [
            "Property listings and room booking for guests.",
            "Owner dashboard for managing properties.",
            "Express API with data stored in MongoDB.",
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
          desc: "The program covered HTML, CSS, JavaScript, React, Git, responsive design, and accessibility principles. During the course, I completed practical projects (available on GitHub), including building fully functional front-end apps with React and API integration.",
        },
        cs50: {
          title:
            "CS50W Web Programming with Python and JavaScript",
          desc: "Certificate from HarvardX featuring very practical tasks and projects, mostly using Python and React. Covered application security and CI/CD. All project files can be found on my GitHub profile.",
        },
        meta_react: {
          title: "Meta React",
          desc: "Specialization earned from Meta, mostly practical material focusing on React without unnecessary fluff. Included two mandatory courses: Meta Basics and Meta Advanced.",
        },
        react_adv: {
          title: "React Advanced",
          desc: "Certificate required for the Meta React specialization. An extensive course with a lot of new information and API work.",
        },
        ibm: {
          title: "IBM Node.js & MongoDB",
          desc: "IBM specialization covering backend application development in Express and Node.js, REST API handling, and working with MongoDB databases.",
        },
        genai: {
          title: "GenAI Job Simulation",
          desc: "Driven by a passion for AI, a job simulation involving the creation of an AI bot for financial analysis.",
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
