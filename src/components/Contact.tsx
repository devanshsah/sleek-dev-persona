
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import { useState } from "react";

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
    <section id="contact" className="py-20 px-6 bg-gray-50 section-fade">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Get in <span className="text-blue-500">Touch</span>
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-md text-blue-500 mt-1">
                  <FiMail size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Email</h3>
                  <p className="text-gray-600">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-md text-blue-500 mt-1">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h3 className="font-medium text-lg">Location</h3>
                  <p className="text-gray-600">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Connect</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition-colors"
                  >
                    <FiLinkedin size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-gray-100 rounded-full text-gray-700 hover:bg-blue-100 hover:text-blue-500 transition-colors"
                  >
                    <FiTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8 lg:mt-0 bg-blue-50 p-6 rounded-lg border border-blue-100">
              <h3 className="font-medium text-lg mb-3">Available for Opportunities</h3>
              <p className="text-gray-700">
                I'm currently open to freelance projects, full-time positions, and collaborations on interesting ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
