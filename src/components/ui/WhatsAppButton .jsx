import React from "react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/0347651564" // Remplacez ce numéro par le vôtre, avec l'indicatif international
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center bg-green text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 animate-pulse"
      style={{ zIndex: 999 }}
    >
      <svg
        className="w-7 h-7 sm:w-8 sm:h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        fill="currentColor"
      >
        <path d="M380.9 97.1C339.3 55.5 283.5 32 224 32 100.3 32 0 132.3 0 256c0 45.2 12 89.1 34.9 127.6L2.5 478.7c-2.7 11.2 7.7 21.3 18.9 18.9l95.1-24.3C135 468 179 480 224 480c123.7 0 224-100.3 224-224 0-59.5-23.5-115.3-67.1-158.9zM224 432c-41.5 0-81.3-12.1-115.8-34.7l-8.3-5.3-56.4 14.4 14.4-56.4-5.3-8.3C60.1 281.3 48 241.5 48 200 48 111.6 111.6 48 224 48c52.8 0 102.5 20.5 139.8 57.8C401.5 143.5 416 200.4 416 256c0 112.4-63.6 176-192 176zm99.3-138.6c-5.5-2.7-32.6-16-37.7-17.8-5.1-1.9-8.8-2.7-12.5 2.7-3.6 5.3-14.4 17.8-17.6 21.4-3.2 3.6-6.5 4.1-12 1.4-32.7-16.4-54.1-29.1-75.6-66.3-5.7-9.8 5.7-9.1 16.3-30.2 1.4-3.2.7-5.9-.4-8.3-1.1-2.3-12.5-30.1-17.2-41.4-4.5-10.8-9.1-9.4-12.5-9.6-3.2-.2-6.9-.2-10.6-.2-3.6 0-9.5 1.4-14.5 6.9-5 5.5-19 18.6-19 45.3 0 26.7 19.5 52.4 22.3 56.1 2.7 3.6 38.3 58.5 93.3 82 13 5.6 23.1 8 31 10.2 13 4.1 24.8 3.5 34.1 2.1 10.4-1.5 32-13 36.5-25.5 4.5-12.5 4.5-23.2 3.2-25.5-1.4-2.3-5-3.6-10.5-6.3z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
