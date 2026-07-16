import { TG_LINK } from "@/lib/site";

const LINKS = [
  { href: "#about", label: "О КАНАЛЕ" },
  { href: "#path", label: "ПУТЬ" },
  { href: "#games", label: "ИГРЫ" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/60 bg-void/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="font-pixel text-sm text-neon glow-neon group-hover:animate-flicker">
            NC//
          </span>
          <span className="hidden font-display text-xs font-bold tracking-[0.3em] text-ice sm:inline">
            НАЙТ-СИТИ
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-[0.2em] text-dim transition-colors hover:text-neon"
            >
              <span className="text-magenta">/</span> {l.label}
            </a>
          ))}
        </nav>

        <a
          href={TG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cyber bg-neon px-4 py-2 text-xs font-bold tracking-[0.15em] text-void hover:bg-magenta hover:text-white hover:shadow-[0_0_24px_rgba(255,42,109,0.5)]"
        >
          ВСТУПИТЬ
        </a>
      </div>
    </header>
  );
}
