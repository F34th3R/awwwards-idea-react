import React from 'react'
import { useRecoilValue } from 'recoil'
import { normalize } from 'styled-normalize'
import {
  ThemeProvider as ThemeProviderStyled,
  createGlobalStyle
} from 'styled-components'
import { currentThemeState, darkThemeState, lightThemeState } from '../states'

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    cursor: none;
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

export const ThemeProvider: React.FC = ({ children }) => {
  const currentThemeValue = useRecoilValue(currentThemeState)
  const darkThemeValue = useRecoilValue(darkThemeState)
  const lightThemeValue = useRecoilValue(lightThemeState)

  return (
    <ThemeProviderStyled
      theme={
        currentThemeValue === 'darkTheme' ? darkThemeValue : lightThemeValue
      }
    >
      <GlobalStyle />
      {children}
    </ThemeProviderStyled>
  )
}
