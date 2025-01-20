const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2016/05/10/12/21/animal-1383616_1280.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <h1 className="relative text-5xl font-title text-white tracking-wide">
          About Our Company
        </h1>
      </section>

      {/* Introduction Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-title text-gray-800 text-center">
          Who We Are
        </h2>
        <p className="mt-8 text-lg text-gray-600 leading-relaxed text-justify">
          At Madaweaver, we believe every journey begins with a dream, and we’re here to make yours a reality. Founded with a passion for exploration and a commitment to exceptional service, we specialize in crafting unforgettable travel experiences tailored to your desires.
          <br />
          Whether you’re seeking a relaxing beach escape, an adventurous trek through nature, or an immersive cultural tour, our team of dedicated travel experts ensures every detail is handled with care. From personalized itineraries to seamless bookings, we go above and beyond to turn your travel ideas into extraordinary adventures.
          <br />
          Our mission is to inspire wanderlust and create memories that last a lifetime. With a network of trusted partners around the globe, we bring you exclusive access to unique destinations, outstanding accommodations, and curated experiences that you won’t find anywhere else.
          <br />
          At MADAWEAVER TOUR, your journey is our passion. Let us take you places you’ve only imagined.
          <br />
          Dream. Explore. Discover.
        </p>
      </div>

      {/* Mission, Vision & Values */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Our Mission",
              description:
                "To create unforgettable travel experiences that inspire individuals to explore the beauty of the world.",
            },
            {
              title: "Our Vision",
              description:
                "To become the most trusted travel partner globally, known for personalized experiences and sustainable tourism practices.",
            },
            {
              title: "Our Values",
              description: (
                <ul className="list-disc list-inside space-y-2">
                  <li>Integrity and Transparency</li>
                  <li>Passion for Adventure</li>
                  <li>Commitment to Sustainability</li>
                </ul>
              ),
            },
          ].map(({ title, description }) => (
            <div
              key={title}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-bold text-yellow-500">{title}</h3>
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
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
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
      <div className="bg-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white">
            Start Your Journey With Us Today
          </h2>
          <p className="text-gray-300 mt-4">
            Get in touch with us to plan your next unforgettable adventure.
          </p>
          <button className="mt-8 px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
