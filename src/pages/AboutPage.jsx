import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

const AboutPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const response = await fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("Oops! Something went wrong.");
    }
  };

  return (
    <>
      <Helmet>
        <title>About Us - MadaWeaver</title>
        <meta
          name="description"
          content="Discover our story, meet your guide, and explore our mission and partners at MadaWeaver."
        />
        <meta
          name="keywords"
          content="MadaWeaver, travel agency, Madagascar, tour guide, tourism consultant, sustainable travel"
        />
        <meta property="og:title" content="About Us - MadaWeaver" />
        <meta
          property="og:description"
          content="Discover our story, meet your guide, and explore our mission and partners at MadaWeaver."
        />
        <meta
          property="og:image"
          content="https://cdn.pixabay.com/photo/2022/12/30/14/42/cottages-7687138_1280.jpg"
        />
        <meta property="og:url" content="https://madaweavertour.netlify.app/about" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content="MadaWeaver" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - MadaWeaver" />
        <meta
          name="twitter:description"
          content="Learn more about MadaWeaver and our mission to craft unforgettable Madagascar adventures."
        />
        <meta
          name="twitter:image"
          content="https://cdn.pixabay.com/photo/2022/12/30/14/42/cottages-7687138_1280.jpg"
        />
        <meta name="twitter:site" content="@MadaWeaver" />
        <meta name="twitter:creator" content="@MadaWeaver" />
        <link rel="canonical" href="https://madaweavertour.netlify.app/about" />
      </Helmet>

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
              About MadaWeaver
            </h1>
          </div>
        </section>

        {/* Our Story */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-title text-center text-gray-800 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto">
            MadaWeaver was born from a passion for Madagascar’s unmatched beauty and a vision to share it with the world.
            We specialize in crafting personalized travel experiences that go beyond the ordinary.
          </p>
        </section>

        {/* Meet Your Guide */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://cdn.pixabay.com/photo/2020/04/26/16/39/madagascar-5096080_1280.jpg"
              alt="Your Guide"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-title text-gray-800 mb-4">Meet Your Guide</h2>
              <p className="text-lg text-gray-600">
                Hi! I'm Tojo, your personal guide and travel consultant. I’ve spent years exploring the hidden gems of Madagascar.
                My goal is to help you experience the island like a true local—with authenticity, safety, and passion.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-title text-gray-800 mb-12">Our Mission & Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Mission", desc: "To offer meaningful, responsible and authentic travel experiences in Madagascar." },
                { title: "Vision", desc: "To inspire exploration and protect the treasures of our island." },
                { title: "Values", desc: "Authenticity, Passion, Respect for Nature." },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-yellow-500 mb-2">{title}</h3>
                  <p className="text-gray-700">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 max-w-7xl mx-auto">
          <h2 className="text-4xl font-title text-center text-gray-800 mb-10">Why Travel With Us?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                img: "https://cdn.pixabay.com/photo/2017/09/09/18/39/lizard-2732989_1280.jpg",
                title: "Expert Guidance",
                description: "Led by a seasoned local, every journey is planned with insight and care.",
              },
              {
                img: "https://cdn.pixabay.com/photo/2019/07/27/11/04/monkey-4366505_1280.jpg",
                title: "Tailored Experiences",
                description: "Every trip is designed around your interests, pace, and travel style.",
              },
              {
                img: "https://cdn.pixabay.com/photo/2015/11/24/19/10/animals-1060604_1280.jpg",
                title: "Eco-Friendly Travel",
                description: "We work to preserve Madagascar’s biodiversity through responsible tourism.",
              },
            ].map(({ img, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-2"
              >
                <img src={img} alt={title} className="w-full h-40 object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-yellow-500">{title}</h3>
                  <p className="mt-4 text-gray-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-title text-gray-800 mb-8">Our Partners</h2>
            <p className="text-lg text-gray-600 mb-6">
              We proudly collaborate with trusted local businesses and organizations to enhance your travel experience.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              {["Hotel Baobab", "Eco Tour Co.", "Wildlife Alliance"].map((partner) => (
                <div
                  key={partner}
                  className="px-6 py-3 bg-yellow-100 text-yellow-800 font-semibold rounded-full shadow"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact & Localisation */}
        <section className="bg-gray-100 py-16 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-title text-gray-800 mb-6">Contact & Location</h2>
              <ul className="space-y-4 text-gray-700 text-lg">
                <li>
                  <strong>📍 Address:</strong> Lot III P 3 A Marohoho, Antananarivo 101, Madagascar
                </li>
                <li>
                  <strong>📞 Phone:</strong> +261 34 76 515 64
                </li>
                <li>
                  <strong>✉️ Email:</strong>{" "}
                  <a
                    href="mailto:contact@madaweaver.com"
                    className="text-yellow-600 hover:underline"
                  >
                    contact@madaweaver.com
                  </a>
                </li>
                <li className="flex gap-4 items-center">
                  <strong>🔗 Follow us:</strong>
                  <a href="https://facebook.com/madaweaver" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">Facebook</a>
                  <a href="https://instagram.com/madaweaver" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">Instagram</a>
                  <a href="https://twitter.com/madaweaver" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600">Twitter</a>
                </li>
              </ul>
            </div>
            <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 0 }}
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCqzBLbv56olNyhF7Lo9ZPEKTvY91x_82A&q=-18.8997494,47.5826072&zoom=15"
                allowFullScreen
                title="MadaWeaver Location"
              ></iframe>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div
          className="bg-cover bg-center py-16"
          style={{
            backgroundImage:
              "url('https://cdn.pixabay.com/photo/2016/03/03/09/21/travel-1233762_960_720.jpg')",
          }}
        >
          <div className="bg-black bg-opacity-50 py-16 px-6 text-center text-white max-w-7xl mx-auto rounded-lg shadow-lg">
            <h2 className="text-6xl font-title">Start Your Journey With Us Today</h2>
            <p className="text-lg mt-4">
              Get in touch with us to plan your next unforgettable adventure.
            </p>
            <button
              onClick={() => setIsOpen(true)}
              className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
            >
              Contact Us
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.div
                    className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                  >
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
                    >
                      ✖
                    </button>
                    {submitted ? (
                      <p className="text-green-600 text-gray-950 font-title text-center">✅ Message sent successfully!</p>
                    ) : (
                      <form
                        action="https://formspree.io/f/xjkgpedn"
                        method="POST"
                        onSubmit={handleSubmit}
                        className="space-y-4"
                      >
                        <h2 className="text-xl font-semibold mb-4 text-center">Contact Us</h2>
                        <div>
                          <label className="block font-medium text-gray-700">Your Email</label>
                          <input
                            type="email"
                            name="email"
                            required
                            className="w-full p-2 border text-gray-950 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          />
                        </div>
                        <div>
                          <label className="block font-medium text-gray-700">Your Message</label>
                          <textarea
                            name="message"
                            required
                            className="w-full p-2 border text-gray-950 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition"
                        >
                          Send
                        </button>
                      </form>
                    )}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
