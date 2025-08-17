import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  company: string;
  logo: string;
  title: string;
  duration: string;
  summary: string;
  location: string;
  fullDescription: string;
  achievements: string[];
  skills: string[];
  link?: string;
}

const experiences: Experience[] = [
  {
    company: "Crackle",
    logo: "/lovable-uploads/8afa878a-8e32-45d5-922d-5826f7ae39b2.png",
    title: "Product Development Intern",
    duration: "Jan 2024 – May 2024",
    summary: "Built OTC e-pharmacy MVP from scratch.",
    location: "Remote",
    fullDescription: "Led the development of an over-the-counter e-pharmacy platform from conception to launch, achieving significant user adoption and creating seamless cross-team collaboration processes.",
    achievements: [
      "Built OTC e-pharmacy MVP from scratch achieving 200K+ monthly visits",
      "Designed and managed cross-team handoffs for seamless delivery experience",
      "Conducted user research and market analysis for pharmacy digitization strategy"
    ],
    skills: ["Product Development", "E-commerce", "User Research", "Cross-functional Leadership"],
    link: "https://meditally.lovable.app/"
  },
  {
    company: "Samsung",
    logo: "/lovable-uploads/ae619e62-847a-4da5-be26-da76e8ba61ac.png",
    title: "Software Development Intern",
    duration: "May 2023 – July 2023",
    summary: "Researched voice assistant onboarding flows.",
    location: "Seoul, South Korea",
    fullDescription: "Conducted comprehensive research on voice assistant user experience for Samsung's massive user base, contributing to process optimization innovations that led to patent applications.",
    achievements: [
      "Researched voice assistant onboarding flows for Samsung's 10M+ user base",
      "Filed 2 process optimization patents with the research team",
      "Analyzed user behavior patterns and designed improved interaction flows"
    ],
    skills: ["Voice UX", "User Research", "Patent Filing", "Process Optimization"]
  }
];

export default function ExperienceCarousel() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExperienceClick = (experience: Experience) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
            Past Experience
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Previous internships and roles that shaped my product journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleExperienceClick(experience)}
              className="glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-700">
                  <img 
                    src={experience.logo} 
                    alt={`${experience.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {experience.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                    <span>{experience.company}</span>
                    <span>•</span>
                    <span>{experience.duration}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                    {experience.summary}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {experience.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Experience Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-200 dark:border-slate-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-700">
                  <img 
                    src={selectedExperience.logo} 
                    alt={`${selectedExperience.company} logo`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    {selectedExperience.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {selectedExperience.company} • {selectedExperience.duration}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    {selectedExperience.location}
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    About the Role
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                    {selectedExperience.fullDescription}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  {selectedExperience.company === "Crackle" && (
                    <a 
                      href="https://meditally.lovable.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                    >
                      View Prototype (made for mobile) →
                    </a>
                  )}
                </div>

                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">
                    Skills & Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExperience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}