
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-sm text-primary font-medium">about</span>
          <h2 className="text-3xl font-bold mb-8 font-playfair">
            Hey there! I'm a digital creator.
          </h2>
          
          <div className="space-y-6 text-foreground/70">
            <p>
              I'm passionate about building intuitive digital experiences that connect with people. 
              With over 5 years of experience in both design and development, I bring ideas to life through clean code and thoughtful design.
            </p>
            
            <p>
              Currently working with React, TypeScript, and modern design tools to create products 
              that are not just functional, but delightful to use.
            </p>
            
            <div className="pt-6 flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">React</span>
              <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">TypeScript</span>
              <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Tailwind</span>
              <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Figma</span>
              <span className="px-3 py-1 bg-secondary rounded-full text-xs text-foreground/70">Node.js</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
