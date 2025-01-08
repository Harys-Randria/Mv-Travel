const Itinerary = ({ details }) => {
  return (
    <div className="bg-white shadow rounded-md p-6">
      <h2 className="text-2xl font-bold mb-6">🗺️ Itinéraire</h2>
      <div className="space-y-8">
        {details.map((day, index) => (
          <div
            key={`${day.title}-${index}`}
            className="flex items-start space-x-4 relative border-l-2 border-blue-500 pl-6"
          >
            <div className="absolute -left-3 top-0 bg-blue-500 w-6 h-6 rounded-full"></div>
            <div>
              <h3 className="font-semibold text-lg">{day.title}</h3>
              <p className="text-gray-600">{day.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
