"use client"

import { Radio } from "@/components/ui/radio"
import { Code } from "@/components/ui/code"

export function RadioDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Outline (default)</p>
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
        <p className="text-sm text-muted-foreground">Filled</p>
        <Radio.Group defaultValue="comfortable">
          <label className="flex items-center gap-2 text-sm">
            <Radio.Root value="compact" variant="filled">
              <Radio.Indicator />
            </Radio.Root>
            Compact
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio.Root value="comfortable" variant="filled">
              <Radio.Indicator />
            </Radio.Root>
            Comfortable
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Radio.Root value="spacious" variant="filled">
              <Radio.Indicator />
            </Radio.Root>
            Spacious
          </label>
        </Radio.Group>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Sizes</p>
        <div className="flex items-center gap-6">
          <Radio.Group defaultValue="on">
            <label className="flex items-center gap-2 text-xs">
              <Radio.Root value="on" size="sm">
                <Radio.Indicator />
              </Radio.Root>
              Small
            </label>
          </Radio.Group>
          <Radio.Group defaultValue="on">
            <label className="flex items-center gap-2 text-sm">
              <Radio.Root value="on">
                <Radio.Indicator />
              </Radio.Root>
              Default
            </label>
          </Radio.Group>
          <Radio.Group defaultValue="on">
            <label className="flex items-center gap-2 text-base">
              <Radio.Root value="on" size="lg">
                <Radio.Indicator />
              </Radio.Root>
              Large
            </label>
          </Radio.Group>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Destructive</p>
        <div className="flex items-center gap-6">
          <Radio.Group defaultValue="on">
            <label className="flex items-center gap-2 text-sm">
              <Radio.Root value="on" color="destructive">
                <Radio.Indicator />
              </Radio.Root>
              Outline
            </label>
          </Radio.Group>
          <Radio.Group defaultValue="on">
            <label className="flex items-center gap-2 text-sm">
              <Radio.Root value="on" variant="filled" color="destructive">
                <Radio.Indicator />
              </Radio.Root>
              Filled
            </label>
          </Radio.Group>
        </div>
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
  <Radio.Root variant="filled" size="lg" color="destructive">
    <Radio.Indicator />
  </Radio.Root>
</Radio.Group>`}</Code>
      </div>
    </div>
  )
}
