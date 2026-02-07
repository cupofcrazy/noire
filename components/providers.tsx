import { ThemeProvider } from "next-themes"
import { Tooltip } from "@/components/ui/tooltip"

type ProvidersProps = {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </>
  )
}