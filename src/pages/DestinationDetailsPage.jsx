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
  const { slug } = useParams(); // ID de la destination
  const [data, setData] = useState(null); // Données de la destination
  const [loading, setLoading] = useState(true); // Indicateur de chargement
  const [error, setError] = useState(false); // Gestion des erreurs
  const [activeTab, setActiveTab] = useState("Overview"); // Onglet actif

  // Fonction pour récupérer les données
  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await client.getEntries({
          content_type: "destinationCard", // Utilisez le type de contenu correspondant
        });

        const generateSlug = (title) =>
          title
            .toLowerCase()
            .replace(/ /g, "-") // Remplace les espaces par des tirets
            .replace(/[^\w-]+/g, ""); // Supprime les caractères spéciaux

        // Trouver la destination correspondant au slug
        const matchingEntry = response.items.find(
          (item) => generateSlug(item.fields.title) === slug
        );

        if (matchingEntry) {
          const formattedData = {
            id: matchingEntry.sys.id,
            title: matchingEntry.fields.title,
            image: matchingEntry.fields.image?.fields?.file?.url || "",
            overview: matchingEntry.fields.overview || "Aucun résumé disponible",
            days: matchingEntry.fields.day || "N/A",
            price: matchingEntry.fields.price || "N/A",
            images: matchingEntry.fields["galleryPhotos"]
              ? matchingEntry.fields["galleryPhotos"].map((img) => img.fields.file.url)
              : [],
            itinerary: matchingEntry.fields.itinerary || [],
            includes: matchingEntry.fields.includes || [],
            excludes: matchingEntry.fields.excludes || [],
            location: matchingEntry.fields.location || {},
          };

          setData(formattedData);
        } else {
          console.error("Aucune destination trouvée pour ce slug");
          setError(true); // Afficher une erreur si aucun résultat
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des détails :", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [slug]);

  // Fonction pour générer le lien du formulaire
  const generateFormLink = (destination) => {
    const baseURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSdgy9MuUhPP2R3_P1ozOjfsJfXsl_M9THpy35z3fPBbCxyQLw/viewform?usp=pp_url";
    const params = new URLSearchParams({
      "entry.109257767": destination, // Champ pour la destination
    });
    return `${baseURL}&${params.toString()}`;
  };

  // Affichage en cours de chargement
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange border-opacity-75"></div>
      </div>
    );
  }

  // Affichage en cas d'erreur
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <p className="text-red-500">Une erreur s'est produite lors du chargement des données.</p>
          <button
            className="mt-4 bg-yellow-400 text-black px-4 py-2 rounded shadow hover:bg-yellow-500 transition"
            onClick={() => window.location.reload()}
          >
            Réessayer
          </button>
        </div>
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
        className="relative min-h-svh flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url('${data.image}')`,
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60"></div>

        {/* Content */}
        <div className="relative px-4 sm:px-6 lg:px-8 text-white space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            {data.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-medium opacity-90">
            {data.days} Days
          </p>
        </div>
      </section>

      {/* Contenu Principal */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation et Contenu des Onglets */}
        <div className="lg:w-2/3 w-full lg:pr-4">
          <div className="sticky top-0 bg-white shadow-md">
            <TabNavigation
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabs={["Overview", "Itinerary", "Includes/Excludes", "Map", "Gallery"]}
            />
          </div>

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
              <IncludesExcludes data={{ includes: data.includes, excludes: data.excludes }} />
            )}
            {activeTab === "Map" && (
              <Map
                location={{
                  latitude: data.location.lat,
                  longitude: data.location.lon,
                  city: "Destination City", // Si une ville est disponible
                }}
              />
            )}
          </motion.div>
        </div>

        {/* Publicité */}
        <div
          className="relative bg-gray-100 w-[280px] h-[400px] max-w-xs p-6 rounded-lg shadow-md bg-cover bg-center flex flex-col justify-between"
          style={{
            backgroundImage: `url(${pub})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
          <div className="relative z-10 flex flex-col h-full">
            <div className="flex-grow flex items-center justify-center text-center">
              <p className="text-white text-2xl font-title">
                Plan your dream trip with us! Explore unforgettable moments.
              </p>
            </div>
            <div className="mt-6 flex justify-center">
              <a
                href={generateFormLink(data.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-6 py-2 rounded shadow hover:bg-yellow-500"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationDetailsPage;
