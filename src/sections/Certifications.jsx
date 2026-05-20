import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import { certifications } from '../data/portfolio';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Professional certifications that validate my skills and commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card glow className="h-full">
                <div className="flex items-start mb-4">
                  <FaCertificate className="text-3xl text-blue-400 mr-4 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-slate-200">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => window.open(cert.link, '_blank')}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    View Certificate
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

export default Certifications;