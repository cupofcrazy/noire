import { Input, InputGroup, InputIcon } from "@/components/ui/input"
import { Code } from "@/components/ui/code"
import { IconQuickSearch, IconEmail1, IconLock, IconCirclePerson } from "central-icons"

export function InputDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Variants</p>
        <div className="flex flex-col gap-3">
          <Input placeholder="Border (default)" variant="border" />
          <Input placeholder="Accent" variant="accent" />
          <Input placeholder="Ghost" variant="ghost" />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Rounded</p>
        <div className="flex flex-col gap-3">
          <Input placeholder="rounded-md (default)" rounded="default" />
          <Input placeholder="rounded-full" rounded="full" />
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">With Icons</p>
        <div className="flex flex-col gap-3">
          <InputGroup>
            <InputIcon><IconQuickSearch className="size-4" /></InputIcon>
            <Input placeholder="Search..." />
          </InputGroup>
          <InputGroup>
            <InputIcon><IconEmail1 className="size-4" /></InputIcon>
            <Input placeholder="Email" type="email" />
          </InputGroup>
          <InputGroup>
            <InputIcon><IconLock className="size-4" /></InputIcon>
            <Input placeholder="Password" type="password" />
          </InputGroup>
          <InputGroup>
            <InputIcon><IconCirclePerson className="size-4" /></InputIcon>
            <Input placeholder="Username" rounded="full" />
          </InputGroup>
          <InputGroup>
            <InputIcon><IconQuickSearch className="size-4" /></InputIcon>
            <Input placeholder="With trailing icon" />
            <InputIcon><IconCirclePerson className="size-4" /></InputIcon>
          </InputGroup>
        </div>
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">States</p>
        <div className="flex flex-col gap-3">
          <Input placeholder="Disabled" disabled />
          <Input placeholder="With value" defaultValue="Some text" />
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<InputGroup>
  <InputIcon><IconSearch /></InputIcon>
  <Input placeholder="Search..." />
</InputGroup>`}</Code>
      </div>
    </div>
  )
}
