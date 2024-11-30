"use client"

import { useRouter } from "next/navigation"
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
import {
    Scale,
    BookOpen,
    Building2,
    Users2,
    Gavel,
    Delete,
    Trash,
} from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import axios from "axios"
import { useEffect, useState } from "react"
interface LegalListProps {
    searchQuery: string
    selectedCategories: string[]
    selectedBadges: string[]
}

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
    const [legalItems, setLegalItems] = useState<any[]>([])
    const router = useRouter()
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
            item.badges.some((badge: string) => selectedBadges.includes(badge))

        return matchesSearch && matchesCategory && matchesBadges
    })

    async function getAllArticles() {
        try {
            const res = await axios.get("http://localhost:3001/api/legal-items")
            console.log(res)
            setLegalItems(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllArticles()
    }, [])

    async function deleteArticle(id: string) {
        try {
            await axios.delete(`http://localhost:3001/api/legal-items/${id}`)
            alert("Article deleted successfully!")
        } catch (error) {
            console.log(error)
        } finally {
            router.refresh()
        }
    }

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
                                        <div className="flex gap-2">
                                            {item.badges.map(
                                                (badge: string) => (
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
                                                )
                                            )}
                                        </div>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger
                                                    onClick={() =>
                                                        deleteArticle(item.id)
                                                    }
                                                >
                                                    <Trash className="h-6 w-6 text-destructive" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Delete Article</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                    <Link
                                        href={`/legal-reference/${item.id}`}
                                        key={item.id}
                                    >
                                        <CardTitle className="group-hover:text-primary transition-colors">
                                            {item.title}
                                        </CardTitle>
                                    </Link>
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
