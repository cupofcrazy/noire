"use client"

import * as React from "react"
import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar"
import { Menu as MenuPrimitive } from "@base-ui/react/menu"
import { IconChevronRight } from "central-icons"
import { cn } from "@/lib/utils"

function MenubarRoot({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive>) {
  return (
    <MenubarPrimitive
      data-slot="menubar"
      className={cn(
        "flex h-9 items-center gap-1 rounded-lg border border-border bg-background p-1 shadow-xs",
        className
      )}
      {...props}
    />
  )
}

function MenubarMenu(props: React.ComponentProps<typeof MenuPrimitive.Root>) {
  return <MenuPrimitive.Root {...props} />
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Trigger>) {
  return (
    <MenuPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none",
        "hover:bg-accent hover:text-accent-foreground",
        "data-popup-open:bg-accent data-popup-open:text-accent-foreground",
        "focus-visible:bg-accent focus-visible:text-accent-foreground",
        className
      )}
      {...props}
    />
  )
}

function MenubarPortal(props: React.ComponentProps<typeof MenuPrimitive.Portal>) {
  return <MenuPrimitive.Portal {...props} />
}

function MenubarPositioner({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Positioner>) {
  return (
    <MenuPrimitive.Positioner
      data-slot="menubar-positioner"
      className={cn("outline-none", className)}
      {...props}
    />
  )
}

function MenubarPopup({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Popup>) {
  return (
    <MenuPrimitive.Popup
      data-slot="menubar-popup"
      className={cn(
        "min-w-48 rounded-lg border border-border bg-popover p-1 shadow-lg outline-none data-instant:transition-none",
        "origin-[var(--transform-origin)] transition-all duration-150",
        "data-[ending-style]:opacity-0 data-[ending-style]:scale-98",
        className
      )}
      {...props}
    />
  )
}

function MenubarItem({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Item>) {
  return (
    <MenuPrimitive.Item
      data-slot="menubar-item"
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

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Separator>) {
  return (
    <MenuPrimitive.Separator
      data-slot="menubar-separator"
      className={cn("-mx-1 my-1 h-px bg-border", className)}
      {...props}
    />
  )
}

function MenubarGroup({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.Group>) {
  return (
    <MenuPrimitive.Group
      data-slot="menubar-group"
      className={cn(className)}
      {...props}
    />
  )
}

function MenubarGroupLabel({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.GroupLabel>) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="menubar-group-label"
      className={cn("px-2 py-1.5 text-xs font-medium text-muted-foreground", className)}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.CheckboxItem>) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-6 pr-2 text-sm outline-none",
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </MenuPrimitive.CheckboxItem>
  )
}

function MenubarCheckboxItemIndicator({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.CheckboxItemIndicator>) {
  return (
    <MenuPrimitive.CheckboxItemIndicator
      data-slot="menubar-checkbox-item-indicator"
      className={cn("absolute left-2 flex size-4 items-center justify-center", className)}
      {...props}
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M8.5 2.5L4 7.5L1.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </MenuPrimitive.CheckboxItemIndicator>
  )
}

function MenubarRadioGroup(props: React.ComponentProps<typeof MenuPrimitive.RadioGroup>) {
  return <MenuPrimitive.RadioGroup {...props} />
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioItem>) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </MenuPrimitive.RadioItem>
  )
}

function MenubarRadioItemIndicator({
  className,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.RadioItemIndicator>) {
  return (
    <MenuPrimitive.RadioItemIndicator
      data-slot="menubar-radio-item-indicator"
      className={cn("absolute left-2 flex size-3 items-center justify-center", className)}
      {...props}
    >
      <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
        <circle cx="3" cy="3" r="3" />
      </svg>
    </MenuPrimitive.RadioItemIndicator>
  )
}

function MenubarSubmenuRoot(props: React.ComponentProps<typeof MenuPrimitive.SubmenuRoot>) {
  return <MenuPrimitive.SubmenuRoot {...props} />
}

function MenubarSubmenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenuPrimitive.SubmenuTrigger>) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="menubar-submenu-trigger"
      className={cn(
        "flex w-full cursor-default select-none items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none",
        "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground data-popup-open:bg-accent/80 data-popup-open:text-accent-foreground",
        className
      )}
      {...props}
    >
      {children}
      <IconChevronRight className="size-4 text-muted-foreground" />
    </MenuPrimitive.SubmenuTrigger>
  )
}

export const Menubar = {
  Root: MenubarRoot,
  Menu: MenubarMenu,
  Trigger: MenubarTrigger,
  Portal: MenubarPortal,
  Positioner: MenubarPositioner,
  Popup: MenubarPopup,
  Item: MenubarItem,
  Separator: MenubarSeparator,
  Group: MenubarGroup,
  GroupLabel: MenubarGroupLabel,
  CheckboxItem: MenubarCheckboxItem,
  CheckboxItemIndicator: MenubarCheckboxItemIndicator,
  RadioGroup: MenubarRadioGroup,
  RadioItem: MenubarRadioItem,
  RadioItemIndicator: MenubarRadioItemIndicator,
  SubmenuRoot: MenubarSubmenuRoot,
  SubmenuTrigger: MenubarSubmenuTrigger,
}
