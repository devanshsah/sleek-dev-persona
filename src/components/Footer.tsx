
import { Heart, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-secondary/30 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-foreground/70 mb-4 md:mb-0 text-sm">
          &copy; {currentYear} <span className="font-medium text-foreground">design<span className="text-primary">GURU</span></span>. All rights reserved.
        </div>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Twitter size={18} />
          </a>
          <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
            <Instagram size={18} />
          </a>
        </div>
        
        <div className="flex items-center text-foreground/70 text-sm mt-4 md:mt-0">
          <span>Designed & Built with</span>
          <Heart className="mx-1 text-primary h-4 w-4" />
          <span>in React</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
