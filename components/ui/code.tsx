import { cn } from "@/lib/utils"

function Code({ className, children, ...props }: React.ComponentProps<"pre">) {
  return (
    <pre
      data-slot="code"
      className={cn(
        "overflow-x-auto rounded-md border border-border bg-muted/50 p-4 font-mono text-sm text-foreground",
        className
      )}
      {...props}
    >
      <code data-slot="code-content">{children}</code>
    </pre>
  )
}

export { Code }
