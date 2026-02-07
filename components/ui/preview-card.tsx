"use client"

import * as React from "react"
import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card"
import { cn } from "@/lib/utils"

function PreviewCardRoot(props: React.ComponentProps<typeof PreviewCardPrimitive.Root>) {
  return <PreviewCardPrimitive.Root {...props} />
}

function PreviewCardTrigger({
  className,
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Trigger>) {
  return (
    <PreviewCardPrimitive.Trigger
      data-slot="preview-card-trigger"
      className={cn("underline decoration-muted-foreground/50 underline-offset-4", className)}
      {...props}
    />
  )
}

function PreviewCardPopup({
  className,
  side = "bottom",
  align = "center",
  sideOffset = 8,
  alignOffset,
  children,
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Popup> &
  Pick<React.ComponentProps<typeof PreviewCardPrimitive.Positioner>, "side" | "align" | "sideOffset" | "alignOffset">) {
  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner
        data-slot="preview-card-positioner"
        className="outline-none"
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
      >
        <PreviewCardPrimitive.Popup
          data-slot="preview-card-popup"
          className={cn(
            "w-72 rounded-lg border border-border bg-popover p-4 text-popover-foreground shadow-lg outline-none data-instant:transition-none",
            "origin-[var(--transform-origin)] transition-all duration-150",
            "data-[starting-style]:opacity-0 data-[starting-style]:scale-95",
            "data-[ending-style]:opacity-0 data-[ending-style]:scale-95",
            className
          )}
          {...props}
        >
          {children}
        </PreviewCardPrimitive.Popup>
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  )
}

function PreviewCardArrow({
  className,
  ...props
}: React.ComponentProps<typeof PreviewCardPrimitive.Arrow>) {
  return (
    <PreviewCardPrimitive.Arrow
      data-slot="preview-card-arrow"
      className={cn("size-2.5 rotate-45 border border-border bg-popover", className)}
      {...props}
    />
  )
}

export const PreviewCard = {
  Root: PreviewCardRoot,
  Trigger: PreviewCardTrigger,
  Popup: PreviewCardPopup,
  Arrow: PreviewCardArrow,
}
