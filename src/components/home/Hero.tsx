
import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden flex items-center">
      {/* Blue to teal gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-teal-500 z-0"></div>
      
      <div className="section-container relative z-10 text-center text-white">
        <div className="space-y-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Empowering Innovation through <span className="text-gradient bg-clip-text bg-gradient-to-r from-teal-300 via-teal-200 to-teal-300 text-transparent">Applied Technology</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Bridging the gap between theory and practical innovation in IoT, Robotics, AI, Design, and Development.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 pt-6"
          >
            <Button 
              className="bg-white text-blue-500 hover:bg-white/90 text-lg px-8 py-6 rounded-lg shadow-lg" 
              size="lg"
              onClick={() => navigate('/programs')}
            >
              🎓 Explore Programs
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 text-lg flex items-center gap-2 px-8 py-6"
              onClick={() => setVideoOpen(true)}
            >
              <Play className="h-5 w-5" />
              📺 Watch Intro Video
            </Button>
          </motion.div>
          
          {/* Bouncing down arrow */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle opacity-70">
            <svg 
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-white"
            >
              <path
                d="M7 13L12 18L17 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 6L12 11L17 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="SlashZero Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
