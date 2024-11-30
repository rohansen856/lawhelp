"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FloatingNavigationProps {
  prevSection?: { number: string; title: string };
  nextSection?: { number: string; title: string };
}

export function FloatingNavigation({
  prevSection,
  nextSection,
}: FloatingNavigationProps) {
  return (
    <div className="fixed top-1/2 -translate-y-1/2 w-full pointer-events-none z-40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          {prevSection && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="pointer-events-auto"
            >
              <Button
                variant="ghost"
                className="group flex items-center gap-2 bg-background/80 backdrop-blur-sm border shadow-lg"
              >
                <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Previous</div>
                  <div className="text-sm font-medium">
                    Section {prevSection.number}
                  </div>
                </div>
              </Button>
            </motion.div>
          )}

          {nextSection && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="pointer-events-auto"
            >
              <Button
                variant="ghost"
                className="group flex items-center gap-2 bg-background/80 backdrop-blur-sm border shadow-lg"
              >
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">Next</div>
                  <div className="text-sm font-medium">
                    Section {nextSection.number}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
