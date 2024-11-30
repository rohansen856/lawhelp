"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

interface ContentRendererProps {
    content: string
}

export function ContentRenderer({ content }: ContentRendererProps) {
    return (
        <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
        >
            {content}
        </motion.article>
    )
}
