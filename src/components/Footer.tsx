
import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { COMPANY_INFO, NAV_LINKS } from "@/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">{COMPANY_INFO.name}</h3>
            <div className="flex items-center space-x-3 mb-2">
              <img 
                src="/borngifted-logo.jpg" 
                alt="BornGifted Logo" 
                className="h-8"
              />
              <img 
                src="/official-logo.jpg" 
                alt="Gifted Stud Breeders Logo" 
                className="h-8"
              />
              <img 
                src="/lovable-uploads/69aeeb1a-6652-4c18-a28c-24889436a45c.png" 
                alt="Honeymark Taxi Logo" 
                className="h-8"
              />
            </div>
            <p className="text-gray-600 mt-2">
              {COMPANY_INFO.tagline}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-600 hover:text-honeymark-orange transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-honeymark-green" />
                <a 
                  href={`tel:${COMPANY_INFO.phones.primary}`}
                  className="text-gray-600 hover:text-honeymark-orange transition-colors"
                >
                  {COMPANY_INFO.phones.formatted.primary}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={18} className="text-honeymark-green" />
                <a 
                  href={`tel:${COMPANY_INFO.phones.secondary}`}
                  className="text-gray-600 hover:text-honeymark-orange transition-colors"
                >
                  {COMPANY_INFO.phones.formatted.secondary}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={18} className="text-honeymark-green" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-gray-600 hover:text-honeymark-orange transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="text-gray-600 mt-2">
                {COMPANY_INFO.location.address}
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href={COMPANY_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white text-gray-700"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={COMPANY_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition-all hover:bg-[#1877F2] hover:text-white text-gray-700"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              Connect with us on social media for updates and news.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
