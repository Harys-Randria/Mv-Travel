import DestinationList from "../components/Home/DestinationList";
import ExperienceSection from "../components/Home/ExperienceSection";
import HeroSection from "../components/Home/HeroSection";
import Testimonial from "../components/Home/Testimonial";

const HomePage = () => {
    return (
      <div>
        <HeroSection />
        <DestinationList />
        <ExperienceSection />
        <Testimonial />
      </div>
    );
  };
  
  export default HomePage;
  