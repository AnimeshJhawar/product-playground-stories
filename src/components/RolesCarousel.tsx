
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
    logo: "/lovable-uploads/f464991b-15e7-4982-ac64-a80948474c26.png",
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
    <section className="py-20" id="roles">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-slate-100 dark:to-blue-200 bg-clip-text text-transparent">
            Current Roles
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Actively shaping products and communities across healthtech and social impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleRoleClick(role)}
              className="glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                {role.logo && (
                  <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-700">
                    <img 
                      src={role.logo} 
                      alt={`${role.title} logo`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-1">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
                    <span>{role.period}</span>
                    <span>•</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      role.status === 'Active' 
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                        : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                    }`}>
                      {role.status}
                    </span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                    {role.summary}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {role.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <RoleDetailModal
        role={selectedRole}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
