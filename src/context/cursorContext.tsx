import React, { createContext, useContext } from 'react'
import { useCursor } from '../hooks/useCursor'
import { CursorTypeT, CursorStylesType } from '../models/CursorType'

type CursorContextType = {
  cursorType: CursorTypeT
  setCursorType: React.Dispatch<React.SetStateAction<CursorTypeT>>
  cursorStyles: CursorStylesType
  setCursorStyles: React.Dispatch<React.SetStateAction<CursorStylesType>>
}

export const CursorContext = createContext<CursorContextType>(
  {} as CursorContextType
)

export const CursorProvider: React.FC = ({ children }) => {
  const {
    cursorType,
    setCursorType,
    cursorStyles,
    setCursorStyles
  } = useCursor()

  return (
    <CursorContext.Provider
      value={{ cursorType, setCursorType, cursorStyles, setCursorStyles }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export const useCursorValues = () => useContext(CursorContext)
