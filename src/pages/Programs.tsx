
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
      icon: <Layers className="h-12 w-12 text-emerald-500" />,
      sessions: 12,
      duration: "6 months"
    },
    {
      title: "3D Printing",
      description: "Prototyping, fabrication, and additive manufacturing",
      icon: <Box className="h-12 w-12 text-emerald-500" />,
      sessions: 10,
      duration: "4 months"
    },
    {
      title: "AR & VR",
      description: "Immersive experiences and augmented reality applications",
      icon: <Smartphone className="h-12 w-12 text-emerald-500" />,
      sessions: 12,
      duration: "6 months"
    },
    {
      title: "App Development",
      description: "Mobile application development for iOS and Android",
      icon: <Code className="h-12 w-12 text-emerald-500" />,
      sessions: 14,
      duration: "7 months"
    },
    {
      title: "Digital Marketing",
      description: "SEO, social media, ads strategy, and analytics",
      icon: <BarChart3 className="h-12 w-12 text-emerald-500" />,
      sessions: 10,
      duration: "5 months"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20 bg-gradient-to-b from-white to-emerald-50">
        {/* Hero Section */}
        <section className="py-12 md:py-20">
          <div className="section-container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800 mb-6">
                Our Learning Programs
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive, hands-on learning experiences designed to transform beginners into confident practitioners
              </p>
              <div className="flex justify-center">
                <Button 
                  className="bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-700 hover:to-teal-600 text-white py-6 px-8 rounded-lg text-lg"
                >
                  Schedule a Demo Class
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Explore Our Programs
            </motion.h2>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {programs.map((program, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-emerald-100">
                    <CardHeader>
                      <div className="mb-4">{program.icon}</div>
                      <CardTitle className="text-2xl text-emerald-700">{program.title}</CardTitle>
                      <CardDescription className="text-gray-600">{program.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between text-sm text-gray-500 mb-4">
                        <span>{program.sessions} Sessions</span>
                        <span>{program.duration}</span>
                      </div>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                          Hands-on projects
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                          Expert mentorship
                        </li>
                        <li className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
                          Industry-aligned skills
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
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
        <section className="py-16 bg-emerald-50">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
                  Comprehensive Curriculum
                </h2>
                <p className="text-gray-600">
                  Our programs are designed to provide a complete learning journey from fundamentals to advanced concepts
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white rounded-xl shadow-md p-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-emerald-700">Example: IoT & Robotics Course Breakdown</h3>
                
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
                      <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mr-4 font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{session}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <Button variant="outline" className="flex items-center gap-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                    <Download size={18} />
                    Download Curriculum PDF
                  </Button>
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

export default Programs;
