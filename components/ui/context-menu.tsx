"use client"

import * as React from "react"
import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu"
import { IconChevronRight } from "central-icons"
import { cn } from "@/lib/utils"

function ContextMenuRoot(props: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root {...props} />
}

function ContextMenuTrigger({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger
      data-slot="context-menu-trigger"
      className={cn(className)}
      {...props}
    />
  )
}

function ContextMenuPortal(props: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return <ContextMenuPrimitive.Portal {...props} />
}

function ContextMenuPositioner({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Positioner>) {
  return (
    <ContextMenuPrimitive.Positioner
      data-slot="context-menu-positioner"
      className={cn("outline-none", className)}
      {...props}
    />
  )
}

function ContextMenuPopup({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Popup>) {
  return (
    <ContextMenuPrimitive.Popup
      data-slot="context-menu-popup"
      className={cn(
        "min-w-48 rounded-lg border border-border bg-popover p-1 shadow-lg outline-none",
        "origin-[var(--transform-origin)] transition-all duration-150",
        // "data-[starting-style]:opacity-0 data-[starting-style]:scale-95",
        "data-[ending-style]:opacity-0 data-[ending-style]:scale-95",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item>) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      className={cn(
        "flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function ContextMenuGroup({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group
      data-slot="context-menu-group"
      className={cn(className)}
      {...props}
    />
  )
}

function ContextMenuGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.GroupLabel>) {
  return (
    <ContextMenuPrimitive.GroupLabel
      data-slot="context-menu-group-label"
      className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", className)}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-6 pr-2 text-sm outline-none",
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuCheckboxItemIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItemIndicator>) {
  return (
    <ContextMenuPrimitive.CheckboxItemIndicator
      data-slot="context-menu-checkbox-item-indicator"
      className={cn("absolute left-2 flex size-4 items-center justify-center", className)}
      {...props}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M8.5 2.5L4 7.5L1.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </ContextMenuPrimitive.CheckboxItemIndicator>
  )
}

function ContextMenuRadioGroup(props: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return <ContextMenuPrimitive.RadioGroup {...props} />
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-6 pr-2 text-sm outline-none",
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuRadioItemIndicator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItemIndicator>) {
  return (
    <ContextMenuPrimitive.RadioItemIndicator
      data-slot="context-menu-radio-item-indicator"
      className={cn("absolute left-2 flex size-3 items-center justify-center", className)}
      {...props}
    >
      <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
        <circle cx="3" cy="3" r="3" />
      </svg>
    </ContextMenuPrimitive.RadioItemIndicator>
  )
}

function ContextMenuSubmenuRoot(props: React.ComponentProps<typeof ContextMenuPrimitive.SubmenuRoot>) {
  return <ContextMenuPrimitive.SubmenuRoot {...props} />
}

function ContextMenuSubmenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubmenuTrigger>) {
  return (
    <ContextMenuPrimitive.SubmenuTrigger
      data-slot="context-menu-submenu-trigger"
      className={cn(
        "flex w-full cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none",
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-popup-open:bg-accent/80 data-popup-open:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
      <IconChevronRight className="size-4 text-muted-foreground" />
    </ContextMenuPrimitive.SubmenuTrigger>
  )
}

export const ContextMenu = {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Portal: ContextMenuPortal,
  Positioner: ContextMenuPositioner,
  Popup: ContextMenuPopup,
  Item: ContextMenuItem,
  Separator: ContextMenuSeparator,
  Group: ContextMenuGroup,
  GroupLabel: ContextMenuGroupLabel,
  CheckboxItem: ContextMenuCheckboxItem,
  CheckboxItemIndicator: ContextMenuCheckboxItemIndicator,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  RadioItemIndicator: ContextMenuRadioItemIndicator,
  SubmenuRoot: ContextMenuSubmenuRoot,
  SubmenuTrigger: ContextMenuSubmenuTrigger,
}
