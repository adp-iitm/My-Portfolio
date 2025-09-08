import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const to = 'adpaniitian@gmail.com';
    const subject = encodeURIComponent(`${formData.subject} — from ${formData.name}`);
    const bodyLines = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      '',
      formData.message,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'adpaniitian@gmail.com',
      link: 'mailto:adpaniitian@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8829099340',
      link: 'tel:8829099340',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Mysuru, Karnataka, India',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/adp-iitm',
      color: 'hover:text-gray-900',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/aditya-pareek-235280293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      color: 'hover:text-blue-600',
    },
    
  ];

  return (
    <section id="contact" ref={ref} className="section-padding">
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
            Get In <span className="gradient-text">Touch</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's create something amazing together!
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-2xl font-semibold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  whileHover={{ x: 10 }}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-200 ${
                    darkMode
                      ? 'bg-dark-800 hover:bg-dark-700'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="p-3 rounded-lg bg-primary-600 text-white">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <h4 className={`font-medium ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {info.title}
                    </h4>
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-medium mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-lg transition-all duration-200 ${
                      darkMode
                        ? 'bg-dark-800 text-gray-400 hover:bg-dark-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    } ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className={`text-2xl font-semibold mb-8 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.5 }}
                >
                  <label
                    htmlFor="name"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-dark-800 border-dark-600 text-white placeholder-gray-400 focus:border-primary-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-primary-500'
                    }`}
                    placeholder="Your Name"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.6 }}
                >
                  <label
                    htmlFor="email"
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                      darkMode
                        ? 'bg-dark-800 border-dark-600 text-white placeholder-gray-400 focus:border-primary-500'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-primary-500'
                    }`}
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 }}
              >
                <label
                  htmlFor="subject"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 ${
                    darkMode
                      ? 'bg-dark-800 border-dark-600 text-white placeholder-gray-400 focus:border-primary-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-primary-500'
                  }`}
                  placeholder="Subject"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border transition-colors duration-200 resize-none ${
                    darkMode
                      ? 'bg-dark-800 border-dark-600 text-white placeholder-gray-400 focus:border-primary-500'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-primary-500'
                  }`}
                  placeholder="Your message..."
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

