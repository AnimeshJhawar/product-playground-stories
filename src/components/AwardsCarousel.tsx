
import React, { useState } from "react";
import SectionCarousel from "./SectionCarousel";
import { motion } from "framer-motion";

const awards = [
  {
    name: "Recruit Business Contest",
    icon: "🥇",
    detail: "Top prize for biz case at INI fellowship.",
    year: "2023"
  },
  {
    name: "INI Fellowship",
    icon: "🥈",
    detail: "Selected for national innovation program.",
    year: "2023"
  },
  {
    name: "CBSE Merit, Cultural Wins",
    icon: "🏅",
    detail: "Academic & cultural laurels at national level.",
    year: "2022"
  }
];

export default function AwardsCarousel() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="awards" className="w-full my-2">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 ml-4 mb-2">Awards & Achievements</h3>
      <SectionCarousel ariaLabel="Awards">
        {awards.map((award, i) => (
          <motion.div key={award.name} className="relative w-full">
            <div
              className={`glass-card flex flex-col items-center p-5 min-h-36 rounded-2xl border border-slate-200 dark:border-slate-800 shadow transition-all cursor-pointer
                ${expandedIdx === i ? "ring-2 ring-yellow-400 bg-yellow-50/90 dark:bg-yellow-900/40 z-10" : "bg-white/80 dark:bg-slate-900/80"}
              `}
              onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
            >
              <span className="text-3xl">{award.icon}</span>
              <div className="font-semibold text-center text-base text-slate-900 dark:text-slate-100">{award.name}</div>
              <div className="text-xs text-slate-400 mb-2">{award.year}</div>
              {expandedIdx === i && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-slate-700 dark:text-slate-300 text-xs text-center"
                >
                  {award.detail}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </SectionCarousel>
    </section>
  );
}
