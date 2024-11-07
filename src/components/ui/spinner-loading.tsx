'use client'

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface SpinnerLoadingEffectProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: 'sm' | 'default' | 'lg'
    variant?: 'default' | 'secondary'
    speed?: 'slow' | 'normal' | 'fast'
}

export default function SpinnerLoadingEffect({
    size = 'default',
    variant = 'default',
    speed = 'normal',
    className,
    ...props
}: SpinnerLoadingEffectProps) {
    const sizeClasses = {
        sm: 'h-4 w-4',
        default: 'h-8 w-8',
        lg: 'h-12 w-12'
    }

    const variantClasses = {
        default: 'text-primary',
        secondary: 'text-secondary'
    }

    const speedDuration = {
        slow: 2,
        normal: 1.5,
        fast: 1
    }

    return (
        <div
            className={cn(
                "flex items-center justify-center",
                className
            )}
            {...props}
        >
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: speedDuration[speed],
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                <Loader2 className={cn(
                    "animate-spin",
                    sizeClasses[size],
                    variantClasses[variant]
                )} />
            </motion.div>
        </div>
    )
}