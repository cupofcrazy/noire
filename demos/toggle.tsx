"use client"

import { Toggle, ToggleGroup } from "@/components/ui/toggle"
import { Code } from "@/components/ui/code"
import {
  IconAlignmentLeft,
  IconAlignmentCenter,
  IconAlignmentRight,
  IconAlignmentJustify,
  IconBold,
  IconItalic,
  IconUnderline,
} from "central-icons"

export function ToggleDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Basic</p>
        <div className="flex gap-1">
          <Toggle aria-label="Toggle bold">
            <IconBold />
          </Toggle>
          <Toggle aria-label="Toggle italic">
            <IconItalic />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <IconUnderline />
          </Toggle>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Outline</p>
        <div className="flex gap-1">
          <Toggle variant="outline" aria-label="Toggle bold">
            <IconBold />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle italic">
            <IconItalic />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle underline">
            <IconUnderline />
          </Toggle>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">With text</p>
        <div className="flex gap-1">
          <Toggle aria-label="Toggle bold">
            <IconBold />
            Bold
          </Toggle>
          <Toggle aria-label="Toggle italic" defaultPressed>
            <IconItalic />
            Italic
          </Toggle>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Disabled</p>
        <div className="flex gap-1">
          <Toggle disabled aria-label="Toggle bold">
            <IconBold />
          </Toggle>
          <Toggle disabled defaultPressed aria-label="Toggle italic">
            <IconItalic />
          </Toggle>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Sizes</p>
        <div className="flex items-center gap-1">
          <Toggle size="sm" aria-label="Toggle bold">
            <IconBold />
          </Toggle>
          <Toggle size="default" aria-label="Toggle bold">
            <IconBold />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle bold">
            <IconBold />
          </Toggle>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Group (single)</p>
        <ToggleGroup defaultValue={["left"]}>
          <Toggle value="left" aria-label="Align left">
            <IconAlignmentLeft />
          </Toggle>
          <Toggle value="center" aria-label="Align center">
            <IconAlignmentCenter />
          </Toggle>
          <Toggle value="right" aria-label="Align right">
            <IconAlignmentRight />
          </Toggle>
          <Toggle value="justify" aria-label="Justify">
            <IconAlignmentJustify />
          </Toggle>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Group (multiple)</p>
        <ToggleGroup multiple defaultValue={["bold"]}>
          <Toggle value="bold" aria-label="Toggle bold">
            <IconBold />
          </Toggle>
          <Toggle value="italic" aria-label="Toggle italic">
            <IconItalic />
          </Toggle>
          <Toggle value="underline" aria-label="Toggle underline">
            <IconUnderline />
          </Toggle>
        </ToggleGroup>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Group (outline)</p>
        <ToggleGroup defaultValue={["left"]}>
          <Toggle variant="outline" value="left" aria-label="Align left">
            <IconAlignmentLeft />
          </Toggle>
          <Toggle variant="outline" value="center" aria-label="Align center">
            <IconAlignmentCenter />
          </Toggle>
          <Toggle variant="outline" value="right" aria-label="Align right">
            <IconAlignmentRight />
          </Toggle>
        </ToggleGroup>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Toggle />

<ToggleGroup>
  <Toggle />
</ToggleGroup>`}</Code>
      </div>
    </div>
  )
}
