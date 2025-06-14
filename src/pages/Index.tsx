import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PMPlayground from '../components/PMPlayground';
import SystemsThinking from '../components/SystemsThinking';
import LifeBeyondWork from '../components/LifeBeyondWork';
import ContactSection from '../components/ContactSection';
import ThemeToggle from '../components/ThemeToggle';
import PMBadgeProgress from '../components/ui/PMBadgeProgress';
import MetaFunFact from '../components/ui/MetaFunFact';

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-purple-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all font-sora">
      {/* Theme toggle, header, etc */}
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      <Header />
      {/* HERO */}
      <section className="relative flex flex-col items-center pt-28 pb-14 min-h-[60vh] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 flex flex-col items-center"
        >
          {/* Avatar with glow */}
          <div className="relative">
            <img
              src="/lovable-uploads/d37d583c-e245-4f7a-ab32-d863d9c0abfd.png"
              alt="Animesh Jhawar profile"
              className="w-32 h-32 rounded-full shadow-2xl ring-4 ring-white/60 dark:ring-blue-900 object-cover"
            />
            {/* Float Glow Halo */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-200 via-pink-200 to-purple-200 blur-xl opacity-90 animate-pulse-slow -z-10" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mt-8 text-slate-900 dark:text-slate-100 leading-tight text-center">
            Animesh Jhawar – <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Product Thinker</span>
            <br />
            <span className="text-xl font-medium text-violet-600 dark:text-violet-300">Story-Led Builder</span>
          </h1>
          <h2 className="text-lg mt-2 font-inter text-slate-700 dark:text-slate-300 text-center">
            From healthtech to blockchain — shaping better journeys.
          </h2>
          {/* Glass navbar buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
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
                className="backdrop-blur-md bg-white/60 dark:bg-slate-900/50 px-4 py-2 rounded-xl shadow border border-slate-200 dark:border-slate-800 font-semibold text-slate-800 dark:text-slate-100 hover:bg-blue-50/80 dark:hover:bg-blue-900/70 transition-all text-base"
              >
                {btn.label}
              </a>
            ))}
          </div>
        </motion.div>
        {/* Optional: gently animated background particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Use simple animated gradient blobs or particles here in later phase */}
        </div>
      </section>
      {/* "Current Roles" Example area with Tata 1mg logo */}
      <section className="container mx-auto py-10 flex flex-col items-center" id="experience">
        <div className="glassmorphism-card flex flex-col justify-center items-center gap-2 rounded-2xl bg-white/60 dark:bg-slate-900/70 shadow-lg px-6 py-5 border border-slate-200 dark:border-slate-800 w-full max-w-xs">
          <img src="/lovable-uploads/45b571f1-3160-4a68-b4e0-25bd8d7fcb56.png" alt="Tata 1mg Logo" className="w-14 h-14 rounded-xl shadow" />
          <div className="font-bold mt-2 text-lg text-slate-900 dark:text-slate-100">APM @ Tata 1mg</div>
          <p className="text-sm text-slate-700 dark:text-slate-400 text-center mb-1">Redefining healthtech, one product at a time.</p>
          {/* Example badge for demonstration */}
          <div className="inline-flex gap-2 font-inter">
            <span className="bg-blue-100 text-blue-800 px-2 rounded-full text-xs font-medium">2024–Now</span>
            <span className="bg-green-100 text-green-800 px-2 rounded-full text-xs font-medium">Active</span>
          </div>
        </div>
      </section>
      {/* (Add more horizontal swipe and detailed sections later as you described) */}
      {/* Dummy sections for badge unlock triggers */}
      <div id="projects" className="h-32" />
      <div id="data" className="h-32" />
      <div id="leadership" className="h-32" />
      <div id="experience" className="h-32" />
      <div id="funnel" className="h-32" />
      {/* Footer: meta fun fact */}
      <MetaFunFact />
      {/* PM badge progress system */}
      <PMBadgeProgress />
      <PMPlayground />
      <SystemsThinking />
      <LifeBeyondWork />
      <ContactSection />
    </div>
  );
};

export default Index;
