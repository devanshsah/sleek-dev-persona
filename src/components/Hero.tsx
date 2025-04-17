
import { FiArrowDown } from "react-icons/fi";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-16 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Software Developer
          <span className="block mt-2 text-blue-500">
            Building impactful solutions
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          I craft clean, efficient, and user-centered digital experiences
          with a focus on performance and accessibility.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <a 
            onClick={() => scrollToSection('projects')}
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
          >
            View Projects
          </a>
          <a 
            onClick={() => scrollToSection('contact')}
            className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
          >
            Contact Me
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')} 
          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FiArrowDown size={24} className="text-gray-600" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
