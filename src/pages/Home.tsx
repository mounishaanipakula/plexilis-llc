import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import TalentAdvisorySection from '../components/TalentAdvisorySection/TalentAdvisorySection';
import LoadingSpinner from '../components/ui/LoadingSpinner';

// Simulate loading data from an API
const fetchHomeData = async (): Promise<string[]> => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    'AI & Machine Learning',
    'Data Integration',
    'Cloud Solutions',
    'Cybersecurity',
    'Custom Software Development',
    'IT Consulting'
  ];
};

const Home = () => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [features, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchHomeData();
        setFeatures(data);
      } catch (error) {
        console.error('Error loading home data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroBanner />
      <ProductsSection />
      <TalentAdvisorySection />
    </div>
  );
};

export default Home;
