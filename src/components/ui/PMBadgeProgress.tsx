import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "./badge";

const BADGES = [
  { name: "🧠 Storyteller", emoji: "📖", trigger: "playground", color: "bg-blue-200 dark:bg-blue-900/60" },
  { name: "📊 Optimizer", emoji: "📉", trigger: "projects", color: "bg-violet-200 dark:bg-violet-900/60" },
  { name: "💬 Empathizer", emoji: "🫂", trigger: "roles", color: "bg-teal-200 dark:bg-teal-900/60" },
  { name: "🚀 Builder", emoji: "🔧", trigger: "experience", color: "bg-pink-200 dark:bg-pink-900/60" },
  { name: "🎯 Strategist", emoji: "🧩", trigger: "systems", color: "bg-yellow-200 dark:bg-yellow-900/60" },
];

export default function PMBadgeProgress() {
  // badge state: unlocked[triggerKey] = true if visited
  const [unlocked, setUnlocked] = useState<{ [key: string]: boolean }>({});
  const [showModal, setShowModal] = useState(false);

  // Simulate unlocks by listening to elements with ids matching the triggers showing in viewport (or by calling unlock from sections)
  useEffect(() => {
    const handleScroll = () => {
      BADGES.forEach((badge) => {
        if (!unlocked[badge.trigger]) {
          const el = document.getElementById(badge.trigger);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.7 && rect.bottom > 0) {
              setUnlocked(prev => ({ ...prev, [badge.trigger]: true }));
            }
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Clean up
    return () => window.removeEventListener("scroll", handleScroll);
  }, [unlocked]);

  // Show modal when all badges unlocked
  useEffect(() => {
    if (BADGES.every(b => unlocked[b.trigger])) {
      setShowModal(true);
    }
  }, [unlocked]);
  
  // Progress calculation
  const progress = BADGES.filter(b => unlocked[b.trigger]).length / BADGES.length;

  return (
    <>
      <div className="w-full px-4 py-2 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center">
        <div className="flex items-center gap-3 select-none">
          <div className="relative flex items-center gap-2">
            {BADGES.map((b, i) => (
              <motion.div
                className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm ring-1 ring-slate-300 dark:ring-slate-600 transition-all duration-500 ${unlocked[b.trigger] ? b.color + " shadow-md" : "bg-slate-100 dark:bg-slate-800 opacity-50"}`}
                key={b.name}
                animate={{ scale: unlocked[b.trigger] ? 1.05 : 1, filter: unlocked[b.trigger] ? "brightness(1.1)" : "none" }}
                title={b.name}
              >
                <span className="text-xs">{b.emoji}</span>
              </motion.div>
            ))}
          </div>
          <motion.div className="w-24 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-1.5 bg-gradient-to-r from-blue-400 via-pink-400 to-violet-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl max-w-xs px-8 py-10 text-center"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-sora font-bold mb-2">
                🎉 You're now an honorary <br /> PM-in-chief! <span className="text-3xl">👑</span>
              </h3>
              <p className="text-slate-700 dark:text-slate-300 font-inter mb-4">Badge mastery unlocked. Send your résumé to SpaceX?</p>
              <button
                className="px-5 py-2 mt-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow hover:scale-105 transition"
                onClick={() => setShowModal(false)}
              >
                Woohoo!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}