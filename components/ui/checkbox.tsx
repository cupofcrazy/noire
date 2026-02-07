"use client"

import * as React from "react"
import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox"

import { cn } from "@/lib/utils"
import { IconCheckmark2, IconMinusSmall } from "central-icons"

function CheckboxRoot({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer inline-grid place-items-center size-4 shrink-0 rounded-[4px] border border-input bg-transparent outline-none transition-colors",
        "hover:border-primary/70",
        "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-primary",
        "data-[checked]:bg-primary data-[checked]:border-primary data-[checked]:text-primary-foreground",
        "data-[indeterminate]:bg-primary data-[indeterminate]:border-primary data-[indeterminate]:text-primary-foreground",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function CheckboxIndicator({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Indicator>) {
  return (
    <CheckboxPrimitive.Indicator
      data-slot="checkbox-indicator"
      className={cn(
        "grid place-items-center text-current",
        "transition-opacity duration-150",
        "data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
        className
      )}
      {...props}
    >
      {children ?? (
        <>
          <IconCheckmark2 className="size-2.5 [[data-indeterminate]_&]:hidden" />
          <IconMinusSmall className="size-2.5 hidden [[data-indeterminate]_&]:block" />
        </>
      )}
    </CheckboxPrimitive.Indicator>
  )
}

export const Checkbox = {
  Root: CheckboxRoot,
  Indicator: CheckboxIndicator,
}
