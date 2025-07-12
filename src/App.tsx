import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

// Reusable page layout component
export const PageLayout = ({ title }: { title: string }) => (
  <div className="py-16 md:py-24">
    <div className="container px-4 mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">{title}</h1>
      <div className="prose max-w-none">
        <p className="text-neutral-700">This is a placeholder for the {title.toLowerCase()} page content.</p>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
