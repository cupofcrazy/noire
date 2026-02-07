import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"
import { cva, type VariantProps } from "cva"

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "text-sm h-9 w-full min-w-0 border bg-transparent px-2.5 py-1 transition-[color,box-shadow] file:inline-flex file:border-0 file:bg-transparent file:h-7 file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 focus-visible:border-primary/70 aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50",
  {
    variants: {
      variant: {
        border:
          "border border-input dark:bg-input/30 focus-visible:ring-primary",
        accent:
          "border-0 bg-accent dark:bg-accent focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-accent dark:focus-visible:bg-accent/50",
        ghost:
          "border-0 bg-transparent focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-muted dark:focus-visible:bg-muted/30",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full px-4",
      },
    },
    defaultVariants: {
      variant: "border",
      rounded: "default",
    },
  }
)

function Input({
  className,
  type,
  variant,
  rounded,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(inputVariants({ variant, rounded, className }))}
      {...props}
    />
  )
}

function InputGroup({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-group"
      className={cn(
        "relative flex items-center [&>input]:w-full [&_[data-slot=input-icon]:first-child~input]:pl-9 [&_[data-slot=input-icon]:last-child]:right-0 [&:has([data-slot=input-icon]:last-child)>input]:pr-9",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function InputIcon({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-icon"
      className={cn(
        "pointer-events-none absolute inset-y-0 flex w-9 items-center justify-center text-muted-foreground/80",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Input, InputGroup, InputIcon, inputVariants }
