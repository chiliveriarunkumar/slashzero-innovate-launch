
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import WhySection from "@/components/home/WhySection";
import CategoriesSection from "@/components/home/CategoriesSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import ExpertiseSection from "@/components/home/ExpertiseSection";

const Index = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Hero />
        <ExpertiseSection />
        <WhySection />
        <CategoriesSection />
        <ProgramsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
