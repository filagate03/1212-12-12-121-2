import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Terminal from "@/components/Terminal";
import { TG_HANDLE, TG_LINK } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="01 // О КАНАЛЕ"
          title={
            <>
              что такое <span className="text-neon glow-neon">НАЙТ-СИТИ</span>
            </>
          }
        />

        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-8">
            <Reveal delay={100}>
              <div className="panel-cyber overflow-hidden">
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src="/images/author.jpg"
                    alt="Алексей — автор канала НАЙТ-СИТИ"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-5">
                    <p className="font-display text-xl font-black uppercase tracking-wide text-ice">
                      Алексей
                    </p>
                    <p className="font-pixel text-[9px] text-neon/90">
                      {TG_HANDLE}
                    </p>
                    <p className="mt-1 text-xs text-dim">
                      нетраннер // автор канала
                    </p>
                  </div>
                </div>

                <div className="border-t border-line/70 p-5">
                  <a
                    href={TG_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber flex w-full items-center justify-center gap-2 border border-neon/60 bg-neon/10 px-5 py-3 font-display text-xs font-bold tracking-widest text-neon transition-colors hover:bg-neon hover:text-void"
                  >
                    <span>TELEGRAM</span>
                    <span className="text-[10px]">▸</span>
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-6 text-sm leading-relaxed text-ice/85 md:text-base">
                <p>
                  <span className="text-magenta">{"> "}</span>
                  Это мой публичный дневник нетраннера. Я иду к цели, которая
                  звучит как фантастика —{" "}
                  <span className="text-neon">собственная корпорация-единорог</span>{" "}
                  — и показываю каждый шаг: от первых скриптов до продуктов,
                  которыми пользуются люди.
                </p>
                <p>
                  <span className="text-magenta">{"> "}</span>
                  Внутри — понятные уроки и практика: как собрать приложение, как
                  отдать рутину ботам, как заставить нейросеть работать на тебя.
                  Всё объясняю так, чтобы разобрался даже тот, кто вчера впервые
                  услышал слово «код».
                </p>
                <p>
                  <span className="text-magenta">{"> "}</span>
                  Никаких «успешных успехов». Только реальные цифры, провалы,
                  находки и работающие инструменты — с исходниками.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  {["#разработка", "#автоматизация", "#нейросети", "#путь"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="clip-cyber-sm border border-line bg-panel px-3 py-1.5 text-xs text-neon/90"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <Terminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
