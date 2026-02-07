"use client"

import { NumberField } from "@/components/ui/number-field"
import { Code } from "@/components/ui/code"

export function NumberFieldDemo() {
  return (
    <div className="space-y-6">
      <NumberField.Root className="w-36" defaultValue={25} min={0} max={100}>
        <NumberField.ScrubArea>
          <label className="text-sm font-medium">Quantity</label>
        </NumberField.ScrubArea>
        <NumberField.Group />
      </NumberField.Root>

      <NumberField.Root className="w-36" defaultValue={0} step={0.01} format={{ style: "currency", currency: "USD" }}>
        <NumberField.ScrubArea>
          <label className="text-sm font-medium">Price</label>
        </NumberField.ScrubArea>
        <NumberField.Group />
      </NumberField.Root>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<NumberField.Root>
  <NumberField.ScrubArea />
  <NumberField.Group />
</NumberField.Root>`}</Code>
      </div>
    </div>
  )
}
