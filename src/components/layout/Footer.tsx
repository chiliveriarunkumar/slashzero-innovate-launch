
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Slash<span className="text-emerald-400">Zero</span>
            </h3>
            <p className="text-emerald-100">
              Empowering innovation through applied technology and hands-on learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-emerald-100 hover:text-emerald-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-emerald-100 hover:text-emerald-400 transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/mentoring" className="text-emerald-100 hover:text-emerald-400 transition-colors">
                  Mentoring
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-emerald-100 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs" className="text-emerald-100 hover:text-emerald-400 transition-colors">
                  IoT & Robotics
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-emerald-100 hover:text-emerald-400 transition-colors">
                  AR & VR
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-emerald-100 hover:text-emerald-400 transition-colors">
                  3D Printing
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-emerald-100 hover:text-emerald-400 transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-emerald-100 hover:text-emerald-400 transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-emerald-100">
              <div className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 shrink-0 text-emerald-400" />
                <span>
                  Plot no - 84, Phase 2, 401 Area Sathya Residency, Bachupally, Hyderabad, Telangana, India
                </span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-emerald-400" />
                <a href="tel:+918712166256" className="hover:text-emerald-400 transition-colors">
                  +91-87121 66256
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-emerald-400" />
                <a href="mailto:info@slashzero.in" className="hover:text-emerald-400 transition-colors">
                  info@slashzero.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-800 text-center text-emerald-300 text-sm">
          <p>© {new Date().getFullYear()} SlashZero. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
