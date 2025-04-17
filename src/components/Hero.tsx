
import { ArrowDown, Download, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 px-6 relative bg-background">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.05)_0,rgba(var(--primary),0)_70%)]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10 animate-slide-up">
        <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">Full-Stack Development</span>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-playfair">
          <span className="text-gradient">UI/UX Designer</span>
          <span className="block mt-3 text-4xl md:text-5xl text-foreground">
            & Software Developer
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          I turn your wildest ideas into beautiful, responsive websites that users <span className="text-primary font-medium">actually love</span> to use.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-primary text-white hover:bg-primary/90 px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <Send className="mr-2 h-5 w-5" /> View Projects
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-primary/20 text-primary hover:bg-primary/5 px-8 py-6"
            size="lg"
          >
            <Download className="mr-2 h-5 w-5" /> Download Resume
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')} 
          className="p-2 rounded-full hover:bg-primary/10 transition-colors text-primary"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
