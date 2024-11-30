"use client"
import { z } from "zod"

export const articleSchema = z.object({
    id: z.number().int().positive(),
    title: z
        .string()
        .min(1, "Title is required")
        .max(255, "Title must be 255 characters or less"),
    description: z.string().min(1, "Description is required"),
    category: z
        .string()
        .min(1, "Category is required")
        .max(50, "Category must be 50 characters or less"),
    badges: z.array(z.string()).min(1, "At least one badge is required"),
})

export type ArticleFormData = z.infer<typeof articleSchema>

import { useState } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Moon, Sun, Plus, Minus } from "lucide-react"
import axios from "axios"
import { useRouter } from "next/navigation"

export default function ArticleForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState<{
        type: "success" | "error"
        message: string
    } | null>(null)
    const [isDarkMode, setIsDarkMode] = useState(true)

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ArticleFormData>({
        resolver: zodResolver(articleSchema),
        defaultValues: {
            badges: ["recent"],
        },
    })

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle("dark")
    }
    const router = useRouter()
    const onSubmit = async (data: ArticleFormData) => {
        setIsSubmitting(true)
        setSubmitMessage(null)

        try {
            console.log(data)
            const res = await axios.post(
                "http://localhost:3001/api/legal-items",
                { ...data, icon: "icon" }
            )
            alert("Article added successfully!")
            router.push("/legal-reference")
        } catch (error) {
            setSubmitMessage({
                type: "error",
                message: "Failed to submit article. Please try again.",
            })
            console.log(error)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 max-w-2xl mx-auto"
        >
            <div className="flex justify-end mb-4">
                <Button onClick={toggleDarkMode} variant="outline" size="icon">
                    {isDarkMode ? (
                        <Sun className="h-[1.2rem] w-[1.2rem]" />
                    ) : (
                        <Moon className="h-[1.2rem] w-[1.2rem]" />
                    )}
                </Button>
            </div>

            <div>
                <Label htmlFor="id" className="text-primary">
                    ID
                </Label>
                <Input
                    id="id"
                    type="number"
                    {...register("id", { valueAsNumber: true })}
                    className="bg-background text-primary"
                />
                {errors.id && (
                    <p className="text-destructive">{errors.id.message}</p>
                )}
            </div>

            <div>
                <Label htmlFor="title" className="text-primary">
                    Title
                </Label>
                <Input
                    id="title"
                    {...register("title")}
                    className="bg-background text-primary"
                />
                {errors.title && (
                    <p className="text-destructive">{errors.title.message}</p>
                )}
            </div>

            <div>
                <Label htmlFor="description" className="text-primary">
                    Description
                </Label>
                <Textarea
                    id="description"
                    {...register("description")}
                    className="bg-background text-primary"
                />
                {errors.description && (
                    <p className="text-destructive">
                        {errors.description.message}
                    </p>
                )}
            </div>

            <div>
                <Label htmlFor="category" className="text-primary">
                    Category
                </Label>
                <Input
                    id="category"
                    {...register("category")}
                    className="bg-background text-primary"
                />
                {errors.category && (
                    <p className="text-destructive">
                        {errors.category.message}
                    </p>
                )}
            </div>

            {submitMessage && (
                <Alert
                    variant={
                        submitMessage.type === "success"
                            ? "default"
                            : "destructive"
                    }
                >
                    <AlertDescription>{submitMessage.message}</AlertDescription>
                </Alert>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Submitting..." : "Submit Article"}
            </Button>
        </form>
    )
}
