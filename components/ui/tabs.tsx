"use client"

import * as React from "react"
import { Tabs as TabsPrimitive } from "@base-ui/react/tabs"
import { type VariantProps, cva } from "cva"
import { cn } from "@/lib/utils"

function TabsRoot({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "relative flex items-center gap-1 border-b border-border",
        "data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-stretch data-[orientation=vertical]:border-b-0 data-[orientation=vertical]:border-r",
        className
      )}
      {...props}
    />
  )
}

function TabsTab({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Tab>) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-tab"
      className={cn(
        "inline-flex cursor-pointer items-center justify-center px-3 py-1.5 text-sm font-medium text-muted-foreground outline-none transition-colors",
        "hover:text-foreground",
        "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:rounded-sm",
        "data-[active]:text-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function TabsPanel({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Panel>) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-panel"
      className={cn(
        "mt-1 text-sm outline-none",
        "focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:rounded-sm",
        className
      )}
      {...props}
    />
  )
}

const tabsIndicatorVariants = cva(
  "absolute w-(--active-tab-width) translate-x-(--active-tab-left) transition-all duration-350 ease-out-expo",
  {
    variants: {
      variant: {
        underline: [
          "bottom-0 h-0.5 bg-primary",
          "data-[orientation=vertical]:bottom-auto data-[orientation=vertical]:right-0 data-[orientation=vertical]:h-(--active-tab-height) data-[orientation=vertical]:w-0.5 data-[orientation=vertical]:translate-x-0 data-[orientation=vertical]:translate-y-(--active-tab-top)",
        ],
        pill: "-z-1 h-(--active-tab-height) translate-y-(--active-tab-top) rounded-md bg-muted",
      },
    },
    defaultVariants: {
      variant: "underline",
    },
  }
)

function TabsIndicator({
  className,
  variant = "underline",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Indicator> &
  VariantProps<typeof tabsIndicatorVariants>) {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      className={cn(tabsIndicatorVariants({ variant }), className)}
      {...props}
    />
  )
}

export { tabsIndicatorVariants }

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Tab: TabsTab,
  Panel: TabsPanel,
  Indicator: TabsIndicator,
}
