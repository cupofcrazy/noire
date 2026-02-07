"use client"

import { Popover } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code } from "@/components/ui/code"

export function PopoverDemo() {
  return (
    <div className="space-y-8">
      <Popover.Root>
        <Popover.Trigger render={<Button variant="outline" />}>
          Open popover
        </Popover.Trigger>
        <Popover.Popup>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <Popover.Title>Dimensions</Popover.Title>
              <Popover.Description>
                Set the dimensions for the layer.
              </Popover.Description>
            </div>
            <div className="grid grid-cols-[1fr_2fr] items-center gap-x-3 gap-y-2">
              <label className="text-sm" htmlFor="width">Width</label>
              <Input id="width" defaultValue="100%" className="h-8" />
              <label className="text-sm" htmlFor="max-width">Max. width</label>
              <Input id="max-width" defaultValue="300px" className="h-8" />
              <label className="text-sm" htmlFor="height">Height</label>
              <Input id="height" defaultValue="25px" className="h-8" />
              <label className="text-sm" htmlFor="max-height">Max. height</label>
              <Input id="max-height" defaultValue="none" className="h-8" />
            </div>
          </div>
        </Popover.Popup>
      </Popover.Root>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Popover.Root>
  <Popover.Trigger />
  <Popover.Popup>
    <Popover.Arrow />
    <Popover.Title />
    <Popover.Description />
    <Popover.Close />
  </Popover.Popup>
</Popover.Root>`}</Code>
      </div>
    </div>
  )
}
