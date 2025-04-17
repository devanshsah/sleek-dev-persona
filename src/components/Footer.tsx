
import { FiHeart } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-600 mb-4 md:mb-0">
          &copy; {currentYear} devfolio. All rights reserved.
        </div>
        
        <div className="flex items-center text-gray-600">
          <span>Made with</span>
          <FiHeart className="mx-1 text-red-500" />
          <span>and React</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
