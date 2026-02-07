"use client"

import { PreviewCard } from "@/components/ui/preview-card"
import { Avatar } from "@/components/ui/avatar"
import { Code } from "@/components/ui/code"

export function PreviewCardDemo() {
  return (
    <div className="space-y-8">
      <p className="text-sm">
        Built by{" "}
        <PreviewCard.Root>
          <PreviewCard.Trigger href="https://github.com/vercel">
            Vercel
          </PreviewCard.Trigger>
          <PreviewCard.Popup>
            <div className="flex flex-col gap-3">
              <Avatar.Root className="size-12">
                <Avatar.Image src="https://github.com/vercel.png" alt="Vercel" />
                <Avatar.Fallback>V</Avatar.Fallback>
              </Avatar.Root>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium">Vercel</p>
                <p className="text-sm text-muted-foreground">
                  Develop. Preview. Ship. Creators of Next.js.
                </p>
              </div>
            </div>
          </PreviewCard.Popup>
        </PreviewCard.Root>
        {" "}and the open source community.
      </p>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<PreviewCard.Root>
  <PreviewCard.Trigger />
  <PreviewCard.Popup />
</PreviewCard.Root>`}</Code>
      </div>
    </div>
  )
}
