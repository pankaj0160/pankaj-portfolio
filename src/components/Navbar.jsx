import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import ThemeToggle from './ThemeToggle';
import { navLinks, socialLinks } from '../data/portfolio';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 dark:bg-slate-900/80 dark:text-white text-slate-900 backdrop-blur-md border-b border-slate-800 dark:border-slate-700 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Pankaj
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${activeSection === link.href.substring(1)
                      ? 'text-blue-400 border-b-2 border-blue-400'
                      : 'text-slate-300 dark:text-slate-300 hover:text-white dark:hover:text-white hover:bg-slate-800/50 dark:hover:bg-slate-800/50'
                    }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button onClick={() => window.open(socialLinks.resume, '_blank')}>
              Download Resume
            </Button>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 dark:text-slate-300 hover:text-white dark:hover:text-white p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-800 dark:bg-slate-800 border-t border-slate-700 dark:border-slate-600"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block px-3 py-2 text-base font-medium text-slate-300 dark:text-slate-300 hover:text-white dark:hover:text-white hover:bg-slate-700 dark:hover:bg-slate-700 w-full text-left rounded-md transition-colors duration-300"
                >
                  {link.name}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button onClick={() => window.open(socialLinks.resume, '_blank')} className="w-full">
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;