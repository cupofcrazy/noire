'use client'

import { useTheme } from 'next-themes'
import { IconSun, IconMoon } from 'central-icons'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  function handleThemeToggle() {
    setTheme(theme === 'dark' ? 'light' : 'dark')
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }

  return (
    <button onClick={handleThemeToggle}>
      {theme === 'dark' ? <IconSun className="size-4" /> : <IconMoon className="size-4" />}
    </button>
  )
}