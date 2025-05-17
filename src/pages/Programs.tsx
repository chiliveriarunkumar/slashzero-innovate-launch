
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Layers, Code, Smartphone, Box, BarChart3, Download } from "lucide-react";

const Programs = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const programs = [
    {
      title: "IoT & Robotics",
      description: "Connected sensors, wireless systems, and automated solutions",
      icon: <Layers className="h-12 w-12 text-slash-teal" />,
      sessions: 12,
      duration: "6 months"
    },
    {
      title: "3D Printing",
      description: "Prototyping, fabrication, and additive manufacturing",
      icon: <Box className="h-12 w-12 text-slash-teal" />,
      sessions: 10,
      duration: "4 months"
    },
    {
      title: "AR & VR",
      description: "Immersive experiences and augmented reality applications",
      icon: <Smartphone className="h-12 w-12 text-slash-teal" />,
      sessions: 12,
      duration: "6 months"
    },
    {
      title: "App Development",
      description: "Mobile application development for iOS and Android",
      icon: <Code className="h-12 w-12 text-slash-teal" />,
      sessions: 14,
      duration: "7 months"
    },
    {
      title: "Digital Marketing",
      description: "SEO, social media, ads strategy, and analytics",
      icon: <BarChart3 className="h-12 w-12 text-slash-teal" />,
      sessions: 10,
      duration: "5 months"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 bg-gradient-to-b from-white to-slate-50">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
          <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <span className="inline-block text-slash-teal font-medium text-lg mb-3 px-4 py-1 rounded-full bg-slash-teal/10">
                Transform Your Skills
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slash-blue mb-6 leading-tight">
                Our Learning <span className="text-slash-teal">Programs</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
                Comprehensive, hands-on learning experiences designed to transform beginners into confident practitioners
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  className="bg-gradient-to-r from-slash-teal to-emerald-500 hover:from-slash-teal/90 hover:to-emerald-600 text-white py-6 px-8 rounded-lg text-lg shadow-lg shadow-slash-teal/20 transition-all duration-300"
                  onClick={() => window.open("https://calendly.com", "_blank")}
                >
                  Schedule a Demo Class
                </Button>
              </div>
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

        {/* Programs Grid */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-3 text-slash-blue"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Explore Our Programs
            </motion.h2>

            <motion.p
              className="text-center text-slate-600 mb-14 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Choose from our wide range of technology training programs designed for all skill levels
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {programs.map((program, index) => (
                <motion.div key={index} variants={itemVariants} className="h-full">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 border-none overflow-hidden bg-white rounded-2xl shadow-lg group">
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-slash-teal to-emerald-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    <CardHeader>
                      <div className="mb-5 p-3 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 inline-block group-hover:bg-gradient-to-br group-hover:from-slash-teal/10 group-hover:to-emerald-50 transition-colors duration-300">
                        {program.icon}
                      </div>
                      <CardTitle className="text-2xl text-slash-blue group-hover:text-slash-teal transition-colors duration-300">
                        {program.title}
                      </CardTitle>
                      <CardDescription className="text-slate-600">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-slate-500 mb-4">
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {program.sessions} Sessions
                        </span>
                        <span className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                          </svg>
                          {program.duration}
                        </span>
                      </div>
                      <ul className="space-y-2 text-slate-600">
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-slash-teal mr-2"></div>
                          Hands-on projects
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-slash-teal mr-2"></div>
                          Expert mentorship
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-slash-teal mr-2"></div>
                          Industry-aligned skills
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-slate-100 hover:bg-slash-teal text-slate-700 hover:text-white transition-all duration-300 group-hover:bg-slash-teal">
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="py-16 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-5 z-0"></div>
          <div className="section-container relative z-10">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-slash-teal font-medium mb-3 px-4 py-1 rounded-full bg-slash-teal/10">
                  Learning Journey
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slash-blue mb-4">
                  Comprehensive Curriculum
                </h2>
                <p className="text-slate-600">
                  Our programs are designed to provide a complete learning journey from fundamentals to advanced concepts
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-slash-teal flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  IoT & Robotics Course Breakdown
                </h3>
                
                <div className="space-y-4">
                  {[
                    "Introduction to IoT & Robotics",
                    "Basic Electronics & Circuit Fundamentals",
                    "Microcontrollers & Programming Foundations",
                    "Sensors & Actuators",
                    "IoT Architecture & Communication Protocols",
                    "Robotics Kinematics & Movement",
                    "Cloud Integration & Data Visualization",
                    "Building a Basic Mobile Robot",
                    "Wireless Control & IoT Security Basics",
                    "Advanced Robotics Concepts",
                    "Project Building & Troubleshooting",
                    "Final Project Presentations"
                  ].map((session, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slash-teal/20 to-emerald-100 text-slash-teal flex items-center justify-center mr-4 font-semibold shadow-sm">
                        {index + 1}
                      </div>
                      <span className="text-slate-700 hover:text-slash-teal transition-colors duration-200">{session}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button variant="outline" className="flex items-center gap-2 border-slate-200 text-slash-teal hover:bg-slash-teal/5 hover:border-slash-teal/20">
                    <Download size={18} />
                    Download Curriculum PDF
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Blob decorations */}
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-slash-teal/10 to-emerald-100/20 rounded-full blur-3xl"></div>
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-gradient-to-br from-slash-teal/10 to-emerald-100/20 rounded-full blur-3xl"></div>
        </section>

        {/* Call to action section */}
        <section className="py-16 bg-gradient-to-br from-slash-blue to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10 z-0"></div>
          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
                <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                  Join thousands of students who have already transformed their skills with our hands-on programs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    className="bg-white text-slash-blue hover:bg-white/90 shadow-lg py-6 px-8 rounded-lg text-lg"
                    onClick={() => window.open("https://calendly.com", "_blank")}
                  >
                    Schedule a Free Demo Class
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 py-6 px-8 rounded-lg text-lg"
                  >
                    Browse All Programs
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Particle effect */}
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full">
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 8 + 2}px`,
                    height: `${Math.random() * 8 + 2}px`,
                    opacity: Math.random() * 0.5,
                    animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                  }}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programs;
