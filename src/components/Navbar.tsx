
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full py-5 px-6 md:px-12 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-playfair tracking-tight font-medium">
          <span className="text-white">dev</span><span className="text-primary">folio</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
            About
          </a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
            Projects
          </a>
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
            Skills
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium">
            Contact
          </a>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white ml-4">
            Resume
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed top-16 left-0 w-full bg-background/95 backdrop-blur-md shadow-md md:hidden transition-transform duration-300 ease-in-out border-t border-border",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col items-center py-6 space-y-6">
          <a 
            href="#about" 
            className="text-gray-400 hover:text-white w-full text-center py-2 transition-colors duration-300"
            onClick={toggleMenu}
          >
            About
          </a>
          <a 
            href="#projects" 
            className="text-gray-400 hover:text-white w-full text-center py-2 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a 
            href="#skills" 
            className="text-gray-400 hover:text-white w-full text-center py-2 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a 
            href="#contact" 
            className="text-gray-400 hover:text-white w-full text-center py-2 transition-colors duration-300"
            onClick={toggleMenu}
          >
            Contact
          </a>
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
