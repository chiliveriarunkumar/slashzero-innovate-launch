
import { useEffect, useRef } from "react";
import { ArrowRight, Settings, Palette, Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  items: string[];
  index: number;
}

const Category = ({ icon, title, color, items, index }: CategoryProps) => {
  const categoryRef = useRef<HTMLDivElement>(null);
  
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
    
    if (categoryRef.current) {
      observer.observe(categoryRef.current);
    }
    
    return () => {
      if (categoryRef.current) {
        observer.unobserve(categoryRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:transform hover:-translate-y-1 appear-animation"
      style={{ animationDelay: `${index * 200}ms` }}
      ref={categoryRef}
    >
      <div className={`w-14 h-14 rounded-lg ${color} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h3 className="text-2xl font-semibold text-slash-blue mb-4">{title}</h3>
      <ul className="space-y-3 mb-6">
        {items.map((item, i) => (
          <li key={i} className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-slash-teal mr-2"></span>
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
      <Button variant="ghost" className="text-slash-teal hover:text-slash-blue hover:bg-slash-lightGray mt-2 flex items-center">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

const CategoriesSection = () => {
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

  const categories = [
    {
      icon: <Settings className="h-8 w-8 text-white" />,
      title: "🔧 Build",
      color: "bg-gradient-to-r from-blue-600 to-blue-800",
      items: ["IoT & Robotics", "App & Web Development", "Drone Tech"]
    },
    {
      icon: <Palette className="h-8 w-8 text-white" />,
      title: "🎨 Create",
      color: "bg-gradient-to-r from-slash-teal to-emerald-700",
      items: ["Graphic & UI/UX Design", "3D Printing", "AR & VR"]
    },
    {
      icon: <Megaphone className="h-8 w-8 text-white" />,
      title: "📣 Market",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      items: ["Digital Marketing", "AI Integration", "Brand Strategy"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title appear-animation" ref={sectionRef}>
          Popular Learning <span className="text-slash-teal">Categories</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Category
              key={index}
              icon={category.icon}
              title={category.title}
              color={category.color}
              items={category.items}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button className="gradient-btn text-base px-8 py-6 appear-animation" style={{ animationDelay: '600ms' }}>
            📘 Browse All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
