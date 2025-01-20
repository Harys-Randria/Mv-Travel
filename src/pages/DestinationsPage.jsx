import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaMapMarkerAlt, FaUmbrellaBeach, FaTree } from "react-icons/fa";
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

// Generate slug function
const generateSlug = (title) =>
  title
    .toLowerCase()
    .replace(/ /g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, ""); // Remove special characters

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
          link: `/destinations/${generateSlug(item.fields.title)}`,
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
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-yellow-500 border-opacity-75"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
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
            className="text-5xl md:text-7xl font-bold text-white"
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
          <motion.h2
            className="text-5xl md:text-6xl font-title text-gray-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Visit Madagascar?
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg md:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Madagascar offers stunning landscapes, unique wildlife, and vibrant culture. Whether
            you're an adventurer or a nature lover, this island has something special for you.
          </motion.p>
        </div>
      </section>

      {/* Region Filter Section */}
      <section className="py-8 text-center">
        <h2 className="text-5xl md:text-6xl font-title text-gray-800 mb-6">Explore by Region</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setSelectedRegion("All")}
            className={`px-6 py-3 rounded-full font-semibold shadow-md transition ${
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
              className={`px-6 py-3 rounded-full font-semibold shadow-md transition ${
                selectedRegion === region
                  ? `${regions[region]} text-white`
                  : "bg-gray-300 text-gray-700 hover:bg-opacity-80"
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
          {filteredDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <LazyLoadImage
                src={dest.image}
                alt={dest.title}
                className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{dest.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {typeof dest.description === "object"
                    ? documentToReactComponents(dest.description)
                    : dest.description}
                </p>
                <Link
                  to={dest.link}
                  className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-6 py-2 rounded-full text-lg shadow hover:bg-yellow-600 transition"
                >
                  Explore <FaMapMarkerAlt />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-title text-gray-800 mb-6">Travel Tips</h2>
          <ul className="text-gray-600 text-lg space-y-4">
            <li className="flex items-center gap-3 justify-center">
              <FaUmbrellaBeach className="text-yellow-500" />
              Pack light, breathable clothing for the tropical climate.
            </li>
            <li className="flex items-center gap-3 justify-center">
              <FaTree className="text-green-500" />
              Don’t forget your sunscreen and insect repellent.
            </li>
            <li className="flex items-center gap-3 justify-center">
              <FaMapMarkerAlt className="text-red-500" />
              Learn a few Malagasy phrases to connect with locals.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
