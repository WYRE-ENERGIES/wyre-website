import type React from "react"
import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { cn } from "../../lib/utils"


interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)} {...props}>
      {children}
    </div>
  )
}

const BentoCard = ({ name, className, background, Icon, description, ...props }: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative w-full col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "rounded-lg border-4 border-white bg-gradient-to-b from-[#EDF3FA]/80 via-white to-[#EDF3FA]/90",
      className,
    )}
    {...props}
  >
    <div className="w-full">{background}</div>
    <div className="p-4">
      <div className="pointer-events-none z-10 flex  flex-col gap-1 transition-all duration-300">
        {Icon && <Icon className="h-10 w-10 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />}
        <h3 className="text-lg font-semibold text-neutral-700">{name}</h3>
        <p className="max-w-lg text-sm text-neutral-400">{description}</p>
      </div>

      {/* <div
        className={cn(
          "lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
        )}
      >
        <Button variant="link" asChild size="sm" className="pointer-events-auto p-0">
          <div>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </div>
        </Button>
      </div> */}
    </div>
    {/* 
    <div
      className={cn(
        "hidden lg:flex pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="link" asChild size="sm" className="pointer-events-auto p-0">
        <div>
          {cta}
          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
        </div>
      </Button>
    </div> */}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03]" />
  </div>
)

export { BentoCard, BentoGrid }
