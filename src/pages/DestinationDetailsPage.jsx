import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import client from "../contentfulClient";
import TabNavigation from "../components/destination/TabNavigation";
import Overview from "../components/destination/Overview";
import Itinerary from "../components/destination/Itinerary";
import IncludesExcludes from "../components/destination/IncludesExcludes";
import Map from "../components/destination/Map";
import GaleriePhoto from "../components/destination/GaleriePhoto";
import pub from "../assets/pub.jpg";

const DestinationDetailsPage = () => {
  const { id } = useParams(); // Récupération de l'ID via l'URL
  const [data, setData] = useState(null); // Stocker les données récupérées
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [activeTab, setActiveTab] = useState("Overview"); // Onglet actif

  // Fonction pour récupérer les données
  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await client.getEntry(id); // Utilise l'ID récupéré depuis l'URL
        const formattedData = {
          id: response.sys.id,
          title: response.fields.title,
          image: response.fields.image?.fields?.file?.url || "",
          overview: response.fields.overview || "Aucun résumé disponible",
          days: response.fields.days || "N/A",
          images: response.fields["galleryPhotos"]
            ? response.fields["galleryPhotos"].map((img) => img.fields.file.url)
            : [],
          itinerary: response.fields.itinerary || [],
          includes: response.fields.includes || [],
          excludes: response.fields.excludes || [],
          location: response.fields.location || {},
        };
        setData(formattedData);
      } catch (error) {
        console.error("Erreur lors de la récupération des détails :", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [id]);

  // Affichage pendant le chargement
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500">Chargement des données...</p>
      </div>
    );
  }

  // Affichage en cas d'absence de données
  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-center">
          Aucune donnée trouvée pour cette destination. <br />
          Vérifiez l'ID ou réessayez plus tard.
        </p>
      </div>
    );
  }

  // Affichage principal
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section
        className="relative min-h-[66vh] bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('${data.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400">
          {data.title} / {data.days} DAYS
        </h1>
      </section>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tabs and Tab Content */}
        <div className="lg:w-2/3 w-full lg:pr-4">
          {/* Tabs */}
          <div className="sticky top-0 bg-white shadow-md">
            <TabNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={["Overview", "Itinerary", "Includes/Excludes", "Map", "Gallery"]}
            />
          </div>

          {/* Tab Content */}
          <motion.div
            className="py-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "Overview" && <Overview description={data.overview} />}
            {activeTab === "Gallery" && <GaleriePhoto images={data.images} />}
            {activeTab === "Itinerary" && <Itinerary details={data.itinerary} />}
            {activeTab === "Includes/Excludes" && (
              <IncludesExcludes
                includes={data.includes}
                excludes={data.excludes}
              />
            )}
            {activeTab === "Map" && (
              <Map
                location={{
                  latitude: data.location.lat,
                  longitude: data.location.lon,
                  city: "Paris", // Si vous avez une ville ou un autre détail
                }}
              />
            )}
          </motion.div>
        </div>

       {/* Publicité */}
        <div
          className="relative bg-gray-100 w-[280px] h-[400px] max-w-xs p-6 rounded-lg shadow-md bg-cover bg-center flex flex-col justify-between"
          style={{
            backgroundImage: `url(${pub})`, // Chemin vers votre image
          }}
        >
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

          {/* Contenu publicitaire */}
          <div className="relative z-10 flex flex-col h-full">
            {/* Icônes de réseaux sociaux (en haut) */}
            <div className="flex justify-center space-x-4 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform duration-200">
                <i className="fab fa-facebook text-white text-2xl hover:text-blue-500"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform duration-200">
                <i className="fab fa-instagram text-white text-2xl hover:text-pink-500"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition transform duration-200">
                <i className="fab fa-linkedin text-white text-2xl hover:text-blue-700"></i>
              </a>
              <a href="mailto:info@example.com" className="hover:scale-110 transition transform duration-200">
                <i className="fas fa-envelope text-white text-2xl hover:text-red-500"></i>
              </a>
            </div>

            {/* Texte attractif (au milieu) */}
            <div className="flex-grow flex items-center justify-center text-center">
              <p className="text-white text-2xl font-title leading-relaxed">
                Plan your dream trip with us! <br /> Explore, experience, and enjoy unforgettable moments.
              </p>
            </div>

            {/* Bouton Book Now (en bas, centré) */}
            <div className="mt-6 flex justify-center">
              <button className="bg-yellow-400 text-black text-base font-bold py-2 px-6 rounded-lg shadow hover:bg-yellow-500 transition duration-300">
                Book Now
              </button>
            </div>
          </div>
        </div>


      </div>
    </motion.div>
  );
};

export default DestinationDetailsPage;
