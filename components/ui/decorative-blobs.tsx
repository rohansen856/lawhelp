"use client";

import { motion } from "framer-motion";

export function DecorativeBlobs() {
  return (
    <>
      <motion.div
        className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1,
        }}
      />
    </>
  );
}
