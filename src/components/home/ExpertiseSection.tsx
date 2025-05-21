
import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Code,
  Computer,
  Rocket,
  Cpu,
  Lightbulb
} from "lucide-react";
import { ArVr } from "@/components/ui/lucide-extended";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

// Limited to requested technologies only
const technologies = [
  {
    id: 1,
    title: "IoT & Robotics",
    icon: <Bot className="h-8 w-8 text-white" />,
    description: "Build smart devices and autonomous systems that connect the physical and digital worlds.",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    iconBg: "bg-blue-600"
  },
  {
    id: 2,
    title: "AR/VR Technology",
    icon: <ArVr className="h-8 w-8 text-white" />,
    description: "Create immersive experiences that transform how we interact with digital content.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    iconBg: "bg-purple-600"
  },
  {
    id: 3,
    title: "3D Printing",
    icon: <Cpu className="h-8 w-8 text-white" />,
    description: "Turn digital designs into physical objects with additive manufacturing.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    iconBg: "bg-green-600"
  },
  {
    id: 4,
    title: "Drone Technology",
    icon: <Rocket className="h-8 w-8 text-white" />,
    description: "Master aerial robotics for photography, delivery, and autonomous navigation.",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    iconBg: "bg-orange-600"
  },
  {
    id: 5,
    title: "Innovative Design",
    icon: <Lightbulb className="h-8 w-8 text-white" />,
    description: "Product Development, PCB & Semi-Conductors design for real-world applications.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    iconBg: "bg-pink-600"
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: <Code className="h-8 w-8 text-white" />,
    description: "Shape how users interact with technology through human-centered design principles.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    iconBg: "bg-indigo-600"
  },
  {
    id: 7,
    title: "Digital Marketing",
    icon: <Computer className="h-8 w-8 text-white" />,
    description: "Drive business growth with data-driven strategies and content creation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    iconBg: "bg-blue-600"
  }
];

const TechItem = ({ title, icon, description, image, iconBg, index }: { 
  title: string; 
  icon: React.ReactNode; 
  description: string;
  image: string;
  iconBg: string;
  index: number 
}) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
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
    <Card 
      className="overflow-hidden transition-all duration-300 appear-animation hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
      ref={itemRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ 
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white w-full">
            <h3 className="text-xl font-medium text-white flex items-center gap-2">
              <span className={`${iconBg} p-2 rounded-full flex items-center justify-center`}>{icon}</span>
              {title}
            </h3>
          </div>
        </div>
      </div>
      <CardContent>
        <p className="text-gray-600 mt-2">{description}</p>
      </CardContent>
    </Card>
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
    <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
      <div className="section-container">
        <h2 
          className="section-title appear-animation"
          ref={sectionRef}
        >
          Technology Expertise
        </h2>
        
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 appear-animation">
          Discover cutting-edge technologies that are shaping our future. Our programs equip you with the skills needed to excel in these innovative fields.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <TechItem 
              key={tech.id}
              title={tech.title}
              icon={tech.icon}
              description={tech.description}
              image={tech.image}
              iconBg={tech.iconBg}
              index={index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            className="gradient-btn"
            onClick={() => navigate('/programs')}
          >
            Explore All Programs
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
