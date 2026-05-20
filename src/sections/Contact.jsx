import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Card from '../components/Card';
import Button from '../components/Button';
import { personalInfo, socialLinks } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: personalInfo.email,
      link: `mailto:${personalInfo.email}`
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: personalInfo.phone,
      link: `tel:${personalInfo.phone}`
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: personalInfo.location,
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 dark:bg-slate-900 bg-white transition-colors duration-300">
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
              Get In Touch
            </span>
          </h2>
          <p className="dark:text-slate-400 text-slate-600 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card glow>
              <h3 className="text-2xl font-semibold mb-6 dark:text-blue-400 text-blue-600">Let's Connect</h3>
              <p className="dark:text-slate-400 text-slate-600 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                Feel free to reach out!
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 dark:bg-slate-800 bg-slate-200 rounded-lg flex items-center justify-center mr-4 dark:group-hover:bg-slate-700 transition-colors">
                      <info.icon className="dark:text-blue-400 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold dark:text-slate-200 text-slate-800">{info.label}</h4>
                      <a
                        href={info.link}
                        className="dark:text-slate-400 dark:hover:text-blue-400 text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 p-6 dark:bg-gradient-to-r dark:from-blue-500/10 dark:to-purple-500/10 bg-gradient-to-r from-blue-500/5 to-purple-500/5 dark:border-slate-700 border-slate-300 rounded-lg border">
                <p className="dark:text-slate-300 text-slate-700 text-center italic">
                  "Let's build something amazing together."
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card glow>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-2">
                      Name
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-3 dark:bg-slate-800 bg-slate-100 dark:border-slate-700 border-slate-300 border rounded-lg dark:text-white text-slate-900 dark:placeholder-slate-400 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-2">
                      Email
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                      className="w-full px-4 py-3 dark:bg-slate-800 bg-slate-100 dark:border-slate-700 border-slate-300 border rounded-lg dark:text-white text-slate-900 dark:placeholder-slate-400 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-2">
                    Subject
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 dark:bg-slate-800 bg-slate-100 dark:border-slate-700 border-slate-300 border rounded-lg dark:text-white text-slate-900 dark:placeholder-slate-400 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium dark:text-slate-300 text-slate-700 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    whileFocus={{ scale: 1.02 }}
                    className="w-full px-4 py-3 dark:bg-slate-800 bg-slate-100 dark:border-slate-700 border-slate-300 border rounded-lg dark:text-white text-slate-900 dark:placeholder-slate-400 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or idea..."
                  />
                </div>

                <Button type="submit" className="w-full">
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;