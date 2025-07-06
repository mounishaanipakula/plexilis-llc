import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('navigation.about')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            This is a minimal and flexible React.js starter template with internationalization support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
