"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Scale } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { AnimatedText } from "@/components/ui/animated-text"
import { cn } from "@/lib/utils"

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Practice Areas", href: "/practice-areas" },
        { name: "Our Team", href: "/team" },
        { name: "Resources", href: "/resources" },
        { name: "Login", href: "/login" },
    ]

    return (
        <div className="w-full flex justify-center">
            <FloatingNavbar>
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Scale className="h-8 w-8 text-primary" />
                        <AnimatedText
                            text="LawHelp"
                            className="font-bold text-2xl inline-block"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-foreground hover:text-primary transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <ThemeToggle />
                        <Link
                            href={"/legal-reference/new"}
                            className={cn(buttonVariants())}
                        >
                            New Article
                        </Link>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden mt-4"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-sm rounded-lg shadow-lg border">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="px-3 py-2">
                                <Link
                                    href={"/legal-reference/new"}
                                    className={cn(
                                        buttonVariants({ className: "w-full" })
                                    )}
                                >
                                    New Article
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </FloatingNavbar>
        </div>
    )
}
