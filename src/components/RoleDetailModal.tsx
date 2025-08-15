import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface RoleDetailModalProps {
  role: {
    title: string;
    logo: string;
    summary: string;
    period: string;
    status: string;
    link?: string;
    fullDescription: string;
    achievements: string[];
    skills: string[];
    location?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const RoleDetailModal: React.FC<RoleDetailModalProps> = ({ role, isOpen, onClose }) => {
  if (!role) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-4">
                {role.logo ? (
                  <img src={role.logo} alt="logo" className="w-16 h-16 rounded-xl shadow-md" />
                ) : (
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center text-2xl font-bold">
                    {role.title[0]}
                  </div>
                )}
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 leading-tight">
                    {role.title}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                      <Calendar size={14} />
                      {role.period}
                    </span>
                    {role.location && (
                      <span className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400">
                        <MapPin size={14} />
                        {role.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Status Badge */}
              <div className="flex gap-2">
                <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  {role.status}
                </span>
              </div>

              {/* Full Description */}
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  What I Do
                </h3>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {role.fullDescription}
                </p>
              </div>

              {/* Key Achievements */}
              {role.achievements.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {role.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                        <span className="text-blue-500 mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Skills */}
              {role.skills.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Skills Applied
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* External Link */}
              {role.link && (
                <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                  <a
                    href={role.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RoleDetailModal;