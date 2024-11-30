"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  BookOpen,
  Clock,
  Scale,
  Users,
  Building,
  History,
  FileText,
} from "lucide-react";

interface MetadataItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

interface SectionMetadataProps {
  metadata: {
    category: string;
    type: string;
    status: string;
    applicability: string;
    lastReview: string;
    amendments: number;
    relatedActs: string[];
  };
}

export function SectionMetadata({ metadata }: SectionMetadataProps) {
  const items: MetadataItem[] = [
    {
      icon: <BookOpen className="w-4 h-4" />,
      label: "Category",
      value: metadata.category,
      color: "text-blue-500",
    },
    {
      icon: <Scale className="w-4 h-4" />,
      label: "Type",
      value: metadata.type,
      color: "text-purple-500",
    },
    {
      icon: <AlertTriangle className="w-4 h-4" />,
      label: "Status",
      value: metadata.status,
      color: "text-green-500",
    },
    {
      icon: <Users className="w-4 h-4" />,
      label: "Applicability",
      value: metadata.applicability,
      color: "text-orange-500",
    },
    {
      icon: <Clock className="w-4 h-4" />,
      label: "Last Review",
      value: metadata.lastReview,
      color: "text-red-500",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="mb-12">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
            className="p-4 rounded-lg bg-card/50 backdrop-blur-sm border hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className={item.color}>{item.icon}</span>
              <span className="text-sm text-muted-foreground">
                {item.label}
              </span>
            </div>
            <div className="font-medium">{item.value}</div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-6 p-4 rounded-lg bg-card/50 backdrop-blur-sm border"
      >
        <div className="flex items-center gap-2 mb-2">
          <Building className="w-4 h-4 text-primary" />
          <h3 className="font-medium">Related Acts</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {metadata.relatedActs.map((act, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm rounded-full bg-primary/5 hover:bg-primary/10 transition-colors"
            >
              {act}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
