
"use client";

import { Code2, Mail, Network } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "#home" },
  // { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const connectLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Sriram-Adithya96",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/sriram-adithya",
    icon: Network,
  },
  // {
  //   label: "Email",
  //   href: "mailto:sriramadithya96@gmail.com",
  //   icon: Mail,
  // },
];

export function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-4 pb-8 pt-10 sm:px-6 lg:px-8"
    >
      {/* Section Label */}
      <div className="mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-purple-600">
          Thanks For Visiting
        </p>
      </div>

      <div className="mx-auto max-w-6xl rounded-[24px] border border-white/60 bg-white/70 p-6 shadow-xl shadow-purple-100/40 backdrop-blur-xl sm:p-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Left Section */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-indigo-600 bg-clip-text text-transparent">
              Sriram Adithya
            </h2>

            <p className="text-sm font-semibold text-purple-600">
              MERN Stack Developer & AI Enthusiast
            </p>

            <p className="max-w-sm text-sm leading-7 text-slate-600">
              Building modern web applications and exploring AI-powered
              solutions.
            </p>

            <div className="h-[3px] w-20 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500" />
          </motion.div>

          {/* Center Section */}
          <motion.nav
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            aria-label="Footer quick links"
            className="space-y-4"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3 text-sm">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group w-fit text-slate-600 transition-colors hover:text-purple-600"
                >
                  <span className="relative">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                  </span>
                </a>
              ))}
            </div>
          </motion.nav>

          {/* Right Section */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800">
              Connect With Me
            </h3>

            <div className="flex flex-wrap gap-3">
              {connectLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "_blank"
                    }
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={link.label}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-purple-200/70 bg-white/80 text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600 hover:shadow-lg hover:shadow-purple-200/50"
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </a>
                );
              })}
            </div>

            <p className="text-sm text-slate-500">
              Open for internships, collaborations and exciting projects.
            </p>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-slate-200/80 pt-5">
          <p className="text-center text-xs leading-6 text-slate-500 sm:text-sm">
            © 2026 Sriram Adithya • Built with Next.js, Tailwind CSS &
            Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
