
import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      });
    }, 1000);
  };

  return (
    <section className="py-20 bg-slash-blue text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 200 + 20}px`,
                height: `${Math.random() * 200 + 20}px`,
                opacity: Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-6">
            <Mail className="h-6 w-6 text-slash-teal" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated with SlashZero</h2>
          <p className="text-lg text-white/80 mb-8">
            Sign up for our newsletter to get updates on our programs, resources, and exclusive event invites.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 focus:ring-slash-teal focus:border-slash-teal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-slash-teal hover:bg-slash-teal/90 text-white h-12"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-sm text-white/60 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
