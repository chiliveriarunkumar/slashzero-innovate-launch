import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Calendar, Book, Award, CheckCircle2, Rocket, Download, Lightbulb } from "lucide-react";
import StudentProjects from "@/components/home/StudentProjects";
import { Link } from "react-router-dom";

const Programs = () => {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20 lg:py-32">
          <div className="section-container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl mx-auto"
            >
              <span className="inline-block text-slash-teal bg-slash-teal/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
                School Program
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Technology Training for{" "}
                <span className="bg-gradient-to-r from-blue-600 to-slash-teal bg-clip-text text-transparent">
                  Grades 6-9
                </span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
                Empowering young minds with hands-on technology education through progressive, age-appropriate curriculum
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-slash-teal hover:opacity-90 text-white py-6 px-8 text-lg rounded-lg shadow-lg shadow-slash-teal/20"
                  >
                    Enroll Your School
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-slate-300 text-slate-700 hover:bg-slate-50 py-6 px-8 rounded-lg text-lg flex items-center gap-2"
                  onClick={() => {
                    // In a real app, this would trigger a file download
                    // For now, we'll just show a toast message
                    alert("Curriculum download initiated.");
                  }}
                >
                  <Download className="h-5 w-5" />
                  Download Curriculum
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Program Structure */}
        <section className="py-20 bg-white" id="program-structure">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block text-indigo-500 bg-indigo-50 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Program Structure
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Comprehensive Learning Journey
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Our grade-specific curriculum builds progressive technology skills through hands-on, project-based learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  icon: <Clock className="h-8 w-8 text-blue-600" />,
                  title: "2 Hours Weekly",
                  description: "Focused sessions designed to fit into school schedules"
                },
                {
                  icon: <Calendar className="h-8 w-8 text-blue-600" />,
                  title: "12-16 Weeks",
                  description: "Comprehensive program that spans one academic term"
                },
                {
                  icon: <Users className="h-8 w-8 text-blue-600" />,
                  title: "Expert Mentors",
                  description: "Hands-on guidance from industry professionals"
                },
                {
                  icon: <Award className="h-8 w-8 text-blue-600" />,
                  title: "Project Showcase",
                  description: "Culminates in a student innovation exhibition"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center"
                >
                  <div className="mb-4 mx-auto bg-blue-50 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Progressive Learning Path */}
        <section className="py-20 bg-slate-50" id="curriculum">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block text-green-500 bg-green-50 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Grade-Specific Curriculum
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Progressive Learning Path
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Our curriculum builds on previous knowledge, introducing new concepts as students advance through grades
              </p>
            </div>

            {/* Grade 6 */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 bg-blue-500 p-12 text-white flex flex-col justify-center">
                    <div className="mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Book className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">6th Grade</h3>
                    <h4 className="text-xl font-medium mb-6">Introduction to Internet of Things (IoT)</h4>
                    <p className="text-white/90">
                      Students begin their technology journey by exploring the fundamentals of IoT, understanding how everyday objects can connect and communicate.
                    </p>
                  </div>
                  
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">What Students Will Learn</h3>
                    <ul className="space-y-4">
                      {[
                        "Basic electronics and circuit concepts",
                        "Introduction to sensors and data collection",
                        "Simple programming with block-based interfaces",
                        "Creating basic IoT projects with beginner-friendly tools",
                        "Understanding real-world IoT applications",
                        "Problem-solving through technology"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center text-blue-600">
                        <Book className="h-5 w-5 mr-2" />
                        <span className="font-medium">12 Weeks Program</span>
                      </div>
                      <Button variant="ghost" className="text-blue-600">
                        View Sample Projects <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Grade 7 */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 bg-teal-500 p-12 text-white flex flex-col justify-center">
                    <div className="mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Rocket className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">7th Grade</h3>
                    <h4 className="text-xl font-medium mb-6">Basics of IoT + Introduction to Robotics</h4>
                    <p className="text-white/90">
                      Building on their IoT foundation, students explore the exciting world of robotics, learning how to create simple automated systems.
                    </p>
                  </div>
                  
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">What Students Will Learn</h3>
                    <ul className="space-y-4">
                      {[
                        "Advanced sensors and actuators",
                        "Introduction to microcontrollers",
                        "Basic robotics concepts and movement",
                        "Simple automation projects",
                        "Combining IoT and robotics for smart solutions",
                        "Collaborative problem-solving"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center text-teal-600">
                        <Book className="h-5 w-5 mr-2" />
                        <span className="font-medium">14 Weeks Program</span>
                      </div>
                      <Button variant="ghost" className="text-teal-600">
                        View Sample Projects <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Grade 8 */}
            <div className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 bg-purple-500 p-12 text-white flex flex-col justify-center">
                    <div className="mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Rocket className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">8th Grade</h3>
                    <h4 className="text-xl font-medium mb-6">IoT + Robotics (Intermediate) + Introduction to 3D Printing</h4>
                    <p className="text-white/90">
                      Students advance their skills by combining IoT and robotics knowledge while learning to design and create physical objects through 3D printing.
                    </p>
                  </div>
                  
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">What Students Will Learn</h3>
                    <ul className="space-y-4">
                      {[
                        "Intermediate programming concepts",
                        "Advanced robotics mechanisms",
                        "Basics of 3D modeling and design",
                        "3D printing fundamentals and techniques",
                        "Creating functional prototypes",
                        "Integrating IoT, robotics, and 3D printing"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center text-purple-600">
                        <Book className="h-5 w-5 mr-2" />
                        <span className="font-medium">14 Weeks Program</span>
                      </div>
                      <Button variant="ghost" className="text-purple-600">
                        View Sample Projects <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Grade 9 */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md"
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-2/5 bg-orange-500 p-12 text-white flex flex-col justify-center">
                    <div className="mb-4 w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Lightbulb className="h-8 w-8" />
                    </div>
                    <h3 className="text-3xl font-bold mb-2">9th Grade</h3>
                    <h4 className="text-xl font-medium mb-6">IoT + Robotics + 3D Printing + Product Design & Development</h4>
                    <p className="text-white/90">
                      Students culminate their learning journey by engaging in complete product development cycles, from ideation to functional prototypes.
                    </p>
                  </div>
                  
                  <div className="lg:w-3/5 p-8 lg:p-12">
                    <h3 className="text-xl font-bold text-slate-800 mb-6">What Students Will Learn</h3>
                    <ul className="space-y-4">
                      {[
                        "Product design methodology",
                        "User-centered design principles",
                        "Advanced prototyping techniques",
                        "Project management fundamentals",
                        "Real-world problem-solving",
                        "Presentation and documentation skills"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-3 shrink-0" />
                          <span className="text-slate-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center text-orange-600">
                        <Book className="h-5 w-5 mr-2" />
                        <span className="font-medium">16 Weeks Program</span>
                      </div>
                      <Button variant="ghost" className="text-orange-600">
                        View Sample Projects <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block text-orange-500 bg-orange-50 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Methodology
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                Hands-on Learning Approach
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                Our teaching methodology focuses on practical experience, creative problem-solving, and collaborative learning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Project-Based Learning",
                  description: "Students learn by doing, working on real projects that solve actual problems. This approach helps them develop critical thinking and practical skills while seeing the real-world impact of their work."
                },
                {
                  title: "Collaborative Teams",
                  description: "Students work in small teams, learning to communicate effectively, share responsibilities, and combine their strengths. This mirrors real-world technology development environments."
                },
                {
                  title: "Expert Mentorship",
                  description: "Our industry-experienced mentors guide students through challenges, providing insights and feedback. This mentorship model helps students develop both technical skills and professional approaches."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-sm border border-slate-100"
                >
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Student Projects Section - Moved from home page to here */}
        <StudentProjects />

        {/* Call to action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-slate-900 text-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the SlashZero Community</h2>
                <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                  Take the first step towards mastering innovative technologies with our expert-led programs and mentorship.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact">
                    <Button 
                      className="bg-white text-blue-600 hover:bg-white/90 py-6 px-8 text-lg rounded-lg shadow-lg"
                    >
                      Explore Our Programs
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10 py-6 px-8 text-lg rounded-lg flex items-center gap-2"
                    >
                      <Download className="h-5 w-5" />
                      Download Information Packet
                    </Button>
                  </Link>
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
