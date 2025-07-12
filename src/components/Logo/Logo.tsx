import logo from '../../assets/images/plexilis_logo.svg';

const Logo = () => {
  return (
    <div className="flex items-center h-full py-1">
      <img 
        src={logo} 
        alt="Plexilis Logo"
        className="h-full max-h-12 w-auto object-contain"
      />
    </div>
  );
};

export default Logo;
