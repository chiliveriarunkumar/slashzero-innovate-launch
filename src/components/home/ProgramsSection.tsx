
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const ProgramCard = ({ title, description, image, index }: ProgramCardProps) => {
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
      className="rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-all duration-300 appear-animation"
      style={{ animationDelay: `${index * 150}ms` }}
      ref={cardRef}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slash-blue mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="ghost" className="text-slash-teal hover:text-slash-blue hover:bg-slash-lightGray flex items-center p-0">
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const ProgramsSection = () => {
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

  const programs = [
    {
      title: "IoT & Robotics",
      description: "Learn to build connected sensors, wireless systems, and automated robots with hands-on projects.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW90fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "3D Printing",
      description: "Master prototyping and fabrication techniques using cutting-edge 3D printing technology.",
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBwcmludGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "AR & VR",
      description: "Create immersive experiences and applications using augmented and virtual reality technologies.",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlydHVhbCUyMHJlYWxpdHl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Drone Technologies",
      description: "Develop skills in aerial systems, drone programming, and analytics for various applications.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRyb25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Digital Marketing",
      description: "Learn effective strategies for SEO, social media, and advertising to grow digital presence.",
      image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section className="py-20 bg-slash-lightGray">
      <div className="section-container">
        <h2 className="section-title appear-animation" ref={sectionRef}>
          Showcase <span className="text-slash-teal">Programs</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              image={program.image}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="gradient-btn text-base px-8 py-6 appear-animation" style={{ animationDelay: '600ms' }}>
            Explore All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
