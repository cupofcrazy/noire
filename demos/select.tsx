"use client"

import * as React from "react"
import { Select } from "@/components/ui/select"
import { Code } from "@/components/ui/code"

export function SelectDemo() {
  return (
    <div className="flex w-64 flex-col gap-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Basic</p>
        <Select.Root items={fruits}>
          <Select.Trigger>
            <Select.Value placeholder="Select a fruit" />
            <Select.Icon />
          </Select.Trigger>
          <Select.Popup>
            {fruits.map((fruit) => (
              <Select.Item key={fruit.value} value={fruit.label}>{fruit.label}</Select.Item>
            ))}
          </Select.Popup>
        </Select.Root>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Grouped</p>
        <Select.Root>
          <Select.Trigger>
            <Select.Value placeholder="Select a timezone" />
            <Select.Icon />
          </Select.Trigger>
          <Select.Popup>
            {timezones.map((group, i) => (
              <React.Fragment key={group.label}>
                {i > 0 && <Select.Separator />}
                <Select.Group>
                  <Select.GroupLabel>{group.label}</Select.GroupLabel>
                  {group.items.map((item) => (
                    <Select.Item key={item.value} value={item.label}>
                      {item.label}
                    </Select.Item>
                  ))}
                </Select.Group>
              </React.Fragment>
            ))}
          </Select.Popup>
        </Select.Root>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Disabled</p>
        <Select.Root disabled>
          <Select.Trigger>
            <Select.Value placeholder="Disabled" />
            <Select.Icon />
          </Select.Trigger>
          <Select.Popup>
            <Select.Item value="a">Option A</Select.Item>
          </Select.Popup>
        </Select.Root>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Select.Root>
  <Select.Trigger>
    <Select.Value />
    <Select.Icon />
  </Select.Trigger>
  <Select.Popup>
    <Select.Item />
    <Select.Separator />
    <Select.Group>
      <Select.GroupLabel />
    </Select.Group>
  </Select.Popup>
</Select.Root>`}</Code>
      </div>
    </div>
  )
}

const timezones = [
  {
    label: "North America",
    items: [
      { label: "Eastern (EST)", value: "est" },
      { label: "Central (CST)", value: "cst" },
      { label: "Pacific (PST)", value: "pst" },
    ],
  },
  {
    label: "Europe",
    items: [
      { label: "London (GMT)", value: "gmt" },
      { label: "Paris (CET)", value: "cet" },
      { label: "Helsinki (EET)", value: "eet" },
    ],
  },
]

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
  { label: "Grape", value: "grape" },
  { label: "Orange", value: "orange" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Watermelon", value: "watermelon" },
]