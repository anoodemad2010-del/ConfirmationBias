import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/ui/SiteLayout";

export const Route = createFileRoute("/conclusion")({
  component: ConclusionPage,
});

function ConclusionPage() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center animate-fade-up">
          <Sparkles className="mx-auto h-10 w-10 text-accent" strokeWidth={1.5} />
          <span className="mt-6 inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
            The Final Word
          </span>
          <h1 className="mt-6 font-serif text-4xl md:text-6xl font-semibold leading-[1.05] text-balance">
            We don't need new minds. We need <span className="text-accent italic">honest</span> ones.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-6 text-lg text-foreground leading-relaxed">
          <p>
            Confirmation bias is not a flaw of the foolish. It is a feature of being human a shortcut the brain
            built long before it had to navigate algorithms, election cycles, or group chats. It served our ancestors,
            and it still serves us. But unchecked, it costs us the truth.
          </p>
          <p>
            Across this site, we've seen what it is, where it hides, and why it matters. We saw it shape our news
            feeds, our friendships, our votes, and even our memories. We measured it inside ourselves with six honest
            questions. And we explored what we can do about it — both alone and together.
          </p>
          <p>
            <strong>Perspective Shift exists for a simple reason:</strong> the world has invested billions in faster
            information and almost nothing in clearer thinking. We believe that's the next great public investment —
            as important as literacy was 200 years ago, as urgent as climate is today.
          </p>
          <p>
            The good news is that the cure starts small. A pause before sharing. A question instead of a comeback.
            One article a week from someone you disagree with. A school that teaches children to ask <em>"how would I
            know I'm wrong?"</em> the way it teaches them to read.
          </p>
          <p className="font-serif text-2xl text-primary text-balance">
            If we can shift perspectives — even our own, even a little — we shift the future.
          </p>
        </div>

        <div className="mt-16 rounded-3xl bg-gradient-soft border border-border p-8 md:p-10 text-center shadow-soft">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground text-balance">
            Take the lesson with you
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Share Perspective Shift with one person who could use it — a classmate, a colleague, a parent. That single
            share is the first solution.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/quiz"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Retake the quiz <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
