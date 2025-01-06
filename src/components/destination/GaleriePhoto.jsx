import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const GaleriePhoto = ({ images }) => {
  // Désactiver le clic droit pour rendre les images non téléchargeables
  const handleContextMenu = (e) => e.preventDefault();

  const formattedImages = images.map((image) => ({
    original: image, // Lien vers l'image principale
    thumbnail: image, // Lien pour l'aperçu
  }));

  return (
    <div
      onContextMenu={handleContextMenu}
      className="gallery-container bg-gray-50 rounded-lg shadow-lg p-4"
    >
      <ImageGallery
        items={formattedImages}
        showPlayButton={false} // Masque le bouton de lecture automatique
        showFullscreenButton={true} // Affiche le bouton plein écran
        showThumbnails={true} // Affiche les miniatures
        showIndex={true} // Affiche l'index de l'image
        additionalClass="tailwind-gallery" // Classe CSS personnalisée pour Tailwind
      />
    </div>
  );
};

export default GaleriePhoto;
