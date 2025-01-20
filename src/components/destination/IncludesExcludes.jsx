import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const IncludesExcludes = ({ data = {} }) => {
  const validIncludes = Array.isArray(data?.includes?.includes) ? data.includes.includes : [];
  const validExcludes = Array.isArray(data?.excludes?.excludes) ? data.excludes.excludes : [];

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
      {/* Includes Section */}
      <div>
        <h2 className="text-2xl font-bold text-green-600 mb-4">What’s Included</h2>
        {validIncludes.length > 0 ? (
          <ul className="space-y-3">
            {validIncludes.map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <FaCheckCircle className="text-green-500 text-lg" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No inclusions available for this trip.</p>
        )}
      </div>

      {/* Excludes Section */}
      <div>
        <h2 className="text-2xl font-bold text-red-600 mb-4">What’s Not Included</h2>
        {validExcludes.length > 0 ? (
          <ul className="space-y-3">
            {validExcludes.map((item, index) => (
              <li key={index} className="flex items-center space-x-3">
                <FaTimesCircle className="text-red-500 text-lg" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No exclusions available for this trip.</p>
        )}
      </div>
    </div>
  );
};

export default IncludesExcludes;
