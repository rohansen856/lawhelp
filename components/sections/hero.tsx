"use client"

import { motion } from "framer-motion"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Spotlight } from "@/components/ui/spotlight"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Hero() {
    return (
        <Spotlight>
            <div className="relative min-h-screen flex items-center">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="absolute inset-0 bg-black/50 dark:bg-black/70" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-white max-w-3xl mx-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                type: "spring",
                                stiffness: 100,
                            }}
                            className="mb-8 inline-block"
                        >
                            <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 border border-primary/20 text-primary-foreground">
                                Trusted by Fortune 500 Companies
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
                        >
                            Expert Legal Solutions for{" "}
                            <span className="text-primary">
                                Complex Challenges
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl mb-8 text-gray-300"
                        >
                            Navigate the complexities of law with confidence.
                            Our experienced team is here to protect your rights
                            and interests.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <Link
                                href={"/ipc"}
                                className={cn(
                                    buttonVariants({
                                        size: "lg",
                                        className:
                                            "text-lg group relative overflow-hidden",
                                    })
                                )}
                            >
                                <span className="relative z-10">
                                    All Section Details
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-primary-foreground opacity-0 group-hover:opacity-10 transition-opacity"
                                    initial={false}
                                    whileHover={{ scale: 1.5 }}
                                />
                                <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
                            </Link>
                            <Link
                                href={"/legal-reference"}
                                className={cn(
                                    buttonVariants({
                                        size: "lg",
                                        variant: "outline",
                                        className:
                                            "text-primary text-lg border-white/20 hover:bg-white/10",
                                    })
                                )}
                            >
                                Articles
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="mt-12 flex items-center justify-center space-x-8"
                        >
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 0.5, y: 0 }}
                                    transition={{ delay: 0.8 + i * 0.1 }}
                                    className="h-12 w-12 rounded-full bg-white/10"
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </Spotlight>
    )
}
