import { TG_HANDLE, TG_LINK } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-line/60 bg-panel/40">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-xs text-dim md:flex-row md:px-6">
        <p className="font-pixel text-[10px] text-neon/70">NC// НАЙТ-СИТИ</p>
        <p className="tracking-wider">
          собрано вручную в киберпространстве · 2026
        </p>
        <a
          href={TG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="tracking-wider text-dim transition-colors hover:text-neon"
        >
          telegram: <span className="text-neon">{TG_HANDLE}</span>
        </a>
      </div>
    </footer>
  );
}
