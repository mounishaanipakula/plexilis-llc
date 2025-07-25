interface LoadingSpinnerProps {
  className?: string;
}

const LoadingSpinner = ({
  className = '',
}: LoadingSpinnerProps) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative">
        <div className="w-8 h-8 rounded-full absolute border-4 border-solid border-gray-200"></div>
        <div className="w-8 h-8 rounded-full animate-spin absolute border-4 border-solid border-blue-500 border-t-transparent"></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
