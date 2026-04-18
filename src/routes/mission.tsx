import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, GraduationCap, Scale, Heart, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/ui/SiteLayout";
import { PageHero } from "./what-is-confirmation-bias";

export const Route = createFileRoute("/mission")({
  component: MissionPage,
});

function MissionPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Our Mission"
        title="Teach the world how to think not what to think."
        lead="Perspective Shift is a global, education first solution. We treat confirmation bias the way the world treated screen time: as a public concern worth naming, measuring, and teaching against."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
              Why this matters now
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We live in the most information rich era in human history yet people have never felt more divided,
                more certain, and more wrong about each other. The cause is not a lack of facts. It is a
                <strong className="text-foreground"> way of processing them</strong>.
              </p>
              <p>
                Algorithms feed us what we already agree with. Social circles narrow. Headlines shout. And our minds
                designed to save energy quietly accept everything that fits the story we already tell ourselves.
              </p>
              <p>
                Perspective Shift exists to interrupt that loop with one tool the world keeps underestimating:
                <strong className="text-foreground"> education</strong>.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-soft border border-border p-8 shadow-soft">
            <h3 className="font-serif text-2xl text-foreground">Our vision</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              A world where every student from primary school to university learns about confirmation bias the same
              way they learn about hygiene: as a basic skill for healthy living.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Add cognitive bias literacy to every school curriculum.",
                "Partner with governments to fund national awareness campaigns.",
                "Provide free tools, lessons and quizzes for educators worldwide.",
                "Push platforms to label echo chamber behavior, like screen time alerts.",
              ].map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-serif text-3xl text-foreground text-center text-balance">
            Four pillars of Perspective Shift
          </h2>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: GraduationCap, t: "Education", d: "Make bias literacy a school subject, not a luxury." },
              { icon: Scale, t: "Policy", d: "Push for laws that require media literacy in public schools." },
              { icon: Globe, t: "Awareness", d: "Run campaigns the way we ran 'don't drink and drive'." },
              { icon: Heart, t: "Empathy", d: "Help people listen across belief lines, not shout across them." },
            ].map((p) => (
              <div key={p.t} className="rounded-2xl bg-card p-6 border border-border shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-warm">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-foreground">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/examples"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              See it in action <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
