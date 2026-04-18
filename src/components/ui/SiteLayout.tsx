import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Eye } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/what-is-confirmation-bias", label: "What Is It" },
  { to: "/mission", label: "Our Mission" },
  { to: "/examples", label: "Examples" },
  { to: "/quiz", label: "Quiz" },
  { to: "/solutions", label: "Solutions" },
  { to: "/conclusion", label: "Conclusion" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-warm shadow-soft">
            <Eye className="h-5 w-5 text-primary-foreground" strokeWidth={2.2} />
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
            Perspective <span className="text-accent">Shift</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md transition-colors hover:text-foreground hover:bg-secondary"
              activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md text-foreground bg-secondary" }}
              activeOptions={{ exact: true }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-secondary"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-muted-foreground rounded-md hover:bg-secondary hover:text-foreground"
                activeProps={{ className: "px-3 py-2.5 text-sm font-medium rounded-md text-foreground bg-secondary" }}
                activeOptions={{ exact: true }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-warm">
              <Eye className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="font-serif text-base font-semibold">Perspective Shift</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            An educational initiative helping people recognize and overcome confirmation bias.
          </p>
        </div>
        <div>
          <h4 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.slice(1, 5).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-sm font-semibold text-foreground tracking-wide uppercase">Continue</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {navLinks.slice(5).map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground hover:text-foreground transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} Perspective Shift. An educational project.</span>
          <span>Made to challenge what you think you know.</span>
        </div>
      </div>
    </footer>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
