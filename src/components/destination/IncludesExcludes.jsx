// IncludesExcludes.js
import React from 'react';

const IncludesExcludes = ({ includes, excludes }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow rounded-md p-6">
      {/* Includes */}
      <div>
        <h2 className="text-xl font-bold mb-4">✅ Inclus</h2>
        <ul className="space-y-3">
          {includes.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-green-600">✔️</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Excludes */}
      <div>
        <h2 className="text-xl font-bold mb-4">❌ Non Inclus</h2>
        <ul className="space-y-3">
          {excludes.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-red-600">✖️</span>
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default IncludesExcludes;
