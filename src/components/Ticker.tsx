const ITEMS = [
  "АВТОМАТИЗАЦИЯ",
  "ПРИЛОЖЕНИЯ",
  "НЕЙРОСЕТИ",
  "БОТЫ",
  "ПУТЬ К ЕДИНОРОГУ",
  "КОД КАЖДЫЙ ДЕНЬ",
  "НАЙТ-СИТИ",
];

export default function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative -rotate-1 border-y border-neon/30 bg-panel/80 py-3 shadow-[0_0_40px_rgba(0,240,255,0.12)]">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {[0, 1].map((half) => (
          <div key={half} className="flex items-center gap-8">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-8 font-display text-sm font-bold tracking-[0.25em]"
              >
                <span className={i % 2 === 0 ? "text-neon" : "text-magenta"}>
                  {item}
                </span>
                <span className="text-acid">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
