import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import DestinationHeader from '../components/destination/DestinationHeader';
import ImageCarousel from '../components/destination/ImageCarousel';
import TabNavigation from '../components/destination/TabNavigation';
import Overview from '../components/destination/Overview';
import Itinerary from '../components/destination/Itinerary';
import IncludesExcludes from '../components/destination/IncludesExcludes';
import Map from '../components/destination/Map';

const DestinationDetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('Overview');

  useEffect(() => {
    fetch('/destinations.json')
      .then((response) => response.json())
      .then((destinations) => {
        const selectedDestination = destinations.find(
          (destination) => destination.id === parseInt(id)
        );
        setData(selectedDestination);
      })
      .catch((error) =>
        console.error('Error loading destination details:', error)
      );
  }, [id]);

  if (!data) {
    return (
      <div className="p-10 max-w-7xl mx-auto">
        <div className="animate-pulse">
          <div className="h-12 bg-gray-300 rounded-md mb-4"></div>
          <div className="h-64 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      // className="min-h-screen pt-16" // Ajout du padding-top pour la Navbar
    >
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2020/01/30/20/34/madagascar-4806491_960_720.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400">{data.title}</h1>
        </div>
      </section>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <DestinationHeader title={data.title} days={data.days} />
      </div>

      {/* Carousel Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ImageCarousel images={data.images} />
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-0 bg-white shadow-md z-50">
        <TabNavigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={['Overview', 'Itinerary', 'Includes/Excludes', 'Map']}
        />
      </div>

      {/* Tab Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'Overview' && <Overview description={data.overview} />}
        {activeTab === 'Itinerary' && <Itinerary details={data.itinerary} />}
        {activeTab === 'Includes/Excludes' && (
          <IncludesExcludes
            includes={data.includes}
            excludes={data.excludes}
          />
        )}
        {activeTab === 'Map' && <Map location={data.location} />}
      </motion.div>
    </motion.div>
  );
};

export default DestinationDetailsPage;
