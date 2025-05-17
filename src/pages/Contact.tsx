
import { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 bg-gradient-to-b from-white to-slate-50">
        {/* Hero Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <span className="inline-block text-slash-teal font-medium text-lg mb-3 px-4 py-1 rounded-full bg-slash-teal/10">
                Reach Out
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slash-blue mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Have questions about our programs or want to schedule a consultation? 
                Reach out to us through any of our channels.
              </p>
            </motion.div>
          </div>
          
          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
              <path 
                fill="#ffffff" 
                fillOpacity="1" 
                d="M0,64L60,69.3C120,75,240,85,360,80C480,75,600,53,720,42.7C840,32,960,32,1080,42.7C1200,53,1320,75,1380,85.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
              >
                <h2 className="text-2xl font-bold mb-6 text-slash-blue flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-slash-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-slate-700">Your Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-2 border-slate-200 focus:border-slash-teal focus:ring focus:ring-slash-teal/20"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-700">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-2 border-slate-200 focus:border-slash-teal focus:ring focus:ring-slash-teal/20"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject" className="text-slate-700">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-2 border-slate-200 focus:border-slash-teal focus:ring focus:ring-slash-teal/20"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-slate-700">Your Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 border-slate-200 focus:border-slash-teal focus:ring focus:ring-slash-teal/20 min-h-[150px]"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-slash-teal to-emerald-500 hover:from-slash-teal/90 hover:to-emerald-600 text-white shadow-lg shadow-slash-teal/20"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <span className="flex items-center">
                        Send Message
                        <Send size={16} className="ml-2" />
                      </span>
                    )}
                  </Button>
                </form>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-slash-teal border-t border-r border-b border-slate-100">
                  <h2 className="text-2xl font-bold mb-6 text-slash-blue flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-slash-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Contact Information
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-slash-teal mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-slate-900 mb-1">Address</h3>
                        <p className="text-slate-600">
                          Plot no - 84, Phase 2, 401 Area Sathya Residency, 
                          <br />Bachupally, Hyderabad, Telangana, India
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-slash-teal mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-slate-900 mb-1">Phone</h3>
                        <p className="text-slate-600">
                          <a href="tel:+918712166256" className="hover:text-slash-teal transition-colors">
                            +91-87121 66256
                          </a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-slash-teal mr-4 mt-1" />
                      <div>
                        <h3 className="font-medium text-slate-900 mb-1">Email</h3>
                        <p className="text-slate-600">
                          <a href="mailto:info@slashzero.in" className="hover:text-slash-teal transition-colors">
                            info@slashzero.in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="bg-white rounded-2xl shadow-xl p-4 h-[300px] overflow-hidden border border-slate-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.674016140725!2d78.38586502570857!3d17.522486900574446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8e8f8f31e895%3A0x9e9c192cdef8d260!2sBachupally%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1712634274071!5m2!1sen!2sin" 
                    className="w-full h-full rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                {/* Business Hours */}
                <div className="bg-gradient-to-br from-slash-teal/5 to-emerald-50 rounded-2xl p-6 shadow-md border border-slash-teal/10">
                  <h3 className="font-semibold text-lg text-slash-blue flex items-center mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-slash-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Business Hours
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="font-medium">Closed</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
