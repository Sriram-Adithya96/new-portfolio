"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "TG EAPCET Rank 8000",
    description: "Secured a state-level rank showcasing strong academic consistency and focus.",
    icon: "🏅",
  },
  {
    title: "97.1% Intermediate Score",
    description: "Achieved outstanding performance in intermediate academics with disciplined effort.",
    icon: "📈",
  },
  {
    title: "Web Development Learning",
    description: "Built practical projects while learning modern frontend and MERN development workflows.",
    icon: "💻",
  },
  {
    title: "AI Learning Journey",
    description: "Actively exploring AI concepts, tools, and applications through continuous hands-on learning.",
    icon: "🤖",
  },
];

export function AchievementsSection() {
  return (
    <section className="mx-auto mt-10 w-[min(1120px,92vw)] rounded-[2rem] glass-card p-6 md:mt-12 md:p-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Achievements</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Milestones & Progress
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {achievements.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="group rounded-2xl border border-white/80 bg-white/72 p-5 shadow-glass backdrop-blur-xl transition"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-xl shadow-sm transition group-hover:scale-105 group-hover:bg-indigo-100">
                <span aria-hidden="true">{item.icon}</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
