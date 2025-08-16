import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Mail size={20} />,
      href: 'mailto:javaranimesh12@gmail.com',
      label: 'Email'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/animesh-jhawar',
      label: 'LinkedIn'
    },
    {
      icon: <Instagram size={20} />,
      href: 'https://instagram.com/animesh.jhawar',
      label: 'Instagram'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="fixed top-20 right-4 z-40 flex flex-col gap-3"
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 + 0.9 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card p-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-lg"
          title={link.label}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;