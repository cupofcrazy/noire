import { Badge } from "@/components/ui/badge"
import { Code } from "@/components/ui/code"

export function BadgeDemo() {
  return (
    <div className="space-y-8">
      <div className="flex flex-row flex-wrap gap-2">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="info">Info</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Badge />`}</Code>
      </div>
    </div>
  )
}
