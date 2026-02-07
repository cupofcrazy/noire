import { Avatar } from "@/components/ui/avatar"
import { Code } from "@/components/ui/code"

export function AvatarDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">With image</p>
        <div className="flex items-center gap-3">
          <Avatar.Root size="sm">
            <Avatar.Image src="https://i.pravatar.cc/64?img=1" alt="User" />
            <Avatar.Fallback>U</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root>
            <Avatar.Image src="https://i.pravatar.cc/64?img=2" alt="User" />
            <Avatar.Fallback>U</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root size="lg">
            <Avatar.Image src="https://i.pravatar.cc/128?img=3" alt="User" />
            <Avatar.Fallback>U</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root size="xl">
            <Avatar.Image src="https://i.pravatar.cc/128?img=4" alt="User" />
            <Avatar.Fallback>U</Avatar.Fallback>
          </Avatar.Root>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Fallback initials</p>
        <div className="flex items-center gap-3">
          <Avatar.Root size="sm">
            <Avatar.Fallback>A</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root>
            <Avatar.Fallback>JD</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root size="lg">
            <Avatar.Fallback>MK</Avatar.Fallback>
          </Avatar.Root>
          <Avatar.Root size="xl">
            <Avatar.Fallback>OB</Avatar.Fallback>
          </Avatar.Root>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Broken image (shows fallback)</p>
        <Avatar.Root>
          <Avatar.Image src="/broken-image.jpg" alt="Broken" />
          <Avatar.Fallback>??</Avatar.Fallback>
        </Avatar.Root>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Avatar.Root>
  <Avatar.Image />
  <Avatar.Fallback />
</Avatar.Root>`}</Code>
      </div>
    </div>
  )
}
