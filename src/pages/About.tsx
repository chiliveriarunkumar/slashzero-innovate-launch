
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Award, Star, Users, Laptop, HardDrive } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  // Scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-slash-blue to-slash-teal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About SlashZero</h1>
                <p className="text-lg opacity-90 mb-6">
                  We're on a mission to bridge the gap between theory and practical innovation in technology education.
                </p>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <p className="italic">
                    "SlashZero was founded on the belief that hands-on learning and real-world application are the keys to mastering technology skills."
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                  alt="SlashZero Team" 
                  className="rounded-xl shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="bg-slash-lightGray p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-slash-blue p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slash-blue mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                  SlashZero delivers hands-on, practical education and mentorship in emerging technologies, empowering learners from school students to professionals. We believe that technology education should be accessible, engaging, and directly applicable to real-world scenarios.
                </p>
              </motion.div>
              <motion.div
                className="bg-slash-lightGray p-8 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-slash-teal p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slash-blue mb-4">Our Vision</h2>
                <p className="text-gray-700 leading-relaxed">
                  Creating innovation-driven individuals equipped with industry-ready skills, confident in shaping the future of technology. We envision a world where technology education breaks traditional barriers, fostering a community of lifelong learners and problem solvers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-slash-blue mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Our Expertise
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                We specialize in a wide range of cutting-edge technologies to provide comprehensive learning solutions.
              </motion.p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: "IoT & Robotics", icon: HardDrive, color: "bg-blue-100 text-blue-600" },
                { name: "AR & VR", icon: Laptop, color: "bg-purple-100 text-purple-600" },
                { name: "3D Printing", icon: Users, color: "bg-green-100 text-green-600" },
                { name: "Drone Technology", icon: Users, color: "bg-amber-100 text-amber-600" },
                { name: "Mobile Apps", icon: Laptop, color: "bg-red-100 text-red-600" },
                { name: "UI/UX Design", icon: Users, color: "bg-pink-100 text-pink-600" },
                { name: "AI & ML", icon: HardDrive, color: "bg-indigo-100 text-indigo-600" },
                { name: "Digital Marketing", icon: Users, color: "bg-cyan-100 text-cyan-600" },
                { name: "Web Development", icon: Laptop, color: "bg-teal-100 text-teal-600" },
                { name: "Cloud Computing", icon: HardDrive, color: "bg-sky-100 text-sky-600" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-xl shadow-sm text-center card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className={`${item.color} p-3 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-slash-blue">{item.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What Makes Us Different Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-slash-blue mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                What Makes Us Different
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our unique approach to technology education sets us apart from traditional learning institutions.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Customized Learning Solutions",
                  description: "We tailor our programs to meet the specific needs and goals of our learners, ensuring a personalized educational experience."
                },
                {
                  title: "Real-World Mentorship",
                  description: "Our mentors are industry practitioners who bring real-world experience and insights to guide your learning journey."
                },
                {
                  title: "State-of-the-Art Labs",
                  description: "Access to cutting-edge equipment and facilities that provide hands-on experience with the latest technologies."
                },
                {
                  title: "Career-Aligned Training",
                  description: "Our programs are designed in collaboration with industry partners to ensure you develop skills that are in demand."
                },
                {
                  title: "Comprehensive Industry Partnerships",
                  description: "We maintain strong relationships with leading technology companies, creating opportunities for networking and placement."
                },
                {
                  title: "Continuous Innovation",
                  description: "Our curriculum evolves constantly to incorporate emerging technologies and industry best practices."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-slash-lightGray p-6 rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-start space-x-3 mb-4">
                    <div className="bg-slash-teal rounded-full p-1 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slash-blue">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 pl-7">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-slash-blue mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Meet Our Team
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our passionate team of educators, technologists, and industry experts are committed to your success.
              </motion.p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Rahul Sharma",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
                },
                {
                  name: "Anjali Patel",
                  role: "Head of Education",
                  image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                },
                {
                  name: "Vikram Singh",
                  role: "Technical Director",
                  image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80"
                },
                {
                  name: "Priya Mehta",
                  role: "Head of Partnerships",
                  image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md overflow-hidden card-hover"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-bold text-slash-blue mb-1">{member.name}</h3>
                    <p className="text-slash-teal">{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-slash-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Join the SlashZero Community
            </motion.h2>
            <motion.p 
              className="text-lg opacity-90 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Take the first step towards mastering innovative technologies with our expert-led programs and mentorship.
            </motion.p>
            <motion.div
              className="space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button className="bg-white text-slash-blue hover:bg-white/90 px-8 py-6 text-lg rounded-full">
                Explore Our Programs
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full">
                Contact Us
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
