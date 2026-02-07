"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { Code } from "@/components/ui/code"

export function CheckboxDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Basic</p>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm">
            <Checkbox.Root defaultChecked>
              <Checkbox.Indicator />
            </Checkbox.Root>
            Accept terms and conditions
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox.Root>
              <Checkbox.Indicator />
            </Checkbox.Root>
            Subscribe to newsletter
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">States</p>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm">
            <Checkbox.Root defaultChecked>
              <Checkbox.Indicator />
            </Checkbox.Root>
            Checked
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox.Root>
              <Checkbox.Indicator />
            </Checkbox.Root>
            Unchecked
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Checkbox.Root indeterminate>
              <Checkbox.Indicator />
            </Checkbox.Root>
            Indeterminate
          </label>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Checkbox.Root disabled>
              <Checkbox.Indicator />
            </Checkbox.Root>
            Disabled
          </label>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Checkbox.Root disabled defaultChecked>
              <Checkbox.Indicator />
            </Checkbox.Root>
            Disabled checked
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Checkbox.Root>
  <Checkbox.Indicator />
</Checkbox.Root>`}</Code>
      </div>
    </div>
  )
}
