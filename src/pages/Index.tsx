
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PMPlayground from '../components/PMPlayground';
import SystemsThinking from '../components/SystemsThinking';
import LifeBeyondWork from '../components/LifeBeyondWork';
import ContactSection from '../components/ContactSection';
import ThemeToggle from '../components/ThemeToggle';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      <Header />
      <Hero />
      <PMPlayground />
      <SystemsThinking />
      <LifeBeyondWork />
      <ContactSection />
    </div>
  );
};

export default Index;
