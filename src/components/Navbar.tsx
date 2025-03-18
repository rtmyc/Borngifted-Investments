
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/69aeeb1a-6652-4c18-a28c-24889436a45c.png" 
            alt="Honeymark Investments Logo" 
            className="h-10"
          />
          <span className="text-xl font-bold text-honeymark-brown hidden sm:inline">Honeymark Investments</span>
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white pt-2 pb-4 shadow-lg">
          <nav className="flex flex-col space-y-4 px-4">
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
      )}
    </header>
  );
};

export default Navbar;
