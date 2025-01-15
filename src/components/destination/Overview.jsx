import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Overview = ({ description }) => {
  return (
    <div className="bg-white shadow rounded-md p-6 leading-relaxed">
      <div className="text-gray-700 text-justify whitespace-pre-line">
        {typeof description === "object"
          ? documentToReactComponents(description)
          : description}
      </div>
    </div>
  );
};

export default Overview;
