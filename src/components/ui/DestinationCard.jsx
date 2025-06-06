import { FaUserFriends } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const DestinationCard = ({ title, description, image, link, price, currency = "€", people, days }) => {
  return (
    <div className="w-96 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white mx-auto">
      {/* Image Wrapper */}
      <div className="relative group">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Price on Image */}
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-20 text-white font-bold text-lg px-4 py-2">
          {price} {currency}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[calc(100%-16rem)]">
        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">{title}</h3>
        {/* Description */}
        <div className="text-sm md:text-base text-gray-600 mt-2 line-clamp-3">
          {description}
        </div>
        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          {/* People & Days */}
          <div className="flex flex-col text-gray-500 space-x-4  items-start">
            <div className="flex items-center">
              <FaUserFriends className="mr-1 text-blue-500" />
              <span className="text-sm md:text-base">{people} persons</span>
            </div>
            <div className="flex items-center">
              <FaRegClock className="mr-1 text-blue-500" />
              <span className="text-sm md:text-base">{days} days</span>
            </div>
          </div>
          {/* Button */}
          <a
            href={link}
            rel="noopener noreferrer"
            className="bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-full transition-transform duration-300 transform hover:scale-105 hover:bg-yellow-600"
          >
            Explorer
          </a>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
