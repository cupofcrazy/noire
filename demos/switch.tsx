"use client"

import { Switch } from "@/components/ui/switch"
import { Code } from "@/components/ui/code"

export function SwitchDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Basic</p>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm">
            <Switch />
            Airplane mode
          </label>
          <label className="flex items-center gap-2 text-sm">
            <Switch defaultChecked />
            Wi-Fi
          </label>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Disabled</p>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Switch disabled />
            Off
          </label>
          <label className="flex items-center gap-2 text-sm text-muted-foreground">
            <Switch disabled defaultChecked />
            On
          </label>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Switch />`}</Code>
      </div>
    </div>
  )
}
