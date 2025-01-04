// Itinerary.js
import React from 'react';

const Itinerary = ({ details }) => {
  return (
    <div className="bg-white shadow rounded-md p-6">
      <h2 className="text-2xl font-bold mb-6">🗺️ Itinéraire</h2>
      <div className="space-y-4">
        {details.map((day, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-100 transition"
          >
            <div className="text-blue-600 text-lg font-bold">📅 Jour {index + 1}</div>
            <div>
              <h3 className="font-semibold text-gray-700">{day.title}</h3>
              <p className="text-gray-600">{day.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Itinerary;
