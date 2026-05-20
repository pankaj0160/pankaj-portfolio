import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaHeart } from 'react-icons/fa';
import { socialLinks, navLinks } from '../data/portfolio';

const Footer = () => {
  const socialIcons = [
    { icon: FaGithub, link: socialLinks.github, label: 'GitHub' },
    { icon: FaLinkedin, link: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: FaCode, link: socialLinks.leetcode, label: 'LeetCode' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="dark:bg-slate-800 bg-slate-200 dark:border-slate-700 border-slate-300 border-t transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 dark:from-blue-400 dark:to-purple-500 from-blue-600 to-purple-700 bg-clip-text text-transparent mb-4">
              Pankaj Thakur
            </h3>
            <p className="dark:text-slate-400 text-slate-600 mb-6">
              AI & Data Science Student passionate about building scalable web applications and AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map(({ icon: Icon, link, label }) => (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:text-slate-400 dark:hover:text-blue-400 text-slate-600 hover:text-blue-600 transition-colors duration-300 p-2 rounded-lg dark:hover:bg-slate-700/50 hover:bg-slate-300/50"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold dark:text-white text-slate-900 mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="dark:text-slate-400 dark:hover:text-blue-400 text-slate-600 hover:text-blue-600 transition-colors duration-300 text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold dark:text-white text-slate-900 mb-4">Contact</h4>
            <div className="dark:text-slate-400 text-slate-600 space-y-2">
              <p>Gwalior, Madhya Pradesh, India</p>
              <a
                href={`mailto:${socialLinks.email}`}
                className="block dark:hover:text-blue-400 hover:text-blue-600 transition-colors duration-300"
              >
                pankajthakur.dev01@gmail.com
              </a>
              <a
                href={`tel:+91 8964056215`}
                className="block dark:hover:text-blue-400 hover:text-blue-600 transition-colors duration-300"
              >
                +91 8964056215
              </a>
            </div>
          </div>
        </div>

        <div className="dark:border-slate-700 border-slate-300 border-t mt-8 pt-8 text-center">
          <p className="dark:text-slate-400 text-slate-600 flex items-center justify-center">
            Made with <FaHeart className="text-red-500 mx-2" /> by Pankaj Thakur • © 2026 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;