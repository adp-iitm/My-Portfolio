import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Github, ExternalLink, Code, Palette } from 'lucide-react';

const Projects = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [activeCategory, setActiveCategory] = useState("All");

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

  const projects = [
    {
      title: 'AI/ML Surveillance & Attendance Platform',
      description:
        'Role-based web platform using AI/ML to transform live camera feeds into actionable insights. Reduced manual surveillance and attendance logging by 70%, improving operational efficiency.',
      image: '📹',
      technologies: ['AI/ML', 'React', 'Node.js', 'OpenCV', 'PostgreSQL'],
      github: 'https://github.com/adp-iitm/VisionCapture',
      demo: 'https://your-live-demo-link.com/ai-surveillance', // 🔗 replace with real demo URL
      category: 'Full Stack',
      icon: Code,
    },
    {
      title: 'Cricket Match Prediction System',
      description:
        'Data-driven system that simulates full scorecards using player stats, pitch conditions, and historical match data. Achieved 80% prediction accuracy with real-time strategic insights.',
      image: '🏏',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Matplotlib'],
      github: 'https://github.com/adp-iitm/cricket_predictor',
      demo: 'https://your-live-demo-link.com/cricket-predictor', // 🔗 replace with real demo URL
      category: 'Backend',
      icon: Code,
    },
    {
      title: 'TDS Data Analyst Agent',
      description:
        'AI-powered data analysis web app built with FastAPI and LangChain using Google Gemini. Handles user questions, datasets, visualizations, and secure sandboxed code execution.',
      image: '🤖',
      technologies: ['FastAPI', 'Python', 'LangChain', 'Gemini Pro', 'Pandas', 'Matplotlib'],
      github: 'https://github.com/adp-iitm/tds_project2',
      demo: 'https://tds-project2-vqxd.onrender.com/', // ✅ already live
      category: 'Full Stack',
      icon: Code,
    },
    {
      title: 'Portfolio Website',
      description:
        'A modern, responsive portfolio built with React and Framer Motion. Features smooth animations, dark mode, and showcases projects and skills.',
      image: '🎨',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/adp-iitm/My-Portfolio',
      demo: 'https://adityapareek.vercel.app/', // ✅ already live
      category: 'Frontend',
      icon: Palette,
    },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="section-padding">
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
            My <span className="gradient-text">Projects</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Here are some of my recent projects that showcase my skills and
            experience.
          </motion.p>
        </motion.div>

        {/* Project Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-primary-600 text-white"
                  : darkMode
                  ? "bg-dark-700 text-gray-300 hover:bg-dark-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, rotate: [0, -0.25, 0.25, 0] }}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                darkMode
                  ? "bg-dark-800 border border-dark-700"
                  : "bg-white border border-gray-200 shadow-lg"
              }`}
            >
              {/* Project Image */}
              <div
                className={`h-48 flex items-center justify-center text-6xl ${
                  darkMode ? "bg-dark-700" : "bg-gray-100"
                }`}
              >
                <motion.span
                  initial={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {project.image}
                </motion.span>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <project.icon size={20} className="text-primary-600" />
                  <span
                    className={`text-sm font-medium px-3 py-1 rounded-full ${
                      darkMode
                        ? "bg-dark-700 text-gray-300"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3
                  className={`text-xl font-semibold mb-3 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {project.title}
                </h3>

                <p
                  className={`text-sm mb-4 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs px-2 py-1 rounded ${
                        darkMode
                          ? "bg-dark-700 text-gray-400"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      darkMode
                        ? "bg-dark-700 text-gray-300 hover:bg-dark-600"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-sm font-medium bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect – now non-blocking */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mt-12"
        >
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/adp-iitm"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
