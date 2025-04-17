
import { FiUser, FiLayers, FiCode } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-16 text-center font-playfair section-title">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="aspect-[3/4] bg-muted/50 rounded-lg overflow-hidden">
                {/* Placeholder for an actual image */}
                <div className="w-full h-full bg-gradient-to-tr from-primary/10 to-transparent"></div>
              </div>
              <div className="absolute -bottom-5 -right-5 w-1/2 h-1/2 border-2 border-primary rounded-lg -z-10"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-xl md:text-2xl font-semibold text-white font-playfair">
              Digital Craftsman, <span className="text-primary">Design Enthusiast</span>
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm a passionate designer and developer focused on creating intuitive, accessible digital experiences. 
              With expertise in both frontend and backend technologies, I bridge the gap between visual aesthetics and technical functionality.
            </p>
            
            <div className="space-y-6 mt-8">
              <Card className="bg-secondary border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-md text-primary">
                      <FiUser size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">UI/UX Specialist</h3>
                      <p className="text-gray-400">Creating intuitive interfaces with a focus on user experience</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-md text-primary">
                      <FiLayers size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Design Systems Expert</h3>
                      <p className="text-gray-400">Building scalable, consistent design systems for complex products</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-secondary border-none shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-md text-primary">
                      <FiCode size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg text-white">Full-Stack Developer</h3>
                      <p className="text-gray-400">Engineering efficient backend solutions that power seamless frontends</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Button className="bg-primary text-white hover:bg-primary/90 mt-6">
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
