import { AlertDialog } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Code } from "@/components/ui/code"

export function AlertDialogDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <AlertDialog.Root>
        <AlertDialog.Trigger render={<Button variant="outline" />}>
          Delete Account
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>
            <AlertDialog.Title>Are you sure?</AlertDialog.Title>
            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialog.Description>
            <div className="mt-6 flex justify-end gap-3">
              <AlertDialog.Close render={<Button variant="outline" />}>
                Cancel
              </AlertDialog.Close>
              <AlertDialog.Close render={<Button variant="destructive" />}>
                Delete
              </AlertDialog.Close>
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>

      <AlertDialog.Root>
        <AlertDialog.Trigger render={<Button variant="secondary" />}>
          Confirm Action
        </AlertDialog.Trigger>
        <AlertDialog.Portal>
          <AlertDialog.Backdrop />
          <AlertDialog.Popup>
            <AlertDialog.Title>Confirm changes</AlertDialog.Title>
            <AlertDialog.Description>
              Are you sure you want to save these changes? You can always update
              them later.
            </AlertDialog.Description>
            <div className="mt-6 flex justify-end gap-3">
              <AlertDialog.Close render={<Button variant="ghost" />}>
                Cancel
              </AlertDialog.Close>
              <AlertDialog.Close render={<Button />}>
                Confirm
              </AlertDialog.Close>
            </div>
          </AlertDialog.Popup>
        </AlertDialog.Portal>
      </AlertDialog.Root>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<AlertDialog.Root>
  <AlertDialog.Trigger />
  <AlertDialog.Portal>
    <AlertDialog.Backdrop />
    <AlertDialog.Popup>
      <AlertDialog.Title />
      <AlertDialog.Description />
      <AlertDialog.Close />
    </AlertDialog.Popup>
  </AlertDialog.Portal>
</AlertDialog.Root>`}</Code>
      </div>
    </div>
  )
}
