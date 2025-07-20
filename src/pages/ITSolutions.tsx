import ITSolutionsHero from '../components/ITSolutionsHero/ITSolutionsHero';
import ITSolutionsTabs from '../components/ITSolutionsTabs/ITSolutionsTabs';

const ITSolutions = () => {
  return (
    <div className="min-h-screen bg-white">
      <ITSolutionsHero />
      <ITSolutionsTabs />
    </div>
  );
};

export default ITSolutions;