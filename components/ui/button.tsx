"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "cva"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "text-sm h-8 px-2 rounded-md font-medium",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/80",
        outline: "border border-border bg-background hover:bg-muted hover:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
        link: "text-foreground underline-offset-4 hover:underline"
      },
      size: {
        default: " ",
        icon: "size-9",
      },
      rounded: {
        default: "",
        full: "rounded-full",
      },
      shadow: {
        default: "",
        xs: "shadow-xs",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
      shadow: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  rounded = "default",
  shadow = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, rounded, shadow, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
