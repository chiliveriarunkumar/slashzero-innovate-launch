
import { useEffect, useRef, useState } from "react";
import {
  Bot,
  Code,
  Computer,
} from "lucide-react";
import { ArVr, MobileApps, CloudComputing } from "@/components/ui/lucide-extended";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const technologies = [
  {
    id: 1,
    title: "IoT & Robotics",
    icon: <Bot className="h-8 w-8 text-blue-600" />,
    description: "Build smart devices and autonomous systems that connect the physical and digital worlds. Learn embedded programming, sensor integration, and automation.",
    image: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    title: "AR & VR",
    icon: <ArVr className="h-8 w-8 text-purple-600" />,
    description: "Create immersive experiences that transform how we interact with digital content. Master 3D modeling, spatial computing, and interactive design.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    title: "3D Printing",
    icon: <Code className="h-8 w-8 text-green-600" />,
    description: "Turn digital designs into physical objects. Learn CAD modeling, material science, and bring your ideas to life with additive manufacturing.",
    image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 4,
    title: "Drone Technology",
    icon: <Bot className="h-8 w-8 text-orange-600" />,
    description: "Master aerial robotics and capture stunning perspectives. Learn flight dynamics, autonomous navigation, and applications in photography and delivery.",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    title: "Mobile Apps",
    icon: <MobileApps className="h-8 w-8 text-red-600" />,
    description: "Create applications that billions use daily. Master UI/UX design, cross-platform development, and learn to deploy to app stores worldwide.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 6,
    title: "UI/UX Design",
    icon: <Code className="h-8 w-8 text-pink-600" />,
    description: "Shape how users interact with technology. Learn human-centered design principles, wireframing, prototyping, and usability testing.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 7,
    title: "AI & ML",
    icon: <Bot className="h-8 w-8 text-purple-600" />,
    description: "Develop systems that learn and adapt. Master algorithms, neural networks, and create solutions for predictive analytics, computer vision, and NLP.",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 8,
    title: "Digital Marketing",
    icon: <Computer className="h-8 w-8 text-blue-600" />,
    description: "Drive business growth with data-driven strategies. Learn SEO, social media marketing, analytics, and content creation in the digital landscape.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 9,
    title: "Cloud Computing",
    icon: <CloudComputing className="h-8 w-8 text-blue-600" />,
    description: "Build scalable infrastructure that powers modern applications. Learn AWS, Azure, or Google Cloud, containerization, and serverless architecture.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
];

const TechItem = ({ title, icon, description, image, index }: { 
  title: string; 
  icon: React.ReactNode; 
  description: string;
  image: string;
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
      <div className="relative h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300"
          style={{ 
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4 text-white">
            <h3 className="text-lg font-medium text-white flex items-center gap-2">
              <span className="bg-blue-600 p-2 rounded-full">{icon}</span>
              {title}
            </h3>
          </div>
        </div>
      </div>
      <CardContent>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        <div className="mt-4">
          <button className="text-blue-600 text-sm font-medium hover:underline">
            Learn more →
          </button>
        </div>
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
