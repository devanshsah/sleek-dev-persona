
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Project Alpha",
    description: "A responsive web application built with React and Node.js that helps users track their daily habits and improve productivity.",
    tags: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard that transforms complex data sets into insightful visualizations using D3.js and TypeScript.",
    tags: ["TypeScript", "D3.js", "REST API", "Firebase"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description: "A scalable e-commerce solution with secure payment processing, inventory management, and an intuitive admin panel.",
    tags: ["React", "Redux", "Express", "PostgreSQL"],
    imageUrl: "/placeholder.svg",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 section-fade">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          My <span className="text-blue-500">Projects</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Explore some of my recent work. Each project reflects my commitment to clean code, thoughtful design, and solving real-world problems.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video bg-gray-200 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-blue-50 text-blue-600 text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubUrl} 
                    className="text-gray-700 hover:text-gray-900 flex items-center gap-1"
                  >
                    <FiGithub size={16} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    className="text-gray-700 hover:text-gray-900 flex items-center gap-1"
                  >
                    <FiExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
