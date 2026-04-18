import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Search, Filter, Repeat } from "lucide-react";
import { SiteLayout } from "@/components/ui/SiteLayout";
import brainImg from "@/assets/mind-maze.jpg";

export const Route = createFileRoute("/what-is-confirmation-bias")({
  component: WhatIsPage,
});

function WhatIsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Concept"
        title="What is confirmation bias?"
        lead="It's the invisible filter through which the human mind sees the world the tendency to favor information that confirms what we already believe and dismiss anything that challenges it."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={brainImg}
          alt="Brain made of mirror fragments reflecting only one color"
          width={1280}
          height={896}
          loading="lazy"
          className="rounded-2xl shadow-card border border-border"
        />
        <div>
          <h2 className="font-serif text-3xl text-foreground">A definition that shaped psychology</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Coined by psychologist Peter Wason in 1960, <em>confirmation bias</em> describes how people gather and
            recall information selectively interpreting it in a way that supports their existing beliefs. It is one
            of the most studied and most powerful cognitive biases in human thinking.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            It does not require dishonesty, low intelligence, or bad intentions. It happens automatically, in every
            mind, every day. The smarter we are, the better we become at justifying what we already believed.
          </p>
        </div>
      </section>

      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="font-serif text-3xl text-foreground text-center max-w-2xl mx-auto text-balance">
            It operates in three quiet ways
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { icon: Search, t: "Selective Search", d: "We look for evidence that supports our view — and ignore where contradicting evidence might exist." },
              { icon: Filter, t: "Selective Interpretation", d: "When facts are ambiguous, we read them through the lens of what we already believe to be true." },
              { icon: Repeat, t: "Selective Memory", d: "We remember confirming examples vividly and forget the times reality disagreed with us." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl bg-card p-6 border border-border shadow-soft">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                  <b.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-foreground">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <blockquote className="border-l-4 border-accent pl-6 font-serif text-2xl md:text-3xl text-foreground text-balance">
          "What the human being is best at doing is interpreting all new information so that their prior conclusions
          remain intact."
          <footer className="mt-4 font-sans text-sm not-italic text-muted-foreground">— Warren Buffett</footer>
        </blockquote>

        <div className="mt-12 flex justify-center">
          <Link
            to="/examples"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            See real-life examples <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center animate-fade-up">
        <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
          {eyebrow}
        </span>
        <h1 className="mt-6 font-serif text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
          {title}
        </h1>
        <p className="mt-6 text-lg text-primary-foreground/80 max-w-2xl mx-auto text-pretty">{lead}</p>
      </div>
    </section>
  );
}
