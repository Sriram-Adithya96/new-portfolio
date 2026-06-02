"use client";

import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    icon: "🚀",
    title: "QueueMind AI",
    description:
      "AI-powered smart queue management platform with real-time tracking, AI wait-time prediction, Socket.io updates, and dual dashboards.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Socket.io", "Gemini AI"],
    demoLink: "https://queue-mind-ai.vercel.app/",
    githubLink: "https://github.com/Sriram-Adithya96/QueueMind-AI",
  },
  {
    id: 2,
    icon: "🎨",
    title: "Portfolio Website",
    description:
      "Modern personal portfolio with 3D interactions, glassmorphism, Framer Motion animations, and responsive design.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    demoLink: "#",
    githubLink: "#",
  },
];

// Compact Project Card
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative overflow-hidden rounded-[24px] border border-white/40 bg-white/80 backdrop-blur-md transition shadow-lg hover:shadow-xl"
    >
      {/* Purple glow on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute -inset-1 -z-10 rounded-[24px] bg-gradient-to-br from-purple-300/30 via-violet-300/20 to-indigo-300/10 blur-2xl"
      />

      {/* Content */}
      <div className="flex flex-col h-full p-6 md:p-7">
        {/* Icon + Title */}
        <div className="mb-4">
          <div className="text-4xl mb-3">{project.icon}</div>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900">
            {project.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-slate-700 mb-5 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mb-5">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-purple-300/50 bg-purple-50/80 px-3 py-1 text-xs font-medium text-purple-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-gradient-to-r from-purple-500 to-violet-600 px-4 py-2 text-center text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-purple-500/30 active:scale-95"
          >
            Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg border border-slate-300 bg-white/50 px-4 py-2 text-center text-sm font-semibold text-slate-900 transition hover:bg-white hover:border-slate-400 active:scale-95"
          >
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturedProjectsSection() {
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
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">Featured Work</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-slate-900">
          Selected Projects
        </h2>
      </motion.div>

      {/* Projects Grid - 2 columns responsive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
