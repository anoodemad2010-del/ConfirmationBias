import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Brain, Target, Lightbulb, Users } from "lucide-react";
import { SiteLayout } from "@/components/ui/SiteLayout";
import phoneBg from "@/assets/upload-phone-nature.png";
import laptopBg from "@/assets/upload-laptop-screen.jpeg";
import bubbleImg from "@/assets/bubble-isolation.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO with phone image as background */}
      <section className="relative overflow-hidden text-foreground min-h-[88vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={phoneBg}
            alt="Person holding a phone showing a curated social media feed"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent">
              IGCSE Global Perspectives Project
            </span>
            <h1 className="mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] text-balance text-foreground">
              The mind sees what it <span className="text-accent italic">already believes</span>.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl text-pretty">
              Perspective Shift is a worldwide solution like Screen Time for your reasoning built to teach people how
              confirmation bias quietly shapes the way they think, vote, and live.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/what-is-confirmation-bias"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-[1.02]"
              >
                Start Learning <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/quiz"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Take the Quiz
              </Link>
            </div>
          </div>
          <div className="hidden lg:block" aria-hidden />
        </div>
      </section>

      {/* Stat strip */}
      <section className="bg-surface border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "64%", l: "of online users only read sources they agree with" },
            { n: "1967", l: "the year Peter Wason first described the bias" },
            { n: "2x", l: "more likely to remember confirming evidence" },
            { n: "100%", l: "of human brains are vulnerable" },
          ].map((s) => (
            <div key={s.n}>
              <div className="font-serif text-3xl md:text-4xl font-semibold text-accent">{s.n}</div>
              <p className="mt-1 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* What you'll find */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">What you'll find here</span>
          <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground text-balance">
            A complete journey from awareness to action.
          </h2>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Brain, title: "Understand", desc: "Learn what confirmation bias is and how it operates inside the mind.", to: "/what-is-confirmation-bias" },
            { icon: Target, title: "Our Mission", desc: "Discover why we built this and the world we're working toward.", to: "/mission" },
            { icon: Users, title: "Real Examples", desc: "See how the bias plays out in news, politics, science and daily life.", to: "/examples" },
            { icon: Lightbulb, title: "Solutions", desc: "Practical tools and habits to think more clearly every day.", to: "/solutions" },
          ].map((c) => (
            <Link
              key={c.title}
              to={c.to}
              className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:shadow-card hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-warm">
                <c.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Split section: laptop image as visual */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={laptopBg}
            alt="Crypto trading website on a laptop screen an example of curated information"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">The Modern Echo Chamber</span>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl text-foreground text-balance">
              Every screen you open was designed to agree with you.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
              From your news feed to your trading dashboard, algorithms feed you what you already believe and quietly
              hide what you don't. Confirmation bias used to be a personal habit. Now it's the entire internet's
              business model.
            </p>
            <Link
              to="/examples"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-accent/40 hover:bg-secondary transition-colors"
            >
              See real-life examples <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative">
            <img
              src={bubbleImg}
              alt="Person inside a glass bubble of social media notifications"
              width={1280}
              height={896}
              loading="lazy"
              className="rounded-2xl shadow-card border border-border"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 pt-10">
        <div className="rounded-3xl bg-gradient-hero overflow-hidden relative p-10 md:p-16 text-center text-foreground border border-border">
          <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
          <div className="relative">
            <h2 className="font-serif text-3xl md:text-5xl text-balance">Is your mind playing tricks on you?</h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Take our 6 questions quiz designed for students and curious thinkers. Discover how your brain handles
              evidence and what to do about it.
            </p>
            <Link
              to="/quiz"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-glow transition-transform hover:scale-[1.02]"
            >
              Take the Quiz <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
