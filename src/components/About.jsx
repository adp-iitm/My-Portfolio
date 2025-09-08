import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImage from '../assets/profile.jpg';


const About = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '5+', label: 'Projects Completed' },
  
    { number: '10+', label: 'Technologies' },
  ];

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Image */}
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-full h-96 rounded-2xl overflow-hidden ${
                  darkMode ? 'bg-dark-700' : 'bg-gray-200'
                }`}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-600 to-purple-600 flex items-center justify-center text-white text-6xl font-bold">
                  Aditya pareek
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold"
              >
                Adi
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="order-1 lg:order-2">
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              Passionate about delivering measurable business impact, I specialize in engineering intelligent, scalable machine learning systems that solve complex problems and enhance user experiences. My work transforms cutting-edge research into tangible products that drive growth and innovation.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className={`text-lg mb-8 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Preview */}
            <motion.div variants={itemVariants}>
              <h3 className={`text-xl font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                What I Do
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Machine Learning Model Development','Frontend Development', 'Backend Development'].map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      darkMode
                        ? 'bg-dark-700 text-gray-300'
                        : 'bg-gray-100 text-gray-700'
                    }`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

