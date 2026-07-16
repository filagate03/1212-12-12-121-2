import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import BreachGame from "@/components/BreachGame";
import ReactionGame from "@/components/ReactionGame";

export default function Games() {
  return (
    <section id="games" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          index="04 // ЗОНА ИГР"
          title={
            <>
              тренировка <span className="text-neon glow-neon">нетраннера</span>
            </>
          }
          sub="Две мини-игры прямо на странице: взломай терминал в стиле breach-протокола и проверь скорость своих рефлексов."
        />

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <Reveal>
            <BreachGame />
          </Reveal>
          <Reveal delay={150}>
            <ReactionGame />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
