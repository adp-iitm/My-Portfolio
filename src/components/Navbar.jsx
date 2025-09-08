import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [underline, setUnderline] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-20% 0px -40% 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      // Smooth scroll with easing and header offset
      const headerOffset = 72; // approx navbar height
      const rect = element.getBoundingClientRect();
      const targetY = window.pageYOffset + rect.top - headerOffset;

      const startY = window.pageYOffset;
      const distance = targetY - startY;
      const duration = Math.min(900, Math.max(400, Math.abs(distance) * 0.5));
      const startTime = performance.now();

      const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY + distance * eased);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
    setIsOpen(false);
  };

  const updateUnderlineToIndex = (idx) => {
    const container = containerRef.current;
    const target = itemRefs.current[idx];
    if (!container || !target) return;
    const cRect = container.getBoundingClientRect();
    const tRect = target.getBoundingClientRect();
    const left = tRect.left - cRect.left;
    const width = tRect.width;
    setUnderline({ left, width });
  };

  useEffect(() => {
    const idx = navItems.findIndex((n) => n.href.replace('#', '') === activeSection);
    updateUnderlineToIndex(idx >= 0 ? idx : 0);
  }, [activeSection]);

  useEffect(() => {
    const onResize = () => {
      const idx = navItems.findIndex((n) => n.href.replace('#', '') === activeSection);
      updateUnderlineToIndex(idx >= 0 ? idx : 0);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [activeSection]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? darkMode
            ? 'bg-dark-800/95 backdrop-blur-md shadow-lg'
            : 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      {/* Subtle Indian-inspired top accent bar (peacock blue to marigold) */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-800 via-fuchsia-600 to-amber-500" />
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-3 sm:px-4">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#home')}
            className="text-xl font-bold gradient-text flex items-center gap-2"
          >
            <span role="img" aria-label="diya">🪔</span>
            Portfolio
          </motion.button>

          {/* Desktop Navigation */}
          <div ref={containerRef} className="hidden md:flex items-center gap-6 lg:gap-8 relative">
            {navItems.map((item, i) => (
              <button
                key={item.name}
                ref={(el) => (itemRefs.current[i] = el)}
                onMouseEnter={() => updateUnderlineToIndex(i)}
                onMouseLeave={() => {
                  const idx = navItems.findIndex((n) => n.href.replace('#', '') === activeSection);
                  updateUnderlineToIndex(idx >= 0 ? idx : 0);
                }}
                onClick={() => scrollToSection(item.href)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                } ${activeSection === item.href.replace('#', '') ? 'text-primary-600 dark:text-primary-400' : ''}`}
              >
                {item.name}
              </button>
            ))}
            {/* Shared underline indicator */}
            <motion.span
              className="nav-underline"
              initial={false}
              animate={{ x: underline.left, width: underline.width }}
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              style={{ left: 0 }}
            />
          </div>

          {/* Dark Mode Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? 'text-yellow-400 hover:bg-dark-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-4 py-2 space-y-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ x: 10 }}
                onClick={() => scrollToSection(item.href)}
                className={`relative block w-full text-left py-2 text-sm font-medium transition-colors duration-200 ${
                  darkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                } ${activeSection === item.href.replace('#', '') ? 'text-primary-600 dark:text-primary-400' : ''}`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'w-16 bg-gradient-to-r from-amber-500 to-indigo-700'
                      : 'w-0 bg-transparent'
                  }`}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

