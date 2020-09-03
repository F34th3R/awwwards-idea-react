import React from 'react'
import {
  createGlobalStyle,
  ThemeProvider as ThemeProviderStyled
} from 'styled-components'

import { normalize } from 'styled-normalize'
import { useGlobalStateContext } from './globalContext'

const GlobalStyle = createGlobalStyle`
${normalize}
* {
  text-decoration: none;
  // cursor: none;
}
html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  font-size: 16px;
}
body {
  font-size: 16px;
  font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background: ${props => props.theme.background};
  color: ${props => props.theme.text};
  overscroll-behavior: none;
  overflow-x: hidden;
}
`

const shareVariablesTheme = {
  primary: '#ea291e'
}

export const ThemeProvider: React.FC = ({ children }) => {
  const { currentTheme } = useGlobalStateContext()

  const darkTheme = {
    background: '#000',
    text: '#fff',
    ...shareVariablesTheme
  }
  const lightTheme = {
    background: '#fff',
    text: '#000',
    ...shareVariablesTheme
  }

  return (
    <ThemeProviderStyled
      theme={currentTheme === 'dark' ? darkTheme : lightTheme}
    >
      <GlobalStyle />
      {children}
    </ThemeProviderStyled>
  )
}
