# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server on port 1000
pnpm build        # Production build
pnpm lint         # Run ESLint
```

## Architecture

This is a Next.js 16 component demo/playground app using the App Router. It showcases UI components built on top of Base UI primitives with Tailwind CSS v4 styling.

### Key Patterns

**UI Components** (`components/ui/`): Built on `@base-ui/react` primitives with `cva` (class-variance-authority) for variant management. Components use the `cn()` utility from `lib/utils.ts` to merge Tailwind classes.

- Compound components use namespace exports: `export const Accordion = { Root, Item, Header, ... }`
- Usage: `<Accordion.Root>`, `<Accordion.Item>`, etc.
- All components include `data-slot` attributes for styling hooks
- Icons from `central-icons` use the `Icon` prefix (e.g., `IconChevronBottom`)

**Demo System**: Components are showcased via a demo registry:
- `demos/index.ts` exports a `demos` array with `{ id, title, component }` entries
- `app/[id]/page.tsx` dynamically renders demos based on URL
- `components/sidebar.tsx` generates navigation from the demos array

To add a new component demo:
1. Create the component in `components/ui/`
2. Create a demo file in `demos/` (e.g., `demos/mycomponent.tsx`)
3. Export the demo from `demos/index.ts`

**Theming**: Uses `next-themes` with CSS custom properties defined in `styles/globals.css`. The design system includes semantic colors (background, foreground, primary, etc.) with light/dark mode variants applied via `.dark` class.

### Package Aliases

- `cva` → `class-variance-authority`
- `central-icons` → `@central-icons-react/round-outlined-radius-2-stroke-1.5`

### Path Alias

`@/*` maps to the project root.
