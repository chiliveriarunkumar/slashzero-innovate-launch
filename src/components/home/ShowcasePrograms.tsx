
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const programs = [
  {
    id: 1,
    title: "IoT & Robotics",
    description: "Learn sensors, microcontrollers, wireless control",
    image: "/lovable-uploads/652c8bbc-192a-4aee-80ff-a6045193451e.png",
    badge: "Popular",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 2,
    title: "App & Web Dev",
    description: "Create real-world apps using Flutter & React",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    badge: "Beginner Friendly",
    badgeColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 3,
    title: "Creative Design",
    description: "Branding, print, UI/UX projects with Figma",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    badge: "High Demand",
    badgeColor: "bg-orange-100 text-orange-800"
  },
  {
    id: 4,
    title: "Digital Marketing",
    description: "SEO, Paid Ads, Email & LinkedIn strategy",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    badge: "Career Ready",
    badgeColor: "bg-green-100 text-green-800"
  }
];

const ProgramCard = ({ 
  title, 
  description, 
  image, 
  badge, 
  badgeColor, 
  index 
}: { 
  title: string; 
  description: string; 
  image: string; 
  badge: string; 
  badgeColor: string; 
  index: number; 
}) => {
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
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          <Badge className={`${badgeColor} font-medium`}>
            {badge}
          </Badge>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button 
          variant="outline" 
          className="w-full border-slate-300 hover:bg-slate-50"
          onClick={() => navigate('/programs')}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

const ShowcasePrograms = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="section-container">
        <h2 
          ref={sectionRef} 
          className="section-title appear-animation text-slash-purple"
        >
          Showcase Programs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {programs.map((program, index) => (
            <ProgramCard
              key={program.id}
              title={program.title}
              description={program.description}
              image={program.image}
              badge={program.badge}
              badgeColor={program.badgeColor}
              index={index}
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            className="gradient-btn appear-animation" 
            style={{ animationDelay: '600ms' }}
            onClick={() => navigate('/programs')}
          >
            See All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcasePrograms;
