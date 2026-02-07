"use client"

import * as React from "react"
import { Select as SelectPrimitive } from "@base-ui/react/select"
import { IconChevronBottom, IconCheckmark2 } from "central-icons"
import { cn } from "@/lib/utils"

function SelectRoot(props: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger>) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs outline-none transition-colors",
        "placeholder:text-muted-foreground",
        "focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        "data-[popup-open]:ring-[3px] data-[popup-open]:ring-ring/50",
        className
      )}
      {...props}
    >
      {children}
    </SelectPrimitive.Trigger>
  )
}

function SelectValue({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      className={cn("data-[placeholder]:text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectIcon({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Icon>) {
  return (
    <SelectPrimitive.Icon
      data-slot="select-icon"
      className={cn("ml-2 shrink-0 text-muted-foreground", className)}
      {...props}
    >
      {children ?? <IconChevronBottom className="size-4" />}
    </SelectPrimitive.Icon>
  )
}

function SelectPopup({
  className,
  side = "bottom",
  align = "start",
  sideOffset = 4,
  alignOffset,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Popup> &
  Pick<React.ComponentProps<typeof SelectPrimitive.Positioner>, "side" | "align" | "sideOffset" | "alignOffset">) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Positioner
        data-slot="select-positioner"
        className="outline-none"
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
      >
        <SelectPrimitive.Popup
          data-slot="select-popup"
          className={cn(
            "min-w-[var(--anchor-width)] overflow-hidden rounded-lg border border-border bg-popover p-1 shadow-lg outline-none",
            "origin-[var(--transform-origin)] transition-all duration-150",
            // "data-[starting-style]:opacity-0 data-[starting-style]:scale-98",
            "data-[ending-style]:opacity-0 data-[ending-style]:scale-98",
            className
          )}
          {...props}
        >
          {children}
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-6 pr-2 text-sm outline-none",
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <SelectPrimitive.ItemIndicator
        data-slot="select-item-indicator"
        className="absolute left-1.5 flex size-4 items-center justify-center"
      >
        <IconCheckmark2 className="size-3" />
      </SelectPrimitive.ItemIndicator>
      <SelectPrimitive.ItemText />
      {children}
    </SelectPrimitive.Item>
  )
}

function SelectGroup({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      className={cn(className)}
      {...props}
    />
  )
}

function SelectGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.GroupLabel>) {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-group-label"
      className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function SelectScrollUpArrow({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-arrow"
      className={cn("flex items-center justify-center py-1", className)}
      {...props}
    >
      <IconChevronBottom className="size-3.5 rotate-180 text-muted-foreground" />
    </SelectPrimitive.ScrollUpArrow>
  )
}

function SelectScrollDownArrow({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-arrow"
      className={cn("flex items-center justify-center py-1", className)}
      {...props}
    >
      <IconChevronBottom className="size-3.5 text-muted-foreground" />
    </SelectPrimitive.ScrollDownArrow>
  )
}

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Value: SelectValue,
  Icon: SelectIcon,
  Popup: SelectPopup,
  Item: SelectItem,
  Group: SelectGroup,
  GroupLabel: SelectGroupLabel,
  Separator: SelectSeparator,
  ScrollUpArrow: SelectScrollUpArrow,
  ScrollDownArrow: SelectScrollDownArrow,
}
