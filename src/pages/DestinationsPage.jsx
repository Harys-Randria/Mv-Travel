import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FaMapMarkerAlt, FaUmbrellaBeach, FaTree, FaTimes } from "react-icons/fa";
import client from "../contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

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

  // State to manage modal
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState("");

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
          price: item.fields.price,
          poeple: item.fields.people,
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

  const openModal = (destination) => {
    setSelectedDestination(destination);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDestination("");
    setModalOpen(false);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-yellow-500 border-opacity-75"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Discover Madagascar - Explore Destinations</title>
        <meta name="description" content="Explore Madagascar's most stunning destinations. Discover the natural wonders and plan your next adventure." />
        <meta name="keywords" content="Madagascar, travel, destinations, explore, adventure, tourism, tailor made tours" />
        <meta property="og:title" content="Discover Madagascar - Explore Destinations" />
        <meta property="og:description" content="Explore Madagascar's most stunning destinations. Discover the natural wonders and plan your next adventure." />
        <meta property="og:image" content="https://cdn.pixabay.com/photo/2015/03/16/21/57/fossa-676878_960_720.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/destinations" />
        <meta name="twitter:title" content="Discover Madagascar - Explore Destinations" />
        <meta name="twitter:description" content="Explore Madagascar's most stunning destinations. Discover the natural wonders and plan your next adventure." />
        <meta name="twitter:image" content="https://cdn.pixabay.com/photo/2015/03/16/21/57/fossa-676878_960_720.jpg" />
      </Helmet>
      
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
        <section className="py-10 bg-gradient-to-b from-blue-100 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-center text-5xl md:text-6xl font-title text-gray-800 mb-8">
              Discover Your Next Adventure
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cartes générées */}
              {filteredDestinations.map((dest, index) => (
                <motion.div
                  key={dest.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 duration-300 flex flex-col"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <LazyLoadImage
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                      {dest.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                      {typeof dest.description === "object"
                        ? documentToReactComponents(dest.description)
                        : dest.description}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <Link
                        to={dest.link}
                        className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-yellow-600 transition"
                      >
                        Explore <FaMapMarkerAlt />
                      </Link>
                      <button
                        onClick={() => openModal(dest.title)}
                        className="inline-flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-blue-600 transition"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              <motion.div
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition hover:scale-105 duration-300 flex flex-col cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: filteredDestinations.length * 0.1 }}
                onClick={() => (window.location.href = "/tailormadetour")}
              >
                <div
                  className="w-full h-48 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://cdn.pixabay.com/photo/2019/11/02/21/36/africa-4597486_1280.jpg')",
                  }}
                ></div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-3">Tailor Made</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">
                    Can't find what you're looking for? Create your own itinerary!
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 bg-yellow-500 text-gray-900 px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-yellow-600 transition">
                      Create Your Own
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          
          </div>
        </section>


        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-6 relative">
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              >
                <FaTimes size={24} />
              </button>
              <iframe
                src={`https://docs.google.com/forms/d/e/1FAIpQLSdgy9MuUhPP2R3_P1ozOjfsJfXsl_M9THpy35z3fPBbCxyQLw/viewform?usp=pp_url&entry.109257767=${encodeURIComponent(
                  selectedDestination
                )}`}
                title="Booking Form"
                className="w-full h-[500px]"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DestinationsPage;
