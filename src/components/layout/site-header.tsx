import Link from "next/link";

const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
  { label: "Resume", href: "/resume.pdf" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-4 z-40 mx-auto w-[min(1100px,92vw)] rounded-2xl border border-white/20 bg-white/40 shadow-lg shadow-purple-100/30 backdrop-blur-xl transition-all hover:shadow-purple-100/40">
      <nav className="flex items-center justify-between px-8 py-4">
        <Link href="/" className="text-base font-bold tracking-wide text-slate-900 transition hover:text-purple-600">
          Sriram Adithya
        </Link>
        <ul className="flex items-center gap-1 text-sm text-slate-700">
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
      </nav>
    </header>
  );
}
