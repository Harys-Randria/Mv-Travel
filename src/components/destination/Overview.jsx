const Overview = ({ description }) => {
  return (
    <div className="bg-white shadow rounded-md p-6 leading-relaxed">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">📋 Aperçu</h2>
      <p className="text-gray-700 text-justify whitespace-pre-line">
        {description}
      </p>
    </div>
  );
};

export default Overview;
