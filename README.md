# React Starter Template

A modern, production-ready React starter template with TypeScript, Vite, and best practices.

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![i18next](https://img.shields.io/badge/i18next-23.2.11-26A69A?logo=i18next&logoColor=white)](https://www.i18next.com/)

## ✨ Features

- ⚡ **Blazing Fast** with Vite
- 🎨 **Modern UI** with Tailwind CSS
- 🌍 **i18n** with built-in language detection (English, Spanish, French)
- 🛣️ **Routing** with React Router v6
- 🛡️ **Error Boundaries** with graceful fallback UI
- 🔄 **Loading States** with smooth transitions
- 📱 **Fully Responsive** design
- 🧩 **Modular Architecture**
- 🛠 **Developer Experience**
  - TypeScript support
  - ESLint + Prettier
  - Path aliases
  - Environment variables support

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/react-starter.git
   cd react-starter
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Copy the environment file and update the values if needed:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📁 Project Structure

```
src/
├── assets/               # Static assets
│   ├── fonts/            # Font files
│   ├── icons/            # SVG icons
│   └── images/           # Image files
├── components/           # Reusable UI components
│   ├── error/            # Error boundary components
│   ├── layout/           # Layout components
│   └── ui/               # UI components
├── config/               # Configuration files
├── constants/            # Application constants
├── hooks/                # Custom React hooks
├── locales/              # Translation files
│   ├── en/               # English translations
│   ├── es/               # Spanish translations
│   └── fr/               # French translations
├── pages/                # Page components
├── routes/               # Route configurations
├── types/                # TypeScript type definitions
├── App.tsx               # Main App component
└── main.tsx              # Application entry point
```

## 🌍 Internationalization (i18n)

The template includes i18next with the following features:
- Language detection (browser language, local storage)
- Support for English (en), Spanish (es), and French (fr)
- Easy to add more languages

### Adding a New Language

1. Create a new folder in `src/locales/` with the language code (e.g., `de` for German)
2. Add a `translation.json` file with the translations
3. Update the `i18n.ts` configuration to include the new language

## 🔧 Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_APP_NAME="React Starter"
VITE_APP_DESCRIPTION="A modern React starter template"
VITE_API_BASE_URL="https://api.example.com"
VITE_DEFAULT_LANGUAGE="en"
VITE_SUPPORTED_LANGUAGES="en,es,fr"
```

## 🛠 Available Scripts

- `dev` - Start development server
- `build` - Build for production
- `preview` - Preview production build
- `lint` - Run ESLint
- `format` - Format code with Prettier

## 🚀 Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Freact-starter)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/react-starter)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Your Name]

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
