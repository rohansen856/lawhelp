"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start((i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.03 },
    }));
  }, [controls]);

  return (
    <span className="inline-block">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          className={className}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}
