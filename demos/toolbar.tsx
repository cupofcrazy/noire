"use client"

import { Toolbar } from "@/components/ui/toolbar"
import { Code } from "@/components/ui/code"
import { Toggle, ToggleGroup } from "@/components/ui/toggle"
import { Select } from "@/components/ui/select"
import { Menu } from "@/components/ui/menu"
import {
  IconAlignmentCenter,
  IconAlignmentJustify,
  IconAlignmentLeft,
  IconAlignmentRight,
  IconArrowUndoUp,
  IconArrowRedoUp,
  IconBold,
  IconBulletList,
  IconChainLink1,
  IconChevronBottom,
  IconHighlight,
  IconImages1,
  IconItalic,
  IconLineHeight,
  IconMinusLarge,
  IconNumberedList,
  IconPlusLarge,
  IconPrinter,
  IconSquareChecklist,
  IconStrikeThrough,
  IconSubscript,
  IconSuperscript,
  IconTextColor,
  IconTextIndentLeft,
  IconTextIndentRight,
  IconUnderline,
} from "central-icons"

export function ToolbarDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Document toolbar</p>
        <Toolbar.Root aria-label="Document formatting" className="flex-wrap gap-0.5 p-0.5">
          {/* Undo / Redo / Print */}
          <Toolbar.Group>
            <Toolbar.Button aria-label="Undo">
              <IconArrowUndoUp />
            </Toolbar.Button>
            <Toolbar.Button aria-label="Redo">
              <IconArrowRedoUp />
            </Toolbar.Button>
            <Toolbar.Button aria-label="Print">
              <IconPrinter />
            </Toolbar.Button>
          </Toolbar.Group>

          <Toolbar.Separator />

          {/* Zoom */}
          <Toolbar.Group>
            <Toolbar.Button aria-label="Zoom out" className="px-1">
              <IconMinusLarge />
            </Toolbar.Button>
            <span className="flex h-8 min-w-10 items-center justify-center text-xs tabular-nums">
              100%
            </span>
            <Toolbar.Button aria-label="Zoom in" className="px-1">
              <IconPlusLarge />
            </Toolbar.Button>
          </Toolbar.Group>

          <Toolbar.Separator />

          {/* Heading / style select */}
          <Select.Root defaultValue="Normal text">
            <Select.Trigger className="h-7 w-[130px] border-0 px-2 text-xs shadow-none hover:bg-muted focus-visible:ring-0 data-[popup-open]:ring-0">
              <Select.Value />
              <Select.Icon />
            </Select.Trigger>
            <Select.Popup>
              <Select.Item value="Normal text">Normal text</Select.Item>
              <Select.Item value="Title">Title</Select.Item>
              <Select.Item value="Subtitle">Subtitle</Select.Item>
              <Select.Item value="Heading 1">Heading 1</Select.Item>
              <Select.Item value="Heading 2">Heading 2</Select.Item>
              <Select.Item value="Heading 3">Heading 3</Select.Item>
            </Select.Popup>
          </Select.Root>

          <Toolbar.Separator />

          {/* Font family select */}
          <Select.Root defaultValue="Inter">
            <Select.Trigger className="h-7 w-[120px] border-0 px-2 text-xs shadow-none hover:bg-muted focus-visible:ring-0 data-[popup-open]:ring-0">
              <Select.Value />
              <Select.Icon />
            </Select.Trigger>
            <Select.Popup>
              <Select.Item value="Inter">Inter</Select.Item>
              <Select.Item value="Arial">Arial</Select.Item>
              <Select.Item value="Georgia">Georgia</Select.Item>
              <Select.Item value="Times New Roman">Times New Roman</Select.Item>
              <Select.Item value="Courier New">Courier New</Select.Item>
              <Select.Item value="Verdana">Verdana</Select.Item>
            </Select.Popup>
          </Select.Root>

          <Toolbar.Separator />

          {/* Font size */}
          <Toolbar.Group>
            <Toolbar.Button aria-label="Decrease font size" className="px-1">
              <IconMinusLarge />
            </Toolbar.Button>
            <Toolbar.Input
              className="h-7 w-10 border-0 bg-transparent px-0 text-center text-xs shadow-none focus-visible:ring-0 focus-visible:bg-muted"
              defaultValue="11"
              aria-label="Font size"
            />
            <Toolbar.Button aria-label="Increase font size" className="px-1">
              <IconPlusLarge />
            </Toolbar.Button>
          </Toolbar.Group>

          <Toolbar.Separator />

          {/* Text formatting toggles */}
          <ToggleGroup multiple>
            <Toggle value="bold" aria-label="Bold" className="size-7 px-0">
              <IconBold />
            </Toggle>
            <Toggle value="italic" aria-label="Italic" className="size-7 px-0">
              <IconItalic />
            </Toggle>
            <Toggle value="underline" aria-label="Underline" className="size-7 px-0">
              <IconUnderline />
            </Toggle>
          </ToggleGroup>

          {/* Text color menu */}
          <Menu.Root>
            <Menu.Trigger
              className="inline-flex size-7 items-center justify-center rounded-md transition-colors hover:bg-muted [&_svg]:size-4"
            >
              <IconTextColor />
            </Menu.Trigger>
            <Menu.Portal>
              <Menu.Positioner side="bottom" align="start" sideOffset={4}>
                <Menu.Popup className="min-w-0">
                  <div className="grid grid-cols-5 gap-1 p-2">
                    {["#000000", "#434343", "#666666", "#999999", "#cccccc",
                      "#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6",
                    ].map((color) => (
                      <Menu.Item
                        key={color}
                        className="size-6 rounded-sm p-0 hover:ring-2 hover:ring-ring"
                        style={{ backgroundColor: color }}
                        aria-label={`Text color ${color}`}
                      />
                    ))}
                  </div>
                </Menu.Popup>
              </Menu.Positioner>
            </Menu.Portal>
          </Menu.Root>

          {/* Highlight color menu */}
          <Menu.Root>
            <Menu.Trigger
              className="inline-flex size-7 items-center justify-center rounded-md transition-colors hover:bg-muted [&_svg]:size-4"
            >
              <IconHighlight />
            </Menu.Trigger>
            <Menu.Portal>
              <Menu.Positioner side="bottom" align="start" sideOffset={4}>
                <Menu.Popup className="min-w-0">
                  <div className="grid grid-cols-5 gap-1 p-2">
                    {["#fef08a", "#bbf7d0", "#bfdbfe", "#e9d5ff", "#fecdd3",
                      "#fed7aa", "#d1fae5", "#dbeafe", "#f3e8ff", "#ffe4e6",
                    ].map((color) => (
                      <Menu.Item
                        key={color}
                        className="size-6 rounded-sm p-0 hover:ring-2 hover:ring-ring"
                        style={{ backgroundColor: color }}
                        aria-label={`Highlight color ${color}`}
                      />
                    ))}
                  </div>
                </Menu.Popup>
              </Menu.Positioner>
            </Menu.Portal>
          </Menu.Root>

          <Toolbar.Separator />

          {/* More text formatting */}
          <Menu.Root>
            <Menu.Trigger
              className="inline-flex h-7 items-center gap-1 rounded-md px-1.5 text-xs transition-colors hover:bg-muted [&_svg]:size-3.5"
            >
              More
              <IconChevronBottom className="size-3" />
            </Menu.Trigger>
            <Menu.Portal>
              <Menu.Positioner side="bottom" align="start" sideOffset={4}>
                <Menu.Popup>
                  <Menu.Item className="gap-2">
                    <IconStrikeThrough className="size-4" />
                    Strikethrough
                  </Menu.Item>
                  <Menu.Item className="gap-2">
                    <IconSuperscript className="size-4" />
                    Superscript
                  </Menu.Item>
                  <Menu.Item className="gap-2">
                    <IconSubscript className="size-4" />
                    Subscript
                  </Menu.Item>
                </Menu.Popup>
              </Menu.Positioner>
            </Menu.Portal>
          </Menu.Root>

          <Toolbar.Separator />

          {/* Link / Image / Comment */}
          <Toolbar.Group>
            <Toolbar.Button aria-label="Insert link" className="size-7 px-0">
              <IconChainLink1 />
            </Toolbar.Button>
            <Toolbar.Button aria-label="Insert image" className="size-7 px-0">
              <IconImages1 />
            </Toolbar.Button>
          </Toolbar.Group>

          <Toolbar.Separator />

          {/* Alignment */}
          <ToggleGroup defaultValue={["left"]}>
            <Toggle value="left" aria-label="Align left" className="size-7 px-0">
              <IconAlignmentLeft />
            </Toggle>
            <Toggle value="center" aria-label="Align center" className="size-7 px-0">
              <IconAlignmentCenter />
            </Toggle>
            <Toggle value="right" aria-label="Align right" className="size-7 px-0">
              <IconAlignmentRight />
            </Toggle>
            <Toggle value="justify" aria-label="Justify" className="size-7 px-0">
              <IconAlignmentJustify />
            </Toggle>
          </ToggleGroup>

          <Toolbar.Separator />

          {/* Line & paragraph spacing */}
          <Menu.Root>
            <Menu.Trigger
              className="inline-flex size-7 items-center justify-center rounded-md transition-colors hover:bg-muted [&_svg]:size-4"
              aria-label="Line spacing"
            >
              <IconLineHeight />
            </Menu.Trigger>
            <Menu.Portal>
              <Menu.Positioner side="bottom" align="start" sideOffset={4}>
                <Menu.Popup>
                  <Menu.Group>
                    <Menu.GroupLabel>Line spacing</Menu.GroupLabel>
                    <Menu.Item>Single</Menu.Item>
                    <Menu.Item>1.15</Menu.Item>
                    <Menu.Item>1.5</Menu.Item>
                    <Menu.Item>Double</Menu.Item>
                  </Menu.Group>
                  <Menu.Separator />
                  <Menu.Group>
                    <Menu.GroupLabel>Paragraph spacing</Menu.GroupLabel>
                    <Menu.Item>Add space before paragraph</Menu.Item>
                    <Menu.Item>Add space after paragraph</Menu.Item>
                  </Menu.Group>
                </Menu.Popup>
              </Menu.Positioner>
            </Menu.Portal>
          </Menu.Root>

          <Toolbar.Separator />

          {/* Lists */}
          <Toolbar.Group>
            <Menu.Root>
              <Menu.Trigger
                className="inline-flex size-7 items-center justify-center rounded-md transition-colors hover:bg-muted [&_svg]:size-4"
                aria-label="Bullet list"
              >
                <IconBulletList />
              </Menu.Trigger>
              <Menu.Portal>
                <Menu.Positioner side="bottom" align="start" sideOffset={4}>
                  <Menu.Popup>
                    <Menu.Item>Bulleted list</Menu.Item>
                    <Menu.Item>Dashed list</Menu.Item>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.Root>

            <Menu.Root>
              <Menu.Trigger
                className="inline-flex size-7 items-center justify-center rounded-md transition-colors hover:bg-muted [&_svg]:size-4"
                aria-label="Numbered list"
              >
                <IconNumberedList />
              </Menu.Trigger>
              <Menu.Portal>
                <Menu.Positioner side="bottom" align="start" sideOffset={4}>
                  <Menu.Popup>
                    <Menu.Item>Numbered list</Menu.Item>
                    <Menu.Item>Lettered list</Menu.Item>
                    <Menu.Item>Roman numerals</Menu.Item>
                  </Menu.Popup>
                </Menu.Positioner>
              </Menu.Portal>
            </Menu.Root>

            <Toolbar.Button aria-label="Checklist" className="size-7 px-0">
              <IconSquareChecklist />
            </Toolbar.Button>
          </Toolbar.Group>

          <Toolbar.Separator />

          {/* Indent */}
          <Toolbar.Group>
            <Toolbar.Button aria-label="Decrease indent" className="size-7 px-0">
              <IconTextIndentLeft />
            </Toolbar.Button>
            <Toolbar.Button aria-label="Increase indent" className="size-7 px-0">
              <IconTextIndentRight />
            </Toolbar.Button>
          </Toolbar.Group>
        </Toolbar.Root>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Toolbar.Root>
  <Toolbar.Group>
    <Toolbar.Button />
    <Toolbar.Link />
    <Toolbar.Input />
  </Toolbar.Group>
  <Toolbar.Separator />
</Toolbar.Root>`}</Code>
      </div>
    </div>
  )
}
