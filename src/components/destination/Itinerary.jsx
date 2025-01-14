import React, { useState } from "react";

const Itinerary = ({ details }) => {
  const [openIndexes, setOpenIndexes] = useState([]); // Suivi des items ouverts

  const toggleDescription = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index) // Fermer si déjà ouvert
        : [...prev, index] // Ouvrir si fermé
    );
  };

  const toggleAll = () => {
    if (openIndexes.length === details.length) {
      // Tout est ouvert, on ferme tout
      setOpenIndexes([]);
    } else {
      // Tout est fermé, on ouvre tout
      setOpenIndexes(details.map((_, index) => index));
    }
  };

  return (
    <div className="bg-white shadow rounded-md p-6">
      {/* Bouton pour ouvrir/fermer tout */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleAll}
          className={`px-4 py-2 rounded transition ${
            openIndexes.length === details.length
              ? "bg-red-500 hover:bg-red-600 text-white"
              : "bg-orange hover:bg-yellow-500 text-white"
          }`}
        >
          {openIndexes.length === details.length ? "Close All" : "Open All"}
        </button>
      </div>

      {/* Liste des journées */}
      <div className="space-y-8">
        {details.map((day, index) => (
          <div
            key={`${day.title}-${index}`}
            className={`flex flex-col space-y-2 border-l-2 pl-6 relative ${
              openIndexes.includes(index) ? "border-orange" : "border-blue-500"
            }`}
          >
            {/* Point dynamique */}
            <div
              className={`absolute -left-3 top-0 w-6 h-6 rounded-full transition ${
                openIndexes.includes(index) ? "bg-orange" : "bg-blue-500"
              }`}
            ></div>

            {/* Titre cliquable */}
            <h3
              className="font-semibold text-lg cursor-pointer text-gray-800 transition"
              onClick={() => toggleDescription(index)}
            >
              {day.title}
            </h3>

            {/* Description (affichée seulement si ouverte) */}
            {openIndexes.includes(index) && (
              <p className="text-gray-600">{day.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
