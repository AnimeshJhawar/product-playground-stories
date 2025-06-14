
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MetaFunFact() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full flex justify-center items-center py-8">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center font-sora text-base px-3 py-1.5 rounded-full text-blue-700 dark:text-blue-400 bg-white/60 dark:bg-slate-900/40 ring-1 ring-blue-200 dark:ring-blue-700 shadow hover:bg-blue-100/70 dark:hover:bg-blue-900/30 transition-all"
      >
        <span role="img" aria-label="Eyes">👀</span>
        <span className="ml-1 font-semibold">How was this made?</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 shadow-2xl w-80 max-w-[96vw] font-inter">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 0.15,
                  staggerChildren: 0.13
                }}
              >
                <motion.h4
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-sora font-bold mb-2 text-lg"
                >
                  🛠️ This website was made with AI.
                </motion.h4>
                <motion.ul>
                  <motion.li
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-1"
                  >In a parallel world, this would’ve taken:</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >2 weeks of ideation</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >2 weeks of designer drama</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >4 weeks of dev + last-minute Figma handoffs</motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 }}
                  >2 weeks of QA + 3 forgotten bugs 🪲</motion.li>
                </motion.ul>
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                  className="mt-2"
                >
                  But hey — here you go:<br />
                  ✅ One mad Animesh<br />
                  ✅ One smart AI<br />
                  ⏱️ Output in 1 day
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 }}
                  className="mt-2 text-slate-600 dark:text-slate-400"
                >Not the most optimum sprint, but definitely a good one 😉</motion.p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
