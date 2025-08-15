import React, { useState } from "react";
import Header from "../components/Header";
import IntroSection from "../components/IntroSection";
import RolesCarousel from "../components/RolesCarousel";
import ExperienceCarousel from "../components/ExperienceCarousel";
import ProjectsCarousel from "../components/ProjectsCarousel";
import AwardsCarousel from "../components/AwardsCarousel";
import PMPlayground from "../components/PMPlayground";
import PMBadgeProgress from "../components/ui/PMBadgeProgress";
import MetaFunFact from "../components/ui/MetaFunFact";
import LifeBeyondWork from "../components/LifeBeyondWork";
import SystemsThinking from "../components/SystemsThinking";
import ContactSection from "../components/ContactSection";
import ThemeToggle from "../components/ThemeToggle";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  // Auto-toggle dark mode class on <html>
  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="min-h-screen font-sora bg-gradient-to-b from-blue-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-900 w-full overflow-x-hidden">
      <Header />
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      
      {/* Main content */}
      <main className="flex flex-col">
        <IntroSection />
        <PMPlayground />
        <RolesCarousel />
        <ExperienceCarousel />
        <ProjectsCarousel />
        <AwardsCarousel />
        <SystemsThinking />
        <LifeBeyondWork />
        <ContactSection />
      </main>
      
      <PMBadgeProgress />
      <MetaFunFact />
    </div>
  );
};

export default Index;
