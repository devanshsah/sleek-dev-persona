
import { FiZap } from "react-icons/fi";

const skills = [
  {
    category: "Frontend",
    items: ["JavaScript (ES6+)", "TypeScript", "React", "Vue.js", "HTML5 & CSS3", "Tailwind CSS", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "SQL"]
  },
  {
    category: "Tools & Practices",
    items: ["Git & GitHub", "Docker", "CI/CD", "Agile/Scrum", "Jest", "Webpack", "AWS"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 section-fade">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Technical <span className="text-blue-500">Skills</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          I'm proficient in a range of technologies that enable me to build complete, scalable applications.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-blue-100 rounded-md text-blue-500">
                  <FiZap size={20} />
                </div>
                <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              </div>
              
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li 
                    key={skillIndex} 
                    className="flex items-center text-gray-700"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
