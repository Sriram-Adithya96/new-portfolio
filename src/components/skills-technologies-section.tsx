"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const skillCategories = [
  {
    id: 1,
    title: "Frontend Development",
    technologies: ["React.js", "Next.js", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"],
    icon: "🎨",
  },
  {
    id: 2,
    title: "Backend Development",
    technologies: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
    icon: "⚙️",
  },
  {
    id: 3,
    title: "Database & Real-Time Systems",
    technologies: ["MongoDB", "Mongoose", "Socket.io"],
    icon: "💾",
  },
  {
    id: 4,
    title: "AI & Developer Tools",
    technologies: ["Gemini AI", "VS Code", "Git", "GitHub", "GitHub Actions", "Postman", "Vercel", "Render"],
    icon: "🤖",
  },
];

function SkillCard({ category, index }: { category: typeof skillCategories[0]; index: number }) {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const springX = useSpring(tiltX, { stiffness: 170, damping: 18, mass: 0.4 });
  const springY = useSpring(tiltY, { stiffness: 170, damping: 18, mass: 0.4 });
  const transform = useTransform(
    [springX, springY],
    ([x, y]) => `perspective(1100px) rotateX(${x}deg) rotateY(${y}deg)`,
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const px = (event.clientX - rect.left) / rect.width;
        const py = (event.clientY - rect.top) / rect.height;
        tiltY.set((px - 0.5) * 4);
        tiltX.set((0.5 - py) * 4);
      }}
      onMouseLeave={() => {
        tiltX.set(0);
        tiltY.set(0);
      }}
      style={{ transform }}
      className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/50 backdrop-blur-xl transition shadow-md hover:shadow-lg"
    >
      {/* Hover glow effect */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-purple-300/30 via-indigo-300/20 to-blue-300/20 blur-2xl"
      />

      {/* Content */}
      <div className="relative p-6 md:p-7">
        {/* Icon & Title */}
        <div className="mb-6 flex items-start gap-4">
          <div className="text-4xl">{category.icon}</div>
          <h3 className="text-xl font-bold text-slate-900 leading-tight">
            {category.title}
          </h3>
        </div>

        {/* Technology badges */}
        <div className="flex flex-wrap gap-2">
          {category.technologies.map((tech) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0.6 }}
              whileHover={{ opacity: 1, scale: 1.05 }}
              className="inline-flex items-center rounded-full border border-indigo-200/60 bg-indigo-50/70 px-3 py-1.5 text-xs font-semibold text-indigo-700 transition backdrop-blur-sm"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsTechnologiesSection() {
  return (
    <section className="relative mx-auto mt-20 w-[min(1200px,92vw)] overflow-hidden md:mt-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-gradient-to-bl from-blue-200/10 via-indigo-200/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-200/10 to-transparent blur-3xl" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 text-center md:mb-16"
      >
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
          What I Work With
        </p>
        <h2 className="mt-3 bg-gradient-to-r from-slate-900 via-indigo-800 to-slate-900 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Skills & Technologies
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed">
          Technologies, frameworks, and tools I use to build modern web applications and AI-powered solutions.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-12">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.id} category={category} index={index} />
        ))}
      </div>

      {/* Current Focus Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="group relative overflow-hidden rounded-2xl border border-white/40 bg-white/50 backdrop-blur-xl p-8 md:p-10 text-center shadow-md transition"
      >
        {/* Hover glow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.4 }}
          transition={{ duration: 0.3 }}
          className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-cyan-300/30 via-purple-300/30 to-indigo-300/20 blur-2xl"
        />

        {/* Content */}
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-3">
            My Current Focus
          </p>
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            Building the Future
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed">
            Building full-stack MERN applications, integrating AI into real-world solutions, and exploring scalable software systems.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
