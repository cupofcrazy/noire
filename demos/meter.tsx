"use client"

import { Meter } from "@/components/ui/meter"
import { Code } from "@/components/ui/code"

export function MeterDemo() {
  return (
    <div className="flex w-72 flex-col gap-8">
      <Meter value={24} label="Storage used" />
      <Meter value={72} label="Memory usage" indicatorClassName="bg-warning" />
      <Meter value={95} label="CPU load" indicatorClassName="bg-destructive" />
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Meter />`}</Code>
      </div>
    </div>
  )
}
