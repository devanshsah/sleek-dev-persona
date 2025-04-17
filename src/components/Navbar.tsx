
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full py-4 px-6 md:px-12 backdrop-blur-md bg-white/80 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-semibold tracking-tight">
          dev<span className="text-blue-500">folio</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-gray-700 hover:text-blue-500 transition-colors">
            About
          </a>
          <a href="#projects" className="text-gray-700 hover:text-blue-500 transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-gray-700 hover:text-blue-500 transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500 transition-colors">
            Contact
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed top-16 left-0 w-full bg-white/95 shadow-md md:hidden transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          <a 
            href="#about" 
            className="text-gray-700 hover:text-blue-500 w-full text-center py-2"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-gray-700 hover:text-blue-500 w-full text-center py-2"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="text-gray-700 hover:text-blue-500 w-full text-center py-2"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-blue-500 w-full text-center py-2"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
