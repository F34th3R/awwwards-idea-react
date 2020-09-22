import React from 'react'
import { ThemeProvider } from './themeContext'
import { CursorProvider } from './cursorContext'
import { WindowSizeProvider } from './windowSizeContext'

export const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <WindowSizeProvider>
        <CursorProvider>{children}</CursorProvider>
      </WindowSizeProvider>
    </ThemeProvider>
  )
}
