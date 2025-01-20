import GaleriePhoto from "../components/destination/GaleriePhoto";
import DestinationList from "../components/Home/DestinationList";
import ExperienceSection from "../components/Home/ExperienceSection";
import HeroSection from "../components/Home/HeroSection";
import Testimonial from "../components/Home/Testimonial";

const HomePage = () => {

  const homeImages = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

    return (
      <div>
        <HeroSection />
        <DestinationList />
        <ExperienceSection />
        <Testimonial />
        {/* <GaleriePhoto images={homeImages} /> */}
      </div>
    );
  };
  
  export default HomePage;
  