import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, X, ExternalLink, Github, Palette, Zap } from 'lucide-react';

const WebsiteInfoButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const techStack = [
    { name: 'React', description: 'Component-based UI framework' },
    { name: 'TypeScript', description: 'Type-safe JavaScript development' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'Framer Motion', description: 'Smooth animations and transitions' },
    { name: 'Vite', description: 'Fast build tool and dev server' },
    { name: 'Lovable', description: 'AI-powered development platform' }
  ];

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-20 right-4 z-40 glass-card p-3 rounded-full text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-lg"
        title="How this website was made"
      >
        <Code size={20} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="glass-card rounded-2xl p-6 max-w-md w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                  How This Website Was Made
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  In a parallel world, this portfolio would have taken 2-3 weeks to design and develop. With modern AI tools and frameworks, it was built in just 2 days while maintaining high quality and attention to detail.
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Zap size={16} />
                    Tech Stack
                  </h4>
                  <div className="grid gap-2">
                    {techStack.map((tech, index) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex justify-between items-start p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50"
                      >
                        <div>
                          <span className="font-medium text-slate-900 dark:text-slate-100 text-sm">
                            {tech.name}
                          </span>
                          <p className="text-xs text-slate-500 dark:text-slate-400">
                            {tech.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Palette size={16} />
                    Design Features
                  </h4>
                  <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
                    <li>• Glassmorphism UI design</li>
                    <li>• Responsive mobile-first approach</li>
                    <li>• Smooth scroll animations</li>
                    <li>• Dark/Light theme support</li>
                    <li>• Interactive components</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <a
                    href="https://lovable.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    Built with Lovable <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WebsiteInfoButton;