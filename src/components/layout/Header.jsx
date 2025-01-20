import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaEnvelope, FaHome, FaPlane, FaInfoCircle } from 'react-icons/fa';
import Breadcrumb from '../ui/Breadcrumb';
import logo from '../../assets/logo.jpg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactBar, setShowContactBar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
        setShowContactBar(false);
      } else {
        setIsScrolled(false);
        setShowContactBar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Contact Bar */}
      {showContactBar && (
        <div className="fixed top-0 left-0 w-full bg-gray-900 text-white text-sm z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <FaPhone />
                <span>+261 34 76 515 64</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope />
                <span>contact@madaweaver.com</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <nav
        className={`fixed w-full top-0 left-0 z-40 transition-all duration-300 backdrop-blur-sm ${
          isScrolled ? 'bg-white/90 shadow-lg' : 'bg-transparent'
        }`}
        style={{ paddingTop: showContactBar ? '2.5rem' : '0' }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="MadaWeaver Logo"
                className="w-16 h-16 object-cover rounded-full shadow-md"
              />
              <div className="ml-3">
                <span
                  className={`block text-3xl font-bold tracking-wide ${
                    isScrolled ? 'text-black' : 'text-white'
                  }`}
                >
                  MadaWeaver
                </span>
                <span
                  className={`block text-sm font-medium ${
                    isScrolled ? 'text-gray-600' : 'text-gray-200'
                  }`}
                >
                  Madagascar Travel Agency
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 font-medium">
            <Link to="/" className={`hover:text-yellow-500 ${isScrolled ? 'text-black' : 'text-white'}`}>
              HOME
            </Link>
            <Link to="/destinations" className={`hover:text-yellow-500 ${isScrolled ? 'text-black' : 'text-white'}`}>
              TRIP
            </Link>
            <Link to="/about" className={`hover:text-yellow-500 ${isScrolled ? 'text-black' : 'text-white'}`}>
              ABOUT US
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none ${isScrolled ? 'text-black' : 'text-white'}`}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg py-6 px-4 space-y-4 text-black">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-2 hover:text-yellow-500"
            >
              <FaHome />
              <span>Home</span>
            </Link>
            <Link
              to="/destinations"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-2 hover:text-yellow-500"
            >
              <FaPlane />
              <span>Trip</span>
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center space-x-2 hover:text-yellow-500"
            >
              <FaInfoCircle />
              <span>About Us</span>
            </Link>
          </div>
        )}

        {/* Breadcrumb */}
        <div
          className={`bg-transparent py-3 px-4 ${
            isScrolled ? 'text-genericBlue' : 'text-white'
          }`}
        >
          <Breadcrumb />
        </div>
      </nav>
    </header>
  );
};

export default Header;
