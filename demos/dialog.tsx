"use client"

import { Button } from "@/components/ui/button"
import { Code } from "@/components/ui/code"
import { Dialog } from "@/components/ui/dialog"

export function DialogDemo() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Basic</p>
        <Dialog.Root>
          <Dialog.Trigger render={<Button variant="outline">Open dialog</Button>} />
          <Dialog.Popup>
            <Dialog.Close />
            <Dialog.Title>Are you sure?</Dialog.Title>
            <Dialog.Description>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </Dialog.Description>
            <div className="mt-6 flex justify-end gap-3">
              <Dialog.Close render={<Button variant="outline">Cancel</Button>} />
              <Dialog.Close render={<Button variant="destructive">Delete</Button>} />
            </div>
          </Dialog.Popup>
        </Dialog.Root>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Dialog.Root>
  <Dialog.Trigger />
  <Dialog.Popup>
    <Dialog.Title />
    <Dialog.Description />
    <Dialog.Close />
  </Dialog.Popup>
</Dialog.Root>`}</Code>
      </div>
    </div>
  )
}
