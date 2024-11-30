"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface TableOfContentsProps {
  section: string;
  subsections: { id: string; number: string; text: string }[];
}

export function TableOfContents({
  section,
  subsections,
}: TableOfContentsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-4 w-64 hidden lg:block"
    >
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center gap-2 w-full p-4 text-left font-semibold bg-card hover:bg-accent rounded-lg">
          <ChevronDown className="h-4 w-4" />
          Contents
        </CollapsibleTrigger>
        <CollapsibleContent>
          <nav className="mt-4 space-y-2">
            <a
              href={`#section-${section}`}
              className="block p-2 text-sm hover:bg-accent rounded-md transition-colors"
            >
              Section {section} Overview
            </a>
            {subsections.map((subsection) => (
              <a
                key={subsection.id}
                href={`#subsection-${subsection.number}`}
                className="block p-2 pl-4 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              >
                {subsection.number}
              </a>
            ))}
          </nav>
        </CollapsibleContent>
      </Collapsible>
    </motion.div>
  );
}
