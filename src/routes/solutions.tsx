import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, MessageCircleQuestion, Users, Pause, ListChecks, Search, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/ui/SiteLayout";
import { PageHero } from "./what-is-confirmation-bias";

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
});

const personalHabits = [
  { icon: MessageCircleQuestion, t: "Ask 'how would I know I'm wrong?'", d: "Before defending a belief, define what evidence would change your mind. If nothing could, it isn't a belief it's an identity." },
  { icon: Search, t: "Steelman the other side", d: "Try to express the opposing view so well that someone who holds it would say, 'yes, that's exactly it.' Only then judge it." },
  { icon: Users, t: "Diversify your inputs", d: "Follow at least three thoughtful voices you usually disagree with. Read them weekly not to argue, but to understand." },
  { icon: Pause, t: "Pause before sharing", d: "If a post makes you feel instantly right, wait 10 minutes. Strong emotions are confirmation bias's favorite door." },
  { icon: ListChecks, t: "Keep a 'changed my mind' list", d: "Write down the times you updated a belief based on new evidence. It rewires your brain to see updating as strength." },
  { icon: BookOpen, t: "Learn the names of biases", d: "Naming a bias makes it visible. Visible biases are easier to interrupt." },
];

const systemicSolutions = [
  { t: "In Schools", d: "Teach cognitive bias literacy from middle school onward alongside reading, math and digital safety." },
  { t: "In Government", d: "Treat media literacy like public health: fund national programs the way we fund anti-smoking and traffic safety campaigns." },
  { t: "In Tech", d: "Require platforms to show 'perspective alerts' a Screen Time style notice when users only consume one side of an issue." },
  { t: "In Newsrooms", d: "Reward reporters who present opposing strong arguments fairly, not just clicks driven by outrage." },
];

function SolutionsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="What We Can Do"
        title="The bias is universal. The cure is practical."
        lead="Confirmation bias cannot be deleted it is part of being human. But it can be slowed, named, and out thought. Here's how, at every level of society."
      />

      {/* Personal habits */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">For Individuals</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground text-balance">
            Six habits of clearer thinkers
          </h2>
          <p className="mt-4 text-muted-foreground">
            Each one takes minutes a day. Together they rewire how your mind handles disagreement.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalHabits.map((h, i) => (
            <div key={h.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-warm">
                  <h.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="font-serif text-2xl text-muted-foreground/40">0{i + 1}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl text-foreground">{h.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Systemic */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">For Society</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground text-balance">
              Solutions the world should adopt
            </h2>
            <p className="mt-4 text-muted-foreground">
              Like Screen Time normalized awareness about phone use, these reforms can normalize awareness about thinking.
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {systemicSolutions.map((s) => (
              <div key={s.t} className="rounded-2xl bg-card border border-border p-8 shadow-soft">
                <h3 className="font-serif text-2xl text-primary">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
          One quiet question can change a mind.
        </h2>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Start with yours.
        </p>
        <Link
          to="/conclusion"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Read the conclusion <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </SiteLayout>
  );
}
