"use client"

import * as React from "react"
import { Code } from "@/components/ui/code"
import { ContextMenu } from "@/components/ui/context-menu"

export function ContextMenuDemo() {
  const [bookmarked, setBookmarked] = React.useState(false)
  const [view, setView] = React.useState("grid")

  return (
    <div className="space-y-8">
      <ContextMenu.Root>
        <ContextMenu.Trigger className="flex h-40 w-72 items-center justify-center rounded-lg border border-dashed border-border text-sm text-muted-foreground">
          Right-click here
        </ContextMenu.Trigger>
        <ContextMenu.Portal>
          <ContextMenu.Positioner>
            <ContextMenu.Popup>
              <ContextMenu.Group>
                <ContextMenu.GroupLabel>Actions</ContextMenu.GroupLabel>
                <ContextMenu.Item>Back</ContextMenu.Item>
                <ContextMenu.Item>Forward</ContextMenu.Item>
                <ContextMenu.Item>Reload</ContextMenu.Item>
              </ContextMenu.Group>
              <ContextMenu.Separator />
              <ContextMenu.SubmenuRoot>
                <ContextMenu.SubmenuTrigger>More tools</ContextMenu.SubmenuTrigger>
                <ContextMenu.Portal>
                  <ContextMenu.Positioner sideOffset={-4} alignOffset={-4}>
                    <ContextMenu.Popup>
                      <ContextMenu.Item>Save page as...</ContextMenu.Item>
                      <ContextMenu.Item>Create shortcut</ContextMenu.Item>
                      <ContextMenu.Item>Developer tools</ContextMenu.Item>
                    </ContextMenu.Popup>
                  </ContextMenu.Positioner>
                </ContextMenu.Portal>
              </ContextMenu.SubmenuRoot>
              <ContextMenu.Separator />
              <ContextMenu.CheckboxItem checked={bookmarked} onCheckedChange={setBookmarked}>
                Bookmark this page
                <ContextMenu.CheckboxItemIndicator />
              </ContextMenu.CheckboxItem>
              <ContextMenu.Separator />
              <ContextMenu.Group>
                <ContextMenu.GroupLabel>View</ContextMenu.GroupLabel>
                <ContextMenu.RadioGroup value={view} onValueChange={setView}>
                  <ContextMenu.RadioItem value="grid">
                    <ContextMenu.RadioItemIndicator />
                    Grid
                  </ContextMenu.RadioItem>
                  <ContextMenu.RadioItem value="list">
                    <ContextMenu.RadioItemIndicator />
                    List
                  </ContextMenu.RadioItem>
                </ContextMenu.RadioGroup>
              </ContextMenu.Group>
            </ContextMenu.Popup>
          </ContextMenu.Positioner>
        </ContextMenu.Portal>
      </ContextMenu.Root>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<ContextMenu.Root>
  <ContextMenu.Trigger />
  <ContextMenu.Portal>
    <ContextMenu.Positioner>
      <ContextMenu.Popup>
        <ContextMenu.Item />
        <ContextMenu.Separator />
        <ContextMenu.Group>
          <ContextMenu.GroupLabel />
          <ContextMenu.CheckboxItem>
            <ContextMenu.CheckboxItemIndicator />
          </ContextMenu.CheckboxItem>
          <ContextMenu.RadioGroup>
            <ContextMenu.RadioItem>
              <ContextMenu.RadioItemIndicator />
            </ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>
        </ContextMenu.Group>
        <ContextMenu.SubmenuRoot>
          <ContextMenu.SubmenuTrigger />
        </ContextMenu.SubmenuRoot>
      </ContextMenu.Popup>
    </ContextMenu.Positioner>
  </ContextMenu.Portal>
</ContextMenu.Root>`}</Code>
      </div>
    </div>
  )
}
