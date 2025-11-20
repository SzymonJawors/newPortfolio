import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import certificate1 from "../assets/certificates/certificate-1.png";
import certificate2 from "../assets/certificates/certificate-2.png";
import certificate3 from "../assets/certificates/certificate-3.png";
import certificate4 from "../assets/certificates/certificate-4.png";
import certificate5 from "../assets/certificates/certificate-5.png";
import certificate6 from "../assets/certificates/certificate-6.png";

export const CONTENT = `Tworzę nowoczesne aplikacje webowe w React, JavaScript i Node.js, a Pythona wykorzystuję głównie do pracy z AI, automatyzacją i narzędziami backendowymi. Łączę intuicyjne interfejsy z solidną logiką po stronie serwera, dbając o wydajność i przejrzysty kod. Stale rozwijam swoje umiejętności w obszarze sztucznej inteligencji i projektuję rozwiązania, które realnie ułatwiają użytkownikom pracę.`;

export const ABOUT_TEXT = `Programuję od kilku lat — zaczynałem w technikum, gdzie poznałem podstawy frontendu. Dziś rozwijam się jako fullstack developer, realizując kursy takie jak CS50 i Meta oraz tworząc własne projekty. Interesuję się sztuczną inteligencją i regularnie poszerzam wiedzę w tym obszarze. Studiuję informatykę, łącząc teorię z praktyką.`;

export const EXPERIENCES = [
  {
    year: "10/2025 - Obecnie",
    role: "Inżynier Informatyki",
    company: "Uniwersytet WSB Merito w Warszawie",
    description: `Na kierunku Inżyniera Informatyki uczę się wielu języków programowania, m.in. Python i JavaScript, poznaję frameworki React, Angular, Node.js, Django. Są również elementy baz danych oraz sztucznej inteligencji.`,
    technologies: [
      "Javascript",
      "React",
      "Next.js",
      "Python",
      "SQL",
    ],
  },
  {
    year: "06/2025 - 10/2025",
    role: "Kurs Meta Front-End Developer",
    company: "Meta",
    description: `W tym kursie rozwijam swoje umiejętności w tworzeniu aplikacji webowych. Tworzę głównie strony w React, projektuję interfejsy w Figma oraz zarządzam kodem za pomocą Git. Kurs łączy teorię z praktyką, m.in. w projektach Capstone i wdrażaniu procesów CI/CD.`,
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "UI/UX",
      "CI/CD",
    ],
  },
  {
    year: "09/2024 - 01/2025",
    role: "CS50 Web Programming with Python and JavaScript",
    company: "HarvardX",
    description: `Kurs z inicjatywy Uniwersytetu Harvardu obejmujący tworzenie aplikacji webowych z użyciem Python (Django), JavaScript (React) oraz baz danych. Kurs skupiał się na tworzeniu RESTful API, bezpieczeństwie aplikacji oraz praktykach CI/CD. Wszystkie projekty z kursu są na moim GitHubie`,
    technologies: [
      "Python",
      "Django",
      "JavaScript",
      "React",
      "Bootstrap",
    ],
  },
  {
    year: "2021 - 2025",
    role: "Technik Informatyk",
    company: "Augustowskie Centrum Edukacyjne",
    description: `Podczas nauki zdobyłem umiejętności w tworzeniu aplikacji internetowych, programowaniu (HTML, CSS, JavaScript) oraz administrowaniu sieciami komputerowymi. Uczyłem się także pracy z bazami danych i systemami operacyjnymi.`,
    technologies: [
      "JavaScript",
      "CSS",
      "HTML",
      "PHP",
      "MySQL",
      "C++",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Netflix Clone",
    image: project1,
    description:
      "Klon Netflixa stworzony w React i Vite. Aplikacja pozwala na rejestrację, logowanie i przeglądanie trailerów filmów. Dane użytkowników przechowywane są w Firebase. Projekt jest hostowany na Vercel i można go przetestować online. Więcej informacji na GitHubie.",
    technologies: [
      "CSS",
      "TMDbAPI",
      "Firebase",
      "JavaScript",
      "React",
    ],
    link: `https://github.com/SzymonJawors/netflix-clone`,
    live: `https://netflix-clone-eight-beta-40.vercel.app`,
  },
  {
    title: "JaworAI",
    image: project2,
    description:
      "Nowoczesna aplikacja webowa z inteligentnym asystentem AI, umożliwiająca rejestrację, logowanie i interakcję z AI. W trybie premium użytkownicy mają dostęp do rozszerzonych funkcji AI. Projekt stworzony w React, Node.js i Express, hostowany na Vercel. Więcej informacji na GitHubie.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Clerk",
    ],
    link: `https://github.com/SzymonJawors/JaworAI`,
    live: `https://jawor-ai.vercel.app`,
  },
  {
    title: "HotelMotel - System Rezerwacji Hotelowych",
    image: project3,
    description:
      "HotelMotel to nowoczesna, pełnoprawna aplikacja webowa typu Full-Stack (MERN), umożliwiająca przeglądanie ofert hotelowych, rezerwację pokoi oraz zarządzanie obiektami przez właścicieli. Aplikacja posiada swoje demo na Vercel. Więcej informacji na GitHubie.",
    technologies: [
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
    ],
    link: `https://github.com/SzymonJawors/HotelMotel`,
    live: `https://hotel-motel-peach.vercel.app`,
  },
  {
    title: "Filmowa Baza Danych",
    image: project4,
    description:
      "Aplikacja która wyświetla baze danych filmów przy użyciu API. Na bazie wyszukiwań użytkownika, w sekcji Trending wyświetla te, które są najczęściej wpisywane. Aplikacja jest postawiona na Vercelu i można ją wypróbować. Więcej informacji na GitHubie.",
    technologies: [
      "JavaScript",
      "API",
      "React",
      "Tailwind",
      "Databases",
    ],
    link: `https://github.com/SzymonJawors/Moviedatabase-trending`,
    live: `https://moviedatabase-trending.vercel.app`,
  },
  {
    title: "Thinkboard",
    image: project5,
    description:
      "Aplikacja Fullstack, umożliwiająca tworzenie notatek, zapisywanie ich w bazie danych oraz zarządzanie nimi (edycja, usuwanie). Backend stworzony w Node.js z użyciem Express.js i MongoDB, frontend w React z wykorzystaniem Tailwind CSS oraz daisyUI.",
    technologies: [
      "MongoDB",
      "Node.js",
      "Express.js",
      "React",
      "Tailwind",
    ],
    link: `https://github.com/SzymonJawors/Thinkboard`,
  },
  {
    title: "Quizz App",
    image: project6,
    description:
      "Aplikacja do tworzenia, rozwiązywania quizów, opcja zalogowania, wylogowania, zakładania konta. Był to finalny projekt w kursie od HarvardX, stworzony od podstaw samemu. Nie ma zbyt dużo stylowania, gdyż głównie skupiłem się na funkcjonalności aplikacji, style zrobione przy użyciu Bootstrapa. Wszystkie pliki z projektu na moim GitHubie.",
    technologies: [
      "JavaScript",
      "React",
      "Django",
      "Python",
      "Bootstrap",
    ],
    link: `https://github.com/SzymonJawors/QuizzApp-project`,
  },
];

export const CERTIFICATES = [
  {
    title: "Meta Front End Developer",
    image: certificate1,
    description: `Program obejmował naukę HTML, CSS, JavaScript, React, Git, oraz zasad responsywnego projektowania i dostępności.
Podczas kursu realizowałem praktyczne projekty (część z nich jest na GitHubie), w tym budowę w pełni funkcjonalnych aplikacji front-endowych z wykorzystaniem frameworka React oraz integrację z API.`,
    technologies: [
      "HTML",
      "SCSS",
      "React",
      "JavaScript",
      "API",
      "UI/UX",
    ],
  },
  {
    title:
      "Certyfikat CS50W Web Programming with Python and JavaScript",
    image: certificate2,
    description:
      "Certyfikat z HarvardX, bardzo praktyczne zadania i projekty, większość z użyciem Pythona i Reacta, również dużo o bezpieczeństwie aplikacji i CI/CD, wszystkie pliki z projektów można znaleźć na moim profilu GitHub.",
    technologies: [
      "HTML",
      "CSS",
      "React",
      "Python",
      "Django",
      "Bootstrap",
      "CI/CD",
    ],
  },
  {
    title: "Meta React",
    image: certificate3,
    description:
      "Specjalizacja zdobyta od Meta, większość materiału to praktyka, sam React bez zbędnych informacji. Specjalizacja zawierała dwa kursy Meta Basics i Meta Advanced które trzeba było ukończyć, aby zdobyć specjalizacje.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
  },
  {
    title: "React Advanced",
    image: certificate4,
    description:
      "Certyfikat potrzebny do specjalizacji Meta React, obszerny kurs, wiele nowych informacji i pracy z API.",
    technologies: [
      "CSS",
      "JavaScript",
      "API",
      "React",
      "Bootstrap",
    ],
  },
  {
    title:
      "IBM Node.js & MongoDB: Developing Backend Database Applications",
    image: certificate5,
    description:
      "Specjalizacja IBM obejmująca tworzenie aplikacji backendowych w Expressie i Node.js, obsługę REST API oraz pracę z bazami danych MongoDB.",
    technologies: [
      "Express.js",
      "Node.js",
      "JavaScript",
      "API",
      "MongoDB",
    ],
  },
  {
    title: "GenAI Job Simulation",
    image: certificate6,
    description:
      "Z zamiłowania do AI, symulacja pracy gdzie tworzony był bot AI do analizy finansów.",
    technologies: ["AI", "LLM", "GenAI"],
  },
];

export const CONTACT = {
  address: "Warszawa",
  phoneNo: "+48 603 121 889",
  github: "GitHub",
  linkedin: "LinkedIn",
  email: "jawor12325@gmail.com",
};
