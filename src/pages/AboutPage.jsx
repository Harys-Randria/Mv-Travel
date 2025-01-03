const AboutPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2016/11/21/15/24/landscape-1844221_960_720.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-yellow-400">
            About Our Company
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
        <p className="text-gray-600 mt-4 text-lg leading-relaxed">
          Established with a passion for travel and adventure, our company is
          dedicated to connecting you with the world’s most breathtaking
          destinations. We pride ourselves on offering tailor-made experiences,
          seamless planning, and unforgettable memories.
        </p>
      </div>

      {/* Mission, Vision & Values */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-500">Our Mission</h3>
          <p className="text-gray-600 mt-4 leading-relaxed">
            To create unforgettable travel experiences that inspire individuals
            to explore the beauty of the world.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-500">Our Vision</h3>
          <p className="text-gray-600 mt-4 leading-relaxed">
            To become the most trusted travel partner globally, known for
            personalized experiences and sustainable tourism practices.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-500">Our Values</h3>
          <ul className="mt-4 text-gray-600 list-disc list-inside space-y-2">
            <li>Integrity and Transparency</li>
            <li>Passion for Adventure</li>
            <li>Commitment to Sustainability</li>
          </ul>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-gray-800 text-center">
          Why Travel With Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/24/19/00/mountain-2673547_960_720.jpg"
              alt="Expertise"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold text-yellow-500 mt-4">
              Expert Guidance
            </h3>
            <p className="text-gray-600 mt-2">
              Our team of seasoned travel experts ensures every detail of your
              trip is perfect.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/09/05/12/23/sea-1649893_960_720.jpg"
              alt="Customized Trips"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold text-yellow-500 mt-4">
              Personalized Journeys
            </h3>
            <p className="text-gray-600 mt-2">
              We design trips tailored to your preferences and interests.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/19/14/00/forest-1836596_960_720.jpg"
              alt="Sustainability"
              className="w-full h-32 object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-bold text-yellow-500 mt-4">
              Sustainable Tourism
            </h3>
            <p className="text-gray-600 mt-2">
              We promote eco-friendly practices to preserve destinations for
              future generations.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Start Your Journey With Us Today
          </h2>
          <p className="text-gray-300 mt-4">
            Get in touch with us to plan your next unforgettable adventure.
          </p>
          <button className="mt-6 px-8 py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
