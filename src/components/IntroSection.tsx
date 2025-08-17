
import React from "react";
import { motion } from "framer-motion";

const IntroSection = () => (
  <section id="intro" className="w-full min-h-[70vh] pt-20 pb-10 flex flex-col items-center justify-center bg-transparent relative overflow-hidden">
    {/* Background metrics/graphics */}
    <div className="absolute inset-0 opacity-10 dark:opacity-5">
      <div className="absolute top-20 left-10 text-4xl font-bold text-blue-500">40%↗</div>
      <div className="absolute top-32 right-20 text-3xl font-bold text-purple-500">25% CVR</div>
      <div className="absolute bottom-40 left-20 text-2xl font-bold text-green-500">3x Speed</div>
      <div className="absolute bottom-20 right-10 text-3xl font-bold text-orange-500">5M+ Users</div>
      <div className="absolute top-40 left-1/2 text-2xl font-bold text-pink-500">A/B Testing</div>
    </div>
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
      <h1 className="text-3xl sm:text-5xl font-bold text-slate-900 dark:text-slate-100 text-center mb-2">
        Animesh Jhawar
      </h1>
      <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center">
        Product Thinker
      </div>
      <h2 className="text-lg mt-2 font-inter text-slate-700 dark:text-slate-200 text-center font-medium">
        Story-Led Builder
      </h2>
      <p className="text-base mt-2 font-inter text-slate-500 dark:text-slate-400 text-center max-w-xs mx-auto">
        From healthtech to blockchain — shaping better journeys.
      </p>
      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="/pm-resources"
          className="backdrop-blur-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-xl shadow-lg font-semibold hover:shadow-xl hover:scale-105 transition-all"
        >
          My PM Resources
        </a>
        <a
          href="#playground"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#playground')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-xl shadow font-semibold text-slate-800 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-700 transition-all"
        >
          Explore Work
        </a>
        <a
          href="https://topmate.io/animesh_jhawar_iitd"
          target="_blank"
          rel="noopener noreferrer"
          className="backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-xl shadow font-semibold text-slate-800 dark:text-slate-100 hover:bg-white dark:hover:bg-slate-700 transition-all"
        >
          Book 1:1
        </a>
      </div>
    </motion.div>
  </section>
);

export default IntroSection;
