import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

const PMResourcesFooter = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-900 border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">
              Want to know a bit more about me?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Explore my complete portfolio to learn more about my journey, experiences, and projects.
            </p>
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              <ExternalLink size={20} />
              View My Portfolio
            </motion.button>
          </div>
        </motion.div>
        
        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-500 dark:text-slate-500 text-sm">
            © 2025 Animesh Jhawar™ - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PMResourcesFooter;