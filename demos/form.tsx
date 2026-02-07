"use client"

import * as React from "react"
import { Form } from "@/components/ui/form"
import { Field } from "@/components/ui/field"
import { Fieldset } from "@/components/ui/fieldset"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Code } from "@/components/ui/code"

export function FormDemo() {
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  return (
    <div className="space-y-8">
      <Form
        className="w-80"
        errors={errors}
        onSubmit={(event) => {
          event.preventDefault()
          const data = Object.fromEntries(new FormData(event.currentTarget))

          // Simulate server-side validation
          const newErrors: Record<string, string> = {}
          if (data.email === "taken@example.com") {
            newErrors.email = "This email is already in use."
          }
          setErrors(newErrors)
        }}
      >
        <Fieldset.Root>
          <Fieldset.Legend>Create account</Fieldset.Legend>
          <Field.Root name="name">
            <Field.Label>Name</Field.Label>
            <Input placeholder="Your name" required />
            <Field.Error match="valueMissing">Name is required.</Field.Error>
          </Field.Root>
          <Field.Root name="email">
            <Field.Label>Email</Field.Label>
            <Input type="email" placeholder="you@example.com" required />
            <Field.Error match="valueMissing">Email is required.</Field.Error>
            <Field.Error match="typeMismatch">Enter a valid email address.</Field.Error>
            <Field.Error />
          </Field.Root>
          <Field.Root name="password">
            <Field.Label>Password</Field.Label>
            <Input type="password" placeholder="At least 8 characters" required minLength={8} />
            <Field.Error match="valueMissing">Password is required.</Field.Error>
            <Field.Error match="tooShort">Must be at least 8 characters.</Field.Error>
          </Field.Root>
        </Fieldset.Root>
        <Button type="submit">Sign up</Button>
      </Form>
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Form />`}</Code>
      </div>
    </div>
  )
}
