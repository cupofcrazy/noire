"use client"

import { Code } from "@/components/ui/code"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function FieldDemo() {
  return (
    <div className="flex w-80 flex-col gap-6">
      <Field.Root>
        <Field.Label>Name</Field.Label>
        <Input placeholder="Enter your name" required />
        <Field.Description>Your full name as it appears on your ID.</Field.Description>
        <Field.Error match="valueMissing">Name is required.</Field.Error>
      </Field.Root>

      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input type="email" placeholder="you@example.com" required />
        <Field.Error match="valueMissing">Email is required.</Field.Error>
        <Field.Error match="typeMismatch">Please enter a valid email address.</Field.Error>
      </Field.Root>

      <Field.Root disabled>
        <Field.Label>Company</Field.Label>
        <Input placeholder="Disabled field" />
        <Field.Description>This field is disabled.</Field.Description>
      </Field.Root>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Field.Root>
  <Field.Label />
  <Field.Description />
  <Field.Error />
</Field.Root>`}</Code>
      </div>
    </div>
  )
}
