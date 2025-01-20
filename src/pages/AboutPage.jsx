const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center"
      >
        <h1 className="text-7xl font-title text-white tracking-wide shadow-lg">
          About Our Company
        </h1>
      </section>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-title text-gray-800 text-center">
          Who We Are
        </h2>
        <p className="mt-8 text-lg text-gray-600 leading-relaxed text-justify max-w-3xl mx-auto space-y-6">
          At Madaweaver, we believe every journey begins with a dream, and we’re here to make yours a reality.
          <br />
          Founded with a passion for exploration and a commitment to exceptional service, we specialize in crafting unforgettable travel experiences tailored to your desires.
          <br />
          Whether you’re seeking a relaxing beach escape, an adventurous trek through nature, or an immersive cultural tour, our team of dedicated travel experts ensures every detail is handled with care.
          <br />
          <span className="font-semibold text-gray-800">Dream. Explore. Discover.</span>
        </p>
      </div>

      {/* Mission, Vision & Values */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: "🌍",
              title: "Our Mission",
              description: "To create unforgettable travel experiences...",
            },
            {
              icon: "🚀",
              title: "Our Vision",
              description: "To become the most trusted travel partner...",
            },
            {
              icon: "🌱",
              title: "Our Values",
              description: (
                <ul className="list-disc list-inside space-y-2">
                  <li>Integrity and Transparency</li>
                  <li>Passion for Adventure</li>
                  <li>Commitment to Sustainability</li>
                </ul>
              ),
            },
          ].map(({ icon, title, description }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl">{icon}</div>
              <h3 className="mt-4 text-2xl font-bold text-yellow-500">{title}</h3>
              <p className="mt-6 text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-title text-gray-800 text-center">
          Why Travel With Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {[
            {
              img: "https://cdn.pixabay.com/photo/2017/09/09/18/39/lizard-2732989_1280.jpg",
              title: "Expert Guidance",
              description:
                "Our team of seasoned travel experts ensures every detail of your trip is perfect.",
            },
            {
              img: "https://cdn.pixabay.com/photo/2019/07/27/11/04/monkey-4366505_1280.jpg",
              title: "Personalized Journeys",
              description:
                "We design trips tailored to your preferences and interests.",
            },
            {
              img: "https://cdn.pixabay.com/photo/2015/11/24/19/10/animals-1060604_1280.jpg",
              title: "Sustainable Tourism",
              description:
                "We promote eco-friendly practices to preserve destinations for future generations.",
            },
          ].map(({ img, title, description }) => (
            <div
              key={title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
            >
              <img
                src={img}
                alt={title}
                className="w-full h-40 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-yellow-500">{title}</h3>
                <p className="mt-4 text-gray-600">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-7xl font-title text-white">
            Start Your Journey With Us Today
          </h2>
          <p className="text-gray-200 mt-4">
            Get in touch with us to plan your next unforgettable adventure.
          </p>
          <button className="mt-8 px-8 py-4 bg-white text-yellow-700 font-semibold rounded-lg hover:bg-gray-100 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
