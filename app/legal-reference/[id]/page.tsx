"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import { Article, ArticleHeader } from "./article-header"
import { ImageMarquee } from "./image-marquee"
import { ContentRenderer } from "./content-renderer"
import { Badge } from "@/components/ui/badge"

const mockArticle = {
    id: "1",
    title: "Understanding Section 302 IPC: A Comprehensive Analysis",
    shortDescription:
        "An in-depth look at the provisions, interpretations, and implications of Section 302 of the Indian Penal Code dealing with murder.",
    content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, corrupti esse doloribus fuga eligendi illum libero ratione voluptate nesciunt eveniet rerum impedit non est harum nulla error, molestiae sapiente minima sint odit mollitia id corporis recusandae velit? Necessitatibus rerum cum eveniet fuga id tenetur nesciunt, pariatur facere a nobis. Aut rerum quisquam vitae iure corrupti accusantium fuga ullam ratione natus cumque, vel exercitationem consectetur dolorem quo esse deleniti magni voluptas. Corporis sequi aut doloribus. Eligendi necessitatibus ut, animi veniam expedita quo voluptate asperiores optio placeat recusandae facilis aspernatur consectetur fugit, nisi aut facere minima rem molestiae officiis doloribus sapiente! Iusto ad ab voluptatum culpa tempora voluptate eos vero sint perspiciatis magnam, inventore necessitatibus asperiores repellat, voluptatibus eum provident, minus debitis in hic cupiditate incidunt delectus beatae accusamus numquam. Corrupti facilis minima natus ipsum, esse hic officia quia nihil aut tempora fugiat quis odit, doloribus ipsam, eaque in aperiam quae possimus assumenda eligendi velit corporis. Laudantium maiores voluptas, et corporis qui quaerat sunt illum, sapiente porro reiciendis quisquam? Delectus facilis, placeat maxime harum quo earum quae autem necessitatibus tempore id ullam quam dolore fuga minus similique animi voluptates nesciunt maiores beatae alias doloremque laudantium? Modi pariatur architecto dignissimos facere ratione accusamus!",
    author: {
        name: "Adv. Rajesh Kumar",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        role: "Senior Criminal Lawyer",
    },
    publishedAt: "2024-02-20",
    readingTime: "8 min read",
    categories: ["Criminal Law", "IPC", "Legal Analysis"],
    images: [
        {
            url: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800",
            alt: "Law books and gavel",
        },
        {
            url: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=800",
            alt: "Courthouse",
        },
        {
            url: "https://images.unsplash.com/photo-1593115057322-e94b77572f20?w=800",
            alt: "Legal documents",
        },
    ],
    tags: ["Murder", "Criminal Justice", "Supreme Court", "Case Law"],
}

export default function ArticlePage() {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    })

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
