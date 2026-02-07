"use client"

import { Radio } from "@/components/ui/radio"
import { Code } from "@/components/ui/code"

export function RadioDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Basic</p>
        <Radio.Group defaultValue="comfortable">
          <label className="flex items-center gap-2 text-sm">
            <Radio.Root value="compact">
              <Radio.Indicator />
            </Radio.Root>
            Compact
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio.Root value="comfortable">
              <Radio.Indicator />
            </Radio.Root>
            Comfortable
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio.Root value="spacious">
              <Radio.Indicator />
            </Radio.Root>
            Spacious
          </label>
        </Radio.Group>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Disabled</p>
        <Radio.Group defaultValue="option-1" disabled>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Radio.Root value="option-1">
              <Radio.Indicator />
            </Radio.Root>
            Selected
          </label>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Radio.Root value="option-2">
              <Radio.Indicator />
            </Radio.Root>
            Unselected
          </label>
        </Radio.Group>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Radio.Group>
  <Radio.Root>
    <Radio.Indicator />
  </Radio.Root>
</Radio.Group>`}</Code>
      </div>
    </div>
  )
}
