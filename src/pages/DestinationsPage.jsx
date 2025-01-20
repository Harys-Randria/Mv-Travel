import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import client from "../contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";

const regions = {
  North: "bg-blue-500",
  South: "bg-green-500",
  East: "bg-yellow-500",
  West: "bg-red-500",
  Central: "bg-purple-500",
};

const DestinationsPage = () => {
  const [destinations, setDestinations] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await client.getEntries({
          content_type: "destinationCard",
        });

        const formattedData = response.items.map((item) => ({
          id: item.sys.id,
          title: item.fields.title,
          description: item.fields.description,
          image: item.fields.image?.fields?.file?.url || "",
          region: item.fields.region,
          link: `/destinations/${item.sys.id}`,
        }));

        setDestinations(formattedData);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de la récupération des destinations :", error);
        setLoading(false);
      }
    };

    fetchDestinations();
  }, []);

  const filteredDestinations =
    selectedRegion === "All"
      ? destinations
      : destinations.filter((dest) => dest.region === selectedRegion);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-medium text-gray-700 animate-pulse">Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2015/03/16/21/57/fossa-676878_960_720.jpg')",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-t text-white"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            Discover Madagascar
          </motion.h1>
        </motion.div>
      </section>

      {/* Why Visit Madagascar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Visit Madagascar?</h2>
          <p className="text-gray-600 text-lg">
            Madagascar offers stunning landscapes, unique wildlife, and vibrant culture. Whether
            you're an adventurer or a nature lover, this island has something special for you.
          </p>
        </div>
      </section>

      {/* Region Filter Section */}
      <div className="py-8 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Explore by Region</h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          <button
            onClick={() => setSelectedRegion("All")}
            className={`px-4 py-2 rounded-full font-semibold ${
              selectedRegion === "All"
                ? "bg-yellow-500 text-gray-900"
                : "bg-gray-300 text-gray-700 hover:bg-yellow-400"
            }`}
          >
            All
          </button>
          {Object.keys(regions).map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-full font-semibold ${
                selectedRegion === region
                  ? regions[region]
                  : "bg-gray-300 text-gray-700 hover:bg-opacity-80"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 px-6 max-w-7xl mx-auto py-10">
        {filteredDestinations.map((dest, index) => (
          <motion.div
            key={dest.id}
            className="relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden h-64">
              <LazyLoadImage
                src={dest.image}
                alt={dest.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{dest.title}</h3>
              <div className="text-gray-600 text-sm mb-4">
                {typeof dest.description === "object"
                  ? documentToReactComponents(dest.description)
                  : dest.description}
              </div>
              <Link
                to={dest.link}
                className="inline-block bg-yellow-500 text-gray-900 px-6 py-2 rounded-full text-lg shadow hover:bg-yellow-600"
              >
                Explore
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Travel Tips */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Travel Tips</h2>
          <ul className="text-gray-600 text-lg space-y-3">
            <li>✅ Pack light, breathable clothing for the tropical climate.</li>
            <li>✅ Don’t forget your sunscreen and insect repellent.</li>
            <li>✅ Learn a few Malagasy phrases to connect with locals.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
