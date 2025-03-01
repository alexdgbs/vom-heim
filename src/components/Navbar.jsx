import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const isActive = (path) => location.pathname === path ? 'text-gray-800' : 'text-gray-500';

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wide">
          <div className="relative">
            <span className="font-serif border-b border-gray-600 text-gray-800">
              VH
            </span>
          </div>
        </div>     
        <ul className={`hidden md:flex space-x-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li>
            <Link 
              to="/" 
              className={`text-md font-bold hover:text-gray-800 transition duration-200 ${isActive('/')}`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              to="/Productos" 
              className={`text-md font-bold hover:text-gray-800 transition duration-200 ${isActive('/Productos')}`}
            >
              Productos
            </Link>
          </li>
          <li>
            <Link 
              to="/Contacto" 
              className={`text-md font-bold hover:text-gray-800 transition duration-200 ${isActive('/Contacto')}`}
            >
              Contacto
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-1 focus:outline-none">
            <div className="relative w-6 h-6 flex items-center justify-center">
              <div 
                className={`absolute w-5 h-px bg-gray-800 transform transition-transform duration-300 ${
                  isMenuOpen ? 'rotate-45' : '-translate-y-1'
                }`}
              ></div>
              <div 
                className={`absolute w-5 h-px bg-gray-800 transition-opacity duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></div>
              <div 
                className={`absolute w-5 h-px bg-gray-800 transform transition-transform duration-300 ${
                  isMenuOpen ? '-rotate-45' : 'translate-y-1'
                }`}
              ></div>
            </div>
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white`}>
        <ul className="flex flex-col space-y-4 p-4">
          <li>
            <Link
              to="/"
              className={`text-md font-bold hover:text-gray-800 transition duration-200 ${isActive('/')}`}
              onClick={toggleMenu}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              to="/Productos"
              className={`text-md font-bold hover:text-gray-800 transition duration-200 ${isActive('/Productos')}`}
              onClick={toggleMenu}
            >
              Productos
            </Link>
          </li>
          <li>
            <Link
              to="/Contacto"
              className={`text-md font-bold hover:text-gray-800 transition duration-200 ${isActive('/Contacto')}`}
              onClick={toggleMenu}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;