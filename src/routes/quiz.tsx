import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, RotateCcw, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/ui/SiteLayout";
import { PageHero } from "./what-is-confirmation-bias";

export const Route = createFileRoute("/quiz")({
  component: QuizPage,
});

type Choice = { label: string; score: number };
type Question = { q: string; choices: Choice[] };

const questions: Question[] = [
  {
    q: "When you read a headline you strongly agree with, you usually…",
    choices: [
      { label: "Share it right away it confirms what I think.", score: 2 },
      { label: "Read the article fully before deciding.", score: 1 },
      { label: "Look up the source and check other viewpoints.", score: 0 },
    ],
  },
  {
    q: "Someone shares evidence that contradicts your opinion. You feel…",
    choices: [
      { label: "Annoyed. They probably don't understand.", score: 2 },
      { label: "Curious, but a little defensive.", score: 1 },
      { label: "Genuinely interested I want to know more.", score: 0 },
    ],
  },
  {
    q: "How varied are the people in your social media feeds?",
    choices: [
      { label: "We mostly think alike.", score: 2 },
      { label: "Some variety, but I follow a clear side.", score: 1 },
      { label: "I deliberately follow people I disagree with.", score: 0 },
    ],
  },
  {
    q: "When you research something online, you typically…",
    choices: [
      { label: "Search to prove what I already believe.", score: 2 },
      { label: "Look at the top few results and decide.", score: 1 },
      { label: "Search for arguments against my view too.", score: 0 },
    ],
  },
  {
    q: "Have you changed your mind about something important in the last year?",
    choices: [
      { label: "No, my views are solid.", score: 2 },
      { label: "Maybe a small thing.", score: 1 },
      { label: "Yes, and I welcomed the change.", score: 0 },
    ],
  },
  {
    q: "When a friend disagrees with you, you usually…",
    choices: [
      { label: "Try to convince them they're wrong.", score: 2 },
      { label: "Hear them out, then defend my position.", score: 1 },
      { label: "Ask questions to understand their reasoning.", score: 0 },
    ],
  },
];

function QuizPage() {
  const [answers, setAnswers] = useState<number[]>(Array(questions.length).fill(-1));
  const [submitted, setSubmitted] = useState(false);

  const total = answers.reduce((sum, a, i) => (a >= 0 ? sum + questions[i].choices[a].score : sum), 0);
  const max = questions.length * 2;
  const allAnswered = answers.every((a) => a >= 0);

  const result = (() => {
    const ratio = total / max;
    if (ratio <= 0.25)
      return {
        title: "Calibrated Thinker",
        color: "text-success",
        body: "Your mind is actively resisting confirmation bias. You seek out opposing views and update your beliefs when evidence demands it. This is rare protect this habit.",
      };
    if (ratio <= 0.55)
      return {
        title: "Aware but Susceptible",
        color: "text-accent",
        body: "You notice bias when it appears, but it still influences you. With small daily habits like reading one article you disagree with each week you can move toward stronger thinking.",
      };
    return {
      title: "High Bias Influence",
      color: "text-destructive",
      body: "Confirmation bias is shaping your information diet. The good news? Awareness is the first step. Visit our Solutions page for concrete habits to reset your thinking.",
    };
  })();

  function reset() {
    setAnswers(Array(questions.length).fill(-1));
    setSubmitted(false);
  }

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Self-Check"
        title="Is your mind affected by confirmation bias?"
        lead="A short, honest quiz designed for students and curious thinkers. There are no right answers — only revealing ones."
      />

      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16">
        {!submitted ? (
          <div className="space-y-6">
            {questions.map((q, qi) => (
              <div key={qi} className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-soft">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl text-accent">{qi + 1}.</span>
                  <h3 className="font-serif text-lg md:text-xl text-foreground">{q.q}</h3>
                </div>
                <div className="mt-5 space-y-2.5">
                  {q.choices.map((c, ci) => {
                    const checked = answers[qi] === ci;
                    return (
                      <label
                        key={ci}
                        className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all ${
                          checked
                            ? "border-primary bg-primary/5 shadow-soft"
                            : "border-border bg-background hover:border-primary/40 hover:bg-secondary/40"
                        }`}
                      >
                        <input
                          type="radio"
                          name={`q-${qi}`}
                          checked={checked}
                          onChange={() => {
                            const next = [...answers];
                            next[qi] = ci;
                            setAnswers(next);
                          }}
                          className="mt-1 h-4 w-4 accent-primary"
                        />
                        <span className="text-sm text-foreground">{c.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2">
              <p className="text-sm text-muted-foreground">
                {answers.filter((a) => a >= 0).length} of {questions.length} answered
              </p>
              <button
                disabled={!allAnswered}
                onClick={() => setSubmitted(true)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-all hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                See my result <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl bg-gradient-soft border border-border p-8 md:p-12 shadow-card text-center animate-fade-up">
            <CheckCircle2 className="mx-auto h-12 w-12 text-accent" strokeWidth={1.5} />
            <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Your Result</p>
            <h2 className={`mt-2 font-serif text-3xl md:text-5xl ${result.color}`}>{result.title}</h2>
            <p className="mt-2 text-muted-foreground">
              Score: <span className="font-semibold text-foreground">{total} / {max}</span>
            </p>
            <p className="mt-6 text-foreground leading-relaxed max-w-xl mx-auto">{result.body}</p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                See solutions <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={reset}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary transition-colors"
              >
                <RotateCcw className="h-4 w-4" /> Retake quiz
              </button>
            </div>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
