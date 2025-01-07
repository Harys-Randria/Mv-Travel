import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 text-center px-6">
      {/* 404 Error */}
      <h1 className="text-6xl sm:text-8xl font-bold text-blue-600 mb-4 animate-bounce">
        404
      </h1>
      <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold text-gray-800 mb-6">
        Oops! This page doesn t exist.
      </h2>
      <p className="text-sm sm:text-lg text-gray-600 mb-8">
        It seems you ve lost your way. Don t worry, let s get you back on track.
      </p>

      {/* Illustration */}
      <img
        src="/assets/not-found.svg" // Replace with your illustration path
        alt="404 Illustration"
        className="w-64 sm:w-80 md:w-96 mb-8"
      />

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          to="/"
          className="px-6 py-3 bg-blue-600 text-white text-sm sm:text-base rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Back Home
        </Link>
        <Link
          to="/contactus"
          className="px-6 py-3 bg-gray-200 text-gray-800 text-sm sm:text-base rounded-lg shadow hover:bg-gray-300 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
