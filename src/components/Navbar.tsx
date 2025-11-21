
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { IMAGES, COMPANY_INFO } from "@/constants";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-3 group">
          <img 
            src={IMAGES.logos.official}
            alt={`${COMPANY_INFO.name} Logo`}
            className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-base sm:text-lg md:text-xl font-heading font-bold text-honeymark-brown">
            {COMPANY_INFO.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link 
            to="/" 
            className={`font-medium transition-colors hover:text-honeymark-orange ${isActiveLink('/') ? 'text-honeymark-orange' : 'text-gray-700'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`font-medium transition-colors hover:text-honeymark-orange ${isActiveLink('/services') ? 'text-honeymark-orange' : 'text-gray-700'}`}
          >
            Services
          </Link>
          <Link 
            to="/about" 
            className={`font-medium transition-colors hover:text-honeymark-orange ${isActiveLink('/about') ? 'text-honeymark-orange' : 'text-gray-700'}`}
          >
            About Us
          </Link>
          <Link 
            to="/contact" 
            className={`font-medium transition-colors hover:text-honeymark-orange ${isActiveLink('/contact') ? 'text-honeymark-orange' : 'text-gray-700'}`}
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation with Smooth Animation */}
      <div className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <nav className="flex flex-col space-y-4 px-4 py-4">
            <Link 
              to="/" 
              className={`font-medium py-2 transition-colors hover:text-honeymark-orange ${isActiveLink('/') ? 'text-honeymark-orange' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-medium py-2 transition-colors hover:text-honeymark-orange ${isActiveLink('/services') ? 'text-honeymark-orange' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`font-medium py-2 transition-colors hover:text-honeymark-orange ${isActiveLink('/about') ? 'text-honeymark-orange' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium py-2 transition-colors hover:text-honeymark-orange ${isActiveLink('/contact') ? 'text-honeymark-orange' : 'text-gray-700'}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
    </header>
  );
};

export default Navbar;
