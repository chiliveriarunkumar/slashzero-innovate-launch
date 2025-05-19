
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };
  
  return (
    <section className="bg-blue-600 text-white py-16">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stay Updated with Latest Technologies
          </h2>
          <p className="text-lg mb-8 text-white/80">
            Subscribe to our newsletter to receive updates about our programs, events, and technology trends.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow px-4 py-3 rounded-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-white text-blue-600 hover:bg-white/90 px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2"
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
              <Send size={18} />
            </Button>
          </form>
          
          <p className="text-sm mt-4 text-white/60">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
