import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import Button from '../components/Button';
import { personalInfo, socialLinks } from '../data/portfolio';
import profilePhoto from '../assets/pankaj - profile photo.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  const roles = personalInfo.taglines;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const socialIcons = [
    { icon: FaGithub, link: socialLinks.github, label: 'GitHub' },
    { icon: FaLinkedin, link: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaCode, link: socialLinks.leetcode, label: 'LeetCode' },
    { icon: FaEnvelope, link: `mailto:${personalInfo.email}`, label: 'Email' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 bg-gradient-to-br from-white via-slate-50 to-white"></div>
      <div className="absolute inset-0 dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-purple-500/10 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>

      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 dark:bg-blue-500/20 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
      ></motion.div>
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 dark:bg-purple-500/20 bg-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, delay: 1 }}
      ></motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 dark:text-white text-slate-900 leading-tight"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              Hi, 
              I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-400 dark:to-purple-500 from-blue-600 to-purple-700 bg-clip-text text-transparent whitespace-nowrap">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl dark:text-slate-300 text-slate-700 mb-6 h-20 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <TypeAnimation
                sequence={roles.flatMap(role => [role, 2000])}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 dark:from-cyan-400 dark:to-blue-500 from-cyan-600 to-blue-700 bg-clip-text text-transparent font-semibold"
              />
            </motion.div>

            <motion.p
              className="text-lg dark:text-slate-400 text-slate-600 mb-8 max-w-lg"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              I build scalable web applications and AI-powered solutions using modern technologies.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <Button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                View Projects
              </Button>
              <Button variant="secondary" onClick={() => window.open(socialLinks.resume, '_blank')}>
                Download Resume
              </Button>
              <Button variant="ghost" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-start space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {socialIcons.map(({ icon: Icon, link, label }, index) => (
                <motion.a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="dark:text-slate-400 dark:hover:text-white text-slate-600 hover:text-slate-900 transition-colors duration-300 p-3 rounded-lg dark:hover:bg-slate-800/50 hover:bg-slate-200/50"
                  aria-label={label}
                >
                  <Icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] mx-auto lg:ml-8"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4, repeat: Infinity }}
              ></motion.div>
              <motion.div
                className="relative w-full h-full dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 bg-gradient-to-br from-slate-100 to-slate-200 dark:border-slate-700 border-slate-300 rounded-full border-4 overflow-hidden shadow-2xl dark:shadow-blue-500/20 shadow-slate-300/20"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(59, 130, 246, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <img src={profilePhoto} alt="Pankaj Thakur" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center text-white text-2xl shadow-lg"
                animate={{ y: [0, -20, 0], rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ⚡
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -left-6 w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 dark:from-purple-600 dark:to-purple-700 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
                animate={{ y: [0, 20, 0], rotate: [0, -360] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                🚀
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;