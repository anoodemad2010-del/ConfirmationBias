import { createFileRoute, Link } from "@tanstack/react-router";
import { Newspaper, Vote, FlaskConical, Users, Briefcase, Gavel, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/ui/SiteLayout";
import { PageHero } from "./what-is-confirmation-bias";
import echoImg from "@/assets/two-newspapers.jpg";

export const Route = createFileRoute("/examples")({
  component: ExamplesPage,
});

const examples = [
  {
    icon: Newspaper,
    title: "Your news feed",
    summary: "Social media",
    body: "Algorithms learn what you click and serve more of it. Slowly, your feed becomes a mirror showing you only the world you already believe exists.",
  },
  {
    icon: Vote,
    title: "Election season",
    summary: "Politics",
    body: "Voters often follow news outlets aligned with their party, dismiss scandals about their candidate as fake, and exaggerate scandals about the other side.",
  },
  {
    icon: FlaskConical,
    title: "The 'one bad meal'",
    summary: "Daily life",
    body: "You once got food poisoning at a restaurant. Now you remember every small thing wrong with it and dismiss every friend who says they loved it.",
  },
  {
    icon: Users,
    title: "Stereotypes",
    summary: "Society",
    body: "When we expect a group to behave a certain way, we notice every example that fits and silently forget the dozens that didn't.",
  },
  {
    icon: Briefcase,
    title: "Hiring decisions",
    summary: "Work",
    body: "Interviewers form a first impression in seconds, then spend the rest of the interview unconsciously gathering evidence to confirm it.",
  },
  {
    icon: Gavel,
    title: "Investigations",
    summary: "Justice",
    body: "Detectives who decide on a suspect early can read every new clue as proof even when the evidence equally points elsewhere.",
  },
];

function ExamplesPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="In the Real World"
        title="Where confirmation bias lives."
        lead="It is not a theory hidden in textbooks. It is in the apps on your phone, the conversations at dinner, and the decisions that shape entire countries."
      />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="relative rounded-3xl overflow-hidden mb-16">
          <img
            src={echoImg}
            alt="A figure standing inside a tunnel of newspaper clippings"
            width={1280}
            height={896}
            loading="lazy"
            className="w-full h-[320px] md:h-[420px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end">
            <div className="p-8 md:p-12 text-primary-foreground max-w-2xl">
              <h2 className="font-serif text-3xl md:text-4xl text-balance">The echo chamber is everywhere</h2>
              <p className="mt-3 text-primary-foreground/80">
                Once you start looking for confirmation bias, you'll find it everywhere including in yourself.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((ex) => (
            <article
              key={ex.title}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-card hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-warm">
                  <ex.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xs font-semibold uppercase tracking-wider text-accent">{ex.summary}</span>
              </div>
              <h3 className="mt-4 font-serif text-xl text-foreground">{ex.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{ex.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground">Now ask yourself the harder question:</p>
          <Link
            to="/quiz"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Is your mind biased? Take the quiz <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
