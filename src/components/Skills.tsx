
import { FiCode, FiLayers, FiServer } from "react-icons/fi";
import { Card, CardContent } from "@/components/ui/card";

const skills = [
  {
    category: "UI/UX Design",
    icon: FiLayers,
    items: ["Figma", "Adobe XD", "Sketch", "Wireframing", "Prototyping", "User Research", "Interaction Design"]
  },
  {
    category: "Frontend Development",
    icon: FiCode,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion", "CSS/SASS", "Responsive Design"]
  },
  {
    category: "Backend & Infrastructure",
    icon: FiServer,
    items: ["Node.js", "Express", "PostgreSQL", "GraphQL", "AWS", "Docker", "CI/CD"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-background section-fade">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center font-playfair section-title">
          Technical <span className="text-primary">Skills</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg">
          I specialize in design-driven development, with expertise spanning the entire product creation process.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <Card 
              key={index} 
              className="bg-secondary border-none overflow-hidden shadow-lg card-hover"
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-md text-primary">
                    <skillGroup.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-playfair">{skillGroup.category}</h3>
                </div>
                
                <div className="h-px w-full bg-border mb-6"></div>
                
                <ul className="space-y-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex} 
                      className="flex items-center text-gray-300"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
