const DestinationHeader = ({ title, days }) => (
    <header className="text-center p-4 bg-white shadow-md">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-indigo-600 font-semibold mt-2">{days} Days</p>
    </header>
  );
  
  export default DestinationHeader;
  