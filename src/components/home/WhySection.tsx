
import { Check } from "lucide-react";
import { useEffect, useRef } from "react";

interface WhyItemProps {
  title: string;
  description: string;
  index: number;
}

const WhyItem = ({ title, description, index }: WhyItemProps) => {
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
      className={`bg-white rounded-xl shadow-md p-6 flex appear-animation`}
      style={{ animationDelay: `${index * 150}ms` }}
      ref={itemRef}
    >
      <div className="mr-4 mt-1">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-slash-blue to-slash-teal flex items-center justify-center text-white">
          <Check className="h-5 w-5" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-slash-blue mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const WhySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const whyItems = [
    {
      title: "Industry-Aligned Training",
      description: "Our programs are designed in collaboration with industry leaders to ensure skills that are relevant and in-demand.",
    },
    {
      title: "Expert Mentors",
      description: "Learn from professionals with extensive real-world experience in their respective technology domains.",
    },
    {
      title: "Project-Based Learning",
      description: "Apply concepts through hands-on projects that simulate real-world challenges and build a practical portfolio.",
    },
    {
      title: "Flexible & Scalable Programs",
      description: "Customizable learning paths tailored to individual needs, from beginners to advanced practitioners.",
    },
    {
      title: "Continuous Career Development",
      description: "Ongoing support through career guidance, industry connections, and advanced skill development.",
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
          Why <span className="text-slash-teal">SlashZero</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyItems.map((item, index) => (
            <WhyItem
              key={index}
              title={item.title}
              description={item.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
