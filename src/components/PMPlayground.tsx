
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, TrendingUp, Target, Lightbulb, ChevronRight } from 'lucide-react';

const PMPlayground = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Live Lab Reports Widget",
      company: "Tata 1mg",
      companyLink: "https://1mg.com",
      period: "2024",
      impact: "40% faster report access",
      description: "Redesigned lab report flow based on diabetic user interviews, reducing friction in critical health moments.",
      tags: ["User Research", "Healthcare UX", "Data Visualization"],
      icon: <TrendingUp className="w-6 h-6" />,
      details: "Deep user interviews with 50+ diabetic patients revealed pain points in accessing critical lab values. Built real-time widget with smart notifications."
    },
    {
      id: 2,
      title: "Homepage Activation Funnel",
      company: "Tata 1mg",
      companyLink: "https://1mg.com",
      period: "2023-24",
      impact: "25% conversion boost",
      description: "Complete homepage revamp with A/B tested user flows and personalized onboarding experiences.",
      tags: ["Growth Hacking", "A/B Testing", "Conversion Optimization"],
      icon: <Target className="w-6 h-6" />,
      details: "Implemented multi-variant testing framework, analyzed 100K+ user sessions, and rebuilt the entire onboarding experience."
    },
    {
      id: 3,
      title: "Role-Permission Architecture",
      company: "Crackle",
      companyLink: "https://crackle.so",
      period: "2023",
      impact: "3x faster feature rollouts",
      description: "Built scalable permission system enabling rapid feature deployment across different user segments.",
      tags: ["System Design", "Architecture", "Scalability"],
      icon: <Users className="w-6 h-6" />,
      details: "Designed flexible RBAC system supporting 15+ user types, enabling feature flags and gradual rollouts."
    },
    {
      id: 4,
      title: "dWeb vs mWeb Strategy",
      company: "Samsung",
      companyLink: "https://samsung.com",
      period: "2023",
      impact: "Unified user experience",
      description: "Strategic analysis and implementation roadmap for desktop vs mobile web platform optimization.",
      tags: ["Strategy", "Platform Design", "User Journey"],
      icon: <Lightbulb className="w-6 h-6" />,
      details: "Comprehensive platform analysis leading to unified design system and shared component library across platforms."
    }
  ];

  return (
    <section id="playground" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent text-center">
            My PM Playground
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Interactive timeline of product stories - from user research insights to business impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Project Timeline */}
          <div className="space-y-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedProject(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  selectedProject === index
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700 shadow-lg'
                    : 'bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:shadow-md'
                } backdrop-blur-sm`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    selectedProject === index 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                  } transition-all duration-300`}>
                    {project.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-slate-900 dark:text-slate-100">
                          {project.title}
                        </h3>
                        <a 
                          href={project.companyLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        >
                          @ {project.company}
                        </a>
                      </div>
                      <span className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <Calendar size={14} />
                        {project.period}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                        {project.impact}
                      </span>
                      <ChevronRight size={16} className={`transition-transform duration-300 ${
                        selectedProject === index ? 'rotate-90' : ''
                      }`} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Details */}
          <motion.div
            key={selectedProject}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl">
                  {projects[selectedProject].icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {projects[selectedProject].title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {projects[selectedProject].period}
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full text-green-700 dark:text-green-400 text-sm font-semibold mb-4">
                  <TrendingUp size={16} />
                  {projects[selectedProject].impact}
                </div>
                
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {projects[selectedProject].details}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-slate-900 dark:text-slate-100">Key Skills Applied</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tags.map((tag, index) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PMPlayground;
