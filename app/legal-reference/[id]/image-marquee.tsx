"use client"

import { motion, useScroll, useTransform, useAnimation } from "framer-motion"
import { useEffect } from "react"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface ImageMarqueeProps {
    images: Array<{ url: string; alt: string }>
}

export function ImageMarquee({ images }: ImageMarqueeProps) {
    const controls = useAnimation()
    const { scrollYProgress } = useScroll()
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])

    useEffect(() => {
        controls.start({
            x: ["0%", "-50%"],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                },
            },
        })
    }, [controls])

    images = [
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
    ]

    return (
        <div className="relative w-full overflow-hidden py-12">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
            <motion.div
                style={{ y }}
                className="relative w-full h-full bg-gradient-to-b from-primary/5 to-primary/10 backdrop-blur-xl"
            >
                <motion.div
                    animate={controls}
                    className="flex gap-6 min-w-max py-6"
                >
                    {[...images, ...images, ...images].map((image, index) => (
                        <motion.div
                            key={`${image.url}-${index}`}
                            className="w-[400px] rounded-xl overflow-hidden shadow-lg"
                            whileHover={{
                                scale: 1.05,
                                y: -10,
                                transition: { duration: 0.2 },
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <AspectRatio ratio={16 / 9}>
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 hover:scale-110"
                                />
                            </AspectRatio>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    )
}
