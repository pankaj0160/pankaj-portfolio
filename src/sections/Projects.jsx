import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import { projects } from '../data/portfolio';

const Projects = () => {
  return (
    <section id="projects" className="py-20 dark:bg-slate-900 bg-white transition-colors duration-300">
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
              Featured Projects
            </span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and AI integration
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card glow className="h-full flex flex-col hover:shadow-2xl transition-all duration-300">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-3 dark:group-hover:text-blue-400 group-hover:text-blue-600 transition-colors dark:text-white text-slate-900">
                    {project.title}
                  </h3>
                  <p className="dark:text-slate-400 text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold dark:text-slate-300 text-slate-700 mb-2">Key Features:</h4>
                    <ul className="dark:text-slate-400 text-slate-600 space-y-1">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <motion.li
                          key={i}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold dark:text-slate-300 text-slate-700 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 dark:bg-slate-700 bg-slate-200 dark:text-slate-300 text-slate-700 text-xs rounded-md"
                          whileHover={{ scale: 1.1, y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-auto flex gap-3">
                  <Button
                    variant="secondary"
                    className="flex-1"
                    onClick={() => window.open(project.liveDemo, '_blank')}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <FaGithub />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;