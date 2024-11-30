"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface Article {
    id: string
    title: string
    short_description: string
    content: string
    author_name: string
    author_avatar: string
    author_role: string
    publishedAt: string
    readingTime: string
    categories: string[]
    images: {
        url: string
        alt: string
    }[]
    tags: string[]
}

interface ArticleHeaderProps {
    article: Article
}

export function ArticleHeader({ article }: ArticleHeaderProps) {
    return (
        <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
        >
            <motion.div
                className="flex flex-wrap gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                {article.categories.map((category) => (
                    <Badge
                        key={category}
                        variant="secondary"
                        className="bg-blue-700/20 border-blue-700 transition-colors"
                    >
                        {category}
                    </Badge>
                ))}
            </motion.div>

            <motion.h1
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                {article.title}
            </motion.h1>

            <motion.p
                className="text-xl text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
            >
                {article.short_description}
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-4 flex flex-wrap gap-2  mb-8"
            >
                {article.tags.map((tag) => (
                    <Badge
                        key={tag}
                        variant="outline"
                        className="bg-yellow-700/20 border-yellow-700 hover:bg-primary/10 transition-colors"
                    >
                        #{tag}
                    </Badge>
                ))}
            </motion.div>

            <motion.div
                className="flex items-center gap-6 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
            >
                <div className="flex items-center gap-2">
                    <Avatar className="h-10 w-10">
                        <AvatarImage
                            src={article.author_avatar}
                            alt={article.author_name}
                        />
                        <AvatarFallback>
                            {article.author_name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-medium text-foreground">
                            {article.author_name}
                        </p>
                        <p className="text-xs">{article.author_role}</p>
                    </div>
                </div>

                <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {article.publishedAt}
                </div>

                <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article.readingTime}
                </div>
            </motion.div>
        </motion.header>
    )
}
