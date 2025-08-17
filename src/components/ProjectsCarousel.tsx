import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Terminal, Figma, Github, ExternalLink } from "lucide-react";

const technicalProjects = [
  {
    name: "Pharmacy Digitization",
    impact: "Digitized pharmacy workflows for hundreds of clinics.",
    tools: [<Code2 key="java" className="w-5 h-5" />, <Figma key="figma" className="w-5 h-5" />],
    githubLink: "https://github.com/animesh",
  },
  {
    name: "DSCoin",
    impact: "Blockchain demo for secure transactions & smart contracts.",
    tools: [<Code2 key="java" className="w-5 h-5" />, <Terminal key="python" className="w-5 h-5" />],
    githubLink: "https://github.com/animesh",
  },
];

const caseStudies = [
  {
    name: "Psychological Survey Platform",
    impact: "Survey/calibration platform for behavioral research.",
    tools: [<Figma key="figma" className="w-5 h-5" />],
    caseStudyLink: "https://example.com/case-study",
  },
  {
    name: "Groww Campus Recruitment Deck",
    impact: "Strategic product case study for campus recruitment at Groww.",
    tools: [<Figma key="figma" className="w-5 h-5" />],
    caseStudyLink: "https://drive.google.com/file/d/1xFn2sjJgE8ww9UxzIsqiOP7rnGYxYkan/view?usp=sharing",
  },
  {
    name: "Flipkart Campus Recruitment Deck", 
    impact: "Product strategy and analysis for Flipkart recruitment process.",
    tools: [<Figma key="figma" className="w-5 h-5" />],
    caseStudyLink: "https://drive.google.com/file/d/1yY9feLpPM6FsWUZGxvlGUb8QgxwQY6zX/view?usp=sharing",
  },
];

export default function ProjectsCarousel() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const ProjectCard = ({ projects, type }: { projects: any[], type: string }) => (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((proj, i) => (
        <motion.div 
          key={proj.name} 
          className="glass-card bg-white/70 dark:bg-slate-900/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md cursor-pointer hover:shadow-lg transition-all"
          onClick={() => setSelectedProject(proj)}
          whileHover={{ y: -2 }}
        >
          <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2">{proj.name}</div>
          <div className="flex gap-2 mb-3">{proj.tools}</div>
          <p className="text-slate-700 dark:text-slate-300 text-sm">{proj.impact}</p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
            What I've Built
          </h2>
        </motion.div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">My Technical Project Repo</h3>
            <ProjectCard projects={technicalProjects} type="technical" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center">My Case Studies</h3>
            <ProjectCard projects={caseStudies} type="case-study" />
          </div>
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-3xl max-w-md w-full border border-slate-200 dark:border-slate-700"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">{selectedProject.name}</h3>
                <p className="text-slate-700 dark:text-slate-300 mb-6">{selectedProject.impact}</p>
                
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-slate-900 dark:bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-colors"
                  >
                    <Github size={20} />
                    View on GitHub
                  </a>
                )}

                {selectedProject.caseStudyLink && (
                  <a
                    href={selectedProject.caseStudyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                    View Case Study
                  </a>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}