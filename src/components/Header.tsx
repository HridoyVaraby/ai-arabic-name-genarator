import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-emerald-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-white hover:text-emerald-100 transition-colors">
              Arabic Name Generator
            </h1>
          </Link>
          
          <nav className="hidden md:flex space-x-6">
            <Link 
              to="/" 
              className="text-emerald-100 hover:text-white transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-emerald-100 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-emerald-100 hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          <button className="md:hidden text-emerald-100 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
