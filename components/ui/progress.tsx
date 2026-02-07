"use client"

import * as React from "react"
import { Progress as ProgressPrimitive } from "@base-ui/react/progress"
import { cn } from "@/lib/utils"

function ProgressRoot({
  className,
  label,
  indicatorClassName,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  label?: React.ReactNode
  indicatorClassName?: string
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn("grid w-full grid-cols-2 gap-y-1.5", className)}
      {...props}
    >
      {label && (
        <ProgressPrimitive.Label data-slot="progress-label" className="text-sm font-medium">
          {label}
        </ProgressPrimitive.Label>
      )}
      <ProgressPrimitive.Value
        data-slot="progress-value"
        className="col-start-2 text-right text-sm text-muted-foreground"
      />
      <ProgressPrimitive.Track
        data-slot="progress-track"
        className="col-span-2 h-2 w-full overflow-hidden rounded-xs bg-secondary"
      >
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className={cn("h-full rounded-xs bg-primary transition-all duration-500", indicatorClassName)}
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
}

export const Progress = ProgressRoot
