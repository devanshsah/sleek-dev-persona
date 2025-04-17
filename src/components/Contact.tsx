
import { useState } from "react";
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiTwitter, FiSend } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
    // Show success message
    alert("Thanks for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 px-6 bg-secondary section-fade">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center font-playfair section-title">
          Get in <span className="text-primary">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-3xl mx-auto mb-16 text-lg">
          Have a project in mind or want to explore collaboration opportunities? Let's connect and create something amazing together.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-background border-border shadow-lg overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-white font-playfair">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-secondary border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white resize-none"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="bg-primary text-white hover:bg-primary/90 w-full flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <FiSend size={16} />
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-md text-primary mt-1">
                  <FiMail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white font-playfair">Email</h3>
                  <p className="text-gray-400">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-md text-primary mt-1">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white font-playfair">Location</h3>
                  <p className="text-gray-400">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-lg text-white font-playfair">Connect</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 bg-background rounded-full text-gray-400 hover:bg-primary hover:text-white transition-colors"
                    aria-label="GitHub"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-background rounded-full text-gray-400 hover:bg-primary hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-background rounded-full text-gray-400 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <FiTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <Card className="mt-8 lg:mt-0 bg-primary/5 border border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-medium text-lg mb-3 text-white font-playfair">Let's Collaborate</h3>
                <p className="text-gray-300">
                  Currently available for UI/UX design projects, frontend development, and full-stack collaborations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
