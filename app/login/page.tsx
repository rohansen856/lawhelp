"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, EyeOff, Loader2, Mail, Lock } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import axios from "axios"

const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
}

const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 100,
        },
    },
}

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [touched, setTouched] = useState({ email: false, password: false })
    const router = useRouter()
    const { toast } = useToast()

    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    const isPasswordValid = password.length >= 6

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!isEmailValid || !isPasswordValid) return

        setIsLoading(true)
        try {
            const response = await axios.post(
                "http://localhost:3001/api/users",
                {
                    email,
                    password,
                }
            )

            localStorage.setItem("email", email)

            toast({
                title: "Success!",
                description: "Welcome back!",
            })

            router.push("/legal-reference")
        } catch (error) {
            toast({
                title: "Error",
                description:
                    error instanceof Error
                        ? error.message
                        : "Something went wrong",
                variant: "destructive",
            })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-background to-secondary">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-grid-white/[0.02] bg-grid"
            />

            <motion.div
                className="relative w-full max-w-md mx-auto p-6"
                initial="hidden"
                animate="visible"
                variants={formVariants}
            >
                <div className="bg-card/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
                    <motion.div
                        className="text-center mb-8"
                        variants={inputVariants}
                    >
                        <h1 className="text-3xl font-bold text-foreground">
                            Welcome Back
                        </h1>
                        <p className="text-muted-foreground mt-2">
                            Sign in to your account
                        </p>
                    </motion.div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div variants={inputVariants}>
                            <Label htmlFor="email" className="text-foreground">
                                Email
                            </Label>
                            <div className="relative mt-1">
                                <Mail className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onBlur={() =>
                                        setTouched({ ...touched, email: true })
                                    }
                                    className={`pl-10 transition-all duration-200 ${
                                        touched.email && !isEmailValid
                                            ? "border-destructive"
                                            : ""
                                    }`}
                                    placeholder="you@example.com"
                                    aria-invalid={
                                        touched.email && !isEmailValid
                                    }
                                />
                                <AnimatePresence>
                                    {touched.email && !isEmailValid && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-destructive text-sm mt-1"
                                        >
                                            Please enter a valid email address
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        <motion.div variants={inputVariants}>
                            <Label
                                htmlFor="password"
                                className="text-foreground"
                            >
                                Password
                            </Label>
                            <div className="relative mt-1">
                                <Lock className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    onBlur={() =>
                                        setTouched({
                                            ...touched,
                                            password: true,
                                        })
                                    }
                                    className={`pl-10 pr-10 transition-all duration-200 ${
                                        touched.password && !isPasswordValid
                                            ? "border-destructive"
                                            : ""
                                    }`}
                                    placeholder="••••••••"
                                    aria-invalid={
                                        touched.password && !isPasswordValid
                                    }
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                                <AnimatePresence>
                                    {touched.password && !isPasswordValid && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-destructive text-sm mt-1"
                                        >
                                            Password must be at least 6
                                            characters
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>

                        <motion.div
                            variants={inputVariants}
                            className="flex items-center justify-between"
                        >
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-input bg-background text-primary focus:ring-2 focus:ring-primary"
                                />
                                <label
                                    htmlFor="remember"
                                    className="ml-2 text-sm text-muted-foreground"
                                >
                                    Remember me
                                </label>
                            </div>
                            <a
                                href="#"
                                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                            >
                                Forgot password?
                            </a>
                        </motion.div>

                        <motion.div variants={inputVariants}>
                            <Button
                                type="submit"
                                className="w-full"
                                disabled={
                                    isLoading ||
                                    !isEmailValid ||
                                    !isPasswordValid
                                }
                            >
                                {isLoading ? (
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    >
                                        <Loader2 className="h-5 w-5" />
                                    </motion.div>
                                ) : (
                                    "Sign in"
                                )}
                            </Button>
                        </motion.div>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}
