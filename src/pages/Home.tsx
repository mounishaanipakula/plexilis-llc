
import HeroBanner from '../components/HeroBanner/HeroBanner';
import ProductsSection from '../components/ProductsSection/ProductsSection';
import TalentAdvisorySection from '../components/TalentAdvisorySection/TalentAdvisorySection';

const Home = () => {

  return (
    <div className="min-h-screen">
      <HeroBanner />
      <ProductsSection />
      <TalentAdvisorySection />
    </div>
  );
};

export default Home;
