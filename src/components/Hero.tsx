
import { FiArrowDown } from "react-icons/fi";
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary),0.1)_0,rgba(var(--primary),0)_70%)]"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 z-10 animate-slide-up">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-playfair">
          <span className="text-gradient">UI/UX Designer</span>
          <span className="block mt-3 text-4xl md:text-5xl text-white">
            & Software Developer
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I craft immersive digital experiences through beautiful interfaces
          and efficient, scalable backend solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-primary text-white hover:bg-primary/90 px-8 py-6"
            size="lg"
          >
            View Projects
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-white/10 text-gray-300 hover:bg-white/5 px-8 py-6"
            size="lg"
          >
            Contact Me
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')} 
          className="p-2 rounded-full hover:bg-white/5 transition-colors text-primary"
        >
          <FiArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
