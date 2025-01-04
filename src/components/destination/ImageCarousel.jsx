import { useState } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="relative w-full h-80 bg-gray-100">
      <img src={images[currentIndex]} alt="carousel" className="object-cover w-full h-full" />
      <button onClick={handlePrev} className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white">‹</button>
      <button onClick={handleNext} className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white">›</button>
    </div>
  );
};

export default ImageCarousel;
