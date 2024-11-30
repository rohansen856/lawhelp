"use client";

import { motion } from "framer-motion";
import { Scale, Calendar, FileText } from "lucide-react";
import type { PrecedentCase } from "./law";

interface PrecedentCasesProps {
  cases: PrecedentCase[];
}

export function PrecedentCases({ cases }: PrecedentCasesProps) {
  return (
    <section className="mb-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold mb-6 flex items-center gap-2"
      >
        <Scale className="w-6 h-6 text-primary" />
        Precedent Cases
      </motion.h2>

      <div className="grid gap-6">
        {cases.map((case_, index) => (
          <motion.div
            key={case_.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border group hover:border-primary/30 transition-colors"
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                {case_.title}
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {case_.date}
                </span>
                <span className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  {case_.citation}
                </span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {case_.summary}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
