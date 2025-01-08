import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Overview = ({ description }) => {
  return (
    <div className="bg-white shadow rounded-md p-6 leading-relaxed">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">📋 Aperçu</h2>
      <div className="text-gray-700 text-justify whitespace-pre-line">
        {typeof description === "object"
          ? documentToReactComponents(description)
          : description}
      </div>
    </div>
  );
};

export default Overview;
