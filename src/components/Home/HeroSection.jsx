import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "https://cdn.pixabay.com/photo/2020/04/11/15/31/baobab-5030877_960_720.jpg",
    "https://cdn.pixabay.com/photo/2019/11/02/21/41/africa-4597496_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/11/01/17/39/maki-4594781_1280.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change toutes les 5 secondes
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-screen bg-cover bg-center overflow-hidden pt-16" // Ajout de padding-top
    >
      {/* Image de fond avec l'effet de recul */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoomOut transition-all duration-500"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-gray-100 px-4">
        <h1 className="text-6xl md:text-8xl font-title mb-4">
          Explore Madagascar’s Hidden Gems
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Your adventure awaits. Discover exclusive destinations and unforgettable experiences.
        </p>
        <a
          href="/tailormadetour"
          className="relative inline-flex items-center bg-orange text-white font-semibold py-4 px-8 rounded-full text-lg hover:bg-orange-600 transition-transform duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          <span className="absolute inset-0 w-full h-full rounded-full animate-pulse bg-orange-400 opacity-50"></span>
          <span className="relative z-10 flex items-center">
            <svg
              className="mr-2"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14M12 5l7 7-7 7z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Start Your Journey
          </span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
