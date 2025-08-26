import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, TrendingUp, Target, Lightbulb, ChevronRight } from 'lucide-react';

const PMPlayground = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "D-Web Diagnostics Website Revamp",
      company: "Tata 1mg",
      companyLink: "https://1mg.com",
      companyLogo: "/lovable-uploads/45b571f1-3160-4a68-b4e0-25bd8d7fcb56.png",
      period: "2024",
      impact: "10k+ DAUs impacted · +6% conversion · +10pp CSAT",
      description: "Complete revamp of diagnostics desktop journey with lean resources, boosting trust, SEO, and performance.",
      tags: ["Product Discovery", "UX Audit", "UI/UX Design", "Lean Product Development", "SEO Strategy"],
      icon: <TrendingUp className="w-6 h-6" />,
      details: "Redesigned entire diagnostics booking flow (Home → Search → PDP → Checkout). Conducted UX audit, optimized placement of trust-building elements, and improved conversion, SEO, and performance marketing efficiency."
    },
    {
      id: 2,
      title: "Partial Reports Development",
      company: "Tata 1mg",
      companyLink: "https://1mg.com",
      companyLogo: "/lovable-uploads/45b571f1-3160-4a68-b4e0-25bd8d7fcb56.png",
      period: "2024",
      impact: "4000+ reports automated · 20,000 CX hours saved · 18% query reduction",
      description: "Enabled automated partial reports & critical callouts, improving compliance and customer experience.",
      tags: ["Product Development", "Automation", "Compliance-Driven Design", "CX Optimization", "Operational Efficiency"],
      icon: <Target className="w-6 h-6" />,
      details: "Released partial reports for multi-test packages and automated critical callouts (4–5k/month). Saved 20,000 annual CX hours, reduced top query driver 'Where is my report?', and ensured compliance with government norms."
    },
    {
      id: 3,
      title: "Quick Commerce Communication Optimization",
      company: "Tata 1mg",
      companyLink: "https://1mg.com",
      companyLogo: "/lovable-uploads/45b571f1-3160-4a68-b4e0-25bd8d7fcb56.png",
      period: "2023-24",
      impact: "₹10L annual savings · 55% communication volume reduced",
      description: "Redesigned comms touchpoints and built monitoring dashboards, cutting costs and improving UX.",
      tags: ["Communication Strategy", "Experimentation", "Analytics", "Cost Optimization"],
      icon: <Lightbulb className="w-6 h-6" />,
      details: "Introduced structured communication flow for quick commerce orders, eliminated redundant push notifications, and built dashboards for performance monitoring. Delivered significant annual savings while improving user experience."
    },
    {
      id: 4,
      title: "Rural Pharmacy POS Thesis",
      company: "Indian Network for Impact",
      companyLink: "https://indianetworkforimpact.com/",
      companyLogo: "/lovable-uploads/f464991b-15e7-4982-ac64-a80948474c26.png",
      period: "2024 (Ongoing)",
      impact: "Market discovery project",
      description: "Defined product thesis for rural POS solution through research, prototyping, and interviews.",
      tags: ["User Research", "Market Discovery", "Product Prototyping", "Design Thinking"],
      icon: <Users className="w-6 h-6" />,
      details: "Conducted user interviews, market analysis, and prototype testing to explore inventory tracking at rural pharmacies. Built lightweight POS thesis leveraging existing tools and identified opportunities for scalable digitization."
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
                        <div className="flex items-center gap-2">
                          {project.companyLogo ? (
                            <img src={project.companyLogo} alt={project.company} className="w-4 h-4 rounded" />
                          ) : (
                            <div className="w-4 h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
                          )}
                          <a 
                            href={project.companyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                          >
                            @ {project.company}
                          </a>
                        </div>
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
