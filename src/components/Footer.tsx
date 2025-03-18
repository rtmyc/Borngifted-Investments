
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Honeymark Investments</h3>
            <div className="flex items-center space-x-3 mb-2">
              <img 
                src="/lovable-uploads/69aeeb1a-6652-4c18-a28c-24889436a45c.png" 
                alt="Honeymark Investments Logo" 
                className="h-8"
              />
              <img 
                src="/lovable-uploads/bbf53e52-60a0-4041-98b1-a460aedaab0e.png" 
                alt="Gifted Stud Breeders Logo" 
                className="h-8"
              />
            </div>
            <p className="text-gray-600 mt-2">
              Honeymark Investments operates under two trade names: Gifted Stud Breeders 
              and Honeymark Taxi and Transport Services.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-honeymark-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-honeymark-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-honeymark-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-honeymark-orange transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-honeymark-green" />
                <a 
                  href="tel:+26371673095" 
                  className="text-gray-600 hover:text-honeymark-orange transition-colors"
                >
                  +263 71 673 3095
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-honeymark-green" />
                <a 
                  href="mailto:honeymarkinvestments@gmail.com" 
                  className="text-gray-600 hover:text-honeymark-orange transition-colors"
                >
                  honeymarkinvestments@gmail.com
                </a>
              </li>
              <li className="text-gray-600 mt-2">
                Farm located in Troutbeck, Nyanga
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Honeymark Investments. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
