import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'Express.js', level: 85 },
        { name: 'MongoDB', level: 75 },
        { name: 'PostgreSQL', level: 70 },
      ],
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 80 },
        { name: 'VS Code', level: 95 },
      ],
    },
  ];

  return (
    <section id="skills" ref={ref} className="section-padding">
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            My <span className="gradient-text">Skills</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Here are the technologies and tools I work with to bring ideas to life.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                darkMode
                  ? 'bg-dark-800 border border-dark-700'
                  : 'bg-white border border-gray-200 shadow-lg'
              }`}
            >
              <h3 className={`text-xl font-semibold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : { opacity: 0, x: -20 }
                    }
                    transition={{
                      delay: 0.5 + categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-sm font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`w-full h-2 rounded-full ${
                      darkMode ? 'bg-dark-700' : 'bg-gray-200'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          isInView
                            ? { width: `${skill.level}%` }
                            : { width: 0 }
                        }
                        transition={{
                          delay: 0.7 + categoryIndex * 0.2 + skillIndex * 0.1,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="h-2 rounded-full bg-gradient-to-r from-primary-600 to-purple-600"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <motion.h3
            variants={itemVariants}
            className={`text-2xl font-semibold text-center mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Additional Skills
          </motion.h3>
          
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              'Responsive Design',
              'API Development',
              'Database Design',
              'Version Control',
              'Testing',
              'Performance Optimization',
              'SEO',
              'Agile Methodologies',
              'Project Management',
              'Team Collaboration',
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  darkMode
                    ? 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

