"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"

interface AnimatedNumberProps {
  value: number
  className?: string
  decimals?: number
}

export function AnimatedNumber({ value, className, decimals = 2 }: AnimatedNumberProps) {
  const motionValue = useMotionValue(value)
  const rounded = useTransform(motionValue, (latest) =>
    latest.toFixed(decimals)
  )

  useEffect(() => {
    const controls = animate(motionValue, value, {
      duration: 0.6,
      ease: "easeOut",
    })
    return controls.stop
  }, [value, motionValue])

  return (
    <motion.span className={className}>
      {rounded}
    </motion.span>
  )
}
