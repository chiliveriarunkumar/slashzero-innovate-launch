
import { GraduationCap, Rocket, Award, Users, Lightbulb } from "lucide-react";
import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface WhyItemProps {
  title: string;
  description: string;
  index: number;
  icon: React.ReactNode;
  iconBg: string;
}

const WhyItem = ({ title, description, index, icon, iconBg }: WhyItemProps) => {
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
    <Card 
      className="appear-animation bg-white border border-gray-100 hover:shadow-md transition-all duration-300"
      style={{ animationDelay: `${index * 150}ms` }}
      ref={itemRef}
    >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <div className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center`}>
              {icon}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slash-blue mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const WhySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const whyItems = [
    {
      title: "Industry-Aligned Training",
      description: "Our programs are designed in collaboration with industry leaders to ensure skills that are relevant and in-demand.",
      icon: <GraduationCap className="h-6 w-6 text-white" />,
      iconBg: "bg-blue-600"
    },
    {
      title: "Expert Mentors",
      description: "Learn from professionals with extensive real-world experience in their respective technology domains.",
      icon: <Users className="h-6 w-6 text-white" />,
      iconBg: "bg-purple-600"
    },
    {
      title: "Project-Based Learning",
      description: "Apply concepts through hands-on projects that simulate real-world challenges and build a practical portfolio.",
      icon: <Lightbulb className="h-6 w-6 text-white" />,
      iconBg: "bg-green-600"
    },
    {
      title: "Flexible & Scalable Programs",
      description: "Customizable learning paths tailored to individual needs, from beginners to advanced practitioners.",
      icon: <Rocket className="h-6 w-6 text-white" />,
      iconBg: "bg-yellow-500"
    },
    {
      title: "Continuous Career Development",
      description: "Ongoing support through career guidance, industry connections, and advanced skill development.",
      icon: <Award className="h-6 w-6 text-white" />,
      iconBg: "bg-pink-600"
    },
  ];

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
    <section className="py-20 bg-slash-lightGray">
      <div className="section-container">
        <h2 className="section-title appear-animation" ref={sectionRef}>
          Why <span className="text-slash-green">SlashZero</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyItems.map((item, index) => (
            <WhyItem
              key={index}
              title={item.title}
              description={item.description}
              index={index}
              icon={item.icon}
              iconBg={item.iconBg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
