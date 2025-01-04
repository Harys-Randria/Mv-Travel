const TabNavigation = ({ activeTab, setActiveTab, tabs }) => (
    <div className="flex justify-center bg-gray-200 mt-4">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`p-4 ${activeTab === tab ? 'border-b-4 border-indigo-600' : ''}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
  
  export default TabNavigation;
  