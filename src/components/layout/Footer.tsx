
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background pattern */}
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
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Slash<span className="text-slash-teal">Zero</span>
            </h3>
            <p className="text-slate-300">
              Empowering innovation through applied technology and hands-on learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-slash-teal transition-colors p-2 bg-white/5 rounded-full">
                <Facebook size={18} />
              </a>
              <a href="#" className="hover:text-slash-teal transition-colors p-2 bg-white/5 rounded-full">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-slash-teal transition-colors p-2 bg-white/5 rounded-full">
                <Linkedin size={18} />
              </a>
              <a href="#" className="hover:text-slash-teal transition-colors p-2 bg-white/5 rounded-full">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-slate-300 hover:text-slash-teal transition-colors flex items-center">
                  <span className="mr-2 text-xs">→</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-slate-300 hover:text-slash-teal transition-colors flex items-center">
                  <span className="mr-2 text-xs">→</span> Programs
                </Link>
              </li>
              <li>
                <Link to="/mentoring" className="text-slate-300 hover:text-slash-teal transition-colors flex items-center">
                  <span className="mr-2 text-xs">→</span> Mentoring
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-slash-teal transition-colors flex items-center">
                  <span className="mr-2 text-xs">→</span> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-slate-300 hover:text-slash-teal transition-colors flex items-center">
                  <span className="mr-2 text-xs">→</span> IoT & Robotics
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-slate-300 hover:text-slash-teal transition-colors flex items-center">
                  <span className="mr-2 text-xs">→</span> AR & VR
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-slate-300 hover:text-slash-teal transition-colors flex items-center">
                  <span className="mr-2 text-xs">→</span> 3D Printing
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-slate-300 hover:text-slash-teal transition-colors flex items-center">
                  <span className="mr-2 text-xs">→</span> App Development
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-slate-300 hover:text-slash-teal transition-colors flex items-center">
                  <span className="mr-2 text-xs">→</span> Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-slash-teal" />
                <span>
                  Plot no - 84, Phase 2, 401 Area Sathya Residency, Bachupally, Hyderabad, Telangana, India
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-slash-teal" />
                <a href="tel:+918712166256" className="hover:text-slash-teal transition-colors">
                  +91-87121 66256
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-slash-teal" />
                <a href="mailto:info@slashzero.in" className="hover:text-slash-teal transition-colors">
                  info@slashzero.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} SlashZero. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

