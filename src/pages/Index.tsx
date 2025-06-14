import React, { useState } from "react";
import IntroSection from "../components/IntroSection";
import RolesCarousel from "../components/RolesCarousel";
import ExperienceCarousel from "../components/ExperienceCarousel";
import ProjectsCarousel from "../components/ProjectsCarousel";
import AwardsCarousel from "../components/AwardsCarousel";
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
      {/* Sticky Theme toggle for mobile */}
      <div className="fixed top-2 right-4 z-50">
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      </div>
      {/* Stick PM badge progress at top on mobile */}
      <div className="sticky top-0 z-40">
        <PMBadgeProgress />
      </div>
      {/* Intro, Roles, Experience, Projects, Awards as swipeable carousels */}
      <main className="flex flex-col gap-6 pt-2 pb-24">
        <IntroSection />
        <RolesCarousel />
        <ExperienceCarousel />
        <ProjectsCarousel />
        <AwardsCarousel />
        {/* Extend further: add ImpactCarousel, etc if needed */}
        <SystemsThinking />
        <LifeBeyondWork />
        <ContactSection />
      </main>
      {/* Meta Fun Fact: sticky to bottom, always accessible */}
      <div className="fixed bottom-3 w-full flex items-center justify-center z-50">
        <MetaFunFact />
      </div>
    </div>
  );
};

export default Index;
