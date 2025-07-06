import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import AppRouter from './routes';
import './index.css';

// Initialize i18n
i18n.init({
  interpolation: { escapeValue: false },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <AppRouter />
    </I18nextProvider>
  </StrictMode>,
);
