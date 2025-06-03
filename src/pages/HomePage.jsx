import GaleriePhoto from "../components/destination/GaleriePhoto";
import DestinationList from "../components/Home/DestinationList";
import ExperienceSection from "../components/Home/ExperienceSection";
import HeroSection from "../components/Home/HeroSection";
import Testimonial from "../components/Home/Testimonial";
import { Helmet } from 'react-helmet-async';


const HomePage = () => {

  const homeImages = [
    "https://via.placeholder.com/800x400?text=Image+1",
    "https://via.placeholder.com/800x400?text=Image+2",
    "https://via.placeholder.com/800x400?text=Image+3",
  ];

    return (
      <div>
        <Helmet>
        {/* Titre de la page */}
        <title>Home - MadaWeaver</title>

        {/* Description de la page */}
        <meta
          name="description"
          content="Explore the hidden wonders of Madagascar with MadaWeaver. Unique destinations, unforgettable experiences, and tailor-made stays."
        />

        {/* Mots-clés SEO */}
        <meta
          name="keywords"
          content="madagascar travel, madagascar travel agency, 
          madagascar tour, madagascar travel tour expedition, 
          madagascar travel advisory, madagascar travelling, 
          madagascar travelling guide, madagascar travel company, 
          madagascar travel advisory, madagascar travel itinerary, 
          Madagascar, voyage, tourisme, aventure, destinations, 
          tourism in Madagascar, madagascar travel and tours,
          MadaWeaver, expériences uniques, nature, plages, baobabs,
          Madagascar circuits tours"
        />

        {/* Balises Open Graph pour réseaux sociaux */}
        <meta property="og:title" content="Explore Madagascar’s Hidden Gems | MadaWeaver" />
        <meta property="og:description" content="Explore the hidden wonders of Madagascar with MadaWeaver. Unique destinations, unforgettable experiences, and tailor-made stays." />
        <meta property="og:image" content="https://cdn.pixabay.com/photo/2020/04/11/15/31/baobab-5030877_960_720.jpg" />
        <meta property="og:url" content="https://madaweavertour.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:site_name" content="MadaWeaver" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Explore Madagascar’s Hidden Gems | MadaWeaver" />
        <meta name="twitter:description" content="Explore the hidden wonders of Madagascar with MadaWeaver. Unique destinations, unforgettable experiences, and tailor-made stays." />
        <meta name="twitter:image" content="https://cdn.pixabay.com/photo/2019/11/02/21/41/africa-4597496_1280.jpg" />
        <meta name="twitter:site" content="@MadaWeaver" /> {/* Remplace par ton compte Twitter si dispo */}
        <meta name="twitter:creator" content="@MadaWeaver" /> {/* Remplace par ton compte Twitter */}

        {/* Canonical URL */}
        <link rel="canonical" href="https://madaweavertour.netlify.app/" />
      </Helmet>
        <HeroSection />
        <DestinationList />
        <ExperienceSection />
        <Testimonial />
        {/* <GaleriePhoto images={homeImages} /> */}
      </div>
    );
  };
  
  export default HomePage;
  