"use client"

import { useEffect } from "react"
import ArticleForm from "./article-form"

export default function Home() {
    useEffect(() => {
        // Set initial dark mode
        document.documentElement.classList.add("dark")
    }, [])

    return (
        <div className="min-h-screen bg-background text-primary transition-colors duration-300 p-4">
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Article Submission Form
                </h1>
                <ArticleForm />
            </div>
        </div>
    )
}
