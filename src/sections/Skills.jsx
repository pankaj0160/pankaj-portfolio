import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaServer, FaDatabase, FaTools, FaBrain, FaRobot } from 'react-icons/fa';
import { SiPython, SiCplusplus, SiJavascript, SiHtml5, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiFastapi, SiFlask, SiMongodb, SiMysql, SiGit, SiGithub, SiPostman } from 'react-icons/si';
import Card from '../components/Card';
import { skills } from '../data/portfolio';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: FaCode,
      skills: skills.languages,
      icons: [SiPython, SiCplusplus, SiJavascript, SiHtml5, null]
    },
    {
      title: 'Frontend',
      icon: FaPalette,
      skills: skills.frontend,
      icons: [SiReact, SiTailwindcss]
    },
    {
      title: 'Backend',
      icon: FaServer,
      skills: skills.backend,
      icons: [SiNodedotjs, SiExpress, SiFastapi, SiFlask, null]
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: skills.databases,
      icons: [SiMongodb, SiMysql]
    },
    {
      title: 'Tools',
      icon: FaTools,
      skills: skills.tools,
      icons: [SiGit, SiGithub, SiPostman, null]
    },
    {
      title: 'Core CS',
      icon: FaBrain,
      skills: skills.coreCS,
      icons: [null, null, null, null]
    },
    {
      title: 'AI/GenAI',
      icon: FaRobot,
      skills: skills.aiGenAI,
      icons: [null, null, null]
    }
  ];

  return (
    <section id="skills" className="py-20 dark:bg-slate-800 bg-slate-100 transition-colors duration-300">
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
              Skills & Technologies
            </span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card glow className="h-full">
                <div className="flex items-center mb-6">
                  <category.icon className="text-2xl dark:text-blue-400 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold dark:text-white text-slate-900">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = category.icons[skillIndex];
                    return (
                      <motion.div
                        key={skill}
                        className="flex items-center justify-between group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center">
                          {IconComponent && <IconComponent className="text-lg dark:text-slate-400 text-slate-600 mr-3 group-hover:text-blue-500 transition-colors" />}
                          <span className="dark:text-slate-300 text-slate-700 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{skill}</span>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-gradient-to-r from-blue-400 to-purple-500' : 'dark:bg-slate-600 bg-slate-300'
                                }`}
                              whileHover={{ scale: 1.3 }}
                              transition={{ duration: 0.2 }}
                            />
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;