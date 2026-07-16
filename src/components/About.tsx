import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Terminal from "@/components/Terminal";

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
          <Reveal delay={100}>
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

          <Reveal delay={250}>
            <Terminal />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
