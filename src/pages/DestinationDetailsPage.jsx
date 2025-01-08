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
          overview: response.fields.overview || "Aucun résumé disponible",days: response.fields.days || "N/A",
          images: response.fields["galleryPhotos"]
          ? response.fields["galleryPhotos"].map((img) => img.fields.file.url) // Récupération des URLs
          : [],
          itinerary: response.fields.itinerary || [],
          includes: response.fields.includes || [],
          excludes: response.fields.excludes || [],
          location: response.fields.location || {},
        };
        console.log("Response from Contentful:", response.fields["galleryPhotos"]);
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
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('${data.image}')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400">
          {data.title} / {data.days} DAYS
        </h1>
      </section>

      {/* Tabs */}
      <div className="sticky top-0 bg-white shadow-md z-50">
        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={["Overview", "Itinerary", "Includes/Excludes", "Map", "Gallery"]}
        />
      </div>

      {/* Tab Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
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
    </motion.div>
  );
};

export default DestinationDetailsPage;
