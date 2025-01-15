import React from "react";
import { Gallery } from "react-grid-gallery";

const GaleriePhoto = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500 italic">
        Aucune image disponible pour cette destination.
      </div>
    );
  }

  const formattedImages = images.map((image) => ({
    src: image,
    thumbnail: image,
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Cliquez pour agrandir",
  }));

  return (
    <div className="gallery-container p-4">
      <Gallery images={formattedImages} />
    </div>
  );
};

export default GaleriePhoto;
