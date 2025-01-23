const TailorMadePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] sm:h-[500px] lg:h-[600px]"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2019/11/02/21/36/africa-4597486_1280.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 mt-8 sm:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title text-white mb-4 drop-shadow-lg text-center">
            Plan Your Dream Adventure
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 text-center max-w-2xl drop-shadow-md">
            Explore the world, your way. Discover tailor-made travel solutions designed for you.
          </p>
        </div>
      </div>

      {/* Service Description */}
      <div className="bg-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-title text-gray-800 mb-4">
            What is Tailor-Made Travel?
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mb-6 leading-relaxed">
            Our Tailor-Made service is designed to create a unique travel experience based on your
            preferences, budget, and interests. Whether you're looking for adventure, relaxation, or
            cultural exploration, we craft the perfect itinerary just for you.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-white py-10 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-title text-gray-800 mb-6 text-center">
            Start Your Journey
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mb-6 text-center leading-relaxed">
            Fill out the form below to help us plan your next adventure. We'll get back to you with a
            personalized itinerary tailored to your preferences.
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd1EKOj9uFyccUiDQfEB7BIYS0OkkqkX_YTZsw-tQMw6S2gUg/viewform?usp=header"
              width="100%"
              height="1200"
              frameBorder="0"
              className="rounded-lg shadow-lg"
              title="Tailor-Made Travel Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailorMadePage;
