# Szymon Jaworski — Portfolio

[![Live site](https://img.shields.io/badge/Live-szymonjaworski.dev-06b6d4?style=flat-square)](https://www.szymonjaworski.dev/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Personal portfolio website for **Szymon Jaworski** — Full Stack Developer focused on React, Node.js, and AI-powered web applications.

**Live:** [szymonjaworski.dev](https://www.szymonjaworski.dev/)

---

## English

### About

A single-page portfolio built with React and Vite. It presents my background, tech stack, experience, projects, certifications, and contact details. The site supports **Polish** and **English** via `i18next`, includes an embedded **AI assistant widget**, and is deployed on **Vercel** with Analytics and Speed Insights.

### Features

- Responsive layout with smooth animations (Framer Motion)
- Bilingual UI — Polish (default) and English
- Sections: Hero, About, Tech Stack, Experience, Projects, Certifications, Contact
- Downloadable CV (PDF)
- Floating AI chat widget (JaworAI)
- Vercel Analytics & Speed Insights

### Tech stack

| Layer | Technologies |
|-------|--------------|
| Frontend | React 19, Vite 7, Tailwind CSS 4 |
| i18n | i18next, react-i18next |
| UI | Framer Motion, React Icons |
| Deployment | Vercel |

### Getting started

**Prerequisites:** Node.js 18+ and npm

```bash
# Clone the repository
git clone https://github.com/SzymonJawors/newPortfolio.git
cd newPortfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at `http://localhost:5173` by default.

### Available scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

### Project structure

```
src/
├── components/     # UI sections (Navbar, About, Projects, etc.)
├── i18n.js         # Translation resources (pl / en)
├── App.jsx         # Main layout
└── main.jsx        # Entry point
public/             # Static assets (CV, images, favicon)
```

### Author

**Szymon Jaworski** — Full Stack Developer  
[Warsaw, Poland](https://www.szymonjaworski.dev/) · [GitHub](https://github.com/SzymonJawors) · [LinkedIn](https://www.linkedin.com/in/szymonjawor)

---

## Polski

### O projekcie

Jednostronicowe portfolio stworzone w React i Vite. Prezentuje moje doświadczenie, technologie, projekty, certyfikaty oraz dane kontaktowe. Strona obsługuje **polski** i **angielski** (`i18next`), zawiera osadzony **widget asystenta AI** i jest hostowana na **Vercel** z Analytics oraz Speed Insights.

### Funkcje

- Responsywny layout z animacjami (Framer Motion)
- Dwujęzyczny interfejs — polski (domyślnie) i angielski
- Sekcje: Hero, O mnie, Technologie, Doświadczenie, Projekty, Certyfikaty, Kontakt
- Pobieralne CV (PDF)
- Pływający widget czatu AI (JaworAI)
- Vercel Analytics & Speed Insights

### Stos technologiczny

| Warstwa | Technologie |
|---------|-------------|
| Frontend | React 19, Vite 7, Tailwind CSS 4 |
| i18n | i18next, react-i18next |
| UI | Framer Motion, React Icons |
| Wdrożenie | Vercel |

### Uruchomienie lokalne

**Wymagania:** Node.js 18+ oraz npm

```bash
# Sklonuj repozytorium
git clone https://github.com/SzymonJawors/newPortfolio.git
cd newPortfolio

# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev
```

Aplikacja domyślnie działa pod adresem `http://localhost:5173`.

### Dostępne skrypty

| Polecenie | Opis |
|-----------|------|
| `npm run dev` | Serwer deweloperski Vite z hot reload |
| `npm run build` | Build produkcyjny do katalogu `dist/` |
| `npm run preview` | Podgląd buildu produkcyjnego lokalnie |
| `npm run lint` | Uruchomienie ESLint |

### Struktura projektu

```
src/
├── components/     # Sekcje UI (Navbar, About, Projects, itd.)
├── i18n.js         # Tłumaczenia (pl / en)
├── App.jsx         # Główny layout
└── main.jsx        # Punkt wejścia
public/             # Zasoby statyczne (CV, obrazy, favicon)
```

### Autor

**Szymon Jaworski** — Full Stack Developer  
[Warszawa](https://www.szymonjaworski.dev/) · [GitHub](https://github.com/SzymonJawors) · [LinkedIn](https://www.linkedin.com/in/szymonjawor)

---

## License

This project is for personal portfolio use. All rights reserved © Szymon Jaworski.
