import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

type Feature = {
  num: string;
  title: string;
  desc: string;
  tags: string[];
  accent: "neon" | "magenta" | "acid" | "violet";
  icon: ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const FEATURES: Feature[] = [
  {
    num: "01",
    title: "РАЗРАБОТКА ПРИЛОЖЕНИЙ",
    desc: "От идеи до релиза: архитектура, код, деплой. Разбираем реальные проекты, а не абстрактные примеры из учебника.",
    tags: ["web", "mobile", "api"],
    accent: "neon",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" {...stroke}>
        <path d="M8 6 3 12l5 6M16 6l5 6-5 6M13.5 4l-3 16" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "АВТОМАТИЗАЦИЯ",
    desc: "Боты, скрипты, парсеры и интеграции. Всё, что делает за тебя рутину, пока ты занимаешься важным.",
    tags: ["боты", "скрипты", "парсеры"],
    accent: "magenta",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" {...stroke}>
        <circle cx="12" cy="12" r="3.2" />
        <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "НЕЙРОСЕТИ",
    desc: "ИИ-инструменты в ежедневной работе: промпты, агенты, связки. Как получать от моделей результат, а не шум.",
    tags: ["llm", "агенты", "промпты"],
    accent: "acid",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" {...stroke}>
        <rect x="6" y="6" width="12" height="12" rx="1.5" />
        <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" />
        <path d="M9 6V3M15 6V3M9 21v-3M15 21v-3M6 9H3M6 15H3M21 9h-3M21 15h-3" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "ПУТЬ К ЕДИНОРОГУ",
    desc: "Открытые метрики, разборы решений и ошибок. Смотри, как растёт проект, и применяй это у себя.",
    tags: ["метрики", "продукт", "рост"],
    accent: "violet",
    icon: (
      <svg viewBox="0 0 24 24" className="h-8 w-8" {...stroke}>
        <path d="M4 20 10 13l4 3 6-9" />
        <path d="M15 7h5v5" />
        <path d="M4 4v16h16" />
      </svg>
    ),
  },
];

const ACCENT: Record<Feature["accent"], string> = {
  neon: "text-neon group-hover:shadow-[0_0_36px_rgba(0,240,255,0.18)] group-hover:border-neon/60",
  magenta:
    "text-magenta group-hover:shadow-[0_0_36px_rgba(255,42,109,0.18)] group-hover:border-magenta/60",
  acid: "text-acid group-hover:shadow-[0_0_36px_rgba(182,255,0,0.15)] group-hover:border-acid/60",
  violet:
    "text-violet group-hover:shadow-[0_0_36px_rgba(138,47,255,0.22)] group-hover:border-violet/60",
};

export default function Features() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="02 // КОНТЕНТ"
          title={
            <>
              что внутри <span className="text-magenta glow-magenta">канала</span>
            </>
          }
          sub="Четыре направления, из которых собран весь контент. Каждый пост — либо инструмент, либо урок, либо честный отчёт о пути."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f.num} delay={i * 120}>
              <article
                className={`panel-cyber group relative h-full p-7 transition-all duration-300 hover:-translate-y-1.5 ${ACCENT[f.accent]}`}
              >
                <span className="absolute right-5 top-5 font-pixel text-[10px] text-dim">
                  {f.num}
                </span>
                <div className="mb-5">{f.icon}</div>
                <h3 className="font-display text-lg font-bold tracking-wide text-ice">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-dim">{f.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-line/80 bg-void/50 px-2.5 py-1 text-[11px] text-ice/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
