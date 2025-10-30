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

export const CONTENT = `Zajmuję się tworzeniem nowoczesnych aplikacji, głównie z wykorzystaniem technologii takich jak React, JavaScript, Node.js, Python i Django. W pracy skupiam się na budowaniu intuicyjnych interfejsów użytkownika, wydajnych struktur aplikacji i przejrzystym kodzie. Lubię łączyć estetykę frontendu z logiką backendu, projektując rozwiązania, które są jednocześnie funkcjonalne i przyjemne w użyciu. Stale poszerzam swoją wiedzę o nowe narzędzia i dobre praktyki w świecie web developmentu, a moim celem jest tworzenie aplikacji, które realnie rozwiązują problemy i dostarczają świetne doświadczenia użytkownikom.`;

export const ABOUT_TEXT = `Programowaniem zajmuję się od kilku lat, zaczynając od nauki w technikum informatycznym, gdzie zdobyłem solidne podstawy w HTML, CSS i JavaScript. Od tamtej pory cały czas rozwijam swoje umiejętności jako fullstack developer, uczestnicząc w kursach online, m.in. CS50 i Meta, oraz eksperymentując z nowymi rozwiązaniami. Lubię tworzyć fajne i użyteczne aplikacje, które sprawiają radość użytkownikom. Mam również zamiłowanie do sztucznej inteligencji i stale poszerzam swoją wiedzę w tym obszarze. Obecnie studiuję informatykę, łącząc naukę z praktycznym tworzeniem projektów.`;

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
      "mongoDB",
      "Python",
      "Angular",
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
      "Git",
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
      "TMDb API",
      "Firebase",
      "JavaScript",
      "React",
    ],
    link: `https://github.com/SzymonJawors/netflix-clone`,
  },
  {
    title: "AI CHAT Clone",
    image: project2,
    description:
      "Aplikacja Clone AI CHAT, fetchuje API AI z Gemini. Chat normalnie funkcjonuje odpowiada na pytania.Trzeba posiadać swój API, wszystkie informacje na moim GitHubie.",
    technologies: ["HTML", "CSS", "React", "API", "FETCH"],
    link: `https://github.com/SzymonJawors/AIclone`,
  },
    {
    title: "Filmowa Baza Danych",
    image: project3,
    description:
      "Aplikacja która wyświetla baze danych filmów przy użyciu API ze strony themoviedb.org (trzeba utworzyć swoje API na stronie aby aplikacja działała). W aplikacji można wyszukiwać wszystkie filmy oraz dodawać je do polubionych - dla których jest podstrona gdzie je wszystkie widać i można je również usuwać.",
    technologies: ["HTML", "CSS", "JavaScript", "API", "React", "Router"],
    link: `https://github.com/SzymonJawors/Film-data-base`,
  },
  {
    title: "Portfolio",
    image: project4,
    description:
      "Moje pierwsze portfolio (aktualnie oglądasz moje drugie), stworzone przy użyciu czystego JavaScripta, HTML i CSS'a bez żadnych Frameworków, portfolio w pełni responsywne na każdym urządzeniu. Cały projekt można zobaczyć na GitHubie.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: `https://github.com/SzymonJawors/my-portfolio`,
  },
    {
    title: "To Do List",
    image: project5,
    description:
      "Prosta aplikajca To-Do, można dodawać cele, odznaczać je oraz usuwać. Stworzona przy użyciu Reacta i Tailwinda.",
    technologies: ["HTML", "CSS", "JavaScript", 'React', 'Tailwind'],
    link: `https://github.com/SzymonJawors/ToDoList`,
  },
  {
    title: "Quizz App",
    image: project6,
    description:
      "Aplikacja do tworzenia, rozwiązywania quizów, opcja zalogowania, wylogowania, zakładania konta. Był to finalny projekt w kursie od HarvardX, stworzony od podstaw samemu. Nie ma zbyt dużo stylowania, gdyż głównie skupiłem się na funkcjonalności aplikacji, style zrobione przy użyciu Bootstrapa. Wszystkie pliki z projektu na moim GitHubie.",
    technologies: [
      "CSS",
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
      "CSS",
      "SCSS",
      "React",
      "JavaScript",
      "Git",
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
      "HTML",
      "CSS",
      "JavaScript",
      "API",
      "React",
      "Bootstrap",
    ],
  },
  {
    title: "GenAI Job Simulation",
    image: certificate5,
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
