import Reveal from "@/components/Reveal";
import { TG_HANDLE, TG_LINK } from "@/lib/site";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      {/* фоновое свечение */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/10 blur-[120px]"
      />
      <span
        aria-hidden="true"
        className="text-outline pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[16vw] font-black leading-none opacity-40"
      >
        JOIN US
      </span>

      <div className="relative mx-auto max-w-4xl px-4 text-center md:px-6">
        <Reveal>
          <p className="mb-6 font-pixel text-[10px] text-acid">
            {"// ПОДКЛЮЧЕНИЕ К СЕТИ"}
          </p>
          <h2 className="font-display text-4xl font-black uppercase leading-tight tracking-wide md:text-6xl">
            готов выйти в{" "}
            <span className="glitch text-neon glow-neon" data-text="НАЙТ-СИТИ?">
              НАЙТ-СИТИ?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-dim md:text-base">
            Подписывайся на канал: учись собирать приложения, автоматизировать
            рутину и следи в прямом эфире, как строится путь к
            корпорации-единорогу.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href={TG_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber animate-pulse-ring-neon bg-neon px-10 py-5 font-display text-base font-bold tracking-widest text-void hover:bg-magenta hover:text-white hover:shadow-[0_0_44px_rgba(255,42,109,0.6)]"
            >
              ПОДПИСАТЬСЯ В TELEGRAM
            </a>
            <p className="text-xs text-dim">
              {TG_HANDLE} · бесплатно · без спама
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
