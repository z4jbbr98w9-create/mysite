"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, animate } from "framer-motion";

interface Props {
  value: number;
  suffix?: string;
  className?: string;
  duration?: number;
}

export default function Counter({ value, suffix = "", className = "", duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => setDisplay(Math.floor(latest)),
    });
    return controls.stop;
  }, [inView, value, count, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {display.toLocaleString("ru-RU")}
      {suffix}
    </motion.span>
  );
}
