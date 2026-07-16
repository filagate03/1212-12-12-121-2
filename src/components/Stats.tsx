"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/Reveal";

function Counter({
  to,
  suffix = "",
  duration = 1800,
}: {
  to: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref}>
      {val.toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
}

const STATS = [
  { to: 128000, suffix: "+", label: "СТРОК КОДА НАПИСАНО", accent: "text-neon" },
  { to: 3400, suffix: "", label: "ЧАСОВ АВТОМАТИЗИРОВАНО", accent: "text-magenta" },
  { to: 27, suffix: "", label: "БОТОВ И СКРИПТОВ СОЗДАНО", accent: "text-acid" },
  { to: 42, suffix: "", label: "НЕЙРОСЕТЕЙ ПРИРУЧЕНО", accent: "text-violet" },
];

export default function Stats() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="panel-cyber group p-6 text-center transition-shadow duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)]">
                <p
                  className={`font-display text-3xl font-black tracking-tight md:text-4xl ${s.accent}`}
                >
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[10px] tracking-[0.2em] text-dim md:text-[11px]">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
