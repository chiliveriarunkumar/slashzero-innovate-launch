
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Book, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface ProgramCardProps {
  title: string;
  description: string;
  color: string;
  index: number;
  grade: string;
  duration: string;
  skills: string[];
  icon: React.ReactNode;
}

const ProgramCard = ({ 
  title, 
  description, 
  color, 
  index, 
  grade, 
  duration, 
  skills, 
  icon 
}: ProgramCardProps) => {
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
      className="overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 appear-animation border border-slate-100 h-full"
      style={{ animationDelay: `${index * 150}ms` }}
      ref={cardRef}
    >
      <div className={`p-6 ${color} text-white`}>
        <div className="h-10 w-10 bg-white/20 rounded-full flex items-center justify-center mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-1">{grade}</h3>
        <p className="font-medium">{title}</p>
      </div>
      <CardContent className="p-6">
        <p className="text-slate-600 mb-4">{description}</p>
        
        <div className="mb-4 flex items-center text-slate-700 text-sm">
          <Clock className="h-4 w-4 mr-2 text-slate-500" />
          {duration}
        </div>
        
        <div className="mb-5">
          <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Skills:</h4>
          <ul className="space-y-2">
            {skills.slice(0, 3).map((skill, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 mr-2 shrink-0" />
                <span className="text-sm text-slate-600">{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          variant="ghost" 
          className="text-slate-700 hover:text-slate-900 hover:bg-slate-100 flex items-center p-0"
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
      title: "Introduction to Internet of Things (IoT)",
      grade: "6th Grade",
      description: "Students begin their technology journey by exploring the fundamentals of IoT, understanding how everyday objects can connect and communicate.",
      color: "bg-blue-500",
      duration: "12 weeks (2h/week)",
      icon: <Book className="h-5 w-5" />,
      skills: [
        "Basic electronics and circuit concepts",
        "Introduction to sensors and data collection",
        "Simple programming with block-based interfaces"
      ]
    },
    {
      title: "Basics of IoT + Introduction to Robotics",
      grade: "7th Grade",
      description: "Building on their IoT foundation, students explore the exciting world of robotics, learning how to create simple automated systems.",
      color: "bg-teal-500",
      duration: "14 weeks (2h/week)",
      icon: <Book className="h-5 w-5" />,
      skills: [
        "Advanced sensors and actuators",
        "Introduction to microcontrollers",
        "Basic robotics concepts and movement"
      ]
    },
    {
      title: "IoT + Robotics + Introduction to 3D Printing",
      grade: "8th Grade",
      description: "Students advance their skills by combining IoT and robotics knowledge while learning to design and create physical objects through 3D printing.",
      color: "bg-purple-500",
      duration: "14 weeks (2h/week)",
      icon: <Book className="h-5 w-5" />,
      skills: [
        "Intermediate programming concepts",
        "Basics of 3D modeling and design",
        "Creating functional prototypes"
      ]
    },
    {
      title: "IoT + Robotics + 3D Printing + Product Design",
      grade: "9th Grade",
      description: "Students culminate their learning journey by engaging in complete product development cycles, from ideation to functional prototypes.",
      color: "bg-orange-500",
      duration: "16 weeks (2h/week)",
      icon: <Book className="h-5 w-5" />,
      skills: [
        "Product design methodology",
        "Advanced prototyping techniques",
        "Project management fundamentals"
      ]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="section-title appear-animation mb-3 md:mb-0 text-left" ref={sectionRef}>
              Technology Training for <span className="text-slash-teal">Grades 6-9</span>
            </h2>
            <p className="text-slate-600 max-w-2xl">
              Progressive, hands-on technology education with 2-hour weekly sessions and expert mentorship
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
              color={program.color}
              index={index}
              grade={program.grade}
              duration={program.duration}
              skills={program.skills}
              icon={program.icon}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="gradient-btn text-base px-8 py-6 appear-animation" 
            style={{ animationDelay: '600ms' }}
            onClick={() => navigate('/programs')}
          >
            Explore Full Curriculum
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
