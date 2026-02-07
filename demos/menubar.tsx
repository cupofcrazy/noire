"use client"

import * as React from "react"
import { Menubar } from "@/components/ui/menubar"
import { Code } from "@/components/ui/code"

export function MenubarDemo() {
  const [showBookmarks, setShowBookmarks] = React.useState(true)
  const [showUrls, setShowUrls] = React.useState(false)
  const [theme, setTheme] = React.useState("system")

  return (
    <div className="space-y-8">
      <Menubar.Root>
      {/* File */}
      <Menubar.Menu>
        <Menubar.Trigger>File</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Positioner side="bottom" align="start" sideOffset={4}>
            <Menubar.Popup>
              <Menubar.Item>
                New tab
                <span className="ml-auto pl-5 text-xs tracking-widest text-muted-foreground">
                  Ctrl+T
                </span>
              </Menubar.Item>
              <Menubar.Item>
                New window
                <span className="ml-auto pl-5 text-xs tracking-widest text-muted-foreground">
                  Ctrl+N
                </span>
              </Menubar.Item>
              <Menubar.Item disabled>New private window</Menubar.Item>
              <Menubar.Separator />
              <Menubar.SubmenuRoot>
                <Menubar.SubmenuTrigger>Share</Menubar.SubmenuTrigger>
                <Menubar.Portal>
                  <Menubar.Positioner side="right" align="start" sideOffset={-4} alignOffset={-4}>
                    <Menubar.Popup>
                      <Menubar.Item>Email link</Menubar.Item>
                      <Menubar.Item>Messages</Menubar.Item>
                      <Menubar.Item>Airdrop</Menubar.Item>
                    </Menubar.Popup>
                  </Menubar.Positioner>
                </Menubar.Portal>
              </Menubar.SubmenuRoot>
              <Menubar.Separator />
              <Menubar.Item>
                Print
                <span className="ml-auto pl-5 text-xs tracking-widest text-muted-foreground">
                  Ctrl+P
                </span>
              </Menubar.Item>
            </Menubar.Popup>
          </Menubar.Positioner>
        </Menubar.Portal>
      </Menubar.Menu>

      {/* Edit */}
      <Menubar.Menu>
        <Menubar.Trigger>Edit</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Positioner side="bottom" align="start" sideOffset={4}>
            <Menubar.Popup>
              <Menubar.Item>
                Undo
                <span className="ml-auto pl-5 text-xs tracking-widest text-muted-foreground">
                  Ctrl+Z
                </span>
              </Menubar.Item>
              <Menubar.Item>
                Redo
                <span className="ml-auto pl-5 text-xs tracking-widest text-muted-foreground">
                  Ctrl+Y
                </span>
              </Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>
                Cut
                <span className="ml-auto pl-5 text-xs tracking-widest text-muted-foreground">
                  Ctrl+X
                </span>
              </Menubar.Item>
              <Menubar.Item>
                Copy
                <span className="ml-auto pl-5 text-xs tracking-widest text-muted-foreground">
                  Ctrl+C
                </span>
              </Menubar.Item>
              <Menubar.Item>
                Paste
                <span className="ml-auto pl-5 text-xs tracking-widest text-muted-foreground">
                  Ctrl+V
                </span>
              </Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item>
                Select all
                <span className="ml-auto pl-5 text-xs tracking-widest text-muted-foreground">
                  Ctrl+A
                </span>
              </Menubar.Item>
            </Menubar.Popup>
          </Menubar.Positioner>
        </Menubar.Portal>
      </Menubar.Menu>

      {/* View */}
      <Menubar.Menu>
        <Menubar.Trigger>View</Menubar.Trigger>
        <Menubar.Portal>
          <Menubar.Positioner side="bottom" align="start" sideOffset={4}>
            <Menubar.Popup>
              <Menubar.CheckboxItem checked={showBookmarks} onCheckedChange={setShowBookmarks}>
                <Menubar.CheckboxItemIndicator />
                Show bookmarks bar
              </Menubar.CheckboxItem>
              <Menubar.CheckboxItem checked={showUrls} onCheckedChange={setShowUrls}>
                <Menubar.CheckboxItemIndicator />
                Show full URLs
              </Menubar.CheckboxItem>
              <Menubar.Separator />
              <Menubar.Group>
                <Menubar.GroupLabel>Theme</Menubar.GroupLabel>
                <Menubar.RadioGroup value={theme} onValueChange={setTheme}>
                  <Menubar.RadioItem value="light">
                    <Menubar.RadioItemIndicator />
                    Light
                  </Menubar.RadioItem>
                  <Menubar.RadioItem value="dark">
                    <Menubar.RadioItemIndicator />
                    Dark
                  </Menubar.RadioItem>
                  <Menubar.RadioItem value="system">
                    <Menubar.RadioItemIndicator />
                    System
                  </Menubar.RadioItem>
                </Menubar.RadioGroup>
              </Menubar.Group>
            </Menubar.Popup>
          </Menubar.Positioner>
        </Menubar.Portal>
      </Menubar.Menu>
      </Menubar.Root>
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Menubar.Root>
  <Menubar.Menu>
    <Menubar.Trigger />
    <Menubar.Portal>
      <Menubar.Positioner>
        <Menubar.Popup>
          <Menubar.Item />
          <Menubar.Separator />
          <Menubar.Group>
            <Menubar.GroupLabel />
            <Menubar.CheckboxItem>
              <Menubar.CheckboxItemIndicator />
            </Menubar.CheckboxItem>
            <Menubar.RadioGroup>
              <Menubar.RadioItem>
                <Menubar.RadioItemIndicator />
              </Menubar.RadioItem>
            </Menubar.RadioGroup>
          </Menubar.Group>
          <Menubar.SubmenuRoot>
            <Menubar.SubmenuTrigger />
          </Menubar.SubmenuRoot>
        </Menubar.Popup>
      </Menubar.Positioner>
    </Menubar.Portal>
  </Menubar.Menu>
</Menubar.Root>`}</Code>
      </div>
    </div>
  )
}
