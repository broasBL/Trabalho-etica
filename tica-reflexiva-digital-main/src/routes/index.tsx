import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Caderno Digital de Ética Profissional" },
      { name: "description", content: "Reflexões pessoais sobre as aulas de Ética Profissional — 12.º ano." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-gradient-soft">
      <div className="absolute right-4 top-4 z-10"><ThemeToggle /></div>
      <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-16 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-xs font-medium text-muted-foreground shadow-card animate-fade-up">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Ano letivo 2025 / 2026
        </div>

        <h1 className="text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl animate-fade-up" style={{ animationDelay: "60ms" }}>
          Caderno Digital de
          <span className="block bg-gradient-hero bg-clip-text text-transparent">Ética Profissional</span>
        </h1>

        <p className="mt-6 max-w-2xl text-balance text-lg text-muted-foreground animate-fade-up" style={{ animationDelay: "120ms" }}>
          Um registo organizado das aulas, sumários e reflexões pessoais — escrito ao longo
          do 12.º ano, com curiosidade e sentido crítico.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: "180ms" }}>
          <Link
            to="/caderno"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-hero px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-card transition-smooth hover:shadow-hover hover:-translate-y-0.5"
          >
            <BookOpen className="h-4 w-4" />
            Ver Caderno Digital
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-20 grid w-full max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 animate-fade-up" style={{ animationDelay: "240ms" }}>
          {[
            { k: "Disciplina", v: "Ética Profissional" },
            { k: "Ano", v: "12.º ano" },
            { k: "Formato", v: "Sumários + Reflexões" },
          ].map((s) => (
            <div key={s.k} className="rounded-2xl border bg-card p-5 text-left shadow-card">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.k}</div>
              <div className="mt-1 font-display text-xl text-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
