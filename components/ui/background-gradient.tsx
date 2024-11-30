"use client";

import { motion } from "framer-motion";

export function BackgroundGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-20 dark:opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="absolute inset-0 bg-background/80 backdrop-blur-3xl" />
    </div>
  );
}
