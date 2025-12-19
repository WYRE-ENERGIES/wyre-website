import type React from "react"
import { useState, useRef } from "react"
import { cn } from "../../lib/utils"

export type InfiniteSliderProps = {
  children: React.ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 16,
  speed = 1,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed,] = useState(speed)
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        ref={containerRef}
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
          animation: `scroll-${direction} ${30 / currentSpeed}s linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {/* First set of children */}
        {children}
        {/* Second set for seamless loop */}
        {children}
        {/* Third set to ensure no gaps */}
        {children}
      </div>
    </div>
  )
}
