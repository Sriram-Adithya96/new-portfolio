"use client";

import { Code2, Mail, Network } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
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
    href: "https://linkedin.com/in/sriram-adithya96",
    icon: Network,
  },
  {
    label: "Email",
    href: "mailto:sriramadithya96@gmail.com",
    icon: Mail,
  },
];

export function FooterSection() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="px-4 pb-8 pt-6 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl rounded-[24px] border border-white/50 bg-white/75 p-6 shadow-lg shadow-purple-100/50 backdrop-blur-md sm:p-8">
        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="space-y-3"
          >
            <h2 className="text-xl font-bold text-slate-950">
              Sriram Adithya
            </h2>
            <p className="text-sm font-semibold text-purple-600">
              MERN Stack Developer & AI Enthusiast
            </p>
            <p className="max-w-sm text-sm leading-6 text-slate-600">
              Building modern web applications and exploring AI-powered
              solutions.
            </p>
          </motion.div>

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

          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-800">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {connectLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    aria-label={link.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-white/80 text-slate-700 shadow-sm transition duration-300 hover:scale-105 hover:border-purple-300 hover:bg-purple-50 hover:text-purple-600 hover:shadow-md"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="mt-8 border-t border-slate-200/80 pt-5">
          <p className="text-center text-xs leading-6 text-slate-500 sm:text-sm">
            © 2026 Sriram Adithya. Built with Next.js, Tailwind CSS & Framer
            Motion.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
