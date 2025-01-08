const IncludesExcludes = ({ includes, excludes }) => {
  // Vérifiez que includes et excludes sont des tableaux
  const validIncludes = Array.isArray(includes) ? includes : [];
  const validExcludes = Array.isArray(excludes) ? excludes : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white shadow rounded-md p-6">
      {/* Includes */}
      <div>
        <h2 className="text-xl font-bold mb-4">✅ Inclus</h2>
        {validIncludes.length > 0 ? (
          <ul className="space-y-3">
            {validIncludes.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-green-600">✔️</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Aucun élément inclus.</p>
        )}
      </div>

      {/* Excludes */}
      <div>
        <h2 className="text-xl font-bold mb-4">❌ Non Inclus</h2>
        {validExcludes.length > 0 ? (
          <ul className="space-y-3">
            {validExcludes.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="text-red-600">✖️</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 italic">Aucun élément exclu.</p>
        )}
      </div>
    </div>
  );
};

export default IncludesExcludes;
