"use client";

import { motion } from "framer-motion";

export function FloatingNavbar({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-4 transform w-[95%] max-w-7xl mx-auto z-50"
    >
      <motion.div
        className="relative px-4 py-4 rounded-2xl bg-background/70 backdrop-blur-lg border shadow-lg"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
