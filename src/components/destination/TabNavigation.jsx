import { motion } from "framer-motion";

const TabNavigation = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="relative bg-gray-100 border-b border-gray-300">
      <div className="flex overflow-x-auto no-scrollbar justify-center sm:justify-start">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-3 text-sm md:text-base font-medium focus:outline-none whitespace-nowrap ${
              activeTab === tab
                ? "text-genericBlue"
                : "text-gray-400 hover:text-genericBlue"
            }`}
          >
            {tab}
            {/* Animation indicator */}
            {activeTab === tab && (
              <motion.div
                className="absolute left-0 right-0 bottom-0 h-[2px] bg-genericBlue"
                layoutId="underline"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TabNavigation;
