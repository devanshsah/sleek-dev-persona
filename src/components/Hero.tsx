
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center pt-16 px-6 relative bg-background">
      <div className="max-w-3xl mx-auto text-center z-10 animate-slide-up">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block py-1 px-3 bg-primary/10 text-primary rounded-full text-sm mb-6">
            developer & designer
          </span>
          
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
            I build things for the <span className="text-gradient">web</span>
          </h1>
          
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Frontend developer creating clean, user-focused experiences with modern tech
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="pt-8"
        >
          <a 
            href="#projects"
            className="px-8 py-3 bg-primary text-white rounded-full inline-block hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            see my work
          </a>
        </motion.div>
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
