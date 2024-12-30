import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div>
            <Link
              to="/"
              className={`text-2xl font-bold tracking-wide ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              MadaWeaver
            </Link>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none ${
                isScrolled ? 'text-black' : 'text-white'
              }`}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div
            className={`hidden md:flex items-center space-x-6 font-medium ${
              isScrolled ? 'text-black' : 'text-white'
            }`}
          >
            <Link to="/" className="hover:text-yellow-500">
              Home
            </Link>
            <Link to="/destination" className="hover:text-yellow-500">
              Trip
            </Link>
            <Link to="/aboutus" className="hover:text-yellow-500">
              About Us
            </Link>
            <Link to="/cars" className="hover:text-yellow-500">
              Cars
            </Link>
            <Link to="/contactus" className="hover:text-yellow-500">
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg rounded-lg py-6 px-4 space-y-4 text-black">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-yellow-500"
            >
              Home
            </Link>
            <Link
              to="/destination"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-yellow-500"
            >
              Trip
            </Link>
            <Link
              to="/aboutus"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-yellow-500"
            >
              About Us
            </Link>
            <Link
              to="/cars"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-yellow-500"
            >
              Cars
            </Link>
            <Link
              to="/contactus"
              onClick={() => setIsMenuOpen(false)}
              className="block hover:text-yellow-500"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
