"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { demos } from "@/demos"
import { IconQuickSearch } from "central-icons"

export function Sidebar() {
  const pathname = usePathname()
  const [query, setQuery] = React.useState("")

  const filtered = React.useMemo(() => {
    if (!query) return demos
    const lower = query.toLowerCase()
    return demos.filter((d) => d.title.toLowerCase().includes(lower))
  }, [query])

  return (
    <div className="sticky top-0 left-0 hidden w-72 h-svh bg-accent/20 border-r border-border overflow-y-auto md:block">
      <div className="">
        <div className="mb-0 flex items-center justify-between sticky top-0 p-2 pl-4 py-2 bg-background border-b border-border">
          <Link href="/"><h2 className="font-medium">Noire</h2></Link>
          <div className="flex items-center gap-1">
            <ThemeToggle />
          </div>
        </div>
        <div className="p-2 pb-0">
          <div className="relative">
            <IconQuickSearch className="pointer-events-none absolute left-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-8 w-full rounded-md border border-input bg-transparent pl-8 pr-2.5 text-sm placeholder:text-muted-foreground outline-none focus-visible:border-primary/70 focus-visible:ring-primary"
            />
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
      </div>
    </div>
  )
}
