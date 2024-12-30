const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2014/12/09/17/11/beach-562145_960_720.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gray-100 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Explore Madagascar’s Hidden Gems</h1>
        <p className="text-lg md:text-2xl mb-8">
          Your adventure awaits. Discover exclusive destinations and unforgettable experiences.
        </p>
        <a
          href="/destinations"
          className="relative inline-flex items-center bg-orange-500 text-white font-semibold py-4 px-8 rounded-full text-lg hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          <span className="absolute inset-0 w-full h-full rounded-full animate-pulse bg-orange-400 opacity-50"></span>
          <span className="relative z-10 flex items-center">
            <svg className="mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12h14M12 5l7 7-7 7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Start Your Journey
          </span>
        </a>

      </div>
    </section>
  );
};

export default HeroSection;
