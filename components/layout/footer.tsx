"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Scale } from "lucide-react"
import { Button } from "@/components/ui/button"

const footerLinks = {
    company: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "/team" },
        { name: "Careers", href: "/careers" },
        { name: "Login", href: "/login" },
    ],
    services: [
        { name: "Corporate Law", href: "/services/corporate" },
        { name: "Civil Litigation", href: "/services/litigation" },
        { name: "Contract Law", href: "/services/contract" },
        { name: "Employment Law", href: "/services/employment" },
    ],
    resources: [
        { name: "Blog", href: "/blog" },
        { name: "News", href: "/news" },
        { name: "FAQs", href: "/faqs" },
        { name: "Legal Resources", href: "/resources" },
    ],
}

export function Footer() {
    return (
        <footer className="bg-background border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <Link href="/" className="flex items-center space-x-2">
                            <Scale className="h-8 w-8 text-primary" />
                            <span className="font-bold text-2xl">LawHelp</span>
                        </Link>
                        <p className="text-muted-foreground">
                            Expert legal solutions for complex challenges.
                            Protecting your rights and interests since 1998.
                        </p>
                    </motion.div>

                    {Object.entries(footerLinks).map(
                        ([category, links], index) => (
                            <motion.div
                                key={category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="space-y-4"
                            >
                                <h3 className="font-semibold text-lg capitalize">
                                    {category}
                                </h3>
                                <ul className="space-y-2">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="text-muted-foreground hover:text-primary transition-colors"
                                            >
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        )
                    )}
                </div>

                <div className="mt-12 pt-8 border-t">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-muted-foreground text-sm">
                            © {new Date().getFullYear()} LawHelp. All rights
                            reserved.
                        </p>
                        <div className="flex space-x-4">
                            <Button variant="ghost" size="sm">
                                Privacy Policy
                            </Button>
                            <Button variant="ghost" size="sm">
                                Terms of Service
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
