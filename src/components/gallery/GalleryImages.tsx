
import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const GalleryImages = () => {
  const [visibleImages, setVisibleImages] = useState(6); // Show 6 images initially (3x2)
  
  // Images will be fetched from public/gallery-images/ folder
  // You can add more images to this array as you upload them to the folder
  const allImages = [
    {
      id: 1,
      src: "/gallery-images/program-1.jpg",
      alt: "Past Program 1"
    },
    {
      id: 2,
      src: "/gallery-images/program-2.jpg", 
      alt: "Past Program 2"
    },
    {
      id: 3,
      src: "/gallery-images/program-3.jpg",
      alt: "Past Program 3"
    },
    {
      id: 4,
      src: "/gallery-images/program-4.jpg",
      alt: "Past Program 4"
    },
    {
      id: 5,
      src: "/gallery-images/program-5.jpg",
      alt: "Past Program 5"
    },
    {
      id: 6,
      src: "/gallery-images/program-6.jpg",
      alt: "Past Program 6"
    },
    {
      id: 7,
      src: "/gallery-images/program-7.jpg",
      alt: "Past Program 7"
    },
    {
      id: 8,
      src: "/gallery-images/program-8.jpg",
      alt: "Past Program 8"
    },
    {
      id: 9,
      src: "/gallery-images/program-9.jpg",
      alt: "Past Program 9"
    },
    {
      id: 10,
      src: "/gallery-images/program-10.jpg",
      alt: "Past Program 10"
    },
    {
      id: 11,
      src: "/gallery-images/program-11.jpg",
      alt: "Past Program 11"
    },
    {
      id: 12,
      src: "/gallery-images/program-12.jpg",
      alt: "Past Program 12"
    }
  ];

  const displayedImages = allImages.slice(0, visibleImages);
  const hasMoreImages = visibleImages < allImages.length;

  const loadMoreImages = () => {
    setVisibleImages(prev => Math.min(prev + 6, allImages.length));
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Images Grid - 3 columns, 2 rows initially */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        e.currentTarget.src = "https://images.unsplash.com/photo-1649972904349-6e44c42644a7";
                      }}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreImages && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              onClick={loadMoreImages}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium"
            >
              Load More Images
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GalleryImages;
