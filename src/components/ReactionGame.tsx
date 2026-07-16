"use client";

import { useEffect, useRef, useState } from "react";

type Stage = "idle" | "wait" | "go" | "early" | "result";

function rank(ms: number): string {
  if (ms < 180) return "КИБЕРБОРГ";
  if (ms < 230) return "НЕТРАННЕР";
  if (ms < 300) return "СТРАННИК";
  return "НУЖЕН АПГРЕЙД НЕЙРОЛИНКА";
}

export default function ReactionGame() {
  const [stage, setStage] = useState<Stage>("idle");
  const [result, setResult] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const startTime = useRef(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const saved = window.localStorage.getItem("nc-reaction-best");
    const t = saved
      ? window.setTimeout(() => setBest(Number(saved)), 0)
      : undefined;
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(timer.current);
    };
  }, []);

  const beginWait = () => {
    setStage("wait");
    const delay = 1500 + Math.random() * 3200;
    timer.current = window.setTimeout(() => {
      startTime.current = performance.now();
      setStage("go");
    }, delay);
  };

  const handleClick = () => {
    if (stage === "idle" || stage === "result" || stage === "early") {
      beginWait();
      return;
    }
    if (stage === "wait") {
      window.clearTimeout(timer.current);
      setStage("early");
      return;
    }
    if (stage === "go") {
      const ms = Math.round(performance.now() - startTime.current);
      setResult(ms);
      setStage("result");
      setBest((prev) => {
        const next = prev === null ? ms : Math.min(prev, ms);
        window.localStorage.setItem("nc-reaction-best", String(next));
        return next;
      });
    }
  };

  const panelStyle: Record<Stage, string> = {
    idle: "border-line bg-panel/60 hover:border-neon/50",
    wait: "border-magenta/60 bg-magenta/10",
    go: "border-acid bg-acid/20 shadow-[0_0_50px_rgba(182,255,0,0.3)]",
    early: "border-amber/60 bg-amber/10",
    result: "border-neon/60 bg-neon/10",
  };

  const label: Record<Stage, string> = {
    idle: "НАЖМИ, ЧТОБЫ НАЧАТЬ",
    wait: "ЖДИ СИГНАЛ...",
    go: "ЖМИ!",
    early: "СЛИШКОМ РАНО!",
    result: "РЕЗУЛЬТАТ",
  };

  return (
    <div className="panel-cyber p-6 md:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-pixel text-[10px] text-acid">МИНИ-ИГРА 02</p>
          <h3 className="mt-2 font-display text-xl font-extrabold tracking-wide text-ice md:text-2xl">
            НЕЙРО-РЕФЛЕКС
          </h3>
        </div>
        <p className="text-[11px] text-dim">
          рекорд:{" "}
          <span className="text-acid">{best !== null ? `${best} мс` : "—"}</span>
        </p>
      </div>

      <p className="mb-6 text-xs leading-relaxed text-dim">
        <span className="text-neon">Как играть:</span> жди, пока панель
        позеленеет, и жми как можно быстрее. Проверь, достоин ли ты нейролинка.
      </p>

      <button
        onClick={handleClick}
        className={`clip-cyber flex h-52 w-full flex-col items-center justify-center gap-3 border transition-colors duration-150 ${panelStyle[stage]}`}
      >
        <span
          className={`font-pixel text-sm ${
            stage === "go"
              ? "text-acid glow-acid"
              : stage === "wait"
                ? "text-magenta"
                : stage === "early"
                  ? "text-amber"
                  : "text-neon"
          }`}
        >
          {label[stage]}
        </span>
        {stage === "result" && result !== null && (
          <>
            <span className="font-display text-5xl font-black text-ice">
              {result}
              <span className="text-xl text-dim"> мс</span>
            </span>
            <span className="text-xs tracking-[0.25em] text-acid">
              {rank(result)}
            </span>
          </>
        )}
        {stage === "early" && (
          <span className="text-xs text-dim">нажми, чтобы попробовать снова</span>
        )}
        {stage === "idle" && (
          <span className="text-xs text-dim">тест займёт пару секунд</span>
        )}
      </button>
    </div>
  );
}
