
import React from "react";
import { motion } from "framer-motion";

const IntroSection = () => (
  <section className="w-full min-h-[70vh] pt-16 pb-10 flex flex-col items-center bg-transparent">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center w-full"
    >
      {/* Profile + Halo */}
      <div className="relative mb-4">
        <img
          src="/lovable-uploads/d37d583c-e245-4f7a-ab32-d863d9c0abfd.png"
          alt="Animesh Jhawar profile"
          className="w-28 h-28 md:w-32 md:h-32 rounded-full shadow-2xl ring-4 ring-white/60 dark:ring-blue-900 object-cover mx-auto"
        />
        <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-200 via-pink-200 to-purple-200 blur-xl opacity-80 animate-pulse-slow -z-10" />
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 dark:text-slate-100 text-center">
        Animesh Jhawar <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Product Thinker</span>
      </h1>
      <h2 className="text-lg mt-2 font-inter text-slate-700 dark:text-slate-200 text-center font-medium">
        Story-Led Builder
      </h2>
      <p className="text-base mt-2 font-inter text-slate-500 dark:text-slate-400 text-center max-w-xs mx-auto">
        From healthtech to blockchain — shaping better journeys.
      </p>
      {/* Glass Nav */}
      <nav className="flex flex-wrap gap-3 mt-4">
        {[
          { label: "About", href: "#about" },
          { label: "Experience", href: "#experience" },
          { label: "Projects", href: "#projects" },
          { label: "YouTube", href: "https://www.youtube.com/@beingaakrshit3036", newTab: true },
          { label: "Connect", href: "#connect" },
        ].map(btn => (
          <a
            key={btn.label}
            href={btn.href}
            target={btn.newTab ? "_blank" : undefined}
            rel={btn.newTab ? "noopener noreferrer" : undefined}
            className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 px-3 py-1 rounded-xl shadow border border-slate-200 dark:border-slate-800 font-semibold text-slate-800 dark:text-slate-100 hover:bg-blue-50 dark:hover:bg-blue-900/60 transition-all text-sm"
          >
            {btn.label}
          </a>
        ))}
      </nav>
    </motion.div>
  </section>
);

export default IntroSection;
