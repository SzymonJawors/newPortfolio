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
        contact: "Kontakt"
      },
      hero: {
        text: "Tworzę nowoczesne aplikacje webowe w React, JavaScript i Node.js, a Pythona wykorzystuję głównie do pracy z AI, automatyzacją i narzędziami backendowymi. Łączę intuicyjne interfejsy z solidną logiką po stronie serwera, dbając o wydajność i przejrzysty kod. Stale rozwijam swoje umiejętności w obszarze sztucznej inteligencji i projektuję rozwiązania, które realnie ułatwiają użytkownikom pracę.",
      },
      about: {
        title_main: "O",
        title_sub: "Mnie",
        text: "Programuję od kilku lat — zaczynałem w technikum, gdzie poznałem podstawy frontendu. Dziś rozwijam się jako fullstack developer, realizując kursy takie jak CS50 i Meta oraz tworząc własne projekty. Interesuję się sztuczną inteligencją i regularnie poszerzam wiedzę w tym obszarze. Studiuję informatykę, łącząc teorię z praktyką.",
      },
      tech: {
        title: "Technologie których używam",
      },
      experience: {
        section_title: "Doświadczenie i Edukacja",
        wsb: {
          role: "Inżynier Informatyki",
          company: "Uniwersytet WSB Merito w Warszawie",
          time: "10/2025 - Obecnie",
          desc: "Na kierunku Inżyniera Informatyki uczę się wielu języków programowania, m.in. Python i JavaScript, poznaję frameworki React, Angular, Node.js, Django. Są również elementy baz danych oraz sztucznej inteligencji.",
        },
        meta: {
          role: "Kurs Meta Front-End Developer",
          company: "Meta",
          time: "06/2025 - 10/2025",
          desc: "W tym kursie rozwijam swoje umiejętności w tworzeniu aplikacji webowych. Tworzę głównie strony w React, projektuję interfejsy w Figma oraz zarządzam kodem za pomocą Git. Kurs łączy teorię z praktyką, m.in. w projektach Capstone i wdrażaniu procesów CI/CD.",
        },
        cs50: {
          role: "CS50 Web Programming with Python and JavaScript",
          company: "HarvardX",
          time: "09/2024 - 01/2025",
          desc: "Kurs z inicjatywy Uniwersytetu Harvardu obejmujący tworzenie aplikacji webowych z użyciem Python (Django), JavaScript (React) oraz baz danych. Kurs skupiał się na tworzeniu RESTful API, bezpieczeństwie aplikacji oraz praktykach CI/CD. Wszystkie projekty z kursu są na moim GitHubie.",
        },
        tech: {
          role: "Technik Informatyk",
          company: "Augustowskie Centrum Edukacyjne",
          time: "2021 - 2025",
          desc: "Podczas nauki zdobyłem umiejętności w tworzeniu aplikacji internetowych, programowaniu (HTML, CSS, JavaScript) oraz administrowaniu sieciami komputerowymi. Uczyłem się także pracy z bazami danych i systemami operacyjnymi.",
        },
      },
      projects: {
        section_title: "Projekty",
        click_test: "Kliknij by przetestować",
        click_code: "KOD",
        netflix: {
          title: "Netflix Clone",
          desc: "Klon Netflixa stworzony w React i Vite. Aplikacja pozwala na rejestrację, logowanie i przeglądanie trailerów filmów. Dane użytkowników przechowywane są w Firebase. Projekt jest hostowany na Vercel i można go przetestować online. Więcej informacji na GitHubie.",
        },
        jaworai: {
          title: "JaworAI",
          desc: "Nowoczesna aplikacja webowa z inteligentnym asystentem AI, umożliwiająca rejestrację, logowanie i interakcję z AI. W trybie premium użytkownicy mają dostęp do rozszerzonych funkcji AI. Projekt stworzony w React, Node.js i Express, hostowany na Vercel. Więcej informacji na GitHubie.",
        },
        hotel: {
          title:
            "HotelMotel - System Rezerwacji Hotelowych",
          desc: "HotelMotel to nowoczesna, pełnoprawna aplikacja webowa typu Full-Stack (MERN), umożliwiająca przeglądanie ofert hotelowych, rezerwację pokoi oraz zarządzanie obiektami przez właścicieli. Aplikacja posiada swoje demo na Vercel. Więcej informacji na GitHubie.",
        },
        movie: {
          title: "Filmowa Baza Danych",
          desc: "Aplikacja która wyświetla baze danych filmów przy użyciu API. Na bazie wyszukiwań użytkownika, w sekcji Trending wyświetla te, które są najczęściej wpisywane. Aplikacja jest postawiona na Vercelu i można ją wypróbować. Więcej informacji na GitHubie.",
        },
        thinkboard: {
          title: "Thinkboard",
          desc: "Aplikacja Fullstack, umożliwiająca tworzenie notatek, zapisywanie ich w bazie danych oraz zarządzanie nimi (edycja, usuwanie). Backend stworzony w Node.js z użyciem Express.js i MongoDB, frontend w React z wykorzystaniem Tailwind CSS oraz daisyUI.",
        },
        quiz: {
          title: "Quizz App",
          desc: "Aplikacja do tworzenia, rozwiązywania quizów, opcja zalogowania, wylogowania, zakładania konta. Był to finalny projekt w kursie od HarvardX, stworzony od podstaw samemu. Nie ma zbyt dużo stylowania, gdyż głównie skupiłem się na funkcjonalności aplikacji, style zrobione przy użyciu Bootstrapa. Wszystkie pliki z projektu na moim GitHubie.",
        },
      },
      certificates: {
        section_title: "Certyfikaty",
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
        contact: "Contact"
      },
      hero: {
        text: "I build modern web applications using React, JavaScript, and Node.js, leveraging Python primarily for AI, automation, and backend tools. I combine intuitive interfaces with solid server-side logic, focusing on performance and clean code. I continuously develop my skills in artificial intelligence and design solutions that genuinely facilitate users' work.",
      },
      about: {
        title_main: "About",
        title_sub: "Me",
        text: "I have been programming for several years — I started in technical school, where I learned the basics of frontend development. Today, I am developing as a full-stack developer, completing courses like CS50 and Meta, and building my own projects. I am interested in artificial intelligence and regularly expand my knowledge in this area. I am currently studying computer science, combining theory with practice.",
      },
      tech: {
        title: "Technologies I Use",
      },
      experience: {
        section_title: "Experience & Education",
        wsb: {
          role: "Computer Science Engineer (Student)",
          company: "WSB Merito University in Warsaw",
          time: "10/2025 - Present",
          desc: "Studying Computer Science Engineering, I am learning multiple programming languages, including Python and JavaScript, and frameworks like React, Angular, Node.js, and Django. The curriculum also covers database management and artificial intelligence elements.",
        },
        meta: {
          role: "Meta Front-End Developer Course",
          company: "Meta",
          time: "06/2025 - 10/2025",
          desc: "In this course, I developed my skills in creating web applications. I primarily built sites in React, designed interfaces in Figma, and managed code using Git. The course combined theory with practice, including Capstone projects and CI/CD implementation.",
        },
        cs50: {
          role: "CS50 Web Programming with Python and JavaScript",
          company: "HarvardX",
          time: "09/2024 - 01/2025",
          desc: "A course by Harvard University covering web application development using Python (Django), JavaScript (React), and databases. It focused on creating RESTful APIs, application security, and CI/CD practices. All course projects are available on my GitHub.",
        },
        tech: {
          role: "IT Technician",
          company: "Augustów Education Center",
          time: "2021 - 2025",
          desc: "During my education, I gained skills in web application development, programming (HTML, CSS, JavaScript), and computer network administration. I also learned to work with databases and operating systems.",
        },
      },
      projects: {
        section_title: "Projects",
        click_test: "Click to test live",
        click_code: "CODE",
        netflix: {
          title: "Netflix Clone",
          desc: "Netflix Clone created with React and Vite. The app allows registration, login, and browsing movie trailers. User data is stored in Firebase. The project is hosted on Vercel and can be tested online. More info on GitHub.",
        },
        jaworai: {
          title: "JaworAI",
          desc: "A modern web application with an intelligent AI assistant, enabling registration, login, and interaction with AI. Premium users have access to extended AI features. Created with React, Node.js, and Express, hosted on Vercel. More info on GitHub.",
        },
        hotel: {
          title: "HotelMotel - Hotel Booking System",
          desc: "HotelMotel is a modern, full-fledged Full-Stack (MERN) web application allowing hotel offer browsing, room booking, and property management for owners. Demo available on Vercel. More info on GitHub.",
        },
        movie: {
          title: "Movie Database",
          desc: "An application that displays a database of movies using an API. Based on user searches, the Trending section displays the most frequently searched titles. The app is deployed on Vercel. More info on GitHub.",
        },
        thinkboard: {
          title: "Thinkboard",
          desc: "Fullstack application enabling note creation, database storage, and management (editing, deleting). Backend built in Node.js with Express.js and MongoDB, frontend in React using Tailwind CSS and daisyUI.",
        },
        quiz: {
          title: "Quiz App",
          desc: "An app for creating and solving quizzes, with login/logout and account creation options. This was the final project for the HarvardX course, built from scratch. Styled minimally with Bootstrap to focus on functionality. All project files are on my GitHub.",
        },
      },
      certificates: {
        section_title: "Certifications",
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

i18n.use(initReactI18next).init({
  resources,
  lng: "pl",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
