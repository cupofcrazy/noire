"use client"

import { Slider } from "@/components/ui/slider"
import { Code } from "@/components/ui/code"

export function SliderDemo() {
  return (
    <div className="flex w-64 flex-col gap-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Basic</p>
        <Slider defaultValue={[40]} />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Range</p>
        <Slider defaultValue={[25, 75]} />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Stepped (10)</p>
        <Slider defaultValue={[50]} step={10} />
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Disabled</p>
        <Slider defaultValue={[60]} disabled />
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Slider />`}</Code>
      </div>
    </div>
  )
}
