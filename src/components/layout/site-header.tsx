"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const nav = [
  { label: "Home", href: "/" },
  // { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="relative z-40 mx-auto w-[min(1100px,92vw)] rounded-2xl border border-white/20 bg-white/40 shadow-lg shadow-purple-100/30 backdrop-blur-xl transition-all hover:shadow-purple-100/40 top-4">
      <nav className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="text-base font-bold tracking-wide text-slate-900 transition hover:text-purple-600">
          Sriram Adithya
        </Link>
        <ul  className="hidden md:flex items-center gap-4 text-sm text-slate-700">
          {nav.map((item) => (
            <li key={item.href}>
              <Link 
                className="rounded-lg px-3 py-2 transition hover:bg-white/50 hover:text-slate-900 hover:tracking-wide" 
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden rounded-lg p-2 hover:bg-white/50"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden border-t border-white/20">
          <ul className="flex flex-col p-4 gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-white/50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
