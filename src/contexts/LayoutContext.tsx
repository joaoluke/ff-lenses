import { createContext, useState, useEffect, ReactNode } from 'react'

interface LayoutContextType {
  isMobile: boolean
  theme: 'light' | 'dark'
  mobileMenuOpen: boolean
  categories: string[]
  setTheme: (theme: 'light' | 'dark') => void
  setMobileMenuOpen: (value: boolean) => void
}

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined,
)

export function LayoutProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const categories = [
    'Lentes Coloridas',
    'Lentes para Miopia',
    'Lentes para Hipermetropia',
    'Lentes para Astigmatismo',
    'Lentes Multifocais',
    'Soluções de Limpeza',
  ]

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <LayoutContext.Provider
      value={{
        isMobile,
        mobileMenuOpen,
        theme,
        categories,
        setTheme,
        setMobileMenuOpen,
      }}
    >
      {children}
    </LayoutContext.Provider>
  )
}
