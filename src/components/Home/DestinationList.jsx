import { useEffect, useState } from 'react';
import DestinationCard from '../ui/DestinationCard';
import client from "../../contentfulClient";

const DestinationList = () => {

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await client.getEntries({
          content_type: "voyageDestinationCard",
        });
  
        // Map pour inclure les IDs système
        const formattedData = response.items.map((item) => ({
          id: item.sys.id, // Utilise l'ID système généré par Contentful
          title: item.fields.title,
          description: item.fields.description,
          image: item.fields.image?.fields?.file?.url || "",
          region: item.fields.region,
          price: item.fields.price,
          link: `/destinations/${item.sys.id}`, // Génère le lien avec l'ID système
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
    <section className="bg-gray-50 py-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Destinations</h1>
        <p className="text-lg md:text-xl mt-4 text-gray-600">
          Discover extraordinary places across Madagascar.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-5">
      {destinations.map((destination) => {
        console.log(destination); // Vérifier les données de chaque destination
        return (
          <DestinationCard
            key={destination.id}
            title={destination.title}
            description={destination.description}
            image={destination.image}
            link={destination.link}
          />
        );
      })}
      </div>

      {/* "See All Offers" Link */}
      <div className="text-center mt-12">
        <a
          href="/destinations"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700"
        >
          See All Offers
        </a>
      </div>
    </section>
  );
};

export default DestinationList;
