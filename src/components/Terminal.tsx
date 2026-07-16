"use client";

import { useEffect, useRef, useState } from "react";

type Line = { text: string; kind: "cmd" | "out" };

const LINES: Line[] = [
  { text: "$ whoami", kind: "cmd" },
  { text: "нетраннер // автор канала НАЙТ-СИТИ", kind: "out" },
  { text: "$ cat mission.txt", kind: "cmd" },
  { text: "дойти до корпорации-единорога и показать весь путь", kind: "out" },
  { text: "$ ./skills --list", kind: "cmd" },
  { text: "[приложения] [автоматизация] [боты] [нейросети]", kind: "out" },
  { text: "$ ./run future.sh", kind: "cmd" },
  { text: "загрузка будущего... ██████████ 100%", kind: "out" },
  { text: "статус: ПУТЬ НАЧАТ. присоединяйся.", kind: "out" },
];

export default function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started || lineIdx >= LINES.length) return;
    const line = LINES[lineIdx];
    if (charIdx < line.text.length) {
      const t = window.setTimeout(
        () => setCharIdx((c) => c + 1),
        line.kind === "cmd" ? 60 : 20,
      );
      return () => window.clearTimeout(t);
    }
    const t = window.setTimeout(
      () => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      },
      line.kind === "cmd" ? 300 : 450,
    );
    return () => window.clearTimeout(t);
  }, [started, lineIdx, charIdx]);

  const done = lineIdx >= LINES.length;

  return (
    <div ref={ref} className="panel-cyber overflow-hidden">
      <div className="flex items-center gap-2 border-b border-line/70 bg-void/60 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-magenta/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-acid/80" />
        <span className="ml-3 text-[11px] tracking-widest text-dim">
          nightcity@terminal:~
        </span>
      </div>
      <div className="min-h-[290px] p-5 text-[13px] leading-7 md:text-sm">
        {LINES.slice(0, lineIdx).map((line, i) => (
          <p
            key={i}
            className={line.kind === "cmd" ? "text-neon" : "text-ice/85"}
          >
            {line.text}
          </p>
        ))}
        {!done && started && (
          <p
            className={
              LINES[lineIdx].kind === "cmd" ? "text-neon" : "text-ice/85"
            }
          >
            {LINES[lineIdx].text.slice(0, charIdx)}
            <span className="animate-blink text-acid">▌</span>
          </p>
        )}
        {done && <span className="animate-blink text-acid">▌</span>}
        {!started && <span className="animate-blink text-acid">▌</span>}
      </div>
    </div>
  );
}
