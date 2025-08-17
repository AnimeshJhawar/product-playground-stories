import React, { useState } from "react";
import SectionCarousel from "./SectionCarousel";
import { motion } from "framer-motion";

const awards = [
  {
    name: "Thinking Competition - First Runner Up",
    detail: "Issued by Indian Network For Impact",
    year: "Dec 2024",
    logo: "/lovable-uploads/f464991b-15e7-4982-ac64-a80948474c26.png"
  },
  {
    name: "Business Mela Contest Winner",
    detail: "Issued by Recruit Co.Pvt. Ltd and IIT Delhi",
    year: "May 2024",
    logo: "/lovable-uploads/863f0d2c-1199-46ce-ae8d-11dd50ff8c8f.png"
  },
  {
    name: "Best House Secretary Award",
    detail: "Issued by Board of Hostel Management, IIT Delhi",
    year: "May 2024",
    logo: "/lovable-uploads/d687c6b1-d050-4cb4-867a-c0c07f79897a.png"
  },
  {
    name: "Cumulative Outstanding Contribution to Hostel Activities",
    detail: "Issued by Indian Institute of Technology, Delhi",
    year: "May 2024",
    logo: "/lovable-uploads/d687c6b1-d050-4cb4-867a-c0c07f79897a.png"
  },
  {
    name: "Pride of Alumni Relations",
    detail: "Issued by Student Alumni Relations, IIT Delhi",
    year: "May 2024",
    logo: "/lovable-uploads/d687c6b1-d050-4cb4-867a-c0c07f79897a.png"
  },
  {
    name: "Best Maintenance Secretary",
    detail: "Issued by Board of Hostel Management, IIT Delhi",
    year: "May 2023",
    logo: "/lovable-uploads/d687c6b1-d050-4cb4-867a-c0c07f79897a.png"
  },
  {
    name: "Outstanding Contribution to Club",
    detail: "Issued by Student Alumni Relations, IIT Delhi",
    year: "May 2023",
    logo: "/lovable-uploads/d687c6b1-d050-4cb4-867a-c0c07f79897a.png"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award, i) => (
            <motion.div 
              key={award.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`glass-card flex flex-col items-center p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow transition-all cursor-pointer min-h-28
                  ${expandedIdx === i ? "ring-2 ring-yellow-400 bg-yellow-50/90 dark:bg-yellow-900/40 z-10" : "bg-white/80 dark:bg-slate-900/80 hover:shadow-lg"}
                `}
                onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
              >
                <div className="flex items-center gap-3 w-full mb-2">
                  {award.logo && (
                    <img src={award.logo} alt={award.name} className="w-8 h-8 rounded-lg object-cover flex-shrink-0" />
                  )}
                  {!award.logo && (
                    <div className="w-8 h-8 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-400 flex-shrink-0">
                      {award.name.split(' ').map(word => word[0]).join('').substring(0, 2)}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-900 dark:text-slate-100 text-sm line-clamp-2">{award.name}</div>
                    <div className="text-xs text-slate-400">{award.year}</div>
                  </div>
                </div>
                {expandedIdx === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-slate-700 dark:text-slate-300 text-xs text-center mt-2"
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