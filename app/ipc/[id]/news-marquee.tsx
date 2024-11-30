"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { NewsItem } from "./law";

interface NewsMarqueeProps {
  news: NewsItem[];
}

export function NewsMarquee({ news }: NewsMarqueeProps) {
  const { scrollYProgress } = useScroll();
  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t">
      <motion.div
        style={{ x: translateX }}
        className="flex gap-8 py-4 whitespace-nowrap"
      >
        {[...news, ...news].map((item, index) => (
          <a
            key={`${item.id}-${index}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            <span>{item.title}</span>
            <ExternalLink className="h-3 w-3" />
            <span className="text-muted-foreground">
              {item.source} • {item.date}
            </span>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
