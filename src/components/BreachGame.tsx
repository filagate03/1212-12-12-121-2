"use client";

import { useCallback, useEffect, useState } from "react";

const CODES = ["1C", "55", "7A", "BD", "E9", "FF"];
const SIZE = 6;
const SEQ_LEN = 4;
const BUFFER_LEN = SEQ_LEN + 2;
const TIME_LIMIT = 45;

type Phase = "ready" | "run" | "won" | "lost";
type Axis = "row" | "col";
type Picked = { r: number; c: number; code: string };

function randomCode() {
  return CODES[Math.floor(Math.random() * CODES.length)];
}

/** Генерирует матрицу и маршрут, который гарантированно можно собрать. */
function generatePuzzle() {
  const matrix = Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, randomCode),
  );
  const seq: string[] = [];
  const used = new Set<string>();
  let axis: Axis = "row";
  let index = 0; // стартуем с первой строки, как в игре
  let r = 0;
  let c = 0;

  for (let i = 0; i < SEQ_LEN; i++) {
    let tries = 0;
    if (axis === "row") {
      r = index;
      do {
        c = Math.floor(Math.random() * SIZE);
        tries++;
      } while (used.has(`${r}-${c}`) && tries < 30);
      index = c;
    } else {
      c = index;
      do {
        r = Math.floor(Math.random() * SIZE);
        tries++;
      } while (used.has(`${r}-${c}`) && tries < 30);
      index = r;
    }
    used.add(`${r}-${c}`);
    seq.push(matrix[r][c]);
    axis = axis === "row" ? "col" : "row";
  }
  return { matrix, seq };
}

export default function BreachGame() {
  const [matrix, setMatrix] = useState<string[][] | null>(null);
  const [sequence, setSequence] = useState<string[]>([]);
  const [picked, setPicked] = useState<Picked[]>([]);
  const [axis, setAxis] = useState<Axis>("row");
  const [activeIndex, setActiveIndex] = useState(0);
  const [needIdx, setNeedIdx] = useState(0);
  const [phase, setPhase] = useState<Phase>("ready");
  const [timeLeft, setTimeLeft] = useState(TIME_LIMIT);
  const [wins, setWins] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const start = useCallback(() => {
    const { matrix: m, seq } = generatePuzzle();
    setMatrix(m);
    setSequence(seq);
    setPicked([]);
    setAxis("row");
    setActiveIndex(0);
    setNeedIdx(0);
    setTimeLeft(TIME_LIMIT);
    setPhase("run");
    setAttempts((a) => a + 1);
  }, []);

  // таймер
  useEffect(() => {
    if (phase !== "run") return;
    const t = window.setInterval(() => {
      setTimeLeft((v) => {
        if (v <= 1) {
          window.clearInterval(t);
          setPhase("lost");
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => window.clearInterval(t);
  }, [phase]);

  const pick = (r: number, c: number) => {
    if (phase !== "run" || !matrix) return;
    if (axis === "row" && r !== activeIndex) return;
    if (axis === "col" && c !== activeIndex) return;
    if (picked.some((p) => p.r === r && p.c === c)) return;

    const code = matrix[r][c];
    const newPicked = [...picked, { r, c, code }];
    const newNeed = code === sequence[needIdx] ? needIdx + 1 : needIdx;

    setPicked(newPicked);
    setNeedIdx(newNeed);

    if (newNeed >= sequence.length) {
      setPhase("won");
      setWins((w) => w + 1);
      return;
    }
    if (newPicked.length >= BUFFER_LEN) {
      setPhase("lost");
      return;
    }
    setAxis(axis === "row" ? "col" : "row");
    setActiveIndex(axis === "row" ? c : r);
  };

  const isPicked = (r: number, c: number) =>
    picked.some((p) => p.r === r && p.c === c);

  const inActiveLine = (r: number, c: number) =>
    phase === "run" &&
    ((axis === "row" && r === activeIndex) ||
      (axis === "col" && c === activeIndex));

  return (
    <div className="panel-cyber relative overflow-hidden p-6 md:p-8">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-pixel text-[10px] text-magenta">МИНИ-ИГРА 01</p>
          <h3 className="mt-2 font-display text-xl font-extrabold tracking-wide text-ice md:text-2xl">
            ВЗЛОМ ТЕРМИНАЛА
          </h3>
        </div>
        <div className="flex gap-4 text-[11px] text-dim">
          <p>
            взломов: <span className="text-acid">{wins}</span>
          </p>
          <p>
            попыток: <span className="text-neon">{attempts}</span>
          </p>
        </div>
      </div>

      <p className="mb-6 text-xs leading-relaxed text-dim">
        <span className="text-neon">Как играть:</span> собери маршрут данных,
        выбирая коды из подсвеченной строки или колонки. После каждого хода
        направление меняется. Следи за буфером и таймером.
      </p>

      {phase === "ready" && (
        <div className="flex flex-col items-center gap-5 py-14">
          <p className="font-pixel text-[11px] text-neon animate-flicker">
            ТЕРМИНАЛ ЖДЁТ ВЗЛОМА
          </p>
          <button
            onClick={start}
            className="btn-cyber bg-magenta px-8 py-4 font-display text-sm font-bold tracking-widest text-white hover:bg-neon hover:text-void hover:shadow-[0_0_36px_rgba(0,240,255,0.5)]"
          >
            НАЧАТЬ ВЗЛОМ
          </button>
        </div>
      )}

      {phase !== "ready" && matrix && (
        <div className="grid gap-8 md:grid-cols-[auto_1fr]">
          {/* матрица */}
          <div className="mx-auto grid grid-cols-6 gap-1.5 md:gap-2">
            {matrix.map((rowArr, r) =>
              rowArr.map((code, c) => {
                const pickedCell = isPicked(r, c);
                const active = inActiveLine(r, c) && !pickedCell;
                return (
                  <button
                    key={`${r}-${c}`}
                    onClick={() => pick(r, c)}
                    disabled={!active}
                    className={`flex h-10 w-10 items-center justify-center border font-mono text-xs transition-all duration-150 sm:h-12 sm:w-12 sm:text-sm ${
                      pickedCell
                        ? "border-line/40 bg-void/40 text-dim/50 line-through"
                        : active
                          ? "border-neon/70 bg-neon/10 text-neon hover:bg-neon/25 hover:shadow-[0_0_14px_rgba(0,240,255,0.4)]"
                          : "border-line/50 bg-panel/60 text-dim"
                    }`}
                  >
                    {code}
                  </button>
                );
              }),
            )}
          </div>

          {/* панель состояния */}
          <div className="space-y-5">
            <div>
              <p className="mb-2 text-[11px] tracking-widest text-dim">
                МАРШРУТ ДАННЫХ
              </p>
              <div className="flex flex-wrap gap-2">
                {sequence.map((code, i) => (
                  <span
                    key={i}
                    className={`border px-3 py-1.5 font-mono text-sm ${
                      i < needIdx
                        ? "border-acid/60 bg-acid/10 text-acid"
                        : i === needIdx
                          ? "animate-blink border-magenta/70 bg-magenta/10 text-magenta"
                          : "border-line bg-void/50 text-dim"
                    }`}
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-2 text-[11px] tracking-widest text-dim">
                БУФЕР ({picked.length}/{BUFFER_LEN})
              </p>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: BUFFER_LEN }).map((_, i) => (
                  <span
                    key={i}
                    className={`flex h-9 w-9 items-center justify-center border font-mono text-xs ${
                      picked[i]
                        ? "border-neon/50 bg-neon/10 text-neon"
                        : "border-line/60 bg-void/40 text-dim/50"
                    }`}
                  >
                    {picked[i] ? picked[i].code : "·"}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-[11px] tracking-widest text-dim">
                <span>ТАЙМЕР</span>
                <span className={timeLeft <= 10 ? "text-magenta" : "text-neon"}>
                  {timeLeft}с
                </span>
              </div>
              <div className="h-2.5 w-full border border-line bg-void/70 p-0.5">
                <div
                  className={`h-full transition-[width] duration-1000 ease-linear ${
                    timeLeft <= 10 ? "bg-magenta" : "bg-neon"
                  }`}
                  style={{ width: `${(timeLeft / TIME_LIMIT) * 100}%` }}
                />
              </div>
            </div>

            {phase === "won" && (
              <div className="border border-acid/50 bg-acid/10 p-4">
                <p className="font-pixel text-[11px] text-acid glow-acid">
                  ДОСТУП РАЗРЕШЁН
                </p>
                <p className="mt-2 text-xs text-ice/80">
                  Данные получены. Корпорация даже не заметила.
                </p>
              </div>
            )}
            {phase === "lost" && (
              <div className="border border-magenta/50 bg-magenta/10 p-4">
                <p className="font-pixel text-[11px] text-magenta glow-magenta">
                  ВЗЛОМ ПРОВАЛЕН
                </p>
                <p className="mt-2 text-xs text-ice/80">
                  След замечен. Перезагрузи терминал и попробуй снова.
                </p>
              </div>
            )}
            {(phase === "won" || phase === "lost") && (
              <button
                onClick={start}
                className="btn-cyber bg-neon px-6 py-3 font-display text-xs font-bold tracking-widest text-void hover:bg-magenta hover:text-white"
              >
                ЕЩЁ РАЗ ▸
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
