import * as React from "react"
import { X } from "lucide-react"
import { cn } from "../../lib/utils"
import { Badge } from "./badge"

interface MultiSelectProps {
  options: string[]
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  className?: string
  required?: boolean
}

export function MultiSelect({
  options,
  value,
  onChange,
  placeholder = "Select options...",
  className,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = React.useState(false)
  const containerRef = React.useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleToggleOption = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((item) => item !== option))
    } else {
      onChange([...value, option])
    }
  }

  const handleRemove = (option: string, e: React.MouseEvent) => {
    e.stopPropagation()
    onChange(value.filter((item) => item !== option))
  }

  return (
    <div ref={containerRef} className={cn("relative w-full", className)}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex min-h-[36px] w-full flex-wrap gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-heading",
          "focus-within:ring-2 focus-within:ring-brandColor focus-within:border-transparent",
          "cursor-pointer transition-colors",
          isOpen && "ring-2 ring-brandColor border-transparent"
        )}
      >
        {value.length === 0 ? (
          <span className="text-gray-500 py-1">{placeholder}</span>
        ) : (
          value.map((item) => (
            <Badge
              key={item}
              variant="secondary"
              className="bg-brandColor/10 text-brandColor border-brandColor/20 hover:bg-brandColor/20 px-2 py-1 pr-1 flex items-center gap-1.5"
            >
              <span className="text-sm">{item}</span>
              <button
                type="button"
                onClick={(e) => handleRemove(item, e)}
                className="ml-1 rounded-full hover:bg-brandColor/20 p-0.5 transition-colors"
                onMouseDown={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                }}
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))
        )}
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-1 w-full rounded-lg border border-gray-200 bg-white shadow-md max-h-[300px] overflow-auto">
          {options.length === 0 ? (
            <div className="px-3 py-2 text-sm text-gray-500">No options available</div>
          ) : (
            options.map((option) => {
              const isSelected = value.includes(option)
              return (
                <div
                  key={option}
                  onClick={() => handleToggleOption(option)}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 text-sm cursor-pointer transition-colors",
                    "hover:bg-gray-100",
                    isSelected && "bg-brandColor/10"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-4 w-4 items-center justify-center rounded border-2 transition-colors",
                      isSelected
                        ? "border-brandColor bg-brandColor"
                        : "border-gray-300"
                    )}
                  >
                    {isSelected && (
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    )}
                  </div>
                  <span className={cn(isSelected && "font-medium text-brandColor")}>
                    {option}
                  </span>
                </div>
              )
            })
          )}
        </div>
      )}
    </div>
  )
}

