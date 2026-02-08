"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Popover as PopoverPrimitive } from "@base-ui/react/popover"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { demos } from "@/demos"
import { IconQuickSearch, IconBarsThree, IconCrossSmall, IconBarsTwo } from "central-icons"
import { AnimatePresence, motion } from "motion/react"
import { Input, InputGroup, InputIcon } from "./ui/input"

export function MobileNav() {
  const pathname = usePathname()
  const [query, setQuery] = React.useState("")
  const [open, setOpen] = React.useState(false)

  const filtered = React.useMemo(() => {
    if (!query) return demos
    const lower = query.toLowerCase()
    return demos.filter((d) => d.title.toLowerCase().includes(lower))
  }, [query])

  React.useEffect(() => {
    setOpen(false)
    setQuery("")
  }, [pathname])

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background p-2 pl-4 md:hidden">
      <Link href="/">
        <h2 className="font-medium">Noire</h2>
      </Link>
      <div className="flex items-center gap-1">
        <ThemeToggle />
        <PopoverPrimitive.Root open={open} onOpenChange={setOpen}>
          <PopoverPrimitive.Trigger
            className="inline-flex size-8 items-center justify-center rounded-md text-foreground hover:bg-accent"
          >
            <AnimatePresence mode="popLayout">
              <motion.div
                key={open ? "cross" : "bars"}
                initial={{ opacity: 0, scale: 0.6, filter: "blur(2px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.6, filter: "blur(2px)" }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                >
              {open ? (
                <IconCrossSmall className="size-6" />
              ) : (
                <IconBarsTwo className="size-5" />
              )}
              </motion.div>
            </AnimatePresence>
          </PopoverPrimitive.Trigger>
          <PopoverPrimitive.Portal>
            <PopoverPrimitive.Positioner
              side="bottom"
              align="end"
              sideOffset={16}
              className="outline-none"
            >
              <PopoverPrimitive.Popup
                className={cn(
                  "w-72 max-h-[min(24rem,calc(100svh-4rem))] overflow-y-auto rounded-lg border border-border bg-popover shadow-lg outline-none",
                  "origin-[var(--transform-origin)] transition-all duration-150",
                  "data-[starting-style]:opacity-0 data-[starting-style]:scale-95",
                  "data-[ending-style]:opacity-0 data-[ending-style]:scale-95",
                )}
              >
                <div className="p-1 pb-0">
                  <div className="relative">
                    <InputGroup className="sticky left-0 top-0">
                      <InputIcon><IconQuickSearch className="size-4 text-muted-foreground/60" /></InputIcon>
                      <Input 
                        className="rounded-xs"
                        variant="border"
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </InputGroup>
                  </div>
                </div>
                <nav className="flex flex-col gap-1 p-2">
                  {filtered.map((demo) => {
                    const href = `/${demo.id}`
                    const isActive = pathname === href

                    return (
                      <Link
                        key={demo.id}
                        href={href}
                        className={cn(
                          "text-foreground/80 rounded-sm h-8 px-3 flex items-center gap-2 text-sm font-medium transition-colors",
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "hover:bg-accent/50"
                        )}
                      >
                        <demo.icon className="size-4 text-foreground/60 shrink-0" />
                        {demo.title}
                      </Link>
                    )
                  })}
                  {filtered.length === 0 && (
                    <p className="px-3 py-2 text-sm text-muted-foreground">No results</p>
                  )}
                </nav>
              </PopoverPrimitive.Popup>
            </PopoverPrimitive.Positioner>
          </PopoverPrimitive.Portal>
        </PopoverPrimitive.Root>
      </div>
    </div>
  )
}
