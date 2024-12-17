import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Weekend Genie</h1>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-blue-300 transition duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-300 transition duration-200">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-blue-300 transition duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
