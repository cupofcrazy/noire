"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { Code } from "@/components/ui/code"

export function ProgressDemo() {
  const [value, setValue] = React.useState(30)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 10))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex w-72 flex-col gap-8">
      <Progress value={value} label="Uploading..." />
      <Progress value={66} label="Storage used" indicatorClassName="bg-warning" />
      <Progress value={null} label="Processing" />

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Progress />`}</Code>
      </div>
    </div>
  )
}
