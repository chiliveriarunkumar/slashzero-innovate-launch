
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check if a nav link is active
  const isActive = (path: string) => location.pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Mentoring", path: "/mentoring" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 z-50">
          <span className="text-2xl font-bold">
            Slash<span className="text-slash-teal">Zero</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`font-medium transition-colors duration-300 relative py-2 ${
                  isActive(link.path) 
                    ? "text-slash-teal" 
                    : "text-slate-700 hover:text-slash-teal"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-slash-teal rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-4 z-40">
          <Button 
            variant="outline" 
            className="rounded-full px-6 font-medium border-slash-teal text-slash-teal hover:bg-slash-teal/5"
          >
            Log In
          </Button>
          <Button 
            className="bg-gradient-to-r from-slash-teal to-emerald-500 hover:from-slash-teal/90 hover:to-emerald-600 text-white rounded-full px-6 font-medium transition-all duration-300"
            onClick={() => window.open("https://calendly.com", "_blank")}
          >
            Join Free Class
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-slash-teal focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-4 py-6 space-y-4">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`font-medium block py-2 ${
                      isActive(link.path)
                        ? "text-slash-teal"
                        : "text-slate-700 hover:text-slash-teal"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col space-y-3">
              <Button 
                variant="outline" 
                className="w-full rounded-full border-slash-teal text-slash-teal hover:bg-slash-teal/5"
              >
                Log In
              </Button>
              <Button 
                className="w-full bg-gradient-to-r from-slash-teal to-emerald-500 hover:from-slash-teal/90 hover:to-emerald-600 text-white rounded-full transition-all duration-300"
                onClick={() => {
                  window.open("https://calendly.com", "_blank");
                  setIsMenuOpen(false);
                }}
              >
                Join Free Class
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
