"use client"

import { Button } from "@/components/ui/button"
import { Tooltip } from "@/components/ui/tooltip"
import { Code } from "@/components/ui/code"

export function TooltipDemo() {
  return (
    <Tooltip.Provider>
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Basic</p>
          <div className="flex gap-3">
            <Tooltip.Root>
              <Tooltip.Trigger render={<Button variant="outline">Top</Button>} />
              <Tooltip.Popup>Tooltip on top</Tooltip.Popup>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger render={<Button variant="outline">Bottom</Button>} />
              <Tooltip.Popup side="bottom">Tooltip on bottom</Tooltip.Popup>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger render={<Button variant="outline">Left</Button>} />
              <Tooltip.Popup side="left">Tooltip on left</Tooltip.Popup>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger render={<Button variant="outline">Right</Button>} />
              <Tooltip.Popup side="right">Tooltip on right</Tooltip.Popup>
            </Tooltip.Root>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Inverted</p>
          <div className="flex gap-3">
            <Tooltip.Root>
              <Tooltip.Trigger render={<Button variant="outline">Inverted</Button>} />
              <Tooltip.Popup variant="inverted">Dark tooltip</Tooltip.Popup>
            </Tooltip.Root>

            <Tooltip.Root>
              <Tooltip.Trigger render={<Button variant="outline">Default</Button>} />
              <Tooltip.Popup>Light tooltip</Tooltip.Popup>
            </Tooltip.Root>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
          <Code>{`<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger />
    <Tooltip.Popup />
  </Tooltip.Root>
</Tooltip.Provider>`}</Code>
        </div>
      </div>
    </Tooltip.Provider>
  )
}
