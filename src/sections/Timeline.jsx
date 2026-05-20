import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaRocket, FaBrain, FaBriefcase } from 'react-icons/fa';
import Card from '../components/Card';
import { timeline } from '../data/portfolio';

const Timeline = () => {
  const icons = [FaCode, FaServer, FaRocket, FaBrain, FaBriefcase];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Journey & Experience
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            My development journey and key milestones in learning and building
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-500"></div>
            
            {timeline.map((item, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <Card glow className={`max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <IconComponent className="text-white text-sm" />
                      </div>
                      <span className="text-sm font-semibold text-blue-400">{item.year}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-200 mb-2">
                      {item.event}
                    </h3>
                  </Card>
                  
                  <div className={`absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full border-4 border-slate-800 ${
                    index % 2 === 0 ? 'left-6' : 'right-6'
                  }`}></div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;