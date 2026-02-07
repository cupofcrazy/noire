import { Button } from "@/components/ui/button"
import { Code } from "@/components/ui/code"

export function ButtonDemo() {
  return (
    <div>
      <div className="flex flex-row flex-wrap gap-2">
        <Button>Ask anything</Button>
        <Button variant="secondary">Ask anything</Button>
        <Button variant="outline">Ask anything</Button>
        <Button variant="ghost">Ask anything</Button>
        <Button variant="destructive">Ask anything</Button>
        <Button variant="link">Ask anything</Button>
        <Button variant="outline" shadow="xs">Ask anything</Button>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Button />`}</Code>
      </div>
    </div>
  )
}