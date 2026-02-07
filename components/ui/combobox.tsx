"use client"

import * as React from "react"
import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox"
import { IconChevronBottom, IconCheckmark2 } from "central-icons"

import { cn } from "@/lib/utils"
import { inputVariants } from "@/components/ui/input"

function ComboboxRoot<Value, Multiple extends boolean | undefined = false>(
  props: React.ComponentProps<typeof ComboboxPrimitive.Root<Value, Multiple>>
) {
  return <ComboboxPrimitive.Root data-slot="combobox" {...props} />
}

function ComboboxValue({
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Value>) {
  return (
    <ComboboxPrimitive.Value
      data-slot="combobox-value"
      {...props}
    />
  )
}

function ComboboxIcon({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Icon>) {
  return (
    <ComboboxPrimitive.Icon
      data-slot="combobox-icon"
      className={cn("ml-2 shrink-0 text-muted-foreground", className)}
      {...props}
    >
      {children ?? <IconChevronBottom className="size-4" />}
    </ComboboxPrimitive.Icon>
  )
}

function ComboboxInput({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Input>) {
  return (
    <ComboboxPrimitive.Input
      data-slot="combobox-input"
      className={cn(inputVariants({ variant: "border" }), "pr-8", className)}
      {...props}
    />
  )
}

function ComboboxTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Trigger>) {
  return (
    <ComboboxPrimitive.Trigger
      data-slot="combobox-trigger"
      className={cn(
        "absolute right-0 top-0 flex h-full items-center justify-center px-2 text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {children ?? (
        <IconChevronBottom className="size-4 transition-transform duration-200 [[data-popup-open]_&]:rotate-180" />
      )}
    </ComboboxPrimitive.Trigger>
  )
}

function ComboboxClear({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Clear>) {
  return (
    <ComboboxPrimitive.Clear
      data-slot="combobox-clear"
      className={cn(
        "absolute right-6 top-0 flex h-full items-center justify-center px-1 text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {children ?? (
        <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )}
    </ComboboxPrimitive.Clear>
  )
}

function ComboboxPopup({
  className,
  side = "bottom",
  align = "start",
  sideOffset = 4,
  alignOffset,
  anchor,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Popup> &
  Pick<React.ComponentProps<typeof ComboboxPrimitive.Positioner>, "side" | "align" | "sideOffset" | "alignOffset" | "anchor">) {
  return (
    <ComboboxPrimitive.Portal>
      <ComboboxPrimitive.Positioner
        data-slot="combobox-positioner"
        className="outline-none"
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        anchor={anchor}
      >
        <ComboboxPrimitive.Popup
          data-slot="combobox-popup"
          className={cn(
            "w-(--anchor-width) max-w-(--available-width) rounded-md border border-border bg-popover text-popover-foreground shadow-md",
            "transition-[transform,scale,opacity] duration-150",
            "data-[starting-style]:opacity-0 data-[starting-style]:scale-95",
            "data-[ending-style]:opacity-0 data-[ending-style]:scale-95",
            "origin-[var(--transform-origin)]",
            className
          )}
          {...props}
        >
          {children}
        </ComboboxPrimitive.Popup>
      </ComboboxPrimitive.Positioner>
    </ComboboxPrimitive.Portal>
  )
}

function ComboboxList({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.List>) {
  return (
    <ComboboxPrimitive.List
      data-slot="combobox-list"
      className={cn(
        "outline-0 overflow-y-auto scroll-py-1 py-1 overscroll-contain max-h-[min(10rem,var(--available-height))] data-[empty]:p-0",
        className
      )}
      {...props}
    />
  )
}

function ComboboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Item>) {
  return (
    <ComboboxPrimitive.Item
      data-slot="combobox-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-7.5 pr-3 text-sm outline-none",
        "data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:-z-1 data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-accent",
        "data-[highlighted]:relative data-[highlighted]:z-0",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <ComboboxPrimitive.ItemIndicator
        data-slot="combobox-item-indicator"
        className="absolute left-2.5 flex size-4 items-center justify-center"
      >
        <IconCheckmark2 className="size-3" />
      </ComboboxPrimitive.ItemIndicator>
      {children}
    </ComboboxPrimitive.Item>
  )
}

function ComboboxEmpty({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Empty>) {
  return (
    <ComboboxPrimitive.Empty
      data-slot="combobox-empty"
      className={cn("px-2 py-4 text-center text-sm text-muted-foreground empty:m-0 empty:p-0", className)}
      {...props}
    >
      {children ?? "No results found."}
    </ComboboxPrimitive.Empty>
  )
}

function ComboboxGroup(props: React.ComponentProps<typeof ComboboxPrimitive.Group>) {
  return (
    <ComboboxPrimitive.Group
      data-slot="combobox-group"
      className="block"
      {...props}
    />
  )
}

function ComboboxGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.GroupLabel>) {
  return (
    <ComboboxPrimitive.GroupLabel
      data-slot="combobox-group-label"
      className={cn(
        "sticky top-0 z-[1] mb-0 mr-2 mt-0 ml-0 w-full bg-popover px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider",
        className
      )}
      {...props}
    />
  )
}

function ComboboxCollection(props: React.ComponentProps<typeof ComboboxPrimitive.Collection>) {
  return <ComboboxPrimitive.Collection data-slot="combobox-collection" {...props} />
}

function ComboboxChips({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Chips>) {
  return (
    <ComboboxPrimitive.Chips
      data-slot="combobox-chips"
      className={cn("flex flex-wrap gap-1", className)}
      {...props}
    />
  )
}

function ComboboxChip({
  className,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.Chip>) {
  return (
    <ComboboxPrimitive.Chip
      data-slot="combobox-chip"
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-border bg-muted px-1.5 py-0.5 text-xs",
        className
      )}
      {...props}
    />
  )
}

function ComboboxChipRemove({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ComboboxPrimitive.ChipRemove>) {
  return (
    <ComboboxPrimitive.ChipRemove
      data-slot="combobox-chip-remove"
      className={cn(
        "inline-flex items-center justify-center rounded-sm text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {children ?? (
        <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      )}
    </ComboboxPrimitive.ChipRemove>
  )
}

export const Combobox = {
  Root: ComboboxRoot,
  Value: ComboboxValue,
  Icon: ComboboxIcon,
  Input: ComboboxInput,
  Trigger: ComboboxTrigger,
  Clear: ComboboxClear,
  Popup: ComboboxPopup,
  List: ComboboxList,
  Item: ComboboxItem,
  Empty: ComboboxEmpty,
  Group: ComboboxGroup,
  GroupLabel: ComboboxGroupLabel,
  Collection: ComboboxCollection,
  Chips: ComboboxChips,
  Chip: ComboboxChip,
  ChipRemove: ComboboxChipRemove,
}
