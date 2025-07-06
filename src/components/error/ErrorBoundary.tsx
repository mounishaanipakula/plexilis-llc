import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  console.error('Error boundary caught:', error);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleReload = () => {
    window.location.reload();
  };

  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl">
          <h1 className="text-6xl font-extrabold text-red-600 mb-4">
            {error.status}
          </h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {t('error.title', 'Something went wrong')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {error.data?.message || t('error.defaultMessage', 'An unexpected error occurred. Please try again.')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleGoHome}
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {t('error.backToHome', 'Go to Homepage')}
            </button>
            <button
              onClick={handleReload}
              className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {t('error.reload', 'Reload Page')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Handle other types of errors
  const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          {t('error.unexpectedTitle', 'Unexpected Error')}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {errorMessage}
        </p>
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 mb-6">
            {t('error.contactSupport', 'If the problem persists, please contact support.')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={handleGoHome}
              className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {t('error.backToHome', 'Go to Homepage')}
            </button>
            <button
              onClick={handleReload}
              className="px-6 py-3 border border-gray-300 text-base font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              {t('error.reload', 'Reload Page')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorBoundary;
