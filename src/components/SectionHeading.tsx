import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function SectionHeading({
  index,
  title,
  sub,
}: {
  index: string;
  title: ReactNode;
  sub?: string;
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-4 font-pixel text-[10px] text-magenta">
        {"//"} {index}
      </p>
      <h2 className="font-display text-3xl font-extrabold uppercase leading-tight tracking-wide md:text-5xl">
        {title}
      </h2>
      {sub && <p className="mt-5 max-w-2xl text-sm text-dim md:text-base">{sub}</p>}
    </Reveal>
  );
}
