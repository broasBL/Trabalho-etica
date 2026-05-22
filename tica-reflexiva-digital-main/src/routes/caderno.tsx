import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, useEffect } from "react";
import { Search, Download, Check, ArrowLeft, BookOpen, FileText, Sparkles } from "lucide-react";
import { lessons, type Research } from "@/data/lessons";
import { generateReflection } from "@/lib/generateReflection";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Route = createFileRoute("/caderno")({
  head: () => ({
    meta: [
      { title: "Caderno — Ética Profissional" },
      { name: "description", content: "Lista de aulas com sumário e reflexão pessoal." },
    ],
  }),
  component: Caderno,
});

const STORAGE_KEY = "etica-aulas-concluidas";

function Caderno() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<number | null>(null);
  const [done, setDone] = useState<Set<number>>(new Set());

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setDone(new Set(JSON.parse(raw)));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...done])); } catch {}
  }, [done]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return lessons;
    return lessons.filter(
      (l) =>
        l.summary.toLowerCase().includes(q) ||
        `aula ${l.number}`.includes(q) ||
        String(l.number) === q,
    );
  }, [query]);

  const toggleDone = (n: number) => {
    setDone((prev) => {
      const next = new Set(prev);
      next.has(n) ? next.delete(n) : next.add(n);
      return next;
    });
  };

  const progress = Math.round((done.size / lessons.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-soft">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b bg-background/80 backdrop-blur-xl no-print">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-smooth hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            Início
          </Link>
          <div className="hidden h-5 w-px bg-border sm:block" />
          <div className="hidden sm:block">
            <div className="font-display text-base font-semibold leading-tight">Caderno Digital</div>
            <div className="text-xs text-muted-foreground">Ética Profissional · 12.º ano</div>
          </div>

          <div className="ml-auto flex items-center gap-2">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Pesquisar aula…"
                className="w-44 rounded-full border bg-card py-2 pl-9 pr-3 text-sm shadow-card outline-none transition-smooth focus:w-64 focus:border-primary focus:ring-2 focus:ring-primary/20 sm:w-56"
              />
            </div>
            <ThemeToggle />
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card transition-smooth hover:shadow-hover hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              <span className="hidden sm:inline">PDF</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="no-print lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border bg-card p-5 shadow-card">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
              <BookOpen className="h-4 w-4 text-primary" />
              Progresso
            </div>
            <div className="mb-1 flex items-baseline justify-between">
              <span className="font-display text-3xl text-foreground">{done.size}</span>
              <span className="text-xs text-muted-foreground">de {lessons.length} aulas</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-secondary">
              <div className="h-full bg-gradient-hero transition-smooth" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <nav className="mt-4 max-h-[60vh] overflow-y-auto rounded-2xl border bg-card p-2 shadow-card">
            {lessons.map((l) => (
              <button
                key={l.number}
                onClick={() => {
                  setActive(l.number);
                  document.getElementById(`aula-${l.number}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-left text-sm transition-smooth ${
                  active === l.number ? "bg-accent text-accent-foreground" : "hover:bg-muted"
                }`}
              >
                <span className="font-medium">Aula {l.number}</span>
                {done.has(l.number) && <Check className="h-3.5 w-3.5 text-primary" />}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="space-y-6">
          <div className="no-print">
            <h1 className="font-display text-4xl tracking-tight text-foreground md:text-5xl">As minhas aulas</h1>
            <p className="mt-2 text-muted-foreground">
              Cada cartão reúne o sumário oficial da aula e a reflexão pessoal que escrevi a seguir.
            </p>
          </div>

          {filtered.length === 0 && (
            <div className="rounded-2xl border bg-card p-10 text-center text-muted-foreground shadow-card">
              Nenhuma aula encontrada para “{query}”.
            </div>
          )}

          {filtered.map((l, i) => {
            const reflection = generateReflection(l.number, l.summary);
            const isDone = done.has(l.number);
            return (
              <article
                key={l.number}
                id={`aula-${l.number}`}
                className="lesson-card group rounded-3xl border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:shadow-hover sm:p-8 animate-fade-up"
                style={{ animationDelay: `${Math.min(i, 6) * 50}ms` }}
              >
                <header className="mb-5 flex flex-wrap items-center gap-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-hero font-display text-xl font-semibold text-primary-foreground shadow-card">
                    {l.number}
                  </div>
                  <div className="flex-1">
                    <div className="font-display text-2xl text-foreground">Aula {l.number}</div>
                    {l.date && <div className="text-xs uppercase tracking-wider text-muted-foreground">{l.date}</div>}
                  </div>
                  <button
                    onClick={() => toggleDone(l.number)}
                    className={`no-print inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-smooth ${
                      isDone
                        ? "bg-primary text-primary-foreground"
                        : "border bg-card text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    <Check className="h-3.5 w-3.5" />
                    {isDone ? "Concluída" : "Marcar"}
                  </button>
                </header>

                <section className="mb-5">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Sumário</div>
                  <p className="text-foreground/90 leading-relaxed">{l.summary}</p>
                </section>

                {l.research?.map((r, idx) => (
                  <ResearchBlock key={idx} research={r} />
                ))}

                <section className="rounded-2xl bg-gradient-soft p-5 ring-1 ring-border">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">Reflexão</div>
                  <p className="font-display text-[1.05rem] leading-relaxed text-foreground/90">
                    {reflection}
                  </p>
                </section>
              </article>
            );
          })}

          <footer className="no-print pt-8 text-center text-xs text-muted-foreground">
            Caderno Digital · Ética Profissional · 12.º ano · {new Date().getFullYear()}
          </footer>
        </main>
      </div>
    </div>
  );
}

function ResearchBlock({ research }: { research: Research }) {
  return (
    <section className="research-card my-5 overflow-hidden rounded-3xl p-6 sm:p-7 animate-fade-up">
      <header className="mb-5 flex flex-wrap items-center gap-3">
        <div className="research-bar inline-flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-card">
          <FileText className="h-5 w-5" />
        </div>
        <div className="flex-1">
          <div className="research-chip mb-1 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider">
            <Sparkles className="h-3 w-3" />
            Trabalho de pesquisa
          </div>
          <h3 className="font-display text-2xl leading-tight text-foreground">{research.title}</h3>
        </div>
      </header>

      {research.cover && (
        <figure className="mb-5 overflow-hidden rounded-2xl border border-[color:oklch(0.85_0.08_150)]">
          <img
            src={research.cover.src}
            alt={research.cover.alt}
            loading="lazy"
            className="h-48 w-full object-cover sm:h-64"
          />
          {research.cover.caption && (
            <figcaption className="research-section px-4 py-2 text-xs italic text-foreground/70">
              {research.cover.caption}
            </figcaption>
          )}
        </figure>
      )}

      {research.intro && (
        <p className="mb-5 text-[0.97rem] leading-relaxed text-foreground/85">{research.intro}</p>
      )}

      <div className="space-y-4">
        {research.sections.map((s, i) => (
          <div key={i} className="research-section rounded-2xl p-5">
            <h4 className="research-accent font-display text-lg font-semibold leading-snug">{s.title}</h4>
            {s.subtitle && (
              <div className="mt-0.5 text-xs italic text-foreground/60">{s.subtitle}</div>
            )}

            {s.image && (
              <figure className="my-4 overflow-hidden rounded-xl border border-[color:oklch(0.85_0.08_150)]">
                <img
                  src={s.image.src}
                  alt={s.image.alt}
                  loading="lazy"
                  className="h-44 w-full object-cover sm:h-56"
                />
                {s.image.caption && (
                  <figcaption className="bg-white/70 px-3 py-2 text-xs italic text-foreground/70">
                    {s.image.caption}
                  </figcaption>
                )}
              </figure>
            )}

            {s.paragraphs?.map((p, pi) => (
              <p key={pi} className="mt-3 text-[0.95rem] leading-relaxed text-foreground/85">
                {p}
              </p>
            ))}

            {s.bullets && (
              <ul className="mt-3 space-y-1.5">
                {s.bullets.map((b, bi) => (
                  <li
                    key={bi}
                    className="research-bullet flex items-start text-[0.95rem] leading-relaxed text-foreground/85"
                  >
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}

            {s.conclusion && (
              <p className="research-accent mt-3 border-l-2 border-current pl-3 text-[0.92rem] italic">
                {s.conclusion}
              </p>
            )}
          </div>
        ))}
      </div>

      {research.finalConclusion && (
        <div className="research-bar mt-5 rounded-2xl p-5 text-white shadow-card">
          <div className="mb-1 text-[0.65rem] font-semibold uppercase tracking-wider opacity-80">
            Conclusão final
          </div>
          <p className="font-display text-[1.02rem] leading-relaxed">{research.finalConclusion}</p>
        </div>
      )}
    </section>
  );
}
