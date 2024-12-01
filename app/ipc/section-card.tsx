"use client"

import { motion } from "framer-motion"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, AlertTriangle, Clock } from "lucide-react"

interface IPCSection {
    id: string
    number: string
    title: string
    description: string
    punishment: string
    relatedSections: string
}

export function SectionCard({ section }: { section: IPCSection }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
        >
            <Card className="h-full backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 bg-secondary/10">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <Badge
                            variant="outline"
                            className="mb-2 bg-primary/5 hover:bg-primary/10"
                        >
                            <Clock className="w-3 h-3 mr-1" />
                            Section {section.number}
                        </Badge>
                        <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <ArrowRight className="h-4 w-4 text-primary" />
                        </motion.div>
                    </div>
                    <CardTitle className="line-clamp-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                        {section.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                        {section.description}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="bg-destructive/10 p-4 rounded-lg">
                            <div className="flex items-center gap-2 text-sm font-semibold mb-2 text-destructive">
                                <AlertTriangle className="w-4 h-4" />
                                <h4>Punishment:</h4>
                            </div>
                            <p className="text-sm text-muted-foreground">
                                {section.punishment}
                            </p>
                        </div>
                        <div>
                            <h4 className="text-sm font-semibold mb-2">
                                Related Sections:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {section.relatedSections
                                    .split(", ")
                                    .map((relatedSection) => (
                                        <Badge
                                            key={relatedSection}
                                            variant="secondary"
                                            className="bg-primary/5 hover:bg-primary/10 transition-colors"
                                        >
                                            {relatedSection}
                                        </Badge>
                                    ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
