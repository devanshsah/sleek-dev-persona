
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
      <div className="max-w-4xl mx-auto text-center z-10 animate-slide-up">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold font-playfair tracking-tight mb-6">
            Digital experiences, <span className="text-gradient">beautifully crafted</span>
          </h1>
          
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            I'm a designer and developer passionate about creating products that are not just functional, but delightful to use.
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
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full inline-block hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/20"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
          >
            see my work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
