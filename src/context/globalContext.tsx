import React from 'react'
import { ThemeProvider } from './themeContext'
import { CursorProvider } from './cursorContext'

export const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <CursorProvider>{children}</CursorProvider>
    </ThemeProvider>
  )
}
