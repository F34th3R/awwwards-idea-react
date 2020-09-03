import React, { createContext, useContext, useReducer } from 'react'
import { ThemeProvider } from './themeProvider'
import { globalReducer, ActionI, StateI } from '../reducer/globalReducer'

const GlobalStateContext = createContext<StateI>({} as StateI)
const GlobalDispatchContext = createContext<React.Dispatch<ActionI> | null>(
  null
)

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, {
    currentTheme:
      window.localStorage.getItem('theme') === null
        ? 'dark'
        : window.localStorage.getItem('theme'),
    cursorType: false,
    cursorStyles: ['pointer', 'hovered', 'locked', 'white']
  })

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        <ThemeProvider>{children}</ThemeProvider>
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  )
}

export const useGlobalStateContext = () => useContext(GlobalStateContext)
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
