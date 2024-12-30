import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import DestinationsPage from '../pages/DestinationsPage';
import DestinationDetailsPage from '../pages/DestinationDetailsPage';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AppRoutes = () => {
  return (
    <Router>
      {/* Layout général avec Header et Footer */}
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:id" element={<DestinationDetailsPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
