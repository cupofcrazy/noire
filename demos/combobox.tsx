"use client"

import * as React from "react"
import { Combobox } from "@/components/ui/combobox"
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

const frameworks = [
  {
    value: "Frontend",
    items: [
      { label: "React", value: "react" },
      { label: "Vue", value: "vue" },
      { label: "Svelte", value: "svelte" },
      { label: "Angular", value: "angular" },
    ],
  },
  {
    value: "Backend",
    items: [
      { label: "Express", value: "express" },
      { label: "Fastify", value: "fastify" },
      { label: "Hono", value: "hono" },
    ],
  },
]

const emojis = [
  { value: "Smileys",
    items: [
      { label: "Grinning Face", value: "grinning", emoji: "\u{1F600}" },
      { label: "Heart Eyes", value: "heart-eyes", emoji: "\u{1F60D}" },
      { label: "Tears of Joy", value: "tears-of-joy", emoji: "\u{1F602}" },
      { label: "Thinking Face", value: "thinking", emoji: "\u{1F914}" },
      { label: "Fire", value: "fire", emoji: "\u{1F525}" },
      { label: "Thumbs Up", value: "thumbs-up", emoji: "\u{1F44D}" },
      { label: "Clapping Hands", value: "clapping", emoji: "\u{1F44F}" },
      { label: "Party Popper", value: "party", emoji: "\u{1F389}" },
    ],
  },
  { value: "Nature",
    items: [
      { label: "Sun", value: "sun", emoji: "\u{2600}\u{FE0F}" },
      { label: "Rainbow", value: "rainbow", emoji: "\u{1F308}" },
      { label: "Sparkles", value: "sparkles", emoji: "\u{2728}" },
      { label: "Butterfly", value: "butterfly", emoji: "\u{1F98B}" },
      { label: "Cherry Blossom", value: "cherry-blossom", emoji: "\u{1F338}" },
      { label: "Evergreen Tree", value: "evergreen", emoji: "\u{1F332}" },
    ],
  },
  { value: "Food",
    items: [
      { label: "Pizza", value: "pizza", emoji: "\u{1F355}" },
      { label: "Taco", value: "taco", emoji: "\u{1F32E}" },
      { label: "Sushi", value: "sushi", emoji: "\u{1F363}" },
      { label: "Ice Cream", value: "ice-cream", emoji: "\u{1F368}" },
      { label: "Coffee", value: "coffee", emoji: "\u{2615}" },
    ],
  },
]

export function ComboboxDemo() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Basic</p>
        <div className="relative w-64">
          <Combobox.Root items={fruits} itemToStringValue={(item: any) => item.label}>
            <Combobox.Input placeholder="Pick a fruit…" />
            <Combobox.Trigger />
            <Combobox.Popup>
              <Combobox.List>
                {(item) => (
                  <Combobox.Item value={item} key={item.value}>
                    {item.label}
                  </Combobox.Item>
                )}
              </Combobox.List>
              <Combobox.Empty />
            </Combobox.Popup>
          </Combobox.Root>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">With clear button</p>
        <div className="relative w-64">
          <Combobox.Root items={fruits} itemToStringValue={(item: any) => item.label}>
            <Combobox.Input placeholder="Search fruits…" />
            <Combobox.Clear />
            <Combobox.Trigger />
            <Combobox.Popup>
              <Combobox.List>
                {(item) => (
                  <Combobox.Item value={item} key={item.value}>
                    {item.label}
                  </Combobox.Item>
                )}
              </Combobox.List>
              <Combobox.Empty />
            </Combobox.Popup>
          </Combobox.Root>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Grouped</p>
        <div className="relative w-64">
          <Combobox.Root items={frameworks}>
            <Combobox.Input placeholder="Pick a framework…" />
            <Combobox.Trigger />
            <Combobox.Popup>
              <Combobox.List>
                {(group) => (
                  <Combobox.Group key={group.value} items={group.items}>
                    <Combobox.GroupLabel>{group.value}</Combobox.GroupLabel>
                    <Combobox.Collection>
                      {(item) => (
                        <Combobox.Item value={item} key={item.value}>
                          {item.label}
                        </Combobox.Item>
                      )}
                    </Combobox.Collection>
                  </Combobox.Group>
                )}
              </Combobox.List>
              <Combobox.Empty />
            </Combobox.Popup>
          </Combobox.Root>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Multiple with chips</p>
        <MultipleComboboxDemo />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">In a popover (emoji picker)</p>
        <EmojiPickerDemo />
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Combobox.Root>
  <Combobox.Input />
  <Combobox.Trigger />
  <Combobox.Clear />
  <Combobox.Popup>
    <Combobox.List>
      <Combobox.Item />
      <Combobox.Group>
        <Combobox.GroupLabel />
        <Combobox.Collection />
      </Combobox.Group>
    </Combobox.List>
    <Combobox.Empty />
  </Combobox.Popup>
</Combobox.Root>`}</Code>
      </div>
    </div>
  )
}

function EmojiPickerDemo() {
  return (
    <Combobox.Root items={emojis} itemToStringValue={(item: any) => item.label}>
      <Combobox.Trigger className="static flex h-9 w-56 items-center justify-between rounded-md border border-input bg-transparent px-3 text-sm shadow-xs hover:bg-muted">
        <Combobox.Value placeholder="Pick an emoji" />
        <Combobox.Icon />
      </Combobox.Trigger>
      <Combobox.Popup className="w-64">
        <div className="border-b border-border">
          <Combobox.Input placeholder="Search emoji…" className="h-9 text-sm border-0" />
        </div>
        <Combobox.List className="max-h-56">
          {(group) => (
            <Combobox.Group key={group.value} items={group.items}>
              <Combobox.GroupLabel>{group.value}</Combobox.GroupLabel>
              <Combobox.Collection>
                {(item) => (
                  <Combobox.Item value={item} key={item.value} className="gap-2">
                    <span className="text-base">{item.emoji}</span>
                    {item.label}
                  </Combobox.Item>
                )}
              </Combobox.Collection>
            </Combobox.Group>
          )}
        </Combobox.List>
        <Combobox.Empty />
      </Combobox.Popup>
    </Combobox.Root>
  )
}

type Fruit = (typeof fruits)[number]

function MultipleComboboxDemo() {
  const [selected, setSelected] = React.useState<Fruit[]>([])
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="relative w-80">
      <Combobox.Root
        multiple
        items={fruits}
        value={selected}
        onValueChange={setSelected}
        itemToStringValue={(item) => item.label}
      >
        <div
          ref={wrapperRef}
          className="flex flex-wrap items-center gap-1 rounded-md border border-input px-2.5 py-1.5"
        >
          <Combobox.Chips>
            {selected.map((item) => (
              <Combobox.Chip key={item.value}>
                {item.label}
                <Combobox.ChipRemove />
              </Combobox.Chip>
            ))}
          </Combobox.Chips>
          <Combobox.Input
            placeholder="Add fruits…"
            className="h-7 min-w-20 flex-1 border-0 p-0 shadow-none focus-visible:ring-0"
          />
        </div>
        <Combobox.Popup anchor={wrapperRef}>
          <Combobox.List>
            {(item) => (
              <Combobox.Item value={item} key={item.value}>
                {item.label}
              </Combobox.Item>
            )}
          </Combobox.List>
          <Combobox.Empty />
        </Combobox.Popup>
      </Combobox.Root>
    </div>
  )
}
