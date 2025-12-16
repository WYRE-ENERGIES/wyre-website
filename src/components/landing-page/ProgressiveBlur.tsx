/* eslint-disable react-refresh/only-export-components */
import { cn } from "../../lib/utils"



export const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
}

export type ProgressiveBlurProps = {
  direction?: keyof typeof GRADIENT_ANGLES
  blurLayers?: number
  className?: string
  blurIntensity?: number
}

export function ProgressiveBlur({
  direction = "bottom",
  blurLayers = 8,
  className,
  blurIntensity = 0.25,
}: ProgressiveBlurProps) {
  const layers = Math.max(blurLayers, 2)

  return (
    <div className={cn("relative", className)}>
      {Array.from({ length: layers }).map((_, index) => {
        const angle = GRADIENT_ANGLES[direction]
        const opacity = (index + 1) / layers

        return (
          <div
            key={index}
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              background: `linear-gradient(${angle}deg, transparent 0%, rgba(255, 255, 255, ${opacity}) 50%, transparent 100%)`,
              backdropFilter: `blur(${index * blurIntensity}px)`,
              WebkitBackdropFilter: `blur(${index * blurIntensity}px)`,
            }}
          />
        )
      })}
    </div>
  )
}
