import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DestinationCard from "../ui/DestinationCard";
import client from "../../contentfulClient";

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  const generateSlug = (title) =>
    title
      .toLowerCase()
      .replace(/ /g, "-") // Replace spaces with hyphens
      .replace(/[^\w-]+/g, ""); // Remove special characters
      
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
          people: item.fields.people,
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

  return (
    <section className="bg-gray-50 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-6xl md:text-8xl font-bold font-title text-gray-900">
          Our Destinations
        </h1>
        <p className="text-lg md:text-xl mt-4 text-gray-600">
          Discover extraordinary places across Madagascar.
        </p>
      </motion.div>

      {/* Loader */}
      {loading && (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange border-opacity-75"></div>
        </div>
      )}

      {/* Destination Grid */}
      {!loading && (
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-5"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              className="flex"
            >
              <DestinationCard
                title={destination.title}
                description={destination.description}
                image={destination.image}
                link={destination.link}
                price={destination.price}
                people={destination.people}
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <a
          href="/destinations"
          className="inline-block bg-orange text-black font-semibold py-3 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-500"
        >
          See All Offers
        </a>
      </motion.div>
    </section>
  );
};

export default DestinationList;
