"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

type Status = "done" | "current" | "locked";

type Level = {
  lvl: number;
  title: string;
  desc: string;
  status: Status;
};

const LEVELS: Level[] = [
  {
    lvl: 1,
    title: "HELLO, WORLD",
    desc: "Первая строка кода. Всё началось с любопытства и желания собирать собственные инструменты вместо чужих костылей.",
    status: "done",
  },
  {
    lvl: 5,
    title: "ПЕРВЫЙ БОТ",
    desc: "Первый телеграм-бот, который реально экономил время. Простой, кривой, но рабочий — и это было заражение.",
    status: "done",
  },
  {
    lvl: 10,
    title: "ЗАПУСК КАНАЛА",
    desc: "Родился НАЙТ-СИТИ — публичный дневник пути. Теперь отступать некуда: за прогрессом следят.",
    status: "done",
  },
  {
    lvl: 15,
    title: "АВТОМАТИЗАЦИЯ РУТИНЫ",
    desc: "Скрипты, парсеры, интеграции: вся рутина отдана машинам. Сейчас я здесь — и веду хронику каждый день.",
    status: "current",
  },
  {
    lvl: 30,
    title: "ПЕРВЫЙ ПРОДУКТ",
    desc: "Приложение, которым пользуются живые люди. Не пет-проект в стол, а штука, решающая чужую боль.",
    status: "locked",
  },
  {
    lvl: 50,
    title: "ПЕРВАЯ ВЫРУЧКА",
    desc: "Продукт начинает приносить деньги. Метрики растут, гипотезы проверяются, маховик раскручивается.",
    status: "locked",
  },
  {
    lvl: 70,
    title: "КОМАНДА",
    desc: "Из соло-нетраннера — в капитана команды. Найм, процессы, культура. Новый класс врагов.",
    status: "locked",
  },
  {
    lvl: 99,
    title: "КОРПОРАЦИЯ-ЕДИНОРОГ",
    desc: "Оценка $1B+. Финальный босс Найт-Сити. Когда дойду — устрою стрим прямо из башни корпорации.",
    status: "locked",
  },
];

const STATUS_LABEL: Record<Status, string> = {
  done: "ПРОЙДЕНО",
  current: "В ПРОЦЕССЕ",
  locked: "ЗАБЛОКИРОВАНО",
};

const STATUS_STYLE: Record<Status, string> = {
  done: "text-neon border-neon/50 bg-neon/10",
  current: "text-magenta border-magenta/50 bg-magenta/10",
  locked: "text-dim border-line bg-panel",
};

const CURRENT_LVL = 15;
const MAX_LVL = 99;

export default function Roadmap() {
  const [selected, setSelected] = useState<Level>(LEVELS[3]);
  const barRef = useRef<HTMLDivElement>(null);
  const [barOn, setBarOn] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBarOn(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const percent = Math.round((CURRENT_LVL / MAX_LVL) * 100);

  return (
    <section id="path" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="03 // МИССИЯ"
          title={
            <>
              путь к <span className="text-acid glow-acid">единорогу</span>
            </>
          }
          sub="Маршрут прокачки — как в RPG. Каждый уровень — реальный этап, который я прохожу в прямом эфире канала. Кликай по узлам, чтобы узнать детали."
        />

        {/* XP-бар */}
        <Reveal>
          <div ref={barRef} className="panel-cyber mb-14 p-6">
            <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
              <p className="font-pixel text-[10px] text-neon">
                ПРОГРЕСС МИССИИ
              </p>
              <p className="text-xs text-dim">
                LVL <span className="text-neon">{CURRENT_LVL}</span> / {MAX_LVL}{" "}
                · <span className="text-acid">{percent}%</span>
              </p>
            </div>
            <div className="h-4 w-full border border-line bg-void/70 p-0.5">
              <div
                className="h-full bg-gradient-to-r from-neon via-violet to-magenta transition-[width] duration-[1600ms] ease-out"
                style={{ width: barOn ? `${percent}%` : "0%" }}
              />
            </div>
            <p className="mt-3 text-[11px] text-dim">
              следующая цель:{" "}
              <span className="text-ice">LVL 30 — ПЕРВЫЙ ПРОДУКТ</span>
            </p>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* таймлайн */}
          <div className="relative">
            <span className="absolute bottom-4 left-[15px] top-4 w-px bg-gradient-to-b from-neon via-line to-magenta/40" />
            <ul className="space-y-3">
              {LEVELS.map((level, i) => {
                const active = selected.lvl === level.lvl;
                return (
                  <Reveal key={level.lvl} delay={i * 70}>
                    <li>
                      <button
                        onClick={() => setSelected(level)}
                        className={`group relative flex w-full items-center gap-5 border px-5 py-4 pl-14 text-left transition-all duration-200 ${
                          active
                            ? "clip-cyber-sm border-neon/60 bg-panel2 shadow-[0_0_28px_rgba(0,240,255,0.15)]"
                            : "clip-cyber-sm border-line/60 bg-panel/50 hover:border-neon/40 hover:bg-panel"
                        }`}
                      >
                        <span
                          className={`absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 border ${
                            level.status === "done"
                              ? "border-neon bg-neon/80 shadow-[0_0_12px_rgba(0,240,255,0.7)]"
                              : level.status === "current"
                                ? "animate-pulse-ring border-magenta bg-magenta"
                                : "border-line bg-void"
                          }`}
                          style={{ left: "9px" }}
                        />
                        <span
                          className={`font-pixel text-[10px] ${
                            level.status === "locked" ? "text-dim" : "text-neon"
                          }`}
                        >
                          {String(level.lvl).padStart(2, "0")}
                        </span>
                        <span
                          className={`font-display text-sm font-bold tracking-wide ${
                            level.status === "locked"
                              ? "text-dim"
                              : "text-ice group-hover:text-neon"
                          }`}
                        >
                          {level.title}
                        </span>
                        {level.status === "current" && (
                          <span className="ml-auto hidden animate-blink font-pixel text-[8px] text-magenta sm:inline">
                            ВЫ ЗДЕСЬ
                          </span>
                        )}
                      </button>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          {/* карточка деталей */}
          <Reveal delay={150} className="lg:sticky lg:top-24 lg:self-start">
            <div className="panel-cyber relative overflow-hidden p-8">
              <span
                aria-hidden="true"
                className="text-outline pointer-events-none absolute -right-4 -top-8 select-none font-display text-[9rem] font-black leading-none"
              >
                {selected.lvl}
              </span>
              <p className="font-pixel text-[10px] text-magenta">
                LVL {String(selected.lvl).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-2xl font-extrabold tracking-wide text-ice">
                {selected.title}
              </h3>
              <span
                className={`mt-4 inline-block border px-3 py-1 text-[11px] tracking-widest ${STATUS_STYLE[selected.status]}`}
              >
                {STATUS_LABEL[selected.status]}
              </span>
              <p className="mt-5 text-sm leading-relaxed text-ice/80">
                {selected.desc}
              </p>
              <p className="mt-6 border-t border-line/60 pt-4 text-xs text-dim">
                награда за уровень:{" "}
                <span className="text-acid">+{selected.lvl * 100} XP</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
