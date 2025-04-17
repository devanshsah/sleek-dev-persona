
import { FiUser, FiCode, FiCoffee } from "react-icons/fi";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 section-fade">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          About <span className="text-blue-500">Me</span>
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="bg-gradient-to-tr from-gray-50 to-white p-1 rounded-lg shadow-md overflow-hidden">
              <div className="aspect-[4/3] bg-gray-100 rounded-lg"></div>
            </div>
          </div>
          
          <div className="md:w-1/2 space-y-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate software developer who loves creating elegant solutions to complex problems. 
              With a keen eye for detail and a commitment to clean code, I build applications that are not only 
              functional but also intuitive and enjoyable to use.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-md text-blue-500">
                  <FiUser size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Innovative Problem Solver</h3>
                  <p className="text-gray-600">I approach challenges with creativity and analytical thinking</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-md text-blue-500">
                  <FiCode size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Clean Code Enthusiast</h3>
                  <p className="text-gray-600">I write maintainable, well-documented, and efficient code</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-md text-blue-500">
                  <FiCoffee size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Lifelong Learner</h3>
                  <p className="text-gray-600">I continually explore new technologies and best practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
