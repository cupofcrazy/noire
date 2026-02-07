"use client"

import * as React from "react"
import { Slider as SliderPrimitive } from "@base-ui/react/slider"
import { cn } from "@/lib/utils"

function Slider({
  className,
  defaultValue,
  thumbAlignment = "edge",
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const values = defaultValue ?? props.value ?? [0]
  const thumbs = Array.isArray(values) ? values : [values]

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      thumbAlignment={thumbAlignment}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        "data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <SliderPrimitive.Control
        data-slot="slider-control"
        className={cn(
          "flex w-full items-center",
          "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        )}
      >
        <SliderPrimitive.Track
          data-slot="slider-track"
          className={cn(
            "relative h-6 w-full grow overflow-hidden rounded-xs bg-muted",
            "data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5",
          )}
        >
          <SliderPrimitive.Indicator
            data-slot="slider-indicator"
            className="absolute rounded-xs bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
          />
        </SliderPrimitive.Track>
        {thumbs.map((_, i) => (
          <SliderPrimitive.Thumb
            key={i}
            index={i}
            data-slot="slider-thumb"
            className={cn(
              "w-4 h-7 rounded-xs border-1 border-border bg-background shadow-sm outline-none transition-colors",
              "focus-visible:ring-[3px] focus-visible:ring-ring/50",
            )}
          />
        ))}
      </SliderPrimitive.Control>
    </SliderPrimitive.Root>
  )
}

export { Slider }
