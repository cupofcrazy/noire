"use client"

import { Code } from "@/components/ui/code"
import { Collapsible } from "@/components/ui/collapsible"
import { IconChevronBottom } from "central-icons"

export function CollapsibleDemo() {
  return (
    <div className="space-y-8">
      <Collapsible.Root className="w-80 rounded-lg border border-border">
        <Collapsible.Trigger className="px-4 py-3 [&[data-panel-open]>svg]:rotate-180">
          <span>Toggle content</span>
          <IconChevronBottom className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
        </Collapsible.Trigger>
        <Collapsible.Panel>
          <div className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
            This is the collapsible content. It can contain any elements you want
            to show or hide.
          </div>
        </Collapsible.Panel>
      </Collapsible.Root>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Collapsible.Root>
  <Collapsible.Trigger />
  <Collapsible.Panel />
</Collapsible.Root>`}</Code>
      </div>
    </div>
  )
}
