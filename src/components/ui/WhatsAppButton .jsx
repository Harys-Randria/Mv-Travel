import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/0345301317" // Remplacez ce numéro par le vôtre, avec l'indicatif international
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      style={{ zIndex: 999 }}
    >
      <i className="fab fa-whatsapp text-3xl"></i>
    </a>
  );
};

export default WhatsAppButton;
