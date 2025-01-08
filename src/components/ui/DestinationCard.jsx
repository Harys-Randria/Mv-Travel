import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const DestinationCard = ({ title, description, image, link }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6 bg-white">
        <h3 className="text-gray-900 text-xl font-semibold mb-2">{title}</h3>
        <div className="text-gray-600 mb-4 text-sm">
          {documentToReactComponents(description)}  {/* Pour gérer le Rich Text */}
        </div>
        <a
          href={link}
          className="inline-block bg-yellow-500 text-gray-900 font-semibold py-2 px-4 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-600"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default DestinationCard;
