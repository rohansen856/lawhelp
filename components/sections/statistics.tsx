"use client";

import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  { year: "2019", cases: 150 },
  { year: "2020", cases: 230 },
  { year: "2021", cases: 310 },
  { year: "2022", cases: 420 },
  { year: "2023", cases: 550 },
];

const stats = [
  { id: 1, name: "Successful Cases", value: "98%" },
  { id: 2, name: "Client Satisfaction", value: "99%" },
  { id: 3, name: "Years Experience", value: "25+" },
  { id: 4, name: "Legal Professionals", value: "50+" },
];

export function Statistics() {
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
            Our Track Record
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A history of success and growth in serving our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-background rounded-lg p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6">
              Cases Handled Per Year
            </h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="cases" fill="hsl(var(--primary))" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <Card key={stat.id}>
                <CardHeader>
                  <CardTitle className="text-5xl font-bold text-primary">
                    {stat.value}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground">{stat.name}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
