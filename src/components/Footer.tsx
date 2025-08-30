import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const workLinks = [
    { label: 'Current Roles', href: '#roles' },
    { label: 'Past Experience', href: '#experience' }
  ];

  const aboutLinks = [
    { label: 'Awards & Achievements', href: '#awards' },
    { label: 'Education', href: '#education' },
    { label: 'Omni Presence', href: '#omnipresence' }
  ];

  const navLinks = [
    { label: 'PM Playground', href: '#playground' },
    { label: 'What I\'ve Built', href: '#projects' },
    { label: 'My Thinking', href: '#systems' },
    { label: 'Life Beyond Work', href: '#life' },
    { label: 'Let\'s Connect', href: '#contact' }
  ];

  const externalLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/animeshjhawar/' },
    { label: 'GitHub', href: 'https://github.com/AnimeshJhawar' },
    { label: 'YouTube', href: 'https://www.youtube.com/@beingaakrshit' },
    { label: 'Instagram', href: 'https://www.instagram.com/animesh__jhawar/' },
    { label: 'Behance', href: 'https://www.behance.net/animeshjhawar' },
    { label: 'Book 1:1', href: 'https://topmate.io/animesh_jhawar_iitd' },
    { label: 'My PM Resources Hub', href: '/pm-resources' }
  ];

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div className="md:col-span-1">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('#intro')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer mb-4"
            >
              Animesh Jhawar
            </motion.div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © 2025 Animesh Jhawar™
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-xs mt-2">
              All rights reserved
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-2">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Navigation</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">Main</h4>
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm text-left transition-colors block"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">Work</h4>
                {workLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm text-left transition-colors block"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">About</h4>
                {aboutLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm text-left transition-colors block"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* External Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Connect</h3>
            <div className="space-y-2">
              {externalLinks.slice(0, 4).map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              
              <a
                href={externalLinks[5].href}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
              >
                {externalLinks[5].label}
              </a>
              
              {/* Highlighted PM Resources */}
              <div className="mt-4">
                <button
                  onClick={() => navigate('/pm-resources')}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:shadow-lg transition-all"
                >
                  My PM Resources Hub
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 dark:border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-500 dark:text-slate-500 text-xs">
            Built with passion using React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
