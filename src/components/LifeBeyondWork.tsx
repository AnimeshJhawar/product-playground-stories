import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, BookOpen, Gamepad2, Lightbulb, Coffee } from 'lucide-react';

const LifeBeyondWork = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "🎥 Cinema Love",
      icon: <Film className="w-6 h-6" />,
      content: {
        title: "Stories That Inspire",
        items: [
          { name: "KGF 2", why: "How cinema can present a new, larger-than-life immersive world, where every detail is well thought out and creative." },
          { name: "Money Heist", why: "A masterclass in narrative power – how the director tricks the audience, shifts sympathies, and redefines heroes through screenplay." },
          { name: "The Social Network", why: "Product strategy lessons from Zuck’s journey and execution under pressure." },
          { name: "Steve Jobs", why: "Vision meets execution storytelling – shaping ideas into revolutionary products." }
        ]
      }
    },
    {
      title: "📚 New-Age Reading",
      icon: <BookOpen className="w-6 h-6" />,
      content: {
        title: "Currently Reading Stack",
        items: [
          { name: "Bhagavad Gita", why: "Timeless lessons on duty, clarity of thought, and decision-making under dilemmas." },
          { name: "Atomic Habits", why: "Building systems for continuous improvement through small, compounding actions." },
          { name: "The Power of Your Subconscious Mind", why: "Harnessing inner thought processes to build confidence and focus." },
          { name: "Hooked", why: "Building habit-forming products by understanding human psychology." }
        ]
      }
    },
    {
      title: "🎮 Play & Sports",
      icon: <Gamepad2 className="w-6 h-6" />,
      content: {
        title: "Games & Sports Philosophy",
        items: [
          { name: "Football", why: "Teamwork, strategy, and adapting quickly in dynamic situations." },
          { name: "Gym", why: "Discipline, consistency, and incremental growth mindset." },
          { name: "Table Tennis", why: "Quick decision-making under pressure and reflex training." },
          { name: "Random Insta Ad Games", why: "Exploring quick design psychology – downloading, playing, then deleting reveals user retention challenges." }
        ]
      }
    },
    {
      title: "🎨 Creative Projects",
      icon: <Lightbulb className="w-6 h-6" />,
      content: {
        title: "Team Building & Events",
        items: [
          { name: "Swarnleela (Golden Jubilee)", why: "Complex stakeholder management & cultural storytelling." },
          { name: "50th Birthday Celebration", why: "Personalized experience design & surprise choreography." },
          { name: "Team Offsites", why: "Building psychological safety and keeping the team connected through creativity." },
          { name: "Organizing Ideas", why: "Enjoying the process of planning and executing events that keep the team together." }
        ]
      }
    }
  ];

  return (
    <section id="life" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-orange-600 dark:from-slate-100 dark:to-orange-400 bg-clip-text text-transparent">
            🎥 Life Beyond Work
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            The creative playground where lateral thinking meets personal passion
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Tab Navigation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(index)}
                className={`p-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                    : 'bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:shadow-md'
                } backdrop-blur-sm`}
              >
                <div className="flex flex-col items-center gap-2 text-center">
                  {tab.icon}
                  <span className="text-sm">{tab.title}</span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8 text-center">
              {tabs[activeTab].content.title}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {tabs[activeTab].content.items.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl"
                >
                  <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-2">
                    {item.name}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {item.why}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Personal Philosophy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-pink-50 dark:from-orange-900/20 dark:to-pink-900/20 rounded-2xl border-l-4 border-orange-400"
            >
              <div className="flex items-start gap-4">
                <Coffee className="w-6 h-6 text-orange-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Personal Philosophy
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    Every hobby teaches product thinking – from how narratives shape loyalty in cinema, 
                    to exploring retention challenges in mobile games, to orchestrating events that keep teams together. 
                    Lateral thinking outside work sharpens creative problem-solving within it.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LifeBeyondWork;
