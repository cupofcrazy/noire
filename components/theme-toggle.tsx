'use client'

import { useTheme } from 'next-themes'
import { IconSun, IconMoon } from 'central-icons'
import { AnimatePresence, motion } from 'motion/react'

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
    <button className="size-8 grid place-items-center rounded-sm" onClick={handleThemeToggle}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={theme === 'dark' ? 'sun' : 'moon'}
          initial={{ opacity: 0, scale: 0.6, filter: "blur(2px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.6, filter: "blur(2px)" }}
          transition={{ duration: 0.15, ease: "easeInOut" }}
        >
      {theme === 'dark' ? <IconSun className="size-4" /> : <IconMoon className="size-4" />}
        </motion.div>
      </AnimatePresence>
    </button>
  )
}