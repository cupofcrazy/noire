import { ThemeProvider } from "next-themes"
import { Tooltip } from "@/components/ui/tooltip"
import { RadiusProvider } from "@/components/radius-control"

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <RadiusProvider>
        {children}
      </RadiusProvider>
    </ThemeProvider>
  )
}