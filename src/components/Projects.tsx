
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Design System Framework",
    description: "A comprehensive design system with components, patterns, and documentation for enterprise applications.",
    tags: ["Figma", "React", "Storybook", "Styled Components"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "Analytics Dashboard",
    description: "An interactive data visualization dashboard with real-time filtering, dark mode, and responsive design.",
    tags: ["TypeScript", "D3.js", "React Query", "Tailwind CSS"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
    featured: true
  },
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce solution with an intuitive shopping experience and streamlined checkout flow.",
    tags: ["Next.js", "GraphQL", "Stripe", "PostgreSQL"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
    featured: false
  },
];

const Projects = () => {
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="py-24 px-6 bg-secondary section-fade">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center font-playfair section-title">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg">
          A selection of my most impactful work, showcasing my expertise in UI/UX design 
          and full-stack development.
        </p>
        
        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="lg:w-3/5 relative">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden group relative">
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-all duration-300"></div>
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-4">
                      <a 
                        href={project.githubUrl} 
                        className="p-3 bg-black/80 rounded-full text-white hover:bg-primary transition"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        className="p-3 bg-black/80 rounded-full text-white hover:bg-primary transition"
                      >
                        <FiExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={`absolute -z-10 ${index % 2 === 0 ? '-right-5' : '-left-5'} -bottom-5 w-full h-full border-2 border-primary/30 rounded-lg`}></div>
              </div>
              
              <div className="lg:w-2/5 space-y-4">
                <h3 className="text-2xl font-bold font-playfair text-white">{project.title}</h3>
                
                <Card className="bg-background border-border">
                  <CardContent className="p-6">
                    <p className="text-gray-400 mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={project.liveUrl} 
                        className="text-primary hover:text-white flex items-center gap-2 text-sm transition-colors duration-300"
                      >
                        <span>View Project</span>
                        <FiArrowRight size={16} />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Projects <FiArrowRight className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
