"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({
  end,
  duration = 1600,
  suffix = "",
  decimals = 0,
  startAnimation,
}: {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
  startAnimation: boolean;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!startAnimation) return;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [duration, end, startAnimation]);

  return (
    <span>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const stats = [
  { label: "Projects Built", value: 24, suffix: "+", decimals: 0 },
  { label: "GitHub Repositories", value: 52, suffix: "+", decimals: 0 },
  { label: "Intermediate Score", value: 97.1, suffix: "%", decimals: 1 },
  { label: "TG EAPCET Rank", value: 8000, suffix: "", decimals: 0 },
];

export function AboutSection() {
  const [start, setStart] = useState(false);

  return (
    <section className="mx-auto mt-10 w-[min(1120px,92vw)] rounded-[2rem] glass-card p-6 md:mt-12 md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        onViewportEnter={() => setStart(true)}
      >
        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">About Me</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
          Building with code, curiosity, and consistency.
        </h2>
        <p className="mt-4 max-w-3xl text-slate-600 md:text-lg">
          I am a Computer Science student and MERN Stack Developer passionate about
          building modern web applications and exploring Artificial Intelligence.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <motion.article
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 * index }}
            className="rounded-2xl border border-white/80 bg-white/70 p-5 shadow-glass backdrop-blur-xl"
          >
            <p className="text-sm text-slate-500">{item.label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
              <CountUp
                end={item.value}
                decimals={item.decimals}
                suffix={item.suffix}
                startAnimation={start}
              />
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
