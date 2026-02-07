"use client"

import * as React from "react"
import { NumberField as NumberFieldPrimitive } from "@base-ui/react/number-field"
import { IconCursor, IconMinusSmall, IconPlusSmall } from "central-icons"
import { cn } from "@/lib/utils"

function NumberFieldRoot({
  className,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.Root>) {
  return (
    <NumberFieldPrimitive.Root
      data-slot="number-field"
      className={cn("flex flex-col gap-2 min-w-32", className)}
      {...props}
    />
  )
}

function NumberFieldScrubArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NumberFieldPrimitive.ScrubArea>) {
  return (
    <NumberFieldPrimitive.ScrubArea
      data-slot="number-field-scrub-area"
      className={cn("cursor-ew-resize", className)}
      {...props}
    >
      {children}
      <NumberFieldPrimitive.ScrubAreaCursor data-slot="number-field-scrub-area-cursor">
        <IconCursor className="size-3.5" />
      </NumberFieldPrimitive.ScrubAreaCursor>
    </NumberFieldPrimitive.ScrubArea>
  )
}

function NumberFieldGroup({
  className,
  ...props
}: Omit<React.ComponentProps<typeof NumberFieldPrimitive.Group>, "children">) {
  return (
    <NumberFieldPrimitive.Group
      data-slot="number-field-group"
      className={cn(
        "flex h-9 items-center rounded-md border border-input",
        className
      )}
      {...props}
    >
      <NumberFieldPrimitive.Decrement
        data-slot="number-field-decrement"
        className="overflow-hidden flex size-9 shrink-0 items-center justify-center border-r border-input text-muted-foreground outline-none hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
      >
        <IconMinusSmall className="size-3.5" />
      </NumberFieldPrimitive.Decrement>
      <NumberFieldPrimitive.Input
        data-slot="number-field-input"
        className="h-full w-full min-w-0 bg-transparent px-3 text-center text-sm outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-primary"
      />
      <NumberFieldPrimitive.Increment
        data-slot="number-field-increment"
        className="overflow-hidden flex size-9 shrink-0 items-center justify-center border-l border-input text-muted-foreground outline-none hover:text-accent-foreground disabled:pointer-events-none disabled:opacity-50"
      >
        <IconPlusSmall className="size-3.5" />
      </NumberFieldPrimitive.Increment>
    </NumberFieldPrimitive.Group>
  )
}

export const NumberField = {
  Root: NumberFieldRoot,
  ScrubArea: NumberFieldScrubArea,
  Group: NumberFieldGroup,
}
