"use client"

import * as React from "react"
import { Fieldset as FieldsetPrimitive } from "@base-ui/react/fieldset"
import { cn } from "@/lib/utils"

function FieldsetRoot({
  className,
  ...props
}: React.ComponentProps<typeof FieldsetPrimitive.Root>) {
  return (
    <FieldsetPrimitive.Root
      data-slot="fieldset"
      className={cn("flex flex-col gap-4 border-none p-0", className)}
      {...props}
    />
  )
}

function FieldsetLegend({
  className,
  ...props
}: React.ComponentProps<typeof FieldsetPrimitive.Legend>) {
  return (
    <FieldsetPrimitive.Legend
      data-slot="fieldset-legend"
      className={cn("text-base font-semibold leading-none", className)}
      {...props}
    />
  )
}

export const Fieldset = {
  Root: FieldsetRoot,
  Legend: FieldsetLegend,
}
