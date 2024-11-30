"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { Article, ArticleHeader } from "./article-header"
import { ImageMarquee } from "./image-marquee"
import { ContentRenderer } from "./content-renderer"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import axios from "axios"

export default function ArticlePage({ params }: { params: { id: string } }) {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

    const [mockArticle, setMockArticle] = useState<Article | null>(null)

    async function getArticleById() {
        try {
            const res = await axios.get<{ data: Article }>(
                `http://localhost:3001/api/articles/${params.id}`
            )
            setMockArticle(res.data.data)
            console.log(mockArticle)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getArticleById()
    }, [])

    if (!mockArticle) return null

    return (
        <div className="min-h-screen bg-background">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
                style={{ scaleX }}
            />
            <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

                <div className="container mx-auto px-4 py-12 relative">
                    <ArticleHeader article={mockArticle} />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-12"
                    >
                        <ImageMarquee images={mockArticle.images} />
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <ContentRenderer content={mockArticle.content} />
                    </div>
                </div>
            </div>
        </div>
    )
}
