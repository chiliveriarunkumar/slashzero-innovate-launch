
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Smart Plant Monitor",
    grade: "6th Grade",
    description: "An IoT device that monitors soil moisture and sunlight, alerting when plants need attention.",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Automated Sorting Robot",
    grade: "7th Grade",
    description: "A robot that can identify and sort different colored objects using sensors and simple mechanics.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Weather Station with 3D Printed Housing",
    grade: "8th Grade",
    description: "A weather monitoring system with custom-designed 3D printed enclosure for outdoor durability.",
    image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Interactive Smart Mirror",
    grade: "8th Grade", 
    description: "A reflective display that shows time, weather, and personalized information using embedded electronics.",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Assistive Device for Visually Impaired",
    grade: "9th Grade",
    description: "A wearable tool that uses sensors to detect obstacles and provide haptic feedback to users.",
    image: "https://images.unsplash.com/photo-1521405617584-1d9867aecad3?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Sustainable Energy Monitor",
    grade: "9th Grade",
    description: "A system that tracks and visualizes energy usage, promoting conservation through real-time feedback.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
  }
];

const ProjectCard = ({ title, grade, description, image, index }: { 
  title: string;
  grade: string;
  description: string;
  image: string;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
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
    <div 
      ref={cardRef}
      className="bg-white rounded-lg shadow-md overflow-hidden appear-animation"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <Badge className="mb-2 bg-blue-100 text-blue-800 font-medium">
          {grade}
        </Badge>
        <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const StudentProjects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
        <div className="text-center mb-2">
          <Badge className="bg-blue-100 text-blue-800 font-medium">
            Student Innovations
          </Badge>
        </div>
        
        <h2 
          ref={sectionRef} 
          className="section-title appear-animation text-slate-800"
        >
          Sample Student Projects
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 appear-animation">
          See what students can create through our progressive curriculum
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              grade={project.grade}
              description={project.description}
              image={project.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProjects;
