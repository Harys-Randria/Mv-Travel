const TailorMadePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?travel')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Plan Your Dream Adventure</h1>
        </div>
      </div>

      {/* Service Description */}
      <div className="bg-gray-100 py-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Tailor-Made Travel?</h2>
          <p className="text-gray-600 text-lg mb-6">
            Our Tailor-Made service is designed to create a unique travel experience based on your preferences, budget, and interests. Whether you're looking for adventure, relaxation, or cultural exploration, we craft the perfect itinerary just for you.
          </p>
          <div className="text-center mt-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdto2c8ar6ci4275UOHmoQby5eMkC6YbNZkUb3kFYGXkODJhQ/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            >
              Fill Out the Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailorMadePage;
