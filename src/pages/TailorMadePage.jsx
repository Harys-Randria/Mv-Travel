import { useEffect, useState } from "react";
import client from "../contentfulClient";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TailorMadePage = () => {
  const [spots, setSpots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useState(null);

  useEffect(() => {
    const fetchSpots = async () => {
      try {
        const response = await client.getEntries({ content_type: "spot" });
        const formattedData = response.items.map((item) => ({
          title: item.fields.title,
          description: item.fields.description,
          gallery: item.fields.gallery?.map((img) => img.fields.file.url) || [],
        }));
        setSpots(formattedData);
      } catch (error) {
        console.error("Error fetching data from Contentful:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpots();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] sm:h-[500px] lg:h-[600px]"
        style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2019/11/02/21/36/africa-4597486_1280.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full px-4 mt-8 sm:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-title text-white mb-4 drop-shadow-lg text-center">
            Plan Your Dream Adventure
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 text-center max-w-2xl drop-shadow-md">
            Explore the world, your way. Discover tailor-made travel solutions designed for you.
          </p>
        </div>
      </div>

      {/* Google Form Section */}
      <div className="bg-gray-100 py-10 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-title text-gray-800 mb-6">
            Start Your Journey
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl mb-6 leading-relaxed">
            Fill out the form below to help us plan your next adventure. We'll get back to you with a
            personalized itinerary tailored to your preferences.
          </p>
          <div className="flex justify-center">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSd1EKOj9uFyccUiDQfEB7BIYS0OkkqkX_YTZsw-tQMw6S2gUg/viewform?usp=header"
              width="100%"
              height="1200"
              frameBorder="0"
              className="rounded-lg shadow-lg"
              title="Tailor-Made Travel Form"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>

      {/* Madagascar Spots Section */}
      <div className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-title text-gray-800 mb-8 text-center">
            Discover Madagascar's Best Spots
          </h2>

          {loading ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : (
            <div className="grid gap-12">
              {spots.map((spot, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative w-full md:w-1/2 max-w-md mx-auto">
                    <button 
                      className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900 z-20"
                      onClick={() => sliderRef.current?.slickPrev()}
                    >
                      <FaChevronLeft />
                    </button>
                    <Slider {...settings} ref={sliderRef} className="rounded-lg shadow-lg">
                      {spot.gallery.map((img, imgIndex) => (
                        <img
                          key={imgIndex}
                          src={img}
                          alt={`Gallery image ${imgIndex + 1}`}
                          className="w-full h-auto object-contain rounded-lg cursor-pointer"
                          onClick={() => setSelectedImage(img)}
                        />
                      ))}
                    </Slider>
                    <button 
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow-lg hover:bg-gray-900"
                      onClick={() => sliderRef.current?.slickNext()}
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                  <div className="md:w-1/2 px-4">
                    <h3 className="text-2xl font-semibold text-gray-800">{spot.title}</h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">{spot.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative max-w-4xl">
            <button className="absolute top-2 right-2 text-white text-3xl" onClick={() => setSelectedImage(null)}>
              &times;
            </button>
            <img src={selectedImage} alt="Enlarged Preview" className="w-full max-h-[80vh] object-contain rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default TailorMadePage;
