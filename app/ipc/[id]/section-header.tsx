"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SectionHeaderProps {
  number: string;
  title: string;
  enactmentDate: string;
  lastAmendmentDate: string;
  jurisdiction: string;
}

export function SectionHeader({
  number,
  title,
  enactmentDate,
  lastAmendmentDate,
  jurisdiction,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex items-center gap-4 mb-4">
        <Badge variant="outline" className="text-lg px-4 py-1">
          Section {number}
        </Badge>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Enacted: {enactmentDate}</span>
          <span className="mx-2">•</span>
          <span>Last amended: {lastAmendmentDate}</span>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
        {title}
      </h1>
      <div className="flex items-center gap-2 text-muted-foreground">
        <MapPin className="h-4 w-4" />
        <span>Jurisdiction: {jurisdiction}</span>
      </div>
    </motion.div>
  );
}
