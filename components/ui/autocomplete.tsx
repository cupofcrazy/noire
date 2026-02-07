"use client"

import * as React from "react"
import { Autocomplete as AutocompletePrimitive } from "@base-ui/react/autocomplete"
import { IconChevronBottom } from "central-icons"

import { cn } from "@/lib/utils"
import { inputVariants } from "@/components/ui/input"

function AutocompleteRoot(props: React.ComponentProps<typeof AutocompletePrimitive.Root>) {
  return <AutocompletePrimitive.Root data-slot="autocomplete" {...props} />
}

function AutocompleteValue({
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Value>) {
  return (
    <AutocompletePrimitive.Value
      data-slot="autocomplete-value"
      {...props}
    />
  )
}

function AutocompleteIcon({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Icon>) {
  return (
    <AutocompletePrimitive.Icon
      data-slot="autocomplete-icon"
      className={cn("ml-2 shrink-0 text-muted-foreground", className)}
      {...props}
    >
      {children ?? <IconChevronBottom className="size-4" />}
    </AutocompletePrimitive.Icon>
  )
}

function AutocompleteInput({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Input>) {
  return (
    <AutocompletePrimitive.Input
      data-slot="autocomplete-input"
      className={cn(inputVariants({ variant: "border" }), "pr-8", className)}
      {...props}
    />
  )
}

function AutocompleteTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Trigger>) {
  return (
    <AutocompletePrimitive.Trigger
      data-slot="autocomplete-trigger"
      className={cn(
        "absolute right-0 top-0 flex h-full items-center justify-center px-2 text-muted-foreground hover:text-foreground",
        className
      )}
      {...props}
    >
      {children ?? (
        <IconChevronBottom className="size-4 transition-transform duration-200 [[data-popup-open]_&]:rotate-180" />
      )}
    </AutocompletePrimitive.Trigger>
  )
}

function AutocompleteClear({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Clear>) {
  return (
    <AutocompletePrimitive.Clear
      data-slot="autocomplete-clear"
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
    </AutocompletePrimitive.Clear>
  )
}

function AutocompletePopup({
  className,
  side = "bottom",
  align = "start",
  sideOffset = 4,
  alignOffset,
  anchor,
  children,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Popup> &
  Pick<React.ComponentProps<typeof AutocompletePrimitive.Positioner>, "side" | "align" | "sideOffset" | "alignOffset" | "anchor">) {
  return (
    <AutocompletePrimitive.Portal>
      <AutocompletePrimitive.Positioner
        data-slot="autocomplete-positioner"
        className="outline-none"
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
        anchor={anchor}
      >
        <AutocompletePrimitive.Popup
          data-slot="autocomplete-popup"
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
        </AutocompletePrimitive.Popup>
      </AutocompletePrimitive.Positioner>
    </AutocompletePrimitive.Portal>
  )
}

function AutocompleteList({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.List>) {
  return (
    <AutocompletePrimitive.List
      data-slot="autocomplete-list"
      className={cn(
        "outline-0 overflow-y-auto scroll-py-1 py-1 overscroll-contain max-h-[min(10rem,var(--available-height))] data-[empty]:p-0",
        className
      )}
      {...props}
    />
  )
}

function AutocompleteItem({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Item>) {
  return (
    <AutocompletePrimitive.Item
      data-slot="autocomplete-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none",
        "data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:-z-1 data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-accent",
        "data-[highlighted]:before:opacity-100 data-[highlighted]:relative data-[highlighted]:z-0",
        className
      )}
      {...props}
    />
  )
}

function AutocompleteEmpty({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.Empty>) {
  return (
    <AutocompletePrimitive.Empty
      data-slot="autocomplete-empty"
      className={cn("px-2 py-4 text-center text-sm text-muted-foreground empty:m-0 empty:p-0", className)}
      {...props}
    >
      {children ?? "No results found."}
    </AutocompletePrimitive.Empty>
  )
}

function AutocompleteGroup(props: React.ComponentProps<typeof AutocompletePrimitive.Group>) {
  return <AutocompletePrimitive.Group className="block pb-2" data-slot="autocomplete-group" {...props} />
}

function AutocompleteGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof AutocompletePrimitive.GroupLabel>) {
  return (
    <AutocompletePrimitive.GroupLabel
      data-slot="autocomplete-group-label"
      className={cn("sticky top-0 z-[1] mb-0 mr-2 mt-0 ml-0 w-full bg-popover px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider", className)}
      {...props}
    />
  )
}

function AutocompleteCollection(props: React.ComponentProps<typeof AutocompletePrimitive.Collection>) {
  return <AutocompletePrimitive.Collection data-slot="autocomplete-collection" {...props} />
}

export const Autocomplete = {
  Root: AutocompleteRoot,
  Value: AutocompleteValue,
  Icon: AutocompleteIcon,
  Input: AutocompleteInput,
  Trigger: AutocompleteTrigger,
  Clear: AutocompleteClear,
  Popup: AutocompletePopup,
  List: AutocompleteList,
  Item: AutocompleteItem,
  Empty: AutocompleteEmpty,
  Group: AutocompleteGroup,
  GroupLabel: AutocompleteGroupLabel,
  Collection: AutocompleteCollection,
}
