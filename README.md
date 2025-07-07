# Plexilis LLC

Official website for Plexilis LLC built with modern web technologies.

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🏢 About Plexilis LLC

Plexilis LLC is a forward-thinking company dedicated to delivering innovative solutions and exceptional services to our clients. Our website showcases our portfolio, services, and company values.

## ✨ Website Features

- ⚡ **Blazing Fast** performance with Vite
- 🎨 **Modern UI** built with Tailwind CSS
- 📱 **Fully Responsive** design for all devices
- 🛠 **Developer Friendly**
  - TypeScript for type safety
  - Code quality with ESLint + Prettier
  - Organized project structure
  - Environment-based configuration

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/plexilis-llc/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   # or
   pnpm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   # Update the .env file with your configuration
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser to view the website.

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

## 📞 Contact Us

For business inquiries or more information about our services, please contact us at:

- **Email**: info@plexilisllc.com
- **Phone**: (555) 123-4567
- **Address**: 123 Business Ave, Suite 100, City, State 12345

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

© 2025 Plexilis LLC. All rights reserved.
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
