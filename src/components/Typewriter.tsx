"use client";

import { useEffect, useState } from "react";

export default function Typewriter({
  phrases,
  className = "",
}: {
  phrases: string[];
  className?: string;
}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index % phrases.length];
    let timeout: number | undefined;

    if (!deleting && text === current) {
      timeout = window.setTimeout(() => setDeleting(true), 1900);
    } else if (deleting && text === "") {
      timeout = window.setTimeout(() => {
        setDeleting(false);
        setIndex((v) => (v + 1) % phrases.length);
      }, 400);
    } else {
      timeout = window.setTimeout(
        () => {
          setText(current.slice(0, text.length + (deleting ? -1 : 1)));
        },
        deleting ? 30 : 65,
      );
    }

    return () => {
      if (timeout) window.clearTimeout(timeout);
    };
  }, [text, deleting, index, phrases]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink text-neon">▌</span>
    </span>
  );
}
