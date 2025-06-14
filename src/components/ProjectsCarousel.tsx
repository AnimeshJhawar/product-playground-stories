
import React, { useState } from "react";
import SectionCarousel from "./SectionCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { Java, Python, Figma } from "lucide-react";

const projects = [
  {
    name: "Pharmacy Digitization",
    locked: false,
    impact: "Digitized pharmacy workflows for hundreds of clinics.",
    tools: [<Java key="java" />, <Figma key="figma" />],
  },
  {
    name: "DSCoin",
    locked: true,
    impact: "Blockchain demo for secure transactions & smart contracts.",
    tools: [<Java key="java" />, <Python key="python" />],
  },
  {
    name: "Psychological Survey Website",
    locked: true,
    impact: "Survey/calibration platform for behavioral research.",
    tools: [<Figma key="figma" />],
  }
];

export default function ProjectsCarousel() {
  const [unlocked, setUnlocked] = useState([true, false, false]);
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  const handleUnlock = (i: number) => {
    setUnlocked(prev => prev.map((v, idx) => idx === i ? true : v));
    setActiveIdx(i);
  };

  return (
    <section id="projects" className="w-full my-2">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 ml-4 mb-2">What I’ve Built</h3>
      <SectionCarousel ariaLabel="Projects">
        {projects.map((proj, i) => (
          <motion.div key={proj.name} className="relative w-full">
            <div
              className={`glass-card min-h-44 flex flex-col items-center justify-center p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md transition-all cursor-pointer
                ${unlocked[i] ? "bg-white/80 dark:bg-slate-900/80" : "bg-slate-100/70 dark:bg-slate-800/70"}
              `}
              onClick={() => !unlocked[i] && handleUnlock(i)}
            >
              <div className="font-semibold text-center text-base text-slate-900 dark:text-slate-100 mb-1">
                {proj.name}
              </div>
              <div className={`flex gap-2 text-sm items-center justify-center mb-2`}>
                {proj.tools}
              </div>
              <AnimatePresence>
                {unlocked[i] ? (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-slate-700 dark:text-slate-300 text-sm text-center"
                  >
                    {proj.impact}
                  </motion.p>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center"
                  >
                    <span className="text-2xl">🔒</span>
                    <span className="text-sm text-slate-400">Tap to unlock</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </SectionCarousel>
    </section>
  );
}
