import {
  IconBarsThree,
  IconTriangleExclamation,
  IconQuickSearch,
  IconCirclePerson,
  IconTag,
  IconCursorClick,
  IconSquareCheck,
  IconExpandSimple,
  IconCursorList,
  IconBubbleDots,
  IconWindow,
  IconInputForm,
  IconGroup1,
  IconClipboard,
  IconTextEdit,
  IconListBullets,
  IconLayoutTopbar,
  IconGauge,
  IconHashtag,
  IconBubble2,
  IconEyeOpen,
  IconLoadingCircle,
  IconCircleRecord,
  IconMouseScrollDown,
  IconChevronDownMedium,
  IconSettingsSliderHor,
  IconToggle,
  IconBarsTwo,
  IconPushTheButton,
  IconToolbox,
  IconBubbleAnnotation2,
} from "central-icons"

import { AccordionDemo } from "./accordion"
import { AlertDialogDemo } from "./alert-dialog"
import { AutocompleteDemo } from "./autocomplete"
import { AvatarDemo } from "./avatar"
import { BadgeDemo } from "./badge"
import { ButtonDemo } from "./button"
import { CheckboxDemo } from "./checkbox"
import { ComboboxDemo } from "./combobox"
import { CollapsibleDemo } from "./collapsible"
import { ContextMenuDemo } from "./context-menu"
import { DialogDemo } from "./dialog"
import { FieldDemo } from "./field"
import { FieldsetDemo } from "./fieldset"
import { FormDemo } from "./form"
import { InputDemo } from "./input"
import { MenuDemo } from "./menu"
import { MenubarDemo } from "./menubar"
import { MeterDemo } from "./meter"
import { NumberFieldDemo } from "./number-field"
import { PopoverDemo } from "./popover"
import { PreviewCardDemo } from "./preview-card"
import { RadioDemo } from "./radio"
import { ScrollAreaDemo } from "./scroll-area"
import { SelectDemo } from "./select"
import { SliderDemo } from "./slider"
import { SwitchDemo } from "./switch"
import { TabsDemo } from "./tabs"
import { ToggleDemo } from "./toggle"
import { ToolbarDemo } from "./toolbar"
import { TooltipDemo } from "./tooltip"
import { ProgressDemo } from "./progress"

type Demo = {
  id: string
  title: string
  component: React.ComponentType
  icon: React.ComponentType<{ className?: string }>
}

export const demos: Demo[] = [
  { id: "accordion", title: "Accordion", component: AccordionDemo, icon: IconBarsThree },
  { id: "alert-dialog", title: "Alert Dialog", component: AlertDialogDemo, icon: IconTriangleExclamation },
  { id: "autocomplete", title: "Autocomplete", component: AutocompleteDemo, icon: IconQuickSearch },
  { id: "avatar", title: "Avatar", component: AvatarDemo, icon: IconCirclePerson },
  { id: "badge", title: "Badge", component: BadgeDemo, icon: IconTag },
  { id: "button", title: "Button", component: ButtonDemo, icon: IconCursorClick },
  { id: "checkbox", title: "Checkbox", component: CheckboxDemo, icon: IconSquareCheck },
  { id: "collapsible", title: "Collapsible", component: CollapsibleDemo, icon: IconExpandSimple },
  { id: "combobox", title: "Combobox", component: ComboboxDemo, icon: IconCursorList },
  { id: "context-menu", title: "Context Menu", component: ContextMenuDemo, icon: IconBubbleDots },
  { id: "dialog", title: "Dialog", component: DialogDemo, icon: IconWindow },
  { id: "field", title: "Field", component: FieldDemo, icon: IconInputForm },
  { id: "fieldset", title: "Fieldset", component: FieldsetDemo, icon: IconGroup1 },
  { id: "form", title: "Form", component: FormDemo, icon: IconClipboard },
  { id: "input", title: "Input", component: InputDemo, icon: IconTextEdit },
  { id: "menu", title: "Menu", component: MenuDemo, icon: IconListBullets },
  { id: "menubar", title: "Menubar", component: MenubarDemo, icon: IconLayoutTopbar },
  { id: "meter", title: "Meter", component: MeterDemo, icon: IconGauge },
  { id: "number-field", title: "Number Field", component: NumberFieldDemo, icon: IconHashtag },
  { id: "popover", title: "Popover", component: PopoverDemo, icon: IconBubble2 },
  { id: "preview-card", title: "Preview Card", component: PreviewCardDemo, icon: IconEyeOpen },
  { id: "progress", title: "Progress", component: ProgressDemo, icon: IconLoadingCircle },
  { id: "radio", title: "Radio", component: RadioDemo, icon: IconCircleRecord },
  { id: "scroll-area", title: "Scroll Area", component: ScrollAreaDemo, icon: IconMouseScrollDown },
  { id: "select", title: "Select", component: SelectDemo, icon: IconChevronDownMedium },
  { id: "slider", title: "Slider", component: SliderDemo, icon: IconSettingsSliderHor },
  { id: "switch", title: "Switch", component: SwitchDemo, icon: IconToggle },
  { id: "tabs", title: "Tabs", component: TabsDemo, icon: IconBarsTwo },
  { id: "toggle", title: "Toggle", component: ToggleDemo, icon: IconPushTheButton },
  { id: "toolbar", title: "Toolbar", component: ToolbarDemo, icon: IconToolbox },
  { id: "tooltip", title: "Tooltip", component: TooltipDemo, icon: IconBubbleAnnotation2 },
]