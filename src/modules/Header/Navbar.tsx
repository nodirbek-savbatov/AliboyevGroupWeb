import { useState } from 'react';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState('Home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        
        <a href="/" className="flex items-center space-x-3">
          <img src="/logo.png" className="h-10" alt="Logo" />
        </a>

      
        <div className="flex items-center space-x-5 md:order-2">
          <FaSearch className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-600 transition" />
          <FaShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-600 transition" />
          <FaUser className="w-5 h-5 text-gray-700 cursor-pointer hover:text-blue-600 transition" />
          
  
          <button 
            onClick={toggleMenu}
            type="button" 
            className="md:hidden inline-flex items-center p-2 text-gray-600 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-controls="navbar-menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className={`w-full md:flex md:items-center md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-menu">
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href="#"
                  onClick={() => setActive(item)}
                  className={`block rounded-xl px-4 py-2 text-base transition-all duration-300 
                    ${active === item 
                      ? 'bg-blue-700 text-white md:bg-transparent md:text-blue-700 font-semibold' 
                      : 'text-gray-700 hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700'}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
