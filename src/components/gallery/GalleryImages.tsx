
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const GalleryImages = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "Student working on laptop",
      title: "Student Projects"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Laptop computer",
      title: "Technology Setup"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Circuit board",
      title: "Electronics Workshop"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Java programming",
      title: "Programming Session"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "MacBook Pro",
      title: "Development Environment"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      alt: "Robot near wall",
      title: "Robotics Project"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      alt: "Matrix code",
      title: "AI Development"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      alt: "Laptop on surface",
      title: "Workspace"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
            Project Images
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A visual showcase of our students' innovative projects and learning environments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-800">{image.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryImages;
