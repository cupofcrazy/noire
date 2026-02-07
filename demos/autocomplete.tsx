"use client"

import { Autocomplete } from "@/components/ui/autocomplete"
import { Code } from "@/components/ui/code"

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Cherry", value: "cherry" },
  { label: "Grape", value: "grape" },
  { label: "Lemon", value: "lemon" },
  { label: "Mango", value: "mango" },
  { label: "Orange", value: "orange" },
  { label: "Peach", value: "peach" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Watermelon", value: "watermelon" },
]

const groups = [
  {
    value: "Colors",
    items: [
      { label: "Red", value: "red" },
      { label: "Blue", value: "blue" },
      { label: "Green", value: "green" },
    ],
  },
  {
    value: "Shapes",
    items: [
      { label: "Circle", value: "circle" },
      { label: "Square", value: "square" },
      { label: "Triangle", value: "triangle" },
    ],
  },
]

const countries = [
  { label: "Argentina", value: "ar" },
  { label: "Australia", value: "au" },
  { label: "Brazil", value: "br" },
  { label: "Canada", value: "ca" },
  { label: "France", value: "fr" },
  { label: "Germany", value: "de" },
  { label: "India", value: "in" },
  { label: "Italy", value: "it" },
  { label: "Japan", value: "jp" },
  { label: "Mexico", value: "mx" },
  { label: "South Korea", value: "kr" },
  { label: "Spain", value: "es" },
  { label: "United Kingdom", value: "gb" },
  { label: "United States", value: "us" },
]

export function AutocompleteDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Basic</p>
        <div className="relative w-64">
          <Autocomplete.Root items={fruits} itemToStringValue={(item: any) => item.label}>
            <Autocomplete.Input placeholder="Pick a fruit..." />
            <Autocomplete.Trigger />
            <Autocomplete.Popup>
              <Autocomplete.List>
                {(item) => (
                  <Autocomplete.Item value={item} key={item.value}>
                    {item.label}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
              <Autocomplete.Empty />
            </Autocomplete.Popup>
          </Autocomplete.Root>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">With clear button</p>
        <div className="relative w-64">
          <Autocomplete.Root items={fruits} itemToStringValue={(item: any) => item.label}>
            <Autocomplete.Input placeholder="Search fruits..." />
            <Autocomplete.Clear />
            <Autocomplete.Trigger />
            <Autocomplete.Popup>
              <Autocomplete.List>
                {(item) => (
                  <Autocomplete.Item value={item} key={item.value}>
                    {item.label}
                  </Autocomplete.Item>
                )}
              </Autocomplete.List>
              <Autocomplete.Empty />
            </Autocomplete.Popup>
          </Autocomplete.Root>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Grouped</p>
        <div className="relative w-64">
          <Autocomplete.Root items={groups}>
            <Autocomplete.Input placeholder="Colors & shapes..." />
            <Autocomplete.Trigger />
            <Autocomplete.Popup>
              <Autocomplete.List>
                {(group) => (
                  <Autocomplete.Group key={group.value} items={group.items}>
                    <Autocomplete.GroupLabel>{group.value}</Autocomplete.GroupLabel>
                    <Autocomplete.Collection>
                      {(item) => (
                        <Autocomplete.Item value={item} key={item.value}>
                          {item.label}
                        </Autocomplete.Item>
                      )}
                    </Autocomplete.Collection>
                  </Autocomplete.Group>
                )}
              </Autocomplete.List>
              <Autocomplete.Empty />
            </Autocomplete.Popup>
          </Autocomplete.Root>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Input in popup</p>
        <Autocomplete.Root items={countries} itemToStringValue={(item: any) => item.label}>
          <Autocomplete.Trigger className="static flex h-9 w-56 items-center justify-between rounded-md border border-input bg-transparent px-3 text-sm shadow-xs hover:bg-muted">
            Select a country...
          </Autocomplete.Trigger>
          <Autocomplete.Popup className="w-56">
            <div className="border-b border-border">
              <Autocomplete.Input placeholder="Search countries..." className="h-9 text-sm border-0" />
            </div>
            <Autocomplete.List className="max-h-48">
              {(item) => (
                <Autocomplete.Item value={item} key={item.value}>
                  {item.label}
                </Autocomplete.Item>
              )}
            </Autocomplete.List>
            <Autocomplete.Empty />
          </Autocomplete.Popup>
        </Autocomplete.Root>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Autocomplete.Root>
  <Autocomplete.Input />
  <Autocomplete.Trigger />
  <Autocomplete.Clear />
  <Autocomplete.Popup>
    <Autocomplete.List>
      <Autocomplete.Item />
      <Autocomplete.Group>
        <Autocomplete.GroupLabel />
        <Autocomplete.Collection />
      </Autocomplete.Group>
    </Autocomplete.List>
    <Autocomplete.Empty />
  </Autocomplete.Popup>
</Autocomplete.Root>`}</Code>
      </div>
    </div>
  )
}
