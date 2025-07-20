const AboutHero = () => {
  return (
    <section className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-r from-primary to-blue-900 flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/about-us.png" 
          alt="About Us - Team Collaboration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          ABOUT <span className="text-secondary">US</span>
        </h1>
      </div>
    </section>
  );
};

export default AboutHero;