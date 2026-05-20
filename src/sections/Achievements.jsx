import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaTrophy, FaCode, FaGraduationCap, FaRocket } from 'react-icons/fa';
import Card from '../components/Card';
import { achievements } from '../data/portfolio';

const Achievements = () => {
  const [counts, setCounts] = useState(achievements.map(() => 0));
  const controls = useAnimation();

  useEffect(() => {
    const animateCounters = async () => {
      await controls.start({ opacity: 1, y: 0 });
      
      achievements.forEach((achievement, index) => {
        const targetValue = parseFloat(achievement.value) || 0;
        let currentValue = 0;
        const increment = targetValue / 100;
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
          }
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.round(currentValue * 10) / 10;
            return newCounts;
          });
        }, 30);
      });
    };

    animateCounters();
  }, [controls]);

  const icons = [FaTrophy, FaCode, FaGraduationCap, FaRocket];

  return (
    <section id="achievements" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Milestones and accomplishments that highlight my dedication and progress
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => {
            const IconComponent = icons[index];
            return (
              <Card key={achievement.title} glow className="text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <IconComponent className="text-4xl text-blue-400 mx-auto mb-4" />
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {typeof counts[index] === 'number' && counts[index] % 1 === 0
                    ? counts[index]
                    : counts[index].toFixed(1)}
                  {achievement.value.includes('+') && '+'}
                </motion.div>
                <h3 className="text-lg font-semibold text-slate-300 mb-2">
                  {achievement.title}
                </h3>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2, delay: index * 0.2, ease: 'easeOut' }}
                  />
                </div>
              </Card>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;