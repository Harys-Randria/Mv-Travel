import { useEffect, useState } from 'react';
import DestinationCard from '../ui/DestinationCard';

const DestinationList = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    // Fetch data dynamically
    fetch('/destinations.json') // Remplacez par votre endpoint API ou URL Firebase
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error('Error fetching destinations:', error));
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
        {destinations.map((destination, index) => (
          <DestinationCard
            key={index}
            title={destination.title}
            description={destination.description}
            image={destination.image}
            link={destination.link}
          />
        ))}
      </div>

      {/* "See All Offers" Link */}
      <div className="text-center mt-12">
        <a
          href="/destination"
          className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 hover:bg-blue-700"
        >
          See All Offers
        </a>
      </div>
    </section>
  );
};

export default DestinationList;
