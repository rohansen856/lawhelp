"use client"

import { LegalSearch } from "@/app/legal-reference/search"
import { LegalList } from "@/app/legal-reference/items"
import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/layout/navbar"

export default function LegalReferencePage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [selectedBadges, setSelectedBadges] = useState<string[]>([])

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Legal Reference
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive database of laws, regulations, and legal
                        resources
                    </p>
                </motion.div>

                <LegalSearch
                    onSearch={setSearchQuery}
                    onCategoryChange={setSelectedCategories}
                    onBadgeChange={setSelectedBadges}
                />

                <LegalList
                    searchQuery={searchQuery}
                    selectedCategories={selectedCategories}
                    selectedBadges={selectedBadges}
                />
            </div>
        </main>
    )
}
