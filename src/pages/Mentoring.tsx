
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Award, Calendar, Lightbulb, BookOpen, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const MentorCard = ({ name, role, expertise, image }: { 
  name: string, 
  role: string, 
  expertise: string, 
  image: string 
}) => (
  <motion.div 
    className="bg-white rounded-xl shadow-md overflow-hidden card-hover"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="h-48 overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-slash-blue mb-1">{name}</h3>
      <p className="text-slash-teal font-medium mb-2">{role}</p>
      <p className="text-gray-600">{expertise}</p>
      <Button variant="outline" className="mt-4 w-full hover:bg-slash-teal hover:text-white transition-colors">
        View Profile
      </Button>
    </div>
  </motion.div>
);

const MentoringFeature = ({ icon: Icon, title, description }: {
  icon: any,
  title: string,
  description: string
}) => (
  <motion.div 
    className="flex items-start space-x-4"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="bg-slash-teal/10 p-3 rounded-lg">
      <Icon className="h-6 w-6 text-slash-teal" />
    </div>
    <div>
      <h3 className="text-xl font-bold text-slash-blue mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </motion.div>
);

const Mentoring = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slash-blue to-slash-teal text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Expert Mentorship for Technology Innovators</h1>
                <p className="text-lg opacity-90 mb-8">
                  Personalized, real-world guidance from industry experts across all tech and design domains. Connect with mentors who understand your journey.
                </p>
                <Button className="bg-white text-slash-blue hover:bg-white/90 px-8 py-6 text-lg rounded-full">
                  👨‍🏫 Meet Our Mentors
                </Button>
              </motion.div>
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="Mentoring at SlashZero" 
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* How We Mentor Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-slash-blue mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                How We Mentor
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our mentorship program is tailored to your individual needs, providing guidance and support to help you achieve your technology and innovation goals.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <MentoringFeature 
                icon={Users} 
                title="One-on-One Sessions" 
                description="Get personalized guidance from industry experts who understand your specific needs and goals."
              />
              <MentoringFeature 
                icon={Calendar} 
                title="Regular Workshops" 
                description="Participate in interactive workshops designed to build practical skills in specific technology domains."
              />
              <MentoringFeature 
                icon={MessageSquare} 
                title="Q&A Sessions" 
                description="Get your pressing questions answered by experts who have faced similar challenges."
              />
              <MentoringFeature 
                icon={BookOpen} 
                title="Learning Resources" 
                description="Access curated learning materials, code samples, and project templates to accelerate your learning."
              />
              <MentoringFeature 
                icon={Lightbulb} 
                title="Project Guidance" 
                description="Get hands-on help with your projects, from conceptualization to completion and deployment."
              />
              <MentoringFeature 
                icon={Award} 
                title="Career Development" 
                description="Receive guidance on portfolio building, interview preparation, and career advancement strategies."
              />
            </div>
          </div>
        </section>

        {/* Meet Our Mentors Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-slash-blue mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Meet Our Mentors
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our mentors bring years of industry experience and a passion for teaching to help you succeed in your technology journey.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <MentorCard 
                name="Dr. Raj Kumar" 
                role="IoT & Robotics Specialist" 
                expertise="15+ years experience in industrial automation and robotics"
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
              <MentorCard 
                name="Priya Sharma" 
                role="UI/UX Design Lead" 
                expertise="Designing intuitive interfaces for global tech companies"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
              <MentorCard 
                name="Arun Verma" 
                role="AR/VR Developer" 
                expertise="Creating immersive experiences for education and training"
                image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
              <MentorCard 
                name="Meera Patel" 
                role="Digital Marketing Expert" 
                expertise="Data-driven marketing strategies for tech products"
                image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80"
              />
              <MentorCard 
                name="Vikram Singh" 
                role="Full Stack Developer" 
                expertise="Building scalable web applications and APIs"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
              <MentorCard 
                name="Lakshmi Krishnan" 
                role="AI & ML Specialist" 
                expertise="Implementing intelligent systems for business solutions"
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              />
            </div>
          </div>
        </section>

        {/* Mentorship Process Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-slash-blue mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Mentorship Process
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We've designed a structured mentorship process that ensures you receive the right guidance at every stage of your learning journey.
              </motion.p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slash-teal/30"></div>
              
              {/* Timeline items */}
              <div className="space-y-12 relative">
                {[
                  {
                    title: "Initial Assessment",
                    description: "We start by understanding your goals, current skills, and areas of interest to match you with the right mentor.",
                    icon: "1"
                  },
                  {
                    title: "Custom Learning Plan",
                    description: "Your mentor creates a tailored plan with specific milestones and learning resources to guide your progress.",
                    icon: "2"
                  },
                  {
                    title: "Regular Sessions",
                    description: "Engage in scheduled one-on-one sessions to track progress, address questions, and get hands-on guidance.",
                    icon: "3"
                  },
                  {
                    title: "Project-Based Learning",
                    description: "Apply your knowledge to real-world projects with regular feedback and guidance from your mentor.",
                    icon: "4"
                  },
                  {
                    title: "Progress Evaluation",
                    description: "Regular assessments help track your improvement and adjust the learning plan as needed.",
                    icon: "5"
                  }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className={`flex md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="md:w-1/2 pr-8">
                      <div className={`p-6 rounded-lg shadow-md bg-white ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <h3 className="text-xl font-bold text-slash-blue mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="relative flex items-center justify-center">
                      <div className="h-10 w-10 rounded-full bg-slash-teal flex items-center justify-center text-white font-bold shadow-lg z-10">
                        {item.icon}
                      </div>
                    </div>
                    <div className="md:w-1/2 pl-8"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-slash-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to Start Your Mentorship Journey?
            </motion.h2>
            <motion.p 
              className="text-lg opacity-90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Join our mentorship program today and gain the skills and confidence you need to succeed in the rapidly evolving tech industry.
            </motion.p>
            <motion.div
              className="space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button className="bg-white text-slash-blue hover:bg-white/90 px-8 py-6 text-lg rounded-full">
                Schedule a Free Consultation
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                Learn More About Pricing
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mentoring;
