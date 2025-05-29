
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryImages from "@/components/gallery/GalleryImages";
import GalleryVideos from "@/components/gallery/GalleryVideos";

const Gallery = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-500 to-teal-500 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gallery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Explore our collection of project images and educational videos showcasing innovation in technology.
            </p>
          </div>
        </section>

        {/* Images Section */}
        <GalleryImages />

        {/* Videos Section */}
        <GalleryVideos />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
