import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Volume2 } from 'lucide-react';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const playGreeting = (lang) => {
    try {
      const synth = window.speechSynthesis;
      if (!synth) return;
      // Toggle behavior: if already speaking, stop instead
      if (synth.speaking || isSpeaking) {
        synth.cancel();
        setIsSpeaking(false);
        return;
      }
      let text = '';
      let utter;
      if (lang === 'en') {
        text = "Hello! Welcome to my portfolio. I’m Aditya, a Machine Learning Engineer passionate about building intelligent systems. Let’s dive into the future of AI and explore my work!";
        utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'en-IN';
        utter.rate = 1.02;
        utter.pitch = 1.0;
      } else {
        text = 'नमस्ते! मेरे पोर्टफोलियो में आपका स्वागत है। मैं आदित्य हूँ, एक मशीन लर्निंग इंजीनियर। मुझे खुशी है कि आप यहाँ हैं। आइए मेरे प्रोजेक्ट्स देखें और AI की दुनिया में एक साथ कदम रखें!';
        utter = new SpeechSynthesisUtterance(text);
        utter.lang = 'hi-IN';
        utter.rate = 1.02;
        utter.pitch = 1.0;
      }
      synth.cancel();
      utter.onstart = () => setIsSpeaking(true);
      utter.onend = () => setIsSpeaking(false);
      utter.onerror = () => setIsSpeaking(false);
      synth.speak(utter);
    } catch {}
  };

  const stopGreeting = () => {
    try {
      const synth = window.speechSynthesis;
      if (!synth) return;
      synth.cancel();
      setIsSpeaking(false);
    } catch {}
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 's' || e.key === 'S' || e.key === 'Escape') {
        stopGreeting();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 theme-bg ${
      darkMode ? 'bg-dark-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <Contact darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
      
      {/* Floating compact greeting control */}
      <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-2">
        <button
          onClick={() => playGreeting('en')}
          onDoubleClick={stopGreeting}
          aria-label="Play English greeting (double-click to stop)"
          className={`h-10 w-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
            darkMode ? 'bg-dark-800 hover:bg-dark-700 text-gray-100' : 'bg-white hover:bg-gray-50 text-gray-800'
          } ${isSpeaking ? 'speaking-ring' : ''}`}
          title="Play English greeting"
        >
          <Volume2 size={18} />
        </button>
        <button
          onClick={() => playGreeting('hi')}
          onDoubleClick={stopGreeting}
          aria-label="Play Hindi greeting (double-click to stop)"
          className={`h-10 w-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 ${
            darkMode ? 'bg-dark-800 hover:bg-dark-700 text-gray-100' : 'bg-white hover:bg-gray-50 text-gray-800'
          } ${isSpeaking ? 'speaking-ring' : ''}`}
          title="Play Hindi greeting"
        >
          <span className="text-xs">हिं</span>
        </button>
      </div>
    </div>
  );
}

export default App;

