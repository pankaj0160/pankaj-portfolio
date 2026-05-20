import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-slate-800 dark:bg-slate-900 border border-slate-700 dark:border-slate-600 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-slate-300 hover:text-white dark:text-slate-400 dark:hover:text-slate-200"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180, scale: isDark ? 1 : 1.2 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-center"
      >
        {isDark ? <FaMoon size={18} /> : <FaSun size={18} />}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;