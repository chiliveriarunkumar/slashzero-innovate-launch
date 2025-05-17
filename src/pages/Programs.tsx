
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
  CheckCircle2 
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
      title: "IoT & Robotics Fundamentals",
      category: "Technology",
      level: "Beginner to Intermediate",
      description: "Build IoT devices and robotic systems from scratch with hands-on projects and real-world applications.",
      duration: "12 Weeks",
      sessions: "24 Sessions",
      nextBatch: "June 15, 2025",
      features: ["Hands-on Projects", "Industry Expert Guidance", "Certification", "Job Placement Assistance"],
      skills: ["Circuit Design", "Microcontrollers", "Sensor Integration", "AI Basics"],
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlydHVhbCUyMHJlYWxpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Advanced Web Development",
      category: "Programming",
      level: "Intermediate to Advanced",
      description: "Master modern web frameworks, APIs, and cloud deployment with focus on real-world application development.",
      duration: "10 Weeks",
      sessions: "20 Sessions",
      nextBatch: "July 5, 2025",
      features: ["Portfolio Building", "Code Reviews", "Mentorship", "Real Client Projects"],
      skills: ["React", "Node.js", "Database Design", "AWS/Azure"],
      image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Digital Marketing Mastery",
      category: "Marketing",
      level: "All Levels",
      description: "Learn strategic digital marketing including SEO, social media, content marketing, and analytics to grow online presence.",
      duration: "8 Weeks",
      sessions: "16 Sessions",
      nextBatch: "May 25, 2025",
      features: ["Campaign Planning", "Growth Strategies", "Platform Mastery", "Analytics"],
      skills: ["SEO", "Content Marketing", "Social Media", "Google Analytics"],
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Data Science & Analytics",
      category: "Technology",
      level: "Intermediate",
      description: "Dive into data analysis, machine learning, and visualization techniques to extract insights from complex datasets.",
      duration: "14 Weeks",
      sessions: "28 Sessions",
      nextBatch: "August 10, 2025",
      features: ["Data Projects", "ML Models", "Visualization Tools", "Business Applications"],
      skills: ["Python", "Statistical Analysis", "ML Algorithms", "Data Visualization"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "UI/UX Design Bootcamp",
      category: "Design",
      level: "Beginner to Intermediate",
      description: "Create user-centered designs with focus on usability, accessibility, and engaging visual experiences.",
      duration: "10 Weeks",
      sessions: "20 Sessions",
      nextBatch: "June 1, 2025",
      features: ["Design Portfolio", "User Research", "Prototyping", "Industry Feedback"],
      skills: ["Figma", "User Research", "Design Systems", "Prototyping"],
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVpJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Blockchain Technology",
      category: "Technology",
      level: "Advanced",
      description: "Explore blockchain development, smart contracts, and decentralized applications with hands-on projects.",
      duration: "12 Weeks",
      sessions: "24 Sessions",
      nextBatch: "July 20, 2025",
      features: ["Smart Contracts", "dApp Development", "Security Practices", "Industry Integration"],
      skills: ["Solidity", "Web3.js", "DeFi Concepts", "Security Protocols"],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  const upcomingWorkshops = [
    {
      title: "AI for Business Innovation",
      date: "May 25, 2025",
      time: "10:00 AM - 1:00 PM",
      instructor: "Dr. Sarah Chen",
      price: "Free",
      spots: "Limited to 40 participants"
    },
    {
      title: "Cybersecurity Essentials",
      date: "June 5, 2025",
      time: "2:00 PM - 5:00 PM",
      instructor: "Michael Rivera",
      price: "$49",
      spots: "25 spots left"
    },
    {
      title: "Cloud Architecture Workshop",
      date: "June 12, 2025",
      time: "9:00 AM - 4:00 PM",
      instructor: "Priya Sharma",
      price: "$79",
      spots: "10 spots left"
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
                Professional Development Programs
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Future with Our<br />
                <span className="text-slash-teal">Specialized Training Programs</span>
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                Join our industry-recognized training programs designed to equip you with in-demand skills and practical experience for the modern workplace.
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
                  Browse All Programs
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

        {/* Featured Stats */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-slash-blue mb-2">6+</div>
                <p className="text-slate-600">Training Programs</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-slash-blue mb-2">5,000+</div>
                <p className="text-slate-600">Students Trained</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-slash-blue mb-2">85%</div>
                <p className="text-slate-600">Job Placement Rate</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-slash-blue mb-2">20+</div>
                <p className="text-slate-600">Industry Partners</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Programs Grid */}
        <section id="programs" className="py-20 bg-white">
          <div className="section-container">
            <div className="text-center mb-16">
              <span className="inline-block text-slash-teal bg-slash-teal/10 px-4 py-1 rounded-full text-sm font-medium mb-4">
                Our Offerings
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slash-blue mb-4">
                Professional Training Programs
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Elevate your career with our comprehensive training programs designed by industry experts with a focus on practical, job-ready skills.
              </p>
            </div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={program.image} 
                      alt={program.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slash-teal px-3 py-1 rounded-full text-sm font-medium">
                      {program.category}
                    </div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
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
                    
                    <div className="grid grid-cols-2 gap-3 text-sm mb-5">
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
                      <h4 className="text-sm font-semibold text-slash-blue mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature, i) => (
                          <span 
                            key={i} 
                            className="inline-flex items-center text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full"
                          >
                            <CheckCircle2 className="h-3 w-3 mr-1 text-slash-teal" />
                            {feature}
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
                    <h3 className="text-lg font-semibold text-slash-blue mb-3">{workshop.title}</h3>
                    
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

        {/* Why Choose Us */}
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
                    Why Choose Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slash-blue mb-6">
                    Training That Makes a <span className="text-slash-teal">Real Difference</span>
                  </h2>
                  <p className="text-slate-600 mb-8">
                    Our training programs are different because they focus on practical skills, real-world projects, and job readiness. We don't just teach theory - we prepare you to excel in your career.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      {
                        title: "Industry-Expert Instructors",
                        description: "Learn from professionals with years of real-world experience"
                      },
                      {
                        title: "Project-Based Learning",
                        description: "Build a portfolio of projects that showcase your new skills"
                      },
                      {
                        title: "Small Batch Sizes",
                        description: "Personalized attention with maximum 25 students per batch"
                      },
                      {
                        title: "Placement Assistance",
                        description: "Get help with resume building, interviews, and job placement"
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                    alt="Training Session" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <div className="flex items-start">
                    <div className="text-4xl font-bold text-slash-teal mr-3">97%</div>
                    <p className="text-sm text-slate-600">of our students recommend our programs to others</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
                <p className="text-lg text-white/80 mb-8">
                  Get in touch with our admissions team to learn more about our programs, tuition options, and how we can help advance your career.
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
