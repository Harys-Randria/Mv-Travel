const ExperienceSection = () => {
  return (
    <section className="relative bg-gray-900 text-gray-200 py-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70" 
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/12/20/22/09/beach-1921598_960_720.jpg')" }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-6xl md:text-8xl font-title text-yellow-400 mb-4">
            Discover Madagascar with Us
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            We specialize in curating unforgettable travel experiences across Madagascar.
          </p>
        </div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Expert Guidance</h3>
            <p className="text-gray-300">
              Our local guides ensure authentic experiences, taking you to hidden gems across Madagascar.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Unique Itineraries</h3>
            <p className="text-gray-300">
              Handpicked journeys tailored to your tastes, whether it s adventure, relaxation, or exploration.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-2">Sustainable Travel</h3>
            <p className="text-gray-300">
              We prioritize sustainable practices to protect Madagascar’s natural beauty for future generations.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href="/about-us"
            className="inline-block bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-600"
          >
            Learn More About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
