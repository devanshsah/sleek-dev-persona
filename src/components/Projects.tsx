
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Design System",
    description: "Component library with documentation for enterprise apps",
    tags: ["React", "Storybook"],
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    link: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization with real-time filtering and dark mode",
    tags: ["TypeScript", "D3.js"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    link: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "Online store with smooth shopping experience",
    tags: ["Next.js", "Stripe"],
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    link: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary section-fade">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-sm text-primary font-medium">projects</span>
          <h2 className="text-3xl font-bold font-playfair">
            Some things I've built
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={project.link}
                className="block bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all group"
              >
                <div className="aspect-video bg-muted/70 overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-2 flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  
                  <p className="text-sm text-foreground/70 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex} 
                        className="bg-secondary text-foreground/70 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center text-primary hover:underline"
          >
            see all projects
            <ArrowUpRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
