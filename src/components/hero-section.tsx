"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Badge data with specific orbit assignments
const orbitBadges = [
  { label: "React", radius: 180, angle: 0, ring: "inner", duration: 20 },
  { label: "Node.js", radius: 240, angle: 90, ring: "outer", duration: 30 },
  { label: "MongoDB", radius: 180, angle: 180, ring: "inner", duration: 20 },
  { label: "JavaScript", radius: 240, angle: 270, ring: "outer", duration: 30 },
];

// Orbit ring component - visual representation
function OrbitRing({ radius, duration, direction }: { radius: number; duration: number; direction: "cw" | "ccw" }) {
  const isInnerRing = radius === 180;
  const borderWidth = isInnerRing ? "1.5px" : "2px";
  const rotationDuration = isInnerRing ? 20 : 30;
  
  return (
    <motion.div
      animate={{
        rotate: direction === "cw" ? 360 : -360,
      }}
      transition={{
        duration: rotationDuration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      style={{
        position: "absolute",
        width: radius * 2,
        height: radius * 2,
        left: "50%",
        top: "50%",
        marginLeft: -radius,
        marginTop: -radius,
        borderRadius: "50%",
      }}
      className="pointer-events-none"
    >
      {/* Gradient SVG stroke for more control */}
      <svg
        className="absolute inset-0 w-full h-full"
        style={{ filter: isInnerRing ? "drop-shadow(0 0 20px rgba(123, 133, 255, 0.35))" : "drop-shadow(0 0 18px rgba(152, 128, 255, 0.28))" }}
      >
        <defs>
          <linearGradient id={`ringGradient-${radius}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isInnerRing ? "rgba(176, 184, 255, 0.25)" : "rgba(196, 184, 255, 0.22)"} />
            <stop offset="50%" stopColor={isInnerRing ? "rgba(138, 147, 255, 0.3)" : "rgba(152, 128, 255, 0.26)"} />
            <stop offset="100%" stopColor={isInnerRing ? "rgba(176, 184, 255, 0.25)" : "rgba(196, 184, 255, 0.22)"} />
          </linearGradient>
        </defs>
        <circle
          cx={radius}
          cy={radius}
          r={radius - 1}
          fill="none"
          stroke={`url(#ringGradient-${radius})`}
          strokeWidth={borderWidth}
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}

function CountUp({ target, suffix = "", duration = 1400 }: { target: number; suffix?: string; duration?: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const started = performance.now();
    let frame = 0;
    const run = (now: number) => {
      const t = Math.min((now - started) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(target * eased);
      if (t < 1) frame = requestAnimationFrame(run);
    };
    frame = requestAnimationFrame(run);
    return () => cancelAnimationFrame(frame);
  }, [duration, target]);

  return (
    <span>
      {Number.isInteger(target) ? Math.round(value).toString() : value.toFixed(1)}
      {suffix}
    </span>
  );
}

// Orbital badge component
function OrbitBadge({ 
  label, 
  radius, 
  angle, 
  duration 
}: { 
  label: string; 
  radius: number; 
  angle: number; 
  duration: number;
}) {
  const rotation = useRef(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    let animationId: number;
    const startTime = performance.now();
    const radius_inner = radius === 180 ? true : false;
    const direction = radius_inner ? 1 : -1; // inner CW, outer CCW
    
    const animate = (currentTime: number) => {
      const elapsed = (currentTime - startTime) / 1000;
      const rotationDegrees = direction * (elapsed / duration) * 360;
      const radians = ((angle + rotationDegrees) * Math.PI) / 180;
      
      const x = radius * Math.cos(radians);
      const y = radius * Math.sin(radians);
      
      setPosition({ x, y });
      rotation.current = rotationDegrees;
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [radius, angle, duration]);

  return (
    <motion.div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        x: position.x,
        y: position.y,
        marginLeft: -50,
        marginTop: -16,
      }}
      className="pointer-events-auto"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="group relative">
        {/* Glassmorphism glow */}
        <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-purple-400/50 via-indigo-400/35 to-blue-400/40 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
        
        {/* Badge */}
        <div className="relative inline-flex items-center rounded-full border border-white/95 bg-gradient-to-br from-white/90 via-purple-50/70 to-white/80 px-4 py-2 text-xs font-bold text-slate-800 shadow-2xl shadow-indigo-300/60 backdrop-blur-xl transition-all duration-300 group-hover:border-white group-hover:from-white group-hover:via-purple-100/80 group-hover:to-white group-hover:shadow-2xl group-hover:shadow-purple-400/80">
          {/* Inner shine */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <span className="relative whitespace-nowrap">{label}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30, mass: 1 });
  const rotateX = useTransform(springY, [-1, 1], [5, -5]);
  const rotateY = useTransform(springX, [-1, 1], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    mouseX.set(px - 0.5);
    mouseY.set(py - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative w-full overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24">
      {/* Premium Background System */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-gradient-to-br from-purple-300/20 via-purple-200/15 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-gradient-to-bl from-blue-300/20 via-blue-200/15 to-transparent blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, -40, 0] }}
          transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-300/15 to-transparent blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(168,162,255,0.08),transparent_40%)]" />
      </div>

      <div className="mx-auto w-[min(1200px,92vw)]">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-7"
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-600">Welcome to my portfolio</p>
              <h1 className="bg-gradient-to-r from-slate-900 via-purple-800 to-slate-900 bg-clip-text text-5xl font-bold text-transparent md:text-6xl lg:text-7xl">
                Sriram Adithya
              </h1>
            </div>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
              MERN Stack Developer & AI Enthusiast passionate about building scalable web
              applications and exploring intelligent systems through AI and modern technologies.
            </p>

            <div className="inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/65 px-4 py-2 backdrop-blur-sm">
              <span className="text-base">📍</span>
              <span className="text-sm font-medium text-slate-700">Hyderabad, India</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-1">
              <a href="#projects" className="micro-lift group relative inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/30 transition hover:shadow-lg hover:shadow-purple-500/50">
                View Projects
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition group-hover:opacity-100" />
              </a>
              {/* <a href="/resume.pdf" download className="micro-lift group relative inline-flex items-center justify-center rounded-xl border border-purple-300 bg-white/70 px-7 py-3.5 font-semibold text-slate-800 transition backdrop-blur-sm hover:bg-white/85 hover:border-purple-400">
                Download Resume
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 transition group-hover:opacity-100" />
              </a> */}
            </div>

            <div className="grid gap-3 pt-3 sm:grid-cols-3">
              <motion.article 
                initial={{ opacity: 0, y: 14 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/90 via-purple-50/60 to-white/50 p-5 shadow-xl shadow-purple-200/30 backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-gradient-to-br hover:from-white hover:via-purple-100/80 hover:to-white/70 hover:shadow-2xl hover:shadow-purple-300/50"
              >
                {/* Shine effect on hover */}
                <div className="absolute -inset-full top-0 -z-10 h-full w-full rotate-45 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative space-y-2">
                  <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"><CountUp target={3} suffix="+" /></p>
                  <p className="text-sm font-semibold text-slate-700">Projects Built</p>
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-purple-500 to-purple-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.article>
              
              <motion.article 
                initial={{ opacity: 0, y: 14 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.28, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/90 via-indigo-50/60 to-white/50 p-5 shadow-xl shadow-indigo-200/30 backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-gradient-to-br hover:from-white hover:via-indigo-100/80 hover:to-white/70 hover:shadow-2xl hover:shadow-indigo-300/50"
              >
                {/* Shine effect on hover */}
                <div className="absolute -inset-full top-0 -z-10 h-full w-full rotate-45 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative space-y-2">
                  <p className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent"><CountUp target={97.1} suffix="%" /></p>
                  <p className="text-sm font-semibold text-slate-700">Intermediate Score</p>
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.article>
              
              <motion.article 
                initial={{ opacity: 0, y: 14 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.36, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative overflow-hidden rounded-2xl border border-white/70 bg-gradient-to-br from-white/90 via-blue-50/60 to-white/50 p-5 shadow-xl shadow-blue-200/30 backdrop-blur-xl transition-all duration-300 hover:border-white hover:bg-gradient-to-br hover:from-white hover:via-blue-100/80 hover:to-white/70 hover:shadow-2xl hover:shadow-blue-300/50"
              >
                {/* Shine effect on hover */}
                <div className="absolute -inset-full top-0 -z-10 h-full w-full rotate-45 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                <div className="relative space-y-2">
                  <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"><CountUp target={8} suffix="K" /></p>
                  <p className="text-sm font-semibold text-slate-700">TG EAPCET Rank</p>
                  <div className="h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-blue-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </motion.article>
            </div>
          </motion.div>

          {/* Profile Section with Orbit System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto w-full max-w-[520px]"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              animate={{ y: [0, -8, 0] }}
              transition={{ y: { duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" } }}
              className="relative"
            >
              {/* Premium depth effect system */}
              {/* Layer 1: Large purple glow (outermost) */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -inset-24 -z-30 rounded-full bg-gradient-to-br from-purple-500/35 via-purple-400/20 to-transparent blur-3xl"
              />
              
              {/* Layer 2: Secondary blue glow */}
              <motion.div
                animate={{ scale: [1.05, 0.95, 1.05] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.3 }}
                className="absolute -inset-20 -z-25 rounded-full bg-gradient-to-tl from-blue-400/25 via-indigo-300/15 to-transparent blur-2xl"
              />
              
              {/* Layer 3: Soft radial shadow gradient */}
              <div className="absolute -inset-16 -z-20 rounded-full bg-[radial-gradient(ellipse_at_50%_40%,rgba(168,162,255,0.25),transparent_60%)] blur-3xl" />
              
              {/* Layer 4: Close purple glow for depth */}
              <div className="absolute -inset-12 -z-20 rounded-full bg-gradient-to-br from-purple-400/30 via-indigo-300/20 to-transparent blur-2xl" />
              
              {/* Profile container */}
              <div className="relative h-[500px] w-full">
                {/* Orbit rings - visual elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <OrbitRing radius={180} duration={20} direction="cw" />
                  <OrbitRing radius={240} duration={30} direction="ccw" />
                </div>

                {/* Profile image - center (z-20) */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-2 border-white/95 shadow-2xl shadow-indigo-400/40">
                    {/* Soft glow behind profile */}
                    <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-purple-300/70 via-indigo-200/50 to-transparent blur-3xl" />
                    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-400/60 via-transparent to-transparent" />
                    
                    <Image 
                      src="/profile.jpg" 
                      alt="Sriram Adithya profile photo" 
                      fill 
                      priority 
                      sizes="(max-width: 768px) 280px, 280px" 
                      className="object-cover"
                    />
                    
                    {/* Surface shine */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Orbit badges container - z-30 */}
                <div className="absolute inset-0 z-30">
                  {orbitBadges.map((badge) => (
                    <OrbitBadge 
                      key={badge.label}
                      label={badge.label}
                      radius={badge.radius}
                      angle={badge.angle}
                      duration={badge.duration}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
