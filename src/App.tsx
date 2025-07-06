import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/layout/Header';
import './App.css';

const App = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />
      <main className="flex-grow py-4">
        <div className="container px-4 mx-auto">
          <h1 className="text-3xl font-bold text-primary-600 mb-6">Welcome to React with Tailwind CSS v4</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
              <h2 className="text-xl font-semibold mb-2 text-neutral-800">Primary Card</h2>
              <p className="text-neutral-700">This is a sample card with a primary color scheme.</p>
              <button className="mt-4 bg-[rgb(var(--color-primary))] hover:bg-[rgb(var(--color-primary-hover))] text-white px-4 py-2 rounded transition-colors">
                Click me
              </button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-neutral-200">
              <h2 className="text-xl font-semibold mb-2 text-neutral-800">Secondary Card</h2>
              <p className="text-neutral-700">This is another card with a different style.</p>
              <button className="mt-4 bg-[rgb(var(--color-secondary))] hover:bg-[rgb(var(--color-secondary-hover))] text-white px-4 py-2 rounded transition-colors">
                Another Button
              </button>
            </div>
          </div>
          <Outlet />
        </div>
      </main>
      <footer className="bg-white border-t border-neutral-200 py-4 mt-8">
        <div className="container px-4 mx-auto">
          <p className="text-center text-sm text-neutral-500">
            {t('app.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
