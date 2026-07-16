import CyberRain from "@/components/CyberRain";
import Typewriter from "@/components/Typewriter";
import { TG_LINK } from "@/lib/site";

const PHRASES = [
  "строю приложения с нуля",
  "автоматизирую рутину ботами",
  "приручаю нейросети",
  "иду к корпорации-единорогу",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* фон: матричный дождь + затемнение + перспективная сетка */}
      <CyberRain className="absolute inset-0 h-full w-full opacity-45" />
      <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/30 to-void" />
      <div className="grid-floor absolute inset-x-0 bottom-0 h-[38vh]" />
      <div className="scanbeam" />

      {/* гигантская контурная надпись на фоне */}
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute -right-6 top-24 hidden select-none font-display text-[11rem] font-black leading-none opacity-60 lg:block"
      >
        NC-77
      </span>

      {/* HUD-уголки */}
      <span className="hud-corner left-4 top-20 border-l-2 border-t-2 md:left-8" />
      <span className="hud-corner right-4 top-20 border-r-2 border-t-2 md:right-8" />
      <span className="hud-corner bottom-6 left-4 border-b-2 border-l-2 md:left-8" />
      <span className="hud-corner bottom-6 right-4 border-b-2 border-r-2 md:right-8" />

      {/* HUD-подписи */}
      <p className="absolute left-6 top-24 hidden font-pixel text-[9px] text-neon/60 md:block">
        SYS.ONLINE
      </p>
      <p className="absolute right-6 top-24 hidden font-pixel text-[9px] text-magenta/60 md:block">
        v2.077
      </p>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 pt-32 md:px-6">
        <p className="mb-6 inline-flex items-center gap-2 border border-line bg-panel/70 px-3 py-2 font-pixel text-[9px] text-acid md:text-[10px]">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-acid" />
          ТЕЛЕГРАМ-КАНАЛ НЕТРАННЕРА
        </p>

        <h1 className="font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
          <span className="glitch animate-flicker text-ice" data-text="НАЙТ-">
            НАЙТ-
          </span>
          <span
            className="glitch text-neon glow-neon"
            data-text="СИТИ"
          >
            СИТИ
          </span>
        </h1>

        <p className="mt-8 max-w-xl text-base text-ice/90 md:text-lg">
          <span className="text-magenta">{"> "}</span>
          здесь я <Typewriter phrases={PHRASES} className="text-neon" />
        </p>

        <p className="mt-4 max-w-xl text-sm leading-relaxed text-dim md:text-base">
          Без воды и мотивационной жвачки: код, разборы, метрики и честный
          дневник пути от первой строки до своей корпорации-единорога.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={TG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber bg-neon px-7 py-4 font-display text-sm font-bold tracking-widest text-void hover:bg-magenta hover:text-white hover:shadow-[0_0_36px_rgba(255,42,109,0.55)]"
          >
            ПОДКЛЮЧИТЬСЯ
          </a>
          <a
            href="#games"
            className="btn-cyber border border-neon/60 bg-neon/5 px-7 py-4 font-display text-sm font-bold tracking-widest text-neon hover:bg-neon/15 hover:shadow-[0_0_28px_rgba(0,240,255,0.35)]"
          >
            ЗОНА ИГР ▸
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-xs text-dim">
          <p>
            <span className="text-neon">▸</span> статус:{" "}
            <span className="text-acid">в эфире</span>
          </p>
          <p>
            <span className="text-neon">▸</span> контент:{" "}
            <span className="text-ice">код / автоматизация / ИИ</span>
          </p>
          <p>
            <span className="text-neon">▸</span> цель:{" "}
            <span className="text-magenta">$1B+</span>
          </p>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-float font-pixel text-[9px] text-neon/70 hover:text-neon"
      >
        СКРОЛЛ ▼
      </a>
    </section>
  );
}
