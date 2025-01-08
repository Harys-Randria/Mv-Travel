import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const GaleriePhoto = ({ images }) => {
  console.log("Images reçues dans GaleriePhoto :", images);

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-6 text-gray-500 italic">
        Aucune image disponible pour cette destination.
      </div>
    );
  }

  // Formater les images pour react-image-gallery
  const formattedImages = images.map((image) => ({
    original: image, // URL de l'image en taille originale
    thumbnail: image, // URL de l'image pour la vignette
  }));

  return (
    <div className="gallery-container bg-gray-50 rounded-lg shadow-lg p-4">
      <ImageGallery
        items={formattedImages}
        showPlayButton={false}
        showFullscreenButton={true}
        showThumbnails={true}
        showIndex={true}
        additionalClass="tailwind-gallery"
      />
    </div>
  );
};

export default GaleriePhoto;
