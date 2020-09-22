import { atom } from 'recoil'
import { CurrentThemeType } from '../models/CurrentThemeType'

const getLocalStorageTheme =
  window.localStorage.getItem('theme') === 'darkTheme' || 'darkTheme'

const shareVariablesTheme = {
  primary: '#ea291e'
}

export const currentThemeState = atom({
  key: 'CurrentTheme',
  default: (getLocalStorageTheme
    ? 'darkTheme'
    : 'lightTheme') as CurrentThemeType
})

export const darkThemeState = atom({
  key: 'DarkTheme',
  default: {
    background: '#000',
    text: '#fff',
    ...shareVariablesTheme
  }
})

export const lightThemeState = atom({
  key: 'LightTheme',
  default: {
    background: '#fff',
    text: '#000',
    ...shareVariablesTheme
  }
})
