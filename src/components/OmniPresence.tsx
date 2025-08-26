import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const socialPlatforms = [
  {
    name: 'LinkedIn',
    description: 'Professional updates and industry insights',
    url: 'https://www.linkedin.com/in/animeshjhawar/',
    gradient: 'from-blue-600 to-blue-700',
    logo: '/src/assets/linkedin-logo.png'
  },
  {
    name: 'YouTube', 
    description: 'More about my life',
    url: 'https://www.youtube.com/@beingaakrshit',
    gradient: 'from-red-600 to-red-700',
    logo: '/lovable-uploads/youtube-logo.png'
  },
  {
    name: 'Behance Portfolio',
    description: 'Design work and case studies',
    url: 'https://www.behance.net/animeshjhawar',
    gradient: 'from-purple-600 to-purple-700',
    logo: '/src/assets/behance-logo.png'
  },
  {
    name: 'GitHub',
    description: 'Open source projects and code repositories',
    url: 'https://github.com/AnimeshJhawar',
    gradient: 'from-gray-700 to-gray-800',
    logo: '/src/assets/github-logo.png'
  }
];

export default function OmniPresence() {
  return (
    <section id="omnipresence" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
            Omni Presence
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Connect with me across different platforms for insights, updates, and collaborations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {socialPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl group block"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-3 flex-1">
                  {platform.logo && (
                    <img src={platform.logo} alt={platform.name} className="w-8 h-8 rounded-lg flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg mb-2 bg-gradient-to-r ${platform.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform`}>
                      {platform.name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {platform.description}
                    </p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
