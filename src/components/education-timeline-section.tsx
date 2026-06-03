"use client";

import { motion } from "framer-motion";

const educationCards = [
  {
    id: 1,
    icon: "🎓",
    title: "B.Tech Computer Science Engineering",
    institution: "Neil Gogte Institute of Technology",
    year: "2025 – 2029",
    description: "Currently pursuing Computer Science Engineering with focus on:",
    highlights: [
      "Software Development",
      "MERN Stack",
      "Artificial Intelligence",
    ],
    badge: null,
  },
  {
    id: 2,
    icon: "🏆",
    title: "Intermediate (MPC)",
    institution: "St. Patrick's Junior College",
    year: "2023 – 2025",
    description: "Strong foundation in Mathematics, Physics, and analytical thinking.",
    highlights: null,
    stats: [
      { label: "Score", value: "97.1%" },
      { label: "Rank", value: "8000" },
    ],
  },
  {
    id: 3,
    icon: "⭐",
    title: "High School",
    institution: "Divyanjali High School",
    year: "Completed in 2023",
    description: "Developed discipline, logical thinking, communication, and problem-solving skills.",
    highlights: null,
    stats: [{ label: "CGPA", value: "9.5/10" }],
  },
];

// Education Card Component
function EducationCard({ card }: { card: (typeof educationCards)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-[24px] border border-white/40 bg-white/80 backdrop-blur-md transition shadow-lg hover:shadow-xl h-full min-h-[320px]"
    >
      {/* Purple glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 -z-10 rounded-[24px] bg-gradient-to-br from-purple-400/40 via-violet-300/30 to-indigo-300/20 blur-2xl"
      />

      {/* Content */}
      <div className="flex flex-col h-full p-6 md:p-7">
        {/* Icon */}
        <div className="text-4xl mb-4">{card.icon}</div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2">
          {card.title}
        </h3>

        {/* Institution */}
        <p className="text-sm text-purple-600 font-medium mb-1">
          {card.institution}
        </p>

        {/* Year */}
        <p className="text-xs text-slate-500 font-semibold mb-4">
          {card.year}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-700 leading-relaxed mb-4">
          {card.description}
        </p>

        {/* Stats Section - positioned right after description */}
        {card.stats && (
          <div className="flex flex-wrap gap-2 mb-4">
            {card.stats.map((stat, idx) => (
              <div
                key={idx}
                className="rounded-full bg-purple-50/80 border border-purple-300/50 px-4 py-2 flex items-center gap-2"
              >
                <span className="text-xs font-semibold text-purple-700">
                  {stat.label}:
                </span>
                <span className="text-sm font-bold text-purple-900">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Highlights / Skills Section */}
        {card.highlights && (
          <div className="space-y-2">
            {card.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <span className="text-purple-400 font-bold mt-0.5">•</span>
                <span className="text-sm text-slate-700">{highlight}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function EducationTimelineSection() {
  return (
    <section className="relative mx-auto mt-16 w-[min(1200px,92vw)] overflow-hidden md:mt-20">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8 text-center md:mb-10"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">Academic Journey</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          Education
        </h2>
        <p className="mt-2 text-base text-slate-600">My academic foundation and continuous learning journey in Computer Science and Technology.</p>
      </motion.div>

      {/* 3-Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {educationCards.map((card) => (
          <EducationCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
