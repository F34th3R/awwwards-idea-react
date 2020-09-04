import React, { createContext, useContext } from 'react'
import { useCursor } from '../hooks/useCursor'
import {
  CursorTypeT,
  CursorStylesType,
  onCursorType
} from '../models/CursorType'

type CursorContextType = {
  cursorType: CursorTypeT
  setCursorType: React.Dispatch<React.SetStateAction<CursorTypeT>>
  cursorStyles: CursorStylesType
  setCursorStyles: React.Dispatch<React.SetStateAction<CursorStylesType>>
  onCursor: onCursorType
}

export const CursorContext = createContext<CursorContextType>(
  {} as CursorContextType
)

export const CursorProvider: React.FC = ({ children }) => {
  const {
    cursorType,
    setCursorType,
    cursorStyles,
    setCursorStyles,
    onCursor
  } = useCursor()

  return (
    <CursorContext.Provider
      value={{
        cursorType,
        setCursorType,
        cursorStyles,
        setCursorStyles,
        onCursor
      }}
    >
      {children}
    </CursorContext.Provider>
  )
}

export const useCursorValues = () => useContext(CursorContext)
