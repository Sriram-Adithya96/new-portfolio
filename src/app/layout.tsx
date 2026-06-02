import type { Metadata } from "next";
import "./globals.css";
import { LoadingScreen } from "@/components/ui/loading-screen";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { AnimatedBackground } from "@/components/ui/animated-background";

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: "Sriram Adithya | Portfolio",
  description: "Premium portfolio of Sriram Adithya, Computer Science student, MERN Stack Developer, and AI Enthusiast.",
  keywords: ["Sriram Adithya", "MERN Developer", "Portfolio", "Computer Science", "AI Enthusiast"],
  authors: [{ name: "Sriram Adithya" }],
  openGraph: {
    title: "Sriram Adithya | Portfolio",
    description: "Modern recruiter-friendly portfolio with projects, skills, and achievements.",
    type: "website",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-white via-purple-50 to-white antialiased">
        <AnimatedBackground />
        <LoadingScreen />
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
