import { SiteHeader } from "@/components/layout/site-header";
import { PageTransition } from "@/components/ui/page-transition";

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="pb-20">
        <SiteHeader />
        <section className="mx-auto mt-12 w-[min(1100px,92vw)]">
          <div className="glass-card micro-lift rounded-3xl p-8 md:p-10">
            <h1 className="text-2xl font-semibold md:text-3xl">Projects</h1>
            <p className="mt-3 text-slate-600">
              Placeholder route for project cards and case studies.
            </p>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
