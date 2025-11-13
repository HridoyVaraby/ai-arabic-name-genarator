import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Arabic Name Generator</h3>
              <p className="text-emerald-100 text-sm leading-relaxed">
                Discover beautiful Arabic names with their meanings and cultural significance. 
                AI-powered name generation for your perfect choice.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  Home
                </Link>
                <Link to="/about" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
                <Link to="/contact" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </nav>
            </div>

            {/* Legal Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Legal</h4>
              <nav className="flex flex-col space-y-2">
                <Link to="/privacy-policy" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="text-emerald-100 hover:text-white transition-colors text-sm">
                  Terms of Service
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-emerald-200 text-sm">
              © {currentYear} Arabic Name Generator. All rights reserved.
            </p>
            <p className="text-emerald-200 text-sm">
              Developed by{' '}
              <a 
                href="https://varabit.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-emerald-100 font-semibold transition-colors"
              >
                Varabit Web Design & Development
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
