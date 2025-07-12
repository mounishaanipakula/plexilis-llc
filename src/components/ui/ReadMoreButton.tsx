interface ReadMoreButtonProps {
  onClick?: () => void;
  className?: string;
}

const ReadMoreButton = ({ onClick, className = "" }: ReadMoreButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`bg-secondary hover:bg-secondary-hover text-white pl-6 rounded-full font-normal transition-colors duration-300 flex items-center space-x-3 ${className}`}
    >
      <span>Read More</span>
      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </button>
  );
};

export default ReadMoreButton;