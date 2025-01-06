import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import DestinationHeader from "../components/destination/DestinationHeader";
import ImageCarousel from "../components/destination/ImageCarousel";
import TabNavigation from "../components/destination/TabNavigation";
import Overview from "../components/destination/Overview";
import Itinerary from "../components/destination/Itinerary";
import IncludesExcludes from "../components/destination/IncludesExcludes";
import Map from "../components/destination/Map";
import GaleriePhoto from "../components/destination/GaleriePhoto";

const DestinationDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState("Overview");

  useEffect(() => {
    fetch("/destinations.json")
      .then((response) => response.json())
      .then((destinations) => {
        const selectedDestination = destinations.find(
          (destination) => destination.id === parseInt(id)
        );
        setData(selectedDestination);
      })
      .catch((error) =>
        console.error("Error loading destination details:", error)
      );
  }, [id]);

  if (!data) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-pulse text-center">
          <div className="h-12 w-1/2 bg-gray-300 rounded-md mb-4 mx-auto"></div>
          <div className="h-64 w-full bg-gray-300 rounded-md"></div>
        </div>
      </div>
    );
  }

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
          {data.title}
        </h1>
      </section>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <DestinationHeader title={data.title} days={data.days} />
      </div>

      {/* Carousel */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ImageCarousel images={data.images} />
      </div>

      {/* Tabs */}
      <div className="sticky top-0 bg-white shadow-md z-50">
        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={["Overview", "Gallery", "Itinerary", "Includes/Excludes", "Map"]}
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
        {activeTab === "Map" && <Map location={data.location} />}
      </motion.div>
    </motion.div>
  );
};

export default DestinationDetailsPage;
