import { useTranslation } from 'react-i18next';

interface LoadingSpinnerProps {
  fullScreen?: boolean;
  message?: string;
  className?: string;
}

const LoadingSpinner = ({
  fullScreen = true,
  message,
  className = '',
}: LoadingSpinnerProps) => {
  const { t } = useTranslation();
  const displayMessage = message || t('loading.message', 'Loading...');

  const spinner = (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-blue-500 border-t-transparent"></div>
      </div>
      {displayMessage && (
        <p className="mt-4 text-sm font-medium text-gray-500">{displayMessage}</p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;
