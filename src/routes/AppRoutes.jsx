import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import DestinationsPage from '../pages/DestinationsPage';
import DestinationDetailsPage from '../pages/DestinationDetailsPage';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import NotFoundPage from '../components/layout/NotFoundPage';
import TailorMadePage from '../pages/TailorMadePage';
import ScrollToTop from '../hooks/ScrollToTop';

const AppRoutes = () => {
  return (
    <Router>
      {/* Layout général avec Header et Footer */}
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:slug" element={<DestinationDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} /> {/* Catch-all route */}
          <Route path="/tailormadetour" element={<TailorMadePage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
