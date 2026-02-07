"use client"

import * as React from "react"
import { Menu } from "@/components/ui/menu"
import { Button } from "@/components/ui/button"
import { Code } from "@/components/ui/code"

export function MenuDemo() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)
  const [theme, setTheme] = React.useState("system")

  return (
    <div className="space-y-8">
      <Menu.Root>
        <Menu.Trigger render={<Button variant="outline" />}>Options</Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner side="bottom" align="start" sideOffset={4}>
            <Menu.Popup>
              <Menu.Group>
                <Menu.GroupLabel>Navigation</Menu.GroupLabel>
                <Menu.Item>New tab</Menu.Item>
                <Menu.Item>New window</Menu.Item>
                <Menu.Item disabled>New private window</Menu.Item>
              </Menu.Group>
              <Menu.Separator />
              <Menu.SubmenuRoot>
                <Menu.SubmenuTrigger>Share</Menu.SubmenuTrigger>
                <Menu.Portal>
                  <Menu.Positioner side="right" align="start" sideOffset={-4} alignOffset={-4}>
                    <Menu.Popup>
                      <Menu.Item>Email link</Menu.Item>
                      <Menu.Item>Messages</Menu.Item>
                      <Menu.Item>Airdrop</Menu.Item>
                    </Menu.Popup>
                  </Menu.Positioner>
                </Menu.Portal>
              </Menu.SubmenuRoot>
              <Menu.Separator />
              <Menu.CheckboxItem checked={showStatusBar} onCheckedChange={setShowStatusBar}>
                <Menu.CheckboxItemIndicator />
                Show status bar
              </Menu.CheckboxItem>
              <Menu.Separator />
              <Menu.Group>
                <Menu.GroupLabel>Theme</Menu.GroupLabel>
                <Menu.RadioGroup value={theme} onValueChange={setTheme}>
                  <Menu.RadioItem value="light">
                    <Menu.RadioItemIndicator />
                    Light
                  </Menu.RadioItem>
                  <Menu.RadioItem value="dark">
                    <Menu.RadioItemIndicator />
                    Dark
                  </Menu.RadioItem>
                  <Menu.RadioItem value="system">
                    <Menu.RadioItemIndicator />
                    System
                  </Menu.RadioItem>
                </Menu.RadioGroup>
              </Menu.Group>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Menu.Root>
  <Menu.Trigger />
  <Menu.Portal>
    <Menu.Positioner>
      <Menu.Popup>
        <Menu.Item />
        <Menu.Separator />
        <Menu.Group>
          <Menu.GroupLabel />
          <Menu.CheckboxItem>
            <Menu.CheckboxItemIndicator />
          </Menu.CheckboxItem>
          <Menu.RadioGroup>
            <Menu.RadioItem>
              <Menu.RadioItemIndicator />
            </Menu.RadioItem>
          </Menu.RadioGroup>
        </Menu.Group>
        <Menu.SubmenuRoot>
          <Menu.SubmenuTrigger />
        </Menu.SubmenuRoot>
      </Menu.Popup>
    </Menu.Positioner>
  </Menu.Portal>
</Menu.Root>`}</Code>
      </div>
    </div>
  )
}
