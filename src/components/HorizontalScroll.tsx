import React from "react";
import { cn } from "../lib/utils";

interface HorizontalScrollProps {
  className?: string;
  children: React.ReactNode;
  duration?: string; // e.g. "20s"
  gap?: string; // e.g. "1rem"
  repeat?: number;
}

export function HorizontalScroll({
  className,
  children,
  duration = "20s",
  gap = "1rem",
  repeat = 2,
}: HorizontalScrollProps) {
  return (
    <div
      className={cn(
        "flex overflow-hidden p-2 group",
        className
      )}
    >
      <div
        className="flex shrink-0 justify-around"
        style={{
          gap,
          animation: `scroll-horizontal ${duration} linear infinite`,
        }}
      >
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex shrink-0" style={{ gap }}>
              {children}
            </div>
          ))}
        {/* Duplicate for seamless loop */}
        {Array(repeat)
          .fill(0)
          .map((_, i) => (
            <div key={`duplicate-${i}`} className="flex shrink-0" style={{ gap }}>
              {children}
            </div>
          ))}
      </div>
    </div>
  );
}