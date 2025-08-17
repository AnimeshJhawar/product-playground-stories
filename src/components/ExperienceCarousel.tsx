import React, { useState } from "react";
import SectionCarousel from "./SectionCarousel";
import { motion, AnimatePresence } from "framer-motion";

const experiences = [
  {
    company: "Crackle",
    logo: "/lovable-uploads/8afa878a-8e32-45d5-922d-5826f7ae39b2.png",
    title: "Product Development Intern",
    duration: "Jan 2024 – May 2024",
    bullets: [
      "Built OTC e-pharmacy MVP from scratch achieving 200K+ monthly visits.",
      "Designed and managed cross-team handoffs for seamless delivery experience.",
      "Conducted user research and market analysis for pharmacy digitization strategy."
    ]
  },
  {
    company: "Samsung",
    logo: "/lovable-uploads/ae619e62-847a-4da5-be26-da76e8ba61ac.png",
    title: "Software Development Intern",
    duration: "May 2023 – July 2023",
    bullets: [
      "Researched voice assistant onboarding flows for Samsung's 10M+ user base.",
      "Filed 2 process optimization patents with the research team.",
      "Analyzed user behavior patterns and designed improved interaction flows."
    ]
  }
];

export default function ExperienceCarousel() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
        </motion.div>

        <SectionCarousel ariaLabel="Professional Experience">
          {experiences.map((exp, i) => (
            <motion.div key={exp.company} className="relative w-full">
              <div
                className={`glass-card flex flex-col items-center justify-center shadow-md rounded-2xl border border-slate-200 dark:border-slate-800 p-5 bg-white/70 dark:bg-slate-900/70 cursor-pointer
                  ${activeIndex === i ? "scale-105 shadow-xl ring-1 ring-blue-400 z-10" : ""}
                `}
                onClick={() => setActiveIndex(activeIndex === i ? null : i)}
              >
                <div className="mb-2">
                  {exp.logo ? (
                    <img src={exp.logo} alt="logo" className="w-10 h-10 rounded-xl shadow" />
                  ) : (
                    <span className="w-10 h-10 block rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-lg">
                      {exp.company[0]}
                    </span>
                  )}
                </div>
                <div className="font-semibold text-center text-slate-900 dark:text-slate-100 text-base">{exp.company}</div>
                <span className="text-slate-400 text-xs">{exp.title}</span>
                <span className="text-xs font-medium mt-1 bg-slate-100 dark:bg-slate-600 px-2 py-0.5 rounded">{exp.duration}</span>
                <AnimatePresence>
                  {activeIndex === i && (
                    <motion.ul
                      key="bullets"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="mt-3 text-sm text-slate-700 dark:text-slate-300 text-left list-disc pl-5"
                    >
                      {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </SectionCarousel>
      </div>
    </section>
  );
}