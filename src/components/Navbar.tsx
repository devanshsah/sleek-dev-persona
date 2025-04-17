
import { useState, useEffect } from "react";
import { Menu, X, Download, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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
    { name: "About Me", href: "#about", delay: 0.1 },
    { name: "My Projects", href: "#projects", delay: 0.2 },
    { name: "Skill Set", href: "#skills", delay: 0.3 },
    { name: "Get in Touch", href: "#contact", delay: 0.4 },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full py-4 px-6 md:px-12 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-playfair tracking-tight font-bold">
          <span className="text-foreground">design</span><span className="text-primary">GURU</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-1 items-center">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="relative px-4 py-2 text-foreground/70 hover:text-primary transition-colors duration-300 text-sm font-medium group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}

          <Button 
            variant="default" 
            className="ml-4 font-medium shadow-md hover:shadow-lg transition-all"
            size="sm"
          >
            <Download className="mr-1 h-4 w-4" /> Get Resume
          </Button>
          
          <Button 
            variant="outline" 
            className="ml-2 border-primary/20 text-primary hover:bg-primary/5 font-medium"
            size="sm"
          >
            <ExternalLink className="mr-1 h-4 w-4" /> Hire Me
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed top-[60px] left-0 w-full bg-white/95 backdrop-blur-md shadow-md md:hidden transition-transform duration-300 ease-in-out border-t border-border",
          isOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {navItems.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="text-foreground hover:text-primary w-full text-center py-2 transition-colors duration-300 font-medium"
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-3 w-full px-6">
            <Button className="w-full shadow-md">
              <Download className="mr-1 h-4 w-4" /> Get Resume
            </Button>
            <Button variant="outline" className="w-full border-primary/20 text-primary hover:bg-primary/5">
              <ExternalLink className="mr-1 h-4 w-4" /> Hire Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
