import ProductsHero from '../components/ProductsHero/ProductsHero';
import MigrationAccelerators from '../components/MigrationAccelerators/MigrationAccelerators';
import KeyBenefits from '../components/KeyBenefits/KeyBenefits';

const Products = () => {
  return (
    <div className="min-h-screen">
      <ProductsHero />
      <MigrationAccelerators />
      <KeyBenefits />
    </div>
  );
};

export default Products;