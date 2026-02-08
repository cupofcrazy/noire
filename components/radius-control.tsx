"use client"

import * as React from "react"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { cn } from "@/lib/utils"
import { IconCornerRadius } from "central-icons"
import { Slider } from "./ui/slider"

const DEFAULT_RADIUS = 0.65

const RadiusContext = React.createContext<{
  radius: number
  setRadius: (value: number) => void
} | null>(null)

function useRadius() {
  const ctx = React.useContext(RadiusContext)
  if (!ctx) throw new Error("useRadius must be used within RadiusProvider")
  return ctx
}

export function RadiusProvider({ children }: { children: React.ReactNode }) {
  const [radius, setRadiusState] = React.useState(DEFAULT_RADIUS)

  const setRadius = React.useCallback((value: number) => {
    setRadiusState(value)
    document.documentElement.style.setProperty("--radius", `${value}rem`)
  }, [])

  return (
    <RadiusContext value={{ radius, setRadius }}>
      {children}
    </RadiusContext>
  )
}

export function RadiusControl({ className }: { className?: string }) {
  const { radius, setRadius } = useRadius()

  function handleChange(value: number | readonly number[]) {
    const v = Array.isArray(value) ? value[0] : value
    setRadius(v)
  }

  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger
        className={cn(
          "inline-flex size-8 items-center justify-center rounded-full text-foreground hover:bg-accent",
          className,
        )}
      >
        <IconCornerRadius className="size-4" />
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Positioner
          side="top"
          align="center"
          sideOffset={12}
          className="outline-none"
        >
          <PopoverPrimitive.Popup
            style={{ "--radius": `${DEFAULT_RADIUS}rem` } as React.CSSProperties}
            className={cn(
              "w-48 rounded-xl border border-border bg-popover p-3 shadow-lg outline-none",
              "origin-[var(--transform-origin)] transition-all duration-150",
              "data-[starting-style]:opacity-0 data-[starting-style]:scale-95",
              "data-[ending-style]:opacity-0 data-[ending-style]:scale-95",
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-foreground">Radius</span>
              <span className="text-xs tabular-nums text-muted-foreground">{radius.toFixed(2)}rem</span>
            </div>
            <Slider
              value={[radius]}
              onValueChange={handleChange}
              min={0}
              max={2}
              step={0.05}
            />
          </PopoverPrimitive.Popup>
        </PopoverPrimitive.Positioner>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  )
}
