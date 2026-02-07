"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Code } from "@/components/ui/code"

const tags = Array.from({ length: 50 }, (_, i) => `Tag ${i + 1}`)

export function ScrollAreaDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Vertical</p>
        <ScrollArea.Root className="h-72 w-48 rounded-md border border-border">
          <ScrollArea.Viewport>
            <ScrollArea.Content className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <div key={tag} className="border-b border-border py-2 text-sm">
                  {tag}
                </div>
              ))}
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar>
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Horizontal</p>
        <ScrollArea.Root className="w-72 rounded-md border border-border">
          <ScrollArea.Viewport>
            <ScrollArea.Content className="flex gap-4 p-4">
              {Array.from({ length: 12 }, (_, i) => (
                <div
                  key={i}
                  className="flex h-20 w-32 shrink-0 items-center justify-center rounded-md border border-border bg-muted text-sm"
                >
                  Item {i + 1}
                </div>
              ))}
            </ScrollArea.Content>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal">
            <ScrollArea.Thumb />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<ScrollArea.Root>
  <ScrollArea.Viewport>
    <ScrollArea.Content />
  </ScrollArea.Viewport>
  <ScrollArea.Scrollbar>
    <ScrollArea.Thumb />
  </ScrollArea.Scrollbar>
  <ScrollArea.Corner />
</ScrollArea.Root>`}</Code>
      </div>
    </div>
  )
}
