
import { Heart, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-foreground/60 mb-4 md:mb-0 text-sm">
          &copy; {currentYear} <span className="font-medium">devansh<span className="text-primary">Shah</span></span>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/devanshsah" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/60 hover:text-primary transition-colors p-2"
            aria-label="GitHub Profile"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://linkedin.com/in/devansh-shah" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-foreground/60 hover:text-primary transition-colors p-2"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:contact@devanshshah.com" 
            className="text-foreground/60 hover:text-primary transition-colors p-2"
            aria-label="Email Contact"
          >
            <Mail size={18} />
          </a>
        </div>
        
        <div className="flex items-center text-foreground/60 text-sm mt-4 md:mt-0">
          <span>Made with</span>
          <Heart className="mx-1 text-primary h-3 w-3" />
          <span>in React</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
