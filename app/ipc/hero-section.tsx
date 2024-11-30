"use client";

import { motion } from "framer-motion";
import { Search, Scale, Book, Gavel } from "lucide-react";
import { Input } from "@/components/ui/input";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { DecorativeBlobs } from "@/components/ui/decorative-blobs";

export function HeroSection() {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      <BackgroundGradient />
      <DecorativeBlobs />

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <Scale className="w-12 h-12 text-primary" />
          <Book className="w-12 h-12 text-primary" />
          <Gavel className="w-12 h-12 text-primary" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Indian Penal Code
          <span className="block text-2xl md:text-4xl mt-2">
            Reference Guide
          </span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Your comprehensive guide to understanding Indian criminal law
          sections, punishments, and related legal information.
        </motion.p>

        <motion.div
          className="w-full max-w-2xl relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="relative">
            <Search className="absolute left-4 top-4 h-6 w-6 text-muted-foreground z-20" />
            <Input
              type="search"
              placeholder="Search IPC sections, keywords, or descriptions..."
              className="z-10 w-full pl-12 pr-4 h-14 text-lg rounded-full border-2 focus:ring-2 focus:ring-primary/20 bg-background/80 backdrop-blur-sm"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
