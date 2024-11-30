"use client"

import { motion } from "framer-motion"
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Scale, BookOpen, Building2, Users2, Gavel } from "lucide-react"
import { cn } from "@/lib/utils"

interface LegalListProps {
    searchQuery: string
    selectedCategories: string[]
    selectedBadges: string[]
}

const legalItems = [
    {
        id: 1,
        title: "Property Rights and Ownership",
        description:
            "Comprehensive guide to property ownership, transfer, and rights.",
        category: "property",
        badges: ["recent"],
        icon: Building2,
    },
    {
        id: 2,
        title: "Criminal Procedure Code",
        description:
            "Detailed overview of criminal procedures and regulations.",
        category: "criminal",
        badges: ["urgent"],
        icon: Gavel,
    },
    {
        id: 3,
        title: "Civil Rights Protection",
        description: "Understanding civil rights and legal protections.",
        category: "civil",
        badges: ["pending"],
        icon: Scale,
    },
    {
        id: 4,
        title: "Constitutional Amendments",
        description: "Latest constitutional amendments and their implications.",
        category: "constitutional",
        badges: ["recent", "urgent"],
        icon: BookOpen,
    },
    {
        id: 5,
        title: "Business Regulations",
        description: "Current business laws and regulatory requirements.",
        category: "business",
        badges: ["recent"],
        icon: Users2,
    },
]

const categoryColors = {
    property: "bg-blue-500",
    criminal: "bg-red-500",
    civil: "bg-green-500",
    constitutional: "bg-purple-500",
    business: "bg-orange-500",
}

export function LegalList({
    searchQuery,
    selectedCategories,
    selectedBadges,
}: LegalListProps) {
    const filteredItems = legalItems.filter((item) => {
        const matchesSearch = searchQuery
            ? item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(searchQuery.toLowerCase())
            : true

        const matchesCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(item.category)
        const matchesBadges =
            selectedBadges.length === 0 ||
            item.badges.some((badge) => selectedBadges.includes(badge))

        return matchesSearch && matchesCategory && matchesBadges
    })

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
        >
            {filteredItems.length === 0 ? (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                >
                    <p className="text-lg text-muted-foreground">
                        No results found. Try adjusting your search criteria.
                    </p>
                </motion.div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="group relative overflow-hidden hover:shadow-lg transition-shadow">
                                <div
                                    className={cn(
                                        "absolute top-0 left-0 w-1 h-full",
                                        categoryColors[
                                            item.category as keyof typeof categoryColors
                                        ]
                                    )}
                                />
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger>
                                                    <item.icon className="h-6 w-6 text-primary" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>
                                                        {item.category
                                                            .charAt(0)
                                                            .toUpperCase() +
                                                            item.category.slice(
                                                                1
                                                            )}{" "}
                                                        Law
                                                    </p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <div className="flex gap-2">
                                            {item.badges.map((badge) => (
                                                <Badge
                                                    key={badge}
                                                    variant={
                                                        badge === "urgent"
                                                            ? "destructive"
                                                            : "default"
                                                    }
                                                >
                                                    {badge
                                                        .charAt(0)
                                                        .toUpperCase() +
                                                        badge.slice(1)}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <CardTitle className="group-hover:text-primary transition-colors">
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {item.description}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            )}
        </motion.div>
    )
}
