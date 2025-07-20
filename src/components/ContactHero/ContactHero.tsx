const ContactHero = () => {
  return (
    <section className="relative h-48 sm:h-56 md:h-64 bg-gradient-to-r from-primary to-blue-900 flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/contact-us.png" 
          alt="Contact Us - Professional Business Communication"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-secondary">CONTACT US</span>
        </h1>
      </div>
    </section>
  );
};

export default ContactHero;