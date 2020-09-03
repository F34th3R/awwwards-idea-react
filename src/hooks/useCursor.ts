import { useState } from 'react'
import { CursorTypeT, CursorStylesType } from '../models/CursorType'

export const useCursor = () => {
  const [cursorType, setCursorType] = useState<CursorTypeT>(false)
  const [cursorStyles, setCursorStyles] = useState<CursorStylesType>([
    'pointer',
    'hovered',
    'locked',
    'white'
  ])

  return { cursorType, setCursorType, cursorStyles, setCursorStyles }
}
