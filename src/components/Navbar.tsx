import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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

  const navItems = [
    { name: "about", href: "#about" },
    { name: "projects", href: "#projects" },
    { name: "skills", href: "#skills" },
    { name: "contact", href: "#contact" },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full py-4 px-6 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-medium tracking-tight">
          <span className="text-foreground">design</span><span className="text-primary">dost</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="text-foreground/70 hover:text-primary transition-colors duration-300 text-sm"
            >
              {item.name}
            </a>
          ))}

          <a 
            href="#contact"
            className="px-5 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary/90 transition-colors"
          >
            let's talk
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed top-[60px] left-0 w-full bg-white/95 backdrop-blur-md shadow-sm md:hidden transition-transform duration-300 ease-in-out border-t border-border",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="text-foreground hover:text-primary w-full text-center py-2 transition-colors duration-300"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="w-2/3 text-center px-5 py-2 bg-primary text-white rounded-full text-sm hover:bg-primary/90 transition-colors"
            onClick={toggleMenu}
          >
            let's talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
