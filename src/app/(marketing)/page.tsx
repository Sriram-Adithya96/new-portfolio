import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/hero-section";
import { PageTransition } from "@/components/ui/page-transition";
import { SectionReveal } from "@/components/ui/section-reveal";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { FeaturedProjectsSection } from "@/components/featured-projects-section";
import { SkillsTechnologiesSection } from "@/components/skills-technologies-section";
import { EducationTimelineSection } from "@/components/education-timeline-section";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <PageTransition>
      <main className="relative isolate pb-20">
        <AnimatedBackground />
        <SiteHeader />
        <SectionReveal><HeroSection /></SectionReveal>
<div id="projects"><SectionReveal><FeaturedProjectsSection /></SectionReveal></div>
<div id="skills"><SectionReveal><SkillsTechnologiesSection /></SectionReveal></div>
<div id="education"><SectionReveal><EducationTimelineSection /></SectionReveal></div>
<div id="contact"><SectionReveal><ContactSection /></SectionReveal></div>
      </main>
    </PageTransition>
  );
}
