"use client"

import * as React from "react"
import { Meter as MeterPrimitive } from "@base-ui/react/meter"
import { cn } from "@/lib/utils"

function MeterRoot({
  className,
  label,
  indicatorClassName,
  ...props
}: React.ComponentProps<typeof MeterPrimitive.Root> & {
  label?: React.ReactNode
  indicatorClassName?: string
}) {
  return (
    <MeterPrimitive.Root
      data-slot="meter"
      className={cn("grid w-full grid-cols-2 gap-y-1.5", className)}
      {...props}
    >
      {label && (
        <MeterPrimitive.Label data-slot="meter-label" className="text-sm font-medium">
          {label}
        </MeterPrimitive.Label>
      )}
      <MeterPrimitive.Value
        data-slot="meter-value"
        className="col-start-2 text-right text-sm text-muted-foreground"
      />
      <MeterPrimitive.Track
        data-slot="meter-track"
        className="col-span-2 h-2 w-full overflow-hidden rounded-xs bg-secondary"
      >
        <MeterPrimitive.Indicator
          data-slot="meter-indicator"
          className={cn("h-full rounded-xs bg-primary transition-all duration-500", indicatorClassName)}
        />
      </MeterPrimitive.Track>
    </MeterPrimitive.Root>
  )
}

export const Meter = MeterRoot
