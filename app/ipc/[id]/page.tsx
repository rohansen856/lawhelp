"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TableOfContents } from "./table-of-contents";
import { SectionHeader } from "./section-header";
import { NewsMarquee } from "./news-marquee";

const mockData = {
  id: "302",
  number: "302",
  title: "Punishment for murder",
  description:
    "Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.",
  enactmentDate: "1860-10-06",
  lastAmendmentDate: "2018-08-11",
  jurisdiction: "All India",
  subsections: [
    {
      id: "302-1",
      number: "302(1)",
      text: "Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.",
      clauses: [],
    },
  ],
  interpretations: [
    {
      id: "int-1",
      court: "Supreme Court of India",
      date: "2019-03-15",
      summary: "The Court held that...",
      citation: "AIR 2019 SC 1234",
    },
  ],
  relatedNews: [
    {
      id: "news-1",
      title: "Supreme Court Issues New Guidelines for Section 302 Cases",
      source: "Legal News Daily",
      date: "2024-02-15",
      url: "#",
    },
  ],
};

export default function SectionPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
        style={{ scaleX }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <TableOfContents
            section={mockData.number}
            subsections={mockData.subsections}
          />

          <main className="flex-1 max-w-4xl">
            <SectionHeader
              number={mockData.number}
              title={mockData.title}
              enactmentDate={mockData.enactmentDate}
              lastAmendmentDate={mockData.lastAmendmentDate}
              jurisdiction={mockData.jurisdiction}
            />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="prose prose-neutral dark:prose-invert max-w-none"
            >
              <section id={`section-${mockData.number}`} className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
                  <p className="text-lg leading-relaxed">
                    {mockData.description}
                  </p>
                </div>
              </section>

              {mockData.subsections.map((subsection) => (
                <motion.section
                  key={subsection.id}
                  id={`subsection-${subsection.number}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold mb-4">
                    Subsection {subsection.number}
                  </h3>
                  <div className="p-6 rounded-lg bg-card/50 backdrop-blur-sm border">
                    <p className="leading-relaxed">{subsection.text}</p>
                  </div>
                </motion.section>
              ))}

              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">
                  Judicial Interpretations
                </h2>
                {mockData.interpretations.map((interpretation) => (
                  <motion.div
                    key={interpretation.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-6 p-6 rounded-lg bg-card/50 backdrop-blur-sm border"
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">
                        {interpretation.court}
                      </span>
                      <span className="text-muted-foreground">
                        {interpretation.date}
                      </span>
                    </div>
                    <p className="mb-2">{interpretation.summary}</p>
                    <p className="text-sm text-muted-foreground">
                      Citation: {interpretation.citation}
                    </p>
                  </motion.div>
                ))}
              </section>
            </motion.div>
          </main>
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-20 right-8 rounded-full h-12 w-12 bg-background/80 backdrop-blur-sm shadow-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ArrowUp className="h-6 w-6" />
      </Button>

      <NewsMarquee news={mockData.relatedNews} />
    </div>
  );
}
