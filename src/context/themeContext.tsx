import React, { createContext, useContext } from 'react'
import { ThemeProvider as ThemeProviderStyled } from 'styled-components'

import { useTheme } from '../hooks/useTheme'
import { CurrentThemeType } from '../models/CurrentThemeType'

type ThemeContextType = {
  currentTheme: CurrentThemeType
  setCurrentTheme: React.Dispatch<React.SetStateAction<CurrentThemeType>>
}

export const ThemeContext = createContext<ThemeContextType>(
  {} as ThemeContextType
)

export const ThemeProvider: React.FC = ({ children }) => {
  const {
    currentTheme,
    setCurrentTheme,
    darkTheme,
    lightTheme,
    GlobalStyle
  } = useTheme()

  return (
    <ThemeContext.Provider value={{ setCurrentTheme, currentTheme }}>
      <ThemeProviderStyled
        theme={currentTheme === 'darkTheme' ? darkTheme : lightTheme}
      >
        <GlobalStyle />
        {children}
      </ThemeProviderStyled>
    </ThemeContext.Provider>
  )
}

export const useThemeValues = () => useContext(ThemeContext)
