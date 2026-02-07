# Noire

A Next.js 16 component playground built on [Base UI](https://base-ui.com) primitives with Tailwind CSS v4.

## Getting Started

```bash
pnpm install
pnpm dev        # http://localhost:1000
```

## Scripts

| Command      | Description          |
| ------------ | -------------------- |
| `pnpm dev`   | Dev server (port 1000) |
| `pnpm build` | Production build     |
| `pnpm lint`  | ESLint               |

## Components

All UI components live in `components/ui/` and are built on `@base-ui/react` with `cva` for variant management.

| Component | Description |
| --- | --- |
| Accordion | Expandable content sections |
| Alert Dialog | Modal confirmation dialogs |
| Autocomplete | Text input with filtered suggestions |
| Avatar | User profile images with fallbacks |
| Badge | Status labels and counts |
| Button | Actions with variant/size options |
| Checkbox | Toggle selections |
| Collapsible | Show/hide content regions |
| Combobox | Searchable select dropdown |
| Context Menu | Right-click menus |
| Dialog | Modal overlays |
| Field | Form field with label, description, error |
| Fieldset | Grouped form fields |
| Form | Form wrapper with validation |
| Input | Text input with `border`, `accent`, `ghost` variants and icon support via `InputGroup`/`InputIcon` |
| Menu | Dropdown action menus |
| Menubar | Horizontal menu bar |
| Meter | Value within a known range |
| Number Field | Numeric input with stepper |
| Popover | Floating content panels |
| Preview Card | Hover preview cards |
| Progress | Determinate progress bars |
| Radio | Single-select option groups |
| Scroll Area | Custom scrollbar regions |
| Select | Native-style dropdowns |
| Slider | Range value selection |
| Switch | On/off toggles |
| Tabs | Tabbed content panels |
| Toggle | Pressed/unpressed buttons |
| Toolbar | Grouped action controls |
| Tooltip | Hover information tips |

### Patterns

- **Compound components** use namespace exports: `Accordion.Root`, `Accordion.Item`, etc.
- **`data-slot`** attributes on every element for styling hooks.
- **`cn()`** utility (from `lib/utils.ts`) merges Tailwind classes via `tailwind-merge` + `clsx`.
- **Icons** from `central-icons` are prefixed with `Icon` (e.g., `IconChevronBottom`).

### Input with Icons

Wrap an `Input` with `InputGroup` and place `InputIcon` before and/or after it:

```tsx
import { Input, InputGroup, InputIcon } from "@/components/ui/input"
import { IconQuickSearch } from "central-icons"

<InputGroup>
  <InputIcon><IconQuickSearch className="size-4" /></InputIcon>
  <Input placeholder="Search..." />
</InputGroup>
```

## Demo System

Each component has a demo in `demos/` registered in `demos/index.ts`. Navigate to `/{id}` to view any demo (e.g., `/input`, `/button`).

To add a new demo:

1. Create the component in `components/ui/`
2. Create a demo file in `demos/`
3. Register it in `demos/index.ts`

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Base UI** (`@base-ui/react`)
- **class-variance-authority** (aliased as `cva`)
- **next-themes** for light/dark mode
- **Motion** for animations
