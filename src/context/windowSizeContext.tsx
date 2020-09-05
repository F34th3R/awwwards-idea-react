import React, { createContext, useContext } from 'react'
import { windowSizeType, useWindowSize } from '../hooks/useWindowSize'

interface WindowSizeContextProps {
  windowSize: windowSizeType
}

export const WindowSizeContext = createContext<WindowSizeContextProps>(
  {} as WindowSizeContextProps
)

export const WindowSizeProvider: React.FC = ({ children }) => {
  const windowSize = useWindowSize()
  return (
    <WindowSizeContext.Provider value={{ windowSize }}>
      {children}
    </WindowSizeContext.Provider>
  )
}

export const useWindowSizeValues = () => useContext(WindowSizeContext)
