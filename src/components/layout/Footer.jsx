import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        {/* Logo and description */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-500">MadaWeaver</h2>
          <p className="mt-4 text-gray-400">
            Explore Madagascar like never before. Dive into unforgettable experiences guided by local experts.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-yellow-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/destinations" className="hover:text-yellow-300">
                Our Tours
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300">
                About Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-500"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-pink-500"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-700"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-yellow-400 mb-4">
            Newsletter Signup
          </h3>
          <p className="text-gray-400 mb-4">
            Get the latest offers and updates directly in your inbox.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded focus:outline-none focus:border-yellow-400"
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 rounded transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        <p>© 2024 MadaWeaver. All rights reserved.</p>
        <p>Crafted with passion to explore Madagascar.</p>
      </div>
    </footer>
  );
};

export default Footer;
