import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail, Volume2 } from 'lucide-react';
import profileImage from '../assets/profile.jpeg';

const Hero = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  // Multilingual name ticker just below the main name (expanded)
  const nameTranslations = [
    { lang: 'हिन्दी', text: 'आदित्य' },
    { lang: 'தமிழ்', text: 'ஆதித்யா' },
    { lang: 'తెలుగు', text: 'ఆదిత्य' },
    { lang: 'বাংলা', text: 'आदित্য' },
    { lang: 'ગુજરાતી', text: 'આદિત્ય' },
    { lang: 'ಕನ್ನಡ', text: 'ಆದಿತ್ಯ' },
    { lang: 'മലയാളം', text: 'ആദിത്യ' },
    { lang: 'मराठी', text: 'आदित्य' },
    { lang: 'ਪੰਜਾਬੀ', text: 'ਆਦਿਤ੍ਯ' },
    { lang: 'اردو', text: 'آدتیہ' },
    { lang: 'العربية', text: 'أديتيا' },
    { lang: '中文', text: '阿迪提亚' },
    { lang: '日本語', text: 'アディティヤ' },
    { lang: '한국어', text: '아디티야' },
    { lang: 'Русский', text: 'Адитья' },
    { lang: 'ไทย', text: 'อาทิตยะ' },
    { lang: 'Türkçe', text: 'Aditya' },
    { lang: 'Ελληνικά', text: 'Αντίτια' },
    { lang: 'Tiếng Việt', text: 'Aditya' },
    { lang: 'עברית', text: 'אדיטיה' },
    { lang: 'नेपाली', text: 'अदित्य' },
    { lang: 'සිංහල', text: 'ආදිත්‍ය' },
    { lang: 'မြန်မာ', text: 'အဒီတရာ' },
    { lang: 'Indonesian', text: 'Aditya' },
    { lang: 'Português', text: 'Aditya' },
    { lang: 'Polski', text: 'Aditya' },
    { lang: 'Nederlands', text: 'Aditya' },
  ];
  const [nameIdx, setNameIdx] = useState(0);

  // Linger longer when Hindi is shown
  useEffect(() => {
    const current = nameTranslations[nameIdx];
    const delay = current.lang === 'हिन्दी' ? 3000 : 1800;
    const t = setTimeout(() => {
      setNameIdx((prev) => (prev + 1) % nameTranslations.length);
    }, delay);
    return () => clearTimeout(t);
  }, [nameIdx]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      const headerOffset = 72;
      const rect = element.getBoundingClientRect();
      const targetY = window.pageYOffset + rect.top - headerOffset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  const playGreetingEn = () => {
    try {
      const synth = window.speechSynthesis;
      if (!synth) return;
      const text = "Hello! Welcome to my portfolio. I’m Aditya, a Machine Learning Engineer passionate about building intelligent systems. Let’s dive into the future of AI and explore my work!";
      const enUtter = new SpeechSynthesisUtterance(text);
      enUtter.lang = 'en-IN';
      enUtter.rate = 1.02;
      enUtter.pitch = 1.0;
      synth.cancel();
      synth.speak(enUtter);
    } catch {}
  };

  const playGreetingHi = () => {
    try {
      const synth = window.speechSynthesis;
      if (!synth) return;
      const text = 'नमस्ते! मेरे पोर्टफोलियो में आपका स्वागत है। मैं आदित्य हूँ, एक मशीन लर्निंग इंजीनियर। मुझे खुशी है कि आप यहाँ हैं। आइए मेरे प्रोजेक्ट्स देखें और AI की दुनिया में एक साथ कदम रखें!';
      const hiUtter = new SpeechSynthesisUtterance(text);
      hiUtter.lang = 'hi-IN';
      hiUtter.rate = 1.02;
      hiUtter.pitch = 1.0;
      synth.cancel();
      synth.speak(hiUtter);
    } catch {}
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-purple-600"></div>
      </div>

      {/* Animated accent blobs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 w-64 h-64 rounded-full bg-gradient-to-tr from-amber-500/20 to-indigo-600/20"
        animate={{ x: [0, 20, 0], y: [0, 10, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-gradient-to-tr from-fuchsia-500/20 to-emerald-500/20"
        animate={{ x: [0, -20, 0], y: [0, -10, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="container-max section-padding relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            >
              <img
                src={profileImage}
                alt="Profile"
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-auto mb-8 rounded-full object-cover border-4 border-primary-600"
              />
            </motion.div>

          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2"
          >
            <motion.span
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              className="gradient-text bg-[length:200%_200%]"
            >
              Aditya Pareek
            </motion.span>
          </motion.h1>

          {/* Rotating multilingual name just below main name */}
          <motion.div
            key={nameIdx}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className={`text-xl md:text-2xl mb-4 font-medium ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {nameTranslations[nameIdx].text}
            <span className={`ml-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              ({nameTranslations[nameIdx].lang})
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className={`text-xl md:text-2xl mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}
          >
            <motion.span
              animate={{ opacity: [1, 0.85, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              ML Systems Engineer
            </motion.span>
          </motion.p>

          <motion.p
            variants={itemVariants}
            className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}
          >
            "I design intelligent, scalable, and user-focused machine learning solutions that turn data into impactful digital experiences — blending engineering precision with real-world application."
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="btn-primary"
            >
              View My Work
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05, rotate: [0, -1.5, 1.5, 0] }}
              whileTap={{ scale: 0.95 }}
              href="/Aditya_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              📄 View CV
            </motion.a>

          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/adp-iitm"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors duration-200 ${darkMode
                ? 'text-gray-400 hover:text-white hover:bg-dark-700'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/aditya-pareek-235280293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full transition-colors duration-200 ${darkMode
                ? 'text-gray-400 hover:text-white hover:bg-dark-700'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="mailto:adpaniitian@gmail.com"
              className={`p-3 rounded-full transition-colors duration-200 ${darkMode
                ? 'text-gray-400 hover:text-white hover:bg-dark-700'
                : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                }`}
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToAbout}
          className={`p-2 rounded-full transition-colors duration-200 ${darkMode
            ? 'text-gray-400 hover:text-white hover:bg-dark-700'
            : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
            }`}
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

