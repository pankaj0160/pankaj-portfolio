import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaTrophy, FaGraduationCap, FaRocket } from 'react-icons/fa';
import Card from '../components/Card';
import { personalInfo, achievements } from '../data/portfolio';

const About = () => {
  const stats = [
    { icon: FaCode, value: achievements[1].value, label: 'DSA Problems' },
    { icon: FaTrophy, value: achievements[0].value, label: 'GATE CSE 2026' },
    { icon: FaGraduationCap, value: achievements[2].value, label: 'CGPA' },
    { icon: FaRocket, value: achievements[3].value, label: 'Projects' }
  ];

  return (
    <section id="about" className="py-20 dark:bg-slate-900 bg-white transition-colors duration-300">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-slate-900">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-400 dark:to-purple-500 from-blue-600 to-purple-700 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and passion for technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card glow>
              <h3 className="text-2xl font-semibold mb-4 dark:text-blue-400 text-blue-600">Who I Am</h3>
              <p className="dark:text-slate-300 text-slate-700 mb-6 leading-relaxed">
                {personalInfo.summary}
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold dark:text-slate-200 text-slate-800">Education</h4>
                  <p className="dark:text-slate-400 text-slate-600">
                    {personalInfo.education.degree} at {personalInfo.education.institution}
                  </p>
                  <p className="dark:text-slate-500 text-slate-500 text-sm">
                    {personalInfo.education.duration} | CGPA: {personalInfo.education.cgpa}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold dark:text-slate-200 text-slate-800">Location</h4>
                  <p className="dark:text-slate-400 text-slate-600">{personalInfo.location}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05, y: -5 }} transition={{ duration: 0.3 }}>
                <Card glow className="text-center h-full">
                  <stat.icon className="text-3xl dark:text-blue-400 text-blue-600 mx-auto mb-3" />
                  <div className="text-2xl font-bold dark:text-white text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm dark:text-slate-400 text-slate-600">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold mb-4 dark:text-white text-slate-900">Interests & Goals</h3>
          <p className="dark:text-slate-400 text-slate-600 max-w-3xl mx-auto">
            I'm passionate about leveraging AI to solve real-world problems, building scalable backend systems,
            and creating intuitive user experiences. My goal is to contribute to innovative projects that make a
            positive impact while continuously learning and growing as a developer.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;