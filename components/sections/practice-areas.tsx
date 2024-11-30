"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Scale,
  Briefcase,
  FileText,
  Building2,
  Users2,
  Globe2,
} from "lucide-react";
import { CardHoverEffect } from "@/components/ui/card-hover-effect";
import { AnimatedText } from "@/components/ui/animated-text";

const practiceAreas = [
  {
    title: "Corporate Law",
    description:
      "Expert guidance on business formation, mergers, and acquisitions.",
    icon: Building2,
  },
  {
    title: "Civil Litigation",
    description:
      "Strong representation in complex civil disputes and lawsuits.",
    icon: Scale,
  },
  {
    title: "Contract Law",
    description:
      "Comprehensive contract drafting, review, and negotiation services.",
    icon: FileText,
  },
  {
    title: "Employment Law",
    description:
      "Protection of both employer and employee rights and interests.",
    icon: Users2,
  },
  {
    title: "Business Law",
    description: "Strategic legal advice for businesses of all sizes.",
    icon: Briefcase,
  },
  {
    title: "International Law",
    description: "Expert handling of cross-border legal matters and disputes.",
    icon: Globe2,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function PracticeAreas() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <AnimatedText text="Our Practice Areas" className="inline-block" />
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive legal services across various practice areas
            to meet your specific needs.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {practiceAreas.map((area, index) => (
            <motion.div key={area.title} variants={item}>
              <CardHoverEffect>
                <Card className="h-full">
                  <CardHeader>
                    <div className="mb-4">
                      <area.icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              </CardHoverEffect>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
