import {
  Accordion,
} from "@/components/ui/accordion"
import { Code } from "@/components/ui/code"

export function AccordionDemo() {
  return (
    <div className="max-w-md space-y-8">
      <div>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Default (single)</h3>
        <Accordion.Root defaultValue={["item-1"]}>
          <Accordion.Item value="item-1">
            <Accordion.Header>
              <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel>
              Yes. It adheres to the WAI-ARIA design pattern and supports keyboard navigation.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Header>
              <Accordion.Trigger>Is it styled?</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel>
              Yes. It comes with default styles that match the design system and can be customized.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="item-3">
            <Accordion.Header>
              <Accordion.Trigger>Is it animated?</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel>
              Yes. It uses CSS transitions for smooth open/close animations.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      <div>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Multiple</h3>
        <Accordion.Root multiple defaultValue={["item-1", "item-2"]}>
          <Accordion.Item value="item-1">
            <Accordion.Header>
              <Accordion.Trigger>First section</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel>
              Multiple panels can be open at the same time.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="item-2">
            <Accordion.Header>
              <Accordion.Trigger>Second section</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel>
              This one starts open too.
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="item-3">
            <Accordion.Header>
              <Accordion.Trigger>Third section</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Panel>
              Click to expand.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion.Root>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Anatomy</h3>
        <Code>{`<Accordion.Root>
  <Accordion.Item>
    <Accordion.Header>
      <Accordion.Trigger />
    </Accordion.Header>
    <Accordion.Panel />
  </Accordion.Item>
</Accordion.Root>`}</Code>
      </div>
    </div>
  )
}
