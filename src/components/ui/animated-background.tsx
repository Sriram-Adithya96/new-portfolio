"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(196,181,253,0.4),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(191,219,254,0.32),transparent_38%),radial-gradient(circle_at_50%_75%,rgba(221,214,254,0.22),transparent_42%),linear-gradient(180deg,#ffffff_0%,#f8faff_100%)]" />

      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -35, 0], y: [0, 18, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-0 top-12 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 24, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-90px] left-1/3 h-72 w-72 rounded-full bg-violet-200/35 blur-3xl"
      />
    </div>
  );
}
