import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { GraduationCap, Rocket, Users, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

interface JobCardProps {
  title: string;
  location: string;
  type: string;
  description: string;
  isNew?: boolean;
}

const JobCard = ({ title, location, type, description, isNew = false }: JobCardProps) => {
  const navigate = useNavigate();
  
  return (
    <Card className="w-full bg-white shadow-md hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-slash-blue">{title}</h3>
          {isNew && (
            <span className="bg-slash-purple text-white px-3 py-1 text-xs font-semibold rounded-full">
              New
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            {location}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            {type}
          </div>
        </div>
        <p className="text-gray-600 mb-5">{description}</p>
        <Button 
          className="bg-slash-purple hover:bg-slash-purple/90 text-white"
          onClick={() => navigate('/contact')}
        >
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
};

interface BenefitCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const BenefitCard = ({ icon, title, description }: BenefitCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="flex flex-col items-center text-center p-6"
  >
    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-slash-blue">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Career = () => {
  const navigate = useNavigate();
  
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-slash-blue via-blue-500 to-slash-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Want to Work With Us?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl max-w-3xl mx-auto mb-10 text-white/90"
            >
              We're building the future – and we need passionate minds. If you believe in empowering
              students and love working on exciting tech + ed projects, apply now.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Button 
                className="bg-white text-blue-600 hover:bg-white/90 px-8 py-3 text-lg rounded-full"
                onClick={() => navigate('/contact')}
              >
                Send Your CV to info@slashzero.in
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-slash-blue mb-6"
              >
                Why Join SlashZero?
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <BenefitCard
                icon={<GraduationCap className="h-8 w-8 text-purple-600" />}
                title="Meaningful Impact"
                description="Help shape the future of education and make a real difference in students' lives."
              />
              <BenefitCard
                icon={<Rocket className="h-8 w-8 text-purple-600" />}
                title="Innovation & Growth"
                description="Work with cutting-edge technologies and continuously develop your skills."
              />
              <BenefitCard
                icon={<Users className="h-8 w-8 text-purple-600" />}
                title="Collaborative Team"
                description="Join a diverse team of educators, technologists, and designers passionate about education."
              />
            </div>
          </div>
        </section>

        {/* Internship Program Section - Adding new section */}
        <section className="py-16 bg-slash-lightGray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-slash-blue mb-6"
              >
                Internship Program
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xl max-w-3xl mx-auto"
              >
                Join as an Intern for 6 Months, get trained on technology and become full-time employment
              </motion.p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 mb-8">
              <h3 className="text-2xl font-bold text-slash-blue mb-4">Program Details</h3>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p>6-month intensive training on cutting-edge technologies</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p>Hands-on project experience with real-world applications</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p>Mentorship from industry professionals</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-1 rounded-full mt-1 mr-3">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p>Opportunity for full-time employment upon successful completion</p>
                </li>
              </ul>
              <div className="flex justify-center mt-6">
                <Button 
                  className="bg-slash-blue hover:bg-slash-blue/90 text-white px-8 py-3"
                  onClick={() => navigate('/contact')}
                >
                  Apply for Internship
                </Button>
              </div>
            </div>
            
            <p className="text-center text-gray-600 italic">
              Please send your CV to info@slashzero.in with the subject line "Internship Application"
            </p>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-16 bg-slash-lightGray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-slash-blue mb-6"
              >
                Current Openings
              </motion.h2>
            </div>

            <div className="space-y-6">
              <JobCard
                title="Full Stack Developer"
                location="Hyderabad, India"
                type="Full-time"
                description="We're looking for a skilled Full Stack Developer with experience in React, Node.js, and database technologies to help build our educational platform."
                isNew={true}
              />
              
              <JobCard
                title="Graphic/UI Designer"
                location="Hyderabad, India"
                type="Full-time"
                description="Join our creative team to design engaging educational materials, user interfaces, and branding assets for our programs."
                isNew={true}
              />
              
              <JobCard
                title="Curriculum Developer"
                location="Remote"
                type="Full-time"
                description="Help us create innovative, hands-on curriculum for IoT, robotics, and programming courses for school students."
                isNew={true}
              />
              
              <JobCard
                title="Growth & Marketing Executive"
                location="Hyderabad, India"
                type="Full-time"
                description="Drive our marketing efforts to reach more schools and students with our innovative educational programs."
                isNew={true}
              />
              
              <JobCard
                title="School Partner Program Manager"
                location="Hyderabad, India"
                type="Full-time"
                description="Manage relationships with partner schools and help expand our educational programs to new institutions."
                isNew={true}
              />
            </div>
          </div>
        </section>

        {/* Other Opportunities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-slash-blue mb-6"
              >
                Other Opportunities
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slash-blue mb-4">Upload Resume</h3>
                  <p className="text-gray-600 mb-6">
                    Don't see a position that fits your skills? Upload your resume and we'll keep you in mind for future openings.
                  </p>
                  <Button variant="outline" className="w-full border-slash-blue text-slash-blue hover:bg-slash-blue/5">
                    Upload Resume
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slash-blue mb-4">Get Notified</h3>
                  <p className="text-gray-600 mb-6">
                    Sign up to receive notifications when new positions that match your interests become available.
                  </p>
                  <Button variant="outline" className="w-full border-slash-blue text-slash-blue hover:bg-slash-blue/5">
                    Subscribe
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slash-blue mb-4">Internships</h3>
                  <p className="text-gray-600 mb-6">
                    We offer internships for students and recent graduates looking to gain experience in edtech.
                  </p>
                  <Button variant="outline" className="w-full border-slash-blue text-slash-blue hover:bg-slash-blue/5">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 career-gradient text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Join Our Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl mb-8 max-w-3xl mx-auto"
            >
              Be part of a mission to transform education and prepare the next generation for the future of work.
            </motion.p>
            <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md text-lg">
              Apply Today
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Career;
