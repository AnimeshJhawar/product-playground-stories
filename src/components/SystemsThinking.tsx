
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Users, Zap, BarChart3, Settings, ArrowRight } from 'lucide-react';

const SystemsThinking = () => {
  const [activeSystem, setActiveSystem] = useState(0);

  const systems = [
    {
      title: "User Journey Mapping",
      icon: <Users className="w-8 h-8" />,
      description: "Multi-touchpoint analysis for healthcare user experiences",
      diagram: "user-journey",
      metrics: ["7 key touchpoints", "40% reduced friction", "15+ user personas"]
    },
    {
      title: "Feature Flag Architecture",
      icon: <GitBranch className="w-8 h-8" />,
      description: "Scalable system for gradual feature rollouts and A/B testing",
      diagram: "feature-flags",
      metrics: ["3x faster deployments", "99.9% uptime", "15+ user segments"]
    },
    {
      title: "Growth Funnel Framework",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Data-driven approach to conversion optimization",
      diagram: "growth-funnel",
      metrics: ["25% conversion boost", "50K+ analyzed sessions", "12 experiment variants"]
    },
    {
      title: "Permission Matrix Design",
      icon: <Settings className="w-8 h-8" />,
      description: "Role-based access control for healthcare platform",
      diagram: "permissions",
      metrics: ["15+ user roles", "200+ permissions", "Zero security incidents"]
    }
  ];

  const diagrams = {
    "user-journey": (
      <div className="w-full h-64 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 flex items-center justify-center">
        <div className="grid grid-cols-4 gap-4 w-full">
          {["Awareness", "Research", "Decision", "Action"].map((stage, i) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold">
                {i + 1}
              </div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{stage}</p>
              {i < 3 && <ArrowRight className="w-4 h-4 mx-auto mt-2 text-slate-400" />}
            </motion.div>
          ))}
        </div>
      </div>
    ),
    "feature-flags": (
      <div className="w-full h-64 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-2xl p-6">
        <div className="grid grid-cols-3 gap-4 h-full">
          <div className="space-y-3">
            <div className="bg-white dark:bg-slate-700 p-3 rounded-lg shadow-sm">
              <div className="w-full h-2 bg-green-200 dark:bg-green-700 rounded-full">
                <div className="w-3/4 h-full bg-green-500 rounded-full"></div>
              </div>
              <p className="text-xs mt-2 text-slate-600 dark:text-slate-300">Feature A: 75%</p>
            </div>
            <div className="bg-white dark:bg-slate-700 p-3 rounded-lg shadow-sm">
              <div className="w-full h-2 bg-blue-200 dark:bg-blue-700 rounded-full">
                <div className="w-1/2 h-full bg-blue-500 rounded-full"></div>
              </div>
              <p className="text-xs mt-2 text-slate-600 dark:text-slate-300">Feature B: 50%</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Zap className="w-16 h-16 text-yellow-500" />
          </div>
          <div className="flex flex-col justify-center space-y-2">
            <div className="text-xs font-medium text-slate-600 dark:text-slate-300">Target Groups:</div>
            <div className="space-y-1">
              <div className="bg-purple-100 dark:bg-purple-900/30 px-2 py-1 rounded text-xs">Premium Users</div>
              <div className="bg-orange-100 dark:bg-orange-900/30 px-2 py-1 rounded text-xs">Beta Testers</div>
              <div className="bg-pink-100 dark:bg-pink-900/30 px-2 py-1 rounded text-xs">Region Specific</div>
            </div>
          </div>
        </div>
      </div>
    ),
    "growth-funnel": (
      <div className="w-full h-64 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-2xl p-6">
        <div className="h-full flex items-center justify-center">
          <svg width="300" height="200" viewBox="0 0 300 200" className="text-slate-700 dark:text-slate-300">
            <polygon points="50,20 250,20 200,60 100,60" fill="rgb(59 130 246)" opacity="0.8" />
            <polygon points="100,60 200,60 180,100 120,100" fill="rgb(16 185 129)" opacity="0.8" />
            <polygon points="120,100 180,100 170,140 130,140" fill="rgb(245 158 11)" opacity="0.8" />
            <polygon points="130,140 170,140 165,180 135,180" fill="rgb(239 68 68)" opacity="0.8" />
            <text x="150" y="40" textAnchor="middle" className="text-sm font-medium fill-white">Visitors: 100K</text>
            <text x="150" y="80" textAnchor="middle" className="text-sm font-medium fill-white">Engaged: 45K</text>
            <text x="150" y="120" textAnchor="middle" className="text-sm font-medium fill-white">Qualified: 12K</text>
            <text x="150" y="160" textAnchor="middle" className="text-sm font-medium fill-white">Converted: 3K</text>
          </svg>
        </div>
      </div>
    ),
    "permissions": (
      <div className="w-full h-64 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6">
        <div className="grid grid-cols-4 gap-2 h-full">
          {["Admin", "Doctor", "Patient", "Lab Tech"].map((role, i) => (
            <div key={role} className="space-y-2">
              <div className="text-center text-sm font-semibold text-slate-700 dark:text-slate-300">{role}</div>
              <div className="space-y-1">
                {["Read", "Write", "Delete", "Manage"].map((permission, j) => (
                  <div
                    key={permission}
                    className={`h-6 rounded text-xs flex items-center justify-center text-white font-medium ${
                      (i === 0) || (i === 1 && j < 3) || (i === 2 && j < 2) || (i === 3 && j < 2)
                        ? 'bg-green-500'
                        : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  >
                    {permission}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  };

  return (
    <section id="systems" className="py-20 bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-purple-800 dark:from-slate-100 dark:to-purple-200 bg-clip-text text-transparent">
            🧠 Thinking in Systems
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Visual breakdowns of the frameworks and architectures behind successful product features
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* System Navigation */}
          <div className="space-y-4">
            {systems.map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setActiveSystem(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeSystem === index
                    ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-blue-200 dark:border-blue-700 shadow-lg'
                    : 'bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:shadow-md'
                } backdrop-blur-sm`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${
                    activeSystem === index 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                  } transition-all duration-300`}>
                    {system.icon}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                      {system.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm">
                      {system.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* System Visualization */}
          <div className="lg:col-span-2">
            <motion.div
              key={activeSystem}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {systems[activeSystem].title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {systems[activeSystem].description}
                </p>
              </div>

              {/* System Diagram */}
              <div className="mb-8">
                {diagrams[systems[activeSystem].diagram]}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4">
                {systems[activeSystem].metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-xl"
                  >
                    <div className="font-bold text-lg text-blue-600 dark:text-blue-400">
                      {metric.split(':')[0]}
                    </div>
                    {metric.includes(':') && (
                      <div className="text-sm text-slate-600 dark:text-slate-300">
                        {metric.split(':')[1]}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemsThinking;
