"use client"

import * as React from "react"
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { Radio as RadioPrimitive } from "@base-ui/react/radio"
import { cva, type VariantProps } from "cva"

import { cn } from "@/lib/utils"

const radioVariants = cva(
  "peer inline-grid place-items-center shrink-0 rounded-full outline-none transition-colors",
  {
    variants: {
      size: {
        sm: "size-3.5",
        default: "size-4",
        lg: "size-5",
      },
      variant: {
        outline: [
          "border border-input bg-transparent",
          "hover:border-primary/70",
          "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-primary",
          "data-[checked]:border-primary",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        ],
        filled: [
          "border border-input bg-transparent",
          "hover:border-primary/70",
          "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-primary",
          "data-[checked]:bg-primary data-[checked]:border-primary",
          "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        ],
      },
      color: {
        primary: "",
        destructive: "",
      },
    },
    compoundVariants: [
      {
        variant: "outline",
        color: "destructive",
        className: [
          "hover:border-destructive/70",
          "focus-visible:ring-destructive/50 focus-visible:border-destructive",
          "data-[checked]:border-destructive",
        ],
      },
      {
        variant: "filled",
        color: "destructive",
        className: [
          "hover:border-destructive/70",
          "focus-visible:ring-destructive/50 focus-visible:border-destructive",
          "data-[checked]:bg-destructive data-[checked]:border-destructive",
        ],
      },
    ],
    defaultVariants: {
      size: "default",
      variant: "outline",
      color: "primary",
    },
  }
)

const indicatorVariants = cva("rounded-full transition-opacity duration-150 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0", {
  variants: {
    size: {
      sm: "size-1.5",
      default: "size-2",
      lg: "size-2.5",
    },
    variant: {
      outline: "bg-primary",
      filled: "bg-primary-foreground",
    },
    color: {
      primary: "",
      destructive: "",
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      color: "destructive",
      className: "bg-destructive",
    },
  ],
  defaultVariants: {
    size: "default",
    variant: "outline",
    color: "primary",
  },
})

type RadioContextValue = {
  size: VariantProps<typeof radioVariants>["size"]
  variant: VariantProps<typeof radioVariants>["variant"]
  color: VariantProps<typeof radioVariants>["color"]
}

const RadioContext = React.createContext<RadioContextValue>({
  size: "default",
  variant: "outline",
  color: "primary",
})

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive>) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    />
  )
}

function RadioRoot({
  className,
  size,
  variant,
  color,
  ...props
}: React.ComponentProps<typeof RadioPrimitive.Root> &
  VariantProps<typeof radioVariants>) {
  return (
    <RadioContext.Provider value={{ size, variant, color }}>
      <RadioPrimitive.Root
        data-slot="radio"
        className={cn(radioVariants({ size, variant, color, className }))}
        {...props}
      />
    </RadioContext.Provider>
  )
}

function RadioIndicator({
  className,
  ...props
}: React.ComponentProps<typeof RadioPrimitive.Indicator>) {
  const { size, variant, color } = React.useContext(RadioContext)
  return (
    <RadioPrimitive.Indicator
      data-slot="radio-indicator"
      className={cn(indicatorVariants({ size, variant, color, className }))}
      {...props}
    />
  )
}

export const Radio = {
  Group: RadioGroup,
  Root: RadioRoot,
  Indicator: RadioIndicator,
}

export { radioVariants, indicatorVariants }
