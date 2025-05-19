
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  CalendarDays, 
  Clock, 
  GraduationCap, 
  BookOpen, 
  Users, 
  CheckCircle2,
  Rocket,
  Monitor,
  Wrench,
  Terminal
} from "lucide-react";

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
      title: "Introduction to Internet of Things (IoT)",
      grade: "6th Grade",
      level: "Beginner",
      description: "Students focus on understanding basic IoT concepts and real-world applications using beginner-friendly tools and sensors. They'll learn to connect simple devices and create basic automation.",
      duration: "12 Weeks",
      sessions: "24 Sessions (2h/week)",
      nextBatch: "June 15, 2025",
      features: ["Hands-on Projects", "Take-Home Kit", "Group Challenges", "End-of-Course Showcase"],
      skills: ["Basic Electronics", "Simple Sensors", "LED Control", "Simple Programming"],
      projects: ["Smart LED Light System", "Temperature Monitoring", "Simple Automation"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "IoT & Introduction to Robotics",
      grade: "7th Grade",
      level: "Beginner to Intermediate",
      description: "Building on IoT knowledge, students explore fundamental robotics concepts including sensors, actuators, and simple automation. They'll create devices that can sense and interact with their environment.",
      duration: "14 Weeks",
      sessions: "28 Sessions (2h/week)",
      nextBatch: "July 5, 2025",
      features: ["Advanced Components", "Robotics Kits", "Team Projects", "Mini Competitions"],
      skills: ["Motor Control", "Actuators", "Simple Robotics", "Block Programming"],
      projects: ["Obstacle Avoiding Robot", "Remote Controlled Device", "Automated Plant Watering System"],
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "IoT, Robotics & 3D Printing",
      grade: "8th Grade",
      level: "Intermediate",
      description: "Students combine their skills to design functional prototypes and learn the basics of 3D modeling and printing. This program integrates multiple technologies to create more complex and innovative solutions.",
      duration: "16 Weeks",
      sessions: "32 Sessions (2h/week)",
      nextBatch: "August 10, 2025",
      features: ["3D Printing Access", "Advanced Components", "Design Software", "Engineering Principles"],
      skills: ["3D Modeling", "CAD Design", "Integration", "Text-based Programming"],
      projects: ["Custom Robot Parts", "Smart Home Model", "Interactive Prototype"],
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Product Design & Development",
      grade: "9th Grade",
      level: "Advanced",
      description: "Engage in integrated project-based learning focusing on innovation, prototyping, and real-world product development cycles. Students work on end-to-end projects with industry-standard methodologies.",
      duration: "16 Weeks",
      sessions: "32 Sessions (2h/week)",
      nextBatch: "June 1, 2025",
      features: ["Portfolio Development", "Mentorship", "Industry Feedback", "Innovation Showcase"],
      skills: ["Project Management", "User Testing", "Advanced Programming", "Problem-Solving"],
      projects: ["Full Product Prototype", "Market Analysis", "Presentation to Industry Experts"],
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3QlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const upcomingWorkshops = [
    {
      title: "Introduction to Arduino",
      date: "May 25, 2025",
      time: "10:00 AM - 1:00 PM",
      instructor: "Dr. James Miller",
      price: "Free",
      spots: "Limited to 20 participants",
      grade: "5th-7th Grade"
    },
    {
      title: "3D Design Fundamentals",
      date: "June 5, 2025",
      time: "2:00 PM - 5:00 PM",
      instructor: "Emily Zhang",
      price: "$49",
      spots: "15 spots left",
      grade: "6th-9th Grade"
    },
    {
      title: "Robotics Challenge Day",
      date: "June 12, 2025",
      time: "9:00 AM - 4:00 PM",
      instructor: "Alex Rivera",
      price: "$79",
      spots: "10 spots left",
      grade: "7th-9th Grade"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slash-blue to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slash-teal/20 to-transparent"></div>
          <div className="section-container relative z-10 pt-20 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-slash-teal bg-slash-teal/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
                STEM Education Programs
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Building Future <br />
                <span className="text-slash-teal">Innovators & Problem Solvers</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Our grade-specific training programs provide students with the skills and knowledge to thrive in the digital world through hands-on learning and mentorship.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="bg-slash-teal hover:bg-slash-teal/90 text-white py-6 px-8 text-lg rounded-lg shadow-lg shadow-slash-teal/20 flex items-center gap-2"
                  onClick={() => window.open("https://calendly.com", "_blank")}
                >
                  Schedule a Free Consultation
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 py-6 px-8 rounded-lg text-lg"
                  onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Programs
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

        {/* Program Overview */}
        <section className="py-16 bg-white">
          <div className="section-container">
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-block text-slash-teal bg-slash-teal/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Program Structure
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slash-blue mb-6">
                  Training Program Structure
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto">
                  Our comprehensive training programs are designed for students in grades 6-9, featuring 2 hours of weekly instruction over 12-16 weeks with hands-on mentorship from industry experts.
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  icon: <Monitor className="h-8 w-8 text-slash-teal" />,
                  title: "2-Hour Weekly Sessions",
                  description: "Focused learning sessions designed to maximize engagement and retention"
                },
                {
                  icon: <CalendarDays className="h-8 w-8 text-slash-teal" />,
                  title: "12-16 Week Programs",
                  description: "Comprehensive curriculum with progression through grade levels"
                },
                {
                  icon: <Users className="h-8 w-8 text-slash-teal" />,
                  title: "Small Class Sizes",
                  description: "Maximum 15 students per class for personalized attention"
                },
                {
                  icon: <Rocket className="h-8 w-8 text-slash-teal" />,
                  title: "Project-Based Learning",
                  description: "Hands-on projects that build real-world skills and portfolios"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 text-center"
                >
                  <div className="mb-4 mx-auto bg-slash-teal/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slash-blue mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-slash-lightGray p-8 rounded-2xl border border-slate-200"
            >
              <h3 className="text-2xl font-bold text-slash-blue mb-6 text-center">Grade-Based Progression</h3>
              <div className="space-y-6">
                {[
                  {
                    grade: "6th Grade",
                    title: "Introduction to Internet of Things (IoT)",
                    description: "Focus on understanding basic IoT concepts and real-world applications using beginner-friendly tools and sensors."
                  },
                  {
                    grade: "7th Grade",
                    title: "Basics of IoT + Introduction to Robotics",
                    description: "Build on IoT knowledge and explore fundamental robotics concepts like sensors, actuators, and simple automation."
                  },
                  {
                    grade: "8th Grade",
                    title: "IoT + Robotics (Intermediate) + Introduction to 3D Printing",
                    description: "Combine skills from previous grades to design functional prototypes, and learn the basics of 3D modeling and printing."
                  },
                  {
                    grade: "9th Grade",
                    title: "IoT + Robotics + 3D Printing + Product Design & Development",
                    description: "Engage in integrated project-based learning focusing on innovation, prototyping, and real-world product development cycles."
                  }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row p-4 bg-white rounded-xl shadow-sm gap-4 border border-slate-100">
                    <div className="md:w-1/6 flex items-center justify-center">
                      <span className="bg-slash-blue text-white text-lg font-bold py-2 px-4 rounded-lg">
                        {item.grade}
                      </span>
                    </div>
                    <div className="md:w-5/6">
                      <h4 className="text-lg font-semibold text-slash-blue mb-2">{item.title}</h4>
                      <p className="text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Programs Grid */}
        <section id="programs" className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block text-slash-teal bg-slash-teal/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slash-blue mb-4">
                Comprehensive Training Programs
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore our grade-specific training programs designed to build foundational skills in technology, engineering, and innovation
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {programs.map((program, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                      <img 
                        src={program.image} 
                        alt={program.title} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slash-teal px-3 py-1 rounded-full text-sm font-medium">
                        {program.grade}
                      </div>
                    </div>
                    
                    <div className="p-6 md:w-3/5">
                      <div className="mb-4">
                        <span className="text-sm text-slate-500 mb-2 flex items-center">
                          <GraduationCap className="h-4 w-4 mr-1" />
                          {program.level}
                        </span>
                        <h3 className="text-xl font-bold text-slash-blue mb-2">
                          {program.title}
                        </h3>
                        <p className="text-slate-600 mb-4">
                          {program.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-5">
                        <div className="flex items-center text-slate-600">
                          <Clock className="h-4 w-4 mr-2 text-slash-teal" />
                          {program.duration}
                        </div>
                        <div className="flex items-center text-slate-600">
                          <BookOpen className="h-4 w-4 mr-2 text-slash-teal" />
                          {program.sessions}
                        </div>
                        <div className="flex items-center text-slate-600 col-span-2">
                          <CalendarDays className="h-4 w-4 mr-2 text-slash-teal" />
                          Next Batch: {program.nextBatch}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-slash-blue mb-2">Key Projects:</h4>
                        <div className="flex flex-wrap gap-2">
                          {program.projects.map((project, i) => (
                            <span 
                              key={i} 
                              className="inline-flex items-center text-xs bg-slash-teal/10 text-slate-700 px-2 py-1 rounded-full"
                            >
                              <CheckCircle2 className="h-3 w-3 mr-1 text-slash-teal" />
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-auto">
                        <Button 
                          className="w-full bg-slash-blue hover:bg-slash-blue/90 text-white"
                          onClick={() => window.open("https://calendly.com", "_blank")}
                        >
                          Enroll Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Upcoming Workshops */}
        <section className="py-16 bg-slash-lightGray">
          <div className="section-container">
            <div className="text-center mb-12">
              <span className="inline-block text-slash-teal bg-slash-teal/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Limited Seats
              </span>
              <h2 className="text-3xl font-bold text-slash-blue mb-4">
                Upcoming Workshops
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Join our specialized workshops to get hands-on training and insights from industry experts
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingWorkshops.map((workshop, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-slate-100"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-semibold text-slash-blue">{workshop.title}</h3>
                      <span className="text-xs font-medium bg-slash-teal/10 text-slash-teal px-2 py-1 rounded-full">
                        {workshop.grade}
                      </span>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-slate-600">
                        <CalendarDays className="h-4 w-4 mr-2 text-slash-teal" />
                        {workshop.date}
                      </div>
                      
                      <div className="flex items-center text-sm text-slate-600">
                        <Clock className="h-4 w-4 mr-2 text-slash-teal" />
                        {workshop.time}
                      </div>
                      
                      <div className="flex items-center text-sm text-slate-600">
                        <Users className="h-4 w-4 mr-2 text-slash-teal" />
                        {workshop.instructor}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span className="font-medium text-slash-blue">{workshop.price}</span>
                      <span className="text-sm text-slate-500">{workshop.spots}</span>
                    </div>
                    
                    <Button 
                      className="w-full bg-slash-teal hover:bg-slash-teal/90 text-white"
                      onClick={() => window.open("https://calendly.com", "_blank")}
                    >
                      Register Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Approach */}
        <section className="py-20 bg-white">
          <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  <span className="inline-block text-slash-teal bg-slash-teal/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
                    Our Learning Approach
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slash-blue mb-6">
                    Building <span className="text-slash-teal">Future-Ready Skills</span>
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Our training programs focus on project-based learning that builds technical skills while fostering creativity, problem-solving, and collaboration – essential skills for the future workforce.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      {
                        title: "Hands-on Learning",
                        description: "Students spend 80% of their time building real projects"
                      },
                      {
                        title: "Expert Mentorship",
                        description: "Learn from industry professionals with real-world experience"
                      },
                      {
                        title: "Progressive Curriculum",
                        description: "Each grade builds on previous knowledge with increasing complexity"
                      },
                      {
                        title: "Portfolio Development",
                        description: "Students create tangible projects to showcase their skills"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex">
                        <div className="h-10 w-10 rounded-full bg-slash-teal/10 text-slash-teal flex items-center justify-center mr-4 shrink-0">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-medium text-slash-blue mb-1">{item.title}</h3>
                          <p className="text-slate-600">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZHMlMjB0ZWNobm9sb2d5fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                    alt="Students Learning Robotics" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <div className="flex items-start">
                    <div className="text-4xl font-bold text-slash-teal mr-3">94%</div>
                    <p className="text-sm text-slate-600">of our students continue with STEM subjects in high school and beyond</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gradient-to-br from-slash-blue to-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-pattern opacity-10"></div>
          <div className="section-container relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Enroll Your Child?</h2>
                <p className="text-lg text-white/80 mb-8">
                  Get in touch with our education team to learn more about our programs, discuss your child's interests, and find the perfect fit for their learning journey.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button 
                    className="bg-slash-teal hover:bg-slash-teal/90 text-white py-6 px-8 text-lg rounded-lg shadow-lg shadow-slash-teal/20 flex items-center gap-2"
                    onClick={() => window.open("https://calendly.com", "_blank")}
                  >
                    Schedule a Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10 py-6 px-8 text-lg rounded-lg"
                    onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View All Programs
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
