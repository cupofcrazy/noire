"use client"

import { Accordion } from "@/components/ui/accordion"
import { AlertDialog } from "@/components/ui/alert-dialog"
import { Autocomplete } from "@/components/ui/autocomplete"
import { Avatar } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible } from "@/components/ui/collapsible"
import { Combobox } from "@/components/ui/combobox"
import { ContextMenu } from "@/components/ui/context-menu"
import { Dialog } from "@/components/ui/dialog"
import { Field } from "@/components/ui/field"
import { Fieldset } from "@/components/ui/fieldset"
import { Input } from "@/components/ui/input"
import { Menu } from "@/components/ui/menu"
import { Menubar } from "@/components/ui/menubar"
import { Meter } from "@/components/ui/meter"
import { NumberField } from "@/components/ui/number-field"
import { Popover } from "@/components/ui/popover"
import { PreviewCard } from "@/components/ui/preview-card"
import { Progress } from "@/components/ui/progress"
import { Radio } from "@/components/ui/radio"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Select } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { Tabs } from "@/components/ui/tabs"
import { Toggle } from "@/components/ui/toggle"
import { Toolbar } from "@/components/ui/toolbar"
import { Tooltip } from "@/components/ui/tooltip"
import {
  IconHeart,
  IconBolt,
  IconStar,
  IconBold,
  IconItalic,
  IconUnderline,
  IconChevronBottom,
} from "central-icons"

const characters = [
  { label: "Rick Sanchez", value: "rick" },
  { label: "Morty Smith", value: "morty" },
  { label: "Summer Smith", value: "summer" },
  { label: "Beth Smith", value: "beth" },
  { label: "Jerry Smith", value: "jerry" },
  { label: "Mr. Meeseeks", value: "meeseeks" },
  { label: "Birdperson", value: "birdperson" },
  { label: "Squanchy", value: "squanchy" },
]

const dimensions = [
  { label: "C-137", value: "c137" },
  { label: "C-500A", value: "c500a" },
  { label: "J19ζ7", value: "j19z7" },
  { label: "Cronenberg", value: "cronenberg" },
  { label: "Replacement", value: "replacement" },
  { label: "Blender", value: "blender" },
]

function Card({
  title,
  href,
  children,
}: {
  title: string
  href: string
  children: React.ReactNode
}) {
  return (
    <div
      className="group rounded-xl border border-border bg-card p-5"
    >
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">{title}</h3>
      </div>
      <div className="flex items-center justify-center min-h-[80px]">
        {children}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-svh w-full p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">Noire</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Wubba lubba dub dub! Component library built on Base UI.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Accordion */}
        <Card title="Accordion" href="/accordion">
          <div className="w-full">
            <Accordion.Root defaultValue={[0]}>
              <Accordion.Item>
                <Accordion.Header>
                  <Accordion.Trigger>What is a Plumbus?</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel>
                  <p className="text-sm text-muted-foreground">Everyone has a Plumbus in their home.</p>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item>
                <Accordion.Header>
                  <Accordion.Trigger>How do they work?</Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Panel>
                  <p className="text-sm text-muted-foreground">First they take the dinglebop and push it through the grumbo.</p>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </Card>

        {/* Alert Dialog */}
        <Card title="Alert Dialog" href="/alert-dialog">
          <AlertDialog.Root>
            <AlertDialog.Trigger render={<Button variant="destructive" />}>
              Self-Destruct
            </AlertDialog.Trigger>
            <AlertDialog.Portal>
              <AlertDialog.Backdrop />
              <AlertDialog.Popup>
                <AlertDialog.Title>Confirm Self-Destruct</AlertDialog.Title>
                <AlertDialog.Description>
                  This will destroy the Citadel of Ricks. This action cannot be undone.
                </AlertDialog.Description>
                <div className="mt-6 flex justify-end gap-3">
                  <AlertDialog.Close render={<Button variant="outline" />}>
                    Abort
                  </AlertDialog.Close>
                  <AlertDialog.Close render={<Button variant="destructive" />}>
                    Detonate
                  </AlertDialog.Close>
                </div>
              </AlertDialog.Popup>
            </AlertDialog.Portal>
          </AlertDialog.Root>
        </Card>

        {/* Autocomplete */}
        <Card title="Autocomplete" href="/autocomplete">
          <div className="relative w-full">
            <Autocomplete.Root items={characters} itemToStringValue={(item: any) => item.label}>
              <Autocomplete.Input placeholder="Search characters..." />
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
        </Card>

        {/* Avatar */}
        <Card title="Avatar" href="/avatar">
          <div className="flex items-center -space-x-2">
            <Avatar.Root rounded="full" className="ring-2 ring-card">
              <Avatar.Fallback>RM</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root rounded="full" className="ring-2 ring-card">
              <Avatar.Fallback>MS</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root rounded="full" className="ring-2 ring-card">
              <Avatar.Fallback>BP</Avatar.Fallback>
            </Avatar.Root>
            <Avatar.Root rounded="lg" className="ring-2 ring-card">
              <Avatar.Fallback>SS</Avatar.Fallback>
            </Avatar.Root>
          </div>
        </Card>

        {/* Badge */}
        <Card title="Badge" href="/badge">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Dimension C-137</Badge>
            <Badge variant="secondary">Citadel</Badge>
            <Badge variant="destructive">Wanted</Badge>
            <Badge variant="success">Pickle</Badge>
          </div>
        </Card>

        {/* Button */}
        <Card title="Button" href="/button">
          <div className="flex items-center gap-2">
            <Button>Portal Gun</Button>
            <Button variant="outline">Meeseeks</Button>
            <Button variant="destructive">Destroy</Button>
          </div>
        </Card>

        {/* Checkbox */}
        <Card title="Checkbox" href="/checkbox">
          <div className="flex flex-col gap-2.5">
            <label className="flex items-center gap-2 text-sm">
              <Checkbox.Root defaultChecked>
                <Checkbox.Indicator />
              </Checkbox.Root>
              Szechuan Sauce
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox.Root>
                <Checkbox.Indicator />
              </Checkbox.Root>
              Plumbus
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Checkbox.Root defaultChecked>
                <Checkbox.Indicator />
              </Checkbox.Root>
              Portal Fluid
            </label>
          </div>
        </Card>

        {/* Collapsible */}
        <Card title="Collapsible" href="/collapsible">
          <div className="w-full">
            <Collapsible.Root className="rounded-lg border border-border">
              <Collapsible.Trigger className="px-4 py-3 [&[data-panel-open]>svg]:rotate-180">
                <span className="text-sm font-medium">Interdimensional Cable</span>
                <IconChevronBottom className="size-4 shrink-0 text-muted-foreground transition-transform duration-200" />
              </Collapsible.Trigger>
              <Collapsible.Panel>
                <div className="border-t border-border px-4 py-3 text-sm text-muted-foreground space-y-1">
                  <p>Ball Fondlers</p>
                  <p>Gazorpazorpfield</p>
                  <p>Ants in My Eyes Johnson</p>
                </div>
              </Collapsible.Panel>
            </Collapsible.Root>
          </div>
        </Card>

        {/* Combobox */}
        <Card title="Combobox" href="/combobox">
          <div className="relative w-full">
            <Combobox.Root items={dimensions} itemToStringValue={(item: any) => item.label}>
              <Combobox.Input placeholder="Pick a dimension..." />
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
        </Card>

        {/* Context Menu */}
        <Card title="Context Menu" href="/context-menu">
          <ContextMenu.Root>
            <ContextMenu.Trigger className="flex h-20 w-full items-center justify-center rounded-md border border-dashed border-border text-sm text-muted-foreground">
              Right-click here
            </ContextMenu.Trigger>
            <ContextMenu.Portal>
              <ContextMenu.Positioner>
                <ContextMenu.Popup>
                  <ContextMenu.Item>Open Portal</ContextMenu.Item>
                  <ContextMenu.Item>Squanch</ContextMenu.Item>
                  <ContextMenu.Item>Get Schwifty</ContextMenu.Item>
                  <ContextMenu.Separator />
                  <ContextMenu.Item>Pickle Rick Mode</ContextMenu.Item>
                </ContextMenu.Popup>
              </ContextMenu.Positioner>
            </ContextMenu.Portal>
          </ContextMenu.Root>
        </Card>

        {/* Dialog */}
        <Card title="Dialog" href="/dialog">
          <Dialog.Root>
            <Dialog.Trigger render={<Button variant="outline" />}>
              Open Portal
            </Dialog.Trigger>
            <Dialog.Popup>
              <Dialog.Close />
              <Dialog.Title>Portal Configuration</Dialog.Title>
              <Dialog.Description>
                Enter the coordinates for your destination dimension.
              </Dialog.Description>
              <div className="mt-4">
                <Input placeholder="Dimension ID (e.g. C-137)" />
              </div>
              <div className="mt-6 flex justify-end gap-3">
                <Dialog.Close render={<Button variant="outline">Cancel</Button>} />
                <Dialog.Close render={<Button>Engage</Button>} />
              </div>
            </Dialog.Popup>
          </Dialog.Root>
        </Card>

        {/* Field */}
        <Card title="Field" href="/field">
          <div className="w-full">
            <Field.Root>
              <Field.Label>Dimension</Field.Label>
              <Input placeholder="e.g. C-137" />
              <Field.Description>Enter your home dimension code.</Field.Description>
            </Field.Root>
          </div>
        </Card>

        {/* Fieldset */}
        <Card title="Fieldset" href="/fieldset">
          <div className="w-full">
            <Fieldset.Root>
              <Fieldset.Legend>Smith Family</Fieldset.Legend>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox.Root defaultChecked>
                    <Checkbox.Indicator />
                  </Checkbox.Root>
                  Rick
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox.Root defaultChecked>
                    <Checkbox.Indicator />
                  </Checkbox.Root>
                  Morty
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox.Root>
                    <Checkbox.Indicator />
                  </Checkbox.Root>
                  Jerry
                </label>
              </div>
            </Fieldset.Root>
          </div>
        </Card>

        {/* Form */}
        <Card title="Form" href="/form">
          <div className="w-full space-y-3">
            <Field.Root>
              <Field.Label>Catchphrase</Field.Label>
              <Input defaultValue="Wubba lubba dub dub!" />
            </Field.Root>
          </div>
        </Card>

        {/* Input */}
        <Card title="Input" href="/input">
          <div className="w-full space-y-2">
            <Input placeholder="Enter dimension number..." />
            <Input variant="accent" placeholder="Search multiverse..." />
          </div>
        </Card>

        {/* Menu */}
        <Card title="Menu" href="/menu">
          <Menu.Root>
            <Menu.Trigger render={<Button variant="outline" />}>
              Inventory
            </Menu.Trigger>
            <Menu.Portal>
              <Menu.Positioner side="bottom" align="start" sideOffset={4}>
                <Menu.Popup>
                  <Menu.Item>Portal Gun</Menu.Item>
                  <Menu.Item>Meeseeks Box</Menu.Item>
                  <Menu.Item>Plumbus</Menu.Item>
                  <Menu.Separator />
                  <Menu.Item>Szechuan Sauce</Menu.Item>
                </Menu.Popup>
              </Menu.Positioner>
            </Menu.Portal>
          </Menu.Root>
        </Card>

        {/* Menubar */}
        <Card title="Menubar" href="/menubar">
          <Menubar.Root>
            <Menubar.Menu>
              <Menubar.Trigger>File</Menubar.Trigger>
              <Menubar.Portal>
                <Menubar.Positioner side="bottom" align="start" sideOffset={4}>
                  <Menubar.Popup>
                    <Menubar.Item>New Dimension</Menubar.Item>
                    <Menubar.Item>Open Portal</Menubar.Item>
                    <Menubar.Separator />
                    <Menubar.Item>Save Universe</Menubar.Item>
                  </Menubar.Popup>
                </Menubar.Positioner>
              </Menubar.Portal>
            </Menubar.Menu>
            <Menubar.Menu>
              <Menubar.Trigger>Edit</Menubar.Trigger>
              <Menubar.Portal>
                <Menubar.Positioner side="bottom" align="start" sideOffset={4}>
                  <Menubar.Popup>
                    <Menubar.Item>Undo</Menubar.Item>
                    <Menubar.Item>Redo</Menubar.Item>
                  </Menubar.Popup>
                </Menubar.Positioner>
              </Menubar.Portal>
            </Menubar.Menu>
            <Menubar.Menu>
              <Menubar.Trigger>View</Menubar.Trigger>
              <Menubar.Portal>
                <Menubar.Positioner side="bottom" align="start" sideOffset={4}>
                  <Menubar.Popup>
                    <Menubar.Item>Multiverse Map</Menubar.Item>
                    <Menubar.Item>Citadel View</Menubar.Item>
                  </Menubar.Popup>
                </Menubar.Positioner>
              </Menubar.Portal>
            </Menubar.Menu>
          </Menubar.Root>
        </Card>

        {/* Meter */}
        <Card title="Meter" href="/meter">
          <div className="w-full space-y-3">
            <Meter label="Fleeb Juice" value={88} />
            <Meter label="Dark Matter" value={31} indicatorClassName="bg-destructive" />
          </div>
        </Card>

        {/* Number Field */}
        <Card title="Number Field" href="/number-field">
          <NumberField.Root defaultValue={137}>
            <NumberField.ScrubArea>
              <label className="text-sm font-medium cursor-ew-resize">Dimension #</label>
            </NumberField.ScrubArea>
            <NumberField.Group />
          </NumberField.Root>
        </Card>

        {/* Popover */}
        <Card title="Popover" href="/popover">
          <Popover.Root>
            <Popover.Trigger render={<Button variant="outline" />}>
              Rick Info
            </Popover.Trigger>
            <Popover.Popup>
              <Popover.Title>Rick Sanchez</Popover.Title>
              <Popover.Description className="mt-1">
                Genius scientist from dimension C-137. Inventor of the portal gun.
                Known catchphrase: &quot;Wubba lubba dub dub!&quot;
              </Popover.Description>
            </Popover.Popup>
          </Popover.Root>
        </Card>

        {/* Preview Card */}
        <Card title="Preview Card" href="/preview-card">
          <p className="text-sm">
            Invented by{" "}
            <PreviewCard.Root>
              <PreviewCard.Trigger href="https://rickandmorty.fandom.com/wiki/Rick_Sanchez">
                Rick Sanchez
              </PreviewCard.Trigger>
              <PreviewCard.Popup>
                <div className="flex flex-col gap-3">
                  <Avatar.Root className="size-12">
                    <Avatar.Fallback>RS</Avatar.Fallback>
                  </Avatar.Root>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm font-medium">Rick Sanchez</p>
                    <p className="text-sm text-muted-foreground">
                      Genius scientist from dimension C-137. Inventor of the portal gun.
                    </p>
                  </div>
                </div>
              </PreviewCard.Popup>
            </PreviewCard.Root>
            {" "}of C-137.
          </p>
        </Card>

        {/* Progress */}
        <Card title="Progress" href="/progress">
          <div className="w-full space-y-3">
            <Progress label="Portal Charge" value={73} />
            <Progress label="Pickle Serum" value={42} indicatorClassName="bg-success" />
          </div>
        </Card>

        {/* Radio */}
        <Card title="Radio" href="/radio">
          <Radio.Group defaultValue="c137">
            <label className="flex items-center gap-2 text-sm">
              <Radio.Root value="c137">
                <Radio.Indicator />
              </Radio.Root>
              Dimension C-137
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Radio.Root value="j19">
                <Radio.Indicator />
              </Radio.Root>
              Dimension J19ζ7
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Radio.Root value="cronenberg">
                <Radio.Indicator />
              </Radio.Root>
              Cronenberg World
            </label>
          </Radio.Group>
        </Card>

        {/* Scroll Area */}
        <Card title="Scroll Area" href="/scroll-area">
          <ScrollArea.Root className="h-24 w-full rounded-md border border-border">
            <ScrollArea.Viewport className="p-3">
              <ScrollArea.Content>
                {["Squanchy", "Birdperson", "Mr. Poopybutthole", "Noob-Noob", "Scary Terry", "Abradolf Lincler", "Krombopulos Michael", "Unity"].map((name) => (
                  <p key={name} className="py-1 text-sm">{name}</p>
                ))}
              </ScrollArea.Content>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar>
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
          </ScrollArea.Root>
        </Card>

        {/* Select */}
        <Card title="Select" href="/select">
          <div className="w-full">
            <Select.Root defaultValue="morty">
              <Select.Trigger>
                <Select.Value />
                <Select.Icon />
              </Select.Trigger>
              <Select.Popup>
                <Select.Item value="rick">Rick Sanchez</Select.Item>
                <Select.Item value="morty">Morty Smith</Select.Item>
                <Select.Item value="summer">Summer Smith</Select.Item>
                <Select.Item value="beth">Beth Smith</Select.Item>
                <Select.Item value="jerry">Jerry Smith</Select.Item>
              </Select.Popup>
            </Select.Root>
          </div>
        </Card>

        {/* Slider */}
        <Card title="Slider" href="/slider">
          <div className="w-full space-y-4">
            <div className="space-y-1.5">
              <p className="text-xs text-muted-foreground">Schwifty Level</p>
              <Slider defaultValue={[69]} />
            </div>
          </div>
        </Card>

        {/* Switch */}
        <Card title="Switch" href="/switch">
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-2 text-sm">
              <Switch defaultChecked />
              Portal Gun Active
            </label>
            <label className="flex items-center gap-2 text-sm">
              <Switch />
              Microverse Battery
            </label>
          </div>
        </Card>

        {/* Tabs */}
        <Card title="Tabs" href="/tabs">
          <div className="w-full">
            <Tabs.Root defaultValue="rick">
              <Tabs.List>
                <Tabs.Tab value="rick">Rick</Tabs.Tab>
                <Tabs.Tab value="morty">Morty</Tabs.Tab>
                <Tabs.Tab value="jerry">Jerry</Tabs.Tab>
                <Tabs.Indicator />
              </Tabs.List>
              <Tabs.Panel value="rick">
                <p className="pt-2 text-xs text-muted-foreground">
                  Genius scientist, dimension C-137.
                </p>
              </Tabs.Panel>
              <Tabs.Panel value="morty">
                <p className="pt-2 text-xs text-muted-foreground">
                  Grandson, anxious but brave.
                </p>
              </Tabs.Panel>
              <Tabs.Panel value="jerry">
                <p className="pt-2 text-xs text-muted-foreground">
                  The least Rick-like person alive.
                </p>
              </Tabs.Panel>
            </Tabs.Root>
          </div>
        </Card>

        {/* Toggle */}
        <Card title="Toggle" href="/toggle">
          <div className="flex items-center gap-2">
            <Toggle aria-label="Favorite" defaultPressed>
              <IconHeart className="size-4" />
            </Toggle>
            <Toggle aria-label="Boost">
              <IconBolt className="size-4" />
            </Toggle>
            <Toggle aria-label="Star" variant="outline">
              <IconStar className="size-4" />
            </Toggle>
          </div>
        </Card>

        {/* Toolbar */}
        <Card title="Toolbar" href="/toolbar">
          <Toolbar.Root>
            <Toolbar.Group>
              <Toolbar.Button aria-label="Bold">
                <IconBold className="size-4" />
              </Toolbar.Button>
              <Toolbar.Button aria-label="Italic">
                <IconItalic className="size-4" />
              </Toolbar.Button>
              <Toolbar.Button aria-label="Underline">
                <IconUnderline className="size-4" />
              </Toolbar.Button>
            </Toolbar.Group>
            <Toolbar.Separator />
            <Toolbar.Input placeholder="Interdimensional URL..." />
          </Toolbar.Root>
        </Card>

        {/* Tooltip */}
        <Card title="Tooltip" href="/tooltip">
          <Tooltip.Provider>
            <div className="flex items-center gap-3">
              <Tooltip.Root>
                <Tooltip.Trigger render={<Button variant="outline" />}>
                  Rick
                </Tooltip.Trigger>
                <Tooltip.Popup>Genius scientist</Tooltip.Popup>
              </Tooltip.Root>
              <Tooltip.Root>
                <Tooltip.Trigger render={<Button variant="outline" />}>
                  Morty
                </Tooltip.Trigger>
                <Tooltip.Popup variant="inverted">Anxious sidekick</Tooltip.Popup>
              </Tooltip.Root>
            </div>
          </Tooltip.Provider>
        </Card>
      </div>
    </div>
  )
}
