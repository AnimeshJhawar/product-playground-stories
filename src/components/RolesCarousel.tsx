
import React, { useState } from "react";
import SectionCarousel from "./SectionCarousel";
import RoleDetailModal from "./RoleDetailModal";
import { motion, AnimatePresence } from "framer-motion";

const roles = [
  {
    title: "APM @ Tata 1mg",
    logo: "/lovable-uploads/45b571f1-3160-4a68-b4e0-25bd8d7fcb56.png",
    summary: "Redefining healthtech, one product at a time.",
    period: "2024–Now",
    status: "Active",
    location: "Gurugram, India",
    fullDescription: "Leading the complete desktop web experience revamp for lab test bookings, impacting 5M+ users. I'm focused on reimagining how users discover, book, and access their health reports while working on internal order management systems to optimize our supply chain efficiency.",
    achievements: [
      "Spearheaded lab test booking flow redesign affecting 5M+ monthly users",
      "Enhanced internal order management systems improving supply chain efficiency by 25%",
      "Implemented strategic communication triggers across order journey reducing support tickets by 30%",
      "Built comprehensive dashboards for monitoring communication performance and supply chain metrics",
      "Conducted A/B testing across multiple product features improving conversion rates",
      "Led cross-functional teams including engineering, design, and operations for seamless product delivery"
    ],
    skills: ["Product Strategy", "User Research", "A/B Testing", "Supply Chain Optimization", "Healthcare UX", "Cross-functional Leadership"],
    link: undefined
  },
  {
    title: "Fellow @ Indian Network for Impact",
    logo: "",
    summary: "Bridging healthcare & technology for social impact.",
    period: "2023–24",
    status: "Fellow",
    location: "Remote",
    fullDescription: "Developing Meditelli, a comprehensive POS application designed specifically for rural pharmacies to revolutionize inventory management in underserved healthcare markets. This solution addresses critical gaps in pharmaceutical supply chain management in rural India.",
    achievements: [
      "Designed and developed Meditelli POS system for rural pharmacy inventory management",
      "Conducted extensive field research in rural pharmacy operations across 3 states",
      "Built user-friendly interface considering low digital literacy constraints",
      "Implemented offline-first architecture for areas with poor connectivity",
      "Established partnerships with 50+ rural pharmacies for pilot deployment"
    ],
    skills: ["Social Impact", "Rural Healthcare", "POS Systems", "Inventory Management", "User Research", "Product Development"],
    link: undefined
  },
  {
    title: "HPAIR 2025 Delegate – Univ. of Tokyo",
    logo: "",
    summary: "Global conference for next-gen leaders.",
    period: "2025",
    status: "Selected",
    location: "Tokyo, Japan",
    fullDescription: "Selected as one of 300 delegates worldwide for Harvard Project for Asian and International Relations (HPAIR) conference at University of Tokyo. Participating in discussions on technology, healthcare policy, and international relations with global leaders and fellow changemakers.",
    achievements: [
      "Selected from 2000+ applicants across Asia-Pacific region",
      "Representing India in technology and healthcare innovation discussions",
      "Networking with 300+ global leaders and policy makers",
      "Contributing to policy recommendations on digital health initiatives"
    ],
    skills: ["International Relations", "Policy Analysis", "Healthcare Policy", "Cross-cultural Communication", "Leadership"],
    link: undefined
  }
];

export default function RolesCarousel() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedRole, setSelectedRole] = useState<typeof roles[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRoleClick = (role: typeof roles[0]) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  return (
    <section className="w-full my-2" id="roles">
      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 ml-4 mb-2">Current Roles</h3>
      <SectionCarousel ariaLabel="Professional Roles">
        {roles.map((role, i) => (
          <motion.div key={role.title} className="relative w-full">
            <div
              className={`flex flex-col items-center justify-center glass-card min-h-44 cursor-pointer transition-all p-5
                rounded-2xl border border-slate-200 dark:border-slate-800
                ${expandedIndex === i ? "shadow-2xl scale-[1.02] z-10 bg-white/90 dark:bg-slate-900/90" : "shadow-sm bg-white/60 dark:bg-slate-900/60"}
              `}
              onClick={() => handleRoleClick(role)}
            >
              <div className="mb-2">
                {role.logo ? (
                  <img src={role.logo} alt="logo" className="w-10 h-10 rounded-xl shadow" />
                ) : (
                  <span className="w-10 h-10 block rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-2xl">
                    {role.title[0]}
                  </span>
                )}
              </div>
              <div className="font-semibold text-center text-slate-800 dark:text-slate-100 text-base">{role.title}</div>
              <div className="flex gap-2 mt-2 text-xs">
                <span className="bg-blue-100 text-blue-800 px-2 rounded-full font-medium">{role.period}</span>
                <span className="bg-green-100 text-green-800 px-2 rounded-full font-medium">{role.status}</span>
              </div>
              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    className="w-full mt-4 text-slate-700 dark:text-slate-300 text-sm"
                  >
                    {role.summary}
                    {role.link && (
                      <div className="mt-1">
                        <a href={role.link} target="_blank" className="inline-block underline text-blue-500 hover:text-blue-700 text-xs">Visit</a>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </SectionCarousel>
      
      <RoleDetailModal
        role={selectedRole}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
