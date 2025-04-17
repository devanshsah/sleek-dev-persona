
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 mb-4 md:mb-0 text-sm">
          &copy; {currentYear} <span className="text-white">dev<span className="text-primary">folio</span></span>. All rights reserved.
        </div>
        
        <div className="flex items-center text-gray-400 text-sm">
          <span>Designed & Built with</span>
          <FiHeart className="mx-1 text-primary" />
          <span>in React</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
