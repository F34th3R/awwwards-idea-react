import React from 'react'
import { ThemeProvider } from './themeContext'
import { CursorProvider } from './cursorContext'
import { WindowSizeProvider } from './windowSizeContext'
import { MenuProvider } from './menuContext'

export const GlobalProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider>
      <WindowSizeProvider>
        <CursorProvider>
          <MenuProvider>{children}</MenuProvider>
        </CursorProvider>
      </WindowSizeProvider>
    </ThemeProvider>
  )
}
