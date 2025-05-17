
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slash-blue text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Slash<span className="text-slash-teal">Zero</span>
            </h3>
            <p className="text-gray-300">
              Empowering innovation through applied technology and hands-on learning experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-slash-teal transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-slash-teal transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-slash-teal transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-slash-teal transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-slash-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-slash-teal transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/mentoring" className="text-gray-300 hover:text-slash-teal transition-colors">
                  Mentoring
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-slash-teal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-slash-teal transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/programs/iot" className="text-gray-300 hover:text-slash-teal transition-colors">
                  IoT & Robotics
                </Link>
              </li>
              <li>
                <Link to="/programs/ar-vr" className="text-gray-300 hover:text-slash-teal transition-colors">
                  AR & VR
                </Link>
              </li>
              <li>
                <Link to="/programs/3d-printing" className="text-gray-300 hover:text-slash-teal transition-colors">
                  3D Printing
                </Link>
              </li>
              <li>
                <Link to="/programs/app-dev" className="text-gray-300 hover:text-slash-teal transition-colors">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/programs/digital-marketing" className="text-gray-300 hover:text-slash-teal transition-colors">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
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

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} SlashZero. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
