const AboutPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2022/12/30/14/42/cottages-7687138_1280.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-6xl font-title text-white tracking-wide shadow-lg">
            About Our Company
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <div className="relative max-w-7xl mx-auto px-6 py-16 bg-white shadow-md rounded-lg">
        <div className="absolute top-0 left-0 h-full w-1 bg-yellow-400"></div>
        <h2 className="text-4xl font-title text-gray-800 text-center">
          Who We Are
        </h2>
        <div className="mt-8 flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-12">
          <img
            src="https://cdn.pixabay.com/photo/2020/04/26/16/39/madagascar-5096080_1280.jpg"
            alt="About Us"
            className="w-full lg:w-1/2 rounded-lg shadow-lg"
          />
          <p className="text-lg text-gray-600 leading-relaxed lg:w-1/2 space-y-6">
            At Madaweaver, we believe every journey begins with a dream, and we’re here to make yours a reality.
            <br />
            Founded with a passion for exploration and a commitment to exceptional service, we specialize in crafting unforgettable travel experiences tailored to your desires.
            <br />
            Whether you’re seeking a relaxing beach escape, an adventurous trek through nature, or an immersive cultural tour, our team of dedicated travel experts ensures every detail is handled with care.
            <br />
            <span className="font-semibold text-gray-800">Dream. Explore. Discover.</span>
          </p>
        </div>
      </div>

      {/* Mission, Vision & Values */}
      <div className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              img: "https://cdn.pixabay.com/photo/2016/08/14/13/43/gorges-du-verdon-1592934_960_720.jpg",
              title: "Our Mission",
              description: "To create unforgettable travel experiences...",
            },
            {
              img: "https://cdn.pixabay.com/photo/2017/09/26/20/48/trust-2790009_960_720.jpg",
              title: "Our Vision",
              description: "To become the most trusted travel partner...",
            },
            {
              img: "https://cdn.pixabay.com/photo/2020/02/19/09/53/palm-trees-4861828_1280.jpg",
              title: "Our Values",
              description: "Integrity, Passion, and Sustainability.",
            },
          ].map(({ img, title, description }) => (
            <div
              key={title}
              className="bg-cover bg-center rounded-lg shadow-md p-8 text-white flex flex-col justify-end h-64"
              style={{ backgroundImage: `url(${img})` }}
            >
              <h3 className="text-2xl font-bold">{title}</h3>
              <p className="mt-4">{description}</p>
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
      <div
        className="bg-cover bg-center py-16"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2016/03/03/09/21/travel-1233762_960_720.jpg')",
        }}
      >
        <div className="bg-black bg-opacity-50 py-16 px-6 text-center text-white max-w-7xl mx-auto rounded-lg shadow-lg">
          <h2 className="text-6xl font-title">
            Start Your Journey With Us Today
          </h2>
          <p className="text-lg mt-4">
            Get in touch with us to plan your next unforgettable adventure.
          </p>
          <a
            href="mailto:harysmialy99@gmail.com?subject=Inquiry%20from%20Website&body=Hello,%20I%20would%20like%20to%20know%20more%20about%20your%20services."
            className="mt-8 inline-block px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
