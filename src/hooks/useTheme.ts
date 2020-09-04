import { useState, useEffect } from 'react'
import { createGlobalStyle, DefaultTheme } from 'styled-components'
import { normalize } from 'styled-normalize'
import { CurrentThemeType } from '../models/CurrentThemeType'

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

const shareVariablesTheme = {
  primary: '#ea291e'
}

const getLocalStorageTheme =
  window.localStorage.getItem('theme') === 'darkTheme'

export const useTheme = () => {
  const [darkTheme, setDarkTheme] = useState<DefaultTheme>({
    background: '#000',
    text: '#fff',
    ...shareVariablesTheme
  })
  const [lightTheme, setLightTheme] = useState<DefaultTheme>({
    background: '#fff',
    text: '#000',
    ...shareVariablesTheme
  })

  const [currentTheme, setCurrentTheme] = useState<CurrentThemeType>(
    getLocalStorageTheme ? 'darkTheme' : 'lightTheme'
  )

  useEffect(() => {
    window.localStorage.setItem('theme', currentTheme)
  }, [currentTheme])

  return { currentTheme, setCurrentTheme, GlobalStyle, darkTheme, lightTheme }
}
