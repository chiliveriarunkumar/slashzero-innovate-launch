
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Play } from "lucide-react";

const GalleryVideos = () => {
  const videos = [
    {
      id: 1,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      title: "Introduction to IoT Development",
      description: "Learn the basics of Internet of Things development with practical examples."
    },
    {
      id: 2,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      title: "Robotics Workshop Highlights",
      description: "See our students building and programming robots in our workshop."
    },
    {
      id: 3,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      title: "AI Projects Showcase",
      description: "Discover amazing AI projects created by our students."
    },
    {
      id: 4,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      title: "Web Development Bootcamp",
      description: "A comprehensive overview of our web development training program."
    },
    {
      id: 5,
      youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
      title: "Student Success Stories",
      description: "Hear from our graduates about their journey and achievements."
    }
  ];

  const handleVideoPlay = (youtubeUrl: string) => {
    window.open(youtubeUrl, '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Educational Videos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our educational content and see student projects in action.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {videos.map((video) => (
                <CarouselItem key={video.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="p-0">
                      <div className="relative aspect-video overflow-hidden group cursor-pointer" onClick={() => handleVideoPlay(video.youtubeUrl)}>
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                            <Play className="h-6 w-6 text-blue-600 ml-1" />
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-800 mb-2">{video.title}</h3>
                        <p className="text-sm text-gray-600">{video.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};

export default GalleryVideos;
