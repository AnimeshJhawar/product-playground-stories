import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const educationData = [
  {
    institution: "IIT Delhi",
    degree: "B.Tech",
    duration: "2020-24",
    logo: "/lovable-uploads/d687c6b1-d050-4cb4-867a-c0c07f79897a.png",
    details: {
      leadership: [
        "Deputy General Secretary, Student Alumni Relations (2023–24)",
        "House Secretary, Kumaon House (2023–24)", 
        "Outreach Coordinator, Student Alumni Relations (2022–23)",
        "Maintenance Secretary, Kumaon House (2022–23)"
      ],
      welfare: [
        "Student Mentor, Board for Student Welfare (2022–23)",
        "Head Volunteer, Office of Career Services (2022–23)",
        "Representative (a.k.a. bablu), Board for Student Welfare (2021–22)"
      ],
      cultural: [
        "Production Head, IIT Delhi On Air (2021–22)",
        "Publicity Activity Head, Tryst (2021–22)",
        "Member, Ankahi: Dramatics Society",
        "Member, Timeline: Photography Society"
      ],
      technical: [
        "Frontend Developer, NSS",
        "Frontend Developer, Devclub"
      ]
    }
  },
  {
    institution: "Department of Management Studies, IIT Delhi", 
    degree: "Management Studies",
    duration: "2023-24",
    logo: "/lovable-uploads/7f08cf7d-67dd-477b-a780-ea1ae45b9406.png",
    details: {
      courses: [
        "Managerial Accounting and Financial Management",
        "Marketing Management", 
        "Organizational and People Management",
        "Managing Operations",
        "Financial Institutions and Markets",
        "Financial Mathematics",
        "Management of Small and Medium Scale Industries"
      ]
    }
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "SSC, Class 12", 
    duration: "2019",
    logo: "/lovable-uploads/6df560c3-c310-4034-a2e2-0d802aef101b.png",
    details: {
      grade: "95.8%",
      achievements: [
        "District Rank 1 in Class 12 examinations",
        "CBSE Merit Certificate for securing a perfect 100 in Informatics Practices (Top 0.1% nationally)",
        "School President",
        "Maths Olympiad – State Stage"
      ]
    }
  },
  {
    institution: "Kendriya Vidyalaya",
    degree: "HSC, Class 10",
    duration: "2017", 
    logo: "/lovable-uploads/6df560c3-c310-4034-a2e2-0d802aef101b.png",
    details: {
      grade: "10/10 CGPA",
      achievements: [
        "KV Bhopal Zone Merit Award",
        "Green Olympiad State Merit Award", 
        "District Top Rank"
      ]
    }
  }
];

export default function Education() {
  const [selectedEducation, setSelectedEducation] = useState<typeof educationData[0] | null>(null);

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
            Education
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationData.map((edu, i) => (
            <motion.div
              key={edu.institution + edu.duration}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card bg-white/70 dark:bg-slate-900/70 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md cursor-pointer hover:shadow-lg transition-all"
              onClick={() => setSelectedEducation(edu)}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start gap-4 mb-4">
                <img src={edu.logo} alt={edu.institution} className="w-12 h-12 rounded-xl" />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 dark:text-slate-100">{edu.institution}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{edu.degree}</p>
                  <p className="text-slate-500 dark:text-slate-500 text-xs">{edu.duration}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education Modal */}
        <AnimatePresence>
          {selectedEducation && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
              onClick={() => setSelectedEducation(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-3xl max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-slate-200 dark:border-slate-700"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img src={selectedEducation.logo} alt={selectedEducation.institution} className="w-16 h-16 rounded-xl" />
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{selectedEducation.institution}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{selectedEducation.degree} • {selectedEducation.duration}</p>
                    {selectedEducation.details.grade && (
                      <p className="text-sm text-slate-500 dark:text-slate-500">Grade: {selectedEducation.details.grade}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  {selectedEducation.details.leadership && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Leadership & Coordination</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        {selectedEducation.details.leadership.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  )}

                  {selectedEducation.details.welfare && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Student Welfare & Services</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        {selectedEducation.details.welfare.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  )}

                  {selectedEducation.details.cultural && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Cultural & Creative</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        {selectedEducation.details.cultural.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  )}

                  {selectedEducation.details.technical && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Technical</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        {selectedEducation.details.technical.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  )}

                  {selectedEducation.details.courses && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Courses</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        {selectedEducation.details.courses.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  )}

                  {selectedEducation.details.achievements && (
                    <div>
                      <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Achievements</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-300">
                        {selectedEducation.details.achievements.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}