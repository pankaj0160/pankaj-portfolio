import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 border-4 border-slate-700 border-t-blue-500 rounded-full mb-8"
          style={{
            animation: 'spin 1s linear infinite'
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4"
        >
          Pankaj
        </motion.h2>
        <div className="w-64 bg-slate-700 rounded-full h-2 mb-4">
          <motion.div
            className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-slate-400">{progress}%</p>
      </div>
    </motion.div>
  );
};

export default Loading;