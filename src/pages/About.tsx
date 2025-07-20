import AboutHero from '../components/AboutHero/AboutHero';
import AboutServices from '../components/AboutServices/AboutServices';
import TechnologyExpertise from '../components/TechnologyExpertise/TechnologyExpertise';

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <AboutServices />
      <TechnologyExpertise />
    </div>
  );
};

export default About;
