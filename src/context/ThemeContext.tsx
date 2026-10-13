import { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext({})

export function ThemeProvider({ children }: { children: React.ReactNode}) {
  const THEME =  {
    LIGHT: "light",
    DARK: "dark"
  }
  const [theme, setTheme] = useState(THEME.LIGHT)

  function toggleTheme() {
    if (theme == THEME.LIGHT) {
      setTheme(THEME.DARK)
    } else if (THEME.DARK) {
      setTheme(THEME.LIGHT)
    }
  }

  useEffect( () => {
    const root = document.documentElement
    root.style.setProperty('color-scheme', theme)
  }, [theme])

  const ProviderObj = { theme, toggleTheme };
  return (
    <ThemeContext value={ProviderObj}>{children}</ThemeContext>
  )
}
