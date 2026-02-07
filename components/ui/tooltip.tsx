"use client"

import * as React from "react"
import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip"
import { cva, type VariantProps } from "cva"
import { cn } from "@/lib/utils"

function TooltipProvider(props: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return <TooltipPrimitive.Provider {...props} />
}

function TooltipRoot(props: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return <TooltipPrimitive.Root {...props} />
}

function TooltipTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return (
    <TooltipPrimitive.Trigger
      data-slot="tooltip-trigger"
      className={cn(className)}
      {...props}
    />
  )
}

const tooltipVariants = cva(
  [
    "font-medium rounded-md px-2.5 py-1 text-xs shadow-sm data-instant:transition-none",
    "origin-[var(--transform-origin)] transition-all duration-150",
    "data-[starting-style]:opacity-0 data-[starting-style]:scale-98",
    "data-[ending-style]:opacity-0 data-[ending-style]:scale-98",
  ],
  {
    variants: {
      variant: {
        default: "bg-popover text-popover-foreground border border-border",
        inverted: "bg-foreground text-background",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TooltipPopup({
  className,
  variant = "default",
  side = "top",
  align = "center",
  sideOffset = 6,
  alignOffset,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Popup> &
  VariantProps<typeof tooltipVariants> &
  Pick<React.ComponentProps<typeof TooltipPrimitive.Positioner>, "side" | "align" | "sideOffset" | "alignOffset">) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        data-slot="tooltip-positioner"
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-popup"
          className={cn(tooltipVariants({ variant }), className)}
          {...props}
        >
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

function TooltipArrow({
  className,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Arrow>) {
  return (
    <TooltipPrimitive.Arrow
      data-slot="tooltip-arrow"
      className={cn(
        "size-2.5 rotate-45 bg-primary",
        "data-[side=top]:-translate-y-px data-[side=bottom]:translate-y-px",
        "data-[side=left]:-translate-x-px data-[side=right]:translate-x-px",
        className
      )}
      {...props}
    />
  )
}

export const Tooltip = {
  Provider: TooltipProvider,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
  Popup: TooltipPopup,
}
