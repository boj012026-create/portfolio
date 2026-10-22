import { createContext, useState, useRef, useEffect } from 'react'

export const ThemeContext = createContext({})

export function ThemeProvider({ children }: { children: React.ReactNode}) {
  const THEME =  {
    LIGHT: "light",
    DARK: "dark"
  }
  const [theme, setTheme] = useState(THEME.LIGHT)
  const prevThemeRef = useRef(theme)

  function toggleTheme() {
    const root = document.documentElement
    if (theme == THEME.LIGHT) {
      setTheme(THEME.DARK)
    } else if (THEME.DARK) {
      setTheme(THEME.LIGHT)
    }
    root.classList.remove(scheme(prevThemeRef.current))
    root.classList.add(scheme(theme))
    prevThemeRef.current = theme
  }
  /**
   * returns 'scheme-" in front of @title 
   */
  function scheme(title: string) {
    return `scheme-${title}`
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
