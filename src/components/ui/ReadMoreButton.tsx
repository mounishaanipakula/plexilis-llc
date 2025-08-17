interface ReadMoreButtonProps {
  onClick?: () => void;
  className?: string;
}

const ReadMoreButton = ({ onClick, className = "" }: ReadMoreButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className={`bg-secondary hover:bg-secondary-hover text-white font-normal transition-colors duration-300 flex items-center 
        w-[118px] h-9 md:w-auto md:h-auto pl-3 md:pl-6 pr-0 md:pr-0 md:space-x-3 
        rounded-full md:rounded-full justify-between md:justify-start relative ${className}`}
      style={{ borderRadius: '123.42px' }}
    >
      <span 
        className="text-[12px] md:text-base leading-[35.79px] md:leading-normal capitalize tracking-[-0.09px] md:tracking-normal"
        style={{ 
          fontFamily: 'Inter', 
          fontWeight: 400,
          lineHeight: '35.79px'
        }}
      >
        Read More
      </span>
      <div className="w-9 h-9 md:w-12 md:h-12 bg-white/20 rounded-full flex items-center justify-center">
        <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </button>
  );
};

export default ReadMoreButton;