"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas of law does your firm specialize in?",
    answer:
      "Our firm specializes in Corporate Law, Civil Litigation, Contract Law, Employment Law, Business Law, and International Law. We have experienced attorneys in each practice area to provide comprehensive legal solutions.",
  },
  {
    question: "How do I schedule a consultation?",
    answer:
      "You can schedule a consultation by clicking the 'Free Consultation' button on our website, calling our office directly, or filling out our contact form. We'll respond within 24 hours to arrange a meeting.",
  },
  {
    question: "What should I expect during the initial consultation?",
    answer:
      "During the initial consultation, we'll discuss your legal needs, assess your situation, explain potential solutions, and outline our approach. This is also an opportunity to ask questions about our experience and fee structure.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes, we offer both in-person and virtual consultations to accommodate your schedule and preferences. Our virtual meetings are conducted through secure, confidential platforms.",
  },
  {
    question: "How do your fees work?",
    answer:
      "Our fee structure varies depending on the type of case and services required. We offer hourly rates, flat fees, and contingency arrangements. We'll discuss all fee options during your initial consultation.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
