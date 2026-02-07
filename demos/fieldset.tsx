"use client"

import { Code } from "@/components/ui/code"
import { Field } from "@/components/ui/field"
import { Fieldset } from "@/components/ui/fieldset"
import { Input } from "@/components/ui/input"

export function FieldsetDemo() {
  return (
    <div className="space-y-8">
      <Fieldset.Root className="w-80">
        <Fieldset.Legend>Shipping address</Fieldset.Legend>
        <Field.Root>
          <Field.Label>Street</Field.Label>
          <Input placeholder="123 Main St" />
        </Field.Root>
        <Field.Root>
          <Field.Label>City</Field.Label>
          <Input placeholder="New York" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Zip code</Field.Label>
          <Input placeholder="10001" />
        </Field.Root>
      </Fieldset.Root>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Fieldset.Root>
  <Fieldset.Legend />
</Fieldset.Root>`}</Code>
      </div>
    </div>
  )
}
