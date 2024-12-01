"use client"

import { Navbar } from "@/components/layout/navbar"
import { HeroSection } from "./hero-section"
import { SectionCard } from "./section-card"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"

export default function IPC() {
    const [ipc, setIpc] = useState<any[]>([])

    async function getIpc() {
        try {
            const data = await axios.get("http://localhost:3001/api/ipc")
            console.log(data.data.data[0])
            setIpc([
                ...ipc,
                ...data.data.data[0],
                {
                    id: "1",
                    number: "302",
                    title: "Punishment for murder",
                    description:
                        "Whoever commits murder shall be punished with death, or imprisonment for life, and shall also be liable to fine.",
                    punishment: "Death or imprisonment for life, and fine",
                    relatedSections: "299, 300, 301",
                },
                {
                    id: "2",
                    number: "307",
                    title: "Attempt to murder",
                    description:
                        "Whoever does any act with such intention or knowledge, and under such circumstances that, if he by that act caused death...",
                    punishment: "Imprisonment up to 10 years and fine",
                    relatedSections: "302, 308",
                },
                {
                    id: "3",
                    number: "376",
                    title: "Punishment for rape",
                    description:
                        "Whoever commits rape shall be punished with rigorous imprisonment of either description for a term which shall not be less than ten years...",
                    punishment:
                        "Rigorous imprisonment not less than 10 years, may extend to life imprisonment, and fine",
                    relatedSections: "375, 377",
                },
            ])
        } catch (error) {}
    }
    useEffect(() => {
        getIpc()
    }, [])
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <HeroSection />

            <section className="container mx-auto px-4 py-16 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
                <div className="relative">
                    <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
                        Browse our articles
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                        {ipc.map((section) => (
                            <Link href={`/ipc/${section.id}`} key={section.id}>
                                <SectionCard section={section} />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}
