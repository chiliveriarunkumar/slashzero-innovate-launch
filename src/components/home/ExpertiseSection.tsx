import { useEffect, useRef } from "react";
import {
  Computer,
  Robot,
  Code,
} from "lucide-react";
import { ArVr, MobileApps, CloudComputing } from "@/components/ui/lucide-extended";
import { useNavigate } from "react-router-dom";

const technologies = [
  {
    id: 1,
    title: "IoT & Robotics",
    icon: <Robot className="h-8 w-8 text-blue-600" />
  },
  {
    id: 2,
    title: "AR & VR",
    icon: <ArVr className="h-8 w-8 text-purple-600" />
  },
  {
    id: 3,
    title: "3D Printing",
    icon: <Code className="h-8 w-8 text-green-600" />
  },
  {
    id: 4,
    title: "Drone Technology",
    icon: <Robot className="h-8 w-8 text-orange-600" />
  },
  {
    id: 5,
    title: "Mobile Apps",
    icon: <MobileApps className="h-8 w-8 text-red-600" />
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: <Code className="h-8 w-8 text-pink-600" />
  },
  {
    id: 7,
    title: "AI & ML",
    icon: <Robot className="h-8 w-8 text-purple-600" />
  },
  {
    id: 8,
    title: "Digital Marketing",
    icon: <Computer className="h-8 w-8 text-blue-600" />
  },
  {
    id: 9,
    title: "Cloud Computing",
    icon: <CloudComputing className="h-8 w-8 text-blue-600" />
  },
];

const TechItem = ({ title, icon, index }: { title: string; icon: React.ReactNode; index: number }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  
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
    
    if (itemRef.current) {
      observer.observe(itemRef.current);
    }
    
    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300 appear-animation"
      style={{ animationDelay: `${index * 100}ms` }}
      ref={itemRef}
    >
      <div className="w-16 h-16 rounded-full bg-slate-50 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-medium text-slash-blue">{title}</h3>
    </div>
  );
};

const ExpertiseSection = () => {
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
  
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <h2 
          className="section-title appear-animation text-slash-purple"
          ref={sectionRef}
        >
          Our Expertise
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 appear-animation">
          We specialize in a wide range of cutting-edge technologies to provide comprehensive learning solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechItem 
              key={tech.id}
              title={tech.title}
              icon={tech.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
