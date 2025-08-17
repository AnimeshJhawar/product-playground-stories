import React, { useState } from "react";
import SectionCarousel from "./SectionCarousel";
import { motion } from "framer-motion";

const awards = [
  {
    name: "Thinking Competition - First Runner Up",
    detail: "Issued by Indian Network For Impact",
    year: "Dec 2024"
  },
  {
    name: "Business Mela Contest Winner",
    detail: "Issued by Recruit Co.Pvt. Ltd and IIT Delhi",
    year: "May 2024"
  },
  {
    name: "Best House Secretary Award",
    detail: "Issued by Board of Hostel Management, IIT Delhi",
    year: "May 2024"
  },
  {
    name: "Cumulative Outstanding Contribution to Hostel Activities",
    detail: "Issued by Indian Institute of Technology, Delhi",
    year: "May 2024"
  },
  {
    name: "Pride of Alumni Relations",
    detail: "Issued by Student Alumni Relations, IIT Delhi",
    year: "May 2024"
  },
  {
    name: "Best Maintenance Secretary",
    detail: "Issued by Board of Hostel Management, IIT Delhi",
    year: "May 2023"
  },
  {
    name: "Outstanding Contribution to Club",
    detail: "Issued by Student Alumni Relations, IIT Delhi",
    year: "May 2023"
  },
  {
    name: "Recruit Business Contest",
    detail: "Top prize for business case at INI fellowship",
    year: "2023"
  },
  {
    name: "INI Fellowship",
    detail: "Selected for national innovation program",
    year: "2023"
  }
];

export default function AwardsCarousel() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section id="awards" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
            Awards & Achievements
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, i) => (
            <motion.div 
              key={award.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`glass-card flex flex-col items-center p-6 min-h-36 rounded-2xl border border-slate-200 dark:border-slate-800 shadow transition-all cursor-pointer
                  ${expandedIdx === i ? "ring-2 ring-yellow-400 bg-yellow-50/90 dark:bg-yellow-900/40 z-10" : "bg-white/80 dark:bg-slate-900/80"}
                `}
                onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
              >
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
        </div>
      </div>
    </section>
  );
}