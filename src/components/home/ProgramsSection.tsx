
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, CalendarDays, BookOpen, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  grade: string;
  duration: string;
  level: string;
  skills: string[];
}

const ProgramCard = ({ title, description, image, index, grade, duration, level, skills }: ProgramCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-viewport");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <Card 
      className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 appear-animation border border-slate-100"
      style={{ animationDelay: `${index * 150}ms` }}
      ref={cardRef}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-slash-teal px-3 py-1 rounded-full text-sm font-medium">
          {grade}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-slash-blue mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="grid grid-cols-2 gap-3 text-sm mb-5">
          <div className="flex items-center text-slate-600">
            <Clock className="h-4 w-4 mr-2 text-slash-teal" />
            {duration}
          </div>
          <div className="flex items-center text-slate-600">
            <GraduationCap className="h-4 w-4 mr-2 text-slash-teal" />
            {level}
          </div>
          <div className="flex items-center text-slate-600 col-span-2">
            <BookOpen className="h-4 w-4 mr-2 text-slash-teal" />
            Key Skills
          </div>
        </div>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span 
              key={i} 
              className="inline-flex items-center text-xs bg-slate-100 text-slate-700 px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
        
        <Button 
          variant="ghost" 
          className="text-slash-teal hover:text-slash-blue hover:bg-slash-lightGray flex items-center p-0"
          onClick={() => navigate('/programs')}
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

const ProgramsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-viewport");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const programs = [
    {
      title: "Introduction to IoT",
      grade: "6th Grade",
      description: "Explore basic IoT concepts and real-world applications using beginner-friendly tools and sensors.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      duration: "12 weeks",
      level: "Beginner",
      skills: ["Sensors", "Basic Circuits", "Problem Solving", "LED Projects"]
    },
    {
      title: "IoT & Robotics Basics",
      grade: "7th Grade",
      description: "Build on IoT knowledge and explore fundamental robotics concepts like sensors, actuators, and automation.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9ib3RpY3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      duration: "14 weeks",
      level: "Intermediate",
      skills: ["Actuators", "Motor Control", "Simple Automation", "Coding Basics"]
    },
    {
      title: "IoT, Robotics & 3D Printing",
      grade: "8th Grade",
      description: "Combine skills to design functional prototypes and learn the basics of 3D modeling and printing.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      duration: "16 weeks",
      level: "Intermediate",
      skills: ["3D Modeling", "Prototyping", "Integration", "Design Thinking"]
    },
    {
      title: "Product Design & Development",
      grade: "9th Grade",
      description: "Engage in project-based learning focusing on innovation, prototyping, and real-world product development.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2R1Y3QlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      duration: "16 weeks",
      level: "Advanced",
      skills: ["Innovation", "Project Management", "User Testing", "Full Prototype"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="section-title appear-animation mb-3 md:mb-0 text-left" ref={sectionRef}>
              STEM <span className="text-slash-teal">Training Programs</span>
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Comprehensive 2-hour weekly sessions with hands-on learning and mentorship for students in grades 6-9
            </p>
          </div>
          <Button 
            variant="ghost"
            className="text-slash-teal hover:text-slash-blue flex items-center mt-4 md:mt-0"
            onClick={() => navigate('/programs')}
          >
            View All Programs <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              image={program.image}
              index={index}
              grade={program.grade}
              duration={program.duration}
              level={program.level}
              skills={program.skills}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="gradient-btn text-base px-8 py-6 appear-animation" 
            style={{ animationDelay: '600ms' }}
            onClick={() => navigate('/programs')}
          >
            Explore All Programs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
