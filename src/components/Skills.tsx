
import { motion } from "framer-motion";

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"]
  },
  {
    category: "Design",
    items: ["Figma", "UI/UX", "Wireframing", "Prototyping", "Animation"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "GraphQL", "API Design"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-background section-fade">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="text-sm text-primary font-medium">skills</span>
          <h2 className="text-3xl font-bold font-playfair">
            My toolbox
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 shadow-sm"
            >
              <h3 className="text-lg font-medium mb-4 pb-4 border-b border-border">
                {skillGroup.category}
              </h3>
              
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="flex items-center text-foreground/70"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
