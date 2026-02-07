"use client"

import { Tabs } from "@/components/ui/tabs"
import { Code } from "@/components/ui/code"

export function TabsDemo() {
  return (
    <div className="w-80 space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Basic</p>
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            <Tabs.Tab value="account">Account</Tabs.Tab>
            <Tabs.Tab value="password">Password</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
            <Tabs.Indicator />
          </Tabs.List>
          <Tabs.Panel value="account">
            <p className="p-3">Manage your account settings and preferences.</p>
          </Tabs.Panel>
          <Tabs.Panel value="password">
            <p className="p-3">Change your password and security options.</p>
          </Tabs.Panel>
          <Tabs.Panel value="settings">
            <p className="p-3">Configure your application settings.</p>
          </Tabs.Panel>
        </Tabs.Root>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Pill</p>
        <Tabs.Root defaultValue="account">
          <Tabs.List className="gap-0 border-b-0">
            <Tabs.Tab value="account">Account</Tabs.Tab>
            <Tabs.Tab value="password">Password</Tabs.Tab>
            <Tabs.Tab value="settings">Settings</Tabs.Tab>
            <Tabs.Indicator variant="pill" />
          </Tabs.List>
          <Tabs.Panel value="account">
            <p className="p-3">Manage your account settings and preferences.</p>
          </Tabs.Panel>
          <Tabs.Panel value="password">
            <p className="p-3">Change your password and security options.</p>
          </Tabs.Panel>
          <Tabs.Panel value="settings">
            <p className="p-3">Configure your application settings.</p>
          </Tabs.Panel>
        </Tabs.Root>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Disabled tab</p>
        <Tabs.Root defaultValue="active">
          <Tabs.List>
            <Tabs.Tab value="active">Active</Tabs.Tab>
            <Tabs.Tab value="disabled" disabled>Disabled</Tabs.Tab>
            <Tabs.Tab value="other">Other</Tabs.Tab>
            <Tabs.Indicator />
          </Tabs.List>
          <Tabs.Panel value="active">
            <p className="p-3">This tab is active.</p>
          </Tabs.Panel>
          <Tabs.Panel value="other">
            <p className="p-3">Another tab panel.</p>
          </Tabs.Panel>
        </Tabs.Root>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Tabs.Root>
  <Tabs.List>
    <Tabs.Tab />
    <Tabs.Indicator />
  </Tabs.List>
  <Tabs.Panel />
</Tabs.Root>`}</Code>
      </div>
    </div>
  )
}
